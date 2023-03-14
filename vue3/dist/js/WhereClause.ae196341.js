import { fd as Xu, d5 as eo, w as _t } from "./index.8fd7165c.js";
import { i as $t } from "./executionError.fb3f283a.js";
const Lt = {
  min: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.min.apply(Math, i[0])),
  },
  max: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.max.apply(Math, i[0])),
  },
  avg: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : qt(i[0])),
  },
  sum: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) =>
      i[0] == null
        ? null
        : (function (o) {
            let u = 0;
            for (let c = 0; c < o.length; c++) u += o[c];
            return u;
          })(i[0]),
  },
  stddev: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.sqrt(Mt(i[0]))),
  },
  count: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : i[0].length),
  },
  var: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Mt(i[0])),
  },
};
function qt(i) {
  let o = 0;
  for (let u = 0; u < i.length; u++) o += i[u];
  return o / i.length;
}
function Mt(i) {
  const o = qt(i),
    u = i.length;
  let c = 0;
  for (const v of i) c += (v - o) ** 2;
  return u > 1 ? c / (u - 1) : 0;
}
var M;
(function (i) {
  (i.InvalidFunctionParameters = "InvalidFunctionParameters"),
    (i.UnsupportedSqlFunction = "UnsupportedSqlFunction"),
    (i.UnsupportedOperator = "UnsupportedOperator"),
    (i.UnsupportedSyntax = "UnsupportedSyntax"),
    (i.UnsupportedIsRhs = "UnsupportedIsRhs"),
    (i.UnsupportedIsLhs = "UnsupportedIsLhs"),
    (i.InvalidDataType = "InvalidDataType"),
    (i.CannotCastValue = "CannotCastValue"),
    (i.MissingStatisticParameters = "MissingStatisticParameters");
})(M || (M = {}));
const to = {
  [M.MissingStatisticParameters]: "Statistic does not have 1 or 0 Parameters",
  [M.InvalidFunctionParameters]: "Invalid parameters for call to {function}",
  [M.UnsupportedIsLhs]: "Unsupported left hand expression in is statement",
  [M.UnsupportedIsRhs]: "Unsupported right hand expression in is statement",
  [M.UnsupportedOperator]: "Unsupported operator - {operator}",
  [M.UnsupportedSyntax]: "Unsupported syntax - {node}",
  [M.UnsupportedSqlFunction]: "Sql function not found = {function}",
  [M.InvalidDataType]: "Invalid sql data type",
  [M.CannotCastValue]: "Cannot cast value to the required data type",
};
let W = class Vt extends Error {
  constructor(o, u) {
    super($t(to[o], u)),
      (this.declaredRootClass = "esri.arcade.featureset.support.sqlerror"),
      Error.captureStackTrace && Error.captureStackTrace(this, Vt);
  }
};
var O;
(function (i) {
  (i.NeverReach = "NeverReach"),
    (i.NotImplemented = "NotImplemented"),
    (i.Cancelled = "Cancelled"),
    (i.InvalidStatResponse = "InvalidStatResponse"),
    (i.InvalidRequest = "InvalidRequest"),
    (i.RequestFailed = "RequestFailed"),
    (i.MissingFeatures = "MissingFeatures"),
    (i.AggregationFieldNotFound = "AggregationFieldNotFound"),
    (i.DataElementsNotFound = "DataElementsNotFound");
})(O || (O = {}));
const ro = {
  [O.Cancelled]: "Cancelled",
  [O.InvalidStatResponse]: "Invalid statistics response from service",
  [O.InvalidRequest]: "Invalid request",
  [O.RequestFailed]: "Request failed - {reason}",
  [O.MissingFeatures]: "Missing features",
  [O.AggregationFieldNotFound]: "Aggregation field not found",
  [O.DataElementsNotFound]: "Data elements not found on service",
  [O.NeverReach]: "Encountered unreachable logic",
  [O.NotImplemented]: "Not implemented",
};
let fo = class Ht extends Error {
    constructor(o, u) {
      super($t(ro[o], u)),
        (this.declaredRootClass =
          "esri.arcade.featureset.support.featureseterror"),
        Error.captureStackTrace && Error.captureStackTrace(this, Ht);
    }
  },
  V = class U {
    constructor() {
      (this.op = "+"),
        (this.day = 0),
        (this.second = 0),
        (this.hour = 0),
        (this.month = 0),
        (this.year = 0),
        (this.minute = 0),
        (this.millis = 0);
    }
    static _fixDefaults(o) {
      if (o.precision !== null || o.secondary !== null)
        throw new Error(
          "Primary and Secondary SqlInterval qualifiers not supported"
        );
    }
    static _parseSecondsComponent(o, u) {
      if (u.includes(".")) {
        const c = u.split(".");
        (o.second = parseFloat(c[0])), (o.millis = parseInt(c[1], 10));
      } else o.second = parseFloat(u);
    }
    static createFromMilliseconds(o) {
      const u = new U();
      return (u.second = o / 1e3), u;
    }
    static createFromValueAndQualifer(o, u, c) {
      let v = null;
      const e = new U();
      if (((e.op = c === "-" ? "-" : "+"), u.type === "interval-period")) {
        U._fixDefaults(u);
        const y = new RegExp("^[0-9]{1,}$");
        if (u.period === "year" || u.period === "month")
          throw new Error("Year-Month Intervals not supported");
        if (u.period === "second") {
          if (!/^[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$/.test(o))
            throw new Error("Illegal Interval");
          U._parseSecondsComponent(e, o);
        } else {
          if (!y.test(o)) throw new Error("Illegal Interval");
          e[u.period] = parseFloat(o);
        }
      } else {
        if (
          (U._fixDefaults(u.start),
          U._fixDefaults(u.end),
          u.start.period === "year" || u.start.period === "month")
        )
          throw new Error("Year-Month Intervals not supported");
        if (u.end.period === "year" || u.end.period === "month")
          throw new Error("Year-Month Intervals not supported");
        switch (u.start.period) {
          case "day":
            switch (u.end.period) {
              case "hour":
                if (((v = new RegExp("^[0-9]{1,} [0-9]{1,}$")), !v.test(o)))
                  throw new Error("Illegal Interval");
                (e[u.start.period] = parseFloat(o.split(" ")[0])),
                  (e[u.end.period] = parseFloat(o.split(" ")[1]));
                break;
              case "minute":
                if (
                  ((v = new RegExp("^[0-9]{1,} [0-9]{1,2}:[0-9]{1,}$")),
                  !v.test(o))
                )
                  throw new Error("Illegal Interval");
                {
                  e[u.start.period] = parseFloat(o.split(" ")[0]);
                  const y = o.split(" ")[1].split(":");
                  (e.hour = parseFloat(y[0])), (e.minute = parseFloat(y[1]));
                }
                break;
              case "second":
                if (
                  ((v = new RegExp(
                    "^[0-9]{1,} [0-9]{1,2}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"
                  )),
                  !v.test(o))
                )
                  throw new Error("Illegal Interval");
                {
                  e[u.start.period] = parseFloat(o.split(" ")[0]);
                  const y = o.split(" ")[1].split(":");
                  (e.hour = parseFloat(y[0])),
                    (e.minute = parseFloat(y[1])),
                    U._parseSecondsComponent(e, y[2]);
                }
                break;
              default:
                throw new Error("Invalid Interval.");
            }
            break;
          case "hour":
            switch (u.end.period) {
              case "minute":
                if (((v = new RegExp("^[0-9]{1,}:[0-9]{1,}$")), !v.test(o)))
                  throw new Error("Illegal Interval");
                (e.hour = parseFloat(o.split(":")[0])),
                  (e.minute = parseFloat(o.split(":")[1]));
                break;
              case "second":
                if (
                  ((v = new RegExp(
                    "^[0-9]{1,}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"
                  )),
                  !v.test(o))
                )
                  throw new Error("Illegal Interval");
                {
                  const y = o.split(":");
                  (e.hour = parseFloat(y[0])),
                    (e.minute = parseFloat(y[1])),
                    U._parseSecondsComponent(e, y[2]);
                }
                break;
              default:
                throw new Error("Invalid Interval.");
            }
            break;
          case "minute":
            if (u.end.period !== "second") throw new Error("Invalid Interval.");
            if (
              ((v = new RegExp("^[0-9]{1,}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$")),
              !v.test(o))
            )
              throw new Error("Illegal Interval");
            {
              const y = o.split(":");
              (e.minute = parseFloat(y[0])), U._parseSecondsComponent(e, y[1]);
            }
            break;
          default:
            throw new Error("Invalid Interval.");
        }
      }
      return e;
    }
    valueInMilliseconds() {
      return (
        (this.op === "-" ? -1 : 1) *
        (this.millis +
          1e3 * this.second +
          60 * this.minute * 1e3 +
          60 * this.hour * 60 * 1e3 +
          24 * this.day * 60 * 60 * 1e3 +
          this.month * (365 / 12) * 24 * 60 * 60 * 1e3 +
          365 * this.year * 24 * 60 * 60 * 1e3)
      );
    }
  };
function Re(i, o) {
  const u = Bt[i.toLowerCase()];
  if (u == null) throw new Error("Function Not Recognised");
  if (o.length < u.minParams || o.length > u.maxParams)
    throw new Error(`Invalid Parameter count for call to ${i.toUpperCase()}`);
  return u.evaluate(o);
}
function Rt(i) {
  const o = new Date(i.getTime());
  return o.setHours(0, 0, 0, 0), o;
}
function Dt(i, o) {
  if (
    (function (u) {
      return u instanceof Date;
    })(i)
  )
    return o ? Rt(i) : i;
  if (
    (function (u) {
      return typeof u == "string" || u instanceof String;
    })(i)
  ) {
    const u = eo.fromSQL(i);
    if (u.isValid) return o ? Rt(u.toJSDate()) : u.toJSDate();
  }
  throw new W(M.CannotCastValue);
}
const Bt = {
  extract: {
    minParams: 2,
    maxParams: 2,
    evaluate: ([i, o]) => {
      if (o == null) return null;
      if (o instanceof Date)
        switch (i.toUpperCase()) {
          case "SECOND":
            return o.getSeconds();
          case "MINUTE":
            return o.getMinutes();
          case "HOUR":
            return o.getHours();
          case "DAY":
            return o.getDate();
          case "MONTH":
            return o.getMonth() + 1;
          case "YEAR":
            return o.getFullYear();
        }
      throw new Error("Invalid Parameter for call to EXTRACT");
    },
  },
  substring: {
    minParams: 2,
    maxParams: 3,
    evaluate: (i) => {
      if (i.length === 2) {
        const [o, u] = i;
        return o == null || u == null ? null : o.toString().substring(u - 1);
      }
      if (i.length === 3) {
        const [o, u, c] = i;
        return o == null || u == null || c == null
          ? null
          : c <= 0
          ? ""
          : o.toString().substring(u - 1, u + c - 1);
      }
    },
  },
  position: {
    minParams: 2,
    maxParams: 2,
    evaluate: ([i, o]) => (i == null || o == null ? null : o.indexOf(i) + 1),
  },
  trim: {
    minParams: 2,
    maxParams: 3,
    evaluate: (i) => {
      const o = i.length === 3,
        u = o ? i[1] : " ",
        c = o ? i[2] : i[1];
      if (u == null || c == null) return null;
      const v = `(${Xu(u)})`;
      switch (i[0]) {
        case "BOTH":
          return c.replace(new RegExp(`^${v}*|${v}*$`, "g"), "");
        case "LEADING":
          return c.replace(new RegExp(`^${v}*`, "g"), "");
        case "TRAILING":
          return c.replace(new RegExp(`${v}*$`, "g"), "");
      }
      throw new Error("Invalid Parameter for call to TRIM");
    },
  },
  abs: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.abs(i[0])),
  },
  ceiling: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.ceil(i[0])),
  },
  floor: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.floor(i[0])),
  },
  log: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.log(i[0])),
  },
  log10: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.log(i[0]) * Math.LOG10E),
  },
  sin: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.sin(i[0])),
  },
  cos: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.cos(i[0])),
  },
  tan: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.tan(i[0])),
  },
  asin: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.asin(i[0])),
  },
  acos: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.acos(i[0])),
  },
  atan: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.atan(i[0])),
  },
  sign: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : i[0] > 0 ? 1 : i[1] < 0 ? -1 : 0),
  },
  power: {
    minParams: 2,
    maxParams: 2,
    evaluate: (i) => (i[0] == null || i[1] == null ? null : i[0] ** i[1]),
  },
  mod: {
    minParams: 2,
    maxParams: 2,
    evaluate: (i) => (i[0] == null || i[1] == null ? null : i[0] % i[1]),
  },
  round: {
    minParams: 1,
    maxParams: 2,
    evaluate: (i) => {
      const o = i[0],
        u = i.length === 2 ? 10 ** i[1] : 1;
      return o == null ? null : Math.round(o * u) / u;
    },
  },
  truncate: {
    minParams: 1,
    maxParams: 2,
    evaluate: (i) =>
      i[0] == null
        ? null
        : i.length === 1
        ? parseInt(i[0].toFixed(0), 10)
        : parseFloat(i[0].toFixed(i[1])),
  },
  char_length: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) =>
      typeof i[0] == "string" || i[0] instanceof String ? i[0].length : 0,
  },
  concat: {
    minParams: 1,
    maxParams: 1 / 0,
    evaluate: (i) => {
      let o = "";
      for (let u = 0; u < i.length; u++) {
        if (i[u] == null) return null;
        o += i[u].toString();
      }
      return o;
    },
  },
  lower: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : i[0].toString().toLowerCase()),
  },
  upper: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : i[0].toString().toUpperCase()),
  },
  coalesce: {
    minParams: 1,
    maxParams: 1 / 0,
    evaluate: (i) => {
      for (const o of i) if (o !== null) return o;
      return null;
    },
  },
  cosh: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.cosh(i[0])),
  },
  sinh: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.sinh(i[0])),
  },
  tanh: {
    minParams: 1,
    maxParams: 1,
    evaluate: (i) => (i[0] == null ? null : Math.tanh(i[0])),
  },
  nullif: {
    minParams: 2,
    maxParams: 2,
    evaluate: (i) => {
      const o = i[0],
        u = i[1];
      return (o instanceof Date ? o.valueOf() : o) ===
        (u instanceof Date ? u.valueOf() : u)
        ? null
        : o;
    },
  },
  cast: {
    minParams: 2,
    maxParams: 2,
    evaluate: (i) => {
      const o = i[0],
        u = i[1];
      if (o === null) return null;
      switch (u.type) {
        case "integer": {
          const c = parseInt(o, 10);
          if (isNaN(c)) throw new W(M.CannotCastValue);
          return c;
        }
        case "smallint": {
          const c = parseInt(o, 10);
          if (isNaN(c)) throw new W(M.CannotCastValue);
          if (c > 32767 || c < -32767) throw new W(M.CannotCastValue);
          return c;
        }
        case "float":
        case "real": {
          const c = parseFloat(o);
          if (isNaN(c)) throw new W(M.CannotCastValue);
          return c;
        }
        case "date":
          return Dt(o, !0);
        case "timestamp":
          return Dt(o, !1);
        case "varchar": {
          const c = o.toString();
          if (c.length > u.size) throw new W(M.CannotCastValue);
          return c;
        }
        default:
          throw new W(M.InvalidDataType);
      }
    },
  },
};
var Ot,
  Jt,
  Pe = {};
