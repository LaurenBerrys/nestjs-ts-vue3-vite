import {
  aH as ee,
  hV as Ie,
  bS as M,
  a0 as be,
  al as P,
  cV as Ce,
  gr as G,
  l5 as _e,
  l6 as ye,
  av as L,
  g8 as De,
  ah as Re,
  gK as Te,
  l7 as le,
  ic as T,
  U as j,
  cM as ke,
  jk as oe,
  e1 as ue,
  g9 as ve,
  j5 as xe,
  de as Ne,
  l8 as de,
  O as Ae,
} from "./index.8fd7165c.js";
import {
  f as N,
  o as b,
  n as C,
  s as v,
  t as x,
} from "./WhereClause.ae196341.js";
import {
  v as A,
  t as y,
  m as O,
  p as Q,
  u as R,
  g as Le,
  L as Oe,
  T as z,
  h as he,
  R as Ee,
  N as ge,
  f as Pe,
  A as V,
  S as qe,
  a as q,
  b as Ge,
  c as je,
  d as g,
} from "./SpatialFilter.a4e03d79.js";
import {
  _ as te,
  $ as S,
  a0 as Ue,
  a1 as k,
  w as Be,
  a2 as W,
  a3 as ie,
  a4 as Me,
  a5 as Z,
  b as We,
  a6 as Qe,
} from "./arcadeUtils.2f855605.js";
import { c as ce } from "./arcadeTimeUtils.e79f2f70.js";
import { n as Ve, s as Je } from "./executeForIds.3a002380.js";
let me = class {
  constructor() {
    (this.declaredRootClass = "esri.arcade.featureSetCollection"),
      (this._layerById = {}),
      (this._layerByName = {});
  }
  add(c, e, t) {
    (this._layerById[e] = t), (this._layerByName[c] = t);
  }
  async featureSetByName(c, e = !0, t = ["*"]) {
    return this._layerByName[c] === void 0 ? null : this._layerByName[c];
  }
  async featureSetById(c, e = !0, t = ["*"]) {
    return this._layerById[c] === void 0 ? null : this._layerById[c];
  }
  castToText(c = !1) {
    return "object, FeatureSetCollection";
  }
};
class U extends A {
  constructor(e) {
    super(e),
      (this.declaredClass = "esri.arcade.featureset.actions.AttributeFilter"),
      (this._maxProcessing = 1e3),
      (this._parent = e.parentfeatureset),
      e.whereclause instanceof N
        ? ((this._whereclause = e.whereclause),
          (this._whereClauseFunction = null))
        : ((this._whereClauseFunction = e.whereclause),
          (this._whereclause = null));
  }
  _initialiseFeatureSet() {
    this._parent !== null
      ? ((this.fields = this._parent.fields.slice(0)),
        (this.geometryType = this._parent.geometryType),
        (this.objectIdField = this._parent.objectIdField),
        (this.globalIdField = this._parent.globalIdField),
        (this.spatialReference = this._parent.spatialReference),
        (this.hasM = this._parent.hasM),
        (this.hasZ = this._parent.hasZ),
        (this.typeIdField = this._parent.typeIdField),
        (this.types = this._parent.types))
      : ((this.fields = []),
        (this.typeIdField = ""),
        (this.objectIdField = ""),
        (this.globalIdField = ""),
        (this.spatialReference = new ee({ wkid: 4326 })),
        (this.geometryType = te.point));
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._parent._getFilteredSet(
        "",
        null,
        this._whereclause,
        null,
        e
      );
      return (
        this._checkCancelled(e),
        this._whereClauseFunction !== null
          ? (this._wset = new y(
              t._candidates.slice(0).concat(t._known.slice(0)),
              [],
              t._ordered,
              this._clonePageDefinition(t.pagesDefinition)
            ))
          : (this._wset = new y(
              t._candidates.slice(0),
              t._known.slice(0),
              t._ordered,
              this._clonePageDefinition(t.pagesDefinition)
            )),
        this._wset
      );
    }
    return this._wset;
  }
  _isInFeatureSet(e) {
    var i;
    let t = (i = this._parent) == null ? void 0 : i._isInFeatureSet(e);
    return t === S.NotInFeatureSet
      ? t
      : ((t = this._idstates[e]), t === void 0 ? S.Unknown : t);
  }
  _getFeature(e, t, i) {
    return this._parent._getFeature(e, t, i);
  }
  _getFeatures(e, t, i, s) {
    return this._parent._getFeatures(e, t, i, s);
  }
  _featureFromCache(e) {
    return this._parent._featureFromCache(e);
  }
  executeWhereClause(e) {
    var t;
    return ((t = this._whereclause) == null ? void 0 : t.testFeature(e)) ?? !1;
  }
  async executeWhereClauseDeferred(e) {
    if (this._whereClauseFunction !== null) {
      const t = this._whereClauseFunction(e);
      return Ie(t), t;
    }
    return this.executeWhereClause(e);
  }
  async _fetchAndRefineFeatures(e, t, i) {
    var n, l, o;
    const s = new y([], e, !1, null),
      r = Math.min(t, e.length);
    if (
      (await ((n = this._parent) == null
        ? void 0
        : n._getFeatures(s, -1, r, i)),
      this._checkCancelled(i),
      this._whereClauseFunction == null)
    ) {
      for (let u = 0; u < r; u++) {
        const d =
          (l = this._parent) == null ? void 0 : l._featureFromCache(e[u]);
        this.executeWhereClause(d) === !0
          ? (this._idstates[e[u]] = S.InFeatureSet)
          : (this._idstates[e[u]] = S.NotInFeatureSet);
      }
      return "success";
    }
    const a = [];
    for (let u = 0; u < r; u++) {
      const d = (o = this._parent) == null ? void 0 : o._featureFromCache(e[u]);
      a.push(await this.executeWhereClauseDeferred(d));
    }
    for (let u = 0; u < t; u++)
      a[u] === !0
        ? (this._idstates[e[u]] = S.InFeatureSet)
        : (this._idstates[e[u]] = S.NotInFeatureSet);
    return "success";
  }
  async _getFilteredSet(e, t, i, s, r) {
    this._whereClauseFunction !== null ||
      (i !== null
        ? this._whereclause !== null && (i = O(this._whereclause, i))
        : (i = this._whereclause)),
      await this._ensureLoaded();
    const a = await this._parent._getFilteredSet(e, t, i, s, r);
    let n;
    return (
      this._checkCancelled(r),
      (n =
        this._whereClauseFunction !== null
          ? new y(
              a._candidates.slice(0).concat(a._known.slice(0)),
              [],
              a._ordered,
              this._clonePageDefinition(a.pagesDefinition)
            )
          : new y(
              a._candidates.slice(0),
              a._known.slice(0),
              a._ordered,
              this._clonePageDefinition(a.pagesDefinition)
            )),
      n
    );
  }
  async _stat(e, t, i, s, r, a, n) {
    if (this._whereClauseFunction !== null)
      return r === null && i === "" && s === null
        ? this._manualStat(e, t, a, n)
        : { calculated: !1 };
    let l = this._whereclause;
    r !== null && this._whereclause !== null && (l = O(this._whereclause, r));
    const o = await this._parent._stat(e, t, i, s, l, a, n);
    return o.calculated === !1
      ? r === null && i === "" && s === null
        ? this._manualStat(e, t, a, n)
        : { calculated: !1 }
      : o;
  }
  async _canDoAggregates(e, t, i, s, r) {
    return (
      this._whereClauseFunction === null &&
      (r !== null
        ? this._whereclause !== null && (r = O(this._whereclause, r))
        : (r = this._whereclause),
      this._parent !== null && this._parent._canDoAggregates(e, t, i, s, r))
    );
  }
  async _getAggregatePagesDataSourceDefinition(e, t, i, s, r, a, n) {
    if (this._parent === null) throw new b(C.NeverReach);
    return (
      r !== null
        ? this._whereclause !== null && (r = O(this._whereclause, r))
        : (r = this._whereclause),
      this._parent._getAggregatePagesDataSourceDefinition(e, t, i, s, r, a, n)
    );
  }
  static registerAction() {
    A._featuresetFunctions.filter = function (e) {
      if (typeof e == "function")
        return new U({ parentfeatureset: this, whereclause: e });
      let t = null;
      return (
        e instanceof N && (t = e),
        new U({ parentfeatureset: this, whereclause: t })
      );
    };
  }
}
class J {
  constructor(e) {
    (this.field = e), (this.sqlRewritable = !1);
  }
  postInitialization(e, t) {}
}
let X = class extends J {
  constructor(c) {
    super(c), (this.sqlRewritable = !0);
  }
  extractValue(c) {
    return c.attributes[this.field.name];
  }
  rewriteSql(c) {
    return { rewritten: this.sqlRewritable, where: c };
  }
};
class ze extends J {
  constructor(e, t, i) {
    super(Ue(e)),
      (this.originalField = e),
      (this.sqlRewritable = !0),
      (this.field.name = t),
      (this.field.alias = i);
  }
  rewriteSql(e, t) {
    return {
      rewritten: this.sqlRewritable,
      where: Q(e, this.field.name, this.originalField.name, t.getFieldsIndex()),
    };
  }
  extractValue(e) {
    return e.attributes[this.originalField.name];
  }
}
let Ke = class w extends J {
  constructor(e, t, i) {
    super(e), (this.codefield = t), (this.lkp = i), (this.reverseLkp = {});
    for (const s in i) this.reverseLkp[i[s]] = s;
    this.sqlRewritable = !0;
  }
  rewriteSql(e, t) {
    const i = this.evaluateNodeToWhereClause(
      e.parseTree,
      k.Standardised,
      this.field.name,
      this.codefield instanceof N
        ? R(this.codefield, k.Standardised)
        : this.codefield,
      e.parameters
    );
    return i.includes(w.BADNESS)
      ? { rewritten: !1, where: e }
      : {
          rewritten: this.sqlRewritable,
          where: N.create(i, M(t._parent).getFieldsIndex()),
        };
  }
  evaluateNodeToWhereClause(e, t, i = null, s = null, r) {
    let a, n, l, o;
    switch (e.type) {
      case "interval":
        return Ee(
          this.evaluateNodeToWhereClause(e.value, t, i, s, r),
          e.qualifier,
          e.op
        );
      case "case-expression": {
        let u = " CASE ";
        e.format === "simple" &&
          (u += this.evaluateNodeToWhereClause(e.operand, t, i, w.BADNESS, r));
        for (let d = 0; d < e.clauses.length; d++)
          u +=
            " WHEN " +
            this.evaluateNodeToWhereClause(
              e.clauses[d].operand,
              t,
              i,
              w.BADNESS,
              r
            ) +
            " THEN " +
            this.evaluateNodeToWhereClause(
              e.clauses[d].value,
              t,
              i,
              w.BADNESS,
              r
            );
        return (
          e.else !== null &&
            (u +=
              " ELSE " +
              this.evaluateNodeToWhereClause(e.else, t, i, w.BADNESS, r)),
          (u += " END "),
          u
        );
      }
      case "parameter": {
        const u = r[e.value.toLowerCase()];
        if (typeof u == "string")
          return "'" + u.toString().replace(/'/g, "''") + "'";
        if (u instanceof Date) return z(u, t, null);
        if (u instanceof ce) return he(u, t, null);
        if (u instanceof Array) {
          const d = [];
          for (let h = 0; h < u.length; h++)
            typeof u[h] == "string"
              ? d.push("'" + u[h].toString().replace(/'/g, "''") + "'")
              : u[h] instanceof Date
              ? d.push(z(u[h], t, null))
              : u[h] instanceof ce
              ? d.push(he(u[h], t, null))
              : d.push(u[h].toString());
          return d;
        }
        return u.toString();
      }
      case "expression-list":
        n = [];
        for (const u of e.value)
          n.push(this.evaluateNodeToWhereClause(u, t, i, s, r));
        return n;
      case "unary-expression":
        return (
          " ( NOT " +
          this.evaluateNodeToWhereClause(e.expr, t, i, w.BADNESS, r) +
          " ) "
        );
      case "binary-expression":
        switch (e.operator) {
          case "AND":
            return (
              " (" +
              this.evaluateNodeToWhereClause(e.left, t, i, s, r) +
              " AND " +
              this.evaluateNodeToWhereClause(e.right, t, i, s, r) +
              ") "
            );
          case "OR":
            return (
              " (" +
              this.evaluateNodeToWhereClause(e.left, t, i, s, r) +
              " OR " +
              this.evaluateNodeToWhereClause(e.right, t, i, s, r) +
              ") "
            );
          case "IS":
            if (e.right.type !== "null") throw new v(x.UnsupportedIsRhs);
            return (
              " (" +
              this.evaluateNodeToWhereClause(e.left, t, i, s, r) +
              " IS NULL )"
            );
          case "ISNOT":
            if (e.right.type !== "null") throw new v(x.UnsupportedIsRhs);
            return (
              " (" +
              this.evaluateNodeToWhereClause(e.left, t, i, s, r) +
              " IS NOT NULL )"
            );
          case "IN":
            if (((a = []), e.right.type === "expression-list")) {
              if (
                e.left.type === "column-reference" &&
                e.left.column.toUpperCase() === this.field.name.toUpperCase()
              ) {
                const u = [];
                let d = !0;
                for (const h of e.right.value) {
                  if (h.type !== "string") {
                    d = !1;
                    break;
                  }
                  if (this.lkp[h.value] === void 0) {
                    d = !1;
                    break;
                  }
                  u.push(this.lkp[h.value].toString());
                }
                if (d)
                  return (
                    " (" +
                    this.evaluateNodeToWhereClause(e.left, t, i, s, r) +
                    " IN (" +
                    u.join(",") +
                    ")) "
                  );
              }
              return (
                (a = this.evaluateNodeToWhereClause(e.right, t, i, s, r)),
                " (" +
                  this.evaluateNodeToWhereClause(e.left, t, i, s, r) +
                  " IN (" +
                  a.join(",") +
                  ")) "
              );
            }
            return (
              (o = this.evaluateNodeToWhereClause(e.right, t, i, s, r)),
              o instanceof Array
                ? " (" +
                  this.evaluateNodeToWhereClause(e.left, t, i, s, r) +
                  " IN (" +
                  o.join(",") +
                  ")) "
                : " (" +
                  this.evaluateNodeToWhereClause(e.left, t, i, s, r) +
                  " IN (" +
                  o +
                  ")) "
            );
          case "NOT IN":
            if (((a = []), e.right.type === "expression-list")) {
              if (
                e.left.type === "column-reference" &&
                e.left.column.toUpperCase() === this.field.name.toUpperCase()
              ) {
                const u = [];
                let d = !0;
                for (const h of e.right.value) {
                  if (h.type !== "string") {
                    d = !1;
                    break;
                  }
                  if (this.lkp[h.value] === void 0) {
                    d = !1;
                    break;
                  }
                  u.push(this.lkp[h.value].toString());
                }
                if (d)
                  return (
                    " (" +
                    this.evaluateNodeToWhereClause(e.left, t, i, s, r) +
                    " NOT IN (" +
                    u.join(",") +
                    ")) "
                  );
              }
              return (
                (a = this.evaluateNodeToWhereClause(e.right, t, i, s, r)),
                " (" +
                  this.evaluateNodeToWhereClause(e.left, t, i, s, r) +
                  " NOT IN (" +
                  a.join(",") +
                  ")) "
              );
            }
            return (
              (o = this.evaluateNodeToWhereClause(e.right, t, i, s, r)),
              o instanceof Array
                ? " (" +
                  this.evaluateNodeToWhereClause(e.left, t, i, s, r) +
                  " NOT IN (" +
                  o.join(",") +
                  ")) "
                : " (" +
                  this.evaluateNodeToWhereClause(e.left, t, i, s, r) +
                  " NOT IN (" +
                  o +
                  ")) "
            );
          case "BETWEEN":
            return (
              (l = this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r)),
              " (" +
                this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) +
                " BETWEEN " +
                l[0] +
                " AND " +
                l[1] +
                " ) "
            );
          case "NOTBETWEEN":
            return (
              (l = this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r)),
              " (" +
                this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) +
                " NOT BETWEEN " +
                l[0] +
                " AND " +
                l[1] +
                " ) "
            );
          case "LIKE":
            return e.escape !== ""
              ? " (" +
                  this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) +
                  " LIKE " +
                  this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r) +
                  " ESCAPE '" +
                  e.escape +
                  "') "
              : " (" +
                  this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) +
                  " LIKE " +
                  this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r) +
                  ") ";
          case "NOT LIKE":
            return e.escape !== ""
              ? " (" +
                  this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) +
                  " NOT LIKE " +
                  this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r) +
                  " ESCAPE '" +
                  e.escape +
                  "') "
              : " (" +
                  this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) +
                  " NOT LIKE " +
                  this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r) +
                  ") ";
          case "<>":
          case "=":
            if (
              e.left.type === "column-reference" &&
              e.right.type === "string"
            ) {
              if (
                e.left.column.toUpperCase() === this.field.name.toUpperCase() &&
                this.lkp[e.right.value.toString()] !== void 0
              )
                return (
                  " (" +
                  s +
                  " " +
                  e.operator +
                  " " +
                  this.lkp[e.right.value.toString()].toString() +
                  ") "
                );
            } else if (
              e.right.type === "column-reference" &&
              e.left.type === "string" &&
              e.right.column.toUpperCase() === this.field.name.toUpperCase()
            )
              return (
                " (" +
                this.lkp[e.right.value.toString()].toString() +
                " " +
                e.operator +
                " " +
                s +
                ") "
              );
            return (
              " (" +
              this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) +
              " " +
              e.operator +
              " " +
              this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r) +
              ") "
            );
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "*":
          case "-":
          case "+":
          case "/":
          case "||":
            return (
              " (" +
              this.evaluateNodeToWhereClause(e.left, t, i, w.BADNESS, r) +
              " " +
              e.operator +
              " " +
              this.evaluateNodeToWhereClause(e.right, t, i, w.BADNESS, r) +
              ") "
            );
        }
      case "null":
        return "null";
      case "boolean":
        return e.value === !0 ? "1" : "0";
      case "string":
        return "'" + e.value.toString().replace(/'/g, "''") + "'";
      case "timestamp":
      case "date":
        return z(e.value, t, null);
      case "number":
        return e.value.toString();
      case "current-time":
        return Oe(e.mode === "date", t);
      case "column-reference":
        return i && i.toLowerCase() === e.column.toLowerCase()
          ? "(" + s + ")"
          : e.column;
      case "data-type":
        return e.value;
      case "function": {
        const u = this.evaluateNodeToWhereClause(e.args, t, i, w.BADNESS, r);
        return Le(e.name, u, t);
      }
    }
    throw new v(x.UnsupportedSyntax, { node: e.type });
  }
  extractValue(e) {
    return this.codefield instanceof N
      ? this.reverseLkp[this.codefield.calculateValueCompiled(e)]
      : this.reverseLkp[e.attributes[this.codefield]];
  }
};
Ke.BADNESS = "_!!!_BAD_LKP_!!!!";
class Ze extends J {
  constructor(e, t) {
    super(e), (this._sql = t);
  }
  rewriteSql(e, t) {
    return {
      rewritten: !0,
      where: Q(
        e,
        this.field.name,
        R(this._sql, k.Standardised),
        t.getFieldsIndex()
      ),
    };
  }
  extractValue(e) {
    return this._sql.calculateValueCompiled(e);
  }
}
class Xe extends A {
  static findField(e, t) {
    for (const i of e)
      if (i.name.toLowerCase() === t.toString().toLowerCase()) return i;
    return null;
  }
  constructor(e) {
    super(e),
      (this._calcFunc = null),
      (this.declaredClass = "esri.arcade.featureset.actions.Adapted"),
      (this.adaptedFields = []),
      (this._extraFilter = null),
      (this._extraFilter = e.extraFilter),
      (this._parent = e.parentfeatureset),
      (this._maxProcessing = 30),
      (this.adaptedFields = e.adaptedFields);
  }
  _initialiseFeatureSet() {
    this._parent !== null
      ? ((this.geometryType = this._parent.geometryType),
        (this.objectIdField = this._parent.objectIdField),
        (this.globalIdField = this._parent.globalIdField),
        (this.spatialReference = this._parent.spatialReference),
        (this.hasM = this._parent.hasM),
        (this.hasZ = this._parent.hasZ),
        (this.typeIdField = this._parent.typeIdField),
        (this.types = this._parent.types))
      : ((this.spatialReference = new ee({ wkid: 4326 })),
        (this.objectIdField = ""),
        (this.globalIdField = ""),
        (this.geometryType = te.point),
        (this.typeIdField = ""),
        (this.types = null)),
      (this.fields = []);
    for (const e of this.adaptedFields)
      e.postInitialization(this, this._parent), this.fields.push(e.field);
  }
  async _getSet(e) {
    var t;
    if (this._wset === null) {
      await this._ensureLoaded();
      let i = null;
      return (
        (i = this._extraFilter
          ? await this._getFilteredSet("", null, null, null, e)
          : await ((t = this._parent) == null ? void 0 : t._getSet(e))),
        this._checkCancelled(e),
        be(i),
        (this._wset = new y(
          i._candidates.slice(0),
          i._known.slice(0),
          i._ordered,
          this._clonePageDefinition(i.pagesDefinition)
        )),
        this._wset
      );
    }
    return this._wset;
  }
  _isInFeatureSet(e) {
    return M(this._parent)._isInFeatureSet(e);
  }
  async _getFeatures(e, t, i, s) {
    var u, d;
    const r = [];
    t !== -1 && this._featureCache[t] === void 0 && r.push(t);
    const a = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(e, a) === !0)
      return (
        await this._expandPagedSet(e, a, 0, 0, s), this._getFeatures(e, t, i, s)
      );
    let n = 0;
    for (
      let h = e._lastFetchedIndex;
      h < e._known.length &&
      (n++,
      n <= i && (e._lastFetchedIndex += 1),
      !(
        this._featureCache[e._known[h]] === void 0 &&
        (e._known[h] !== t && r.push(e._known[h]), r.length >= a)
      ));
      h++
    );
    if (r.length === 0) return "success";
    e = new y([], r, e._ordered, null);
    const l = Math.min(r.length, i);
    await ((u = this._parent) == null ? void 0 : u._getFeatures(e, -1, l, s)),
      this._checkCancelled(s);
    const o = [];
    for (let h = 0; h < l; h++) {
      const f = (d = this._parent) == null ? void 0 : d._featureFromCache(r[h]);
      f !== void 0 &&
        o.push({ geometry: f.geometry, attributes: f.attributes, id: r[h] });
    }
    for (const h of o) {
      const f = [];
      for (const _ of this.adaptedFields) f[_.field.name] = _.extractValue(h);
      this._featureCache[h.id] = new P({
        attributes: f,
        geometry: Be(h.geometry),
      });
    }
    return "success";
  }
  async _fetchAndRefineFeatures() {
    throw new b(C.NeverReach);
  }
  async _getFilteredSet(e, t, i, s, r) {
    let a = !1;
    const n = this._reformulateWithoutAdaptions(i);
    (a = n.cannot), (i = n.where);
    let l = !1;
    if (s !== null) {
      l = !0;
      const d = [];
      for (const h of this.adaptedFields)
        if (!(h instanceof X) && s.scanForField(h.field.name) === !0) {
          if (!(h instanceof ze)) {
            (s = null), (l = !1);
            break;
          }
          d.push({ field: h.field.name, newfield: h.originalField.name });
        }
      s && d.length > 0 && (s = s.replaceFields(d));
    }
    i !== null
      ? this._extraFilter !== null && (i = O(this._extraFilter, i))
      : (i = this._extraFilter),
      await this._ensureLoaded();
    const o = await M(this._parent)._getFilteredSet(e, t, i, s, r);
    let u;
    return (
      this._checkCancelled(r),
      (u =
        a === !0
          ? new y(
              o._candidates.slice(0).concat(o._known.slice(0)),
              [],
              l === !0 && o._ordered,
              this._clonePageDefinition(o.pagesDefinition)
            )
          : new y(
              o._candidates.slice(0),
              o._known.slice(0),
              l === !0 && o._ordered,
              this._clonePageDefinition(o.pagesDefinition)
            )),
      u
    );
  }
  _reformulateWithoutAdaptions(e) {
    const t = { cannot: !1, where: e };
    if (e !== null) {
      for (const i of this.adaptedFields)
        if (ge(e, i.field.name) === !0) {
          const s = i.rewriteSql(e, this);
          if (s.rewritten !== !0) {
            (t.cannot = !0), (t.where = null);
            break;
          }
          t.where = s.where;
        }
    }
    return t;
  }
  async _stat(e, t, i, s, r, a, n) {
    let l = !1,
      o = this._reformulateWithoutAdaptions(t);
    if (
      ((l = o.cannot),
      (t = o.where),
      (o = this._reformulateWithoutAdaptions(r)),
      (l = l || o.cannot),
      (r = o.where) !== null
        ? this._extraFilter !== null && (r = O(this._extraFilter, r))
        : (r = this._extraFilter),
      l === !0)
    )
      return r === null && i === "" && s === null
        ? this._manualStat(e, t, a, n)
        : { calculated: !1 };
    const u = await M(this._parent)._stat(e, t, i, s, r, a, n);
    return u.calculated === !1
      ? r === null && i === "" && s === null
        ? this._manualStat(e, t, a, n)
        : { calculated: !1 }
      : u;
  }
  async _canDoAggregates(e, t, i, s, r) {
    if (this._parent === null) return !1;
    for (let l = 0; l < e.length; l++)
      for (const o of this.adaptedFields)
        if (
          e[l].toLowerCase() === o.field.name.toLowerCase() &&
          !(o instanceof X)
        )
          return !1;
    const a = [];
    for (let l = 0; l < t.length; l++) {
      const o = t[l];
      if (o.workingexpr !== null) {
        const u = this._reformulateWithoutAdaptions(o.workingexpr);
        if (u.cannot) return !1;
        const d = o.clone();
        (d.workingexpr = u.where), a.push(d);
      } else a.push(o);
    }
    const n = this._reformulateWithoutAdaptions(r);
    return (
      !n.cannot &&
      ((r = n.where) !== null
        ? this._extraFilter !== null && (r = O(this._extraFilter, r))
        : (r = this._extraFilter),
      this._parent._canDoAggregates(e, a, i, s, r))
    );
  }
  async _getAggregatePagesDataSourceDefinition(e, t, i, s, r, a, n) {
    if (this._parent === null) throw new b(C.NeverReach);
    const l = [];
    for (let u = 0; u < t.length; u++) {
      const d = t[u];
      if (d.workingexpr !== null) {
        const h = this._reformulateWithoutAdaptions(d.workingexpr);
        if (h.cannot) throw new b(C.NeverReach);
        const f = d.clone();
        (f.workingexpr = h.where), l.push(f);
      } else l.push(d);
    }
    const o = this._reformulateWithoutAdaptions(r);
    if (o.cannot) throw new b(C.NeverReach);
    return (
      (r = o.where) !== null
        ? this._extraFilter !== null && (r = O(this._extraFilter, r))
        : (r = this._extraFilter),
      this._parent._getAggregatePagesDataSourceDefinition(e, l, i, s, r, a, n)
    );
  }
}
function fe(c, e) {
  return c === e ? 0 : c === null ? -1 : e === null ? 1 : c < e ? -1 : 1;
}
class B {
  constructor(e) {
    const t = e.split(",");
    (this._fields = []), (this._directions = []);
    for (let i = 0; i < t.length; i++) {
      const s = t[i].match(/\S+/g);
      this._fields.push(s[0]),
        s.length === 2
          ? s[1].toLowerCase() === "asc"
            ? this._directions.push(1)
            : this._directions.push(0)
          : this._directions.push(1);
    }
  }
  constructClause() {
    let e = "";
    for (let t = 0; t < this._fields.length; t++)
      t !== 0 && (e += ","),
        (e += this._fields[t]),
        this._directions[t] === 1 ? (e += " ASC") : (e += " DESC");
    return e;
  }
  order(e) {
    e.sort((t, i) => {
      for (let s = 0; s < this._fields.length; s++) {
        const r = this.featureValue(t.feature, this._fields[s], s),
          a = this.featureValue(i.feature, this._fields[s], s);
        let n = 0;
        if (
          ((n = this._directions[s] === 1 ? fe(r, a) : -1 * fe(r, a)), n !== 0)
        )
          return n;
      }
      return 0;
    });
  }
  scanForField(e) {
    for (let t = 0; t < this._fields.length; t++)
      if (this._fields[t].toLowerCase().trim() === e.toLowerCase().trim())
        return !0;
    return !1;
  }
  replaceFields(e) {
    let t = "";
    for (let i = 0; i < this._fields.length; i++) {
      i !== 0 && (t += ",");
      let s = this._fields[i];
      for (const r of e)
        if (s.toLowerCase() === r.field.toLowerCase()) {
          s = r.newfield;
          break;
        }
      (t += s), this._directions[i] === 1 ? (t += " ASC") : (t += " DESC");
    }
    return new B(t);
  }
  featureValue(e, t, i) {
    const s = e.attributes[t];
    if (s !== void 0) return s;
    for (const r in e.attributes)
      if (t.toLowerCase() === r.toLowerCase())
        return (this._fields[i] = r), e.attributes[r];
    return null;
  }
}
let K = class we extends A {
    constructor(e) {
      super(e),
        (this._orderbyclause = null),
        (this.declaredClass = "esri.arcade.featureset.actions.OrderBy"),
        (this._maxProcessing = 100),
        (this._orderbyclause = e.orderbyclause),
        (this._parent = e.parentfeatureset);
    }
    async _getSet(e) {
      if (this._wset === null) {
        await this._ensureLoaded();
        const t = await this._getFilteredSet(
          "",
          null,
          null,
          this._orderbyclause,
          e
        );
        return this._checkCancelled(e), (this._wset = t), this._wset;
      }
      return this._wset;
    }
    async manualOrderSet(e, t) {
      var r;
      const i = await this.getIdColumnDictionary(e, [], -1, t);
      (r = this._orderbyclause) == null || r.order(i);
      const s = new y([], [], !0, null);
      for (let a = 0; a < i.length; a++) s._known.push(i[a].id);
      return s;
    }
    async getIdColumnDictionary(e, t, i, s) {
      if (i < e._known.length - 1) {
        const r = this._maxQueryRate();
        if (e._known[i + 1] === "GETPAGES")
          return (
            await W(this._parent._expandPagedSet(e, r, 0, 0, s)),
            this.getIdColumnDictionary(e, t, i, s)
          );
        let a = i + 1;
        const n = [];
        for (; a < e._known.length && e._known[a] !== "GETPAGES"; )
          n.push(e._known[a]), a++;
        i += n.length;
        const l = await W(this._parent._getFeatureBatch(n, s));
        this._checkCancelled(s);
        for (const o of l)
          t.push({ id: o.attributes[this.objectIdField], feature: o });
        return this.getIdColumnDictionary(e, t, i, s);
      }
      return e._candidates.length > 0
        ? (await W(this._refineSetBlock(e, this._maxProcessingRate(), s)),
          this._checkCancelled(s),
          this.getIdColumnDictionary(e, t, i, s))
        : t;
    }
    _isInFeatureSet(e) {
      return this._parent._isInFeatureSet(e);
    }
    _getFeatures(e, t, i, s) {
      return this._parent._getFeatures(e, t, i, s);
    }
    _featureFromCache(e) {
      if (this._featureCache[e] === void 0) {
        const t = this._parent._featureFromCache(e);
        return t === void 0
          ? void 0
          : t === null
          ? null
          : ((this._featureCache[e] = t), t);
      }
      return this._featureCache[e];
    }
    async _fetchAndRefineFeatures() {
      throw new b(C.NeverReach);
    }
    async _getFilteredSet(e, t, i, s, r) {
      await this._ensureLoaded();
      const a = await this._parent._getFilteredSet(
        e,
        t,
        i,
        s === null ? this._orderbyclause : s,
        r
      );
      this._checkCancelled(r);
      const n = new y(
        a._candidates.slice(0),
        a._known.slice(0),
        a._ordered,
        this._clonePageDefinition(a.pagesDefinition)
      );
      let l = !0;
      if ((a._candidates.length > 0 && (l = !1), n._ordered === !1)) {
        let o = await this.manualOrderSet(n, r);
        return (
          l === !1 &&
            ((t === null && i === null) ||
              (o = new y(
                o._candidates.slice(0).concat(o._known.slice(0)),
                [],
                o._ordered,
                this._clonePageDefinition(o.pagesDefinition)
              ))),
          o
        );
      }
      return n;
    }
    static registerAction() {
      A._featuresetFunctions.orderBy = function (e) {
        return e === ""
          ? this
          : new we({ parentfeatureset: this, orderbyclause: new B(e) });
      };
    }
  },
  pe = class H {
    constructor() {
      (this.field = ""),
        (this.tofieldname = ""),
        (this.typeofstat = "MIN"),
        (this.workingexpr = null);
    }
    clone() {
      const e = new H();
      return (
        (e.field = this.field),
        (e.tofieldname = this.tofieldname),
        (e.typeofstat = this.typeofstat),
        (e.workingexpr = this.workingexpr),
        e
      );
    }
    static parseStatField(e, t, i) {
      const s = new H();
      s.field = e;
      const r = N.create(t, i),
        a = (function (l) {
          if (l.parseTree.type === "function") {
            if (l.parseTree.args.value.length === 0)
              return { name: l.parseTree.name, expr: null };
            if (l.parseTree.args.value.length > 1)
              throw new v(x.MissingStatisticParameters);
            const o = N.create(
              Pe(l.parseTree.args.value[0], k.Standardised, l.parameters),
              l.fieldsIndex
            );
            return { name: l.parseTree.name, expr: o };
          }
          return null;
        })(r);
      if (a === null) throw new v(x.UnsupportedSqlFunction, { function: "" });
      const n = a.name.toUpperCase().trim();
      if (n === "MIN") {
        if (((s.typeofstat = "MIN"), (s.workingexpr = a.expr), r === null))
          throw new v(x.InvalidFunctionParameters, { function: "min" });
      } else if (n === "MAX") {
        if (((s.typeofstat = "MAX"), (s.workingexpr = a.expr), r === null))
          throw new v(x.InvalidFunctionParameters, { function: "max" });
      } else if (n === "COUNT")
        (s.typeofstat = "COUNT"), (s.workingexpr = a.expr);
      else if (n === "STDEV") {
        if (((s.typeofstat = "STDDEV"), (s.workingexpr = a.expr), r === null))
          throw new v(x.InvalidFunctionParameters, { function: "stdev" });
      } else if (n === "SUM") {
        if (((s.typeofstat = "SUM"), (s.workingexpr = a.expr), r === null))
          throw new v(x.InvalidFunctionParameters, { function: "sum" });
      } else if (n === "MEAN") {
        if (((s.typeofstat = "AVG"), (s.workingexpr = a.expr), r === null))
          throw new v(x.InvalidFunctionParameters, { function: n });
      } else if (n === "AVG") {
        if (((s.typeofstat = "AVG"), (s.workingexpr = a.expr), r === null))
          throw new v(x.InvalidFunctionParameters, { function: "avg" });
      } else {
        if (n !== "VAR") throw new v(x.UnsupportedSqlFunction, { function: n });
        if (((s.typeofstat = "VAR"), (s.workingexpr = a.expr), r === null))
          throw new v(x.InvalidFunctionParameters, { function: "var" });
      }
      return s;
    }
    toStatisticsName() {
      switch (this.typeofstat.toUpperCase()) {
        case "MIN":
          return "min";
        case "MAX":
          return "max";
        case "SUM":
          return "sum";
        case "COUNT":
        default:
          return "count";
        case "VAR":
          return "var";
        case "STDDEV":
          return "stddev";
        case "AVG":
          return "avg";
      }
    }
  };
