import { c as ge } from "./arcadeTimeUtils.e79f2f70.js";
import {
  B as A,
  G as v,
  b as P,
  v as L,
  r as x,
  ah as he,
  Q as we,
  U as oe,
  y as T,
  K as j,
  J as N,
  z as V,
  P as Ie,
  V as O,
  ai as Fe,
  C as Ee,
  l as z,
  g as De,
  aj as be,
  ak as W,
  a0 as J,
  al as U,
} from "./arcadeUtils.2f855605.js";
import { t as m, e as p } from "./executionError.fb3f283a.js";
import {
  e as le,
  E as xe,
  j as ce,
  f as Ae,
  c as fe,
  a as Ne,
  b as Se,
  d as Te,
  S as K,
  C as ve,
  I as $e,
  A as Le,
  y as k,
  g as Pe,
  x as _,
  D as $,
  h as Y,
} from "./featureSetUtils.3bdb3fe9.js";
import { t as Re } from "./portalUtils.b096dd2b.js";
import { e as Ce, A as ue } from "./SpatialFilter.a4e03d79.js";
import { hV as Me, ic as X, gr as Z } from "./index.8fd7165c.js";
import { f as D } from "./WhereClause.ae196341.js";
import "./Table.e9c997d5.js";
import "./vue.a7ce1fbe.js";
import "./NvapForm.feb8550d.js";
import "./vue-i18n.67a42238.js";
import "./vue-router.805f6e2a.js";
import "./number.f83996f0.js";
import "./executeForIds.3a002380.js";
import "./geometryEngineAsync.8efb94c6.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
async function ee(o, n, r) {
  const y = o.getVariables();
  if (y.length > 0) {
    const I = [];
    for (let t = 0; t < y.length; t++) {
      const a = { name: y[t] };
      I.push(await n.evaluateIdentifier(r, a));
    }
    const e = {};
    for (let t = 0; t < y.length; t++) e[y[t]] = I[t];
    return (o.parameters = e), o;
  }
  return o;
}
function d(o, n, r = null) {
  for (const y in o) if (y.toLowerCase() === n.toLowerCase()) return o[y];
  return r;
}
function de(o) {
  if (o === null) return null;
  const n = { type: d(o, "type", ""), name: d(o, "name", "") };
  if (n.type === "range") n.range = d(o, "range", []);
  else {
    n.codedValues = [];
    for (const r of d(o, "codedValues", []))
      n.codedValues.push({ name: d(r, "name", ""), code: d(r, "code", null) });
  }
  return n;
}
function ne(o) {
  if (o === null) return null;
  const n = {},
    r = d(o, "wkt", null);
  r !== null && (n.wkt = r);
  const y = d(o, "wkid", null);
  return y !== null && (n.wkid = y), n;
}
function me(o) {
  if (o === null) return null;
  const n = { hasZ: d(o, "hasz", !1), hasM: d(o, "hasm", !1) },
    r = d(o, "spatialreference", null);
  r && (n.spatialReference = ne(r));
  const y = d(o, "x", null);
  if (y !== null) return (n.x = y), (n.y = d(o, "y", null)), n;
  const I = d(o, "rings", null);
  if (I !== null) return (n.rings = I), n;
  const e = d(o, "paths", null);
  if (e !== null) return (n.paths = e), n;
  const t = d(o, "points", null);
  if (t !== null) return (n.points = t), n;
  for (const a of [
    "xmin",
    "xmax",
    "ymin",
    "ymax",
    "zmin",
    "zmax",
    "mmin",
    "mmax",
  ]) {
    const f = d(o, a, null);
    f !== null && (n[a] = f);
  }
  return n;
}
function en(o) {
  o.mode === "async" &&
    ((o.functions.timezone = function (n, r) {
      return o.standardFunctionAsync(n, r, async (y, I, e) => {
        if ((A(e, 1, 2, n, r), v(e[0]))) {
          if ((await e[0].load(), e.length === 1 || e[1] === null))
            return e[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;
          if (!(e[1] instanceof P) || e[1].hasField("type") === !1)
            throw new m(n, p.InvalidParameter, r);
          const f = e[1].field("type");
          if (L(f) === !1) throw new m(n, p.InvalidParameter, r);
          switch (x(f).toLowerCase()) {
            case "preferredtimezone":
              return e[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;
            case "editfieldsinfo":
              return e[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;
            case "timeinfo":
              return e[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;
            case "field":
              if (e[1].hasField("fieldname") && L(e[1].field("fieldname")))
                return e[0].dateTimeReferenceFieldIndex.fieldTimeZone(
                  x(e[1].field("fieldname"))
                );
          }
          throw new m(n, p.InvalidParameter, r);
        }
        const t = he(e[0], we(n));
        if (t === null) return null;
        const a = t.timeZone;
        return a === "system" ? ge.systemTimeZoneCanonicalName : a;
      });
    }),
    (o.functions.sqltimestamp = function (n, r) {
      return o.standardFunctionAsync(n, r, async (y, I, e) => {
        A(e, 1, 3, n, r);
        const t = e[0];
        if (oe(t)) {
          if (e.length === 1) return t.toSQLString();
          if (e.length === 2) return t.changeTimeZone(x(e[1])).toSQLString();
          throw new m(n, p.InvalidParameter, r);
        }
        if (v(t)) {
          if (e.length !== 3) throw new m(n, p.InvalidParameter, r);
          await t.load();
          const a = x(e[1]);
          if (oe(e[2]) === !1) throw new m(n, p.InvalidParameter, r);
          const f = t.fieldTimeZone(a);
          return f === null
            ? e[2].toSQLString()
            : e[2].changeTimeZone(f).toSQLString();
        }
        throw new m(n, p.InvalidParameter, r);
      });
    }),
    o.signatures.push({ name: "sqltimestamp", min: 2, max: 4 }),
    (o.functions.featuresetbyid = function (n, r) {
      return o.standardFunctionAsync(n, r, (y, I, e) => {
        if ((A(e, 2, 4, n, r), e[0] instanceof le)) {
          const t = x(e[1]);
          let a = T(e[2], null);
          const f = j(T(e[3], !0));
          if ((a === null && (a = ["*"]), N(a) === !1))
            throw new m(n, p.InvalidParameter, r);
          return e[0].featureSetById(t, f, a);
        }
        throw new m(n, p.InvalidParameter, r);
      });
    }),
    o.signatures.push({ name: "featuresetbyid", min: 2, max: 4 }),
    (o.functions.getfeatureset = function (n, r) {
      return o.standardFunctionAsync(n, r, (y, I, e) => {
        if ((A(e, 1, 2, n, r), V(e[0]))) {
          let t = T(e[1], "datasource");
          return (
            t === null && (t = "datasource"),
            (t = x(t).toLowerCase()),
            xe(
              e[0].fullSchema(),
              t,
              n.lrucache,
              n.interceptor,
              n.spatialReference
            )
          );
        }
        throw new m(n, p.InvalidParameter, r);
      });
    }),
    o.signatures.push({ name: "getfeatureset", min: 1, max: 2 }),
    (o.functions.featuresetbyportalitem = function (n, r) {
      return o.standardFunctionAsync(n, r, (y, I, e) => {
        if ((A(e, 2, 5, n, r), e[0] === null))
          throw new m(n, p.PortalRequired, r);
        if (e[0] instanceof Ie) {
          const l = x(e[1]),
            i = x(e[2]);
          let s = T(e[3], null);
          const c = j(T(e[4], !0));
          if ((s === null && (s = ["*"]), N(s) === !1))
            throw new m(n, p.InvalidParameter, r);
          let F = null;
          return (
            n.services && n.services.portal && (F = n.services.portal),
            (F = Re(e[0], F)),
            ce(l, i, n.spatialReference, s, c, F, n.lrucache, n.interceptor)
          );
        }
        if (L(e[0]) === !1) throw new m(n, p.PortalRequired, r);
        const t = x(e[0]),
          a = x(e[1]);
        let f = T(e[2], null);
        const u = j(T(e[3], !0));
        if ((f === null && (f = ["*"]), N(f) === !1))
          throw new m(n, p.InvalidParameter, r);
        if (n.services && n.services.portal)
          return ce(
            t,
            a,
            n.spatialReference,
            f,
            u,
            n.services.portal,
            n.lrucache,
            n.interceptor
          );
        throw new m(n, p.PortalRequired, r);
      });
    }),
    o.signatures.push({ name: "featuresetbyportalitem", min: 2, max: 5 }),
    (o.functions.featuresetbyname = function (n, r) {
      return o.standardFunctionAsync(n, r, (y, I, e) => {
        if ((A(e, 2, 4, n, r), e[0] instanceof le)) {
          const t = x(e[1]);
          let a = T(e[2], null);
          const f = j(T(e[3], !0));
          if ((a === null && (a = ["*"]), N(a) === !1))
            throw new m(n, p.InvalidParameter, r);
          return e[0].featureSetByName(t, f, a);
        }
        throw new m(n, p.InvalidParameter, r);
      });
    }),
    o.signatures.push({ name: "featuresetbyname", min: 2, max: 4 }),
    (o.functions.featureset = function (n, r) {
      return o.standardFunction(n, r, (y, I, e) => {
        var f;
        A(e, 1, 1, n, r);
        let t = e[0];
        const a = {
          layerDefinition: {
            geometryType: "",
            objectIdField: "",
            globalIdField: "",
            typeIdField: "",
            fields: [],
          },
          featureSet: { geometryType: "", features: [] },
        };
        if (L(t))
          (t = JSON.parse(t)),
            t.layerDefinition !== void 0
              ? ((a.layerDefinition = t.layerDefinition),
                (a.featureSet = t.featureSet),
                t.layerDefinition.spatialReference &&
                  (a.layerDefinition.spatialReference =
                    t.layerDefinition.spatialReference))
              : ((a.featureSet.features = t.features),
                (a.featureSet.geometryType = t.geometryType),
                (a.layerDefinition.geometryType = a.featureSet.geometryType),
                (a.layerDefinition.objectIdField = t.objectIdFieldName),
                (a.layerDefinition.typeIdField = t.typeIdFieldName),
                (a.layerDefinition.globalIdField = t.globalIdFieldName),
                (a.layerDefinition.fields = t.fields),
                t.spatialReference &&
                  (a.layerDefinition.spatialReference = t.spatialReference));
        else {
          if (!(e[0] instanceof P)) throw new m(n, p.InvalidParameter, r);
          {
            t = JSON.parse(e[0].castToText(!0));
            const u = d(t, "layerdefinition");
            if (u !== null) {
              (a.layerDefinition.geometryType = d(u, "geometrytype", "")),
                (a.featureSet.geometryType = a.layerDefinition.geometryType),
                (a.layerDefinition.globalIdField = d(u, "globalidfield", "")),
                (a.layerDefinition.objectIdField = d(u, "objectidfield", "")),
                (a.layerDefinition.typeIdField = d(u, "typeidfield", ""));
              const l = d(u, "spatialreference", null);
              l && (a.layerDefinition.spatialReference = ne(l));
              for (const s of d(u, "fields", [])) {
                const c = {
                  name: d(s, "name", ""),
                  alias: d(s, "alias", ""),
                  type: d(s, "type", ""),
                  nullable: d(s, "nullable", !0),
                  editable: d(s, "editable", !0),
                  length: d(s, "length", null),
                  domain: de(d(s, "domain")),
                };
                a.layerDefinition.fields.push(c);
              }
              const i = d(t, "featureset", null);
              if (i) {
                const s = {};
                for (const c of a.layerDefinition.fields)
                  s[c.name.toLowerCase()] = c.name;
                for (const c of d(i, "features", [])) {
                  const F = {},
                    E = d(c, "attributes", {});
                  for (const w in E) F[s[w.toLowerCase()]] = E[w];
                  a.featureSet.features.push({
                    attributes: F,
                    geometry: me(d(c, "geometry", null)),
                  });
                }
              }
            } else {
              (a.layerDefinition.geometryType = d(t, "geometrytype", "")),
                (a.featureSet.geometryType = a.layerDefinition.geometryType),
                (a.layerDefinition.objectIdField = d(
                  t,
                  "objectidfieldname",
                  ""
                )),
                (a.layerDefinition.typeIdField = d(t, "typeidfieldname", ""));
              const l = d(t, "spatialreference", null);
              l && (a.layerDefinition.spatialReference = ne(l));
              for (const s of d(t, "fields", [])) {
                const c = {
                  name: d(s, "name", ""),
                  alias: d(s, "alias", ""),
                  type: d(s, "type", ""),
                  nullable: d(s, "nullable", !0),
                  editable: d(s, "editable", !0),
                  length: d(s, "length", null),
                  domain: de(d(s, "domain")),
                };
                a.layerDefinition.fields.push(c);
              }
              const i = {};
              for (const s of a.layerDefinition.fields)
                i[s.name.toLowerCase()] = s.name;
              for (const s of d(t, "features", [])) {
                const c = {},
                  F = d(s, "attributes", {});
                for (const E in F) c[i[E.toLowerCase()]] = F[E];
                a.featureSet.features.push({
                  attributes: c,
                  geometry: me(d(s, "geometry", null)),
                });
              }
            }
          }
        }
        if (
          (function (u) {
            return (
              !!u.layerDefinition &&
              !!u.featureSet &&
              (function (l, i) {
                for (const s of i) if (s === l) return !0;
                return !1;
              })(u.layerDefinition.geometryType, [
                "",
                null,
                "esriGeometryNull",
                "esriGeometryPoint",
                "esriGeometryPolyline",
                "esriGeometryPolygon",
                "esriGeometryMultipoint",
                "esriGeometryEnvelope",
              ]) !== !1 &&
              u.layerDefinition.objectIdField !== null &&
              u.layerDefinition.objectIdField !== "" &&
              N(u.layerDefinition.fields) !== !1 &&
              N(u.featureSet.features) !== !1
            );
          })(a) === !1
        )
          throw new m(n, p.InvalidParameter, r);
        return (
          (((f = a == null ? void 0 : a.layerDefinition) == null
            ? void 0
            : f.geometryType) || "") === "" &&
            (a.layerDefinition.geometryType = "esriGeometryNull"),
          Ae.create(a, n.spatialReference)
        );
      });
    }),
    o.signatures.push({ name: "featureset", min: 1, max: 1 }),
    (o.functions.filter = function (n, r) {
      return o.standardFunctionAsync(n, r, async (y, I, e) => {
        if ((A(e, 2, 2, n, r), N(e[0]) || O(e[0]))) {
          const t = [];
          let a = e[0];
          a instanceof Fe && (a = a.toArray());
          let f = null;
          if (!Ee(e[1])) throw new m(n, p.InvalidParameter, r);
          f = e[1].createFunction(n);
          for (const u of a) {
            const l = f(u);
            Me(l) ? (await l) === !0 && t.push(u) : l === !0 && t.push(u);
          }
          return t;
        }
        if (v(e[0])) {
          const t = await e[0].load(),
            a = D.create(e[1], t.getFieldsIndex()),
            f = a.getVariables();
          if (f.length > 0) {
            const u = [];
            for (let i = 0; i < f.length; i++) {
              const s = { name: f[i] };
              u.push(await o.evaluateIdentifier(n, s));
            }
            const l = {};
            for (let i = 0; i < f.length; i++) l[f[i]] = u[i];
            return (
              (a.parameters = l),
              new fe({ parentfeatureset: e[0], whereclause: a })
            );
          }
          return new fe({ parentfeatureset: e[0], whereclause: a });
        }
        throw new m(n, p.InvalidParameter, r);
      });
    }),
    o.signatures.push({ name: "filter", min: 2, max: 2 }),
    (o.functions.orderby = function (n, r) {
      return o.standardFunctionAsync(n, r, async (y, I, e) => {
        if ((A(e, 2, 2, n, r), v(e[0]))) {
          const t = new Ne(e[1]);
          return new Se({ parentfeatureset: e[0], orderbyclause: t });
        }
        throw new m(n, p.InvalidParameter, r);
      });
    }),
    o.signatures.push({ name: "orderby", min: 2, max: 2 }),
    (o.functions.top = function (n, r) {
      return o.standardFunctionAsync(n, r, async (y, I, e) => {
        if ((A(e, 2, 2, n, r), v(e[0])))
          return new Te({ parentfeatureset: e[0], topnum: e[1] });
        if (N(e[0]))
          return z(e[1]) >= e[0].length
            ? e[0].slice(0)
            : e[0].slice(0, z(e[1]));
        if (O(e[0]))
          return z(e[1]) >= e[0].length()
            ? e[0].slice(0)
            : e[0].slice(0, z(e[1]));
        throw new m(n, p.InvalidParameter, r);
      });
    }),
    o.signatures.push({ name: "top", min: 2, max: 2 }),
    (o.functions.first = function (n, r) {
      return o.standardFunctionAsync(n, r, async (y, I, e) => {
        if ((A(e, 1, 1, n, r), v(e[0]))) {
          const t = await e[0].first(y.abortSignal);
          if (t !== null) {
            const a = De.createFromGraphicLikeObject(
              t.geometry,
              t.attributes,
              e[0],
              n.timeReference
            );
            return (a._underlyingGraphic = t), a;
          }
          return t;
        }
        return N(e[0])
          ? e[0].length === 0
            ? null
            : e[0][0]
          : O(e[0])
          ? e[0].length() === 0
            ? null
            : e[0].get(0)
          : null;
      });
    }),
    o.signatures.push({ name: "first", min: 1, max: 1 }),
    (o.functions.attachments = function (n, r) {
      return o.standardFunctionAsync(n, r, async (y, I, e) => {
        A(e, 1, 2, n, r);
        const t = { minsize: -1, maxsize: -1, types: null, returnMetadata: !1 };
        if (e.length > 1) {
          if (e[1] instanceof P) {
            if (
              (e[1].hasField("minsize") &&
                (t.minsize = z(e[1].field("minsize"))),
              e[1].hasField("metadata") &&
                (t.returnMetadata = j(e[1].field("metadata"))),
              e[1].hasField("maxsize") &&
                (t.maxsize = z(e[1].field("maxsize"))),
              e[1].hasField("types"))
            ) {
              const a = be(e[1].field("types"), !1);
              a.length > 0 && (t.types = a);
            }
          } else if (e[1] !== null) throw new m(n, p.InvalidParameter, r);
        }
        if (V(e[0])) {
          let a = e[0]._layer;
          return (
            a instanceof X &&
              (a = K(
                a,
                n.spatialReference,
                ["*"],
                !0,
                n.lrucache,
                n.interceptor
              )),
            a === null || v(a) === !1
              ? []
              : (await a.load(),
                a.queryAttachments(
                  e[0].field(a.objectIdField),
                  t.minsize,
                  t.maxsize,
                  t.types,
                  t.returnMetadata
                ))
          );
        }
        if (e[0] === null) return [];
        throw new m(n, p.InvalidParameter, r);
      });
    }),
    o.signatures.push({ name: "attachments", min: 1, max: 2 }),
    (o.functions.featuresetbyrelationshipname = function (n, r) {
      return o.standardFunctionAsync(n, r, async (y, I, e) => {
        A(e, 2, 4, n, r);
        const t = e[0],
          a = x(e[1]);
        let f = T(e[2], null);
        const u = j(T(e[3], !0));
        if ((f === null && (f = ["*"]), N(f) === !1))
          throw new m(n, p.InvalidParameter, r);
        if (e[0] === null) return null;
        if (!V(e[0])) throw new m(n, p.InvalidParameter, r);
        let l = t._layer;
        if (
          (l instanceof X &&
            (l = K(
              l,
              n.spatialReference,
              ["*"],
              !0,
              n.lrucache,
              n.interceptor
            )),
          l === null || v(l) === !1)
        )
          return null;
        l = await l.load();
        const i = l.relationshipMetaData().filter((w) => w.name === a);
        if (i.length === 0) return null;
        if (
          i[0].relationshipTableId !== void 0 &&
          i[0].relationshipTableId !== null &&
          i[0].relationshipTableId > -1
        )
          return ve(
            l,
            i[0],
            t.field(l.objectIdField),
            l.spatialReference,
            f,
            u,
            n.lrucache,
            n.interceptor
          );
        let s = l.serviceUrl();
        if (!s) return null;
        s =
          s.charAt(s.length - 1) === "/"
            ? s + i[0].relatedTableId.toString()
            : s + "/" + i[0].relatedTableId.toString();
        const c = await $e(
          s,
          l.spatialReference,
          f,
          u,
          n.lrucache,
          n.interceptor
        );
        await c.load();
        let F = c.relationshipMetaData();
        if (
          ((F = F.filter((w) => w.id === i[0].id)),
          t.hasField(i[0].keyField) === !1 || t.field(i[0].keyField) === null)
        ) {
          const w = await l.getFeatureByObjectId(t.field(l.objectIdField), [
            i[0].keyField,
          ]);
          if (w) {
            const b = D.create(F[0].keyField + "= @id", c.getFieldsIndex());
            return (
              (b.parameters = { id: w.attributes[i[0].keyField] }), c.filter(b)
            );
          }
          return new Ce({ parentfeatureset: c });
        }
        const E = D.create(F[0].keyField + "= @id", c.getFieldsIndex());
        return (E.parameters = { id: t.field(i[0].keyField) }), c.filter(E);
      });
    }),
    o.signatures.push({ name: "featuresetbyrelationshipname", min: 2, max: 4 }),
    (o.functions.featuresetbyassociation = function (n, r) {
      return o.standardFunctionAsync(n, r, async (y, I, e) => {
        A(e, 2, 3, n, r);
        const t = e[0],
          a = x(T(e[1], "")).toLowerCase(),
          f = L(e[2]) ? x(e[2]) : null;
        if (e[0] === null) return null;
        if (!V(e[0])) throw new m(n, p.InvalidParameter, r);
        let u = t._layer;
        if (
          (u instanceof X &&
            (u = K(
              u,
              n.spatialReference,
              ["*"],
              !0,
              n.lrucache,
              n.interceptor
            )),
          u === null || v(u) === !1)
        )
          return null;
        await u.load();
        const l = u.serviceUrl(),
          i = await Le(l, n.spatialReference);
        let s = null,
          c = null,
          F = !1;
        if (f !== null && f !== "" && f !== void 0) {
          for (const h of i.terminals)
            h.terminalName === f && (c = h.terminalId);
          c === null && (F = !0);
        }
        const E = i.associations.getFieldsIndex(),
          w = E.get("TOGLOBALID").name,
          b = E.get("FROMGLOBALID").name,
          B = E.get("TOTERMINALID").name,
          q = E.get("FROMTERMINALID").name,
          G = E.get("FROMNETWORKSOURCEID").name,
          H = E.get("TONETWORKSOURCEID").name,
          M = E.get("ASSOCIATIONTYPE").name,
          pe = E.get("ISCONTENTVISIBLE").name,
          ye = E.get("OBJECTID").name;
        for (const h of u.fields)
          if (h.type === "global-id") {
            s = t.field(h.name);
            break;
          }
        let R = null,
          te = new k(
            new Z({
              name: "percentalong",
              alias: "percentalong",
              type: "double",
            }),
            D.create("0", i.associations.getFieldsIndex())
          ),
          ae = new k(
            new Z({ name: "side", alias: "side", type: "string" }),
            D.create("''", i.associations.getFieldsIndex())
          );
        const S = "globalid",
          ie = "globalId",
          re = {};
        for (const h in i.lkp) re[h] = i.lkp[h].sourceId;
        const C = new Pe(
          new Z({ name: "classname", alias: "classname", type: "string" }),
          null,
          re
        );
        let g = "";
        switch (a) {
          case "midspan": {
            (g = `((${w}='${s}') OR ( ${b}='${s}')) AND (${M} IN (5))`),
              (C.codefield = D.create(
                `CASE WHEN (${w}='${s}') THEN ${G} ELSE ${H} END`,
                i.associations.getFieldsIndex()
              ));
            const h = J($.findField(i.associations.fields, b));
            (h.name = S),
              (h.alias = S),
              (R = new k(
                h,
                D.create(
                  `CASE WHEN (${b}='${s}') THEN ${w} ELSE ${b} END`,
                  i.associations.getFieldsIndex()
                )
              )),
              (te =
                i.unVersion >= 4
                  ? new Y(
                      $.findField(
                        i.associations.fields,
                        E.get("PERCENTALONG").name
                      )
                    )
                  : new k(
                      new Z({
                        name: "percentalong",
                        alias: "percentalong",
                        type: "double",
                      }),
                      D.create("0", i.associations.getFieldsIndex())
                    ));
            break;
          }
          case "junctionedge": {
            (g = `((${w}='${s}') OR ( ${b}='${s}')) AND (${M} IN (4,6))`),
              (C.codefield = D.create(
                `CASE WHEN (${w}='${s}') THEN ${G} ELSE ${H} END`,
                i.associations.getFieldsIndex()
              ));
            const h = J($.findField(i.associations.fields, b));
            (h.name = S),
              (h.alias = S),
              (R = new k(
                h,
                D.create(
                  `CASE WHEN (${b}='${s}') THEN ${w} ELSE ${b} END`,
                  i.associations.getFieldsIndex()
                )
              )),
              (ae = new k(
                new Z({ name: "side", alias: "side", type: "string" }),
                D.create(
                  `CASE WHEN (${M}=4) THEN 'from' ELSE 'to' END`,
                  i.associations.getFieldsIndex()
                )
              ));
            break;
          }
          case "connected": {
            let h = `${w}='@T'`,
              se = `${b}='@T'`;
            c !== null && ((h += ` AND ${B}=@A`), (se += ` AND ${q}=@A`)),
              (g = "((" + h + ") OR (" + se + "))"),
              (g = W(g, "@T", s ?? "")),
              (h = W(h, "@T", s ?? "")),
              c !== null &&
                ((h = W(h, "@A", c.toString())),
                (g = W(g, "@A", c.toString()))),
              (C.codefield = D.create(
                "CASE WHEN " + h + ` THEN ${G} ELSE ${H} END`,
                i.associations.getFieldsIndex()
              ));
            const Q = J($.findField(i.associations.fields, b));
            (Q.name = S),
              (Q.alias = S),
              (R = new k(
                Q,
                D.create(
                  "CASE WHEN " + h + ` THEN ${b} ELSE ${w} END`,
                  i.associations.getFieldsIndex()
                )
              ));
            break;
          }
          case "container":
            (g = `${w}='${s}' AND ${M} = 2`),
              c !== null && (g += ` AND ${B} = ` + c.toString()),
              (C.codefield = G),
              (g = "( " + g + " )"),
              (R = new _($.findField(i.associations.fields, b), S, S));
            break;
          case "content":
            (g = `(${b}='${s}' AND ${M} = 2)`),
              c !== null && (g += ` AND ${q} = ` + c.toString()),
              (C.codefield = H),
              (g = "( " + g + " )"),
              (R = new _($.findField(i.associations.fields, w), S, S));
            break;
          case "structure":
            (g = `(${w}='${s}' AND ${M} = 3)`),
              c !== null && (g += ` AND ${B} = ` + c.toString()),
              (C.codefield = G),
              (g = "( " + g + " )"),
              (R = new _($.findField(i.associations.fields, b), S, ie));
            break;
          case "attached":
            (g = `(${b}='${s}' AND ${M} = 3)`),
              c !== null && (g += ` AND ${q} = ` + c.toString()),
              (C.codefield = H),
              (g = "( " + g + " )"),
              (R = new _($.findField(i.associations.fields, w), S, ie));
            break;
          default:
            throw new m(n, p.InvalidParameter, r);
        }
        return (
          F && (g = "1 <> 1"),
          new $({
            parentfeatureset: i.associations,
            adaptedFields: [
              new Y($.findField(i.associations.fields, ye)),
              new Y($.findField(i.associations.fields, pe)),
              R,
              ae,
              C,
              te,
            ],
            extraFilter: g
              ? D.create(g, i.associations.getFieldsIndex())
              : null,
          })
        );
      });
    }),
    o.signatures.push({ name: "featuresetbyassociation", min: 2, max: 6 }),
    (o.functions.groupby = function (n, r) {
      return o.standardFunctionAsync(n, r, async (y, I, e) => {
        if ((A(e, 3, 3, n, r), !v(e[0]))) throw new m(n, p.InvalidParameter, r);
        const t = await e[0].load(),
          a = [],
          f = [];
        let u = !1,
          l = [];
        if (L(e[1])) l.push(e[1]);
        else if (e[1] instanceof P) l.push(e[1]);
        else if (N(e[1])) l = e[1];
        else {
          if (!O(e[1])) throw new m(n, p.InvalidParameter, r);
          l = e[1].toArray();
        }
        for (const i of l)
          if (L(i)) {
            const s = D.create(x(i), t.getFieldsIndex()),
              c = ue(s) === !0 ? x(i) : "%%%%FIELDNAME";
            a.push({ name: c, expression: s }),
              c === "%%%%FIELDNAME" && (u = !0);
          } else {
            if (!(i instanceof P)) throw new m(n, p.InvalidParameter, r);
            {
              const s = i.hasField("name") ? i.field("name") : "%%%%FIELDNAME",
                c = i.hasField("expression") ? i.field("expression") : "";
              if ((s === "%%%%FIELDNAME" && (u = !0), !s))
                throw new m(n, p.InvalidParameter, r);
              a.push({
                name: s,
                expression: D.create(c || s, t.getFieldsIndex()),
              });
            }
          }
        if (((l = []), L(e[2]))) l.push(e[2]);
        else if (N(e[2])) l = e[2];
        else if (O(e[2])) l = e[2].toArray();
        else {
          if (!(e[2] instanceof P)) throw new m(n, p.InvalidParameter, r);
          l.push(e[2]);
        }
        for (const i of l) {
          if (!(i instanceof P)) throw new m(n, p.InvalidParameter, r);
          {
            const s = i.hasField("name") ? i.field("name") : "",
              c = i.hasField("statistic") ? i.field("statistic") : "",
              F = i.hasField("expression") ? i.field("expression") : "";
            if (!s || !c || !F) throw new m(n, p.InvalidParameter, r);
            f.push({
              name: s,
              statistic: c.toLowerCase(),
              expression: D.create(F, t.getFieldsIndex()),
            });
          }
        }
        if (u) {
          const i = {};
          for (const c of t.fields) i[c.name.toLowerCase()] = 1;
          for (const c of a)
            c.name !== "%%%%FIELDNAME" && (i[c.name.toLowerCase()] = 1);
          for (const c of f)
            c.name !== "%%%%FIELDNAME" && (i[c.name.toLowerCase()] = 1);
          let s = 0;
          for (const c of a)
            if (c.name === "%%%%FIELDNAME") {
              for (; i["field_" + s.toString()] === 1; ) s++;
              (i["field_" + s.toString()] = 1),
                (c.name = "FIELD_" + s.toString());
            }
        }
        for (const i of a) await ee(i.expression, o, n);
        for (const i of f) await ee(i.expression, o, n);
        return e[0].groupby(a, f);
      });
    }),
    o.signatures.push({ name: "groupby", min: 3, max: 3 }),
    (o.functions.distinct = function (n, r) {
      return o.standardFunctionAsync(n, r, async (y, I, e) => {
        if (v(e[0])) {
          A(e, 2, 2, n, r);
          const t = await e[0].load(),
            a = [];
          let f = [];
          if (L(e[1])) f.push(e[1]);
          else if (e[1] instanceof P) f.push(e[1]);
          else if (N(e[1])) f = e[1];
          else {
            if (!O(e[1])) throw new m(n, p.InvalidParameter, r);
            f = e[1].toArray();
          }
          let u = !1;
          for (const l of f)
            if (L(l)) {
              const i = D.create(x(l), t.getFieldsIndex()),
                s = ue(i) === !0 ? x(l) : "%%%%FIELDNAME";
              a.push({ name: s, expression: i }),
                s === "%%%%FIELDNAME" && (u = !0);
            } else {
              if (!(l instanceof P)) throw new m(n, p.InvalidParameter, r);
              {
                const i = l.hasField("name")
                    ? l.field("name")
                    : "%%%%FIELDNAME",
                  s = l.hasField("expression") ? l.field("expression") : "";
                if ((i === "%%%%FIELDNAME" && (u = !0), !i))
                  throw new m(n, p.InvalidParameter, r);
                a.push({
                  name: i,
                  expression: D.create(s || i, t.getFieldsIndex()),
                });
              }
            }
          if (u) {
            const l = {};
            for (const s of t.fields) l[s.name.toLowerCase()] = 1;
            for (const s of a)
              s.name !== "%%%%FIELDNAME" && (l[s.name.toLowerCase()] = 1);
            let i = 0;
            for (const s of a)
              if (s.name === "%%%%FIELDNAME") {
                for (; l["field_" + i.toString()] === 1; ) i++;
                (l["field_" + i.toString()] = 1),
                  (s.name = "FIELD_" + i.toString());
              }
          }
          for (const l of a) await ee(l.expression, o, n);
          return e[0].groupby(a, []);
        }
        return (function (t, a, f, u) {
          if (u.length === 1) {
            if (N(u[0])) return U(t, u[0], -1);
            if (O(u[0])) return U(t, u[0].toArray(), -1);
          }
          return U(t, u, -1);
        })("distinct", 0, 0, e);
      });
    }));
}
export { en as registerFunctions };
