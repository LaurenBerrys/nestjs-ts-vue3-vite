import {
  T as de,
  Z as he,
  N as me,
  a as ge,
  f as ye,
  B as ve,
  L as A,
  e as Q,
  o as be,
  s as ae,
  A as b,
  j as G,
  R as h,
  D as R,
  F as q,
  C as S,
  m as Se,
  v as y,
  b as C,
  J as K,
  V as D,
  z as O,
  G as xe,
  Y as k,
  l as m,
  q as ee,
  r as E,
  n as Re,
  t as H,
  c as Ie,
  d as Fe,
  g as ie,
  h as Ce,
  i as Y,
  k as ne,
  p as Ae,
} from "./arcadeUtils.2f855605.js";
import { t as s, e as c, u as Me } from "./executionError.fb3f283a.js";
import { registerFunctions as Le } from "./geomasync.0568ea60.js";
import { aH as le, de as te } from "./index.8fd7165c.js";
import "./Table.e9c997d5.js";
import "./vue.a7ce1fbe.js";
import "./NvapForm.feb8550d.js";
import "./vue-i18n.67a42238.js";
import "./vue-router.805f6e2a.js";
import "./arcadeTimeUtils.e79f2f70.js";
import "./number.f83996f0.js";
import "./geometryEngineAsync.8efb94c6.js";
import "./portalUtils.b096dd2b.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
function re(a) {
  return a && typeof a.then == "function";
}
const U = 100;
async function X(a, t) {
  const i = [];
  for (let n = 0; n < t.arguments.length; n++)
    i.push(await f(a, t.arguments[n]));
  return i;
}
async function I(a, t, i) {
  return t.preparsed === !0 ? i(a, null, t.arguments) : i(a, t, await X(a, t));
}
class Ne extends Ce {
  constructor(t, i) {
    super(),
      (this.definition = null),
      (this.context = null),
      (this.definition = t),
      (this.context = i);
  }
  createFunction(t) {
    return (...i) => {
      const n = {
        spatialReference: this.context.spatialReference,
        console: this.context.console,
        lrucache: this.context.lrucache,
        timeReference: this.context.timeReference
          ? this.context.timeReference
          : null,
        exports: this.context.exports,
        libraryResolver: this.context.libraryResolver,
        interceptor: this.context.interceptor,
        localScope: {},
        depthCounter: { depth: t.depthCounter + 1 },
        globalScope: this.context.globalScope,
      };
      if (n.depthCounter.depth > 64) throw new s(t, c.MaximumCallDepth, null);
      return _(this.definition, n, i, null);
    };
  }
  call(t, i) {
    return j(t, i, (n, e, r) => {
      const o = {
        spatialReference: t.spatialReference,
        services: t.services,
        console: t.console,
        libraryResolver: t.libraryResolver,
        exports: t.exports,
        lrucache: t.lrucache,
        timeReference: t.timeReference ?? null,
        interceptor: t.interceptor,
        localScope: {},
        abortSignal: t.abortSignal,
        globalScope: t.globalScope,
        depthCounter: { depth: t.depthCounter.depth + 1 },
      };
      if (o.depthCounter.depth > 64) throw new s(t, c.MaximumCallDepth, i);
      return _(this.definition, o, r, i);
    });
  }
  marshalledCall(t, i, n, e) {
    return e(t, i, async (r, o, l) => {
      const u = {
        spatialReference: t.spatialReference,
        globalScope: n.globalScope,
        depthCounter: { depth: t.depthCounter.depth + 1 },
        libraryResolver: t.libraryResolver,
        exports: t.exports,
        console: t.console,
        abortSignal: t.abortSignal,
        lrucache: t.lrucache,
        timeReference: t.timeReference ?? null,
        interceptor: t.interceptor,
        localScope: {},
      };
      return (
        (l = l.map((p) => (!S(p) || p instanceof Y ? p : ne(p, t, e)))),
        ne(await _(this.definition, u, l, i), n, e)
      );
    });
  }
}
class M extends Ae {
  constructor(t) {
    super(t);
  }
  async global(t) {
    const i = this.executingContext.globalScope[t.toLowerCase()];
    if (
      (i.valueset ||
        ((i.value = await f(this.executingContext, i.node)), (i.valueset = !0)),
      S(i.value) && !(i.value instanceof Y))
    ) {
      const n = new Y();
      (n.fn = i.value),
        (n.parameterEvaluator = j),
        (n.context = this.executingContext),
        (i.value = n);
    }
    return i.value;
  }
  setGlobal(t, i) {
    if (S(i)) throw new s(null, c.AssignModuleFunction, null);
    this.executingContext.globalScope[t.toLowerCase()] = {
      value: i,
      valueset: !0,
      node: null,
    };
  }
  hasGlobal(t) {
    return (
      this.executingContext.exports[t] === void 0 && (t = t.toLowerCase()),
      this.executingContext.exports[t] !== void 0
    );
  }
  async loadModule(t) {
    let i = t.spatialReference;
    i == null && (i = new le({ wkid: 102100 })),
      (this.moduleScope = pe({}, t.customfunctions, t.timeReference)),
      (this.executingContext = {
        spatialReference: i,
        services: t.services,
        libraryResolver: new ae(
          t.libraryResolver._moduleSingletons,
          this.source.syntax.loadedModules
        ),
        exports: {},
        abortSignal:
          t.abortSignal === void 0 || t.abortSignal === null
            ? { aborted: !1 }
            : t.abortSignal,
        globalScope: this.moduleScope,
        console: t.console ? t.console : we,
        lrucache: t.lrucache,
        timeReference: t.timeReference ?? null,
        interceptor: t.interceptor,
        localScope: null,
        depthCounter: { depth: 1 },
      }),
      await f(this.executingContext, this.source.syntax);
  }
}
async function j(a, t, i) {
  if (t.preparsed === !0) {
    const e = i(a, null, t.arguments);
    return re(e), e;
  }
  const n = i(a, t, await X(a, t));
  return re(n), n;
}
async function f(a, t, i) {
  if (t.breakpoint && i !== !0) return await t.breakpoint(), f(a, t, !0);
  try {
    switch (t == null ? void 0 : t.type) {
      case "VariableDeclarator":
        return await (async function (n, e) {
          let r = null;
          if (
            ((r = e.init === null ? null : await f(n, e.init)),
            n.localScope !== null)
          ) {
            if ((r === h && (r = null), e.id.type !== "Identifier"))
              throw new s(n, c.InvalidIdentifier, e);
            const l = e.id.name.toLowerCase();
            return (
              n.localScope != null &&
                (n.localScope[l] = { value: r, valueset: !0, node: e.init }),
              h
            );
          }
          if (e.id.type !== "Identifier")
            throw new s(n, c.InvalidIdentifier, e);
          const o = e.id.name.toLowerCase();
          return (
            r === h && (r = null),
            (n.globalScope[o] = { value: r, valueset: !0, node: e.init }),
            h
          );
        })(a, t);
      case "ImportDeclaration":
        return await (async function (n, e) {
          var u, p;
          const r = e.specifiers[0].local.name.toLowerCase(),
            o = n.libraryResolver.loadLibrary(r);
          let l = null;
          return (
            (u = n.libraryResolver._moduleSingletons) != null && u.has(o.uri)
              ? (l = n.libraryResolver._moduleSingletons.get(o.uri))
              : ((l = new M(o)),
                await l.loadModule(n),
                (p = n.libraryResolver._moduleSingletons) == null ||
                  p.set(o.uri, l)),
            (n.globalScope[r] = { value: l, valueset: !0, node: e }),
            h
          );
        })(a, t);
      case "ExportNamedDeclaration":
        return await (async function (n, e) {
          if (
            (await f(n, e.declaration),
            e.declaration.type === "FunctionDeclaration")
          )
            n.exports[e.declaration.id.name.toLowerCase()] = "function";
          else if (e.declaration.type === "VariableDeclaration")
            for (const r of e.declaration.declarations)
              n.exports[r.id.name.toLowerCase()] = "variable";
          return h;
        })(a, t);
      case "VariableDeclaration":
        return await ce(a, t, 0);
      case "BlockStatement":
      case "Program":
        return await (async function (n, e) {
          return se(n, e, 0);
        })(a, t);
      case "FunctionDeclaration":
        return await (async function (n, e) {
          const r = e.id.name.toLowerCase();
          return (
            (n.globalScope[r] = {
              valueset: !0,
              node: null,
              value: new Ne(e, n),
            }),
            h
          );
        })(a, t);
      case "ReturnStatement":
        return await (async function (n, e) {
          if (e.argument === null) return new b(h);
          const r = await f(n, e.argument);
          return new b(r);
        })(a, t);
      case "IfStatement":
        return await (async function (n, e) {
          const r = await f(n, e.test);
          if (r === !0) return f(n, e.consequent);
          if (r === !1) return e.alternate !== null ? f(n, e.alternate) : h;
          throw new s(n, c.BooleanConditionRequired, e);
        })(a, t);
      case "ExpressionStatement":
        return await (async function (n, e) {
          if (e.expression.type === "AssignmentExpression")
            return f(n, e.expression);
          if (e.expression.type === "CallExpression") {
            const o = await f(n, e.expression);
            return o === h ? h : new G(o);
          }
          const r = await f(n, e.expression);
          return r === h ? h : new G(r);
        })(a, t);
      case "UpdateExpression":
        return await (async function (n, e) {
          const r = e.argument;
          if (r.type === "MemberExpression") {
            const u = { t: null },
              p = await f(n, r.object);
            let w = null;
            (u.t = p),
              r.computed === !0
                ? (w = await f(n, r.property))
                : r.property.type === "Identifier" && (w = r.property.name);
            const d = u.t;
            let g;
            if (K(d)) {
              if (!k(w)) throw new s(n, c.ArrayAccessorMustBeNumber, e);
              if ((w < 0 && (w = d.length + w), w < 0 || w >= d.length))
                throw new s(n, c.OutOfBounds, e);
              (g = m(d[w])), (d[w] = e.operator === "++" ? g + 1 : g - 1);
            } else if (d instanceof C) {
              if (y(w) === !1) throw new s(n, c.KeyAccessorMustBeString, e);
              if (d.hasField(w) !== !0)
                throw new s(n, c.FieldNotFound, e, { key: w });
              (g = m(d.field(w))),
                d.setField(w, e.operator === "++" ? g + 1 : g - 1);
            } else if (d instanceof M) {
              if (y(w) === !1) throw new s(n, c.ModuleAccessorMustBeString, e);
              if (d.hasGlobal(w) !== !0)
                throw new s(n, c.ModuleExportNotFound, e);
              (g = m(await d.global(w))),
                d.setGlobal(w, e.operator === "++" ? g + 1 : g - 1);
            } else {
              if (!O(d))
                throw D(d)
                  ? new s(n, c.Immutable, e)
                  : new s(n, c.InvalidParameter, e);
              if (y(w) === !1) throw new s(n, c.KeyAccessorMustBeString, e);
              if (d.hasField(w) !== !0)
                throw new s(n, c.FieldNotFound, e, { key: w });
              (g = m(d.field(w))),
                d.setField(w, e.operator === "++" ? g + 1 : g - 1);
            }
            return e.prefix === !1 ? g : e.operator === "++" ? g + 1 : g - 1;
          }
          const o =
            e.argument.type === "Identifier"
              ? e.argument.name.toLowerCase()
              : "";
          if (!o) throw new s(n, c.InvalidIdentifier, e);
          let l;
          if (n.localScope != null && n.localScope[o] !== void 0)
            return (
              (l = m(n.localScope[o].value)),
              (n.localScope[o] = {
                value: e.operator === "++" ? l + 1 : l - 1,
                valueset: !0,
                node: e,
              }),
              e.prefix === !1 ? l : e.operator === "++" ? l + 1 : l - 1
            );
          if (n.globalScope[o] !== void 0)
            return (
              (l = m(n.globalScope[o].value)),
              (n.globalScope[o] = {
                value: e.operator === "++" ? l + 1 : l - 1,
                valueset: !0,
                node: e,
              }),
              e.prefix === !1 ? l : e.operator === "++" ? l + 1 : l - 1
            );
          throw new s(n, c.InvalidIdentifier, e);
        })(a, t);
      case "AssignmentExpression":
        return await (async function (n, e) {
          const r = e.left;
          if (r.type === "MemberExpression") {
            const l = await f(n, r.object);
            let u = null;
            if (r.computed === !0) u = await f(n, r.property);
            else {
              if (r.property.type !== "Identifier")
                throw new s(n, c.InvalidIdentifier, e);
              u = r.property.name;
            }
            const p = await f(n, e.right);
            if (K(l)) {
              if (!k(u)) throw new s(n, c.ArrayAccessorMustBeNumber, e);
              if ((u < 0 && (u = l.length + u), u < 0 || u > l.length))
                throw new s(n, c.OutOfBounds, e);
              if (u === l.length) {
                if (e.operator !== "=") throw new s(n, c.OutOfBounds, e);
                l[u] = x(p, e.operator, l[u], e, n);
              } else l[u] = x(p, e.operator, l[u], e, n);
            } else if (l instanceof C) {
              if (y(u) === !1) throw new s(n, c.KeyAccessorMustBeString, e);
              if (l.hasField(u) === !0)
                l.setField(u, x(p, e.operator, l.field(u), e, n));
              else {
                if (e.operator !== "=")
                  throw new s(n, c.FieldNotFound, e, { key: u });
                l.setField(u, x(p, e.operator, null, e, n));
              }
            } else if (l instanceof M) {
              if (y(u) === !1) throw new s(n, c.KeyAccessorMustBeString, e);
              if (l.hasGlobal(u) !== !0)
                throw new s(n, c.ModuleExportNotFound, e);
              l.setGlobal(u, x(p, e.operator, await l.global(u), e, n));
            } else {
              if (!O(l))
                throw D(l)
                  ? new s(n, c.Immutable, e)
                  : new s(n, c.InvalidParameter, e);
              if (y(u) === !1) throw new s(n, c.KeyAccessorMustBeString, e);
              if (l.hasField(u) === !0)
                l.setField(u, x(p, e.operator, l.field(u), e, n));
              else {
                if (e.operator !== "=")
                  throw new s(n, c.FieldNotFound, e, { key: u });
                l.setField(u, x(p, e.operator, null, e, n));
              }
            }
            return h;
          }
          const o = r.name.toLowerCase();
          if (n.localScope != null && n.localScope[o] !== void 0) {
            const l = await f(n, e.right);
            return (
              (n.localScope[o] = {
                value: x(l, e.operator, n.localScope[o].value, e, n),
                valueset: !0,
                node: e.right,
              }),
              h
            );
          }
          if (n.globalScope[o] !== void 0) {
            const l = await f(n, e.right);
            return (
              (n.globalScope[o] = {
                value: x(l, e.operator, n.globalScope[o].value, e, n),
                valueset: !0,
                node: e.right,
              }),
              h
            );
          }
          throw new s(n, c.InvalidIdentifier, e);
        })(a, t);
      case "ForStatement":
        return await (function (n, e) {
          try {
            return e.init !== null
              ? f(n, e.init).then(
                  () =>
                    new Promise((r, o) => {
                      T(
                        n,
                        e,
                        { testResult: !0, lastAction: h },
                        (l) => {
                          r(l);
                        },
                        (l) => {
                          o(l);
                        },
                        0
                      );
                    })
                )
              : new Promise((r, o) => {
                  T(
                    n,
                    e,
                    { testResult: !0, lastAction: h },
                    (l) => {
                      r(l);
                    },
                    (l) => {
                      o(l);
                    },
                    0
                  );
                });
          } catch (r) {
            return Promise.reject(r);
          }
        })(a, t);
      case "WhileStatement":
        return await (async function (n, e) {
          const r = { testResult: !0, lastAction: h };
          if (((r.testResult = await f(n, e.test)), r.testResult === !1))
            return h;
          if (r.testResult !== !0)
            throw new s(n, c.BooleanConditionRequired, e);
          for (
            ;
            r.testResult === !0 &&
            ((r.lastAction = await f(n, e.body)), r.lastAction !== R) &&
            !(r.lastAction instanceof b);

          )
            if (
              ((r.testResult = await f(n, e.test)),
              r.testResult !== !0 && r.testResult !== !1)
            )
              throw new s(n, c.BooleanConditionRequired, e);
          return r.lastAction instanceof b ? r.lastAction : h;
        })(a, t);
      case "ForInStatement":
        return await (async function (n, e) {
          return new Promise((r, o) => {
            f(n, e.right).then((l) => {
              try {
                let u = null;
                (u =
                  e.left.type === "VariableDeclaration"
                    ? f(n, e.left)
                    : Promise.resolve()),
                  u.then(() => {
                    try {
                      let p = "";
                      if (e.left.type === "VariableDeclaration") {
                        const d = e.left.declarations[0].id;
                        d.type === "Identifier" && (p = d.name);
                      } else e.left.type === "Identifier" && (p = e.left.name);
                      if (!p) throw new s(n, c.InvalidIdentifier, e);
                      p = p.toLowerCase();
                      let w = null;
                      if (
                        (n.localScope != null &&
                          n.localScope[p] !== void 0 &&
                          (w = n.localScope[p]),
                        w === null &&
                          n.globalScope[p] !== void 0 &&
                          (w = n.globalScope[p]),
                        w === null)
                      )
                        return void o(new s(n, c.InvalidIdentifier, e));
                      K(l) || y(l)
                        ? W(n, e, l, { reject: o, resolve: r }, w)
                        : D(l)
                        ? (function (d, g, P, F, V, L) {
                            try {
                              if ((L === void 0 && (L = "i"), P.length === 0))
                                return void F.resolve(h);
                              J(
                                d,
                                g,
                                P,
                                V,
                                0,
                                L,
                                (N) => {
                                  F.resolve(N);
                                },
                                (N) => {
                                  F.reject(N);
                                },
                                0
                              );
                            } catch (N) {
                              F.reject(N);
                            }
                          })(n, e, l, { reject: o, resolve: r }, w)
                        : l instanceof C || O(l)
                        ? (function (d, g, P, F, V) {
                            try {
                              W(d, g, P.keys(), F, V, "k");
                            } catch (L) {
                              F.reject(L);
                            }
                          })(n, e, l, { reject: o, resolve: r }, w)
                        : xe(l)
                        ? Z(
                            l.iterator(n.abortSignal),
                            n,
                            e,
                            l,
                            w,
                            (d) => {
                              r(d);
                            },
                            (d) => {
                              o(d);
                            },
                            0
                          )
                        : W(n, e, [], { reject: o, resolve: r }, w);
                    } catch (p) {
                      o(p);
                    }
                  }, o);
              } catch (u) {
                o(u);
              }
            }, o);
          });
        })(a, t);
      case "BreakStatement":
        return R;
      case "EmptyStatement":
        return h;
      case "ContinueStatement":
        return q;
      case "TemplateElement":
        return await (async function (n, e) {
          return e.value ? e.value.cooked : "";
        })(0, t);
      case "TemplateLiteral":
        return await (async function (n, e) {
          const r = [];
          for (let u = 0; u < e.expressions.length; u++) {
            const p = await f(n, e.expressions[u]);
            r[u] = E(p);
          }
          let o = "",
            l = 0;
          for (const u of e.quasis)
            (o += u.value ? u.value.cooked : ""),
              u.tail === !1 && ((o += r[l] ? ke(r[l], n, e) : ""), l++);
          return o;
        })(a, t);
      case "Identifier":
        return await $(a, t);
      case "MemberExpression":
        return await (async function (n, e) {
          const r = await f(n, e.object);
          if (r === null) throw new s(n, c.MemberOfNull, e);
          if (e.computed === !1) {
            if (e.property.type === "Identifier") {
              if (r instanceof C || O(r)) return r.field(e.property.name);
              if (r instanceof te) return ee(r, e.property.name, n, e);
              if (r instanceof M) {
                if (!r.hasGlobal(e.property.name))
                  throw new s(n, c.InvalidIdentifier, e);
                return r.global(e.property.name);
              }
              throw new s(n, c.InvalidMemberAccessKey, e);
            }
            throw new s(n, c.InvalidMemberAccessKey, e);
          }
          let o = await f(n, e.property);
          if (r instanceof C || O(r)) {
            if (y(o)) return r.field(o);
            throw new s(n, c.InvalidMemberAccessKey, e);
          }
          if (r instanceof M) {
            if (y(o)) return r.global(o);
            throw new s(n, c.InvalidMemberAccessKey, e);
          }
          if (r instanceof te) {
            if (y(o)) return ee(r, o, n, e);
            throw new s(n, c.InvalidMemberAccessKey, e);
          }
          if (K(r)) {
            if (k(o) && isFinite(o) && Math.floor(o) === o) {
              if ((o < 0 && (o = r.length + o), o >= r.length || o < 0))
                throw new s(n, c.OutOfBounds, e);
              return r[o];
            }
            throw new s(n, c.InvalidMemberAccessKey, e);
          }
          if (D(r)) {
            if (k(o) && isFinite(o) && Math.floor(o) === o) {
              if ((o < 0 && (o = r.length() + o), o >= r.length() || o < 0))
                throw new s(n, c.OutOfBounds, e);
              return r.get(o);
            }
            throw new s(n, c.InvalidMemberAccessKey, e);
          }
          if (y(r)) {
            if (k(o) && isFinite(o) && Math.floor(o) === o) {
              if ((o < 0 && (o = r.length + o), o >= r.length || o < 0))
                throw new s(n, c.OutOfBounds, e);
              return r[o];
            }
            throw new s(n, c.InvalidMemberAccessKey, e);
          }
          throw new s(n, c.InvalidMemberAccessKey, e);
        })(a, t);
      case "Literal":
        return t.value;
      case "CallExpression":
        return await (async function (n, e) {
          if (e.callee.type === "MemberExpression") {
            const r = await f(n, e.callee.object);
            if (!(r instanceof M)) throw new s(n, c.FuncionNotFound, e);
            const o =
              e.callee.computed === !1
                ? e.callee.property.name
                : await f(n, e.callee.property);
            if (!r.hasGlobal(o)) throw new s(n, c.FuncionNotFound, e);
            const l = await r.global(o);
            if (!S(l)) throw new s(n, c.CallNonFunction, e);
            return l.call(n, e);
          }
          if (e.callee.type !== "Identifier")
            throw new s(n, c.FuncionNotFound, e);
          if (
            n.localScope != null &&
            n.localScope[e.callee.name.toLowerCase()] !== void 0
          ) {
            const r = n.localScope[e.callee.name.toLowerCase()];
            if (S(r.value)) return r.value.call(n, e);
            throw new s(n, c.CallNonFunction, e);
          }
          if (n.globalScope[e.callee.name.toLowerCase()] !== void 0) {
            const r = n.globalScope[e.callee.name.toLowerCase()];
            if (S(r.value)) return r.value.call(n, e);
            throw new s(n, c.CallNonFunction, e);
          }
          throw new s(n, c.FuncionNotFound, e);
        })(a, t);
      case "UnaryExpression":
        return await (async function (n, e) {
          const r = await f(n, e.argument);
          if (A(r)) {
            if (e.operator === "!") return !r;
            if (e.operator === "-") return -1 * m(r);
            if (e.operator === "+") return 1 * m(r);
            if (e.operator === "~") return ~m(r);
            throw new s(n, c.UnsupportedUnaryOperator, e);
          }
          if (e.operator === "-") return -1 * m(r);
          if (e.operator === "+") return 1 * m(r);
          if (e.operator === "~") return ~m(r);
          throw new s(n, c.UnsupportedUnaryOperator, e);
        })(a, t);
      case "BinaryExpression":
        return await (async function (n, e) {
          const r = [];
          (r[0] = await f(n, e.left)), (r[1] = await f(n, e.right));
          const o = r[0],
            l = r[1];
          switch (e.operator) {
            case "|":
            case "<<":
            case ">>":
            case ">>>":
            case "^":
            case "&":
              return Ie(m(o), m(l), e.operator);
            case "==":
              return H(o, l);
            case "!=":
              return !H(o, l);
            case "<":
            case ">":
            case "<=":
            case ">=":
              return Re(o, l, e.operator);
            case "+":
              return y(o) || y(l) ? E(o) + E(l) : m(o) + m(l);
            case "-":
              return m(o) - m(l);
            case "*":
              return m(o) * m(l);
            case "/":
              return m(o) / m(l);
            case "%":
              return m(o) % m(l);
            default:
              throw new s(n, c.UnsupportedOperator, e);
          }
        })(a, t);
      case "LogicalExpression":
        return await (async function (n, e) {
          const r = await f(n, e.left);
          let o = null;
          if (!A(r)) throw new s(n, c.LogicalExpressionOnlyBoolean, e);
          switch (e.operator) {
            case "||":
              if (r === !0) return r;
              if (((o = await f(n, e.right)), A(o))) return o;
              throw new s(n, c.LogicExpressionOrAnd, e);
            case "&&":
              if (r === !1) return r;
              if (((o = await f(n, e.right)), A(o))) return o;
              throw new s(n, c.LogicExpressionOrAnd, e);
            default:
              throw new s(n, c.LogicExpressionOrAnd, e);
          }
        })(a, t);
      case "ArrayExpression":
        return await (async function (n, e) {
          const r = [];
          for (let o = 0; o < e.elements.length; o++)
            r.push(await f(n, e.elements[o]));
          for (let o = 0; o < r.length; o++) {
            if (S(r[o])) throw new s(n, c.NoFunctionInArray, e);
            r[o] === h && (r[o] = null);
          }
          return r;
        })(a, t);
      case "ObjectExpression":
        return await (async function (n, e) {
          const r = [];
          for (let p = 0; p < e.properties.length; p++)
            r[p] = await f(n, e.properties[p]);
          const o = {},
            l = new Map();
          for (let p = 0; p < r.length; p++) {
            const w = r[p];
            if (S(w.value)) throw new s(n, c.NoFunctionInDictionary, e);
            if (y(w.key) === !1) throw new s(n, c.KeyMustBeString, e);
            let d = w.key.toString();
            const g = d.toLowerCase();
            l.has(g) ? (d = l.get(g)) : l.set(g, d),
              w.value === h ? (o[d] = null) : (o[d] = w.value);
          }
          const u = new C(o);
          return (u.immutable = !1), u;
        })(a, t);
      case "Property":
        return await (async function (n, e) {
          const r = await f(n, e.value);
          return e.key.type === "Identifier"
            ? { key: e.key.name, value: r }
            : { key: await f(n, e.key), value: r };
        })(a, t);
      default:
        throw new s(a, c.Unrecognised, t);
    }
  } catch (n) {
    throw Me(a, t, n);
  }
}
async function oe(a, t, i) {
  const n = await f(a, t.body);
  return (
    (i.lastAction = n),
    i.lastAction === R || i.lastAction instanceof b
      ? ((i.testResult = !1), i)
      : (t.update !== null && (await f(a, t.update)), i)
  );
}
async function Oe(a, t, i) {
  var n;
  if (t.test !== null) {
    const e = await f(a, t.test);
    if (((n = a.abortSignal) == null ? void 0 : n.aborted) === !0)
      throw new s(a, c.Cancelled, t);
    if (((i.testResult = e), i.testResult === !1)) return i;
    if (i.testResult !== !0) throw new s(a, c.BooleanConditionRequired, t);
    return oe(a, t, i);
  }
  return oe(a, t, i);
}
function T(a, t, i, n, e, r) {
  try {
    Oe(a, t, i).then(
      () => {
        try {
          i.testResult === !0
            ? ++r > U
              ? ((r = 0),
                setTimeout(() => {
                  T(a, t, i, n, e, r);
                }, 0))
              : T(a, t, i, n, e, r)
            : i.lastAction instanceof b
            ? n(i.lastAction)
            : n(h);
        } catch (o) {
          e(o);
        }
      },
      (o) => {
        e(o);
      }
    );
  } catch (o) {
    e(o);
  }
}
function z(a, t, i, n, e, r, o, l, u, p) {
  try {
    if (n <= r) return void l(h);
    (e.value = o === "k" ? i[r] : r),
      f(a, t.body).then(
        (w) => {
          try {
            w instanceof b
              ? l(w)
              : w === R
              ? l(h)
              : ++p > U
              ? ((p = 0),
                setTimeout(() => {
                  z(a, t, i, n, e, r + 1, o, l, u, p);
                }, 0))
              : z(a, t, i, n, e, r + 1, o, l, u, p);
          } catch (d) {
            u(d);
          }
        },
        (w) => {
          u(w);
        }
      );
  } catch (w) {
    u(w);
  }
}
function J(a, t, i, n, e, r, o, l, u) {
  try {
    if (i.length() <= e) return void o(h);
    (n.value = r === "k" ? i.get(e) : e),
      f(a, t.body).then(
        (p) => {
          p instanceof b
            ? o(p)
            : p === R
            ? o(h)
            : ++u > U
            ? ((u = 0),
              setTimeout(() => {
                J(a, t, i, n, e + 1, r, o, l, u);
              }, 0))
            : J(a, t, i, n, e + 1, r, o, l, u);
        },
        (p) => {
          l(p);
        }
      );
  } catch (p) {
    l(p);
  }
}
function W(a, t, i, n, e, r) {
  try {
    if ((r === void 0 && (r = "i"), i.length === 0)) return void n.resolve(h);
    z(
      a,
      t,
      i,
      i.length,
      e,
      0,
      r,
      (o) => {
        n.resolve(o);
      },
      (o) => {
        n.reject(o);
      },
      0
    );
  } catch (o) {
    n.reject(o);
  }
}
function Z(a, t, i, n, e, r, o, l) {
  try {
    a.next().then(
      (u) => {
        try {
          if (u === null) r(h);
          else {
            const p = ie.createFromGraphicLikeObject(
              u.geometry,
              u.attributes,
              n,
              t.timeReference
            );
            (p._underlyingGraphic = u),
              (e.value = p),
              f(t, i.body).then(
                (w) => {
                  try {
                    w === R
                      ? r(h)
                      : w instanceof b
                      ? r(w)
                      : ++l > U
                      ? ((l = 0),
                        setTimeout(() => {
                          Z(a, t, i, n, e, r, o, l);
                        }, 0))
                      : Z(a, t, i, n, e, r, o, l);
                  } catch (d) {
                    o(d);
                  }
                },
                (w) => {
                  o(w);
                }
              );
          }
        } catch (p) {
          o(p);
        }
      },
      (u) => {
        o(u);
      }
    );
  } catch (u) {
    o(u);
  }
}
function x(a, t, i, n, e) {
  switch (t) {
    case "=":
      return a === h ? null : a;
    case "/=":
      return m(i) / m(a);
    case "*=":
      return m(i) * m(a);
    case "-=":
      return m(i) - m(a);
    case "+=":
      return y(i) || y(a) ? E(i) + E(a) : m(i) + m(a);
    case "%=":
      return m(i) % m(a);
    default:
      throw new s(e, c.UnsupportedOperator, n);
  }
}
async function se(a, t, i) {
  if (i >= t.body.length) return h;
  const n = await f(a, t.body[i]);
  return n instanceof b || n === R || n === q || i === t.body.length - 1
    ? n
    : se(a, t, i + 1);
}
async function ce(a, t, i) {
  return (
    i >= t.declarations.length ||
      (await f(a, t.declarations[i]),
      i === t.declarations.length - 1 || (await ce(a, t, i + 1))),
    h
  );
}
async function $(a, t) {
  const i = t.name.toLowerCase();
  if (a.localScope != null && a.localScope[i] !== void 0) {
    const n = a.localScope[i];
    if (n.valueset === !0) return n.value;
    if (n.d !== null) return n.d;
    n.d = f(a, n.node);
    const e = await n.d;
    return (n.value = e), (n.valueset = !0), e;
  }
  if (a.globalScope[i] !== void 0) {
    const n = a.globalScope[i];
    if (n.valueset === !0) return n.value;
    if (n.d !== null) return n.d;
    n.d = f(a, n.node);
    const e = await n.d;
    return (n.value = e), (n.valueset = !0), e;
  }
  throw new s(a, c.InvalidIdentifier, t);
}
function ke(a, t, i) {
  if (S(a)) throw new s(t, c.NoFunctionInTemplateLiteral, i);
  return a;
}
const v = {};
async function ue(a, t, i, n) {
  const e = await f(a, t.arguments[i]);
  if (H(e, n)) return f(a, t.arguments[i + 1]);
  const r = t.arguments.length - i;
  return r === 1
    ? f(a, t.arguments[i])
    : r === 2
    ? null
    : r === 3
    ? f(a, t.arguments[i + 2])
    : ue(a, t, i + 2, n);
}
async function fe(a, t, i, n) {
  if (n === !0) return f(a, t.arguments[i + 1]);
  if (t.arguments.length - i === 3) return f(a, t.arguments[i + 2]);
  const e = await f(a, t.arguments[i + 2]);
  if (A(e) === !1) throw new s(a, c.ModuleExportNotFound, t.arguments[i + 2]);
  return fe(a, t, i + 2, e);
}
async function _(a, t, i, n) {
  const e = a.body;
  if (i.length !== a.params.length)
    throw new s(t, c.WrongNumberOfParameters, null);
  for (let o = 0; o < i.length; o++) {
    const l = a.params[o];
    l.type === "Identifier" &&
      t.localScope != null &&
      (t.localScope[l.name.toLowerCase()] = {
        d: null,
        value: i[o],
        valueset: !0,
        node: null,
      });
  }
  const r = await f(t, e);
  if (r instanceof b) return r.value;
  if (r === R) throw new s(t, c.UnexpectedToken, n);
  if (r === q) throw new s(t, c.UnexpectedToken, n);
  return r instanceof G ? r.value : r;
}
de(v, I),
  he(v, I),
  me(v, I),
  ge(v, I),
  ye(v, I),
  Le({
    functions: v,
    compiled: !1,
    signatures: null,
    evaluateIdentifier: null,
    mode: "async",
    standardFunction: I,
    standardFunctionAsync: j,
  }),
  (v.iif = async function (a, t) {
    ve(t.arguments === null ? [] : t.arguments, 3, 3, a, t);
    const i = await f(a, t.arguments[0]);
    if (A(i) === !1) throw new s(a, c.BooleanConditionRequired, t);
    return f(a, i ? t.arguments[1] : t.arguments[2]);
  }),
  (v.decode = async function (a, t) {
    if (t.arguments.length < 2) throw new s(a, c.WrongNumberOfParameters, t);
    if (t.arguments.length === 2) return f(a, t.arguments[1]);
    if ((t.arguments.length - 1) % 2 == 0)
      throw new s(a, c.WrongNumberOfParameters, t);
    return ue(a, t, 1, await f(a, t.arguments[0]));
  }),
  (v.when = async function (a, t) {
    if (t.arguments.length < 3) throw new s(a, c.WrongNumberOfParameters, t);
    if (t.arguments.length % 2 == 0)
      throw new s(a, c.WrongNumberOfParameters, t);
    const i = await f(a, t.arguments[0]);
    if (A(i) === !1) throw new s(a, c.BooleanConditionRequired, t.arguments[0]);
    return fe(a, t, 0, i);
  });