function He(c) {
  if (!c) return "COUNT";
  switch (c.toLowerCase()) {
    case "max":
      return "MAX";
    case "var":
    case "variance":
      return "VAR";
    case "avg":
    case "average":
    case "mean":
      return "AVG";
    case "min":
      return "MIN";
    case "sum":
      return "SUM";
    case "stdev":
    case "stddev":
      return "STDDEV";
    case "count":
      return "COUNT";
  }
  return "COUNT";
}
class se extends A {
  constructor(e) {
    super(e),
      (this._topnum = 0),
      (this.declaredClass = "esri.arcade.featureset.actions.Top"),
      (this._countedin = 0),
      (this._maxProcessing = 100),
      (this._topnum = e.topnum),
      (this._parent = e.parentfeatureset);
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._parent._getSet(e);
      return (
        (this._wset = new y(
          t._candidates.slice(0),
          t._known.slice(0),
          !1,
          this._clonePageDefinition(t.pagesDefinition)
        )),
        this._setKnownLength(this._wset) > this._topnum &&
          (this._wset._known = this._wset._known.slice(0, this._topnum)),
        this._setKnownLength(this._wset) >= this._topnum &&
          (this._wset._candidates = []),
        this._wset
      );
    }
    return this._wset;
  }
  _setKnownLength(e) {
    return e._known.length > 0 && e._known[e._known.length - 1] === "GETPAGES"
      ? e._known.length - 1
      : e._known.length;
  }
  _isInFeatureSet(e) {
    const t = this._parent._isInFeatureSet(e);
    if (t === S.NotInFeatureSet) return t;
    const i = this._idstates[e];
    return i === S.InFeatureSet || i === S.NotInFeatureSet
      ? i
      : t === S.InFeatureSet && i === void 0
      ? this._countedin < this._topnum
        ? ((this._idstates[e] = S.InFeatureSet),
          this._countedin++,
          S.InFeatureSet)
        : ((this._idstates[e] = S.NotInFeatureSet), S.NotInFeatureSet)
      : S.Unknown;
  }
  async _expandPagedSet(e, t, i, s, r) {
    if (this._parent === null) throw new b(C.NotImplemented);
    if (
      (t > this._topnum && (t = this._topnum),
      this._countedin >= this._topnum &&
        e.pagesDefinition.internal.set.length <= e.pagesDefinition.resultOffset)
    ) {
      let n = e._known.length;
      return (
        n > 0 && e._known[n - 1] === "GETPAGES" && (e._known.length = n - 1),
        (n = e._candidates.length),
        n > 0 &&
          e._candidates[n - 1] === "GETPAGES" &&
          (e._candidates.length = n - 1),
        "success"
      );
    }
    const a = await this._parent._expandPagedSet(e, t, i, s, r);
    return (
      this._setKnownLength(e) > this._topnum &&
        (e._known.length = this._topnum),
      this._setKnownLength(e) >= this._topnum && (e._candidates.length = 0),
      a
    );
  }
  async _getFeatures(e, t, i, s) {
    const r = [],
      a = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(e, a) === !0)
      return (
        await this._expandPagedSet(e, a, 0, 0, s), this._getFeatures(e, t, i, s)
      );
    t !== -1 && this._featureCache[t] === void 0 && r.push(t);
    let n = 0;
    for (
      let u = e._lastFetchedIndex;
      u < e._known.length &&
      (n++,
      n <= i && (e._lastFetchedIndex += 1),
      !(
        this._featureCache[e._known[u]] === void 0 &&
        (e._known[u] !== t && r.push(e._known[u]), r.length > a)
      ));
      u++
    );
    if (r.length === 0) return "success";
    const l = new y([], r, !1, null),
      o = Math.min(r.length, i);
    await this._parent._getFeatures(l, -1, o, s);
    for (let u = 0; u < o; u++) {
      const d = this._parent._featureFromCache(r[u]);
      d !== void 0 && (this._featureCache[r[u]] = d);
    }
    return "success";
  }
  async _getFilteredSet(e, t, i, s, r) {
    await this._ensureLoaded();
    const a = await this._getSet(r);
    return new y(
      a._candidates.slice(0).concat(a._known.slice(0)),
      [],
      !1,
      this._clonePageDefinition(a.pagesDefinition)
    );
  }
  _refineKnowns(e, t) {
    let i = 0,
      s = null;
    const r = [];
    for (let a = 0; a < e._candidates.length; a++) {
      const n = this._isInFeatureSet(e._candidates[a]);
      if (n === S.InFeatureSet) {
        if (
          (e._known.push(e._candidates[a]),
          (i += 1),
          s === null
            ? (s = { start: a, end: a })
            : s.end === a - 1
            ? (s.end = a)
            : (r.push(s), (s = { start: a, end: a })),
          e._known.length >= this._topnum)
        )
          break;
      } else if (n === S.NotInFeatureSet)
        s === null
          ? (s = { start: a, end: a })
          : s.end === a - 1
          ? (s.end = a)
          : (r.push(s), (s = { start: a, end: a })),
          (i += 1);
      else if (n === S.Unknown) break;
      if (i >= t) break;
    }
    s !== null && r.push(s);
    for (let a = r.length - 1; a >= 0; a--)
      e._candidates.splice(r[a].start, r[a].end - r[a].start + 1);
    this._setKnownLength(e) > this._topnum &&
      (e._known = e._known.slice(0, this._topnum)),
      this._setKnownLength(e) >= this._topnum && (e._candidates = []);
  }
  async _stat() {
    return { calculated: !1 };
  }
  async _canDoAggregates() {
    return !1;
  }
  static registerAction() {
    A._featuresetFunctions.top = function (e) {
      return new se({ parentfeatureset: this, topnum: e });
    };
  }
}
let Ye = class Y extends A {
  constructor(e) {
    super(e),
      (this.declaredClass =
        "esri.arcade.featureset.sources.FeatureLayerDynamic"),
      (this._removeGeometry = !1),
      (this._overrideFields = null),
      (this.formulaCredential = null),
      (this._pageJustIds = !1),
      (this._requestStandardised = !1),
      (this._useDefinitionExpression = !0),
      (this._cachedDateMetaData = {}),
      e.spatialReference && (this.spatialReference = e.spatialReference),
      (this._transparent = !0),
      (this._maxProcessing = 1e3),
      (this._layer = e.layer),
      (this._wset = null),
      e.outFields !== void 0 && (this._overrideFields = e.outFields),
      e.includeGeometry !== void 0 &&
        (this._removeGeometry = e.includeGeometry === !1);
  }
  _maxQueryRate() {
    return ie;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries(e) {
    this._pageJustIds = e;
  }
  get urlQueryPath() {
    return this._layer.parsedUrl.path || "";
  }
  convertQueryToLruCacheKey(e) {
    const t = this.urlQueryPath + "," + Me(e.toJSON());
    return _e(t, ye.String);
  }
  async loadImpl() {
    return this._layer.loaded === !0
      ? (this._initialiseFeatureSet(), this)
      : (await this._layer.load(), this._initialiseFeatureSet(), this);
  }
  _initialiseFeatureSet() {
    if (
      (this.spatialReference == null &&
        (this.spatialReference = this._layer.spatialReference),
      (this.geometryType = this._layer.geometryType),
      (this.fields = this._layer.fields.slice(0)),
      this._layer.outFields &&
        !(
          this._layer.outFields.length === 1 && this._layer.outFields[0] === "*"
        ))
    ) {
      const e = [];
      for (const t of this.fields)
        if (t.type === "oid") e.push(t);
        else
          for (const i of this._layer.outFields)
            if (i.toLowerCase() === t.name.toLowerCase()) {
              e.push(t);
              break;
            }
      this.fields = e;
    }
    if (this._overrideFields !== null)
      if (this._overrideFields.length === 1 && this._overrideFields[0] === "*")
        this._overrideFields = null;
      else {
        const e = [],
          t = [];
        for (const i of this.fields)
          if (i.type === "oid") e.push(i), t.push(i.name);
          else
            for (const s of this._overrideFields)
              if (s.toLowerCase() === i.name.toLowerCase()) {
                e.push(i), t.push(i.name);
                break;
              }
        (this.fields = e), (this._overrideFields = t);
      }
    if (this._layer.source && this._layer.source.sourceJSON) {
      const e = this._layer.source.sourceJSON.currentVersion;
      this._layer.source.sourceJSON.useStandardizedQueries === !0
        ? ((this._databaseType = k.StandardisedNoInterval),
          e != null && e >= 10.61 && (this._databaseType = k.Standardised))
        : e != null &&
          (e >= 10.5 &&
            ((this._databaseType = k.StandardisedNoInterval),
            (this._requestStandardised = !0)),
          e >= 10.61 && (this._databaseType = k.Standardised));
    }
    this.objectIdField = this._layer.objectIdField;
    for (const e of this.fields)
      e.type === "global-id" && (this.globalIdField = e.name);
    (this.hasM = this._layer.supportsM),
      (this.hasZ = this._layer.supportsZ),
      (this.typeIdField = this._layer.typeIdField ?? ""),
      (this.types = this._layer.types);
  }
  _isInFeatureSet() {
    return S.InFeatureSet;
  }
  async _refineSetBlock(e) {
    return e;
  }
  _candidateIdTransform(e) {
    return e;
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._getFilteredSet("", null, null, null, e);
      return (this._wset = t), t;
    }
    return this._wset;
  }
  async _runDatabaseProbe(e) {
    await this._ensureLoaded();
    const t = new L();
    this.datesInUnknownTimezone && (t.timeReferenceUnknownClient = !0),
      (t.where = e.replace("OBJECTID", this._layer.objectIdField));
    try {
      return await this._layer.queryObjectIds(t), !0;
    } catch {
      return !1;
    }
  }
  _canUsePagination() {
    return !(
      !this._layer.capabilities ||
      !this._layer.capabilities.query ||
      this._layer.capabilities.query.supportsPagination !== !0
    );
  }
  _cacheableFeatureSetSourceKey() {
    return this._layer.url;
  }
  pbfSupportedForQuery(e) {
    var i, s;
    const t =
      (s = (i = this._layer) == null ? void 0 : i.capabilities) == null
        ? void 0
        : s.query;
    return (
      !e.outStatistics &&
      (t == null ? void 0 : t.supportsFormatPBF) === !0 &&
      (t == null ? void 0 : t.supportsQuantizationEditMode) === !0
    );
  }
  async queryPBF(e) {
    e.quantizationParameters = { mode: "edit" };
    const t = await De(this._layer.parsedUrl, e, new ve({}));
    return Re.fromJSON(Te(t.data)).unquantize();
  }
  get gdbVersion() {
    return this._layer &&
      this._layer.capabilities &&
      this._layer.capabilities.data &&
      this._layer.capabilities.data.isVersioned
      ? this._layer.gdbVersion
        ? this._layer.gdbVersion
        : "SDE.DEFAULT"
      : "";
  }
  nativeCapabilities() {
    return {
      title: this._layer.title ?? "",
      source: this,
      canQueryRelated: !0,
      capabilities: this._layer.capabilities,
      databaseType: this._databaseType,
      requestStandardised: this._requestStandardised,
    };
  }
  executeQuery(e, t) {
    const i = t === "execute" ? oe : t === "executeForCount" ? Ve : Je,
      s = t === "execute" && this.pbfSupportedForQuery(e);
    let r = null;
    if (this.recentlyUsedQueries) {
      const a = this.convertQueryToLruCacheKey(e);
      (r = this.recentlyUsedQueries.getFromCache(a)),
        r === null &&
          ((r = s !== !0 ? i(this._layer.parsedUrl.path, e) : this.queryPBF(e)),
          this.recentlyUsedQueries.addToCache(a, r),
          (r = r.catch((n) => {
            var l;
            throw (
              ((l = this.recentlyUsedQueries) == null || l.removeFromCache(a),
              n)
            );
          })));
    }
    return (
      this.featureSetQueryInterceptor &&
        this.featureSetQueryInterceptor.preLayerQueryCallback({
          layer: this._layer,
          query: e,
          method: t,
        }),
      r === null &&
        (r = s !== !0 ? i(this._layer.parsedUrl.path, e) : this.queryPBF(e)),
      r
    );
  }
  async _getFilteredSet(e, t, i, s, r) {
    const a = await this.databaseType();
    if (this.isTable() && t && e !== null && e !== "")
      return new y([], [], !0, null);
    if (this._canUsePagination())
      return this._getFilteredSetUsingPaging(e, t, i, s, r);
    let n = "",
      l = !1;
    s !== null &&
      this._layer.capabilities &&
      this._layer.capabilities.query &&
      this._layer.capabilities.query.supportsOrderBy === !0 &&
      ((n = s.constructClause()), (l = !0));
    const o = new L();
    this.datesInUnknownTimezone && (o.timeReferenceUnknownClient = !0),
      (o.where = i === null ? (t === null ? "1=1" : "") : R(i, a)),
      this._requestStandardised && (o.sqlFormat = "standard"),
      (o.spatialRelationship = this._makeRelationshipEnum(e)),
      (o.outSpatialReference = this.spatialReference),
      (o.orderByFields = n !== "" ? n.split(",") : null),
      (o.geometry = t === null ? null : t),
      (o.relationParameter = this._makeRelationshipParam(e));
    let u = await this.executeQuery(o, "executeForIds");
    return (
      u === null && (u = []), this._checkCancelled(r), new y([], u, l, null)
    );
  }
  _expandPagedSet(e, t, i, s, r) {
    return this._expandPagedSetFeatureSet(e, t, i, s, r);
  }
  async _getFilteredSetUsingPaging(e, t, i, s, r) {
    var f;
    let a = "",
      n = !1;
    s !== null &&
      this._layer.capabilities &&
      this._layer.capabilities.query &&
      this._layer.capabilities.query.supportsOrderBy === !0 &&
      ((a = s.constructClause()), (n = !0));
    const l = await this.databaseType();
    let o = i === null ? (t === null ? "1=1" : "") : R(i, l);
    this._layer.definitionExpression &&
      this._useDefinitionExpression &&
      (o =
        o !== ""
          ? "((" + this._layer.definitionExpression + ") AND (" + o + "))"
          : this._layer.definitionExpression);
    let u = this._maxQueryRate();
    const d =
      (f = this._layer.capabilities) == null ? void 0 : f.query.maxRecordCount;
    d != null && d < u && (u = d);
    let h = null;
    if (this._pageJustIds === !0)
      h = new y([], ["GETPAGES"], n, {
        spatialRel: this._makeRelationshipEnum(e),
        relationParam: this._makeRelationshipParam(e),
        outFields: this._layer.objectIdField,
        resultRecordCount: u,
        resultOffset: 0,
        geometry: t === null ? null : t,
        where: o,
        orderByFields: a,
        returnGeometry: !1,
        returnIdsOnly: "false",
        internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: !1 },
      });
    else {
      let _ = !0;
      this._removeGeometry === !0 && (_ = !1);
      const m =
        this._overrideFields !== null
          ? this._overrideFields
          : this._fieldsIncludingObjectId(
              this._layer.outFields ? this._layer.outFields : ["*"]
            );
      h = new y([], ["GETPAGES"], n, {
        spatialRel: this._makeRelationshipEnum(e),
        relationParam: this._makeRelationshipParam(e),
        outFields: m.join(","),
        resultRecordCount: u,
        resultOffset: 0,
        geometry: t === null ? null : t,
        where: o,
        orderByFields: a,
        returnGeometry: _,
        returnIdsOnly: "false",
        internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: !1 },
      });
    }
    return await this._expandPagedSet(h, u, 0, 1, r), h;
  }
  _clonePageDefinition(e) {
    return e === null
      ? null
      : e.groupbypage !== !0
      ? {
          groupbypage: !1,
          spatialRel: e.spatialRel,
          relationParam: e.relationParam,
          outFields: e.outFields,
          resultRecordCount: e.resultRecordCount,
          resultOffset: e.resultOffset,
          geometry: e.geometry,
          where: e.where,
          orderByFields: e.orderByFields,
          returnGeometry: e.returnGeometry,
          returnIdsOnly: e.returnIdsOnly,
          internal: e.internal,
        }
      : {
          groupbypage: !0,
          spatialRel: e.spatialRel,
          relationParam: e.relationParam,
          outFields: e.outFields,
          resultRecordCount: e.resultRecordCount,
          useOIDpagination: e.useOIDpagination,
          generatedOid: e.generatedOid,
          groupByFieldsForStatistics: e.groupByFieldsForStatistics,
          resultOffset: e.resultOffset,
          outStatistics: e.outStatistics,
          geometry: e.geometry,
          where: e.where,
          orderByFields: e.orderByFields,
          returnGeometry: e.returnGeometry,
          returnIdsOnly: e.returnIdsOnly,
          internal: e.internal,
        };
  }
  async _getPhysicalPage(e, t, i) {
    const s = e.pagesDefinition.internal.lastRetrieved,
      r = s,
      a = e.pagesDefinition.internal.lastPage,
      n = new L();
    this._requestStandardised && (n.sqlFormat = "standard"),
      this.datesInUnknownTimezone && (n.timeReferenceUnknownClient = !0),
      (n.spatialRelationship = e.pagesDefinition.spatialRel),
      (n.relationParameter = e.pagesDefinition.relationParam),
      (n.outFields = e.pagesDefinition.outFields.split(",")),
      (n.num = e.pagesDefinition.resultRecordCount),
      (n.start = e.pagesDefinition.internal.lastPage),
      (n.geometry = e.pagesDefinition.geometry),
      (n.where = e.pagesDefinition.where),
      (n.orderByFields =
        e.pagesDefinition.orderByFields !== ""
          ? e.pagesDefinition.orderByFields.split(",")
          : null),
      (n.returnGeometry = e.pagesDefinition.returnGeometry),
      (n.outSpatialReference = this.spatialReference);
    const l = await this.executeQuery(n, "execute");
    if ((this._checkCancelled(i), e.pagesDefinition.internal.lastPage !== a))
      return "done";
    const o = this._layer.objectIdField;
    for (let u = 0; u < l.features.length; u++)
      e.pagesDefinition.internal.set[r + u] = l.features[u].attributes[o];
    if (this._pageJustIds === !1)
      for (let u = 0; u < l.features.length; u++)
        this._featureCache[l.features[u].attributes[o]] = l.features[u];
    return (
      ((l.exceededTransferLimit === void 0 &&
        l.features.length !== e.pagesDefinition.resultRecordCount) ||
        l.exceededTransferLimit === !1) &&
        (e.pagesDefinition.internal.fullyResolved = !0),
      (e.pagesDefinition.internal.lastRetrieved = s + l.features.length),
      (e.pagesDefinition.internal.lastPage +=
        e.pagesDefinition.resultRecordCount),
      "done"
    );
  }
  _fieldsIncludingObjectId(e) {
    if (e === null) return [this.objectIdField];
    const t = e.slice(0);
    if (t.includes("*")) return t;
    let i = !1;
    for (const s of t)
      if (s.toUpperCase() === this.objectIdField.toUpperCase()) {
        i = !0;
        break;
      }
    return i === !1 && t.push(this.objectIdField), t;
  }
  async _getFeatures(e, t, i, s) {
    const r = [];
    if (
      (t !== -1 && this._featureCache[t] === void 0 && r.push(t),
      this._checkIfNeedToExpandKnownPage(e, this._maxProcessingRate()) === !0)
    )
      return (
        await this._expandPagedSet(e, this._maxProcessingRate(), 0, 0, s),
        this._getFeatures(e, t, i, s)
      );
    let a = 0;
    for (let u = e._lastFetchedIndex; u < e._known.length; u++) {
      if (
        ((e._lastFetchedIndex += 1),
        a++,
        this._featureCache[e._known[u]] === void 0)
      ) {
        let d = !1;
        if (this._layer._mode !== null && this._layer._mode !== void 0) {
          const h = this._layer._mode;
          if (h._featureMap[e._known[u]] !== void 0) {
            const f = h._featureMap[e._known[u]];
            f !== null && ((d = !0), (this._featureCache[e._known[u]] = f));
          }
        }
        if (
          d === !1 &&
          (e._known[u] !== t && r.push(e._known[u]),
          r.length >= this._maxProcessingRate() - 1)
        )
          break;
      }
      if (a >= i && r.length === 0) break;
    }
    if (r.length === 0) return "success";
    const n = new L();
    this._requestStandardised && (n.sqlFormat = "standard"),
      this.datesInUnknownTimezone && (n.timeReferenceUnknownClient = !0),
      (n.objectIds = r),
      (n.outFields =
        this._overrideFields !== null
          ? this._overrideFields
          : this._fieldsIncludingObjectId(
              this._layer.outFields ? this._layer.outFields : ["*"]
            )),
      (n.returnGeometry = !0),
      this._removeGeometry === !0 && (n.returnGeometry = !1),
      (n.outSpatialReference = this.spatialReference);
    const l = await this.executeQuery(n, "execute");
    if ((this._checkCancelled(s), l.error !== void 0))
      throw new b(C.RequestFailed, { reason: l.error });
    const o = this._layer.objectIdField;
    for (let u = 0; u < l.features.length; u++)
      this._featureCache[l.features[u].attributes[o]] = l.features[u];
    return "success";
  }
  async _getDistinctPages(e, t, i, s, r, a, n, l, o) {
    var F;
    await this._ensureLoaded();
    const u = await this.databaseType();
    let d = i.parseTree.column;
    const h = this._layer.fields ?? [];
    for (let p = 0; p < h.length; p++)
      if (h[p].name.toLowerCase() === d.toLowerCase()) {
        d = h[p].name;
        break;
      }
    const f = new L();
    this._requestStandardised && (f.sqlFormat = "standard"),
      this.datesInUnknownTimezone && (f.timeReferenceUnknownClient = !0);
    let _ = a === null ? (r === null ? "1=1" : "") : R(a, u);
    this._layer.definitionExpression &&
      this._useDefinitionExpression &&
      (_ =
        _ !== ""
          ? "((" + this._layer.definitionExpression + ") AND (" + _ + "))"
          : this._layer.definitionExpression),
      (f.where = _),
      (f.spatialRelationship = this._makeRelationshipEnum(s)),
      (f.relationParameter = this._makeRelationshipParam(s)),
      (f.geometry = r === null ? null : r),
      (f.returnDistinctValues = !0),
      (f.returnGeometry = !1),
      (f.outFields = [d]);
    const m = await this.executeQuery(f, "execute");
    if ((this._checkCancelled(o), !m.hasOwnProperty("features")))
      throw new b(C.InvalidStatResponse);
    let I = !1;
    for (let p = 0; p < h.length; p++)
      if (h[p].name === d) {
        h[p].type === "date" && (I = !0);
        break;
      }
    for (let p = 0; p < m.features.length; p++) {
      if (I) {
        const D = m.features[p].attributes[d];
        D !== null ? l.push(new Date(D)) : l.push(D);
      } else l.push(m.features[p].attributes[d]);
      if (l.length >= n) break;
    }
    return m.features.length === 0
      ? l
      : m.features.length ===
          ((F = this._layer.capabilities) == null
            ? void 0
            : F.query.maxRecordCount) && l.length < n
      ? {
          calculated: !0,
          result: await this._getDistinctPages(
            e + m.features.length,
            t,
            i,
            s,
            r,
            a,
            n,
            l,
            o
          ),
        }
      : l;
  }
  async _distinctStat(e, t, i, s, r, a, n) {
    return {
      calculated: !0,
      result: await this._getDistinctPages(0, e, t, i, s, r, a, [], n),
    };
  }
  isTable() {
    return (
      this._layer.isTable ||
      this._layer.geometryType === null ||
      this._layer.type === "table" ||
      this._layer.geometryType === "" ||
      this._layer.geometryType === "esriGeometryNull"
    );
  }
  async _countstat(e, t, i, s) {
    const r = await this.databaseType(),
      a = new L();
    if (
      (this._requestStandardised && (a.sqlFormat = "standard"),
      this.isTable() && i && t !== null && t !== "")
    )
      return { calculated: !0, result: 0 };
    let n = s === null ? (i === null ? "1=1" : "") : R(s, r);
    return (
      this._layer.definitionExpression &&
        this._useDefinitionExpression &&
        (n =
          n !== ""
            ? "((" + this._layer.definitionExpression + ") AND (" + n + "))"
            : this._layer.definitionExpression),
      (a.where = n),
      this.datesInUnknownTimezone && (a.timeReferenceUnknownClient = !0),
      (a.where = n),
      (a.spatialRelationship = this._makeRelationshipEnum(t)),
      (a.relationParameter = this._makeRelationshipParam(t)),
      (a.geometry = i === null ? null : i),
      (a.returnGeometry = !1),
      { calculated: !0, result: await this.executeQuery(a, "executeForCount") }
    );
  }
  async _stats(e, t, i, s, r, a, n) {
    await this._ensureLoaded();
    const l =
        this._layer.capabilities &&
        this._layer.capabilities.query &&
        this._layer.capabilities.query.supportsSqlExpression === !0,
      o =
        this._layer.capabilities &&
        this._layer.capabilities.query &&
        this._layer.capabilities.query.supportsStatistics === !0,
      u =
        this._layer.capabilities &&
        this._layer.capabilities.query &&
        this._layer.capabilities.query.supportsDistinct === !0;
    if (e === "count")
      return u ? this._countstat(e, i, s, r) : { calculated: !1 };
    if (o === !1 || (V(t) === !1 && l === !1) || t.isStandardized === !1)
      return i !== "" || r !== null
        ? { calculated: !1 }
        : this._manualStat(e, t, a, n);
    if (e === "distinct")
      return u === !1
        ? i !== "" || r !== null
          ? { calculated: !1 }
          : this._manualStat(e, t, a, n)
        : this._distinctStat(e, t, i, s, r, a, n);
    const d = await this.databaseType();
    if (this.isTable() && s && i !== null && i !== "")
      return { calculated: !0, result: null };
    const h = new L();
    this._requestStandardised && (h.sqlFormat = "standard");
    let f = r === null ? (s === null ? "1=1" : "") : R(r, d);
    this._layer.definitionExpression &&
      this._useDefinitionExpression &&
      (f =
        f !== ""
          ? "((" + this._layer.definitionExpression + ") AND (" + f + "))"
          : this._layer.definitionExpression),
      (h.where = f),
      (h.spatialRelationship = this._makeRelationshipEnum(i)),
      (h.relationParameter = this._makeRelationshipParam(i)),
      (h.geometry = s === null ? null : s),
      this.datesInUnknownTimezone && (h.timeReferenceUnknownClient = !0);
    const _ = new le();
    (_.statisticType = Ge(e)),
      (_.onStatisticField = R(t, d)),
      (_.outStatisticFieldName = "ARCADE_STAT_RESULT"),
      (h.returnGeometry = !1);
    let m = "ARCADE_STAT_RESULT";
    h.outStatistics = [_];
    const I = await this.executeQuery(h, "execute");
    if (!I.hasOwnProperty("features") || I.features.length === 0)
      throw new b(C.InvalidStatResponse);
    let F = !1;
    const p = I.fields ?? [];
    for (let D = 0; D < p.length; D++)
      if (p[D].name.toUpperCase() === "ARCADE_STAT_RESULT") {
        (m = p[D].name), p[D].type === "date" && (F = !0);
        break;
      }
    if (F) {
      let D = I.features[0].attributes[m];
      return (
        D !== null && (D = new Date(I.features[0].attributes[m])),
        { calculated: !0, result: D }
      );
    }
    return { calculated: !0, result: I.features[0].attributes[m] };
  }
  _stat(e, t, i, s, r, a, n) {
    return this._stats(e, t, i, s, r, a, n);
  }
  async _canDoAggregates(e, t) {
    var a, n;
    await this._ensureLoaded();
    let i = !1;
    const s = (a = this._layer.capabilities) == null ? void 0 : a.query,
      r = (s == null ? void 0 : s.supportsSqlExpression) === !0;
    if (
      (s != null &&
        s.supportsStatistics === !0 &&
        s.supportsOrderBy === !0 &&
        (i = !0),
      i)
    )
      for (let l = 0; l < t.length - 1; l++)
        (((n = t[l].workingexpr) == null ? void 0 : n.isStandardized) === !1 ||
          (V(t[l].workingexpr) === !1 && r === !1)) &&
          (i = !1);
    return i !== !1;
  }
  _makeRelationshipEnum(e) {
    if (e.includes("esriSpatialRelRelation")) return "relation";
    switch (e) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e;
  }
  _makeRelationshipParam(e) {
    return e.includes("esriSpatialRelRelation") ? e.split(":")[1] : "";
  }
  async _getAggregatePagesDataSourceDefinition(e, t, i, s, r, a, n) {
    var I;
    await this._ensureLoaded();
    const l = await this.databaseType();
    let o = "",
      u = !1,
      d = !1;
    a !== null &&
      this._layer.capabilities &&
      this._layer.capabilities.query &&
      this._layer.capabilities.query.supportsOrderBy === !0 &&
      ((o = a.constructClause()), (d = !0)),
      this._layer.capabilities &&
        this._layer.capabilities.query &&
        this._layer.capabilities.query.supportsPagination === !1 &&
        ((d = !1), (u = !0), (o = this._layer.objectIdField));
    const h = [];
    for (let F = 0; F < t.length; F++) {
      const p = new le();
      (p.onStatisticField =
        t[F].workingexpr !== null ? R(t[F].workingexpr, l) : ""),
        (p.outStatisticFieldName = t[F].field),
        (p.statisticType = t[F].toStatisticsName()),
        h.push(p);
    }
    o === "" && (o = e.join(","));
    let f = this._maxQueryRate();
    const _ =
      (I = this._layer.capabilities) == null ? void 0 : I.query.maxRecordCount;
    _ != null && _ < f && (f = _);
    let m = r === null ? (s === null ? "1=1" : "") : R(r, l);
    return (
      this._layer.definitionExpression &&
        this._useDefinitionExpression &&
        (m =
          m !== ""
            ? "((" + this._layer.definitionExpression + ") AND (" + m + "))"
            : this._layer.definitionExpression),
      new y([], ["GETPAGES"], d, {
        groupbypage: !0,
        spatialRel: this._makeRelationshipEnum(i),
        relationParam: this._makeRelationshipParam(i),
        outFields: ["*"],
        useOIDpagination: u,
        generatedOid: n,
        resultRecordCount: f,
        resultOffset: 0,
        groupByFieldsForStatistics: e,
        outStatistics: h,
        geometry: s === null ? null : s,
        where: m,
        orderByFields: o,
        returnGeometry: !1,
        returnIdsOnly: !1,
        internal: {
          lastMaxId: -1,
          set: [],
          lastRetrieved: 0,
          lastPage: 0,
          fullyResolved: !1,
        },
      })
    );
  }
  async _getAgregagtePhysicalPage(e, t, i) {
    let s = e.pagesDefinition.where;
    e.pagesDefinition.useOIDpagination === !0 &&
      (s =
        s !== ""
          ? "(" +
            s +
            ") AND (" +
            e.pagesDefinition.generatedOid +
            ">" +
            e.pagesDefinition.internal.lastMaxId.toString() +
            ")"
          : e.pagesDefinition.generatedOid +
            ">" +
            e.pagesDefinition.internal.lastMaxId.toString());
    const r = e.pagesDefinition.internal.lastRetrieved,
      a = r,
      n = e.pagesDefinition.internal.lastPage,
      l = new L();
    if (
      (this._requestStandardised && (l.sqlFormat = "standard"),
      (l.where = s),
      (l.spatialRelationship = e.pagesDefinition.spatialRel),
      (l.relationParameter = e.pagesDefinition.relationParam),
      (l.outFields = e.pagesDefinition.outFields),
      (l.outStatistics = e.pagesDefinition.outStatistics),
      (l.geometry = e.pagesDefinition.geometry),
      (l.groupByFieldsForStatistics =
        e.pagesDefinition.groupByFieldsForStatistics),
      (l.num = e.pagesDefinition.resultRecordCount),
      (l.start = e.pagesDefinition.internal.lastPage),
      (l.returnGeometry = e.pagesDefinition.returnGeometry),
      this.datesInUnknownTimezone && (l.timeReferenceUnknownClient = !0),
      (l.orderByFields =
        e.pagesDefinition.orderByFields !== ""
          ? e.pagesDefinition.orderByFields.split(",")
          : null),
      this.isTable() && l.geometry && l.spatialRelationship)
    )
      return [];
    const o = await this.executeQuery(l, "execute");
    if ((this._checkCancelled(i), !o.hasOwnProperty("features")))
      throw new b(C.InvalidStatResponse);
    const u = [];
    if (e.pagesDefinition.internal.lastPage !== n) return [];
    for (let d = 0; d < o.features.length; d++)
      e.pagesDefinition.internal.set[a + d] =
        o.features[d].attributes[e.pagesDefinition.generatedOid];
    for (let d = 0; d < o.features.length; d++)
      u.push(new P({ attributes: o.features[d].attributes, geometry: null }));
    return (
      e.pagesDefinition.useOIDpagination === !0
        ? o.features.length === 0
          ? (e.pagesDefinition.internal.fullyResolved = !0)
          : (e.pagesDefinition.internal.lastMaxId =
              o.features[o.features.length - 1].attributes[
                e.pagesDefinition.generatedOid
              ])
        : ((o.exceededTransferLimit === void 0 &&
            o.features.length !== e.pagesDefinition.resultRecordCount) ||
            o.exceededTransferLimit === !1) &&
          (e.pagesDefinition.internal.fullyResolved = !0),
      (e.pagesDefinition.internal.lastRetrieved = r + o.features.length),
      (e.pagesDefinition.internal.lastPage +=
        e.pagesDefinition.resultRecordCount),
      u
    );
  }
  static create(e, t, i, s, r) {
    const a = new T({ url: e, outFields: t === null ? ["*"] : t });
    return new Y({
      layer: a,
      spatialReference: i,
      lrucache: s,
      interceptor: r,
    });
  }
  relationshipMetaData() {
    return this._layer &&
      this._layer.source &&
      this._layer.source.sourceJSON &&
      this._layer.source.sourceJSON.relationships
      ? this._layer.source.sourceJSON.relationships
      : [];
  }
  serviceUrl() {
    return Z(this._layer.parsedUrl.path);
  }
  async queryAttachments(e, t, i, s, r) {
    const a = this._layer.capabilities;
    if (
      a != null &&
      a.data.supportsAttachment &&
      a != null &&
      a.operations.supportsQueryAttachments
    ) {
      const n = { objectIds: [e], returnMetadata: r };
      ((t && t > 0) || (i && i > 0)) &&
        (n.size = [t && t > 0 ? t : 0, i && i > 0 ? i : t + 1]),
        s && s.length > 0 && (n.attachmentTypes = s),
        this.featureSetQueryInterceptor &&
          this.featureSetQueryInterceptor.preLayerQueryCallback({
            layer: this._layer,
            query: n,
            method: "attachments",
          });
      const l = await this._layer.queryAttachments(n),
        o = [];
      return (
        l &&
          l[e] &&
          l[e].forEach((u) => {
            const d =
              this._layer.parsedUrl.path +
              "/" +
              e.toString() +
              "/attachments/" +
              u.id.toString();
            let h = null;
            r &&
              u.exifInfo &&
              (h = We.convertJsonToArcade(u.exifInfo, "system", !0)),
              o.push(new Qe(u.id, u.name, u.contentType, u.size, d, h));
          }),
        o
      );
    }
    return [];
  }
  async queryRelatedFeatures(e) {
    var s;
    const t = {
      f: "json",
      relationshipId: e.relationshipId.toString(),
      definitionExpression: e.where,
      outFields: (s = e.outFields) == null ? void 0 : s.join(","),
      returnGeometry: e.returnGeometry.toString(),
    };
    e.resultOffset !== void 0 &&
      e.resultOffset !== null &&
      (t.resultOffset = e.resultOffset.toString()),
      e.resultRecordCount !== void 0 &&
        e.resultRecordCount !== null &&
        (t.resultRecordCount = e.resultRecordCount.toString()),
      e.orderByFields && (t.orderByFields = e.orderByFields.join(",")),
      e.objectIds &&
        e.objectIds.length > 0 &&
        (t.objectIds = e.objectIds.join(",")),
      e.outSpatialReference &&
        (t.outSR = JSON.stringify(e.outSpatialReference.toJSON())),
      this.featureSetQueryInterceptor &&
        this.featureSetQueryInterceptor.preRequestCallback({
          layer: this._layer,
          queryPayload: t,
          method: "relatedrecords",
          url: this._layer.parsedUrl.path + "/queryRelatedRecords",
        });
    const i = await j(this._layer.parsedUrl.path + "/queryRelatedRecords", {
      responseType: "json",
      query: t,
    });
    if (i.data) {
      const r = {},
        a = i.data;
      if (a && a.relatedRecordGroups) {
        const n = a.spatialReference;
        for (const l of a.relatedRecordGroups) {
          const o = l.objectId,
            u = [];
          for (const d of l.relatedRecords) {
            d.geometry && (d.geometry.spatialReference = n);
            const h = new P({
              geometry: d.geometry ? ke(d.geometry) : null,
              attributes: d.attributes,
            });
            u.push(h);
          }
          r[o] = {
            features: u,
            exceededTransferLimit: a.exceededTransferLimit === !0,
          };
        }
      }
      return r;
    }
    throw new b(C.InvalidRequest);
  }
  async getFeatureByObjectId(e, t) {
    const i = new L();
    (i.outFields = t),
      (i.returnGeometry = !1),
      (i.outSpatialReference = this.spatialReference),
      (i.where = this.objectIdField + "=" + e.toString()),
      this.datesInUnknownTimezone && (i.timeReferenceUnknownClient = !0),
      this.featureSetQueryInterceptor &&
        this.featureSetQueryInterceptor.preLayerQueryCallback({
          layer: this._layer,
          query: i,
          method: "execute",
        });
    const s = await oe(this._layer.parsedUrl.path, i);
    return s.features.length === 1 ? s.features[0] : null;
  }
  async getIdentityUser() {
    var t;
    await this.load();
    const e = (t = ue) == null ? void 0 : t.findCredential(this._layer.url);
    return e ? e.userId : null;
  }
  async getOwningSystemUrl() {
    var s;
    await this.load();
    const e = (s = ue) == null ? void 0 : s.findServerInfo(this._layer.url);
    if (e) return e.owningSystemUrl;
    let t = this._layer.url;
    const i = t.toLowerCase().indexOf("/rest/services");
    if (((t = i > -1 ? t.substring(0, i) : t), t)) {
      t += "/rest/info";
      try {
        const r = await j(t, { query: { f: "json" } });
        let a = "";
        return (
          r.data && r.data.owningSystemUrl && (a = r.data.owningSystemUrl), a
        );
      } catch {
        return "";
      }
    }
    return "";
  }
  getDataSourceFeatureSet() {
    const e = new Y({
      layer: this._layer,
      spatialReference: this.spatialReference ?? void 0,
      outFields: this._overrideFields ?? void 0,
      includeGeometry: !this._removeGeometry,
      lrucache: this.recentlyUsedQueries ?? void 0,
      interceptor: this.featureSetQueryInterceptor ?? void 0,
    });
    return (e._useDefinitionExpression = !1), e;
  }
  get preferredTimeReference() {
    var e, t;
    return (
      this._cachedDateMetaData.preferredTimeReference === void 0 &&
        (this._cachedDateMetaData.preferredTimeReference =
          ((t =
            (e = this._layer) == null ? void 0 : e.preferredTimeReference) ==
          null
            ? void 0
            : t.toJSON()) ?? null),
      this._cachedDateMetaData.preferredTimeReference
    );
  }
  get dateFieldsTimeReference() {
    var e, t;
    return (
      this._cachedDateMetaData.dateFieldsTimeReference === void 0 &&
        (this._cachedDateMetaData.dateFieldsTimeReference =
          ((t =
            (e = this._layer) == null ? void 0 : e.dateFieldsTimeReference) ==
          null
            ? void 0
            : t.toJSON()) ?? null),
      this._cachedDateMetaData.dateFieldsTimeReference
    );
  }
  get datesInUnknownTimezone() {
    return this._layer.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    var e, t;
    return (
      this._cachedDateMetaData.editFieldsInfo === void 0 &&
        (this._cachedDateMetaData.editFieldsInfo =
          ((t = (e = this._layer) == null ? void 0 : e.editFieldsInfo) == null
            ? void 0
            : t.toJSON()) ?? null),
      this._cachedDateMetaData.editFieldsInfo
    );
  }
  get timeInfo() {
    var e, t;
    return (
      this._cachedDateMetaData.timeInfo === void 0 &&
        (this._cachedDateMetaData.timeInfo =
          ((t = (e = this._layer) == null ? void 0 : e.timeInfo) == null
            ? void 0
            : t.toJSON()) ?? null),
      this._cachedDateMetaData.timeInfo
    );
  }
};
class ae extends A {
  constructor(e) {
    super(e),
      (this.declaredClass =
        "esri.arcade.featureset.sources.FeatureLayerMemory"),
      (this._removeGeometry = !1),
      (this._overrideFields = null),
      (this._forceIsTable = !1),
      e.spatialReference && (this.spatialReference = e.spatialReference),
      (this._transparent = !0),
      (this._maxProcessing = 1e3),
      (this._layer = e.layer),
      (this._wset = null),
      e.isTable === !0 && (this._forceIsTable = !0),
      e.outFields !== void 0 && (this._overrideFields = e.outFields),
      e.includeGeometry !== void 0 &&
        (this._removeGeometry = e.includeGeometry === !1);
  }
  _maxQueryRate() {
    return ie;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {}
  async loadImpl() {
    return this._layer.loaded === !0
      ? (this._initialiseFeatureSet(), this)
      : (await this._layer.load(), this._initialiseFeatureSet(), this);
  }
  get gdbVersion() {
    return "";
  }
  _initialiseFeatureSet() {
    if (
      (this.spatialReference == null &&
        (this.spatialReference = this._layer.spatialReference),
      (this.geometryType = this._layer.geometryType),
      (this.fields = this._layer.fields.slice(0)),
      this._layer.outFields &&
        !(
          this._layer.outFields.length === 1 && this._layer.outFields[0] === "*"
        ))
    ) {
      const e = [];
      for (const t of this.fields)
        if (t.type === "oid") e.push(t);
        else
          for (const i of this._layer.outFields)
            if (i.toLowerCase() === t.name.toLowerCase()) {
              e.push(t);
              break;
            }
      this.fields = e;
    }
    if (this._overrideFields !== null)
      if (this._overrideFields.length === 1 && this._overrideFields[0] === "*")
        this._overrideFields = null;
      else {
        const e = [],
          t = [];
        for (const i of this.fields)
          if (i.type === "oid") e.push(i), t.push(i.name);
          else
            for (const s of this._overrideFields)
              if (s.toLowerCase() === i.name.toLowerCase()) {
                e.push(i), t.push(i.name);
                break;
              }
        (this.fields = e), (this._overrideFields = t);
      }
    this.objectIdField = this._layer.objectIdField;
    for (const e of this.fields)
      e.type === "global-id" && (this.globalIdField = e.name);
    (this.hasM = this._layer.supportsM),
      (this.hasZ = this._layer.supportsZ),
      (this._databaseType = k.Standardised),
      (this.typeIdField = this._layer.typeIdField),
      (this.types = this._layer.types);
  }
  isTable() {
    return (
      this._forceIsTable ||
      this._layer.isTable ||
      this._layer.type === "table" ||
      !this._layer.geometryType
    );
  }
  _isInFeatureSet() {
    return S.InFeatureSet;
  }
  _candidateIdTransform(e) {
    return e;
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._getFilteredSet("", null, null, null, e);
      return (this._wset = t), t;
    }
    return this._wset;
  }
  _changeFeature(e) {
    const t = {};
    for (const i of this.fields) t[i.name] = e.attributes[i.name];
    return new P({
      geometry: this._removeGeometry === !0 ? null : e.geometry,
      attributes: t,
    });
  }
  async _getFilteredSet(e, t, i, s, r) {
    let a = "",
      n = !1;
    if (
      (s !== null && ((a = s.constructClause()), (n = !0)),
      this.isTable() && t && e !== null && e !== "")
    )
      return new y([], [], !0, null);
    const l = new L();
    (l.where = i === null ? (t === null ? "1=1" : "") : R(i, k.Standardised)),
      (l.spatialRelationship = this._makeRelationshipEnum(e)),
      (l.outSpatialReference = this.spatialReference),
      (l.orderByFields = a !== "" ? a.split(",") : null),
      (l.geometry = t === null ? null : t),
      (l.returnGeometry = !0),
      (l.relationParameter = this._makeRelationshipParam(e));
    const o = await this._layer.queryFeatures(l);
    if (o === null) return new y([], [], n, null);
    this._checkCancelled(r);
    const u = [];
    return (
      o.features.forEach((d) => {
        const h = d.attributes[this._layer.objectIdField];
        u.push(h), (this._featureCache[h] = this._changeFeature(d));
      }),
      new y([], u, n, null)
    );
  }
  _makeRelationshipEnum(e) {
    if (e.includes("esriSpatialRelRelation")) return "relation";
    switch (e) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e;
  }
  _makeRelationshipParam(e) {
    return e.includes("esriSpatialRelRelation") ? e.split(":")[1] : "";
  }
  async _queryAllFeatures() {
    if (this._wset) return this._wset;
    const e = new L();
    if (
      ((e.where = "1=1"),
      await this._ensureLoaded(),
      this._layer.source && this._layer.source.items)
    ) {
      const s = [];
      return (
        this._layer.source.items.forEach((r) => {
          const a = r.attributes[this._layer.objectIdField];
          s.push(a), (this._featureCache[a] = this._changeFeature(r));
        }),
        (this._wset = new y([], s, !1, null)),
        this._wset
      );
    }
    const t = await this._layer.queryFeatures(e),
      i = [];
    return (
      t.features.forEach((s) => {
        const r = s.attributes[this._layer.objectIdField];
        i.push(r), (this._featureCache[r] = this._changeFeature(s));
      }),
      (this._wset = new y([], i, !1, null)),
      this._wset
    );
  }
  async _getFeatures(e, t, i) {
    const s = [];
    t !== -1 && this._featureCache[t] === void 0 && s.push(t);
    for (
      let r = e._lastFetchedIndex;
      r < e._known.length &&
      ((e._lastFetchedIndex += 1),
      !(
        this._featureCache[e._known[r]] === void 0 &&
        (e._known[r] !== t && s.push(e._known[r]), s.length > i)
      ));
      r++
    );
    if (s.length === 0) return "success";
    throw new b(C.MissingFeatures);
  }
  async _refineSetBlock(e) {
    return e;
  }
  async _stat() {
    return { calculated: !1 };
  }
  async _canDoAggregates() {
    return !1;
  }
  relationshipMetaData() {
    return [];
  }
  static _cloneAttr(e) {
    const t = {};
    for (const i in e) t[i] = e[i];
    return t;
  }
  nativeCapabilities() {
    return {
      title: this._layer.title ?? "",
      canQueryRelated: !1,
      source: this,
      capabilities: this._layer.capabilities,
      databaseType: this._databaseType,
      requestStandardised: !0,
    };
  }
  static create(e, t) {
    let i = e.layerDefinition.objectIdField;
    const s = e.layerDefinition.typeIdField
        ? e.layerDefinition.typeIdField
        : "",
      r = [];
    if (e.layerDefinition.types)
      for (const f of e.layerDefinition.types) r.push(xe.fromJSON(f));
    let a = e.layerDefinition.geometryType;
    a === void 0 && (a = e.featureSet.geometryType || "");
    let n = e.featureSet.features;
    const l = t.toJSON();
    if (i === "" || i === void 0) {
      let f = !1;
      for (const _ of e.layerDefinition.fields)
        if (_.type === "oid" || _.type === "esriFieldTypeOID") {
          (i = _.name), (f = !0);
          break;
        }
      if (f === !1) {
        let _ = "FID",
          m = !0,
          I = 0;
        for (; m; ) {
          let p = !0;
          for (const D of e.layerDefinition.fields)
            if (D.name === _) {
              p = !1;
              break;
            }
          p === !0 ? (m = !1) : (I++, (_ = "FID" + I.toString()));
        }
        e.layerDefinition.fields.push({
          type: "esriFieldTypeOID",
          name: _,
          alias: _,
        });
        const F = [];
        for (let p = 0; p < n.length; p++)
          F.push({
            geometry: e.featureSet.features[p].geometry,
            attributes: e.featureSet.features[p].attributes
              ? this._cloneAttr(e.featureSet.features[p].attributes)
              : {},
          }),
            (F[p].attributes[_] = p);
        (n = F), (i = _);
      }
    }
    const o = [];
    for (const f of e.layerDefinition.fields)
      f instanceof G ? o.push(f) : o.push(G.fromJSON(f));
    let u = a;
    switch ((u || (u = ""), u)) {
      case "esriGeometryPoint":
        u = "point";
        break;
      case "esriGeometryPolyline":
        u = "polyline";
        break;
      case "esriGeometryPolygon":
        u = "polygon";
        break;
      case "esriGeometryExtent":
        u = "extent";
        break;
      case "esriGeometryMultipoint":
        u = "multipoint";
        break;
      case "":
      case "esriGeometryNull":
        u = "esriGeometryNull";
    }
    if (u !== "esriGeometryNull")
      for (const f of n)
        f.geometry &&
          f.geometry instanceof Ne == 0 &&
          ((f.geometry.type = u),
          f.geometry.spatialReference === void 0 &&
            (f.geometry.spatialReference = l));
    else for (const f of n) f.geometry && (f.geometry = null);
    const d = {
      outFields: ["*"],
      source: n,
      fields: o,
      types: r,
      typeIdField: s,
      objectIdField: i,
      spatialReference: t,
    };
    u !== "" && u !== "esriGeometryNull" && u !== null && (d.geometryType = u);
    const h = new T(d);
    return new ae({
      layer: h,
      spatialReference: t,
      isTable: u === null || u === "" || u === "esriGeometryNull",
    });
  }
  async queryAttachments() {
    return [];
  }
  async getFeatureByObjectId(e) {
    const t = new L();
    t.where = this.objectIdField + "=" + e.toString();
    const i = await this._layer.queryFeatures(t);
    return i.features.length === 1 ? i.features[0] : null;
  }
  async getOwningSystemUrl() {
    return "";
  }
  async getIdentityUser() {
    return "";
  }
  get preferredTimeReference() {
    var e, t;
    return (
      ((t = (e = this._layer) == null ? void 0 : e.preferredTimeReference) ==
      null
        ? void 0
        : t.toJSON()) ?? null
    );
  }
  get dateFieldsTimeReference() {
    var e, t;
    return (
      ((t = (e = this._layer) == null ? void 0 : e.dateFieldsTimeReference) ==
      null
        ? void 0
        : t.toJSON()) ?? null
    );
  }
  get datesInUnknownTimezone() {
    var e;
    return (e = this._layer) == null ? void 0 : e.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    var e, t;
    return (
      ((t = (e = this._layer) == null ? void 0 : e.editFieldsInfo) == null
        ? void 0
        : t.toJSON()) ?? null
    );
  }
  get timeInfo() {
    var e, t;
    return (
      ((t = (e = this._layer) == null ? void 0 : e.timeInfo) == null
        ? void 0
        : t.toJSON()) ?? null
    );
  }
}
class $e extends A {
  constructor(e) {
    super(e),
      (this.declaredClass =
        "esri.arcade.featureset.sources.FeatureLayerRelated"),
      (this._findObjectId = -1),
      (this._requestStandardised = !1),
      (this._removeGeometry = !1),
      (this._overrideFields = null),
      (this.featureObjectId = null),
      e.spatialReference && (this.spatialReference = e.spatialReference),
      (this._transparent = !0),
      (this._maxProcessing = 1e3),
      (this._layer = e.layer),
      (this._wset = null),
      (this._findObjectId = e.objectId),
      (this.featureObjectId = e.objectId),
      (this.relationship = e.relationship),
      (this._relatedLayer = e.relatedLayer),
      e.outFields !== void 0 && (this._overrideFields = e.outFields),
      e.includeGeometry !== void 0 &&
        (this._removeGeometry = e.includeGeometry === !1);
  }
  _maxQueryRate() {
    return ie;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {}
  async loadImpl() {
    var e;
    return (
      await Promise.all([
        this._layer.load(),
        (e = this._relatedLayer) == null ? void 0 : e.load(),
      ]),
      this._initialiseFeatureSet(),
      this
    );
  }
  nativeCapabilities() {
    return this._relatedLayer.nativeCapabilities();
  }
  _initialiseFeatureSet() {
    if (
      (this.spatialReference == null &&
        (this.spatialReference = this._layer.spatialReference),
      (this.geometryType = this._relatedLayer.geometryType),
      (this.fields = this._relatedLayer.fields.slice(0)),
      this._overrideFields !== null)
    )
      if (this._overrideFields.length === 1 && this._overrideFields[0] === "*")
        this._overrideFields = null;
      else {
        const t = [],
          i = [];
        for (const s of this.fields)
          if (s.type === "oid") t.push(s), i.push(s.name);
          else
            for (const r of this._overrideFields)
              if (r.toLowerCase() === s.name.toLowerCase()) {
                t.push(s), i.push(s.name);
                break;
              }
        (this.fields = t), (this._overrideFields = i);
      }
    const e = this._layer.nativeCapabilities();
    e &&
      ((this._databaseType = e.databaseType),
      (this._requestStandardised = e.requestStandardised)),
      (this.objectIdField = this._relatedLayer.objectIdField),
      (this.globalIdField = this._relatedLayer.globalIdField),
      (this.hasM = this._relatedLayer.supportsM),
      (this.hasZ = this._relatedLayer.supportsZ),
      (this.typeIdField = this._relatedLayer.typeIdField),
      (this.types = this._relatedLayer.types);
  }
  async databaseType() {
    return (
      await this._relatedLayer.databaseType(),
      (this._databaseType = this._relatedLayer._databaseType),
      this._databaseType
    );
  }
  isTable() {
    return this._relatedLayer.isTable();
  }
  _isInFeatureSet() {
    return S.InFeatureSet;
  }
  _candidateIdTransform(e) {
    return e;
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._getFilteredSet("", null, null, null, e);
      return (this._wset = t), t;
    }
    return this._wset;
  }
  _changeFeature(e) {
    const t = {};
    for (const i of this.fields) t[i.name] = e.attributes[i.name];
    return new P({
      geometry: this._removeGeometry === !0 ? null : e.geometry,
      attributes: t,
    });
  }
  async _getFilteredSet(e, t, i, s, r) {
    var F;
    if (
      (await this.databaseType(), this.isTable() && t && e !== null && e !== "")
    )
      return new y([], [], !0, null);
    const a = this._layer.nativeCapabilities();
    if (a.canQueryRelated === !1) return new y([], [], !0, null);
    if (
      (F = a.capabilities) != null &&
      F.queryRelated &&
      a.capabilities.queryRelated.supportsPagination
    )
      return this._getFilteredSetUsingPaging(e, t, i, s, r);
    let n = "",
      l = !1;
    s !== null &&
      a.capabilities &&
      a.capabilities.queryRelated &&
      a.capabilities.queryRelated.supportsOrderBy === !0 &&
      ((n = s.constructClause()), (l = !0));
    const o = new de();
    o.objectIds = [this._findObjectId];
    const u =
      this._overrideFields !== null
        ? this._overrideFields
        : this._fieldsIncludingObjectId(
            this._relatedLayer.fields
              ? this._relatedLayer.fields.map((p) => p.name)
              : ["*"]
          );
    (o.outFields = u),
      (o.relationshipId = this.relationship.id),
      (o.where = "1=1");
    let d = !0;
    this._removeGeometry === !0 && (d = !1),
      (o.returnGeometry = d),
      this._requestStandardised && (o.sqlFormat = "standard"),
      (o.outSpatialReference = this.spatialReference),
      (o.orderByFields = n !== "" ? n.split(",") : null);
    const h = await a.source.queryRelatedFeatures(o);
    this._checkCancelled(r);
    const f = h[this._findObjectId] ? h[this._findObjectId].features : [],
      _ = [];
    for (let p = 0; p < f.length; p++)
      (this._featureCache[f[p].attributes[this._relatedLayer.objectIdField]] =
        f[p]),
        _.push(f[p].attributes[this._relatedLayer.objectIdField]);
    const m = t && e !== null && e !== "",
      I = i != null;
    return new y(m || I ? _ : [], m || I ? [] : _, l, null);
  }
  _fieldsIncludingObjectId(e) {
    if (e === null) return [this.objectIdField];
    const t = e.slice(0);
    if (t.includes("*")) return t;
    let i = !1;
    for (const s of t)
      if (s.toUpperCase() === this.objectIdField.toUpperCase()) {
        i = !0;
        break;
      }
    return i === !1 && t.push(this.objectIdField), t;
  }
  async _getFilteredSetUsingPaging(e, t, i, s, r) {
    var I, F;
    let a = "",
      n = !1;
    const l = this._layer.nativeCapabilities();
    s !== null &&
      l &&
      (I = l.capabilities) != null &&
      I.queryRelated &&
      l.capabilities.queryRelated.supportsOrderBy === !0 &&
      ((a = s.constructClause()), (n = !0)),
      await this.databaseType();
    let o = this._maxQueryRate();
    const u = (F = l.capabilities) == null ? void 0 : F.query.maxRecordCount;
    u != null && u < o && (o = u);
    const d = t && e !== null && e !== "",
      h = i != null;
    let f = null,
      _ = !0;
    this._removeGeometry === !0 && (_ = !1);
    const m =
      this._overrideFields !== null
        ? this._overrideFields
        : this._fieldsIncludingObjectId(
            this._relatedLayer.fields
              ? this._relatedLayer.fields.map((p) => p.name)
              : ["*"]
          );
    return (
      (f = new y(d || h ? ["GETPAGES"] : [], d || h ? [] : ["GETPAGES"], n, {
        outFields: m.join(","),
        resultRecordCount: o,
        resultOffset: 0,
        objectIds: [this._findObjectId],
        where: "1=1",
        orderByFields: a,
        returnGeometry: _,
        returnIdsOnly: "false",
        internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: !1 },
      })),
      await this._expandPagedSet(f, o, 0, 0, r),
      f
    );
  }
  _expandPagedSet(e, t, i, s, r) {
    return this._expandPagedSetFeatureSet(e, t, i, s, r);
  }
  _clonePageDefinition(e) {
    return e === null
      ? null
      : e.groupbypage !== !0
      ? {
          groupbypage: !1,
          outFields: e.outFields,
          resultRecordCount: e.resultRecordCount,
          resultOffset: e.resultOffset,
          where: e.where,
          objectIds: e.objectIds,
          orderByFields: e.orderByFields,
          returnGeometry: e.returnGeometry,
          returnIdsOnly: e.returnIdsOnly,
          internal: e.internal,
        }
      : {
          groupbypage: !0,
          outFields: e.outFields,
          resultRecordCount: e.resultRecordCount,
          useOIDpagination: e.useOIDpagination,
          generatedOid: e.generatedOid,
          groupByFieldsForStatistics: e.groupByFieldsForStatistics,
          resultOffset: e.resultOffset,
          outStatistics: e.outStatistics,
          geometry: e.geometry,
          where: e.where,
          objectIds: e.objectIds,
          orderByFields: e.orderByFields,
          returnGeometry: e.returnGeometry,
          returnIdsOnly: e.returnIdsOnly,
          internal: e.internal,
        };
  }
  async _getPhysicalPage(e, t, i) {
    const s = e.pagesDefinition.internal.lastRetrieved,
      r = s,
      a = e.pagesDefinition.internal.lastPage,
      n = this._layer.nativeCapabilities(),
      l = new de();
    this._requestStandardised === !0 && (l.sqlFormat = "standard"),
      (l.relationshipId = this.relationship.id),
      (l.objectIds = e.pagesDefinition.objectIds),
      (l.resultOffset = e.pagesDefinition.internal.lastPage),
      (l.resultRecordCount = e.pagesDefinition.resultRecordCount),
      (l.outFields = e.pagesDefinition.outFields.split(",")),
      (l.where = e.pagesDefinition.where),
      (l.orderByFields =
        e.pagesDefinition.orderByFields !== ""
          ? e.pagesDefinition.orderByFields.split(",")
          : null),
      (l.returnGeometry = e.pagesDefinition.returnGeometry),
      (l.outSpatialReference = this.spatialReference);
    const o = await n.source.queryRelatedFeatures(l);
    if ((this._checkCancelled(i), e.pagesDefinition.internal.lastPage !== a))
      return 0;
    const u = o[this._findObjectId] ? o[this._findObjectId].features : [];
    for (let h = 0; h < u.length; h++)
      e.pagesDefinition.internal.set[r + h] =
        u[h].attributes[this._relatedLayer.objectIdField];
    for (let h = 0; h < u.length; h++)
      this._featureCache[u[h].attributes[this._relatedLayer.objectIdField]] =
        u[h];
    const d =
      !o[this._findObjectId] ||
      o[this._findObjectId].exceededTransferLimit === !1;
    return (
      u.length !== e.pagesDefinition.resultRecordCount &&
        d &&
        (e.pagesDefinition.internal.fullyResolved = !0),
      (e.pagesDefinition.internal.lastRetrieved = s + u.length),
      (e.pagesDefinition.internal.lastPage +=
        e.pagesDefinition.resultRecordCount),
      u.length
    );
  }
  async _getFeatures(e, t, i, s) {
    const r = [];
    t !== -1 && this._featureCache[t] === void 0 && r.push(t);
    const a = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(e, a) === !0)
      return (
        await this._expandPagedSet(e, a, 0, 0, s), this._getFeatures(e, t, i, s)
      );
    let n = 0;
    for (
      let l = e._lastFetchedIndex;
      l < e._known.length &&
      (n++,
      n <= i && (e._lastFetchedIndex += 1),
      !(
        e._known[l] !== "GETPAGES" &&
        this._featureCache[e._known[l]] === void 0 &&
        (e._known[l] !== t && r.push(e._known[l]), r.length > i)
      )) &&
      !(n >= i && r.length === 0);
      l++
    );
    if (r.length === 0) return "success";
    throw new b(C.MissingFeatures);
  }
  async _refineSetBlock(e, t, i) {
    return e;
  }
  async _stat(e, t, i, s, r, a, n) {
    return { calculated: !1 };
  }
  get gdbVersion() {
    return this._relatedLayer.gdbVersion;
  }
  async _canDoAggregates(e, t, i, s, r) {
    return !1;
  }
  relationshipMetaData() {
    return this._relatedLayer.relationshipMetaData();
  }
  serviceUrl() {
    return this._relatedLayer.serviceUrl();
  }
  queryAttachments(e, t, i, s, r) {
    return this._relatedLayer.queryAttachments(e, t, i, s, r);
  }
  getFeatureByObjectId(e, t) {
    return this._relatedLayer.getFeatureByObjectId(e, t);
  }
  getOwningSystemUrl() {
    return this._relatedLayer.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this._relatedLayer.getIdentityUser();
  }
  getDataSourceFeatureSet() {
    return this._relatedLayer;
  }
  get preferredTimeReference() {
    var e;
    return (
      ((e = this._relatedLayer) == null ? void 0 : e.preferredTimeReference) ??
      null
    );
  }
  get dateFieldsTimeReference() {
    var e;
    return (
      ((e = this._relatedLayer) == null ? void 0 : e.dateFieldsTimeReference) ??
      null
    );
  }
  get datesInUnknownTimezone() {
    var e;
    return (e = this._relatedLayer) == null ? void 0 : e.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    var e;
    return (
      ((e = this._relatedLayer) == null ? void 0 : e.editFieldsInfo) ?? null
    );
  }
  get timeInfo() {
    var e;
    return ((e = this._relatedLayer) == null ? void 0 : e.timeInfo) ?? null;
  }
}
async function $(c, e) {
  if (g.applicationCache) {
    const t = g.applicationCache.getLayerInfo(c);
    if (t) {
      const r = await t;
      return new T({ url: c, outFields: e, sourceJSON: r });
    }
    const i = new T({ url: c, outFields: e }),
      s = (async () => (await i.load(), i.sourceJSON))();
    if (g.applicationCache) {
      g.applicationCache.setLayerInfo(c, s);
      try {
        return await s, i;
      } catch (r) {
        throw (g.applicationCache.clearLayerInfo(c), r);
      }
    }
    return await s, i;
  }
  return new T({ url: c, outFields: e });
}
async function re(c, e, t, i, s, r = null) {
  return E(await $(c, ["*"]), e, t, i, s, r);
}
function E(c, e = null, t = null, i = !0, s = null, r = null) {
  const a = {
    layer: c,
    spatialReference: e,
    outFields: t,
    includeGeometry: i,
    lrucache: s,
    interceptor: r,
  };
  return c._hasMemorySource() === !0 ? new ae(a) : new Ye(a);
}
async function Fe(c) {
  if (g.applicationCache !== null) {
    const t = g.applicationCache.getLayerInfo(c);
    if (t !== null) return t;
  }
  const e = (async () => {
    const t = await j(c, { responseType: "json", query: { f: "json" } });
    if (t.data) {
      const i = t.data;
      return i.layers || (i.layers = []), i.tables || (i.tables = []), i;
    }
    return { layers: [], tables: [] };
  })();
  if (g.applicationCache !== null) {
    g.applicationCache.setLayerInfo(c, e);
    try {
      return await e;
    } catch (t) {
      throw (g.applicationCache.clearLayerInfo(c), t);
    }
  }
  return e;
}
async function et(c, e) {
  const t = {
      metadata: null,
      networkId: -1,
      unVersion: 3,
      terminals: [],
      queryelem: null,
      layerNameLkp: {},
      lkp: null,
    },
    i = await Fe(c);
  if (
    ((t.metadata = i),
    i.controllerDatasetLayers &&
      i.controllerDatasetLayers.utilityNetworkLayerId !== void 0 &&
      i.controllerDatasetLayers.utilityNetworkLayerId !== null)
  ) {
    if (i.layers) for (const a of i.layers) t.layerNameLkp[a.id] = a.name;
    if (i.tables) for (const a of i.tables) t.layerNameLkp[a.id] = a.name;
    const s = i.controllerDatasetLayers.utilityNetworkLayerId;
    t.networkId = s;
    const r = await (async function (a, n) {
      const l = "QUERYDATAELEMTS:" + n.toString() + ":" + a;
      if (g.applicationCache !== null) {
        const u = g.applicationCache.getLayerInfo(l);
        if (u !== null) return u;
      }
      const o = (async () => {
        const u = await j(a + "/queryDataElements", {
          method: "post",
          responseType: "json",
          query: { layers: JSON.stringify([n.toString()]), f: "json" },
        });
        if (u.data) {
          const d = u.data;
          if (d.layerDataElements && d.layerDataElements[0])
            return d.layerDataElements[0];
        }
        throw new b(C.DataElementsNotFound);
      })();
      if (g.applicationCache !== null) {
        g.applicationCache.setLayerInfo(l, o);
        try {
          return await o;
        } catch (u) {
          throw (g.applicationCache.clearLayerInfo(l), u);
        }
      }
      return o;
    })(c, s);
    if (r) {
      (t.queryelem = r),
        t.queryelem &&
          t.queryelem.dataElement &&
          t.queryelem.dataElement.schemaGeneration !== void 0 &&
          (t.unVersion = t.queryelem.dataElement.schemaGeneration),
        (t.lkp = {}),
        t.queryelem.dataElement.domainNetworks ||
          (t.queryelem.dataElement.domainNetworks = []);
      for (const n of t.queryelem.dataElement.domainNetworks) {
        for (const l of n.edgeSources ? n.edgeSources : []) {
          const o = {
            layerId: l.layerId,
            sourceId: l.sourceId,
            className: t.layerNameLkp[l.layerId]
              ? t.layerNameLkp[l.layerId]
              : null,
          };
          o.className && (t.lkp[o.className] = o);
        }
        for (const l of n.junctionSources ? n.junctionSources : []) {
          const o = {
            layerId: l.layerId,
            sourceId: l.sourceId,
            className: t.layerNameLkp[l.layerId]
              ? t.layerNameLkp[l.layerId]
              : null,
          };
          o.className && (t.lkp[o.className] = o);
        }
      }
      if (t.queryelem.dataElement.terminalConfigurations)
        for (const n of t.queryelem.dataElement.terminalConfigurations)
          for (const l of n.terminals)
            t.terminals.push({
              terminalId: l.terminalId,
              terminalName: l.terminalName,
            });
      const a = await (async function (n) {
        if (g.applicationCache !== null) {
          const o = g.applicationCache.getLayerInfo(n);
          if (o !== null) return o;
        }
        const l = (async () => {
          const o = await j(n, { responseType: "json", query: { f: "json" } });
          return o.data ? o.data : null;
        })();
        if (g.applicationCache !== null) {
          g.applicationCache.setLayerInfo(n, l);
          try {
            return await l;
          } catch (o) {
            throw (g.applicationCache.clearLayerInfo(n), o);
          }
        }
        return l;
      })(c + "/" + s);
      if (
        a.systemLayers &&
        a.systemLayers.associationsTableId !== void 0 &&
        a.systemLayers.associationsTableId !== null
      ) {
        const n = [];
        t.unVersion >= 4 && (n.push("STATUS"), n.push("PERCENTALONG"));
        let l = await re(
          c + "/" + a.systemLayers.associationsTableId.toString(),
          e,
          [
            "OBJECTID",
            "FROMNETWORKSOURCEID",
            "TONETWORKSOURCEID",
            "FROMGLOBALID",
            "TOGLOBALID",
            "TOTERMINALID",
            "FROMTERMINALID",
            "ASSOCIATIONTYPE",
            "ISCONTENTVISIBLE",
            "GLOBALID",
            ...n,
          ],
          !1,
          null,
          null
        );
        return (
          await l.load(),
          t.unVersion >= 4 &&
            ((l = l.filter(
              N.create(
                "STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62,63)",
                l.getFieldsIndex()
              )
            )),
            await l.load()),
          {
            lkp: t.lkp,
            associations: l,
            unVersion: t.unVersion,
            terminals: t.terminals,
          }
        );
      }
      return {
        associations: null,
        unVersion: t.unVersion,
        lkp: null,
        terminals: [],
      };
    }
    return {
      associations: null,
      unVersion: t.unVersion,
      lkp: null,
      terminals: [],
    };
  }
  return {
    associations: null,
    unVersion: t.unVersion,
    lkp: null,
    terminals: [],
  };
}
async function tt(c, e, t, i = null, s = null, r = !0, a = null, n = null) {
  let l = c.serviceUrl();
  if (!l) return null;
  l =
    l.charAt(l.length - 1) === "/"
      ? l + e.relatedTableId.toString()
      : l + "/" + e.relatedTableId.toString();
  const o = await re(l, i, s, r, a, n);
  return new $e({
    layer: c,
    relatedLayer: o,
    relationship: e,
    objectId: t,
    spatialReference: i,
    outFields: s,
    includeGeometry: r,
    lrucache: a,
    interceptor: n,
  });
}
U.registerAction(),
  class Se extends A {
    constructor(e) {
      super(e),
        (this._decodedStatsfield = []),
        (this._decodedGroupbyfield = []),
        (this._candosimplegroupby = !0),
        (this.phsyicalgroupbyfields = []),
        (this.objectIdField = "ROW__ID"),
        (this._internalObjectIdField = "ROW__ID"),
        (this._adaptedFields = []),
        (this.declaredClass = "esri.arcade.featureset.actions.Aggregate"),
        (this._uniqueIds = 1),
        (this._maxQuery = 10),
        (this._maxProcessing = 10),
        (this._parent = e.parentfeatureset),
        (this._config = e);
    }
    isTable() {
      return !0;
    }
    async _getSet(e) {
      if (this._wset === null) {
        const t = await this._getFilteredSet("", null, null, null, e);
        return (this._wset = t), this._wset;
      }
      return this._wset;
    }
    _isInFeatureSet() {
      return S.InFeatureSet;
    }
    _nextUniqueName(e) {
      for (; e["T" + this._uniqueIds.toString()] === 1; ) this._uniqueIds++;
      const t = "T" + this._uniqueIds.toString();
      return (e[t] = 1), t;
    }
    _convertToEsriFieldType(e) {
      return e;
    }
    _initialiseFeatureSet() {
      const e = {};
      let t = !1,
        i = 1;
      const s = this._parent ? this._parent.getFieldsIndex() : new Ce([]);
      for (
        this.objectIdField = "ROW__ID", this.globalIdField = "";
        t === !1;

      ) {
        let a = !1;
        for (let n = 0; n < this._config.groupbyfields.length; n++)
          if (
            this._config.groupbyfields[n].name.toLowerCase() ===
            this.objectIdField.toLowerCase()
          ) {
            a = !0;
            break;
          }
        if (a === !1) {
          for (let n = 0; n < this._config.statsfields.length; n++)
            if (
              this._config.statsfields[n].name.toLowerCase() ===
              this.objectIdField.toLowerCase()
            ) {
              a = !0;
              break;
            }
        }
        a === !1
          ? (t = !0)
          : ((this.objectIdField = "ROW__ID" + i.toString()), i++);
      }
      for (const a of this._config.statsfields) {
        const n = new pe();
        (n.field = a.name),
          (n.tofieldname = a.name),
          (n.workingexpr =
            a.expression instanceof N
              ? a.expression
              : N.create(a.expression, s)),
          (n.typeofstat = He(a.statistic)),
          this._decodedStatsfield.push(n);
      }
      this._decodedGroupbyfield = [];
      for (const a of this._config.groupbyfields) {
        const n = {
          name: a.name,
          singlefield: null,
          tofieldname: a.name,
          expression:
            a.expression instanceof N
              ? a.expression
              : N.create(a.expression, s),
        };
        this._decodedGroupbyfield.push(n);
      }
      if (this._parent !== null) {
        (this.geometryType = this._parent.geometryType),
          (this.spatialReference = this._parent.spatialReference),
          (this.hasM = this._parent.hasM),
          (this.hasZ = this._parent.hasZ),
          (this.typeIdField = "");
        for (const a of this._parent.fields) e[a.name.toUpperCase()] = 1;
        this.types = null;
      } else
        (this.geometryType = te.point),
          (this.typeIdField = ""),
          (this.types = null),
          (this.spatialReference = new ee({ wkid: 4326 }));
      this.fields = [];
      const r = new pe();
      (r.field = this._nextUniqueName(e)),
        (r.tofieldname = this.objectIdField),
        (r.workingexpr = N.create(
          this._parent.objectIdField,
          this._parent.getFieldsIndex()
        )),
        (r.typeofstat = "MIN"),
        this._decodedStatsfield.push(r);
      for (const a of this._decodedGroupbyfield) {
        const n = new G();
        if (
          ((a.name = this._nextUniqueName(e)),
          (n.name = a.tofieldname),
          (n.alias = n.name),
          V(a.expression))
        ) {
          const l = this._parent.getField(R(a.expression, k.Standardised));
          if (!l) throw new b(C.AggregationFieldNotFound);
          (a.name = l.name),
            (a.singlefield = l.name),
            this.phsyicalgroupbyfields.push(l.name),
            (n.type = l.type);
        } else {
          n.type = this._convertToEsriFieldType(
            qe(a.expression, this._parent.fields)
          );
          const l = new G();
          (l.name = a.name),
            (l.alias = l.name),
            this.phsyicalgroupbyfields.push(a.name),
            this._adaptedFields.push(new Ze(l, a.expression)),
            (this._candosimplegroupby = !1);
        }
        this.fields.push(n);
      }
      if (this._adaptedFields.length > 0)
        for (const a of this._parent.fields) this._adaptedFields.push(new X(a));
      for (let a = 0; a < this._decodedStatsfield.length; a++) {
        const n = new G();
        let l = null;
        const o = this._decodedStatsfield[a];
        (o.field = this._nextUniqueName(e)),
          o.tofieldname === this.objectIdField &&
            (this._internalObjectIdField = o.field),
          (n.name = o.tofieldname),
          (n.alias = n.name);
        const u =
          o.workingexpr !== null && V(o.workingexpr)
            ? R(o.workingexpr, k.Standardised)
            : "";
        switch (this._decodedStatsfield[a].typeofstat) {
          case "SUM":
            if (u !== "") {
              if (((l = this._parent.getField(u)), !l))
                throw new b(C.AggregationFieldNotFound);
              n.type = l.type;
            } else n.type = "double";
            break;
          case "MIN":
          case "MAX":
            if (u !== "") {
              if (((l = this._parent.getField(u)), !l))
                throw new b(C.AggregationFieldNotFound);
              n.type = l.type;
            } else n.type = "double";
            break;
          case "COUNT":
            n.type = "integer";
            break;
          case "STDDEV":
          case "VAR":
          case "AVG":
            if (u !== "" && ((l = this._parent.getField(u)), !l))
              throw new b(C.AggregationFieldNotFound);
            n.type = "double";
        }
        this.fields.push(n);
      }
    }
    async _canDoAggregates() {
      return !1;
    }
    async _getFeatures(e, t, i, s) {
      t !== -1 && this._featureCache[t];
      const r = this._maxQuery;
      return this._checkIfNeedToExpandKnownPage(e, r) === !0
        ? (await this._expandPagedSet(e, r, 0, 0, s),
          this._getFeatures(e, t, i, s))
        : "success";
    }
    async _getFilteredSet(e, t, i, s, r) {
      if (e !== "") return new y([], [], !0, null);
      let a = null;
      const n = { ordered: !1, nowhereclause: !1 };
      if ((await this._ensureLoaded(), i !== null)) {
        for (let o = 0; o < this._decodedStatsfield.length; o++)
          if (ge(i, this._decodedStatsfield[o].tofieldname) === !0) {
            (n.nowhereclause = !0), (i = null);
            break;
          }
      }
      if (s !== null) {
        n.ordered = !0;
        for (let o = 0; o < this._decodedStatsfield.length; o++)
          if (s.scanForField(this._decodedStatsfield[o].tofieldname) === !0) {
            (s = null), (n.ordered = !1);
            break;
          }
        if (s !== null) {
          for (const o of this._decodedGroupbyfield)
            if (
              o.singlefield === null &&
              s.scanForField(o.tofieldname) === !0
            ) {
              (s = null), (n.ordered = !1);
              break;
            }
        }
      }
      if (
        this._candosimplegroupby !== !1 &&
        (await this._parent._canDoAggregates(
          this.phsyicalgroupbyfields,
          this._decodedStatsfield,
          "",
          null,
          null
        ))
      ) {
        let o = null;
        i && (o = this._reformulateWhereClauseWithoutGroupByFields(i));
        let u = null;
        s && (u = this._reformulateOrderClauseWithoutGroupByFields(s));
        const d = await this._parent._getAggregatePagesDataSourceDefinition(
          this.phsyicalgroupbyfields,
          this._decodedStatsfield,
          "",
          null,
          o,
          u,
          this._internalObjectIdField
        );
        return (
          this._checkCancelled(r),
          (a =
            n.nowhereclause === !0
              ? new y(
                  d._candidates.slice(0).concat(d._known.slice(0)),
                  [],
                  n.ordered === !0 && d._ordered,
                  this._clonePageDefinition(d.pagesDefinition)
                )
              : new y(
                  d._candidates.slice(0),
                  d._known.slice(0),
                  n.ordered === !0 && d._ordered,
                  this._clonePageDefinition(d.pagesDefinition)
                )),
          a
        );
      }
      let l = this._parent;
      if (
        (this._adaptedFields.length > 0 &&
          (l = new Xe({
            parentfeatureset: this._parent,
            adaptedFields: this._adaptedFields,
            extraFilter: null,
          })),
        n.nowhereclause === !0)
      )
        a = new y(["GETPAGES"], [], !1, {
          aggregatefeaturesetpagedefinition: !0,
          resultOffset: 0,
          resultRecordCount: this._maxQuery,
          internal: {
            fullyResolved: !1,
            workingItem: null,
            type: "manual",
            iterator: null,
            set: [],
            subfeatureset: new K({
              parentfeatureset: l,
              orderbyclause: new B(
                this.phsyicalgroupbyfields.join(",") +
                  "," +
                  this._parent.objectIdField +
                  " ASC"
              ),
            }),
          },
        });
      else {
        let o = l;
        if (i !== null) {
          let u = null;
          i && (u = this._reformulateWhereClauseWithoutGroupByFields(i)),
            (o = new U({ parentfeatureset: o, whereclause: u }));
        }
        a = new y(["GETPAGES"], [], !1, {
          aggregatefeaturesetpagedefinition: !0,
          resultOffset: 0,
          resultRecordCount: this._maxQuery,
          internal: {
            fullyResolved: !1,
            workingItem: null,
            type: "manual",
            iterator: null,
            set: [],
            subfeatureset: new K({
              parentfeatureset: o,
              orderbyclause: new B(
                this.phsyicalgroupbyfields.join(",") +
                  "," +
                  this._parent.objectIdField +
                  " ASC"
              ),
            }),
          },
        });
      }
      return a;
    }
    _reformulateWhereClauseWithoutStatsFields(e) {
      for (const t of this._decodedStatsfield)
        e = Q(
          e,
          t.tofieldname,
          R(t.workingexpr, k.Standardised),
          this._parent.getFieldsIndex()
        );
      return e;
    }
    _reformulateWhereClauseWithoutGroupByFields(e) {
      for (const t of this._decodedGroupbyfield)
        t.tofieldname !== t.name &&
          (e = Q(
            e,
            t.tofieldname,
            R(t.expression, k.Standardised),
            this._parent.getFieldsIndex()
          ));
      return e;
    }
    _reformulateOrderClauseWithoutGroupByFields(e) {
      const t = [];
      for (const i of this._decodedGroupbyfield)
        i.tofieldname !== i.name &&
          t.push({ field: i.tofieldname, newfield: i.name });
      return t.length > 0 ? e.replaceFields(t) : e;
    }
    _clonePageDefinition(e) {
      return e === null
        ? null
        : e.aggregatefeaturesetpagedefinition === !0
        ? {
            aggregatefeaturesetpagedefinition: !0,
            resultRecordCount: e.resultRecordCount,
            resultOffset: e.resultOffset,
            internal: e.internal,
          }
        : this._parent._clonePageDefinition(e);
    }
    async _refineSetBlock(e, t, i) {
      return this._checkIfNeedToExpandCandidatePage(e, this._maxQuery) === !0
        ? (await this._expandPagedSet(e, this._maxQuery, 0, 0, i),
          this._refineSetBlock(e, t, i))
        : (this._checkCancelled(i),
          e._candidates.length,
          this._refineKnowns(e, t),
          e._candidates.length,
          e._candidates.length,
          e);
    }
    _expandPagedSet(e, t, i, s, r) {
      return this._expandPagedSetFeatureSet(e, t, i, s, r);
    }
    async _getPhysicalPage(e, t, i) {
      if (e.pagesDefinition.aggregatefeaturesetpagedefinition === !0)
        return this._sequentialGetPhysicalItem(
          e,
          e.pagesDefinition.resultRecordCount,
          i,
          []
        );
      const s = await this._getAgregagtePhysicalPage(e, t, i);
      for (const r of s) {
        const a = { geometry: r.geometry, attributes: {} };
        for (const n of this._decodedGroupbyfield)
          a.attributes[n.tofieldname] = r.attributes[n.name];
        for (const n of this._decodedStatsfield)
          a.attributes[n.tofieldname] = r.attributes[n.field];
        this._featureCache[a.attributes[this.objectIdField]] = new P(a);
      }
      return s.length;
    }
    _sequentialGetPhysicalItem(e, t, i, s) {
      return new Promise((r, a) => {
        e.pagesDefinition.internal.iterator === null &&
          (e.pagesDefinition.internal.iterator =
            e.pagesDefinition.internal.subfeatureset.iterator(i)),
          e.pagesDefinition.internal.fullyResolved === !0 || t === 0
            ? r(s.length)
            : this._nextAggregateItem(
                e,
                t,
                i,
                s,
                (n) => {
                  n === null
                    ? r(s.length)
                    : ((t -= 1),
                      r(this._sequentialGetPhysicalItem(e, t, i, s)));
                },
                a
              );
      });
    }
    _nextAggregateItem(e, t, i, s, r, a) {
      try {
        W(e.pagesDefinition.internal.iterator.next()).then((n) => {
          if (n === null)
            if (e.pagesDefinition.internal.workingItem !== null) {
              const l = this._calculateAndAppendAggregateItem(
                e.pagesDefinition.internal.workingItem
              );
              s.push(l),
                (e.pagesDefinition.internal.workingItem = null),
                e.pagesDefinition.internal.set.push(
                  l.attributes[this.objectIdField]
                ),
                (e.pagesDefinition.internal.fullyResolved = !0),
                r(null);
            } else (e.pagesDefinition.internal.fullyResolved = !0), r(null);
          else {
            const l = this._generateAggregateHash(n);
            if (e.pagesDefinition.internal.workingItem === null)
              e.pagesDefinition.internal.workingItem = { features: [n], id: l };
            else {
              if (l !== e.pagesDefinition.internal.workingItem.id) {
                const o = this._calculateAndAppendAggregateItem(
                  e.pagesDefinition.internal.workingItem
                );
                return (
                  s.push(o),
                  (e.pagesDefinition.internal.workingItem = null),
                  e.pagesDefinition.internal.set.push(
                    o.attributes[this.objectIdField]
                  ),
                  (t -= 1),
                  (e.pagesDefinition.internal.workingItem = {
                    features: [n],
                    id: l,
                  }),
                  void r(o)
                );
              }
              e.pagesDefinition.internal.workingItem.features.push(n);
            }
            this._nextAggregateItem(e, t, i, s, r, a);
          }
        }, a);
      } catch (n) {
        a(n);
      }
    }
    _calculateFieldStat(e, t, i) {
      const s = [];
      for (let r = 0; r < e.features.length; r++)
        if (t.workingexpr !== null) {
          const a = t.workingexpr.calculateValue(e.features[r]);
          a !== null && s.push(a);
        } else s.push(null);
      switch (t.typeofstat) {
        case "MIN":
          i.attributes[t.tofieldname] = q("min", s, -1);
          break;
        case "MAX":
          i.attributes[t.tofieldname] = q("max", s, -1);
          break;
        case "SUM":
          i.attributes[t.tofieldname] = q("sum", s, -1);
          break;
        case "COUNT":
          i.attributes[t.tofieldname] = s.length;
          break;
        case "VAR":
          i.attributes[t.tofieldname] = q("var", s, -1);
          break;
        case "STDDEV":
          i.attributes[t.tofieldname] = q("stddev", s, -1);
          break;
        case "AVG":
          i.attributes[t.tofieldname] = q("avg", s, -1);
      }
      return !0;
    }
    _calculateAndAppendAggregateItem(e) {
      const t = { attributes: {}, geometry: null };
      for (const s of this._decodedGroupbyfield) {
        const r = s.singlefield
          ? e.features[0].attributes[s.singlefield]
          : s.expression.calculateValue(e.features[0]);
        t.attributes[s.tofieldname] = r;
      }
      for (const s of this._decodedStatsfield)
        this._calculateFieldStat(e, s, t);
      const i = [];
      for (let s = 0; s < this._decodedStatsfield.length; s++)
        i.push(this._calculateFieldStat(e, this._decodedStatsfield[s], t));
      return (
        (this._featureCache[t.attributes[this.objectIdField]] = new P({
          attributes: t.attributes,
          geometry: t.geometry,
        })),
        t
      );
    }
    _generateAggregateHash(e) {
      let t = "";
      for (const i of this._decodedGroupbyfield) {
        const s = i.singlefield
          ? e.attributes[i.singlefield]
          : i.expression.calculateValue(e);
        t += s == null ? ":" : ":" + s.toString();
      }
      return _e(t, ye.String);
    }
    async _stat() {
      return { calculated: !1 };
    }
    async getFeatureByObjectId() {
      return null;
    }
    static registerAction() {
      A._featuresetFunctions.groupby = function (e, t) {
        return new Se({
          parentfeatureset: this,
          groupbyfields: e,
          statsfields: t,
        });
      };
    }
  }.registerAction(),
  K.registerAction(),
  je.registerAction(),
  se.registerAction();
