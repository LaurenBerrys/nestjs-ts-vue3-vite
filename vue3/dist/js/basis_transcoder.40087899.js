import { e as Nn } from "./_commonjsHelpers.2f3e7994.js";
var Er,
  cn,
  Sr,
  An = {};
(Er = {
  get exports() {
    return An;
  },
  set exports(S) {
    An = S;
  },
}),
  (cn =
    typeof document < "u" && document.currentScript
      ? document.currentScript.src
      : void 0),
  typeof __filename < "u" && (cn = cn || __filename),
  (Sr = function (S) {
    var Z,
      B,
      e = (S = S || {}) !== void 0 ? S : {};
    e.ready = new Promise(function (n, r) {
      (Z = n), (B = r);
    });
    var w,
      F = {};
    for (w in e) e.hasOwnProperty(w) && (F[w] = e[w]);
    var Wn,
      Gn,
      fn = !1,
      V = !1;
    (fn = typeof window == "object"),
      (V = typeof importScripts == "function"),
      (Wn =
        typeof process == "object" &&
        typeof process.versions == "object" &&
        typeof process.versions.node == "string"),
      (Gn = !fn && !Wn && !V);
    var pn,
      K,
      En,
      Sn,
      _ = "";
    Wn
      ? ((_ = V ? require("path").dirname(_) + "/" : __dirname + "/"),
        (pn = function (n, r) {
          return (
            En || (En = require("fs")),
            Sn || (Sn = require("path")),
            (n = Sn.normalize(n)),
            En.readFileSync(n, r ? null : "utf8")
          );
        }),
        (K = function (n) {
          var r = pn(n, !0);
          return r.buffer || (r = new Uint8Array(r)), On(r.buffer), r;
        }),
        process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"),
        process.argv.slice(2),
        process.on("uncaughtException", function (n) {
          if (!(n instanceof gt)) throw n;
        }),
        process.on("unhandledRejection", L),
        (e.inspect = function () {
          return "[Emscripten Module object]";
        }))
      : Gn
      ? (typeof read < "u" &&
          (pn = function (n) {
            return read(n);
          }),
        (K = function (n) {
          var r;
          return typeof readbuffer == "function"
            ? new Uint8Array(readbuffer(n))
            : (On(typeof (r = read(n, "binary")) == "object"), r);
        }),
        typeof scriptArgs < "u" && scriptArgs,
        typeof print < "u" &&
          (typeof console > "u" && (console = {}),
          (console.log = print),
          (console.warn = console.error =
            typeof printErr < "u" ? printErr : print)))
      : (fn || V) &&
        (V
          ? (_ = self.location.href)
          : document.currentScript && (_ = document.currentScript.src),
        cn && (_ = cn),
        (_ =
          _.indexOf("blob:") !== 0 ? _.substr(0, _.lastIndexOf("/") + 1) : ""),
        (pn = function (n) {
          var r = new XMLHttpRequest();
          return r.open("GET", n, !1), r.send(null), r.responseText;
        }),
        V &&
          (K = function (n) {
            var r = new XMLHttpRequest();
            return (
              r.open("GET", n, !1),
              (r.responseType = "arraybuffer"),
              r.send(null),
              new Uint8Array(r.response)
            );
          }));
    var Q,
      nn,
      Or = e.print || void 0,
      N = e.printErr || void 0;
    for (w in F) F.hasOwnProperty(w) && (e[w] = F[w]);
    (F = null),
      e.arguments && e.arguments,
      e.thisProgram && e.thisProgram,
      e.quit && e.quit,
      e.wasmBinary && (Q = e.wasmBinary),
      e.noExitRuntime && e.noExitRuntime,
      typeof WebAssembly != "object" && L("no native wasm support detected");
    var jr = new WebAssembly.Table({
        initial: 157,
        maximum: 157,
        element: "anyfunc",
      }),
      Ln = !1;
    function On(n, r) {
      n || L("Assertion failed: " + r);
    }
    var Xn = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function Jn(n, r, t) {
      for (var i = r + t, o = r; n[o] && !(o >= i); ) ++o;
      if (o - r > 16 && n.subarray && Xn) return Xn.decode(n.subarray(r, o));
      for (var a = ""; r < o; ) {
        var s = n[r++];
        if (128 & s) {
          var u = 63 & n[r++];
          if ((224 & s) != 192) {
            var l = 63 & n[r++];
            if (
              (s =
                (240 & s) == 224
                  ? ((15 & s) << 12) | (u << 6) | l
                  : ((7 & s) << 18) | (u << 12) | (l << 6) | (63 & n[r++])) <
              65536
            )
              a += String.fromCharCode(s);
            else {
              var c = s - 65536;
              a += String.fromCharCode(55296 | (c >> 10), 56320 | (1023 & c));
            }
          } else a += String.fromCharCode(((31 & s) << 6) | u);
        } else a += String.fromCharCode(s);
      }
      return a;
    }
    function Yn(n, r) {
      return n ? Jn(C, n, r) : "";
    }
    var Zn = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0;
    function kr(n, r) {
      for (var t = n, i = t >> 1, o = i + r / 2; !(i >= o) && rn[i]; ) ++i;
      if ((t = i << 1) - n > 32 && Zn) return Zn.decode(C.subarray(n, t));
      for (var a = 0, s = ""; ; ) {
        var u = H[(n + 2 * a) >> 1];
        if (u == 0 || a == r / 2) return s;
        ++a, (s += String.fromCharCode(u));
      }
    }
    function Fr(n, r, t) {
      if ((t === void 0 && (t = 2147483647), t < 2)) return 0;
      for (
        var i = r, o = (t -= 2) < 2 * n.length ? t / 2 : n.length, a = 0;
        a < o;
        ++a
      ) {
        var s = n.charCodeAt(a);
        (H[r >> 1] = s), (r += 2);
      }
      return (H[r >> 1] = 0), r - i;
    }
    function Rr(n) {
      return 2 * n.length;
    }
    function xr(n, r) {
      for (var t = 0, i = ""; !(t >= r / 4); ) {
        var o = $[(n + 4 * t) >> 2];
        if (o == 0) break;
        if ((++t, o >= 65536)) {
          var a = o - 65536;
          i += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a));
        } else i += String.fromCharCode(o);
      }
      return i;
    }
    function Dr(n, r, t) {
      if ((t === void 0 && (t = 2147483647), t < 4)) return 0;
      for (var i = r, o = i + t - 4, a = 0; a < n.length; ++a) {
        var s = n.charCodeAt(a);
        if (
          (s >= 55296 &&
            s <= 57343 &&
            (s = (65536 + ((1023 & s) << 10)) | (1023 & n.charCodeAt(++a))),
          ($[r >> 2] = s),
          (r += 4) + 4 > o)
        )
          break;
      }
      return ($[r >> 2] = 0), r - i;
    }
    function Ir(n) {
      for (var r = 0, t = 0; t < n.length; ++t) {
        var i = n.charCodeAt(t);
        i >= 55296 && i <= 57343 && ++t, (r += 4);
      }
      return r;
    }
    var G, dn, C, H, rn, $, O, Kn, Qn;
    function Ur(n, r) {
      return n % r > 0 && (n += r - (n % r)), n;
    }
    function nr(n) {
      (G = n),
        (e.HEAP8 = dn = new Int8Array(n)),
        (e.HEAP16 = H = new Int16Array(n)),
        (e.HEAP32 = $ = new Int32Array(n)),
        (e.HEAPU8 = C = new Uint8Array(n)),
        (e.HEAPU16 = rn = new Uint16Array(n)),
        (e.HEAPU32 = O = new Uint32Array(n)),
        (e.HEAPF32 = Kn = new Float32Array(n)),
        (e.HEAPF64 = Qn = new Float64Array(n));
    }
    var rr = e.INITIAL_MEMORY || 16777216;
    function yn(n) {
      for (; n.length > 0; ) {
        var r = n.shift();
        if (typeof r != "function") {
          var t = r.func;
          typeof t == "number"
            ? r.arg === void 0
              ? e.dynCall_v(t)
              : e.dynCall_vi(t, r.arg)
            : t(r.arg === void 0 ? null : r.arg);
        } else r(e);
      }
    }
    (nn = e.wasmMemory
      ? e.wasmMemory
      : new WebAssembly.Memory({ initial: rr / 65536, maximum: 32768 })) &&
      (G = nn.buffer),
      (rr = G.byteLength),
      nr(G),
      ($[80624] = 5565536);
    var tr = [],
      er = [],
      Mr = [],
      ir = [],
      Vr = Math.ceil,
      Hr = Math.floor,
      z = 0,
      tn = null;
    function L(n) {
      e.onAbort && e.onAbort(n),
        N((n += "")),
        (Ln = !0),
        (n = "abort(" + n + "). Build with -s ASSERTIONS=1 for more info.");
      var r = new WebAssembly.RuntimeError(n);
      throw (B(r), r);
    }
    function or(n, r) {
      return String.prototype.startsWith ? n.startsWith(r) : n.indexOf(r) === 0;
    }
    (e.preloadedImages = {}), (e.preloadedAudios = {});
    var zr = "data:application/octet-stream;base64,";
    function ar(n) {
      return or(n, zr);
    }
    var qr = "file://";
    function ur(n) {
      return or(n, qr);
    }
    var jn,
      j = "basis_transcoder.wasm";
    function sr() {
      try {
        if (Q) return new Uint8Array(Q);
        if (K) return K(j);
        throw "both async and sync fetching of the wasm failed";
      } catch (n) {
        L(n);
      }
    }
    ar(j) || ((jn = j), (j = e.locateFile ? e.locateFile(jn, _) : _ + jn)),
      er.push({
        func: function () {
          Tr();
        },
      });
    var mn = {};
    function vn(n) {
      for (; n.length; ) {
        var r = n.pop();
        n.pop()(r);
      }
    }
    function en(n) {
      return this.fromWireType(O[n >> 2]);
    }
    var X = {},
      q = {},
      hn = {},
      Br = 48,
      Nr = 57;
    function lr(n) {
      if (n === void 0) return "_unknown";
      var r = (n = n.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
      return r >= Br && r <= Nr ? "_" + n : n;
    }
    function kn(n, r) {
      return (
        (n = lr(n)),
        function () {
          return r.apply(this, arguments);
        }
      );
    }
    function Fn(n, r) {
      var t = kn(r, function (i) {
        (this.name = r), (this.message = i);
        var o = new Error(i).stack;
        o !== void 0 &&
          (this.stack =
            this.toString() +
            `
` +
            o.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return (
        (t.prototype = Object.create(n.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.toString = function () {
          return this.message === void 0
            ? this.name
            : this.name + ": " + this.message;
        }),
        t
      );
    }
    var cr = void 0;
    function gn(n) {
      throw new cr(n);
    }
    function U(n, r, t) {
      function i(u) {
        var l = t(u);
        l.length !== n.length && gn("Mismatched type converter count");
        for (var c = 0; c < n.length; ++c) k(n[c], l[c]);
      }
      n.forEach(function (u) {
        hn[u] = r;
      });
      var o = new Array(r.length),
        a = [],
        s = 0;
      r.forEach(function (u, l) {
        q.hasOwnProperty(u)
          ? (o[l] = q[u])
          : (a.push(u),
            X.hasOwnProperty(u) || (X[u] = []),
            X[u].push(function () {
              (o[l] = q[u]), ++s === a.length && i(o);
            }));
      }),
        a.length === 0 && i(o);
    }
    function bn(n) {
      switch (n) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + n);
      }
    }
    var fr = void 0;
    function g(n) {
      for (var r = "", t = n; C[t]; ) r += fr[C[t++]];
      return r;
    }
    var J = void 0;
    function m(n) {
      throw new J(n);
    }
    function k(n, r, t) {
      if (((t = t || {}), !("argPackAdvance" in r)))
        throw new TypeError(
          "registerType registeredInstance requires argPackAdvance"
        );
      var i = r.name;
      if (
        (n || m('type "' + i + '" must have a positive integer typeid pointer'),
        q.hasOwnProperty(n))
      ) {
        if (t.ignoreDuplicateRegistrations) return;
        m("Cannot register type '" + i + "' twice");
      }
      if (((q[n] = r), delete hn[n], X.hasOwnProperty(n))) {
        var o = X[n];
        delete X[n],
          o.forEach(function (a) {
            a();
          });
      }
    }
    function Gr(n) {
      if (!(this instanceof M) || !(n instanceof M)) return !1;
      for (
        var r = this.$$.ptrType.registeredClass,
          t = this.$$.ptr,
          i = n.$$.ptrType.registeredClass,
          o = n.$$.ptr;
        r.baseClass;

      )
        (t = r.upcast(t)), (r = r.baseClass);
      for (; i.baseClass; ) (o = i.upcast(o)), (i = i.baseClass);
      return r === i && t === o;
    }
    function Lr(n) {
      return {
        count: n.count,
        deleteScheduled: n.deleteScheduled,
        preservePointerOnDelete: n.preservePointerOnDelete,
        ptr: n.ptr,
        ptrType: n.ptrType,
        smartPtr: n.smartPtr,
        smartPtrType: n.smartPtrType,
      };
    }
    function Rn(n) {
      m(
        (function (r) {
          return r.$$.ptrType.registeredClass.name;
        })(n) + " instance already deleted"
      );
    }
    var xn = !1;
    function pr(n) {}
    function dr(n) {
      (n.count.value -= 1),
        n.count.value === 0 &&
          (function (r) {
            r.smartPtr
              ? r.smartPtrType.rawDestructor(r.smartPtr)
              : r.ptrType.registeredClass.rawDestructor(r.ptr);
          })(n);
    }
    function on(n) {
      return typeof FinalizationGroup > "u"
        ? ((on = function (r) {
            return r;
          }),
          n)
        : ((xn = new FinalizationGroup(function (r) {
            for (var t = r.next(); !t.done; t = r.next()) {
              var i = t.value;
              i.ptr && dr(i);
            }
          })),
          (on = function (r) {
            return xn.register(r, r.$$, r.$$), r;
          }),
          (pr = function (r) {
            xn.unregister(r.$$);
          }),
          on(n));
    }
    function Xr() {
      if ((this.$$.ptr || Rn(this), this.$$.preservePointerOnDelete))
        return (this.$$.count.value += 1), this;
      var n = on(
        Object.create(Object.getPrototypeOf(this), {
          $$: { value: Lr(this.$$) },
        })
      );
      return (n.$$.count.value += 1), (n.$$.deleteScheduled = !1), n;
    }
    function Jr() {
      this.$$.ptr || Rn(this),
        this.$$.deleteScheduled &&
          !this.$$.preservePointerOnDelete &&
          m("Object already scheduled for deletion"),
        pr(this),
        dr(this.$$),
        this.$$.preservePointerOnDelete ||
          ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0));
    }
    function Yr() {
      return !this.$$.ptr;
    }
    var an = void 0,
      un = [];
    function Dn() {
      for (; un.length; ) {
        var n = un.pop();
        (n.$$.deleteScheduled = !1), n.delete();
      }
    }
    function Zr() {
      return (
        this.$$.ptr || Rn(this),
        this.$$.deleteScheduled &&
          !this.$$.preservePointerOnDelete &&
          m("Object already scheduled for deletion"),
        un.push(this),
        un.length === 1 && an && an(Dn),
        (this.$$.deleteScheduled = !0),
        this
      );
    }
    function M() {}
    var yr = {};
    function mr(n, r, t) {
      if (n[r].overloadTable === void 0) {
        var i = n[r];
        (n[r] = function () {
          return (
            n[r].overloadTable.hasOwnProperty(arguments.length) ||
              m(
                "Function '" +
                  t +
                  "' called with an invalid number of arguments (" +
                  arguments.length +
                  ") - expects one of (" +
                  n[r].overloadTable +
                  ")!"
              ),
            n[r].overloadTable[arguments.length].apply(this, arguments)
          );
        }),
          (n[r].overloadTable = []),
          (n[r].overloadTable[i.argCount] = i);
      }
    }
    function In(n, r, t) {
      e.hasOwnProperty(n)
        ? ((t === void 0 ||
            (e[n].overloadTable !== void 0 &&
              e[n].overloadTable[t] !== void 0)) &&
            m("Cannot register public name '" + n + "' twice"),
          mr(e, n, n),
          e.hasOwnProperty(t) &&
            m(
              "Cannot register multiple overloads of a function with the same number of arguments (" +
                t +
                ")!"
            ),
          (e[n].overloadTable[t] = r))
        : ((e[n] = r), t !== void 0 && (e[n].numArguments = t));
    }
    function Kr(n, r, t, i, o, a, s, u) {
      (this.name = n),
        (this.constructor = r),
        (this.instancePrototype = t),
        (this.rawDestructor = i),
        (this.baseClass = o),
        (this.getActualType = a),
        (this.upcast = s),
        (this.downcast = u),
        (this.pureVirtualFunctions = []);
    }
    function Un(n, r, t) {
      for (; r !== t; )
        r.upcast ||
          m(
            "Expected null or instance of " +
              t.name +
              ", got an instance of " +
              r.name
          ),
          (n = r.upcast(n)),
          (r = r.baseClass);
      return n;
    }
    function Qr(n, r) {
      if (r === null)
        return this.isReference && m("null is not a valid " + this.name), 0;
      r.$$ || m('Cannot pass "' + Y(r) + '" as a ' + this.name),
        r.$$.ptr ||
          m("Cannot pass deleted object as a pointer of type " + this.name);
      var t = r.$$.ptrType.registeredClass;
      return Un(r.$$.ptr, t, this.registeredClass);
    }
    function nt(n, r) {
      var t;
      if (r === null)
        return (
          this.isReference && m("null is not a valid " + this.name),
          this.isSmartPointer
            ? ((t = this.rawConstructor()),
              n !== null && n.push(this.rawDestructor, t),
              t)
            : 0
        );
      r.$$ || m('Cannot pass "' + Y(r) + '" as a ' + this.name),
        r.$$.ptr ||
          m("Cannot pass deleted object as a pointer of type " + this.name),
        !this.isConst &&
          r.$$.ptrType.isConst &&
          m(
            "Cannot convert argument of type " +
              (r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name) +
              " to parameter type " +
              this.name
          );
      var i = r.$$.ptrType.registeredClass;
      if (((t = Un(r.$$.ptr, i, this.registeredClass)), this.isSmartPointer))
        switch (
          (r.$$.smartPtr === void 0 &&
            m("Passing raw pointer to smart pointer is illegal"),
          this.sharingPolicy)
        ) {
          case 0:
            r.$$.smartPtrType === this
              ? (t = r.$$.smartPtr)
              : m(
                  "Cannot convert argument of type " +
                    (r.$$.smartPtrType
                      ? r.$$.smartPtrType.name
                      : r.$$.ptrType.name) +
                    " to parameter type " +
                    this.name
                );
            break;
          case 1:
            t = r.$$.smartPtr;
            break;
          case 2:
            if (r.$$.smartPtrType === this) t = r.$$.smartPtr;
            else {
              var o = r.clone();
              (t = this.rawShare(
                t,
                x(function () {
                  o.delete();
                })
              )),
                n !== null && n.push(this.rawDestructor, t);
            }
            break;
          default:
            m("Unsupporting sharing policy");
        }
      return t;
    }
    function rt(n, r) {
      if (r === null)
        return this.isReference && m("null is not a valid " + this.name), 0;
      r.$$ || m('Cannot pass "' + Y(r) + '" as a ' + this.name),
        r.$$.ptr ||
          m("Cannot pass deleted object as a pointer of type " + this.name),
        r.$$.ptrType.isConst &&
          m(
            "Cannot convert argument of type " +
              r.$$.ptrType.name +
              " to parameter type " +
              this.name
          );
      var t = r.$$.ptrType.registeredClass;
      return Un(r.$$.ptr, t, this.registeredClass);
    }
    function tt(n) {
      return this.rawGetPointee && (n = this.rawGetPointee(n)), n;
    }
    function et(n) {
      this.rawDestructor && this.rawDestructor(n);
    }
    function it(n) {
      n !== null && n.delete();
    }
    function vr(n, r, t) {
      if (r === t) return n;
      if (t.baseClass === void 0) return null;
      var i = vr(n, r, t.baseClass);
      return i === null ? null : t.downcast(i);
    }
    function ot() {
      return Object.keys(sn).length;
    }
    function at() {
      var n = [];
      for (var r in sn) sn.hasOwnProperty(r) && n.push(sn[r]);
      return n;
    }
    function ut(n) {
      (an = n), un.length && an && an(Dn);
    }
    var sn = {};
    function st(n, r) {
      return (
        (r = (function (t, i) {
          for (i === void 0 && m("ptr should not be undefined"); t.baseClass; )
            (i = t.upcast(i)), (t = t.baseClass);
          return i;
        })(n, r)),
        sn[r]
      );
    }
    function $n(n, r) {
      return (
        (r.ptrType && r.ptr) || gn("makeClassHandle requires ptr and ptrType"),
        !!r.smartPtrType != !!r.smartPtr &&
          gn("Both smartPtrType and smartPtr must be specified"),
        (r.count = { value: 1 }),
        on(Object.create(n, { $$: { value: r } }))
      );
    }
    function lt(n) {
      var r = this.getPointee(n);
      if (!r) return this.destructor(n), null;
      var t = st(this.registeredClass, r);
      if (t !== void 0) {
        if (t.$$.count.value === 0)
          return (t.$$.ptr = r), (t.$$.smartPtr = n), t.clone();
        var i = t.clone();
        return this.destructor(n), i;
      }
      function o() {
        return this.isSmartPointer
          ? $n(this.registeredClass.instancePrototype, {
              ptrType: this.pointeeType,
              ptr: r,
              smartPtrType: this,
              smartPtr: n,
            })
          : $n(this.registeredClass.instancePrototype, {
              ptrType: this,
              ptr: n,
            });
      }
      var a,
        s = this.registeredClass.getActualType(r),
        u = yr[s];
      if (!u) return o.call(this);
      a = this.isConst ? u.constPointerType : u.pointerType;
      var l = vr(r, this.registeredClass, a.registeredClass);
      return l === null
        ? o.call(this)
        : this.isSmartPointer
        ? $n(a.registeredClass.instancePrototype, {
            ptrType: a,
            ptr: l,
            smartPtrType: this,
            smartPtr: n,
          })
        : $n(a.registeredClass.instancePrototype, { ptrType: a, ptr: l });
    }
    function R(n, r, t, i, o, a, s, u, l, c, f) {
      (this.name = n),
        (this.registeredClass = r),
        (this.isReference = t),
        (this.isConst = i),
        (this.isSmartPointer = o),
        (this.pointeeType = a),
        (this.sharingPolicy = s),
        (this.rawGetPointee = u),
        (this.rawConstructor = l),
        (this.rawShare = c),
        (this.rawDestructor = f),
        o || r.baseClass !== void 0
          ? (this.toWireType = nt)
          : i
          ? ((this.toWireType = Qr), (this.destructorFunction = null))
          : ((this.toWireType = rt), (this.destructorFunction = null));
    }
    function hr(n, r, t) {
      e.hasOwnProperty(n) || gn("Replacing nonexistant public symbol"),
        e[n].overloadTable !== void 0 && t !== void 0
          ? (e[n].overloadTable[t] = r)
          : ((e[n] = r), (e[n].argCount = t));
    }
    function P(n, r) {
      n = g(n);
      var t = (function (i) {
        var o = [r];
        return function () {
          o.length = arguments.length + 1;
          for (var a = 0; a < arguments.length; a++) o[a + 1] = arguments[a];
          return i.apply(null, o);
        };
      })(e["dynCall_" + n]);
      return (
        typeof t != "function" &&
          m("unknown function pointer with signature " + n + ": " + r),
        t
      );
    }
    var gr = void 0;
    function br(n) {
      var r = _r(n),
        t = g(r);
      return D(r), t;
    }
    function Cn(n, r) {
      var t = [],
        i = {};
      throw (
        (r.forEach(function o(a) {
          i[a] || q[a] || (hn[a] ? hn[a].forEach(o) : (t.push(a), (i[a] = !0)));
        }),
        new gr(n + ": " + t.map(br).join([", "])))
      );
    }
    function Mn(n, r) {
      for (var t = [], i = 0; i < n; i++) t.push($[(r >> 2) + i]);
      return t;
    }
    function $r(n, r, t, i, o) {
      var a = r.length;
      a < 2 &&
        m(
          "argTypes array size mismatch! Must at least get return value and 'this' types!"
        );
      for (
        var s = r[1] !== null && t !== null, u = !1, l = 1;
        l < r.length;
        ++l
      )
        if (r[l] !== null && r[l].destructorFunction === void 0) {
          u = !0;
          break;
        }
      var c = r[0].name !== "void",
        f = a - 2,
        v = new Array(f),
        d = [],
        y = [];
      return function () {
        var h;
        arguments.length !== f &&
          m(
            "function " +
              n +
              " called with " +
              arguments.length +
              " arguments, expected " +
              f +
              " args!"
          ),
          (y.length = 0),
          (d.length = s ? 2 : 1),
          (d[0] = o),
          s && ((h = r[1].toWireType(y, this)), (d[1] = h));
        for (var p = 0; p < f; ++p)
          (v[p] = r[p + 2].toWireType(y, arguments[p])), d.push(v[p]);
        var A = i.apply(null, d);
        if (u) vn(y);
        else
          for (p = s ? 1 : 2; p < r.length; p++) {
            var I = p === 1 ? h : v[p - 2];
            r[p].destructorFunction !== null && r[p].destructorFunction(I);
          }
        if (c) return r[0].fromWireType(A);
      };
    }
    var Vn = [],
      T = [
        {},
        { value: void 0 },
        { value: null },
        { value: !0 },
        { value: !1 },
      ];
    function Hn(n) {
      n > 4 && --T[n].refcount == 0 && ((T[n] = void 0), Vn.push(n));
    }
    function ct() {
      for (var n = 0, r = 5; r < T.length; ++r) T[r] !== void 0 && ++n;
      return n;
    }
    function ft() {
      for (var n = 5; n < T.length; ++n) if (T[n] !== void 0) return T[n];
      return null;
    }
    function x(n) {
      switch (n) {
        case void 0:
          return 1;
        case null:
          return 2;
        case !0:
          return 3;
        case !1:
          return 4;
        default:
          var r = Vn.length ? Vn.pop() : T.length;
          return (T[r] = { refcount: 1, value: n }), r;
      }
    }
    function pt(n, r, t) {
      switch (r) {
        case 0:
          return function (i) {
            var o = t ? dn : C;
            return this.fromWireType(o[i]);
          };
        case 1:
          return function (i) {
            var o = t ? H : rn;
            return this.fromWireType(o[i >> 1]);
          };
        case 2:
          return function (i) {
            var o = t ? $ : O;
            return this.fromWireType(o[i >> 2]);
          };
        default:
          throw new TypeError("Unknown integer type: " + n);
      }
    }
    function wn(n, r) {
      var t = q[n];
      return t === void 0 && m(r + " has unknown type " + br(n)), t;
    }
    function Y(n) {
      if (n === null) return "null";
      var r = typeof n;
      return r === "object" || r === "array" || r === "function"
        ? n.toString()
        : "" + n;
    }
    function dt(n, r) {
      switch (r) {
        case 2:
          return function (t) {
            return this.fromWireType(Kn[t >> 2]);
          };
        case 3:
          return function (t) {
            return this.fromWireType(Qn[t >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + n);
      }
    }
    function yt(n, r, t) {
      switch (r) {
        case 0:
          return t
            ? function (i) {
                return dn[i];
              }
            : function (i) {
                return C[i];
              };
        case 1:
          return t
            ? function (i) {
                return H[i >> 1];
              }
            : function (i) {
                return rn[i >> 1];
              };
        case 2:
          return t
            ? function (i) {
                return $[i >> 2];
              }
            : function (i) {
                return O[i >> 2];
              };
        default:
          throw new TypeError("Unknown integer type: " + n);
      }
    }
    function ln(n) {
      return n || m("Cannot use deleted val. handle = " + n), T[n].value;
    }
    var mt = {};
    function Tn(n) {
      var r = mt[n];
      return r === void 0 ? g(n) : r;
    }
    var zn = [];
    function Cr() {
      if (typeof globalThis == "object") return globalThis;
      function n(r) {
        r.$$$embind_global$$$ = r;
        var t =
          typeof $$$embind_global$$$ == "object" && r.$$$embind_global$$$ === r;
        return t || delete r.$$$embind_global$$$, t;
      }
      if (
        typeof $$$embind_global$$$ == "object" ||
        (typeof Nn == "object" && n(Nn)
          ? ($$$embind_global$$$ = Nn)
          : typeof self == "object" && n(self) && ($$$embind_global$$$ = self),
        typeof $$$embind_global$$$ == "object")
      )
        return $$$embind_global$$$;
      throw Error("unable to get global object.");
    }
    var wr = {};
    function vt(n) {
      try {
        return nn.grow((n - G.byteLength + 65535) >>> 16), nr(nn.buffer), 1;
      } catch {}
    }
    var _n = {
      mappings: {},
      buffers: [null, [], []],
      printChar: function (n, r) {
        var t = _n.buffers[n];
        r === 0 || r === 10
          ? ((n === 1 ? Or : N)(Jn(t, 0)), (t.length = 0))
          : t.push(r);
      },
      varargs: void 0,
      get: function () {
        return (_n.varargs += 4), $[(_n.varargs - 4) >> 2];
      },
      getStr: function (n) {
        return Yn(n);
      },
      get64: function (n, r) {
        return n;
      },
    };
    (cr = e.InternalError = Fn(Error, "InternalError")),
      (function () {
        for (var n = new Array(256), r = 0; r < 256; ++r)
          n[r] = String.fromCharCode(r);
        fr = n;
      })(),
      (J = e.BindingError = Fn(Error, "BindingError")),
      (M.prototype.isAliasOf = Gr),
      (M.prototype.clone = Xr),
      (M.prototype.delete = Jr),
      (M.prototype.isDeleted = Yr),
      (M.prototype.deleteLater = Zr),
      (R.prototype.getPointee = tt),
      (R.prototype.destructor = et),
      (R.prototype.argPackAdvance = 8),
      (R.prototype.readValueFromPointer = en),
      (R.prototype.deleteObject = it),
      (R.prototype.fromWireType = lt),
      (e.getInheritedInstanceCount = ot),
      (e.getLiveInheritedInstances = at),
      (e.flushPendingDeletes = Dn),
      (e.setDelayFunction = ut),
      (gr = e.UnboundTypeError = Fn(Error, "UnboundTypeError")),
      (e.count_emval_handles = ct),
      (e.get_first_emval = ft);
    var ht = {
      u: function (n) {
        var r = mn[n];
        delete mn[n];
        var t = r.rawConstructor,
          i = r.rawDestructor,
          o = r.fields;
        U(
          [n],
          o
            .map(function (a) {
              return a.getterReturnType;
            })
            .concat(
              o.map(function (a) {
                return a.setterArgumentType;
              })
            ),
          function (a) {
            var s = {};
            return (
              o.forEach(function (u, l) {
                var c = u.fieldName,
                  f = a[l],
                  v = u.getter,
                  d = u.getterContext,
                  y = a[l + o.length],
                  h = u.setter,
                  p = u.setterContext;
                s[c] = {
                  read: function (A) {
                    return f.fromWireType(v(d, A));
                  },
                  write: function (A, I) {
                    var W = [];
                    h(p, A, y.toWireType(W, I)), vn(W);
                  },
                };
              }),
              [
                {
                  name: r.name,
                  fromWireType: function (u) {
                    var l = {};
                    for (var c in s) l[c] = s[c].read(u);
                    return i(u), l;
                  },
                  toWireType: function (u, l) {
                    for (var c in s)
                      if (!(c in l))
                        throw new TypeError('Missing field:  "' + c + '"');
                    var f = t();
                    for (c in s) s[c].write(f, l[c]);
                    return u !== null && u.push(i, f), f;
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: en,
                  destructorFunction: i,
                },
              ]
            );
          }
        );
      },
      J: function (n, r, t, i, o) {
        var a = bn(t);
        k(n, {
          name: (r = g(r)),
          fromWireType: function (s) {
            return !!s;
          },
          toWireType: function (s, u) {
            return u ? i : o;
          },
          argPackAdvance: 8,
          readValueFromPointer: function (s) {
            var u;
            if (t === 1) u = dn;
            else if (t === 2) u = H;
            else {
              if (t !== 4)
                throw new TypeError("Unknown boolean type size: " + r);
              u = $;
            }
            return this.fromWireType(u[s >> a]);
          },
          destructorFunction: null,
        });
      },
      y: function (n, r, t, i, o, a, s, u, l, c, f, v, d) {
        (f = g(f)),
          (a = P(o, a)),
          u && (u = P(s, u)),
          c && (c = P(l, c)),
          (d = P(v, d));
        var y = lr(f);
        In(y, function () {
          Cn("Cannot construct " + f + " due to unbound types", [i]);
        }),
          U([n, r, t], i ? [i] : [], function (h) {
            var p, A;
            (h = h[0]),
              (A = i ? (p = h.registeredClass).instancePrototype : M.prototype);
            var I = kn(y, function () {
                if (Object.getPrototypeOf(this) !== W)
                  throw new J("Use 'new' to construct " + f);
                if (E.constructor_body === void 0)
                  throw new J(f + " has no accessible constructor");
                var Wr = E.constructor_body[arguments.length];
                if (Wr === void 0)
                  throw new J(
                    "Tried to invoke ctor of " +
                      f +
                      " with invalid number of parameters (" +
                      arguments.length +
                      ") - expected (" +
                      Object.keys(E.constructor_body).toString() +
                      ") parameters instead!"
                  );
                return Wr.apply(this, arguments);
              }),
              W = Object.create(A, { constructor: { value: I } });
            I.prototype = W;
            var E = new Kr(f, I, W, d, p, a, u, c),
              b = new R(f, E, !0, !1, !1),
              Pr = new R(f + "*", E, !1, !1, !1),
              Ar = new R(f + " const*", E, !1, !0, !1);
            return (
              (yr[n] = { pointerType: Pr, constPointerType: Ar }),
              hr(y, I),
              [b, Pr, Ar]
            );
          });
      },
      x: function (n, r, t, i, o, a) {
        On(r > 0);
        var s = Mn(r, t);
        o = P(i, o);
        var u = [a],
          l = [];
        U([], [n], function (c) {
          var f = "constructor " + (c = c[0]).name;
          if (
            (c.registeredClass.constructor_body === void 0 &&
              (c.registeredClass.constructor_body = []),
            c.registeredClass.constructor_body[r - 1] !== void 0)
          )
            throw new J(
              "Cannot register multiple constructors with identical number of parameters (" +
                (r - 1) +
                ") for class '" +
                c.name +
                "'! Overload resolution is currently only performed using the parameter count, not actual type info!"
            );
          return (
            (c.registeredClass.constructor_body[r - 1] = function () {
              Cn("Cannot construct " + c.name + " due to unbound types", s);
            }),
            U([], s, function (v) {
              return (
                (c.registeredClass.constructor_body[r - 1] = function () {
                  arguments.length !== r - 1 &&
                    m(
                      f +
                        " called with " +
                        arguments.length +
                        " arguments, expected " +
                        (r - 1)
                    ),
                    (l.length = 0),
                    (u.length = r);
                  for (var d = 1; d < r; ++d)
                    u[d] = v[d].toWireType(l, arguments[d - 1]);
                  var y = o.apply(null, u);
                  return vn(l), v[0].fromWireType(y);
                }),
                []
              );
            }),
            []
          );
        });
      },
      d: function (n, r, t, i, o, a, s, u) {
        var l = Mn(t, i);
        (r = g(r)),
          (a = P(o, a)),
          U([], [n], function (c) {
            var f = (c = c[0]).name + "." + r;
            function v() {
              Cn("Cannot call " + f + " due to unbound types", l);
            }
            u && c.registeredClass.pureVirtualFunctions.push(r);
            var d = c.registeredClass.instancePrototype,
              y = d[r];
            return (
              y === void 0 ||
              (y.overloadTable === void 0 &&
                y.className !== c.name &&
                y.argCount === t - 2)
                ? ((v.argCount = t - 2), (v.className = c.name), (d[r] = v))
                : (mr(d, r, f), (d[r].overloadTable[t - 2] = v)),
              U([], l, function (h) {
                var p = $r(f, h, c, a, s);
                return (
                  d[r].overloadTable === void 0
                    ? ((p.argCount = t - 2), (d[r] = p))
                    : (d[r].overloadTable[t - 2] = p),
                  []
                );
              }),
              []
            );
          });
      },
      k: function (n, r, t) {
        (n = g(n)),
          U([], [r], function (i) {
            return (i = i[0]), (e[n] = i.fromWireType(t)), [];
          });
      },
      I: function (n, r) {
        k(n, {
          name: (r = g(r)),
          fromWireType: function (t) {
            var i = T[t].value;
            return Hn(t), i;
          },
          toWireType: function (t, i) {
            return x(i);
          },
          argPackAdvance: 8,
          readValueFromPointer: en,
          destructorFunction: null,
        });
      },
      n: function (n, r, t, i) {
        var o = bn(t);
        function a() {}
        (r = g(r)),
          (a.values = {}),
          k(n, {
            name: r,
            constructor: a,
            fromWireType: function (s) {
              return this.constructor.values[s];
            },
            toWireType: function (s, u) {
              return u.value;
            },
            argPackAdvance: 8,
            readValueFromPointer: pt(r, o, i),
            destructorFunction: null,
          }),
          In(r, a);
      },
      a: function (n, r, t) {
        var i = wn(n, "enum");
        r = g(r);
        var o = i.constructor,
          a = Object.create(i.constructor.prototype, {
            value: { value: t },
            constructor: { value: kn(i.name + "_" + r, function () {}) },
          });
        (o.values[t] = a), (o[r] = a);
      },
      B: function (n, r, t) {
        var i = bn(t);
        k(n, {
          name: (r = g(r)),
          fromWireType: function (o) {
            return o;
          },
          toWireType: function (o, a) {
            if (typeof a != "number" && typeof a != "boolean")
              throw new TypeError(
                'Cannot convert "' + Y(a) + '" to ' + this.name
              );
            return a;
          },
          argPackAdvance: 8,
          readValueFromPointer: dt(r, i),
          destructorFunction: null,
        });
      },
      i: function (n, r, t, i, o, a) {
        var s = Mn(r, t);
        (n = g(n)),
          (o = P(i, o)),
          In(
            n,
            function () {
              Cn("Cannot call " + n + " due to unbound types", s);
            },
            r - 1
          ),
          U([], s, function (u) {
            var l = [u[0], null].concat(u.slice(1));
            return hr(n, $r(n, l, null, o, a), r - 1), [];
          });
      },
      j: function (n, r, t, i, o) {
        (r = g(r)), o === -1 && (o = 4294967295);
        var a = bn(t),
          s = function (c) {
            return c;
          };
        if (i === 0) {
          var u = 32 - 8 * t;
          s = function (c) {
            return (c << u) >>> u;
          };
        }
        var l = r.indexOf("unsigned") != -1;
        k(n, {
          name: r,
          fromWireType: s,
          toWireType: function (c, f) {
            if (typeof f != "number" && typeof f != "boolean")
              throw new TypeError(
                'Cannot convert "' + Y(f) + '" to ' + this.name
              );
            if (f < i || f > o)
              throw new TypeError(
                'Passing a number "' +
                  Y(f) +
                  '" from JS side to C/C++ side to an argument of type "' +
                  r +
                  '", which is outside the valid range [' +
                  i +
                  ", " +
                  o +
                  "]!"
              );
            return l ? f >>> 0 : 0 | f;
          },
          argPackAdvance: 8,
          readValueFromPointer: yt(r, a, i !== 0),
          destructorFunction: null,
        });
      },
      h: function (n, r, t) {
        var i = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
        ][r];
        function o(a) {
          var s = O,
            u = s[(a >>= 2)],
            l = s[a + 1];
          return new i(G, l, u);
        }
        k(
          n,
          {
            name: (t = g(t)),
            fromWireType: o,
            argPackAdvance: 8,
            readValueFromPointer: o,
          },
          { ignoreDuplicateRegistrations: !0 }
        );
      },
      C: function (n, r) {
        var t = (r = g(r)) === "std::string";
        k(n, {
          name: r,
          fromWireType: function (i) {
            var o,
              a = O[i >> 2];
            if (t)
              for (var s = i + 4, u = 0; u <= a; ++u) {
                var l = i + 4 + u;
                if (u == a || C[l] == 0) {
                  var c = Yn(s, l - s);
                  o === void 0
                    ? (o = c)
                    : ((o += String.fromCharCode(0)), (o += c)),
                    (s = l + 1);
                }
              }
            else {
              var f = new Array(a);
              for (u = 0; u < a; ++u) f[u] = String.fromCharCode(C[i + 4 + u]);
              o = f.join("");
            }
            return D(i), o;
          },
          toWireType: function (i, o) {
            o instanceof ArrayBuffer && (o = new Uint8Array(o));
            var a = typeof o == "string";
            a ||
              o instanceof Uint8Array ||
              o instanceof Uint8ClampedArray ||
              o instanceof Int8Array ||
              m("Cannot pass non-string to std::string");
            var s = (
                t && a
                  ? function () {
                      return (function (f) {
                        for (var v = 0, d = 0; d < f.length; ++d) {
                          var y = f.charCodeAt(d);
                          y >= 55296 &&
                            y <= 57343 &&
                            (y =
                              (65536 + ((1023 & y) << 10)) |
                              (1023 & f.charCodeAt(++d))),
                            y <= 127
                              ? ++v
                              : (v += y <= 2047 ? 2 : y <= 65535 ? 3 : 4);
                        }
                        return v;
                      })(o);
                    }
                  : function () {
                      return o.length;
                    }
              )(),
              u = qn(4 + s + 1);
            if (((O[u >> 2] = s), t && a))
              (function (f, v, d) {
                (function (y, h, p, A) {
                  if (!(A > 0)) return 0;
                  for (var I = p, W = p + A - 1, E = 0; E < y.length; ++E) {
                    var b = y.charCodeAt(E);
                    if (
                      (b >= 55296 &&
                        b <= 57343 &&
                        (b =
                          (65536 + ((1023 & b) << 10)) |
                          (1023 & y.charCodeAt(++E))),
                      b <= 127)
                    ) {
                      if (p >= W) break;
                      h[p++] = b;
                    } else if (b <= 2047) {
                      if (p + 1 >= W) break;
                      (h[p++] = 192 | (b >> 6)), (h[p++] = 128 | (63 & b));
                    } else if (b <= 65535) {
                      if (p + 2 >= W) break;
                      (h[p++] = 224 | (b >> 12)),
                        (h[p++] = 128 | ((b >> 6) & 63)),
                        (h[p++] = 128 | (63 & b));
                    } else {
                      if (p + 3 >= W) break;
                      (h[p++] = 240 | (b >> 18)),
                        (h[p++] = 128 | ((b >> 12) & 63)),
                        (h[p++] = 128 | ((b >> 6) & 63)),
                        (h[p++] = 128 | (63 & b));
                    }
                  }
                  h[p] = 0;
                })(f, C, v, d);
              })(o, u + 4, s + 1);
            else if (a)
              for (var l = 0; l < s; ++l) {
                var c = o.charCodeAt(l);
                c > 255 &&
                  (D(u),
                  m("String has UTF-16 code units that do not fit in 8 bits")),
                  (C[u + 4 + l] = c);
              }
            else for (l = 0; l < s; ++l) C[u + 4 + l] = o[l];
            return i !== null && i.push(D, u), u;
          },
          argPackAdvance: 8,
          readValueFromPointer: en,
          destructorFunction: function (i) {
            D(i);
          },
        });
      },
      w: function (n, r, t) {
        var i, o, a, s, u;
        (t = g(t)),
          r === 2
            ? ((i = kr),
              (o = Fr),
              (s = Rr),
              (a = function () {
                return rn;
              }),
              (u = 1))
            : r === 4 &&
              ((i = xr),
              (o = Dr),
              (s = Ir),
              (a = function () {
                return O;
              }),
              (u = 2)),
          k(n, {
            name: t,
            fromWireType: function (l) {
              for (
                var c, f = O[l >> 2], v = a(), d = l + 4, y = 0;
                y <= f;
                ++y
              ) {
                var h = l + 4 + y * r;
                if (y == f || v[h >> u] == 0) {
                  var p = i(d, h - d);
                  c === void 0
                    ? (c = p)
                    : ((c += String.fromCharCode(0)), (c += p)),
                    (d = h + r);
                }
              }
              return D(l), c;
            },
            toWireType: function (l, c) {
              typeof c != "string" &&
                m("Cannot pass non-string to C++ string type " + t);
              var f = s(c),
                v = qn(4 + f + r);
              return (
                (O[v >> 2] = f >> u),
                o(c, v + 4, f + r),
                l !== null && l.push(D, v),
                v
              );
            },
            argPackAdvance: 8,
            readValueFromPointer: en,
            destructorFunction: function (l) {
              D(l);
            },
          });
      },
      v: function (n, r, t, i, o, a) {
        mn[n] = {
          name: g(r),
          rawConstructor: P(t, i),
          rawDestructor: P(o, a),
          fields: [],
        };
      },
      c: function (n, r, t, i, o, a, s, u, l, c) {
        mn[n].fields.push({
          fieldName: g(r),
          getterReturnType: t,
          getter: P(i, o),
          getterContext: a,
          setterArgumentType: s,
          setter: P(u, l),
          setterContext: c,
        });
      },
      K: function (n, r) {
        k(n, {
          isVoid: !0,
          name: (r = g(r)),
          argPackAdvance: 0,
          fromWireType: function () {},
          toWireType: function (t, i) {},
        });
      },
      m: function (n, r, t) {
        (n = ln(n)), (r = wn(r, "emval::as"));
        var i = [],
          o = x(i);
        return ($[t >> 2] = o), r.toWireType(i, n);
      },
      s: function (n, r, t, i) {
        (n = zn[n])((r = ln(r)), (t = Tn(t)), null, i);
      },
      b: Hn,
      z: function (n) {
        return n === 0 ? x(Cr()) : ((n = Tn(n)), x(Cr()[n]));
      },
      t: function (n, r) {
        var t = (function (a, s) {
            for (var u = new Array(a), l = 0; l < a; ++l)
              u[l] = wn($[(s >> 2) + l], "parameter " + l);
            return u;
          })(n, r),
          i = t[0],
          o = new Array(n - 1);
        return (function (a) {
          var s = zn.length;
          return zn.push(a), s;
        })(function (a, s, u, l) {
          for (var c = 0, f = 0; f < n - 1; ++f)
            (o[f] = t[f + 1].readValueFromPointer(l + c)),
              (c += t[f + 1].argPackAdvance);
          var v = a[s].apply(a, o);
          for (f = 0; f < n - 1; ++f)
            t[f + 1].deleteObject && t[f + 1].deleteObject(o[f]);
          if (!i.isVoid) return i.toWireType(u, v);
        });
      },
      r: function (n) {
        return (n = Tn(n)), x(e[n]);
      },
      e: function (n, r) {
        return x((n = ln(n))[(r = ln(r))]);
      },
      g: function (n) {
        n > 4 && (T[n].refcount += 1);
      },
      q: function (n, r, t, i) {
        n = ln(n);
        var o = wr[r];
        return (
          o ||
            ((o = (function (a) {
              var s = new Array(a + 1);
              return function (u, l, c) {
                s[0] = u;
                for (var f = 0; f < a; ++f) {
                  var v = wn($[(l >> 2) + f], "parameter " + f);
                  (s[f + 1] = v.readValueFromPointer(c)),
                    (c += v.argPackAdvance);
                }
                return x(new (u.bind.apply(u, s))());
              };
            })(r)),
            (wr[r] = o)),
          o(n, t, i)
        );
      },
      f: function (n) {
        return x(Tn(n));
      },
      l: function (n) {
        vn(T[n].value), Hn(n);
      },
      p: function () {
        L();
      },
      F: function (n, r, t) {
        C.copyWithin(n, r, r + t);
      },
      G: function (n) {
        n >>>= 0;
        var r = C.length,
          t = 2147483648;
        if (n > t) return !1;
        for (var i = 1; i <= 4; i *= 2) {
          var o = r * (1 + 0.2 / i);
          if (
            ((o = Math.min(o, n + 100663296)),
            vt(Math.min(t, Ur(Math.max(16777216, n, o), 65536))))
          )
            return !0;
        }
        return !1;
      },
      H: function (n) {
        return 0;
      },
      D: function (n, r, t, i, o) {},
      A: function (n, r, t, i) {
        for (var o = 0, a = 0; a < t; a++) {
          for (
            var s = $[(r + 8 * a) >> 2], u = $[(r + (8 * a + 4)) >> 2], l = 0;
            l < u;
            l++
          )
            _n.printChar(n, C[s + l]);
          o += u;
        }
        return ($[i >> 2] = o), 0;
      },
      memory: nn,
      o: function (n) {
        return (n = +n) >= 0 ? +Hr(n + 0.5) : +Vr(n - 0.5);
      },
      E: function (n) {},
      table: jr,
    };
    (function () {
      var n = { a: ht };
      function r(o, a) {
        var s = o.exports;
        (e.asm = s),
          (function (u) {
            if (
              (z--,
              e.monitorRunDependencies && e.monitorRunDependencies(z),
              z == 0 && tn)
            ) {
              var l = tn;
              (tn = null), l();
            }
          })();
      }
      function t(o) {
        r(o.instance);
      }
      function i(o) {
        return (
          Q || (!fn && !V) || typeof fetch != "function" || ur(j)
            ? new Promise(function (a, s) {
                a(sr());
              })
            : fetch(j, { credentials: "same-origin" })
                .then(function (a) {
                  if (!a.ok)
                    throw "failed to load wasm binary file at '" + j + "'";
                  return a.arrayBuffer();
                })
                .catch(function () {
                  return sr();
                })
        )
          .then(function (a) {
            return WebAssembly.instantiate(a, n);
          })
          .then(o, function (a) {
            N("failed to asynchronously prepare wasm: " + a), L(a);
          });
      }
      if (
        (z++,
        e.monitorRunDependencies && e.monitorRunDependencies(z),
        e.instantiateWasm)
      )
        try {
          return e.instantiateWasm(n, r);
        } catch (o) {
          return (
            N("Module.instantiateWasm callback failed with error: " + o), !1
          );
        }
      (function () {
        if (
          Q ||
          typeof WebAssembly.instantiateStreaming != "function" ||
          ar(j) ||
          ur(j) ||
          typeof fetch != "function"
        )
          return i(t);
        fetch(j, { credentials: "same-origin" }).then(function (o) {
          return WebAssembly.instantiateStreaming(o, n).then(t, function (a) {
            return (
              N("wasm streaming compile failed: " + a),
              N("falling back to ArrayBuffer instantiation"),
              i(t)
            );
          });
        });
      })();
    })();
    var Pn,
      Tr = (e.___wasm_call_ctors = function () {
        return (Tr = e.___wasm_call_ctors = e.asm.L).apply(null, arguments);
      }),
      qn = (e._malloc = function () {
        return (qn = e._malloc = e.asm.M).apply(null, arguments);
      }),
      D = (e._free = function () {
        return (D = e._free = e.asm.N).apply(null, arguments);
      }),
      _r = (e.___getTypeName = function () {
        return (_r = e.___getTypeName = e.asm.O).apply(null, arguments);
      });
    function gt(n) {
      (this.name = "ExitStatus"),
        (this.message = "Program terminated with exit(" + n + ")"),
        (this.status = n);
    }
    function Bn(n) {
      function r() {
        Pn ||
          ((Pn = !0),
          (e.calledRun = !0),
          Ln ||
            (yn(er),
            yn(Mr),
            Z(e),
            e.onRuntimeInitialized && e.onRuntimeInitialized(),
            (function () {
              if (e.postRun)
                for (
                  typeof e.postRun == "function" && (e.postRun = [e.postRun]);
                  e.postRun.length;

                )
                  (t = e.postRun.shift()), ir.unshift(t);
              var t;
              yn(ir);
            })()));
      }
      z > 0 ||
        ((function () {
          if (e.preRun)
            for (
              typeof e.preRun == "function" && (e.preRun = [e.preRun]);
              e.preRun.length;

            )
              (t = e.preRun.shift()), tr.unshift(t);
          var t;
          yn(tr);
        })(),
        z > 0 ||
          (e.setStatus
            ? (e.setStatus("Running..."),
              setTimeout(function () {
                setTimeout(function () {
                  e.setStatus("");
                }, 1),
                  r();
              }, 1))
            : r()));
    }
    if (
      ((e.___embind_register_native_and_builtin_types = function () {
        return (e.___embind_register_native_and_builtin_types = e.asm.P).apply(
          null,
          arguments
        );
      }),
      (e.dynCall_viii = function () {
        return (e.dynCall_viii = e.asm.Q).apply(null, arguments);
      }),
      (e.dynCall_vi = function () {
        return (e.dynCall_vi = e.asm.R).apply(null, arguments);
      }),
      (e.dynCall_v = function () {
        return (e.dynCall_v = e.asm.S).apply(null, arguments);
      }),
      (e.dynCall_i = function () {
        return (e.dynCall_i = e.asm.T).apply(null, arguments);
      }),
      (e.dynCall_iii = function () {
        return (e.dynCall_iii = e.asm.U).apply(null, arguments);
      }),
      (e.dynCall_ii = function () {
        return (e.dynCall_ii = e.asm.V).apply(null, arguments);
      }),
      (e.dynCall_vii = function () {
        return (e.dynCall_vii = e.asm.W).apply(null, arguments);
      }),
      (e.dynCall_iiii = function () {
        return (e.dynCall_iiii = e.asm.X).apply(null, arguments);
      }),
      (e.dynCall_iiiii = function () {
        return (e.dynCall_iiiii = e.asm.Y).apply(null, arguments);
      }),
      (e.dynCall_iiiiii = function () {
        return (e.dynCall_iiiiii = e.asm.Z).apply(null, arguments);
      }),
      (e.dynCall_iiiiiiii = function () {
        return (e.dynCall_iiiiiiii = e.asm._).apply(null, arguments);
      }),
      (e.dynCall_iiiiiiiii = function () {
        return (e.dynCall_iiiiiiiii = e.asm.$).apply(null, arguments);
      }),
      (e.dynCall_viiii = function () {
        return (e.dynCall_viiii = e.asm.aa).apply(null, arguments);
      }),
      (e.dynCall_iiiiiii = function () {
        return (e.dynCall_iiiiiii = e.asm.ba).apply(null, arguments);
      }),
      (e.dynCall_iiiiiiiiiiiiiiiiiiii = function () {
        return (e.dynCall_iiiiiiiiiiiiiiiiiiii = e.asm.ca).apply(
          null,
          arguments
        );
      }),
      (e.dynCall_iiiiiiiiiiiiiiiiiiiii = function () {
        return (e.dynCall_iiiiiiiiiiiiiiiiiiiii = e.asm.da).apply(
          null,
          arguments
        );
      }),
      (e.dynCall_iiiiiiiiiiiiiiiiiii = function () {
        return (e.dynCall_iiiiiiiiiiiiiiiiiii = e.asm.ea).apply(
          null,
          arguments
        );
      }),
      (e.dynCall_viiiii = function () {
        return (e.dynCall_viiiii = e.asm.fa).apply(null, arguments);
      }),
      (e.dynCall_iiiiiiiiii = function () {
        return (e.dynCall_iiiiiiiiii = e.asm.ga).apply(null, arguments);
      }),
      (e.dynCall_iiiiiiiiiii = function () {
        return (e.dynCall_iiiiiiiiiii = e.asm.ha).apply(null, arguments);
      }),
      (e.dynCall_jiji = function () {
        return (e.dynCall_jiji = e.asm.ia).apply(null, arguments);
      }),
      (e.dynCall_viiiiii = function () {
        return (e.dynCall_viiiiii = e.asm.ja).apply(null, arguments);
      }),
      (tn = function n() {
        Pn || Bn(), Pn || (tn = n);
      }),
      (e.run = Bn),
      e.preInit)
    )
      for (
        typeof e.preInit == "function" && (e.preInit = [e.preInit]);
        e.preInit.length > 0;

      )
        e.preInit.pop()();
    return Bn(), S.ready;
  }),
  (Er.exports = Sr);
const $t = (function (S, Z) {
  for (var B = 0; B < Z.length; B++) {
    const e = Z[B];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const w in e)
        if (w !== "default" && !(w in S)) {
          const F = Object.getOwnPropertyDescriptor(e, w);
          F &&
            Object.defineProperty(
              S,
              w,
              F.get ? F : { enumerable: !0, get: () => e[w] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(S, Symbol.toStringTag, { value: "Module" })
  );
})({ __proto__: null, default: An }, [An]);
export { $t as b };