const Ee = {
  fixSpatialReference: Fe,
  parseArguments: X,
  standardFunction: I,
  standardFunctionAsync: j,
  evaluateIdentifier: $,
};
for (const a in v) v[a] = { value: new Q(v[a]), valueset: !0, node: null };
const B = function () {};
function pe(a, t, i) {
  const n = new B();
  a == null && (a = {}), t == null && (t = {});
  const e = new C({
    newline: `
`,
    tab: "	",
    singlequote: "'",
    doublequote: '"',
    forwardslash: "/",
    backwardslash: "\\",
  });
  (e.immutable = !1),
    (n.textformatting = { value: e, valueset: !0, node: null });
  for (const r in t)
    n[r] = { value: new Q(t[r]), native: !0, valueset: !0, node: null };
  for (const r in a)
    a[r] && a[r].declaredClass === "esri.Graphic"
      ? (n[r] = {
          value: ie.createFromGraphic(a[r], i),
          valueset: !0,
          node: null,
        })
      : (n[r] = { value: a[r], valueset: !0, node: null });
  return n;
}
function we(a) {}
(B.prototype = v),
  (B.prototype.infinity = {
    value: Number.POSITIVE_INFINITY,
    valueset: !0,
    node: null,
  }),
  (B.prototype.pi = { value: Math.PI, valueset: !0, node: null });