class it extends me {
  constructor(e, t = null, i = null, s = null) {
    super(),
      (this._map = e),
      (this._overridespref = t),
      (this._lrucache = i),
      (this._interceptor = s),
      (this._instantLayers = []);
  }
  _makeAndAddFeatureSet(e, t = !0, i = null) {
    const s = E(
      e,
      this._overridespref,
      i === null ? ["*"] : i,
      t,
      this._lrucache,
      this._interceptor
    );
    return (
      this._instantLayers.push({
        featureset: s,
        opitem: e,
        includeGeometry: t,
        outFields: JSON.stringify(i),
      }),
      s
    );
  }
  async featureSetByName(e, t = !0, i = null) {
    if (
      this._map.loaded !== void 0 &&
      this._map.load !== void 0 &&
      this._map.loaded === !1
    )
      return await this._map.load(), this.featureSetByName(e, t, i);
    i === null && (i = ["*"]), (i = (i = i.slice(0)).sort());
    const s = JSON.stringify(i);
    for (let a = 0; a < this._instantLayers.length; a++) {
      const n = this._instantLayers[a];
      if (n.opitem.title === e && n.includeGeometry === t && n.outFields === s)
        return this._instantLayers[a].featureset;
    }
    const r = this._map.allLayers.find((a) => a instanceof T && a.title === e);
    if (r) return this._makeAndAddFeatureSet(r, t, i);
    if (this._map.tables) {
      const a = this._map.tables.find(
        (n) => !!((n.title && n.title === e) || (n.title && n.title === e))
      );
      if (a) {
        if (a instanceof T) return this._makeAndAddFeatureSet(a, t, i);
        if (!a._materializedTable) {
          const n = a.outFields ? a : { ...a, outFields: ["*"] };
          a._materializedTable = new T(n);
        }
        return (
          await a._materializedTable.load(),
          this._makeAndAddFeatureSet(a._materializedTable, t, i)
        );
      }
    }
    return null;
  }
  async featureSetById(e, t = !0, i = ["*"]) {
    if (
      this._map.loaded !== void 0 &&
      this._map.load !== void 0 &&
      this._map.loaded === !1
    )
      return await this._map.load(), this.featureSetById(e, t, i);
    i === null && (i = ["*"]), (i = (i = i.slice(0)).sort());
    const s = JSON.stringify(i);
    for (let a = 0; a < this._instantLayers.length; a++) {
      const n = this._instantLayers[a];
      if (n.opitem.id === e && n.includeGeometry === t && n.outFields === s)
        return this._instantLayers[a].featureset;
    }
    const r = this._map.allLayers.find((a) => a instanceof T && a.id === e);
    if (r) return this._makeAndAddFeatureSet(r, t, i);
    if (this._map.tables) {
      const a = this._map.tables.find((n) => n.id === e);
      if (a) {
        if (a instanceof T) return this._makeAndAddFeatureSet(a, t, i);
        if (!a._materializedTable) {
          const n = { ...a, outFields: ["*"] };
          a._materializedTable = new T(n);
        }
        return (
          await a._materializedTable.load(),
          this._makeAndAddFeatureSet(a._materializedTable, t, i)
        );
      }
    }
    return null;
  }
}
class ne extends me {
  constructor(e, t = null, i = null, s = null) {
    super(),
      (this._url = e),
      (this._overridespref = t),
      (this._lrucache = i),
      (this._interceptor = s),
      (this.metadata = null),
      (this._instantLayers = []);
  }
  get url() {
    return this._url;
  }
  _makeAndAddFeatureSet(e, t = !0, i = null) {
    const s = E(
      e,
      this._overridespref,
      i === null ? ["*"] : i,
      t,
      this._lrucache
    );
    return (
      this._instantLayers.push({
        featureset: s,
        opitem: e,
        includeGeometry: t,
        outFields: JSON.stringify(i),
      }),
      s
    );
  }
  async _loadMetaData() {
    const e = await Fe(this._url);
    return (this.metadata = e), e;
  }
  load() {
    return this._loadMetaData();
  }
  clone() {
    return new ne(
      this._url,
      this._overridespref,
      this._lrucache,
      this._interceptor
    );
  }
  async featureSetByName(e, t = !0, i = null) {
    i === null && (i = ["*"]), (i = (i = i.slice(0)).sort());
    const s = JSON.stringify(i);
    for (let n = 0; n < this._instantLayers.length; n++) {
      const l = this._instantLayers[n];
      if (l.opitem.title === e && l.includeGeometry === t && l.outFields === s)
        return this._instantLayers[n].featureset;
    }
    const r = await this._loadMetaData();
    let a = null;
    for (const n of r.layers ? r.layers : []) n.name === e && (a = n);
    if (!a) for (const n of r.tables ? r.tables : []) n.name === e && (a = n);
    if (a) {
      const n = await $(this._url + "/" + a.id, ["*"]);
      return this._makeAndAddFeatureSet(n, t, i);
    }
    return null;
  }
  async featureSetById(e, t = !0, i = ["*"]) {
    i === null && (i = ["*"]), (i = (i = i.slice(0)).sort());
    const s = JSON.stringify(i);
    e = e != null ? e.toString() : "";
    for (let n = 0; n < this._instantLayers.length; n++) {
      const l = this._instantLayers[n];
      if (l.opitem.id === e && l.includeGeometry === t && l.outFields === s)
        return this._instantLayers[n].featureset;
    }
    const r = await this._loadMetaData();
    let a = null;
    for (const n of r.layers ? r.layers : [])
      n.id !== null && n.id !== void 0 && n.id.toString() === e && (a = n);
    if (!a)
      for (const n of r.tables ? r.tables : [])
        n.id !== null && n.id !== void 0 && n.id.toString() === e && (a = n);
    if (a) {
      const n = await $(this._url + "/" + a.id, ["*"]);
      return this._makeAndAddFeatureSet(n, t, i);
    }
    return null;
  }
}
function st(c, e, t, i, s) {
  if (c === null) return null;
  if (c instanceof T) {
    switch (e) {
      case "datasource":
        return E(c, s, c.outFields, !0, t, i).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return E(c, s, c.outFields, !0, t, i);
    }
    return null;
  }
  if (c instanceof A)
    switch (e) {
      case "datasource":
        return c.getDataSourceFeatureSet();
      case "parent":
        return c;
      case "root":
        return c.getRootFeatureSet();
    }
  return null;
}
async function at(c, e, t, i, s, r, a, n = null) {
  if (g.applicationCache) {
    const o = g.applicationCache.getLayerInfo(c + ":" + r.url);
    if (o) {
      const u = await o;
      return E(
        new T({ url: Z(u.url) + "/" + e, outFields: ["*"] }),
        t,
        i,
        s,
        a,
        n
      );
    }
  }
  const l = new Ae({ id: c, portal: r }).load();
  g.applicationCache && g.applicationCache.setLayerInfo(c + ":" + r.url, l);
  try {
    const o = await l;
    return E(
      new T({ url: Z(o.url ?? "") + "/" + e, outFields: ["*"] }),
      t,
      i,
      s,
      a,
      n
    );
  } catch (o) {
    throw (
      (g.applicationCache && g.applicationCache.clearLayerInfo(c + ":" + r.url),
      o)
    );
  }
}
const ht = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      constructAssociationMetaDataFeatureSetFromUrl: et,
      constructFeatureSet: E,
      constructFeatureSetFromPortalItem: at,
      constructFeatureSetFromRelationship: tt,
      constructFeatureSetFromUrl: re,
      convertToFeatureSet: st,
      createFeatureSetCollectionFromMap: function (c, e, t = null, i = null) {
        return new it(c, e, t, i);
      },
      createFeatureSetCollectionFromService: function (
        c,
        e,
        t = null,
        i = null
      ) {
        return new ne(c, e, t, i);
      },
      initialiseMetaDataCache: function () {
        g.applicationCache === null && (g.applicationCache = new g());
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export {
  et as A,
  tt as C,
  Xe as D,
  st as E,
  re as I,
  E as S,
  B as a,
  K as b,
  U as c,
  se as d,
  me as e,
  ae as f,
  Ke as g,
  X as h,
  ht as i,
  at as j,
  ze as x,
  Ze as y,
};
