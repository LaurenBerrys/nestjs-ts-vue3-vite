var r;
(function (e) {
  (e.AsyncNotEnabled = "AsyncNotEnabled"),
    (e.ModulesNotSupported = "ModulesNotSupported"),
    (e.CircularModules = "CircularModules"),
    (e.NeverReach = "NeverReach"),
    (e.UnsupportedHashType = "UnsupportedHashType"),
    (e.InvalidParameter = "InvalidParameter"),
    (e.UnexpectedToken = "UnexpectedToken"),
    (e.Unrecognised = "Unrecognised"),
    (e.UnrecognisedType = "UnrecognisedType"),
    (e.MaximumCallDepth = "MaximumCallDepth"),
    (e.BooleanConditionRequired = "BooleanConditionRequired"),
    (e.TypeNotAllowedInFeature = "TypeNotAllowedInFeature"),
    (e.KeyMustBeString = "KeyMustBeString"),
    (e.WrongNumberOfParameters = "WrongNumberOfParameters"),
    (e.CallNonFunction = "CallNonFunction"),
    (e.NoFunctionInTemplateLiteral = "NoFunctionInTemplateLiteral"),
    (e.NoFunctionInDictionary = "NoFunctionInDictionary"),
    (e.NoFunctionInArray = "NoFunctionInArray"),
    (e.AssignModuleFunction = "AssignModuleFunction"),
    (e.LogicExpressionOrAnd = "LogicExpressionOrAnd"),
    (e.LogicalExpressionOnlyBoolean = "LogicalExpressionOnlyBoolean"),
    (e.FuncionNotFound = "FunctionNotFound"),
    (e.InvalidMemberAccessKey = "InvalidMemberAccessKey"),
    (e.UnsupportedUnaryOperator = "UnsupportUnaryOperator"),
    (e.InvalidIdentifier = "InvalidIdentifier"),
    (e.MemberOfNull = "MemberOfNull"),
    (e.UnsupportedOperator = "UnsupportedOperator"),
    (e.Cancelled = "Cancelled"),
    (e.ModuleAccessorMustBeString = "ModuleAccessorMustBeString"),
    (e.ModuleExportNotFound = "ModuleExportNotFound"),
    (e.Immutable = "Immutable"),
    (e.OutOfBounds = "OutOfBounds"),
    (e.IllegalResult = "IllegalResult"),
    (e.FieldNotFound = "FieldNotFound"),
    (e.PortalRequired = "PortalRequired"),
    (e.LogicError = "LogicError"),
    (e.ArrayAccessorMustBeNumber = "ArrayAccessMustBeNumber"),
    (e.KeyAccessorMustBeString = "KeyAccessorMustBeString"),
    (e.WrongSpatialReference = "WrongSpatialReference");
})(r || (r = {}));
const l = {
  [r.TypeNotAllowedInFeature]:
    "Feature attributes only support dates, numbers, strings, guids.",
  [r.LogicError]: "Logic error - {reason}",
  [r.NeverReach]: "Encountered unreachable logic",
  [r.AsyncNotEnabled]: "Async Arcade must be enabled for this script",
  [r.ModuleAccessorMustBeString]: "Module accessor must be a string",
  [r.ModuleExportNotFound]: "Module has no export with provided identifier",
  [r.ModulesNotSupported]: "Current profile does not support modules",
  [r.ArrayAccessorMustBeNumber]: "Array accessor must be a number",
  [r.FuncionNotFound]: "Function not found",
  [r.FieldNotFound]: "Key not found - {key}",
  [r.CircularModules]: "Circular module dependencies are not allowed",
  [r.Cancelled]: "Execution cancelled",
  [r.UnsupportedHashType]: "Type not supported in hash function",
  [r.IllegalResult]: "Value is not a supported return type",
  [r.PortalRequired]: "Portal is required",
  [r.InvalidParameter]: "Invalid parameter",
  [r.WrongNumberOfParameters]: "Call with wrong number of parameters",
  [r.Unrecognised]: "Unrecognised code structure",
  [r.UnrecognisedType]: "Unrecognised type",
  [r.WrongSpatialReference]:
    "Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",
  [r.BooleanConditionRequired]: "Conditions must use booleans",
  [r.NoFunctionInDictionary]: "Dictionaries cannot contain functions.",
  [r.NoFunctionInArray]: "Arrays cannot contain functions.",
  [r.NoFunctionInTemplateLiteral]:
    "Template Literals do not expect functions by value.",
  [r.KeyAccessorMustBeString]: "Accessor must be a string",
  [r.KeyMustBeString]: "Object keys must be a string",
  [r.Immutable]: "Object is immutable",
  [r.InvalidParameter]: "Invalid parameter",
  [r.UnexpectedToken]: "Unexpected token",
  [r.MemberOfNull]: "Cannot access property of null object",
  [r.MaximumCallDepth]: "Exceeded maximum function depth",
  [r.OutOfBounds]: "Out of bounds",
  [r.InvalidIdentifier]: "Identifier not recognised",
  [r.FuncionNotFound]: "Function not found",
  [r.CallNonFunction]: "Expression is not a function",
  [r.InvalidMemberAccessKey]: "Cannot access value using a key of this type",
  [r.AssignModuleFunction]: "Cannot assign function to module variable",
  [r.UnsupportedUnaryOperator]: "Unsupported unary operator",
  [r.UnsupportedOperator]: "Unsupported operator",
  [r.LogicalExpressionOnlyBoolean]: "Logical expressions must be boolean",
  [r.LogicExpressionOrAnd]:
    "Logical expression can only be combined with || or &&",
};
class y extends Error {
  constructor(...t) {
    super(...t);
  }
}
class a extends y {
  constructor(t, o) {
    super(i(o) + t.message, { cause: t }),
      (this.loc = null),
      Error.captureStackTrace && Error.captureStackTrace(this, a),
      o && o.loc && (this.loc = o.loc);
  }
}
class d extends Error {
  constructor(t, o, n, c) {
    super("Execution error - " + i(n) + u(l[o], c)),
      (this.loc = null),
      (this.declaredRootClass = "esri.arcade.arcadeexecutionerror"),
      Error.captureStackTrace && Error.captureStackTrace(this, d),
      n && n.loc && (this.loc = n.loc);
  }
}
function i(e) {
  var t, o;
  return e && e.loc
    ? `Line : ${(t = e.loc.start) == null ? void 0 : t.line}, ${
        (o = e.loc.start) == null ? void 0 : o.column
      }: `
    : "";
}
class p extends Error {
  constructor(t, o, n, c) {
    super("Compilation error - " + i(n) + u(l[o], c)),
      (this.loc = null),
      (this.declaredRootClass = "esri.arcade.arcadecompilationerror"),
      Error.captureStackTrace && Error.captureStackTrace(this, p),
      n && n.loc && (this.loc = n.loc);
  }
}
class m extends Error {
  constructor() {
    super("Uncompilable code structures"),
      (this.declaredRootClass = "esri.arcade.arcadeuncompilableerror"),
      Error.captureStackTrace && Error.captureStackTrace(this, m);
  }
}
function u(e, t) {
  try {
    if (!t) return e;
    for (const o in t) {
      let n = t[o];
      n || (n = ""), (e = e.replace("{" + o + "}", t[o]));
    }
  } catch {}
  return e;
}
function b(e, t, o) {
  return o.declaredRootClass === "esri.arcade.arcadeexecutionerror" ||
    o.declaredRootClass === "esri.arcade.arcadecompilationerror"
    ? o.loc === null && t && t.loc
      ? new a(o, { cause: o })
      : o
    : (o.declaredRootClass ===
        "esri.arcade.featureset.support.featureseterror" ||
        o.declaredRootClass === "esri.arcade.featureset.support.sqlerror" ||
        o.declaredRootClass,
      t && t.loc ? new a(o, { cause: o }) : o);
}
var s;
(function (e) {
  (e.UnrecognisedUri = "UnrecognisedUri"),
    (e.UnsupportedUriProtocol = "UnsupportedUriProtocol");
})(s || (s = {}));
const f = {
  [s.UnrecognisedUri]: "Unrecognised uri - {uri}",
  [s.UnsupportedUriProtocol]: "Unrecognised uri protocol",
};
class g extends Error {
  constructor(t, o) {
    super(u(f[t], o)),
      (this.declaredRootClass = "esri.arcade.arcademoduleerror"),
      Error.captureStackTrace && Error.captureStackTrace(this, g);
  }
}
export { m as c, r as e, u as i, s as l, g as p, p as s, d as t, b as u };