(Jt = function () {
  function i(u, c, v, e) {
    var y = Error.call(this, u);
    return (
      Object.setPrototypeOf && Object.setPrototypeOf(y, i.prototype),
      (y.expected = c),
      (y.found = v),
      (y.location = e),
      (y.name = "SyntaxError"),
      y
    );
  }
  function o(u, c, v) {
    return (
      (v = v || " "),
      u.length > c ? u : ((c -= u.length), u + (v += v.repeat(c)).slice(0, c))
    );
  }
  return (
    (function (u, c) {
      function v() {
        this.constructor = u;
      }
      (v.prototype = c.prototype), (u.prototype = new v());
    })(i, Error),
    (i.prototype.format = function (u) {
      var c = "Error: " + this.message;
      if (this.location) {
        var v,
          e = null;
        for (v = 0; v < u.length; v++)
          if (u[v].source === this.location.source) {
            e = u[v].text.split(/\r\n|\n|\r/g);
            break;
          }
        var y = this.location.start,
          x = this.location.source + ":" + y.line + ":" + y.column;
        if (e) {
          var C = this.location.end,
            I = o("", y.line.toString().length, " "),
            A = e[y.line - 1],
            F = (y.line === C.line ? C.column : A.length + 1) - y.column || 1;
          c +=
            `
 --> ` +
            x +
            `
` +
            I +
            ` |
` +
            y.line +
            " | " +
            A +
            `
` +
            I +
            " | " +
            o("", y.column - 1, " ") +
            o("", F, "^");
        } else
          c +=
            `
 at ` + x;
      }
      return c;
    }),
    (i.buildMessage = function (u, c) {
      var v = {
        literal: function (I) {
          return '"' + y(I.text) + '"';
        },
        class: function (I) {
          var A = I.parts.map(function (F) {
            return Array.isArray(F) ? x(F[0]) + "-" + x(F[1]) : x(F);
          });
          return "[" + (I.inverted ? "^" : "") + A.join("") + "]";
        },
        any: function () {
          return "any character";
        },
        end: function () {
          return "end of input";
        },
        other: function (I) {
          return I.description;
        },
      };
      function e(I) {
        return I.charCodeAt(0).toString(16).toUpperCase();
      }
      function y(I) {
        return I.replace(/\\/g, "\\\\")
          .replace(/"/g, '\\"')
          .replace(/\0/g, "\\0")
          .replace(/\t/g, "\\t")
          .replace(/\n/g, "\\n")
          .replace(/\r/g, "\\r")
          .replace(/[\x00-\x0F]/g, function (A) {
            return "\\x0" + e(A);
          })
          .replace(/[\x10-\x1F\x7F-\x9F]/g, function (A) {
            return "\\x" + e(A);
          });
      }
      function x(I) {
        return I.replace(/\\/g, "\\\\")
          .replace(/\]/g, "\\]")
          .replace(/\^/g, "\\^")
          .replace(/-/g, "\\-")
          .replace(/\0/g, "\\0")
          .replace(/\t/g, "\\t")
          .replace(/\n/g, "\\n")
          .replace(/\r/g, "\\r")
          .replace(/[\x00-\x0F]/g, function (A) {
            return "\\x0" + e(A);
          })
          .replace(/[\x10-\x1F\x7F-\x9F]/g, function (A) {
            return "\\x" + e(A);
          });
      }
      function C(I) {
        return v[I.type](I);
      }
      return (
        "Expected " +
        (function (I) {
          var A,
            F,
            S = I.map(C);
          if ((S.sort(), S.length > 0)) {
            for (A = 1, F = 1; A < S.length; A++)
              S[A - 1] !== S[A] && ((S[F] = S[A]), F++);
            S.length = F;
          }
          switch (S.length) {
            case 1:
              return S[0];
            case 2:
              return S[0] + " or " + S[1];
            default:
              return S.slice(0, -1).join(", ") + ", or " + S[S.length - 1];
          }
        })(u) +
        " but " +
        (function (I) {
          return I ? '"' + y(I) + '"' : "end of input";
        })(c) +
        " found."
      );
    }),
    {
      SyntaxError: i,
      parse: function (u, c) {
        var v,
          e = {},
          y = (c = c !== void 0 ? c : {}).grammarSource,
          x = { start: et },
          C = et,
          I = "!",
          A = "=",
          F = ">=",
          S = ">",
          Oe = "<=",
          Je = "<>",
          Zt = "<",
          Ue = "!=",
          he = "+",
          me = "-",
          ke = "||",
          Xt = "*",
          er = "/",
          tr = "@",
          $e = "'",
          qe = "N'",
          re = "''",
          rr = ".",
          nr = "null",
          ar = "true",
          sr = "false",
          ur = "in",
          or = "is",
          ir = "like",
          lr = "escape",
          cr = "not",
          pr = "and",
          fr = "or",
          dr = "between",
          vr = "from",
          hr = "for",
          mr = "substring",
          gr = "extract",
          yr = "trim",
          wr = "position",
          Nr = "timestamp",
          Ir = "date",
          br = "leading",
          Tr = "trailing",
          xr = "both",
          Ar = "cast",
          Sr = "as",
          Er = "integer",
          Cr = "smallint",
          Pr = "float",
          Fr = "real",
          _r = "varchar",
          Lr = "to",
          Mr = "interval",
          Rr = "year",
          Dr = "month",
          Or = "day",
          Jr = "hour",
          Ur = "minute",
          kr = "second",
          $r = "case",
          qr = "end",
          Vr = "when",
          Hr = "then",
          Br = "else",
          jr = ",",
          zr = "(",
          Gr = ")",
          Ve = "`",
          Wr = /^[A-Za-z_\x80-\uFFFF]/,
          Yr = /^[A-Za-z0-9_]/,
          Kr = /^[A-Za-z0-9_.\x80-\uFFFF]/,
          He = /^[^']/,
          Qr = /^[0-9]/,
          Zr = /^[eE]/,
          Xr = /^[+\-]/,
          en = /^[ \t\n\r]/,
          Be = /^[^`]/,
          tn = w("!", !1),
          je = w("=", !1),
          rn = w(">=", !1),
          nn = w(">", !1),
          an = w("<=", !1),
          sn = w("<>", !1),
          un = w("<", !1),
          on = w("!=", !1),
          ge = w("+", !1),
          ye = w("-", !1),
          ln = w("||", !1),
          cn = w("*", !1),
          pn = w("/", !1),
          fn = k([["A", "Z"], ["a", "z"], "_", ["", "￿"]], !1, !1),
          dn = k([["A", "Z"], ["a", "z"], ["0", "9"], "_"], !1, !1),
          vn = k(
            [["A", "Z"], ["a", "z"], ["0", "9"], "_", ".", ["", "￿"]],
            !1,
            !1
          ),
          hn = w("@", !1),
          ze = w("'", !1),
          mn = w("N'", !1),
          Ge = w("''", !1),
          We = k(["'"], !0, !1),
          gn = w(".", !1),
          yn = k([["0", "9"]], !1, !1),
          wn = k(["e", "E"], !1, !1),
          Nn = k(["+", "-"], !1, !1),
          In = w("NULL", !0),
          bn = w("TRUE", !0),
          Tn = w("FALSE", !0),
          xn = w("IN", !0),
          An = w("IS", !0),
          Sn = w("LIKE", !0),
          En = w("ESCAPE", !0),
          Cn = w("NOT", !0),
          Pn = w("AND", !0),
          Fn = w("OR", !0),
          _n = w("BETWEEN", !0),
          Ln = w("FROM", !0),
          Mn = w("FOR", !0),
          Rn = w("SUBSTRING", !0),
          Dn = w("EXTRACT", !0),
          On = w("TRIM", !0),
          Jn = w("POSITION", !0),
          Un = w("TIMESTAMP", !0),
          kn = w("DATE", !0),
          $n = w("LEADING", !0),
          qn = w("TRAILING", !0),
          Vn = w("BOTH", !0),
          Hn = w("CAST", !0),
          Bn = w("AS", !0),
          jn = w("INTEGER", !0),
          zn = w("SMALLINT", !0),
          Gn = w("FLOAT", !0),
          Wn = w("REAL", !0),
          Yn = w("VARCHAR", !0),
          Kn = w("TO", !0),
          Qn = w("INTERVAL", !0),
          Zn = w("YEAR", !0),
          Xn = w("MONTH", !0),
          ea = w("DAY", !0),
          ta = w("HOUR", !0),
          ra = w("MINUTE", !0),
          na = w("SECOND", !0),
          aa = w("CASE", !0),
          sa = w("END", !0),
          ua = w("WHEN", !0),
          oa = w("THEN", !0),
          ia = w("ELSE", !0),
          la = w(",", !1),
          ca = w("(", !1),
          pa = w(")", !1),
          fa = k(
            [
              " ",
              "	",
              `
`,
              "\r",
            ],
            !1,
            !1
          ),
          Ye = w("`", !1),
          Ke = k(["`"], !0, !1),
          da = function (t) {
            return t;
          },
          va = function (t, s) {
            var n = { type: "expression-list" },
              a = (function (p, d, g) {
                return (function (N, P) {
                  for (var h = [N], T = 0; T < P.length; T++) h.push(P[T][3]);
                  return h;
                })(p, d);
              })(t, s);
            return (n.value = a), n;
          },
          ha = function (t, s) {
            return ee(t, s);
          },
          ma = function (t, s) {
            return ee(t, s);
          },
          ga = function (t) {
            return (function (s, n) {
              return { type: "unary-expression", operator: s, expr: n };
            })("NOT", t);
          },
          ya = function (t, s) {
            return s == "" || s == null || s == null
              ? t
              : s.type == "arithmetic"
              ? ee(t, s.tail)
              : Ft(s.op, t, s.right, s.escape);
          },
          wa = function (t) {
            return { type: "arithmetic", tail: t };
          },
          Na = function (t, s) {
            return { op: t + "NOT", right: s };
          },
          Ia = function (t, s) {
            return { op: t, right: s };
          },
          ba = function (t, s, n) {
            return {
              op: "NOT" + t,
              right: { type: "expression-list", value: [s, n] },
            };
          },
          Ta = function (t, s, n) {
            return { op: t, right: { type: "expression-list", value: [s, n] } };
          },
          xa = function (t) {
            return t[0] + " " + t[2];
          },
          Aa = function (t) {
            return t[0] + " " + t[2];
          },
          Sa = function (t, s, n) {
            return { op: t, right: s, escape: n.value };
          },
          Ea = function (t, s) {
            return { op: t, right: s, escape: "" };
          },
          Ca = function (t, s) {
            return { op: t, right: s };
          },
          Pa = function (t) {
            return { op: t, right: { type: "expression-list", value: [] } };
          },
          Fa = function (t, s) {
            return { op: t, right: s };
          },
          _a = function (t, s) {
            return ee(t, s);
          },
          La = function (t, s) {
            return ee(t, s);
          },
          Ma = function (t) {
            return (t.paren = !0), t;
          },
          Ra = function (t) {
            return /^CURRENT_DATE$/i.test(t)
              ? { type: "current-time", mode: "date" }
              : /^CURRENT_TIMESTAMP$/i.test(t)
              ? { type: "current-time", mode: "timestamp" }
              : { type: "column-reference", table: "", column: t };
          },
          Da = function (t) {
            return t;
          },
          Oa = function (t, s) {
            return t + s.join("");
          },
          Ja = function (t, s) {
            return t + s.join("");
          },
          Ua = function (t) {
            return { type: "parameter", value: t[1] };
          },
          ka = function (t, s) {
            return {
              type: "function",
              name: "extract",
              args: {
                type: "expression-list",
                value: [{ type: "string", value: t }, s],
              },
            };
          },
          $a = function (t, s, n) {
            return {
              type: "function",
              name: "substring",
              args: {
                type: "expression-list",
                value: n ? [t, s, n[2]] : [t, s],
              },
            };
          },
          qa = function (t, s) {
            return {
              type: "function",
              name: "cast",
              args: { type: "expression-list", value: [t, s] },
            };
          },
          Va = function () {
            return { type: "data-type", value: { type: "integer" } };
          },
          Ha = function () {
            return { type: "data-type", value: { type: "smallint" } };
          },
          Ba = function () {
            return { type: "data-type", value: { type: "float" } };
          },
          ja = function () {
            return { type: "data-type", value: { type: "real" } };
          },
          za = function () {
            return { type: "data-type", value: { type: "date" } };
          },
          Ga = function () {
            return { type: "data-type", value: { type: "timestamp" } };
          },
          Wa = function (t) {
            return {
              type: "data-type",
              value: { type: "varchar", size: parseInt(t) },
            };
          },
          Ya = function (t, s, n) {
            return {
              type: "function",
              name: "trim",
              args: {
                type: "expression-list",
                value: [{ type: "string", value: t ?? "BOTH" }, s, n],
              },
            };
          },
          Ka = function (t, s) {
            return {
              type: "function",
              name: "trim",
              args: {
                type: "expression-list",
                value: [{ type: "string", value: t ?? "BOTH" }, s],
              },
            };
          },
          Qa = function (t, s) {
            return {
              type: "function",
              name: "position",
              args: { type: "expression-list", value: [t, s] },
            };
          },
          Za = function (t, s) {
            return {
              type: "function",
              name: t,
              args: s || { type: "expression-list", value: [] },
            };
          },
          Xa = function (t) {
            return { type: "timestamp", value: t.value };
          },
          es = function (t, s, n) {
            return { type: "interval", value: s, qualifier: n, op: t };
          },
          ts = function (t, s) {
            return { type: "interval", value: t, qualifier: s, op: "" };
          },
          rs = function (t, s) {
            return { type: "interval-qualifier", start: t, end: s };
          },
          ns = function (t, s) {
            return {
              type: "interval-period",
              period: t.value,
              precision: s,
              secondary: null,
            };
          },
          as = function (t) {
            return {
              type: "interval-period",
              period: t.value,
              precision: null,
              secondary: null,
            };
          },
          ss = function (t) {
            return {
              type: "interval-period",
              period: t.value,
              precision: null,
              secondary: null,
            };
          },
          us = function (t, s) {
            return {
              type: "interval-period",
              period: "second",
              precision: t,
              secondary: s,
            };
          },
          os = function (t) {
            return {
              type: "interval-period",
              period: "second",
              precision: t,
              secondary: null,
            };
          },
          is = function () {
            return {
              type: "interval-period",
              period: "second",
              precision: null,
              secondary: null,
            };
          },
          ls = function (t, s) {
            return {
              type: "interval-period",
              period: t.value,
              precision: s,
              secondary: null,
            };
          },
          cs = function (t) {
            return {
              type: "interval-period",
              period: t.value,
              precision: null,
              secondary: null,
            };
          },
          ps = function (t, s) {
            return {
              type: "interval-period",
              period: "second",
              precision: t,
              secondary: s,
            };
          },
          fs = function (t) {
            return {
              type: "interval-period",
              period: "second",
              precision: t,
              secondary: null,
            };
          },
          ds = function () {
            return {
              type: "interval-period",
              period: "second",
              precision: null,
              secondary: null,
            };
          },
          vs = function () {
            return { type: "string", value: "day" };
          },
          hs = function () {
            return { type: "string", value: "hour" };
          },
          ms = function () {
            return { type: "string", value: "minute" };
          },
          gs = function () {
            return { type: "string", value: "month" };
          },
          ys = function () {
            return { type: "string", value: "year" };
          },
          ws = function (t) {
            return parseFloat(t);
          },
          Ns = function (t) {
            return parseFloat(t);
          },
          Is = function (t) {
            return { type: "date", value: t.value };
          },
          bs = function () {
            return { type: "null", value: null };
          },
          Ts = function () {
            return { type: "boolean", value: !0 };
          },
          xs = function () {
            return { type: "boolean", value: !1 };
          },
          Qe = function () {
            return "'";
          },
          As = function (t) {
            return { type: "string", value: t.join("") };
          },
          Ss = function (t, s) {
            return {
              type: "case-expression",
              format: "simple",
              operand: t,
              clauses: s,
              else: null,
            };
          },
          Es = function (t, s, n) {
            return {
              type: "case-expression",
              format: "simple",
              operand: t,
              clauses: s,
              else: n.value,
            };
          },
          Cs = function (t) {
            return {
              type: "case-expression",
              format: "searched",
              clauses: t,
              else: null,
            };
          },
          Ps = function (t, s) {
            return {
              type: "case-expression",
              format: "searched",
              clauses: t,
              else: s.value,
            };
          },
          Fs = function (t, s) {
            return { type: "when-clause", operand: t, value: s };
          },
          _s = function (t, s) {
            return { type: "when-clause", operand: t, value: s };
          },
          Ls = function (t) {
            return { type: "else-clause", value: t };
          },
          Ms = function (t) {
            return { type: "number", value: t };
          },
          Rs = function (t, s, n) {
            return parseFloat(t + s + n);
          },
          Ds = function (t, s) {
            return parseFloat(t + s);
          },
          Os = function (t, s) {
            return parseFloat(t + s);
          },
          Js = function (t) {
            return parseFloat(t);
          },
          Us = function (t, s) {
            return t[0] + s;
          },
          ks = function (t) {
            return "." + (t ?? "");
          },
          $s = function (t, s) {
            return t + s;
          },
          qs = function (t) {
            return t.join("");
          },
          Vs = function (t, s) {
            return "e" + (s === null ? "" : s);
          },
          Hs = function () {
            return "IN";
          },
          Bs = function () {
            return "IS";
          },
          js = function () {
            return "LIKE";
          },
          zs = function () {
            return "ESCAPE";
          },
          Gs = function () {
            return "NOT";
          },
          Ws = function () {
            return "AND";
          },
          Ys = function () {
            return "OR";
          },
          Ks = function () {
            return "BETWEEN";
          },
          Qs = function () {
            return "FROM";
          },
          Zs = function () {
            return "FOR";
          },
          Xs = function () {
            return "SUBSTRING";
          },
          eu = function () {
            return "EXTRACT";
          },
          tu = function () {
            return "TRIM";
          },
          ru = function () {
            return "POSITION";
          },
          nu = function () {
            return "TIMESTAMP";
          },
          au = function () {
            return "DATE";
          },
          su = function () {
            return "LEADING";
          },
          uu = function () {
            return "TRAILING";
          },
          ou = function () {
            return "BOTH";
          },
          iu = function () {
            return "CAST";
          },
          lu = function () {
            return "AS";
          },
          cu = function () {
            return "INTEGER";
          },
          pu = function () {
            return "SMALLINT";
          },
          fu = function () {
            return "FLOAT";
          },
          du = function () {
            return "REAL";
          },
          vu = function () {
            return "VARCHAR";
          },
          hu = function () {
            return "TO";
          },
          mu = function () {
            return "INTERVAL";
          },
          gu = function () {
            return "YEAR";
          },
          yu = function () {
            return "MONTH";
          },
          wu = function () {
            return "DAY";
          },
          Nu = function () {
            return "HOUR";
          },
          Iu = function () {
            return "MINUTE";
          },
          bu = function () {
            return "SECOND";
          },
          Tu = function () {
            return "CASE";
          },
          xu = function () {
            return "END";
          },
          Au = function () {
            return "WHEN";
          },
          Su = function () {
            return "THEN";
          },
          Eu = function () {
            return "ELSE";
          },
          Cu = function (t) {
            return t;
          },
          Pu = function (t) {
            return t.join("");
          },
          r = 0,
          ne = [{ line: 1, column: 1 }],
          J = 0,
          we = [],
          l = 0;
        if ("startRule" in c) {
          if (!(c.startRule in x))
            throw new Error(
              `Can't start parsing from rule "` + c.startRule + '".'
            );
          C = x[c.startRule];
        }
        function w(t, s) {
          return { type: "literal", text: t, ignoreCase: s };
        }
        function k(t, s, n) {
          return { type: "class", parts: t, inverted: s, ignoreCase: n };
        }
        function Ze(t) {
          var s,
            n = ne[t];
          if (n) return n;
          for (s = t - 1; !ne[s]; ) s--;
          for (n = { line: (n = ne[s]).line, column: n.column }; s < t; )
            u.charCodeAt(s) === 10 ? (n.line++, (n.column = 1)) : n.column++,
              s++;
          return (ne[t] = n), n;
        }
        function Xe(t, s) {
          var n = Ze(t),
            a = Ze(s);
          return {
            source: y,
            start: { offset: t, line: n.line, column: n.column },
            end: { offset: s, line: a.line, column: a.column },
          };
        }
        function m(t) {
          r < J || (r > J && ((J = r), (we = [])), we.push(t));
        }
        function et() {
          var t, s;
          return (
            (t = r),
            f(),
            (s = _()) !== e ? (f(), (t = da(s))) : ((r = t), (t = e)),
            t
          );
        }
        function tt() {
          var t, s, n, a, p, d, g, N;
          if (((t = r), (s = _()) !== e)) {
            for (
              n = [],
                a = r,
                p = f(),
                (d = de()) !== e
                  ? ((g = f()),
                    (N = _()) !== e
                      ? (a = p = [p, d, g, N])
                      : ((r = a), (a = e)))
                  : ((r = a), (a = e));
              a !== e;

            )
              n.push(a),
                (a = r),
                (p = f()),
                (d = de()) !== e
                  ? ((g = f()),
                    (N = _()) !== e
                      ? (a = p = [p, d, g, N])
                      : ((r = a), (a = e)))
                  : ((r = a), (a = e));
            t = va(s, n);
          } else (r = t), (t = e);
          return t;
        }
        function _() {
          var t, s, n, a, p, d, g, N;
          if (((t = r), (s = Ne()) !== e)) {
            for (
              n = [],
                a = r,
                p = f(),
                (d = mt()) !== e
                  ? ((g = f()),
                    (N = Ne()) !== e
                      ? (a = p = [p, d, g, N])
                      : ((r = a), (a = e)))
                  : ((r = a), (a = e));
              a !== e;

            )
              n.push(a),
                (a = r),
                (p = f()),
                (d = mt()) !== e
                  ? ((g = f()),
                    (N = Ne()) !== e
                      ? (a = p = [p, d, g, N])
                      : ((r = a), (a = e)))
                  : ((r = a), (a = e));
            t = ha(s, n);
          } else (r = t), (t = e);
          return t;
        }
        function Ne() {
          var t, s, n, a, p, d, g, N;
          if (((t = r), (s = ae()) !== e)) {
            for (
              n = [],
                a = r,
                p = f(),
                (d = ce()) !== e
                  ? ((g = f()),
                    (N = ae()) !== e
                      ? (a = p = [p, d, g, N])
                      : ((r = a), (a = e)))
                  : ((r = a), (a = e));
              a !== e;

            )
              n.push(a),
                (a = r),
                (p = f()),
                (d = ce()) !== e
                  ? ((g = f()),
                    (N = ae()) !== e
                      ? (a = p = [p, d, g, N])
                      : ((r = a), (a = e)))
                  : ((r = a), (a = e));
            t = ma(s, n);
          } else (r = t), (t = e);
          return t;
        }
        function ae() {
          var t, s, n, a, p;
          return (
            (t = r),
            (s = X()) === e &&
              ((s = r),
              u.charCodeAt(r) === 33
                ? ((n = I), r++)
                : ((n = e), l === 0 && m(tn)),
              n !== e
                ? ((a = r),
                  l++,
                  u.charCodeAt(r) === 61
                    ? ((p = A), r++)
                    : ((p = e), l === 0 && m(je)),
                  l--,
                  p === e ? (a = void 0) : ((r = a), (a = e)),
                  a !== e ? (s = n = [n, a]) : ((r = s), (s = e)))
                : ((r = s), (s = e))),
            s !== e
              ? ((n = f()), (a = ae()) !== e ? (t = ga(a)) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t === e &&
              (t = (function () {
                var d, g, N;
                return (
                  (d = r),
                  (g = $()) !== e
                    ? (f(),
                      (N = (function () {
                        var P;
                        return (
                          (P = (function () {
                            var h, T, E, L, H, z;
                            if (
                              ((h = []),
                              (T = r),
                              (E = f()),
                              (L = rt()) !== e
                                ? ((H = f()),
                                  (z = $()) !== e
                                    ? (T = E = [E, L, H, z])
                                    : ((r = T), (T = e)))
                                : ((r = T), (T = e)),
                              T !== e)
                            )
                              for (; T !== e; )
                                h.push(T),
                                  (T = r),
                                  (E = f()),
                                  (L = rt()) !== e
                                    ? ((H = f()),
                                      (z = $()) !== e
                                        ? (T = E = [E, L, H, z])
                                        : ((r = T), (T = e)))
                                    : ((r = T), (T = e));
                            else h = e;
                            return h !== e && (h = wa(h)), h;
                          })()) === e &&
                            (P = (function () {
                              var h, T, E, L;
                              return (
                                (h = r),
                                (T = Ie()) !== e
                                  ? (f(),
                                    (E = R()) !== e
                                      ? (f(),
                                        (L = tt()) !== e
                                          ? (f(),
                                            D() !== e
                                              ? (h = Ca(T, L))
                                              : ((r = h), (h = e)))
                                          : ((r = h), (h = e)))
                                      : ((r = h), (h = e)))
                                  : ((r = h), (h = e)),
                                h === e &&
                                  ((h = r),
                                  (T = Ie()) !== e
                                    ? (f(),
                                      (E = R()) !== e
                                        ? (f(),
                                          (L = D()) !== e
                                            ? (h = Pa(T))
                                            : ((r = h), (h = e)))
                                        : ((r = h), (h = e)))
                                    : ((r = h), (h = e)),
                                  h === e &&
                                    ((h = r),
                                    (T = Ie()) !== e
                                      ? (f(),
                                        (E = Ae()) !== e
                                          ? (h = Fa(T, E))
                                          : ((r = h), (h = e)))
                                      : ((r = h), (h = e)))),
                                h
                              );
                            })()) === e &&
                            (P = (function () {
                              var h, T, E, L, H, z;
                              return (
                                (h = r),
                                (T = X()) !== e
                                  ? (f(),
                                    (E = gt()) !== e
                                      ? (f(),
                                        (L = $()) !== e
                                          ? (f(),
                                            (H = ce()) !== e
                                              ? (f(),
                                                (z = $()) !== e
                                                  ? (h = ba(E, L, z))
                                                  : ((r = h), (h = e)))
                                              : ((r = h), (h = e)))
                                          : ((r = h), (h = e)))
                                      : ((r = h), (h = e)))
                                  : ((r = h), (h = e)),
                                h === e &&
                                  ((h = r),
                                  (T = gt()) !== e
                                    ? (f(),
                                      (E = $()) !== e
                                        ? (f(),
                                          (L = ce()) !== e
                                            ? (f(),
                                              (H = $()) !== e
                                                ? (h = Ta(T, E, H))
                                                : ((r = h), (h = e)))
                                            : ((r = h), (h = e)))
                                        : ((r = h), (h = e)))
                                    : ((r = h), (h = e))),
                                h
                              );
                            })()) === e &&
                            (P = (function () {
                              var h, T, E, L;
                              return (
                                (h = r),
                                (T = vt()) !== e
                                  ? (f(),
                                    (E = X()) !== e
                                      ? (f(),
                                        (L = $()) !== e
                                          ? (h = Na(T, L))
                                          : ((r = h), (h = e)))
                                      : ((r = h), (h = e)))
                                  : ((r = h), (h = e)),
                                h === e &&
                                  ((h = r),
                                  (T = vt()) !== e
                                    ? (f(),
                                      (E = $()) !== e
                                        ? (h = Ia(T, E))
                                        : ((r = h), (h = e)))
                                    : ((r = h), (h = e))),
                                h
                              );
                            })()) === e &&
                            (P = (function () {
                              var h, T, E, L;
                              return (
                                (h = r),
                                (T = nt()) !== e
                                  ? (f(),
                                    (E = Q()) !== e
                                      ? (f(),
                                        Du() !== e
                                          ? (f(),
                                            (L = Se()) !== e
                                              ? (h = Sa(T, E, L))
                                              : ((r = h), (h = e)))
                                          : ((r = h), (h = e)))
                                      : ((r = h), (h = e)))
                                  : ((r = h), (h = e)),
                                h === e &&
                                  ((h = r),
                                  (T = nt()) !== e
                                    ? (f(),
                                      (E = Q()) !== e
                                        ? (h = Ea(T, E))
                                        : ((r = h), (h = e)))
                                    : ((r = h), (h = e))),
                                h
                              );
                            })()),
                          P
                        );
                      })()) === e && (N = null),
                      (d = ya(g, N)))
                    : ((r = d), (d = e)),
                  d
                );
              })()),
            t
          );
        }
        function rt() {
          var t;
          return (
            u.substr(r, 2) === F
              ? ((t = F), (r += 2))
              : ((t = e), l === 0 && m(rn)),
            t === e &&
              (u.charCodeAt(r) === 62
                ? ((t = S), r++)
                : ((t = e), l === 0 && m(nn)),
              t === e &&
                (u.substr(r, 2) === Oe
                  ? ((t = Oe), (r += 2))
                  : ((t = e), l === 0 && m(an)),
                t === e &&
                  (u.substr(r, 2) === Je
                    ? ((t = Je), (r += 2))
                    : ((t = e), l === 0 && m(sn)),
                  t === e &&
                    (u.charCodeAt(r) === 60
                      ? ((t = Zt), r++)
                      : ((t = e), l === 0 && m(un)),
                    t === e &&
                      (u.charCodeAt(r) === 61
                        ? ((t = A), r++)
                        : ((t = e), l === 0 && m(je)),
                      t === e &&
                        (u.substr(r, 2) === Ue
                          ? ((t = Ue), (r += 2))
                          : ((t = e), l === 0 && m(on)))))))),
            t
          );
        }
        function nt() {
          var t, s, n, a, p;
          return (
            (t = r),
            (s = r),
            (n = X()) !== e
              ? ((a = f()),
                (p = ht()) !== e ? (s = n = [n, a, p]) : ((r = s), (s = e)))
              : ((r = s), (s = e)),
            s !== e && (s = xa(s)),
            (t = s) === e && (t = ht()),
            t
          );
        }
        function Ie() {
          var t, s, n, a, p;
          return (
            (t = r),
            (s = r),
            (n = X()) !== e
              ? ((a = f()),
                (p = Ee()) !== e ? (s = n = [n, a, p]) : ((r = s), (s = e)))
              : ((r = s), (s = e)),
            s !== e && (s = Aa(s)),
            (t = s) === e && (t = Ee()),
            t
          );
        }
        function $() {
          var t, s, n, a, p, d, g, N;
          if (((t = r), (s = be()) !== e)) {
            for (
              n = [],
                a = r,
                p = f(),
                (d = at()) !== e
                  ? ((g = f()),
                    (N = be()) !== e
                      ? (a = p = [p, d, g, N])
                      : ((r = a), (a = e)))
                  : ((r = a), (a = e));
              a !== e;

            )
              n.push(a),
                (a = r),
                (p = f()),
                (d = at()) !== e
                  ? ((g = f()),
                    (N = be()) !== e
                      ? (a = p = [p, d, g, N])
                      : ((r = a), (a = e)))
                  : ((r = a), (a = e));
            t = _a(s, n);
          } else (r = t), (t = e);
          return t;
        }
        function at() {
          var t;
          return (
            u.charCodeAt(r) === 43
              ? ((t = he), r++)
              : ((t = e), l === 0 && m(ge)),
            t === e &&
              (u.charCodeAt(r) === 45
                ? ((t = me), r++)
                : ((t = e), l === 0 && m(ye)),
              t === e &&
                (u.substr(r, 2) === ke
                  ? ((t = ke), (r += 2))
                  : ((t = e), l === 0 && m(ln)))),
            t
          );
        }
        function be() {
          var t, s, n, a, p, d, g, N;
          if (((t = r), (s = Te()) !== e)) {
            for (
              n = [],
                a = r,
                p = f(),
                (d = st()) !== e
                  ? ((g = f()),
                    (N = Te()) !== e
                      ? (a = p = [p, d, g, N])
                      : ((r = a), (a = e)))
                  : ((r = a), (a = e));
              a !== e;

            )
              n.push(a),
                (a = r),
                (p = f()),
                (d = st()) !== e
                  ? ((g = f()),
                    (N = Te()) !== e
                      ? (a = p = [p, d, g, N])
                      : ((r = a), (a = e)))
                  : ((r = a), (a = e));
            t = La(s, n);
          } else (r = t), (t = e);
          return t;
        }
        function st() {
          var t;
          return (
            u.charCodeAt(r) === 42
              ? ((t = Xt), r++)
              : ((t = e), l === 0 && m(cn)),
            t === e &&
              (u.charCodeAt(r) === 47
                ? ((t = er), r++)
                : ((t = e), l === 0 && m(pn))),
            t
          );
        }
        function Te() {
          var t, s;
          return (
            (t = (function () {
              var n;
              return (
                (n = Se()) === e &&
                  (n = (function () {
                    var a, p, d, g;
                    return (
                      (a = r),
                      (p = (function () {
                        var N, P, h, T;
                        return (
                          (N = r),
                          (P = le()) !== e &&
                          (h = pt()) !== e &&
                          (T = ft()) !== e
                            ? (N = Rs(P, h, T))
                            : ((r = N), (N = e)),
                          N === e &&
                            ((N = r),
                            (P = le()) !== e && (h = pt()) !== e
                              ? (N = Ds(P, h))
                              : ((r = N), (N = e)),
                            N === e &&
                              ((N = r),
                              (P = le()) !== e && (h = ft()) !== e
                                ? (N = Os(P, h))
                                : ((r = N), (N = e)),
                              N === e &&
                                ((N = r),
                                (P = le()) !== e && (P = Js(P)),
                                (N = P)))),
                          N
                        );
                      })()) !== e
                        ? ((d = r),
                          l++,
                          (g = xe()),
                          l--,
                          g === e ? (d = void 0) : ((r = d), (d = e)),
                          d !== e ? (a = Ms(p)) : ((r = a), (a = e)))
                        : ((r = a), (a = e)),
                      a
                    );
                  })()) === e &&
                  (n = (function () {
                    var a, p;
                    return (
                      (a = r),
                      (p = Mu()) !== e && (p = Ts()),
                      (a = p) === e &&
                        ((a = r), (p = Ru()) !== e && (p = xs()), (a = p)),
                      a
                    );
                  })()) === e &&
                  (n = (function () {
                    var a;
                    return (a = Lu()) !== e && (a = bs()), a;
                  })()) === e &&
                  (n = (function () {
                    var a, p;
                    return (
                      (a = r),
                      Nt() !== e
                        ? (f(),
                          (p = Q()) !== e ? (a = Is(p)) : ((r = a), (a = e)))
                        : ((r = a), (a = e)),
                      a
                    );
                  })()) === e &&
                  (n = (function () {
                    var a, p;
                    return (
                      (a = r),
                      wt() !== e
                        ? (f(),
                          (p = Q()) !== e ? (a = Xa(p)) : ((r = a), (a = e)))
                        : ((r = a), (a = e)),
                      a
                    );
                  })()) === e &&
                  (n = Fu()),
                n
              );
            })()) === e &&
              (t = (function () {
                var n, a, p;
                return (
                  (n = r),
                  Uu() !== e
                    ? (f(),
                      R() !== e
                        ? (f(),
                          (a = (function () {
                            var d;
                            return (
                              (d = bt()) === e &&
                                (d = Tt()) === e &&
                                (d = xt()) === e &&
                                (d = At()) === e &&
                                (d = St()) === e &&
                                (d = j()),
                              d
                            );
                          })()) !== e
                            ? (f(),
                              Ce() !== e
                                ? (f(),
                                  (p = _()) !== e
                                    ? (f(),
                                      D() !== e
                                        ? (n = ka(a, p))
                                        : ((r = n), (n = e)))
                                    : ((r = n), (n = e)))
                                : ((r = n), (n = e)))
                            : ((r = n), (n = e)))
                        : ((r = n), (n = e)))
                    : ((r = n), (n = e)),
                  n
                );
              })()) === e &&
              (t = (function () {
                var n, a, p, d, g, N, P;
                return (
                  (n = r),
                  Ju() !== e
                    ? (f(),
                      R() !== e
                        ? (f(),
                          (a = _()) !== e
                            ? (f(),
                              Ce() !== e
                                ? (f(),
                                  (p = _()) !== e
                                    ? (f(),
                                      (d = r),
                                      (g = Ou()) !== e
                                        ? ((N = f()),
                                          (P = _()) !== e
                                            ? (d = g = [g, N, P, f()])
                                            : ((r = d), (d = e)))
                                        : ((r = d), (d = e)),
                                      d === e && (d = null),
                                      (g = D()) !== e
                                        ? (n = $a(a, p, d))
                                        : ((r = n), (n = e)))
                                    : ((r = n), (n = e)))
                                : ((r = n), (n = e)))
                            : ((r = n), (n = e)))
                        : ((r = n), (n = e)))
                    : ((r = n), (n = e)),
                  n
                );
              })()) === e &&
              (t = (function () {
                var n, a, p, d;
                return (
                  (n = r),
                  yt() !== e
                    ? (f(),
                      R() !== e
                        ? (f(),
                          (a = it()) === e && (a = null),
                          f(),
                          (p = _()) !== e
                            ? (f(),
                              Ce() !== e
                                ? (f(),
                                  (d = _()) !== e
                                    ? (f(),
                                      D() !== e
                                        ? (n = Ya(a, p, d))
                                        : ((r = n), (n = e)))
                                    : ((r = n), (n = e)))
                                : ((r = n), (n = e)))
                            : ((r = n), (n = e)))
                        : ((r = n), (n = e)))
                    : ((r = n), (n = e)),
                  n === e &&
                    ((n = r),
                    yt() !== e
                      ? (f(),
                        R() !== e
                          ? (f(),
                            (a = it()) === e && (a = null),
                            f(),
                            (p = _()) !== e
                              ? (f(),
                                D() !== e ? (n = Ka(a, p)) : ((r = n), (n = e)))
                              : ((r = n), (n = e)))
                          : ((r = n), (n = e)))
                      : ((r = n), (n = e))),
                  n
                );
              })()) === e &&
              (t = (function () {
                var n, a, p;
                return (
                  (n = r),
                  ku() !== e
                    ? (f(),
                      R() !== e
                        ? (f(),
                          (a = _()) !== e
                            ? (f(),
                              Ee() !== e
                                ? (f(),
                                  (p = _()) !== e
                                    ? (f(),
                                      D() !== e
                                        ? (n = Qa(a, p))
                                        : ((r = n), (n = e)))
                                    : ((r = n), (n = e)))
                                : ((r = n), (n = e)))
                            : ((r = n), (n = e)))
                        : ((r = n), (n = e)))
                    : ((r = n), (n = e)),
                  n
                );
              })()) === e &&
              (t = (function () {
                var n, a, p;
                return (
                  (n = r),
                  Hu() !== e
                    ? (f(),
                      R() !== e
                        ? (f(),
                          (a = _()) !== e
                            ? (f(),
                              Bu() !== e
                                ? (f(),
                                  (p = (function () {
                                    var d, g, N;
                                    return (
                                      (d = r),
                                      (g = ju()) !== e && (g = Va()),
                                      (d = g) === e &&
                                        ((d = r),
                                        (g = zu()) !== e && (g = Ha()),
                                        (d = g) === e &&
                                          ((d = r),
                                          (g = Gu()) !== e && (g = Ba()),
                                          (d = g) === e &&
                                            ((d = r),
                                            (g = Wu()) !== e && (g = ja()),
                                            (d = g) === e &&
                                              ((d = r),
                                              (g = Nt()) !== e && (g = za()),
                                              (d = g) === e &&
                                                ((d = r),
                                                (g = wt()) !== e && (g = Ga()),
                                                (d = g) === e &&
                                                  ((d = r),
                                                  (g = Yu()) !== e
                                                    ? (f(),
                                                      R() !== e
                                                        ? (f(),
                                                          (N = B()) !== e
                                                            ? (f(),
                                                              D() !== e
                                                                ? (d = Wa(N))
                                                                : ((r = d),
                                                                  (d = e)))
                                                            : ((r = d),
                                                              (d = e)))
                                                        : ((r = d), (d = e)))
                                                    : ((r = d), (d = e)))))))),
                                      d
                                    );
                                  })()) !== e
                                    ? (f(),
                                      D() !== e
                                        ? (n = qa(a, p))
                                        : ((r = n), (n = e)))
                                    : ((r = n), (n = e)))
                                : ((r = n), (n = e)))
                            : ((r = n), (n = e)))
                        : ((r = n), (n = e)))
                    : ((r = n), (n = e)),
                  n
                );
              })()) === e &&
              (t = (function () {
                var n, a, p;
                return (
                  (n = r),
                  (a = Zu()) !== e
                    ? (f(),
                      R() !== e
                        ? (f(),
                          (p = tt()) === e && (p = null),
                          f(),
                          D() !== e ? (n = Za(a, p)) : ((r = n), (n = e)))
                        : ((r = n), (n = e)))
                    : ((r = n), (n = e)),
                  n
                );
              })()) === e &&
              (t = (function () {
                var n;
                return (
                  (n = (function () {
                    var a, p, d, g, N;
                    if (((a = r), pe() !== e))
                      if ((f(), (p = _()) !== e)) {
                        for (f(), d = [], g = ie(); g !== e; )
                          d.push(g), (g = ie());
                        (g = f()),
                          (N = fe()) !== e
                            ? (a = Ss(p, d))
                            : ((r = a), (a = e));
                      } else (r = a), (a = e);
                    else (r = a), (a = e);
                    if (a === e)
                      if (((a = r), pe() !== e))
                        if ((f(), (p = _()) !== e)) {
                          for (f(), d = [], g = ie(); g !== e; )
                            d.push(g), (g = ie());
                          (g = f()),
                            (N = ct()) !== e
                              ? (f(),
                                fe() !== e
                                  ? (a = Es(p, d, N))
                                  : ((r = a), (a = e)))
                              : ((r = a), (a = e));
                        } else (r = a), (a = e);
                      else (r = a), (a = e);
                    return a;
                  })()) === e &&
                    (n = (function () {
                      var a, p, d, g;
                      if (((a = r), pe() !== e)) {
                        for (f(), p = [], d = oe(); d !== e; )
                          p.push(d), (d = oe());
                        (d = f()),
                          (g = fe()) !== e ? (a = Cs(p)) : ((r = a), (a = e));
                      } else (r = a), (a = e);
                      if (a === e)
                        if (((a = r), pe() !== e)) {
                          for (f(), p = [], d = oe(); d !== e; )
                            p.push(d), (d = oe());
                          (d = f()),
                            (g = ct()) !== e
                              ? (f(),
                                fe() !== e
                                  ? (a = Ps(p, g))
                                  : ((r = a), (a = e)))
                              : ((r = a), (a = e));
                        } else (r = a), (a = e);
                      return a;
                    })()),
                  n
                );
              })()) === e &&
              (t = (function () {
                var n;
                return (
                  (n = (function () {
                    var a;
                    return (
                      (a = (function () {
                        var p, d, g, N;
                        if (((p = r), (d = xe()) !== e)) {
                          for (g = [], N = ot(); N !== e; )
                            g.push(N), (N = ot());
                          p = Oa(d, g);
                        } else (r = p), (p = e);
                        return p;
                      })()) !== e && (a = Da(a)),
                      a
                    );
                  })()) !== e && (n = Ra(n)),
                  n
                );
              })()) === e &&
              (t = Ae()) === e &&
              ((t = r),
              R() !== e
                ? (f(),
                  (s = _()) !== e
                    ? (f(), D() !== e ? (t = Ma(s)) : ((r = t), (t = e)))
                    : ((r = t), (t = e)))
                : ((r = t), (t = e))),
            t
          );
        }
        function ut() {
          var t, s, n, a;
          if (((t = r), (s = xe()) !== e)) {
            for (n = [], a = b(); a !== e; ) n.push(a), (a = b());
            t = Ja(s, n);
          } else (r = t), (t = e);
          return t;
        }
        function xe() {
          var t;
          return (
            Wr.test(u.charAt(r))
              ? ((t = u.charAt(r)), r++)
              : ((t = e), l === 0 && m(fn)),
            t
          );
        }
        function b() {
          var t;
          return (
            Yr.test(u.charAt(r))
              ? ((t = u.charAt(r)), r++)
              : ((t = e), l === 0 && m(dn)),
            t
          );
        }
        function ot() {
          var t;
          return (
            Kr.test(u.charAt(r))
              ? ((t = u.charAt(r)), r++)
              : ((t = e), l === 0 && m(vn)),
            t
          );
        }
        function Ae() {
          var t, s, n;
          return (
            (t = r),
            u.charCodeAt(r) === 64
              ? ((s = tr), r++)
              : ((s = e), l === 0 && m(hn)),
            s !== e && (n = ut()) !== e ? (t = s = [s, n]) : ((r = t), (t = e)),
            t !== e && (t = Ua(t)),
            t
          );
        }
        function it() {
          var t;
          return (t = $u()) === e && (t = qu()) === e && (t = Vu()), t;
        }
        function Fu() {
          var t, s, n, a;
          return (
            (t = r),
            It() !== e
              ? (f(),
                u.charCodeAt(r) === 45
                  ? ((s = me), r++)
                  : ((s = e), l === 0 && m(ye)),
                s === e &&
                  (u.charCodeAt(r) === 43
                    ? ((s = he), r++)
                    : ((s = e), l === 0 && m(ge))),
                s !== e
                  ? (f(),
                    (n = Q()) !== e
                      ? (f(),
                        (a = lt()) !== e
                          ? (t = es(s, n, a))
                          : ((r = t), (t = e)))
                      : ((r = t), (t = e)))
                  : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t === e &&
              ((t = r),
              It() !== e
                ? (f(),
                  (s = Q()) !== e
                    ? (f(),
                      (n = lt()) !== e ? (t = ts(s, n)) : ((r = t), (t = e)))
                    : ((r = t), (t = e)))
                : ((r = t), (t = e))),
            t
          );
        }
        function lt() {
          var t, s, n;
          return (
            (t = r),
            (s = (function () {
              var a, p, d;
              return (
                (a = r),
                (p = Z()) !== e
                  ? (f(),
                    R() !== e
                      ? (f(),
                        (d = ue()) !== e
                          ? (f(),
                            D() !== e ? (a = ns(p, d)) : ((r = a), (a = e)))
                          : ((r = a), (a = e)))
                      : ((r = a), (a = e)))
                  : ((r = a), (a = e)),
                a === e && ((a = r), (p = Z()) !== e && (p = as(p)), (a = p)),
                a
              );
            })()) !== e
              ? (f(),
                Ku() !== e
                  ? (f(),
                    (n = (function () {
                      var a, p, d, g;
                      return (
                        (a = r),
                        (p = Z()) !== e && (p = ss(p)),
                        (a = p) === e &&
                          ((a = r),
                          (p = j()) !== e
                            ? (f(),
                              R() !== e
                                ? (f(),
                                  (d = ue()) !== e
                                    ? (f(),
                                      de() !== e
                                        ? (f(),
                                          (g = se()) !== e
                                            ? (f(),
                                              D() !== e
                                                ? (a = us(d, g))
                                                : ((r = a), (a = e)))
                                            : ((r = a), (a = e)))
                                        : ((r = a), (a = e)))
                                    : ((r = a), (a = e)))
                                : ((r = a), (a = e)))
                            : ((r = a), (a = e)),
                          a === e &&
                            ((a = r),
                            (p = j()) !== e
                              ? (f(),
                                R() !== e
                                  ? (f(),
                                    (d = ue()) !== e
                                      ? (f(),
                                        D() !== e
                                          ? (a = os(d))
                                          : ((r = a), (a = e)))
                                      : ((r = a), (a = e)))
                                  : ((r = a), (a = e)))
                              : ((r = a), (a = e)),
                            a === e &&
                              ((a = r),
                              (p = j()) !== e && (p = is()),
                              (a = p)))),
                        a
                      );
                    })()) !== e
                      ? (t = rs(s, n))
                      : ((r = t), (t = e)))
                  : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t === e &&
              (t = (function () {
                var a, p, d, g;
                return (
                  (a = r),
                  (p = Z()) !== e
                    ? (f(),
                      R() !== e
                        ? (f(),
                          (d = se()) !== e
                            ? (f(),
                              D() !== e ? (a = ls(p, d)) : ((r = a), (a = e)))
                            : ((r = a), (a = e)))
                        : ((r = a), (a = e)))
                    : ((r = a), (a = e)),
                  a === e &&
                    ((a = r),
                    (p = Z()) !== e && (p = cs(p)),
                    (a = p) === e &&
                      ((a = r),
                      (p = j()) !== e
                        ? (f(),
                          R() !== e
                            ? (f(),
                              (d = ue()) !== e
                                ? (f(),
                                  de() !== e
                                    ? (f(),
                                      (g = se()) !== e
                                        ? (f(),
                                          D() !== e
                                            ? (a = ps(d, g))
                                            : ((r = a), (a = e)))
                                        : ((r = a), (a = e)))
                                    : ((r = a), (a = e)))
                                : ((r = a), (a = e)))
                            : ((r = a), (a = e)))
                        : ((r = a), (a = e)),
                      a === e &&
                        ((a = r),
                        (p = j()) !== e
                          ? (f(),
                            R() !== e
                              ? (f(),
                                (d = se()) !== e
                                  ? (f(),
                                    D() !== e
                                      ? (a = fs(d))
                                      : ((r = a), (a = e)))
                                  : ((r = a), (a = e)))
                              : ((r = a), (a = e)))
                          : ((r = a), (a = e)),
                        a === e &&
                          ((a = r), (p = j()) !== e && (p = ds()), (a = p))))),
                  a
                );
              })()),
            t
          );
        }
        function Z() {
          var t, s;
          return (
            (t = r),
            (s = xt()) !== e && (s = vs()),
            (t = s) === e &&
              ((t = r),
              (s = At()) !== e && (s = hs()),
              (t = s) === e &&
                ((t = r),
                (s = St()) !== e && (s = ms()),
                (t = s) === e &&
                  ((t = r),
                  (s = Tt()) !== e && (s = gs()),
                  (t = s) === e &&
                    ((t = r), (s = bt()) !== e && (s = ys()), (t = s))))),
            t
          );
        }
        function se() {
          var t;
          return (t = B()) !== e && (t = ws(t)), t;
        }
        function ue() {
          var t;
          return (t = B()) !== e && (t = Ns(t)), t;
        }
        function Q() {
          var t;
          return (t = Se()) === e && (t = Ae()), t;
        }
        function Se() {
          var t, s, n, a, p;
          if (
            ((t = r),
            u.charCodeAt(r) === 39
              ? ((s = $e), r++)
              : ((s = e), l === 0 && m(ze)),
            s === e &&
              (u.substr(r, 2) === qe
                ? ((s = qe), (r += 2))
                : ((s = e), l === 0 && m(mn))),
            s !== e)
          ) {
            for (
              n = [],
                a = r,
                u.substr(r, 2) === re
                  ? ((p = re), (r += 2))
                  : ((p = e), l === 0 && m(Ge)),
                p !== e && (p = Qe()),
                (a = p) === e &&
                  (He.test(u.charAt(r))
                    ? ((a = u.charAt(r)), r++)
                    : ((a = e), l === 0 && m(We)));
              a !== e;

            )
              n.push(a),
                (a = r),
                u.substr(r, 2) === re
                  ? ((p = re), (r += 2))
                  : ((p = e), l === 0 && m(Ge)),
                p !== e && (p = Qe()),
                (a = p) === e &&
                  (He.test(u.charAt(r))
                    ? ((a = u.charAt(r)), r++)
                    : ((a = e), l === 0 && m(We)));
            u.charCodeAt(r) === 39
              ? ((a = $e), r++)
              : ((a = e), l === 0 && m(ze)),
              a !== e ? (t = As(n)) : ((r = t), (t = e));
          } else (r = t), (t = e);
          return t;
        }
        function oe() {
          var t, s, n;
          return (
            (t = r),
            Et() !== e
              ? (f(),
                (s = _()) !== e
                  ? (f(),
                    Ct() !== e
                      ? (f(),
                        (n = _()) !== e ? (t = Fs(s, n)) : ((r = t), (t = e)))
                      : ((r = t), (t = e)))
                  : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function ie() {
          var t, s, n;
          return (
            (t = r),
            Et() !== e
              ? (f(),
                (s = _()) !== e
                  ? (f(),
                    Ct() !== e
                      ? (f(),
                        (n = _()) !== e ? (t = _s(s, n)) : ((r = t), (t = e)))
                      : ((r = t), (t = e)))
                  : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function ct() {
          var t, s;
          return (
            (t = r),
            Qu() !== e
              ? (f(), (s = _()) !== e ? (t = Ls(s)) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function le() {
          var t, s, n;
          return (
            (t = B()) === e &&
              ((t = r),
              u.charCodeAt(r) === 45
                ? ((s = me), r++)
                : ((s = e), l === 0 && m(ye)),
              s === e &&
                (u.charCodeAt(r) === 43
                  ? ((s = he), r++)
                  : ((s = e), l === 0 && m(ge))),
              s !== e && (n = B()) !== e ? (t = Us(s, n)) : ((r = t), (t = e))),
            t
          );
        }
        function pt() {
          var t, s, n;
          return (
            (t = r),
            u.charCodeAt(r) === 46
              ? ((s = rr), r++)
              : ((s = e), l === 0 && m(gn)),
            s !== e
              ? ((n = B()) === e && (n = null), (t = ks(n)))
              : ((r = t), (t = e)),
            t
          );
        }
        function ft() {
          var t, s, n;
          return (
            (t = r),
            (s = _u()) !== e && (n = B()) !== e
              ? (t = $s(s, n))
              : ((r = t), (t = e)),
            t
          );
        }
        function B() {
          var t, s;
          if (((t = []), (s = dt()) !== e))
            for (; s !== e; ) t.push(s), (s = dt());
          else t = e;
          return t !== e && (t = qs(t)), t;
        }
        function dt() {
          var t;
          return (
            Qr.test(u.charAt(r))
              ? ((t = u.charAt(r)), r++)
              : ((t = e), l === 0 && m(yn)),
            t
          );
        }
        function _u() {
          var t, s, n;
          return (
            (t = r),
            Zr.test(u.charAt(r))
              ? ((s = u.charAt(r)), r++)
              : ((s = e), l === 0 && m(wn)),
            s !== e
              ? (Xr.test(u.charAt(r))
                  ? ((n = u.charAt(r)), r++)
                  : ((n = e), l === 0 && m(Nn)),
                n === e && (n = null),
                (t = Vs(s, n)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Lu() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 4).toLowerCase() === nr
              ? ((s = u.substr(r, 4)), (r += 4))
              : ((s = e), l === 0 && m(In)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = s = [s, n]) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Mu() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 4).toLowerCase() === ar
              ? ((s = u.substr(r, 4)), (r += 4))
              : ((s = e), l === 0 && m(bn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = s = [s, n]) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Ru() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 5).toLowerCase() === sr
              ? ((s = u.substr(r, 5)), (r += 5))
              : ((s = e), l === 0 && m(Tn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = s = [s, n]) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Ee() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 2).toLowerCase() === ur
              ? ((s = u.substr(r, 2)), (r += 2))
              : ((s = e), l === 0 && m(xn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = Hs()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function vt() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 2).toLowerCase() === or
              ? ((s = u.substr(r, 2)), (r += 2))
              : ((s = e), l === 0 && m(An)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = Bs()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function ht() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 4).toLowerCase() === ir
              ? ((s = u.substr(r, 4)), (r += 4))
              : ((s = e), l === 0 && m(Sn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = js()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Du() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 6).toLowerCase() === lr
              ? ((s = u.substr(r, 6)), (r += 6))
              : ((s = e), l === 0 && m(En)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = zs()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function X() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 3).toLowerCase() === cr
              ? ((s = u.substr(r, 3)), (r += 3))
              : ((s = e), l === 0 && m(Cn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = Gs()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function ce() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 3).toLowerCase() === pr
              ? ((s = u.substr(r, 3)), (r += 3))
              : ((s = e), l === 0 && m(Pn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = Ws()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function mt() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 2).toLowerCase() === fr
              ? ((s = u.substr(r, 2)), (r += 2))
              : ((s = e), l === 0 && m(Fn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = Ys()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function gt() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 7).toLowerCase() === dr
              ? ((s = u.substr(r, 7)), (r += 7))
              : ((s = e), l === 0 && m(_n)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = Ks()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Ce() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 4).toLowerCase() === vr
              ? ((s = u.substr(r, 4)), (r += 4))
              : ((s = e), l === 0 && m(Ln)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = Qs()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Ou() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 3).toLowerCase() === hr
              ? ((s = u.substr(r, 3)), (r += 3))
              : ((s = e), l === 0 && m(Mn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = Zs()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Ju() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 9).toLowerCase() === mr
              ? ((s = u.substr(r, 9)), (r += 9))
              : ((s = e), l === 0 && m(Rn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = Xs()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Uu() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 7).toLowerCase() === gr
              ? ((s = u.substr(r, 7)), (r += 7))
              : ((s = e), l === 0 && m(Dn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = eu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function yt() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 4).toLowerCase() === yr
              ? ((s = u.substr(r, 4)), (r += 4))
              : ((s = e), l === 0 && m(On)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = tu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function ku() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 8).toLowerCase() === wr
              ? ((s = u.substr(r, 8)), (r += 8))
              : ((s = e), l === 0 && m(Jn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = ru()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function wt() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 9).toLowerCase() === Nr
              ? ((s = u.substr(r, 9)), (r += 9))
              : ((s = e), l === 0 && m(Un)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = nu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Nt() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 4).toLowerCase() === Ir
              ? ((s = u.substr(r, 4)), (r += 4))
              : ((s = e), l === 0 && m(kn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = au()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function $u() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 7).toLowerCase() === br
              ? ((s = u.substr(r, 7)), (r += 7))
              : ((s = e), l === 0 && m($n)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = su()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function qu() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 8).toLowerCase() === Tr
              ? ((s = u.substr(r, 8)), (r += 8))
              : ((s = e), l === 0 && m(qn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = uu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Vu() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 4).toLowerCase() === xr
              ? ((s = u.substr(r, 4)), (r += 4))
              : ((s = e), l === 0 && m(Vn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = ou()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Hu() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 4).toLowerCase() === Ar
              ? ((s = u.substr(r, 4)), (r += 4))
              : ((s = e), l === 0 && m(Hn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = iu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Bu() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 2).toLowerCase() === Sr
              ? ((s = u.substr(r, 2)), (r += 2))
              : ((s = e), l === 0 && m(Bn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = lu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function ju() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 7).toLowerCase() === Er
              ? ((s = u.substr(r, 7)), (r += 7))
              : ((s = e), l === 0 && m(jn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = cu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function zu() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 8).toLowerCase() === Cr
              ? ((s = u.substr(r, 8)), (r += 8))
              : ((s = e), l === 0 && m(zn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = pu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Gu() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 5).toLowerCase() === Pr
              ? ((s = u.substr(r, 5)), (r += 5))
              : ((s = e), l === 0 && m(Gn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = fu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Wu() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 4).toLowerCase() === Fr
              ? ((s = u.substr(r, 4)), (r += 4))
              : ((s = e), l === 0 && m(Wn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = du()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Yu() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 7).toLowerCase() === _r
              ? ((s = u.substr(r, 7)), (r += 7))
              : ((s = e), l === 0 && m(Yn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = vu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Ku() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 2).toLowerCase() === Lr
              ? ((s = u.substr(r, 2)), (r += 2))
              : ((s = e), l === 0 && m(Kn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = hu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function It() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 8).toLowerCase() === Mr
              ? ((s = u.substr(r, 8)), (r += 8))
              : ((s = e), l === 0 && m(Qn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = mu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function bt() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 4).toLowerCase() === Rr
              ? ((s = u.substr(r, 4)), (r += 4))
              : ((s = e), l === 0 && m(Zn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = gu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Tt() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 5).toLowerCase() === Dr
              ? ((s = u.substr(r, 5)), (r += 5))
              : ((s = e), l === 0 && m(Xn)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = yu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function xt() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 3).toLowerCase() === Or
              ? ((s = u.substr(r, 3)), (r += 3))
              : ((s = e), l === 0 && m(ea)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = wu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function At() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 4).toLowerCase() === Jr
              ? ((s = u.substr(r, 4)), (r += 4))
              : ((s = e), l === 0 && m(ta)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = Nu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function St() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 6).toLowerCase() === Ur
              ? ((s = u.substr(r, 6)), (r += 6))
              : ((s = e), l === 0 && m(ra)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = Iu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function j() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 6).toLowerCase() === kr
              ? ((s = u.substr(r, 6)), (r += 6))
              : ((s = e), l === 0 && m(na)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = bu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function pe() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 4).toLowerCase() === $r
              ? ((s = u.substr(r, 4)), (r += 4))
              : ((s = e), l === 0 && m(aa)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = Tu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function fe() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 3).toLowerCase() === qr
              ? ((s = u.substr(r, 3)), (r += 3))
              : ((s = e), l === 0 && m(sa)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = xu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Et() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 4).toLowerCase() === Vr
              ? ((s = u.substr(r, 4)), (r += 4))
              : ((s = e), l === 0 && m(ua)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = Au()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Ct() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 4).toLowerCase() === Hr
              ? ((s = u.substr(r, 4)), (r += 4))
              : ((s = e), l === 0 && m(oa)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = Su()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function Qu() {
          var t, s, n, a;
          return (
            (t = r),
            u.substr(r, 4).toLowerCase() === Br
              ? ((s = u.substr(r, 4)), (r += 4))
              : ((s = e), l === 0 && m(ia)),
            s !== e
              ? ((n = r),
                l++,
                (a = b()),
                l--,
                a === e ? (n = void 0) : ((r = n), (n = e)),
                n !== e ? (t = Eu()) : ((r = t), (t = e)))
              : ((r = t), (t = e)),
            t
          );
        }
        function de() {
          var t;
          return (
            u.charCodeAt(r) === 44
              ? ((t = jr), r++)
              : ((t = e), l === 0 && m(la)),
            t
          );
        }
        function R() {
          var t;
          return (
            u.charCodeAt(r) === 40
              ? ((t = zr), r++)
              : ((t = e), l === 0 && m(ca)),
            t
          );
        }
        function D() {
          var t;
          return (
            u.charCodeAt(r) === 41
              ? ((t = Gr), r++)
              : ((t = e), l === 0 && m(pa)),
            t
          );
        }
        function f() {
          var t, s;
          for (t = [], s = Pt(); s !== e; ) t.push(s), (s = Pt());
          return t;
        }
        function Pt() {
          var t;
          return (
            en.test(u.charAt(r))
              ? ((t = u.charAt(r)), r++)
              : ((t = e), l === 0 && m(fa)),
            t
          );
        }
        function Zu() {
          var t, s, n, a;
          if (((t = r), (s = ut()) !== e && (s = Cu(s)), (t = s) === e))
            if (
              ((t = r),
              u.charCodeAt(r) === 96
                ? ((s = Ve), r++)
                : ((s = e), l === 0 && m(Ye)),
              s !== e)
            ) {
              if (
                ((n = []),
                Be.test(u.charAt(r))
                  ? ((a = u.charAt(r)), r++)
                  : ((a = e), l === 0 && m(Ke)),
                a !== e)
              )
                for (; a !== e; )
                  n.push(a),
                    Be.test(u.charAt(r))
                      ? ((a = u.charAt(r)), r++)
                      : ((a = e), l === 0 && m(Ke));
              else n = e;
              n !== e
                ? (u.charCodeAt(r) === 96
                    ? ((a = Ve), r++)
                    : ((a = e), l === 0 && m(Ye)),
                  a !== e ? (t = Pu(n)) : ((r = t), (t = e)))
                : ((r = t), (t = e));
            } else (r = t), (t = e);
          return t;
        }
        function Ft(t, s, n, a) {
          var p = { type: "binary-expression", operator: t, left: s, right: n };
          return a !== void 0 && (p.escape = a), p;
        }
        function ee(t, s) {
          for (var n = t, a = 0; a < s.length; a++) n = Ft(s[a][1], n, s[a][3]);
          return n;
        }
        if ((v = C()) !== e && r === u.length) return v;
        throw (
          (v !== e && r < u.length && m({ type: "end" }),
          (function (t, s, n) {
            return new i(i.buildMessage(t, s), t, s, n);
          })(
            we,
            J < u.length ? u.charAt(J) : null,
            J < u.length ? Xe(J, J + 1) : Xe(J, J)
          ))
        );
      },
    }
  );
}),
  (Ot = {
    get exports() {
      return Pe;
    },
    set exports(i) {
      Pe = i;
    },
  }).exports && (Ot.exports = Jt());
let no = class {
  static parse(i) {
    return Pe.parse(i);
  }
};
const jt = /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
  ao = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2}(\.[0-9]+)?)$/,
  so =
    /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2}(\.[0-9]+)?)(\+|\-)(\d{1,2}):(\d{1,2})$/,
  uo =
    /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})(\+|\-)(\d{1,2}):(\d{1,2})$/,
  oo = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/,
  io = new Set(["current_timestamp", "current_date", "current_time"]);
function G(i, o) {
  return (i += "").length >= o ? i : new Array(o - i.length + 1).join("0") + i;
}
function te(
  i,
  o,
  u = "0",
  c = "0",
  v = "0",
  e = "0",
  y = "",
  x = "0",
  C = "0"
) {
  if (y === "+" || y === "-") {
    const I = `${G(parseInt(i, 10), 4)}-${G(parseInt(o, 10), 2)}-${G(
      parseInt(u, 10),
      2
    )}`;
    let A = "";
    parseFloat(e) < 10 && (A = "0");
    const F = `${G(parseInt(c, 10), 2)}:${G(parseInt(v, 10), 2)}:${
        A + parseFloat(e).toString()
      }`,
      S = `${y}${G(parseInt(x, 10), 2)}:${G(parseInt(C, 10), 2)}`;
    return new Date(I + "T" + F + S);
  }
  return new Date(
    parseInt(i, 10),
    parseInt(o, 10) - 1,
    parseInt(u, 10),
    parseInt(c, 10),
    parseInt(v, 10),
    parseFloat(e)
  );
}
class lo {
  static makeBool(o) {
    return zt(o);
  }
  static featureValue(o, u, c, v) {
    return Qt(o, u, c, v);
  }
  static equalsNull(o) {
    return o === null;
  }
  static applyLike(o, u, c) {
    return Me(o, u, c);
  }
  static ensureArray(o) {
    return _e(o);
  }
  static applyIn(o, u) {
    return Le(o, u);
  }
  static currentDate() {
    const o = new Date();
    return o.setHours(0, 0, 0, 0), o;
  }
  static makeSqlInterval(o, u, c) {
    return V.createFromValueAndQualifer(o, u, c);
  }
  static convertInterval(o) {
    return o instanceof V ? o.valueInMilliseconds() : o;
  }
  static currentTimestamp() {
    return new Date();
  }
  static compare(o, u, c) {
    return Yt(o, u, c);
  }
  static calculate(o, u, c) {
    return Kt(o, u, c);
  }
  static makeComparable(o) {
    return q(o);
  }
  static evaluateFunction(o, u) {
    return Re(o, u);
  }
  static lookup(o, u) {
    const c = u[o];
    return c === void 0 ? null : c;
  }
  static between(o, u) {
    return o == null || u[0] == null || u[1] == null
      ? null
      : o >= u[0] && o <= u[1];
  }
  static notbetween(o, u) {
    return o == null || u[0] == null || u[1] == null
      ? null
      : o < u[0] || o > u[1];
  }
  static ternaryNot(o) {
    return ve(o);
  }
  static ternaryAnd(o, u) {
    return Gt(o, u);
  }
  static ternaryOr(o, u) {
    return Wt(o, u);
  }
}
class De {
  constructor(o, u) {
    (this.fieldsIndex = u),
      (this._datefields = {}),
      (this.parameters = {}),
      (this._hasDateFunctions = void 0),
      (this.parseTree = no.parse(o));
    const {
      isStandardized: c,
      isAggregate: v,
      referencedFieldNames: e,
    } = this._extractExpressionInfo(u);
    (this._referencedFieldNames = e),
      (this.isStandardized = c),
      (this.isAggregate = v);
  }
  static create(o, u) {
    return new De(o, u);
  }
  get fieldNames() {
    return this._referencedFieldNames;
  }
  testSet(o, u = Y) {
    const c = {};
    for (const v of this.fieldNames) c[v] = o.map((e) => u.getAttribute(e, v));
    return !!this._evaluateNode(this.parseTree, { attributes: c }, Y);
  }
  calculateValue(o, u = Y) {
    const c = this._evaluateNode(this.parseTree, o, u);
    return c instanceof V ? c.valueInMilliseconds() / 864e5 : c;
  }
  calculateValueCompiled(o, u = Y) {
    return this.parseTree._compiledVersion != null
      ? this.parseTree._compiledVersion(o, this.parameters, u, this._datefields)
      : _t("esri-csp-restrictions")
      ? this.calculateValue(o, u)
      : (this._compileMe(),
        this.parseTree._compiledVersion(
          o,
          this.parameters,
          u,
          this._datefields
        ));
  }
  testFeature(o, u = Y) {
    return !!this._evaluateNode(this.parseTree, o, u);
  }
  testFeatureCompiled(o, u = Y) {
    return this.parseTree._compiledVersion != null
      ? !!this.parseTree._compiledVersion(
          o,
          this.parameters,
          u,
          this._datefields
        )
      : _t("esri-csp-restrictions")
      ? this.testFeature(o, u)
      : (this._compileMe(),
        !!this.parseTree._compiledVersion(
          o,
          this.parameters,
          u,
          this._datefields
        ));
  }
  get hasDateFunctions() {
    return (
      this._hasDateFunctions != null ||
        ((this._hasDateFunctions = !1),
        this._visitAll(this.parseTree, (o) => {
          o.type === "current-time"
            ? (this._hasDateFunctions = !0)
            : o.type === "function" &&
              (this._hasDateFunctions =
                this._hasDateFunctions || io.has(o.name.toLowerCase()));
        })),
      this._hasDateFunctions
    );
  }
  getFunctions() {
    const o = new Set();
    return (
      this._visitAll(this.parseTree, (u) => {
        u.type === "function" && o.add(u.name.toLowerCase());
      }),
      Array.from(o)
    );
  }
  getExpressions() {
    const o = new Map();
    return (
      this._visitAll(this.parseTree, (u) => {
        if (u.type === "function") {
          const c = u.name.toLowerCase(),
            v = u.args.value[0];
          if (v.type === "column-reference") {
            const e = v.column,
              y = `${c}-${e}`;
            o.has(y) || o.set(y, { aggregateType: c, field: e });
          }
        }
      }),
      [...o.values()]
    );
  }
  getVariables() {
    const o = new Set();
    return (
      this._visitAll(this.parseTree, (u) => {
        u.type === "parameter" && o.add(u.value.toLowerCase());
      }),
      Array.from(o)
    );
  }
  _compileMe() {
    const o =
      "return this.convertInterval(" +
      this.evaluateNodeToJavaScript(this.parseTree) +
      ")";
    this.parseTree._compiledVersion = new Function(
      "feature",
      "lookups",
      "attributeAdapter",
      "datefields",
      o
    ).bind(lo);
  }
  _extractExpressionInfo(o) {
    const u = [],
      c = new Set();
    let v = !0,
      e = !0;
    return (
      this._visitAll(this.parseTree, (y) => {
        switch (y.type) {
          case "column-reference": {
            const x = o == null ? void 0 : o.get(y.column);
            let C, I;
            x
              ? (C = I = x.name ?? "")
              : ((I = y.column), (C = I.toLowerCase())),
              x &&
                x.name &&
                (x.type === "date" || x.type === "esriFieldTypeDate") &&
                (this._datefields[x.name] = 1),
              c.has(C) || (c.add(C), u.push(I)),
              (y.column = I);
            break;
          }
          case "function": {
            const { name: x, args: C } = y,
              I = C.value.length;
            v &&
              (v = (function (A, F) {
                const S = Bt[A.toLowerCase()];
                return S != null && F >= S.minParams && F <= S.maxParams;
              })(x, I)),
              e &&
                (e = (function (A, F) {
                  const S = Lt[A.toLowerCase()];
                  return S != null && F >= S.minParams && F <= S.maxParams;
                })(x, I));
            break;
          }
        }
      }),
      { referencedFieldNames: Array.from(u), isStandardized: v, isAggregate: e }
    );
  }
  _visitAll(o, u) {
    if (o != null)
      switch ((u(o), o.type)) {
        case "when-clause":
          this._visitAll(o.operand, u), this._visitAll(o.value, u);
          break;
        case "case-expression":
          for (const c of o.clauses) this._visitAll(c, u);
          o.format === "simple" && this._visitAll(o.operand, u),
            o.else !== null && this._visitAll(o.else, u);
          break;
        case "expression-list":
          for (const c of o.value) this._visitAll(c, u);
          break;
        case "unary-expression":
          this._visitAll(o.expr, u);
          break;
        case "binary-expression":
          this._visitAll(o.left, u), this._visitAll(o.right, u);
          break;
        case "function":
          this._visitAll(o.args, u);
      }
  }
  evaluateNodeToJavaScript(o) {
    switch (o.type) {
      case "interval":
        return (
          "this.makeSqlInterval(" +
          this.evaluateNodeToJavaScript(o.value) +
          ", " +
          JSON.stringify(o.qualifier) +
          "," +
          JSON.stringify(o.op) +
          ")"
        );
      case "case-expression": {
        let u = "";
        if (o.format === "simple") {
          const c =
            "this.makeComparable(" +
            this.evaluateNodeToJavaScript(o.operand) +
            ")";
          u = "( ";
          for (let v = 0; v < o.clauses.length; v++)
            u +=
              " (" +
              c +
              " === this.makeComparable(" +
              this.evaluateNodeToJavaScript(o.clauses[v].operand) +
              ")) ? (" +
              this.evaluateNodeToJavaScript(o.clauses[v].value) +
              ") : ";
          o.else !== null
            ? (u += this.evaluateNodeToJavaScript(o.else))
            : (u += "null"),
            (u += " )");
        } else {
          u = "( ";
          for (let c = 0; c < o.clauses.length; c++)
            u +=
              " this.makeBool(" +
              this.evaluateNodeToJavaScript(o.clauses[c].operand) +
              ")===true ? (" +
              this.evaluateNodeToJavaScript(o.clauses[c].value) +
              ") : ";
          o.else !== null
            ? (u += this.evaluateNodeToJavaScript(o.else))
            : (u += "null"),
            (u += " )");
        }
        return u;
      }
      case "parameter":
        return (
          "this.lookup(" + JSON.stringify(o.value.toLowerCase()) + ",lookups)"
        );
      case "expression-list": {
        let u = "[";
        for (const c of o.value)
          u !== "[" && (u += ","), (u += this.evaluateNodeToJavaScript(c));
        return (u += "]"), u;
      }
      case "unary-expression":
        return "this.ternaryNot(" + this.evaluateNodeToJavaScript(o.expr) + ")";
      case "binary-expression":
        switch (o.operator) {
          case "AND":
            return (
              "this.ternaryAnd(" +
              this.evaluateNodeToJavaScript(o.left) +
              "," +
              this.evaluateNodeToJavaScript(o.right) +
              " )"
            );
          case "OR":
            return (
              "this.ternaryOr(" +
              this.evaluateNodeToJavaScript(o.left) +
              "," +
              this.evaluateNodeToJavaScript(o.right) +
              " )"
            );
          case "IS":
            if (o.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return (
              "this.equalsNull(" + this.evaluateNodeToJavaScript(o.left) + ")"
            );
          case "ISNOT":
            if (o.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return (
              "(!(this.equalsNull(" +
              this.evaluateNodeToJavaScript(o.left) +
              ")))"
            );
          case "IN":
            return (
              "this.applyIn(" +
              this.evaluateNodeToJavaScript(o.left) +
              ",this.ensureArray(" +
              this.evaluateNodeToJavaScript(o.right) +
              "))"
            );
          case "NOT IN":
            return (
              "this.ternaryNot(this.applyIn(" +
              this.evaluateNodeToJavaScript(o.left) +
              ",this.ensureArray(" +
              this.evaluateNodeToJavaScript(o.right) +
              ")))"
            );
          case "BETWEEN":
            return (
              "this.between(" +
              this.evaluateNodeToJavaScript(o.left) +
              "," +
              this.evaluateNodeToJavaScript(o.right) +
              ")"
            );
          case "NOTBETWEEN":
            return (
              "this.notbetween(" +
              this.evaluateNodeToJavaScript(o.left) +
              "," +
              this.evaluateNodeToJavaScript(o.right) +
              ")"
            );
          case "LIKE":
            return (
              "this.applyLike(" +
              this.evaluateNodeToJavaScript(o.left) +
              "," +
              this.evaluateNodeToJavaScript(o.right) +
              "," +
              JSON.stringify(o.escape) +
              ")"
            );
          case "NOT LIKE":
            return (
              "this.ternaryNot(this.applyLike(" +
              this.evaluateNodeToJavaScript(o.left) +
              "," +
              this.evaluateNodeToJavaScript(o.right) +
              "," +
              JSON.stringify(o.escape) +
              "))"
            );
          case "<>":
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "=":
            return (
              "this.compare(" +
              JSON.stringify(o.operator) +
              "," +
              this.evaluateNodeToJavaScript(o.left) +
              "," +
              this.evaluateNodeToJavaScript(o.right) +
              ")"
            );
          case "*":
          case "-":
          case "+":
          case "/":
          case "||":
            return (
              "this.calculate(" +
              JSON.stringify(o.operator) +
              "," +
              this.evaluateNodeToJavaScript(o.left) +
              "," +
              this.evaluateNodeToJavaScript(o.right) +
              ")"
            );
        }
        throw new Error("Not Supported Operator " + o.operator);
      case "null":
      case "boolean":
      case "string":
      case "number":
        return JSON.stringify(o.value);
      case "date":
        return "(new Date(" + Ut(o.value).getTime().toString() + "))";
      case "timestamp":
        return "(new Date(" + Fe(o.value).getTime().toString() + "))";
      case "current-time":
        return o.mode === "date"
          ? "this.currentDate()"
          : "this.currentTimestamp()";
      case "column-reference":
        return (
          "this.featureValue(feature," +
          JSON.stringify(o.column) +
          ",datefields,attributeAdapter)"
        );
      case "function":
        return (
          "this.evaluateFunction(" +
          JSON.stringify(o.name) +
          "," +
          this.evaluateNodeToJavaScript(o.args) +
          ")"
        );
    }
    throw new Error("Unsupported sql syntax " + o.type);
  }
  _evaluateNode(o, u, c) {
    switch (o.type) {
      case "interval": {
        const v = this._evaluateNode(o.value, u, c);
        return V.createFromValueAndQualifer(v, o.qualifier, o.op);
      }
      case "case-expression":
        if (o.format === "simple") {
          const v = q(this._evaluateNode(o.operand, u, c));
          for (let e = 0; e < o.clauses.length; e++)
            if (v === q(this._evaluateNode(o.clauses[e].operand, u, c)))
              return this._evaluateNode(o.clauses[e].value, u, c);
          if (o.else !== null) return this._evaluateNode(o.else, u, c);
        } else {
          for (let v = 0; v < o.clauses.length; v++)
            if (zt(this._evaluateNode(o.clauses[v].operand, u, c)))
              return this._evaluateNode(o.clauses[v].value, u, c);
          if (o.else !== null) return this._evaluateNode(o.else, u, c);
        }
        return null;
      case "parameter":
        return this.parameters[o.value.toLowerCase()];
      case "expression-list": {
        const v = [];
        for (const e of o.value) v.push(this._evaluateNode(e, u, c));
        return v;
      }
      case "unary-expression":
        return ve(this._evaluateNode(o.expr, u, c));
      case "binary-expression":
        switch (o.operator) {
          case "AND":
            return Gt(
              this._evaluateNode(o.left, u, c),
              this._evaluateNode(o.right, u, c)
            );
          case "OR":
            return Wt(
              this._evaluateNode(o.left, u, c),
              this._evaluateNode(o.right, u, c)
            );
          case "IS":
            if (o.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return this._evaluateNode(o.left, u, c) === null;
          case "ISNOT":
            if (o.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return this._evaluateNode(o.left, u, c) !== null;
          case "IN": {
            const v = _e(this._evaluateNode(o.right, u, c));
            return Le(this._evaluateNode(o.left, u, c), v);
          }
          case "NOT IN": {
            const v = _e(this._evaluateNode(o.right, u, c));
            return ve(Le(this._evaluateNode(o.left, u, c), v));
          }
          case "BETWEEN": {
            const v = this._evaluateNode(o.left, u, c),
              e = this._evaluateNode(o.right, u, c);
            return v == null || e[0] == null || e[1] == null
              ? null
              : v >= q(e[0]) && v <= q(e[1]);
          }
          case "NOTBETWEEN": {
            const v = this._evaluateNode(o.left, u, c),
              e = this._evaluateNode(o.right, u, c);
            return v == null || e[0] == null || e[1] == null
              ? null
              : v < q(e[0]) || v > q(e[1]);
          }
          case "LIKE":
            return Me(
              this._evaluateNode(o.left, u, c),
              this._evaluateNode(o.right, u, c),
              o.escape
            );
          case "NOT LIKE":
            return ve(
              Me(
                this._evaluateNode(o.left, u, c),
                this._evaluateNode(o.right, u, c),
                o.escape
              )
            );
          case "<>":
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "=":
            return Yt(
              o.operator,
              this._evaluateNode(o.left, u, c),
              this._evaluateNode(o.right, u, c)
            );
          case "-":
          case "+":
          case "*":
          case "/":
          case "||":
            return Kt(
              o.operator,
              this._evaluateNode(o.left, u, c),
              this._evaluateNode(o.right, u, c)
            );
        }
      case "null":
      case "boolean":
      case "string":
      case "number":
        return o.value;
      case "date":
        return Ut(o.value);
      case "timestamp":
        return Fe(o.value);
      case "current-time": {
        const v = new Date();
        return o.mode === "date" && v.setHours(0, 0, 0, 0), v;
      }
      case "column-reference":
        return Qt(u, o.column, this._datefields, c);
      case "data-type":
        return o.value;
      case "function": {
        const v = this._evaluateNode(o.args, u, c);
        return this.isAggregate
          ? (function (e, y) {
              const x = Lt[e.toLowerCase()];
              if (x == null) throw new Error("Function Not Recognised");
              if (y.length < x.minParams || y.length > x.maxParams)
                throw new Error(
                  `Invalid Parameter count for call to ${e.toUpperCase()}`
                );
              return x.evaluate(y);
            })(o.name, v)
          : Re(o.name, v);
      }
    }
    throw new Error("Unsupported sql syntax " + o.type);
  }
}
function Fe(i) {
  let o = ao.exec(i);
  if (o !== null) {
    const [, u, c, v, e, y, x] = o;
    return te(u, c, v, e, y, x);
  }
  if (((o = so.exec(i)), o !== null)) {
    const [, u, c, v, e, y, x, C, I, A] = o;
    return te(u, c, v, e, y, x, C, I, A);
  }
  if (((o = uo.exec(i)), o !== null)) {
    const [, u, c, v, e, y, x, C, I] = o;
    return te(u, c, v, e, y, "0", x, C, I);
  }
  if (((o = oo.exec(i)), o !== null)) {
    const [, u, c, v, e, y] = o;
    return te(u, c, v, e, y);
  }
  if (((o = jt.exec(i)), o !== null)) {
    const [, u, c, v] = o;
    return te(u, c, v);
  }
  throw new Error("SQL Invalid Timestamp");
}
function Ut(i) {
  const o = jt.exec(i);
  if (o === null)
    try {
      return Fe(i);
    } catch {
      throw new Error("SQL Invalid Date");
    }
  const [, u, c, v] = o;
  return new Date(parseInt(u, 10), parseInt(c, 10) - 1, parseInt(v, 10));
}
function zt(i) {
  return i === !0;
}
function _e(i) {
  return Array.isArray(i) ? i : [i];
}
function ve(i) {
  return i !== null ? i !== !0 : null;
}
function Gt(i, o) {
  return i != null && o != null
    ? i === !0 && o === !0
    : i !== !1 && o !== !1 && null;
}
function Wt(i, o) {
  return i != null && o != null
    ? i === !0 || o === !0
    : i === !0 || o === !0 || null;
}
function Le(i, o) {
  if (i == null) return null;
  let u = !1;
  for (const c of o)
    if (c == null) u = null;
    else if (i === c) {
      u = !0;
      break;
    }
  return u;
}
const kt = "-[]/{}()*+?.\\^$|";
var K;
function Me(i, o, u) {
  return i == null
    ? null
    : (function (c, v) {
        const e = v;
        let y = "",
          x = K.Normal;
        for (let C = 0; C < c.length; C++) {
          const I = c.charAt(C);
          switch (x) {
            case K.Normal:
              I === e
                ? (x = K.Escaped)
                : kt.includes(I)
                ? (y += "\\" + I)
                : (y += I === "%" ? ".*" : I === "_" ? "." : I);
              break;
            case K.Escaped:
              kt.includes(I) ? (y += "\\" + I) : (y += I), (x = K.Normal);
          }
        }
        return new RegExp("^" + y + "$", "m");
      })(o, u).test(i);
}
function q(i) {
  return i instanceof Date ? i.valueOf() : i;
}
function Yt(i, o, u) {
  if (o == null || u == null) return null;
  const c = q(o),
    v = q(u);
  switch (i) {
    case "<>":
      return c !== v;
    case "=":
      return c === v;
    case ">":
      return c > v;
    case "<":
      return c < v;
    case ">=":
      return c >= v;
    case "<=":
      return c <= v;
  }
}
function Kt(i, o, u) {
  if (i === "||") return Re("concat", [o, u]);
  if (o instanceof V)
    if (u instanceof Date)
      switch (i) {
        case "+":
          return new Date(o.valueInMilliseconds() + u.getTime());
        case "-":
          return o.valueInMilliseconds() - u.getTime();
        case "*":
          return o.valueInMilliseconds() * u.getTime();
        case "/":
          return o.valueInMilliseconds() / u.getTime();
      }
    else if (u instanceof V)
      switch (i) {
        case "+":
          return V.createFromMilliseconds(
            o.valueInMilliseconds() + u.valueInMilliseconds()
          );
        case "-":
          return V.createFromMilliseconds(
            o.valueInMilliseconds() - u.valueInMilliseconds()
          );
        case "*":
          return o.valueInMilliseconds() * u.valueInMilliseconds();
        case "/":
          return o.valueInMilliseconds() / u.valueInMilliseconds();
      }
    else o = o.valueInMilliseconds();
  else if (u instanceof V)
    if (o instanceof Date)
      switch (i) {
        case "+":
          return new Date(u.valueInMilliseconds() + o.getTime());
        case "-":
          return new Date(o.getTime() - u.valueInMilliseconds());
        case "*":
          return o.getTime() * u.valueInMilliseconds();
        case "/":
          return o.getTime() / u.valueInMilliseconds();
      }
    else u = u.valueInMilliseconds();
  else if (o instanceof Date && typeof u == "number")
    switch (((u = 24 * u * 60 * 60 * 1e3), (o = o.getTime()), i)) {
      case "+":
        return new Date(o + u);
      case "-":
        return new Date(o - u);
      case "*":
        return new Date(o * u);
      case "/":
        return new Date(o / u);
    }
  else if (u instanceof Date && typeof o == "number")
    switch (((o = 24 * o * 60 * 60 * 1e3), (u = u.getTime()), i)) {
      case "+":
        return new Date(o + u);
      case "-":
        return new Date(o - u);
      case "*":
        return new Date(o * u);
      case "/":
        return new Date(o / u);
    }
  switch (i) {
    case "+":
      return o + u;
    case "-":
      return o - u;
    case "*":
      return o * u;
    case "/":
      return o / u;
  }
}
function Qt(i, o, u, c) {
  const v = c.getAttribute(i, o);
  return v != null && u[o] === 1 ? new Date(v) : v;
}
(function (i) {
  (i[(i.Normal = 0)] = "Normal"), (i[(i.Escaped = 1)] = "Escaped");
})(K || (K = {}));
const Y = {
    getAttribute: (i, o) =>
      ((function (u) {
        return u && typeof u.attributes == "object";
      })(i)
        ? i.attributes
        : i)[o],
  },
  vo = Object.freeze(
    Object.defineProperty(
      { __proto__: null, WhereClause: De, defaultAttributeAdapter: Y },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { vo as W, De as f, O as n, fo as o, W as s, M as t };