const Ze = Ee;
function Be(a) {
  const t = {
    mode: "async",
    compiled: !1,
    functions: {},
    signatures: [],
    standardFunction: I,
    standardFunctionAsync: j,
    evaluateIdentifier: $,
  };
  for (let i = 0; i < a.length; i++) a[i].registerFunctions(t);
  for (const i in t.functions)
    (v[i] = { value: new Q(t.functions[i]), valueset: !0, node: null }),
      (B.prototype[i] = v[i]);
  for (let i = 0; i < t.signatures.length; i++) be(t.signatures[i], "async");
}
async function Qe(a, t) {
  let i = t.spatialReference;
  i == null && (i = new le({ wkid: 102100 }));
  let n = null;
  a.usesModules && (n = new ae(new Map(), a.loadedModules));
  const e = pe(t.vars, t.customfunctions, t.timeReference),
    r = {
      spatialReference: i,
      services: t.services,
      exports: {},
      libraryResolver: n,
      abortSignal:
        t.abortSignal === void 0 || t.abortSignal === null
          ? { aborted: !1 }
          : t.abortSignal,
      globalScope: e,
      console: t.console ? t.console : we,
      timeReference: t.timeReference ?? null,
      lrucache: t.lrucache,
      interceptor: t.interceptor,
      localScope: null,
      depthCounter: { depth: 1 },
    };
  let o = await f(r, a);
  if (
    (o instanceof b && (o = o.value),
    o instanceof G && (o = o.value),
    o === h && (o = null),
    o === R)
  )
    throw new s(r, c.IllegalResult, null);
  if (o === q) throw new s(r, c.IllegalResult, null);
  if (S(o)) throw new s(r, c.IllegalResult, null);
  return o;
}
Be([Se]);
export { Qe as executeScript, Be as extend, Ze as functionHelper };
