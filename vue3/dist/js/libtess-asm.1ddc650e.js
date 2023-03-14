var O0,
  C1,
  R1,
  l0 = {},
  Q1 = {
    get exports() {
      return l0;
    },
    set exports(I2) {
      l0 = I2;
    },
  };
(O0 = Q1),
  (C1 = function () {
    return {
      load: function (I2) {
        const n0 = I2.locateFile,
          r2 = {};
        var E = E !== void 0 ? E : {};
        const g2 = (() => {
          let m;
          return { resolve: (R) => m(R), promise: new Promise((R) => (m = R)) };
        })();
        (E.locateFile = n0),
          (E.onRuntimeInitialized = () => {
            g2.resolve(r2);
          }),
          (r2.Module = E),
          (r2.whenLoaded = () => g2.promise);
        var u2,
          K2 = {};
        for (u2 in E) E.hasOwnProperty(u2) && (K2[u2] = E[u2]);
        var v0,
          t0,
          e0,
          O2,
          D2,
          D0 = typeof window == "object",
          Y2 = typeof importScripts == "function",
          h0 =
            typeof process == "object" &&
            typeof process.versions == "object" &&
            typeof process.versions.node == "string",
          A2 = "";
        h0
          ? ((A2 = Y2 ? require("path").dirname(A2) + "/" : __dirname + "/"),
            (v0 = function (m, R) {
              var x = W2(m);
              return x
                ? R
                  ? x
                  : x.toString()
                : (O2 || (O2 = require("fs")),
                  D2 || (D2 = require("path")),
                  (m = D2.normalize(m)),
                  O2.readFileSync(m, R ? null : "utf8"));
            }),
            (e0 = function (m) {
              var R = v0(m, !0);
              return (
                R.buffer || (R = new Uint8Array(R)),
                (function (x, I) {
                  x || X2("Assertion failed: " + I);
                })(R.buffer),
                R
              );
            }),
            (t0 = function (m, R, x) {
              var I = W2(m);
              I && R(I),
                O2 || (O2 = require("fs")),
                D2 || (D2 = require("path")),
                (m = D2.normalize(m)),
                O2.readFile(m, function (P, B) {
                  P ? x(P) : R(B.buffer);
                });
            }),
            process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"),
            process.argv.slice(2),
            (O0.exports = E),
            process.on("uncaughtException", function (m) {
              if (!(m instanceof P1)) throw m;
            }),
            process.on("unhandledRejection", X2),
            (E.inspect = function () {
              return "[Emscripten Module object]";
            }))
          : (D0 || Y2) &&
            (Y2
              ? (A2 = self.location.href)
              : typeof document < "u" &&
                document.currentScript &&
                (A2 = document.currentScript.src),
            (A2 =
              A2.indexOf("blob:") !== 0
                ? A2.substr(0, A2.lastIndexOf("/") + 1)
                : ""),
            (v0 = function (m) {
              try {
                var R = new XMLHttpRequest();
                return R.open("GET", m, !1), R.send(null), R.responseText;
              } catch (I) {
                var x = W2(m);
                if (x)
                  return (function (P) {
                    for (var B = [], U = 0; U < P.length; U++) {
                      var q = P[U];
                      q > 255 && (q &= 255), B.push(String.fromCharCode(q));
                    }
                    return B.join("");
                  })(x);
                throw I;
              }
            }),
            Y2 &&
              (e0 = function (m) {
                try {
                  var R = new XMLHttpRequest();
                  return (
                    R.open("GET", m, !1),
                    (R.responseType = "arraybuffer"),
                    R.send(null),
                    new Uint8Array(R.response)
                  );
                } catch (I) {
                  var x = W2(m);
                  if (x) return x;
                  throw I;
                }
              }),
            (t0 = function (m, R, x) {
              var I = new XMLHttpRequest();
              I.open("GET", m, !0),
                (I.responseType = "arraybuffer"),
                (I.onload = function () {
                  if (I.status == 200 || (I.status == 0 && I.response))
                    R(I.response);
                  else {
                    var P = W2(m);
                    P ? R(P.buffer) : x();
                  }
                }),
                (I.onerror = x),
                I.send(null);
            }));
        var M1 = E.print || void 0,
          H2 = E.printErr || void 0;
        for (u2 in K2) K2.hasOwnProperty(u2) && (E[u2] = K2[u2]);
        (K2 = null),
          E.arguments && E.arguments,
          E.thisProgram && E.thisProgram,
          E.quit && E.quit;
        var Q2,
          H0 = 0;
        E.wasmBinary && (Q2 = E.wasmBinary), E.noExitRuntime;
        var N2,
          w2 = {
            Memory: function (m) {
              this.buffer = new ArrayBuffer(65536 * m.initial);
            },
            Module: function (m) {},
            Instance: function (m, R) {
              this.exports = (function (x) {
                for (var I, P = new Uint8Array(123), B = 25; B >= 0; --B)
                  (P[48 + B] = 52 + B), (P[65 + B] = B), (P[97 + B] = 26 + B);
                function U(W, E2, Z) {
                  for (
                    var p,
                      c2,
                      i = 0,
                      w = E2,
                      B2 = Z.length,
                      T2 =
                        E2 +
                        ((3 * B2) >> 2) -
                        (Z[B2 - 2] == "=") -
                        (Z[B2 - 1] == "=");
                    i < B2;
                    i += 4
                  )
                    (p = P[Z.charCodeAt(i + 1)]),
                      (c2 = P[Z.charCodeAt(i + 2)]),
                      (W[w++] = (P[Z.charCodeAt(i)] << 2) | (p >> 4)),
                      w < T2 && (W[w++] = (p << 4) | (c2 >> 2)),
                      w < T2 && (W[w++] = (c2 << 6) | P[Z.charCodeAt(i + 3)]);
                }
                function q(W) {
                  U(
                    I,
                    1024,
                    "LSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweABuYW4AaW5mAE5BTgBJTkYALgAobnVsbCkAR290IGVycm9yICVkCgAlZCAlZCAoJWYsJWYpLCglZiwlZiksKCVmLCVmKSAK"
                  ),
                    U(I, 1132, "BwAAAAAAAD8AAAA/AAAAAAAAAAB4Bg=="),
                    U(
                      I,
                      1168,
                      "EQAKABEREQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAARAA8KERERAwoHAAEACQsLAAAJBgsAAAsABhEAAAARERE="
                    ),
                    U(I, 1249, "CwAAAAAAAAAAEQAKChEREQAKAAACAAkLAAAACQALAAAL"),
                    U(I, 1307, "DA=="),
                    U(I, 1319, "DAAAAAAMAAAAAAkMAAAAAAAMAAAM"),
                    U(I, 1365, "Dg=="),
                    U(I, 1377, "DQAAAAQNAAAAAAkOAAAAAAAOAAAO"),
                    U(I, 1423, "EA=="),
                    U(I, 1435, "DwAAAAAPAAAAAAkQAAAAAAAQAAAQAAASAAAAEhIS"),
                    U(I, 1490, "EgAAABISEgAAAAAAAAk="),
                    U(I, 1539, "Cw=="),
                    U(I, 1551, "CgAAAAAKAAAAAAkLAAAAAAALAAAL"),
                    U(I, 1597, "DA=="),
                    U(
                      I,
                      1609,
                      "DAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVG"
                    ),
                    U(I, 1648, "4I8AAAAAAAAF"),
                    U(I, 1668, "KA=="),
                    U(I, 1692, "KQAAACoAAACYCwAAAAQ="),
                    U(I, 1716, "AQ=="),
                    U(I, 1731, "Cv////8="),
                    U(I, 1972, "wA8=");
                }
                (P[43] = 62), (P[47] = 63);
                var J = new ArrayBuffer(16),
                  e2 = new Int32Array(J),
                  u0 = new Float64Array(J);
                function l2(W) {
                  return e2[W];
                }
                function i1(W, E2) {
                  e2[W] = E2;
                }
                function B1() {
                  return u0[0];
                }
                function w0(W) {
                  u0[0] = W;
                }
                return (function (W) {
                  var E2 = W.a,
                    Z = E2.buffer;
                  E2.grow = function (a) {
                    a |= 0;
                    var t = 0 | E1(),
                      f = (t + a) | 0;
                    if (t < f && f < 65536) {
                      var n = new ArrayBuffer(Q(f, 65536));
                      new Int8Array(n).set(p),
                        (p = new Int8Array(n)),
                        (c2 = new Int16Array(n)),
                        (i = new Int32Array(n)),
                        (w = new Uint8Array(n)),
                        (B2 = new Uint16Array(n)),
                        (T2 = new Uint32Array(n)),
                        (c = new Float32Array(n)),
                        ($ = new Float64Array(n)),
                        (Z = n),
                        (E2.buffer = Z),
                        (I = w);
                    }
                    return t;
                  };
                  var p = new Int8Array(Z),
                    c2 = new Int16Array(Z),
                    i = new Int32Array(Z),
                    w = new Uint8Array(Z),
                    B2 = new Uint16Array(Z),
                    T2 = new Uint32Array(Z),
                    c = new Float32Array(Z),
                    $ = new Float64Array(Z),
                    Q = Math.imul,
                    u = Math.fround,
                    T1 = Math.abs,
                    c0 = Math.clz32,
                    C2 = Math.max,
                    o2 = W.abort,
                    Y = W.b,
                    N = W.c,
                    j2 = W.d,
                    $2 = W.e,
                    a1 = W.f,
                    f1 = W.g,
                    j1 = W.h,
                    F1 = W.i,
                    U1 = W.j,
                    O1 = W.k,
                    D1 = W.l,
                    H1 = W.m,
                    F = 36832,
                    v2 = 0;
                  function H(a) {
                    var t,
                      f = 0,
                      n = 0,
                      e = 0,
                      o = 0,
                      b = 0,
                      k = 0,
                      s = 0,
                      r = 0,
                      A = 0,
                      l = 0,
                      v = 0,
                      h = 0,
                      d = 0;
                    F = t = (F - 16) | 0;
                    i: {
                      a: {
                        f: {
                          n: {
                            t: {
                              b: {
                                e: {
                                  c: {
                                    u: {
                                      o: {
                                        A: {
                                          r: {
                                            if ((a |= 0) >>> 0 <= 244) {
                                              if (
                                                3 &
                                                (f =
                                                  ((b = i[614]) >>>
                                                    (n =
                                                      ((r =
                                                        a >>> 0 < 11
                                                          ? 16
                                                          : (a + 11) & -8) >>>
                                                        3) |
                                                      0)) |
                                                  0)
                                              ) {
                                                (a =
                                                  ((o =
                                                    i[
                                                      (2504 +
                                                        (f =
                                                          (e =
                                                            (n +
                                                              (1 & (-1 ^ f))) |
                                                            0) << 3)) >>
                                                        2
                                                    ]) +
                                                    8) |
                                                  0),
                                                  (0 | (n = i[(o + 8) >> 2])) !=
                                                  (0 | (f = (f + 2496) | 0))
                                                    ? ((i[(n + 12) >> 2] = f),
                                                      (i[(f + 8) >> 2] = n))
                                                    : ((h = 2456),
                                                      (d = f2(e) & b),
                                                      (i[h >> 2] = d)),
                                                  (f = e << 3),
                                                  (i[(o + 4) >> 2] = 3 | f),
                                                  (i[
                                                    (4 + (f = (f + o) | 0)) >> 2
                                                  ] = 1 | i[(f + 4) >> 2]);
                                                break i;
                                              }
                                              if ((l = i[616]) >>> 0 >= r >>> 0)
                                                break r;
                                              if (f) {
                                                (n = a =
                                                  ((f =
                                                    (((0 -
                                                      (a =
                                                        ((0 - (a = 2 << n)) |
                                                          a) &
                                                        (f << n))) &
                                                      a) -
                                                      1) |
                                                    0) >>>
                                                    12) &
                                                  16),
                                                  (n |= a =
                                                    ((f = (f >>> a) | 0) >>>
                                                      5) &
                                                    8),
                                                  (n |= a =
                                                    ((f = (f >>> a) | 0) >>>
                                                      2) &
                                                    4),
                                                  (k =
                                                    i[
                                                      (2504 +
                                                        (a =
                                                          (n =
                                                            (((n |= a =
                                                              ((f =
                                                                (f >>> a) |
                                                                0) >>>
                                                                1) &
                                                              2) |
                                                              (a =
                                                                ((f =
                                                                  (f >>> a) |
                                                                  0) >>>
                                                                  1) &
                                                                1)) +
                                                              ((f >>> a) | 0)) |
                                                            0) << 3)) >>
                                                        2
                                                    ]),
                                                  (0 | (f = i[(k + 8) >> 2])) !=
                                                  (0 | (a = (a + 2496) | 0))
                                                    ? ((i[(f + 12) >> 2] = a),
                                                      (i[(a + 8) >> 2] = f))
                                                    : ((b = f2(n) & b),
                                                      (i[614] = b)),
                                                  (a = (k + 8) | 0),
                                                  (i[(k + 4) >> 2] = 3 | r),
                                                  (o = ((f = n << 3) - r) | 0),
                                                  (i[
                                                    (4 + (e = (k + r) | 0)) >> 2
                                                  ] = 1 | o),
                                                  (i[(f + k) >> 2] = o),
                                                  l &&
                                                    ((n =
                                                      (2496 +
                                                        ((f = (l >>> 3) | 0) <<
                                                          3)) |
                                                      0),
                                                    (k = i[619]),
                                                    (f = 1 << f) & b
                                                      ? (f = i[(n + 8) >> 2])
                                                      : ((i[614] = f | b),
                                                        (f = n)),
                                                    (i[(n + 8) >> 2] = k),
                                                    (i[(f + 12) >> 2] = k),
                                                    (i[(k + 12) >> 2] = n),
                                                    (i[(k + 8) >> 2] = f)),
                                                  (i[619] = e),
                                                  (i[616] = o);
                                                break i;
                                              }
                                              if (!(s = i[615])) break r;
                                              for (
                                                n = a =
                                                  ((f =
                                                    ((s & (0 - s)) - 1) | 0) >>>
                                                    12) &
                                                  16,
                                                  n |= a =
                                                    ((f = (f >>> a) | 0) >>>
                                                      5) &
                                                    8,
                                                  n |= a =
                                                    ((f = (f >>> a) | 0) >>>
                                                      2) &
                                                    4,
                                                  f =
                                                    i[
                                                      (2760 +
                                                        ((((n |= a =
                                                          ((f =
                                                            (f >>> a) | 0) >>>
                                                            1) &
                                                          2) |
                                                          (a =
                                                            ((f =
                                                              (f >>> a) | 0) >>>
                                                              1) &
                                                            1)) +
                                                          ((f >>> a) | 0)) <<
                                                          2)) >>
                                                        2
                                                    ],
                                                  e =
                                                    ((-8 & i[(f + 4) >> 2]) -
                                                      r) |
                                                    0,
                                                  n = f;
                                                (a = i[(n + 16) >> 2]) ||
                                                (a = i[(n + 20) >> 2]);

                                              )
                                                (e = (o =
                                                  (n =
                                                    ((-8 & i[(a + 4) >> 2]) -
                                                      r) |
                                                    0) >>>
                                                    0 <
                                                  e >>> 0)
                                                  ? n
                                                  : e),
                                                  (f = o ? a : f),
                                                  (n = a);
                                              if (
                                                (A = (f + r) | 0) >>> 0 <=
                                                f >>> 0
                                              )
                                                break A;
                                              if (
                                                ((v = i[(f + 24) >> 2]),
                                                (0 | (o = i[(f + 12) >> 2])) !=
                                                  (0 | f))
                                              ) {
                                                (a = i[(f + 8) >> 2]),
                                                  (i[(a + 12) >> 2] = o),
                                                  (i[(o + 8) >> 2] = a);
                                                break a;
                                              }
                                              if (
                                                !(a =
                                                  i[(n = (f + 20) | 0) >> 2])
                                              ) {
                                                if (!(a = i[(f + 16) >> 2]))
                                                  break o;
                                                n = (f + 16) | 0;
                                              }
                                              for (
                                                ;
                                                (k = n),
                                                  (o = a),
                                                  (a =
                                                    i[
                                                      (n = (a + 20) | 0) >> 2
                                                    ]) ||
                                                    ((n = (o + 16) | 0),
                                                    (a = i[(o + 16) >> 2]));

                                              );
                                              i[k >> 2] = 0;
                                              break a;
                                            }
                                            if (
                                              ((r = -1),
                                              !(a >>> 0 > 4294967231) &&
                                                ((r = -8 & (a = (a + 11) | 0)),
                                                (A = i[615])))
                                            ) {
                                              (e = (0 - r) | 0),
                                                (b = 0),
                                                r >>> 0 < 256 ||
                                                  ((b = 31),
                                                  r >>> 0 > 16777215 ||
                                                    ((a = (a >>> 8) | 0),
                                                    (a <<= k =
                                                      ((a + 1048320) >>> 16) &
                                                      8),
                                                    (b =
                                                      (28 +
                                                        (((a =
                                                          (((((a <<= n =
                                                            ((a + 520192) >>>
                                                              16) &
                                                            4) <<
                                                            (f =
                                                              ((a + 245760) >>>
                                                                16) &
                                                              2)) >>>
                                                            15) |
                                                            0) -
                                                            (f | n | k)) |
                                                          0) <<
                                                          1) |
                                                          ((r >>> (a + 21)) &
                                                            1))) |
                                                      0)));
                                              k: {
                                                s: {
                                                  if (
                                                    (n =
                                                      i[(2760 + (b << 2)) >> 2])
                                                  )
                                                    for (
                                                      a = 0,
                                                        f =
                                                          r <<
                                                          ((0 | b) == 31
                                                            ? 0
                                                            : (25 -
                                                                ((b >>> 1) |
                                                                  0)) |
                                                              0);
                                                      ;

                                                    ) {
                                                      if (
                                                        !(
                                                          (k =
                                                            ((-8 &
                                                              i[(n + 4) >> 2]) -
                                                              r) |
                                                            0) >>>
                                                            0 >=
                                                            e >>> 0 ||
                                                          ((o = n), (e = k))
                                                        )
                                                      ) {
                                                        (e = 0), (a = n);
                                                        break s;
                                                      }
                                                      if (
                                                        ((k = i[(n + 20) >> 2]),
                                                        (n =
                                                          i[
                                                            (16 +
                                                              ((((f >>> 29) &
                                                                4) +
                                                                n) |
                                                                0)) >>
                                                              2
                                                          ]),
                                                        (a = k
                                                          ? (0 | k) == (0 | n)
                                                            ? a
                                                            : k
                                                          : a),
                                                        (f <<= 1),
                                                        !n)
                                                      )
                                                        break;
                                                    }
                                                  else a = 0;
                                                  if (!(a | o)) {
                                                    if (
                                                      ((o = 0),
                                                      !(a =
                                                        ((0 - (a = 2 << b)) |
                                                          a) &
                                                        A))
                                                    )
                                                      break r;
                                                    (n = a =
                                                      ((f =
                                                        ((a & (0 - a)) - 1) |
                                                        0) >>>
                                                        12) &
                                                      16),
                                                      (n |= a =
                                                        ((f = (f >>> a) | 0) >>>
                                                          5) &
                                                        8),
                                                      (n |= a =
                                                        ((f = (f >>> a) | 0) >>>
                                                          2) &
                                                        4),
                                                      (a =
                                                        i[
                                                          (2760 +
                                                            ((((n |= a =
                                                              ((f =
                                                                (f >>> a) |
                                                                0) >>>
                                                                1) &
                                                              2) |
                                                              (a =
                                                                ((f =
                                                                  (f >>> a) |
                                                                  0) >>>
                                                                  1) &
                                                                1)) +
                                                              ((f >>> a) |
                                                                0)) <<
                                                              2)) >>
                                                            2
                                                        ]);
                                                  }
                                                  if (!a) break k;
                                                }
                                                for (
                                                  ;
                                                  (e = (n =
                                                    (f =
                                                      ((-8 & i[(a + 4) >> 2]) -
                                                        r) |
                                                      0) >>>
                                                      0 <
                                                    e >>> 0)
                                                    ? f
                                                    : e),
                                                    (o = n ? a : o),
                                                    (a =
                                                      (f = i[(a + 16) >> 2]) ||
                                                      i[(a + 20) >> 2]);

                                                );
                                              }
                                              if (
                                                !(
                                                  !o |
                                                  ((i[616] - r) >>> 0 <=
                                                    e >>> 0)
                                                )
                                              ) {
                                                if (
                                                  (s = (o + r) | 0) >>> 0 <=
                                                  o >>> 0
                                                )
                                                  break A;
                                                if (
                                                  ((b = i[(o + 24) >> 2]),
                                                  (0 | o) !=
                                                    (0 |
                                                      (f = i[(o + 12) >> 2])))
                                                ) {
                                                  (a = i[(o + 8) >> 2]),
                                                    (i[(a + 12) >> 2] = f),
                                                    (i[(f + 8) >> 2] = a);
                                                  break f;
                                                }
                                                if (
                                                  !(a =
                                                    i[(n = (o + 20) | 0) >> 2])
                                                ) {
                                                  if (!(a = i[(o + 16) >> 2]))
                                                    break u;
                                                  n = (o + 16) | 0;
                                                }
                                                for (
                                                  ;
                                                  (k = n),
                                                    (f = a),
                                                    (a =
                                                      i[
                                                        (n = (a + 20) | 0) >> 2
                                                      ]) ||
                                                      ((n = (f + 16) | 0),
                                                      (a = i[(f + 16) >> 2]));

                                                );
                                                i[k >> 2] = 0;
                                                break f;
                                              }
                                            }
                                          }
                                          if ((n = i[616]) >>> 0 >= r >>> 0) {
                                            (e = i[619]),
                                              (f = (n - r) | 0) >>> 0 >= 16
                                                ? ((i[616] = f),
                                                  (a = (e + r) | 0),
                                                  (i[619] = a),
                                                  (i[(a + 4) >> 2] = 1 | f),
                                                  (i[(n + e) >> 2] = f),
                                                  (i[(e + 4) >> 2] = 3 | r))
                                                : ((i[619] = 0),
                                                  (i[616] = 0),
                                                  (i[(e + 4) >> 2] = 3 | n),
                                                  (i[
                                                    (4 + (a = (n + e) | 0)) >> 2
                                                  ] = 1 | i[(a + 4) >> 2])),
                                              (a = (e + 8) | 0);
                                            break i;
                                          }
                                          if ((s = i[617]) >>> 0 > r >>> 0) {
                                            (f = (s - r) | 0),
                                              (i[617] = f),
                                              (a = ((n = i[620]) + r) | 0),
                                              (i[620] = a),
                                              (i[(a + 4) >> 2] = 1 | f),
                                              (i[(n + 4) >> 2] = 3 | r),
                                              (a = (n + 8) | 0);
                                            break i;
                                          }
                                          if (
                                            ((a = 0),
                                            (f = A = (r + 47) | 0),
                                            i[732]
                                              ? (n = i[734])
                                              : ((i[735] = -1),
                                                (i[736] = -1),
                                                (i[733] = 4096),
                                                (i[734] = 4096),
                                                (i[732] =
                                                  ((t + 12) & -16) ^
                                                  1431655768),
                                                (i[737] = 0),
                                                (i[725] = 0),
                                                (n = 4096)),
                                            (n =
                                              (k = (f + n) | 0) &
                                              (o = (0 - n) | 0)) >>>
                                              0 <=
                                              r >>> 0 ||
                                              ((e = i[724]) &&
                                                (e >>> 0 <
                                                  (b =
                                                    ((f = i[722]) + n) | 0) >>>
                                                    0) |
                                                  (f >>> 0 >= b >>> 0)))
                                          )
                                            break i;
                                          if (4 & w[2900]) break b;
                                          r: {
                                            k: {
                                              if ((e = i[620]))
                                                for (a = 2904; ; ) {
                                                  if (
                                                    e >>> 0 <
                                                      ((f = i[a >> 2]) +
                                                        i[(a + 4) >> 2]) >>>
                                                        0 &&
                                                    f >>> 0 <= e >>> 0
                                                  )
                                                    break k;
                                                  if (!(a = i[(a + 8) >> 2]))
                                                    break;
                                                }
                                              if (
                                                (0 | (f = U2(0))) == -1 ||
                                                ((b = n),
                                                (a = ((e = i[733]) - 1) | 0) &
                                                  f &&
                                                  (b =
                                                    (((n - f) | 0) +
                                                      ((a + f) & (0 - e))) |
                                                    0),
                                                (b >>> 0 <= r >>> 0) |
                                                  (b >>> 0 > 2147483646)) ||
                                                ((e = i[724]) &&
                                                  (e >>> 0 <
                                                    (o =
                                                      ((a = i[722]) + b) |
                                                      0) >>>
                                                      0) |
                                                    (a >>> 0 >= o >>> 0))
                                              )
                                                break e;
                                              if ((0 | f) != (0 | (a = U2(b))))
                                                break r;
                                              break t;
                                            }
                                            if (
                                              (b = o & (k - s)) >>> 0 >
                                              2147483646
                                            )
                                              break e;
                                            if (
                                              (0 | (f = U2(b))) ==
                                              ((i[a >> 2] + i[(a + 4) >> 2]) |
                                                0)
                                            )
                                              break c;
                                            a = f;
                                          }
                                          if (
                                            !(
                                              ((0 | a) == -1) |
                                              ((r + 48) >>> 0 <= b >>> 0)
                                            )
                                          ) {
                                            if (
                                              (f =
                                                ((f = i[734]) + ((A - b) | 0)) &
                                                (0 - f)) >>>
                                                0 >
                                              2147483646
                                            ) {
                                              f = a;
                                              break t;
                                            }
                                            if ((0 | U2(f)) != -1) {
                                              (b = (f + b) | 0), (f = a);
                                              break t;
                                            }
                                            U2((0 - b) | 0);
                                            break e;
                                          }
                                          if (((f = a), (0 | a) != -1)) break t;
                                          break e;
                                        }
                                        o2();
                                      }
                                      o = 0;
                                      break a;
                                    }
                                    f = 0;
                                    break f;
                                  }
                                  if ((0 | f) != -1) break t;
                                }
                                i[725] = 4 | i[725];
                              }
                              if (
                                n >>> 0 > 2147483646 ||
                                ((0 | (f = U2(n))) == -1) |
                                  ((0 | (a = U2(0))) == -1) |
                                  (a >>> 0 <= f >>> 0) ||
                                (b = (a - f) | 0) >>> 0 <= (r + 40) >>> 0
                              )
                                break n;
                            }
                            (a = (i[722] + b) | 0),
                              (i[722] = a),
                              a >>> 0 > T2[723] && (i[723] = a);
                            t: {
                              b: {
                                e: {
                                  if ((k = i[620])) {
                                    for (a = 2904; ; ) {
                                      if (
                                        (((e = i[a >> 2]) +
                                          (n = i[(a + 4) >> 2])) |
                                          0) ==
                                        (0 | f)
                                      )
                                        break e;
                                      if (!(a = i[(a + 8) >> 2])) break;
                                    }
                                    break b;
                                  }
                                  for (
                                    ((a = i[618]) >>> 0 <= f >>> 0 && a) ||
                                      (i[618] = f),
                                      a = 0,
                                      i[727] = b,
                                      i[726] = f,
                                      i[622] = -1,
                                      i[623] = i[732],
                                      i[729] = 0;
                                    (n = (2496 + (e = a << 3)) | 0),
                                      (i[(e + 2504) >> 2] = n),
                                      (i[(e + 2508) >> 2] = n),
                                      (0 | (a = (a + 1) | 0)) != 32;

                                  );
                                  (n =
                                    ((e = (b - 40) | 0) -
                                      (a = (f + 8) & 7 ? (-8 - f) & 7 : 0)) |
                                    0),
                                    (i[617] = n),
                                    (a = (a + f) | 0),
                                    (i[620] = a),
                                    (i[(a + 4) >> 2] = 1 | n),
                                    (i[(4 + ((f + e) | 0)) >> 2] = 40),
                                    (i[621] = i[736]);
                                  break t;
                                }
                                if (
                                  !(
                                    (8 & w[(a + 12) | 0]) |
                                    (e >>> 0 > k >>> 0) |
                                    (f >>> 0 <= k >>> 0)
                                  )
                                ) {
                                  (i[(a + 4) >> 2] = n + b),
                                    (n =
                                      ((a = (k + 8) & 7 ? (-8 - k) & 7 : 0) +
                                        k) |
                                      0),
                                    (i[620] = n),
                                    (a = ((f = (i[617] + b) | 0) - a) | 0),
                                    (i[617] = a),
                                    (i[(n + 4) >> 2] = 1 | a),
                                    (i[(4 + ((f + k) | 0)) >> 2] = 40),
                                    (i[621] = i[736]);
                                  break t;
                                }
                              }
                              T2[618] > f >>> 0 && (i[618] = f),
                                (n = (f + b) | 0),
                                (a = 2904);
                              b: {
                                e: {
                                  c: {
                                    u: {
                                      o: {
                                        A: {
                                          for (;;) {
                                            if ((0 | n) != i[a >> 2]) {
                                              if ((a = i[(a + 8) >> 2]))
                                                continue;
                                              break A;
                                            }
                                            break;
                                          }
                                          if (!(8 & w[(a + 12) | 0])) break o;
                                        }
                                        for (a = 2904; ; ) {
                                          if (
                                            (n = i[a >> 2]) >>> 0 <= k >>> 0 &&
                                            (o = (n + i[(a + 4) >> 2]) | 0) >>>
                                              0 >
                                              k >>> 0
                                          )
                                            break u;
                                          a = i[(a + 8) >> 2];
                                        }
                                      }
                                      if (
                                        ((i[a >> 2] = f),
                                        (i[(a + 4) >> 2] = i[(a + 4) >> 2] + b),
                                        (i[
                                          (4 +
                                            (A =
                                              (((f + 8) & 7
                                                ? (-8 - f) & 7
                                                : 0) +
                                                f) |
                                              0)) >>
                                            2
                                        ] = 3 | r),
                                        (n =
                                          ((b =
                                            (n +
                                              ((n + 8) & 7
                                                ? (-8 - n) & 7
                                                : 0)) |
                                            0) -
                                            (s = (r + A) | 0)) |
                                          0),
                                        (0 | k) == (0 | b))
                                      ) {
                                        (i[620] = s),
                                          (a = (i[617] + n) | 0),
                                          (i[617] = a),
                                          (i[(s + 4) >> 2] = 1 | a);
                                        break e;
                                      }
                                      if (i[619] == (0 | b)) {
                                        (i[619] = s),
                                          (a = (i[616] + n) | 0),
                                          (i[616] = a),
                                          (i[(s + 4) >> 2] = 1 | a),
                                          (i[(a + s) >> 2] = a);
                                        break e;
                                      }
                                      if ((3 & (a = i[(b + 4) >> 2])) == 1) {
                                        k = -8 & a;
                                        o: if (a >>> 0 <= 255) {
                                          if (
                                            ((e = i[(b + 8) >> 2]),
                                            (a = (a >>> 3) | 0),
                                            (0 | (f = i[(b + 12) >> 2])) ==
                                              (0 | e))
                                          ) {
                                            (h = 2456),
                                              (d = i[614] & f2(a)),
                                              (i[h >> 2] = d);
                                            break o;
                                          }
                                          (i[(e + 12) >> 2] = f),
                                            (i[(f + 8) >> 2] = e);
                                        } else {
                                          if (
                                            ((r = i[(b + 24) >> 2]),
                                            (0 | b) ==
                                              (0 | (f = i[(b + 12) >> 2])))
                                          )
                                            if (
                                              (e =
                                                i[(a = (b + 20) | 0) >> 2]) ||
                                              (e = i[(a = (b + 16) | 0) >> 2])
                                            ) {
                                              for (
                                                ;
                                                (o = a),
                                                  (e =
                                                    i[
                                                      (a =
                                                        ((f = e) + 20) | 0) >> 2
                                                    ]) ||
                                                    ((a = (f + 16) | 0),
                                                    (e = i[(f + 16) >> 2]));

                                              );
                                              i[o >> 2] = 0;
                                            } else f = 0;
                                          else
                                            (a = i[(b + 8) >> 2]),
                                              (i[(a + 12) >> 2] = f),
                                              (i[(f + 8) >> 2] = a);
                                          if (r) {
                                            e = i[(b + 28) >> 2];
                                            A: {
                                              if (
                                                i[
                                                  (a = (2760 + (e << 2)) | 0) >>
                                                    2
                                                ] ==
                                                (0 | b)
                                              ) {
                                                if (((i[a >> 2] = f), f))
                                                  break A;
                                                (h = 2460),
                                                  (d = i[615] & f2(e)),
                                                  (i[h >> 2] = d);
                                                break o;
                                              }
                                              if (
                                                ((i[
                                                  (r +
                                                    (i[(r + 16) >> 2] == (0 | b)
                                                      ? 16
                                                      : 20)) >>
                                                    2
                                                ] = f),
                                                !f)
                                              )
                                                break o;
                                            }
                                            (i[(f + 24) >> 2] = r),
                                              (a = i[(b + 16) >> 2]) &&
                                                ((i[(f + 16) >> 2] = a),
                                                (i[(a + 24) >> 2] = f)),
                                              (a = i[(b + 20) >> 2]) &&
                                                ((i[(f + 20) >> 2] = a),
                                                (i[(a + 24) >> 2] = f));
                                          }
                                        }
                                        (b = (k + b) | 0), (n = (n + k) | 0);
                                      }
                                      if (
                                        ((i[(b + 4) >> 2] =
                                          -2 & i[(b + 4) >> 2]),
                                        (i[(s + 4) >> 2] = 1 | n),
                                        (i[(n + s) >> 2] = n),
                                        n >>> 0 <= 255)
                                      ) {
                                        (f =
                                          (2496 + ((a = (n >>> 3) | 0) << 3)) |
                                          0),
                                          (n = i[614]) & (a = 1 << a)
                                            ? (a = i[(f + 8) >> 2])
                                            : ((i[614] = a | n), (a = f)),
                                          (i[(f + 8) >> 2] = s),
                                          (i[(a + 12) >> 2] = s),
                                          (i[(s + 12) >> 2] = f),
                                          (i[(s + 8) >> 2] = a);
                                        break e;
                                      }
                                      if (
                                        ((a = 31),
                                        n >>> 0 <= 16777215 &&
                                          ((a = (n >>> 8) | 0),
                                          (a <<= o =
                                            ((a + 1048320) >>> 16) & 8),
                                          (a =
                                            (28 +
                                              (((a =
                                                (((((a <<= e =
                                                  ((a + 520192) >>> 16) & 4) <<
                                                  (f =
                                                    ((a + 245760) >>> 16) &
                                                    2)) >>>
                                                  15) |
                                                  0) -
                                                  (f | e | o)) |
                                                0) <<
                                                1) |
                                                ((n >>> (a + 21)) & 1))) |
                                            0)),
                                        (i[(s + 28) >> 2] = a),
                                        (i[(s + 16) >> 2] = 0),
                                        (i[(s + 20) >> 2] = 0),
                                        (o = (2760 + (a << 2)) | 0),
                                        (e = i[615]) & (f = 1 << a))
                                      ) {
                                        for (
                                          a =
                                            n <<
                                            ((0 | a) == 31
                                              ? 0
                                              : (25 - ((a >>> 1) | 0)) | 0),
                                            f = i[o >> 2];
                                          ;

                                        ) {
                                          if (
                                            ((e = f),
                                            (-8 & i[(f + 4) >> 2]) == (0 | n))
                                          )
                                            break c;
                                          if (
                                            ((f = (a >>> 29) | 0),
                                            (a <<= 1),
                                            !(f =
                                              i[
                                                (16 +
                                                  (o = (e + (4 & f)) | 0)) >>
                                                  2
                                              ]))
                                          )
                                            break;
                                        }
                                        (i[(o + 16) >> 2] = s),
                                          (i[(s + 24) >> 2] = e);
                                      } else
                                        (i[615] = f | e),
                                          (i[o >> 2] = s),
                                          (i[(s + 24) >> 2] = o);
                                      (i[(s + 12) >> 2] = s),
                                        (i[(s + 8) >> 2] = s);
                                      break e;
                                    }
                                    for (
                                      n =
                                        ((e = (b - 40) | 0) -
                                          (a =
                                            (f + 8) & 7 ? (-8 - f) & 7 : 0)) |
                                        0,
                                        i[617] = n,
                                        a = (a + f) | 0,
                                        i[620] = a,
                                        i[(a + 4) >> 2] = 1 | n,
                                        i[(4 + ((f + e) | 0)) >> 2] = 40,
                                        i[621] = i[736],
                                        i[
                                          ((n =
                                            (a =
                                              (((o +
                                                ((o - 39) & 7
                                                  ? (39 - o) & 7
                                                  : 0)) |
                                                0) -
                                                47) |
                                              0) >>>
                                              0 <
                                            (k + 16) >>> 0
                                              ? k
                                              : a) +
                                            4) >>
                                            2
                                        ] = 27,
                                        a = i[729],
                                        i[(n + 16) >> 2] = i[728],
                                        i[(n + 20) >> 2] = a,
                                        a = i[727],
                                        i[(n + 8) >> 2] = i[726],
                                        i[(n + 12) >> 2] = a,
                                        i[728] = n + 8,
                                        i[727] = b,
                                        i[726] = f,
                                        i[729] = 0,
                                        a = (n + 24) | 0;
                                      (i[(a + 4) >> 2] = 7),
                                        (f = (a + 8) | 0),
                                        (a = (a + 4) | 0),
                                        f >>> 0 < o >>> 0;

                                    );
                                    if ((0 | n) == (0 | k)) break t;
                                    if (
                                      ((i[(n + 4) >> 2] = -2 & i[(n + 4) >> 2]),
                                      (o = (n - k) | 0),
                                      (i[(k + 4) >> 2] = 1 | o),
                                      (i[n >> 2] = o),
                                      o >>> 0 <= 255)
                                    ) {
                                      (f =
                                        (2496 + ((a = (o >>> 3) | 0) << 3)) |
                                        0),
                                        (n = i[614]) & (a = 1 << a)
                                          ? (a = i[(f + 8) >> 2])
                                          : ((i[614] = a | n), (a = f)),
                                        (i[(f + 8) >> 2] = k),
                                        (i[(a + 12) >> 2] = k),
                                        (i[(k + 12) >> 2] = f),
                                        (i[(k + 8) >> 2] = a);
                                      break t;
                                    }
                                    if (
                                      ((a = 31),
                                      (i[(k + 16) >> 2] = 0),
                                      (i[(k + 20) >> 2] = 0),
                                      o >>> 0 <= 16777215 &&
                                        ((a = (o >>> 8) | 0),
                                        (a <<= e = ((a + 1048320) >>> 16) & 8),
                                        (a =
                                          (28 +
                                            (((a =
                                              (((((a <<= n =
                                                ((a + 520192) >>> 16) & 4) <<
                                                (f =
                                                  ((a + 245760) >>> 16) &
                                                  2)) >>>
                                                15) |
                                                0) -
                                                (f | n | e)) |
                                              0) <<
                                              1) |
                                              ((o >>> (a + 21)) & 1))) |
                                          0)),
                                      (i[(k + 28) >> 2] = a),
                                      (e = (2760 + (a << 2)) | 0),
                                      (n = i[615]) & (f = 1 << a))
                                    ) {
                                      for (
                                        a =
                                          o <<
                                          ((0 | a) == 31
                                            ? 0
                                            : (25 - ((a >>> 1) | 0)) | 0),
                                          f = i[e >> 2];
                                        ;

                                      ) {
                                        if (
                                          ((n = f),
                                          (0 | o) == (-8 & i[(f + 4) >> 2]))
                                        )
                                          break b;
                                        if (
                                          ((f = (a >>> 29) | 0),
                                          (a <<= 1),
                                          !(f =
                                            i[
                                              (16 + (e = (n + (4 & f)) | 0)) >>
                                                2
                                            ]))
                                        )
                                          break;
                                      }
                                      (i[(e + 16) >> 2] = k),
                                        (i[(k + 24) >> 2] = n);
                                    } else
                                      (i[615] = f | n),
                                        (i[e >> 2] = k),
                                        (i[(k + 24) >> 2] = e);
                                    (i[(k + 12) >> 2] = k),
                                      (i[(k + 8) >> 2] = k);
                                    break t;
                                  }
                                  (a = i[(e + 8) >> 2]),
                                    (i[(a + 12) >> 2] = s),
                                    (i[(e + 8) >> 2] = s),
                                    (i[(s + 24) >> 2] = 0),
                                    (i[(s + 12) >> 2] = e),
                                    (i[(s + 8) >> 2] = a);
                                }
                                a = (A + 8) | 0;
                                break i;
                              }
                              (a = i[(n + 8) >> 2]),
                                (i[(a + 12) >> 2] = k),
                                (i[(n + 8) >> 2] = k),
                                (i[(k + 24) >> 2] = 0),
                                (i[(k + 12) >> 2] = n),
                                (i[(k + 8) >> 2] = a);
                            }
                            if (!((a = i[617]) >>> 0 <= r >>> 0)) {
                              (f = (a - r) | 0),
                                (i[617] = f),
                                (a = ((n = i[620]) + r) | 0),
                                (i[620] = a),
                                (i[(a + 4) >> 2] = 1 | f),
                                (i[(n + 4) >> 2] = 3 | r),
                                (a = (n + 8) | 0);
                              break i;
                            }
                          }
                          (i[613] = 48), (a = 0);
                          break i;
                        }
                        f: if (b) {
                          n = i[(o + 28) >> 2];
                          n: {
                            if (
                              i[(a = (2760 + (n << 2)) | 0) >> 2] ==
                              (0 | o)
                            ) {
                              if (((i[a >> 2] = f), f)) break n;
                              (A = f2(n) & A), (i[615] = A);
                              break f;
                            }
                            if (
                              ((i[
                                (b + (i[(b + 16) >> 2] == (0 | o) ? 16 : 20)) >>
                                  2
                              ] = f),
                              !f)
                            )
                              break f;
                          }
                          (i[(f + 24) >> 2] = b),
                            (a = i[(o + 16) >> 2]) &&
                              ((i[(f + 16) >> 2] = a), (i[(a + 24) >> 2] = f)),
                            (a = i[(o + 20) >> 2]) &&
                              ((i[(f + 20) >> 2] = a), (i[(a + 24) >> 2] = f));
                        }
                        f: if (e >>> 0 <= 15)
                          (a = (e + r) | 0),
                            (i[(o + 4) >> 2] = 3 | a),
                            (i[(4 + (a = (a + o) | 0)) >> 2] =
                              1 | i[(a + 4) >> 2]);
                        else if (
                          ((i[(o + 4) >> 2] = 3 | r),
                          (i[(s + 4) >> 2] = 1 | e),
                          (i[(e + s) >> 2] = e),
                          e >>> 0 <= 255)
                        )
                          (f = (2496 + ((a = (e >>> 3) | 0) << 3)) | 0),
                            (n = i[614]) & (a = 1 << a)
                              ? (a = i[(f + 8) >> 2])
                              : ((i[614] = a | n), (a = f)),
                            (i[(f + 8) >> 2] = s),
                            (i[(a + 12) >> 2] = s),
                            (i[(s + 12) >> 2] = f),
                            (i[(s + 8) >> 2] = a);
                        else {
                          (a = 31),
                            e >>> 0 <= 16777215 &&
                              ((a = (e >>> 8) | 0),
                              (a <<= k = ((a + 1048320) >>> 16) & 8),
                              (a =
                                (28 +
                                  (((a =
                                    (((((a <<= n = ((a + 520192) >>> 16) & 4) <<
                                      (f = ((a + 245760) >>> 16) & 2)) >>>
                                      15) |
                                      0) -
                                      (f | n | k)) |
                                    0) <<
                                    1) |
                                    ((e >>> (a + 21)) & 1))) |
                                0)),
                            (i[(s + 28) >> 2] = a),
                            (i[(s + 16) >> 2] = 0),
                            (i[(s + 20) >> 2] = 0),
                            (n = (2760 + (a << 2)) | 0);
                          n: {
                            if ((f = 1 << a) & A) {
                              for (
                                a =
                                  e <<
                                  ((0 | a) == 31
                                    ? 0
                                    : (25 - ((a >>> 1) | 0)) | 0),
                                  r = i[n >> 2];
                                ;

                              ) {
                                if ((-8 & i[((f = r) + 4) >> 2]) == (0 | e))
                                  break n;
                                if (
                                  ((n = (a >>> 29) | 0),
                                  (a <<= 1),
                                  !(r = i[(16 + (n = (f + (4 & n)) | 0)) >> 2]))
                                )
                                  break;
                              }
                              (i[(n + 16) >> 2] = s), (i[(s + 24) >> 2] = f);
                            } else
                              (i[615] = f | A),
                                (i[n >> 2] = s),
                                (i[(s + 24) >> 2] = n);
                            (i[(s + 12) >> 2] = s), (i[(s + 8) >> 2] = s);
                            break f;
                          }
                          (a = i[(f + 8) >> 2]),
                            (i[(a + 12) >> 2] = s),
                            (i[(f + 8) >> 2] = s),
                            (i[(s + 24) >> 2] = 0),
                            (i[(s + 12) >> 2] = f),
                            (i[(s + 8) >> 2] = a);
                        }
                        a = (o + 8) | 0;
                        break i;
                      }
                      a: if (v) {
                        n = i[(f + 28) >> 2];
                        f: {
                          if (i[(a = (2760 + (n << 2)) | 0) >> 2] == (0 | f)) {
                            if (((i[a >> 2] = o), o)) break f;
                            (h = 2460), (d = f2(n) & s), (i[h >> 2] = d);
                            break a;
                          }
                          if (
                            ((i[
                              ((i[(v + 16) >> 2] == (0 | f) ? 16 : 20) + v) >> 2
                            ] = o),
                            !o)
                          )
                            break a;
                        }
                        (i[(o + 24) >> 2] = v),
                          (a = i[(f + 16) >> 2]) &&
                            ((i[(o + 16) >> 2] = a), (i[(a + 24) >> 2] = o)),
                          (a = i[(f + 20) >> 2]) &&
                            ((i[(o + 20) >> 2] = a), (i[(a + 24) >> 2] = o));
                      }
                      e >>> 0 <= 15
                        ? ((a = (e + r) | 0),
                          (i[(f + 4) >> 2] = 3 | a),
                          (i[(4 + (a = (a + f) | 0)) >> 2] =
                            1 | i[(a + 4) >> 2]))
                        : ((i[(f + 4) >> 2] = 3 | r),
                          (i[(A + 4) >> 2] = 1 | e),
                          (i[(e + A) >> 2] = e),
                          l &&
                            ((n = (2496 + ((a = (l >>> 3) | 0) << 3)) | 0),
                            (o = i[619]),
                            (a = 1 << a) & b
                              ? (a = i[(n + 8) >> 2])
                              : ((i[614] = a | b), (a = n)),
                            (i[(n + 8) >> 2] = o),
                            (i[(a + 12) >> 2] = o),
                            (i[(o + 12) >> 2] = n),
                            (i[(o + 8) >> 2] = a)),
                          (i[619] = A),
                          (i[616] = e)),
                        (a = (f + 8) | 0);
                    }
                    return (F = (t + 16) | 0), 0 | a;
                  }
                  function n1(a, t) {
                    var f,
                      n,
                      e,
                      o,
                      b,
                      k,
                      s,
                      r,
                      A = u(0),
                      l = u(0),
                      v = 0,
                      h = u(0),
                      d = u(0),
                      g = 0,
                      y = u(0),
                      C = 0,
                      M = 0,
                      S = 0,
                      L = u(0),
                      T = u(0),
                      j = u(0),
                      D = 0,
                      K = 0,
                      k2 = u(0),
                      m2 = 0,
                      f0 = u(0);
                    (F = f = (F - 144) | 0),
                      (r = i[i[(i[(t + 4) >> 2] + 8) >> 2] >> 2]),
                      (s = i[r >> 2]),
                      (e = i[(s + 16) >> 2]),
                      (b = i[(i[(s + 4) >> 2] + 16) >> 2]),
                      (k = i[t >> 2]),
                      (o = i[(i[(k + 4) >> 2] + 16) >> 2]),
                      (n = i[(k + 16) >> 2]),
                      V(o, i[(a + 72) >> 2], n) > u(0) &&
                        ((A = c[(o + 28) >> 2]),
                        (l = c[(o + 32) >> 2]),
                        (v = i[(a + 72) >> 2]),
                        (h = c[(v + 28) >> 2]),
                        (d = c[(v + 32) >> 2]),
                        (y = c[(n + 28) >> 2]),
                        ($[(f + 40) >> 3] = c[(n + 32) >> 2]),
                        ($[(f + 32) >> 3] = y),
                        ($[(f + 24) >> 3] = d),
                        ($[(f + 16) >> 3] = h),
                        ($[(f + 8) >> 3] = l),
                        ($[f >> 3] = A),
                        y1(1098, f));
                    i: {
                      a: {
                        f: if (
                          (0 | n) != (0 | e) &&
                          !(
                            (T =
                              (A = c[(n + 32) >> 2]) <= (l = c[(o + 32) >> 2])
                                ? A
                                : l) >
                            ((l = c[(e + 32) >> 2]) >= (h = c[(b + 32) >> 2])
                              ? l
                              : h)
                          )
                        ) {
                          n: {
                            if (
                              !(
                                !(A <= l) |
                                ((h = c[(n + 28) >> 2]) !=
                                  (d = c[(e + 28) >> 2]))
                              ) ||
                              h < d
                            ) {
                              if (!(V(b, n, e) > u(0))) break n;
                              break f;
                            }
                            if (V(o, e, n) < u(0)) break f;
                          }
                          (S = b),
                            (v = e),
                            (M = n),
                            ((A = c[((C = o) + 28) >> 2]) <
                              (l = c[(n + 28) >> 2])) |
                            (c[(C + 32) >> 2] <= c[(M + 32) >> 2] ? A == l : 0)
                              ? ((g = M), (M = C))
                              : (g = C),
                            ((A = c[(v + 28) >> 2]) > (l = c[(S + 28) >> 2])) |
                            (c[(S + 32) >> 2] <= c[(v + 32) >> 2] ? A == l : 0)
                              ? ((A = l), (C = v), (v = S))
                              : (C = S),
                            (A > (l = c[(M + 28) >> 2])) |
                            (c[(M + 32) >> 2] <= c[(v + 32) >> 2] ? A == l : 0)
                              ? ((l = A), (S = C), (D = v), (C = g), (v = M))
                              : ((S = g), (D = M)),
                            (g = f);
                          n: if (
                            ((d = c[(C + 28) >> 2]) > l) |
                            (c[(D + 32) >> 2] <= c[(C + 32) >> 2] ? l == d : 0)
                          )
                            if (
                              ((L = c[(S + 28) >> 2]),
                              !(c[(C + 32) >> 2] <= c[(S + 32) >> 2]) |
                                (d != L) && !(L > d))
                            )
                              if (
                                ((l = V(v, D, C)),
                                (A = V(v, S, C)),
                                (M = u(l - A) < u(0)),
                                (h = u(C2(M ? u(-l) : l, u(0)))) <=
                                  (l = u(C2(M ? A : u(-A), u(0)))))
                              ) {
                                if (
                                  ((d = c[(D + 28) >> 2]),
                                  (y = c[(S + 28) >> 2]),
                                  (A = u(u(d + y) * u(0.5))),
                                  l == u(0))
                                )
                                  break n;
                                A = u(d + u(u(h / u(h + l)) * u(y - d)));
                              } else
                                (A = c[(S + 28) >> 2]),
                                  (A = u(
                                    A +
                                      u(
                                        u(l / u(h + l)) *
                                          u(c[(D + 28) >> 2] - A)
                                      )
                                  ));
                            else {
                              if (
                                ((A = u(0)),
                                (y = u(d - l)),
                                (h = u(l - c[(v + 28) >> 2])),
                                (T = u(y + h)) > u(0) &&
                                  ((A = c[(((M = h < y) ? v : C) + 32) >> 2]),
                                  (A = u(
                                    u(c[(D + 32) >> 2] - A) +
                                      u(
                                        u((M ? h : y) / T) *
                                          u(A - c[((M ? C : v) + 32) >> 2])
                                      )
                                  ))),
                                (k2 = u(-A)),
                                (T = A),
                                (L = u(L - d)),
                                (h = u(y + L)) > u(0) &&
                                  ((j = c[(((M = y < L) ? D : S) + 32) >> 2]),
                                  (j = u(
                                    u(c[(C + 32) >> 2] - j) +
                                      u(
                                        u((M ? y : L) / h) *
                                          u(j - c[((M ? S : D) + 32) >> 2])
                                      )
                                  ))),
                                (M = u(A + j) < u(0)),
                                (L = u(C2(M ? k2 : T, u(0)))) <=
                                  (h = u(C2(M ? u(-j) : j, u(0)))))
                              ) {
                                if (((A = u(u(l + d) * u(0.5))), h == u(0)))
                                  break n;
                                A = u(l + u(y * u(L / u(L + h))));
                                break n;
                              }
                              A = u(d + u(u(l - d) * u(h / u(L + h))));
                            }
                          else A = u(u(l + d) * u(0.5));
                          (c[(g + 84) >> 2] = A),
                            ((A = c[(v + 32) >> 2]) < (l = c[(C + 32) >> 2])) |
                            (c[(v + 28) >> 2] <= c[(C + 28) >> 2] ? A == l : 0)
                              ? ((g = C), (C = v))
                              : (g = v),
                            ((l = c[(S + 32) >> 2]) > (A = c[(D + 32) >> 2])) |
                            (c[(D + 28) >> 2] <= c[(S + 28) >> 2] ? A == l : 0)
                              ? ((l = A), (v = S), (S = D))
                              : (v = D),
                            ((A = c[(C + 32) >> 2]) < l) |
                            (c[(C + 28) >> 2] <= c[(S + 28) >> 2] ? A == l : 0)
                              ? ((D = v), (M = S), (v = g), (S = C))
                              : ((D = g), (M = C));
                          n: {
                            t: if (
                              ((d = c[(M + 32) >> 2]) <
                                (y = c[(v + 32) >> 2])) |
                              (c[(M + 28) >> 2] <= c[(v + 28) >> 2]
                                ? d == y
                                : 0)
                            ) {
                              if (
                                ((j = c[(D + 32) >> 2]),
                                !(
                                  !(c[(v + 28) >> 2] <= c[(D + 28) >> 2]) |
                                  (y != j)
                                ) || j > y)
                              ) {
                                if (
                                  ((A = u(0)),
                                  (l = u(0)),
                                  (L = u(y - d)),
                                  (h = u(d - c[(S + 32) >> 2])),
                                  (T = u(L + h)) > u(0) &&
                                    ((l = c[(((g = h < L) ? S : v) + 28) >> 2]),
                                    (l = u(
                                      u(c[(M + 28) >> 2] - l) +
                                        u(
                                          u((g ? h : L) / T) *
                                            u(l - c[((g ? v : S) + 28) >> 2])
                                        )
                                    ))),
                                  (f0 = u(-l)),
                                  (T = l),
                                  (j = u(j - y)),
                                  (h = u(L + j)) > u(0) &&
                                    ((k2 = c[(v + 28) >> 2]),
                                    (A = c[(((v = L < j) ? M : D) + 28) >> 2]),
                                    (A = u(
                                      u(k2 - A) +
                                        u(
                                          u((v ? L : j) / h) *
                                            u(A - c[((v ? D : M) + 28) >> 2])
                                        )
                                    ))),
                                  (v = u(l + A) < u(0)),
                                  (l = u(C2(v ? f0 : T, u(0)))) <=
                                    (A = u(C2(v ? u(-A) : A, u(0)))))
                                ) {
                                  if (A == u(0)) break t;
                                  c[(f + 88) >> 2] = d + u(L * u(l / u(l + A)));
                                  break n;
                                }
                                c[(f + 88) >> 2] =
                                  y + u(u(d - y) * u(A / u(l + A)));
                                break n;
                              }
                              if (
                                ((A = u(0)),
                                (l = u(0)),
                                (h = u(y - d)),
                                (L = c[(S + 32) >> 2]),
                                (T = u(d - L)),
                                u(h + T) > u(0) &&
                                  ((l = c[(M + 28) >> 2]),
                                  (l = u(
                                    u(T * u(l - c[(v + 28) >> 2])) +
                                      u(h * u(l - c[(S + 28) >> 2]))
                                  ))),
                                (T = u(-l)),
                                (h = l),
                                (y = u(y - j)),
                                (L = u(j - L)),
                                u(y + L) > u(0) &&
                                  ((A = c[(D + 28) >> 2]),
                                  (A = u(
                                    u(L * u(A - c[(v + 28) >> 2])) +
                                      u(y * u(A - c[(S + 28) >> 2]))
                                  ))),
                                (v = u(l - A) < u(0)),
                                (l = u(C2(v ? T : h, u(0)))) <=
                                  (A = u(C2(v ? A : u(-A), u(0)))))
                              ) {
                                if (A == u(0)) {
                                  c[(f + 88) >> 2] = u(d + j) * u(0.5);
                                  break n;
                                }
                                c[(f + 88) >> 2] =
                                  d + u(u(j - d) * u(l / u(l + A)));
                                break n;
                              }
                              c[(f + 88) >> 2] =
                                j + u(u(d - j) * u(A / u(l + A)));
                              break n;
                            }
                            c[(f + 88) >> 2] = u(d + y) * u(0.5);
                          }
                          (A = c[(f + 84) >> 2]), (g = i[(a + 72) >> 2]);
                          n: {
                            if (A < (h = c[(g + 28) >> 2]))
                              l = c[(g + 32) >> 2];
                            else if (
                              A != h ||
                              !((l = c[(g + 32) >> 2]) >= c[(f + 88) >> 2])
                            )
                              break n;
                            (c[(f + 88) >> 2] = l),
                              (c[(f + 84) >> 2] = h),
                              (A = h);
                          }
                          (C = v = n),
                            (l = h = c[(v + 28) >> 2]) <
                              (d = c[(e + 28) >> 2]) ||
                              (h == d &&
                                ((l = h),
                                (C = n),
                                c[(v + 32) >> 2] <= c[(e + 32) >> 2])) ||
                              ((l = d), (C = e)),
                            (v = C);
                          n: {
                            if (A > l) d = c[(v + 32) >> 2];
                            else if (
                              A != l ||
                              !((d = c[(v + 32) >> 2]) <= c[(f + 88) >> 2])
                            )
                              break n;
                            (c[(f + 88) >> 2] = d),
                              (c[(f + 84) >> 2] = l),
                              (h = c[(n + 28) >> 2]),
                              (A = l);
                          }
                          if (
                            (c[(e + 28) >> 2] != A) |
                              (c[(f + 88) >> 2] != c[(e + 32) >> 2]) &&
                            (c[(f + 88) >> 2] != c[(n + 32) >> 2] || A != h)
                          ) {
                            n: {
                              A = c[(g + 28) >> 2];
                              t: {
                                if (
                                  c[(o + 32) >> 2] != c[(g + 32) >> 2] ||
                                  A != c[(o + 28) >> 2]
                                ) {
                                  if (V(o, g, (f + 56) | 0) >= u(0)) break t;
                                  (g = i[(a + 72) >> 2]),
                                    (A = c[(g + 28) >> 2]);
                                }
                                if (
                                  (c[(b + 32) >> 2] == c[(g + 32) >> 2] &&
                                    A == c[(b + 28) >> 2]) ||
                                  !(V(b, g, (f + 56) | 0) <= u(0))
                                )
                                  break n;
                              }
                              if ((0 | (v = i[(a + 72) >> 2])) == (0 | b)) {
                                if (
                                  !n2(i[(k + 4) >> 2]) ||
                                  !z(i[(s + 4) >> 2], k)
                                )
                                  break i;
                                for (
                                  v = i[(i[t >> 2] + 16) >> 2];
                                  (t = i[i[(i[(t + 4) >> 2] + 4) >> 2] >> 2]),
                                    (C = i[t >> 2]),
                                    (0 | v) == i[(C + 16) >> 2];

                                );
                                if (
                                  ((g = t),
                                  w[(t + 15) | 0] &&
                                    ((g = 0),
                                    (v = h2(
                                      i[
                                        (i[
                                          i[
                                            i[(i[(t + 4) >> 2] + 8) >> 2] >> 2
                                          ] >> 2
                                        ] +
                                          4) >>
                                          2
                                      ],
                                      i[(C + 12) >> 2]
                                    )) &&
                                      i2(i[t >> 2]) &&
                                      ((i[t >> 2] = v),
                                      (p[(t + 15) | 0] = 0),
                                      (i[(v + 24) >> 2] = t),
                                      (g =
                                        i[
                                          i[(i[(t + 4) >> 2] + 4) >> 2] >> 2
                                        ]))),
                                  !g)
                                )
                                  break i;
                                (v = i[i[(i[(g + 4) >> 2] + 8) >> 2] >> 2]),
                                  (t = i[v >> 2]),
                                  a0(a, v, r),
                                  (m2 = 1),
                                  F2(
                                    a,
                                    g,
                                    i[(i[(t + 4) >> 2] + 12) >> 2],
                                    t,
                                    t,
                                    1
                                  );
                                break f;
                              }
                              if ((0 | v) == (0 | o)) {
                                if (
                                  !n2(i[(s + 4) >> 2]) ||
                                  !z(
                                    i[(k + 12) >> 2],
                                    i[(i[(s + 4) >> 2] + 12) >> 2]
                                  )
                                )
                                  break i;
                                for (
                                  g = i[(i[(i[t >> 2] + 4) >> 2] + 16) >> 2],
                                    v = t;
                                  (v = i[i[(i[(v + 4) >> 2] + 4) >> 2] >> 2]),
                                    (0 | g) ==
                                      i[(i[(i[v >> 2] + 4) >> 2] + 16) >> 2];

                                );
                                (g =
                                  i[
                                    (i[
                                      (i[
                                        i[i[(i[(v + 4) >> 2] + 8) >> 2] >> 2] >>
                                          2
                                      ] +
                                        4) >>
                                        2
                                    ] +
                                      8) >>
                                      2
                                  ]),
                                  (i[t >> 2] = i[(i[(s + 4) >> 2] + 12) >> 2]),
                                  (m2 = 1),
                                  F2(
                                    a,
                                    v,
                                    i[(a0(a, t, 0) + 8) >> 2],
                                    i[(i[(k + 4) >> 2] + 8) >> 2],
                                    g,
                                    1
                                  );
                                break f;
                              }
                              if (V(o, v, (f + 56) | 0) >= u(0)) {
                                if (
                                  ((p[(t + 14) | 0] = 1),
                                  (p[
                                    (i[i[(i[(t + 4) >> 2] + 4) >> 2] >> 2] +
                                      14) |
                                      0
                                  ] = 1),
                                  !n2(i[(k + 4) >> 2]))
                                )
                                  break i;
                                (g = i[(k + 16) >> 2]),
                                  (v = i[(a + 72) >> 2]),
                                  (c[(g + 28) >> 2] = c[(v + 28) >> 2]),
                                  (c[(g + 32) >> 2] = c[(v + 32) >> 2]);
                              } else v = i[(a + 72) >> 2];
                              if (!(V(b, v, (f + 56) | 0) <= u(0))) break f;
                              if (
                                ((p[(r + 14) | 0] = 1),
                                (p[(t + 14) | 0] = 1),
                                !n2(i[(s + 4) >> 2]))
                              )
                                break i;
                              (t = i[(s + 16) >> 2]),
                                (a = i[(a + 72) >> 2]),
                                (c[(t + 28) >> 2] = c[(a + 28) >> 2]),
                                (c[(t + 32) >> 2] = c[(a + 32) >> 2]);
                              break f;
                            }
                            if (
                              !n2(i[(k + 4) >> 2]) ||
                              !n2(i[(s + 4) >> 2]) ||
                              !z(i[(i[(s + 4) >> 2] + 12) >> 2], k)
                            )
                              break i;
                            if (
                              ((v = i[(k + 16) >> 2]),
                              (c[(v + 28) >> 2] = c[(f + 84) >> 2]),
                              (c[(v + 32) >> 2] = c[(f + 88) >> 2]),
                              (g = u1(i[(a + 68) >> 2], v)),
                              (v = i[(k + 16) >> 2]),
                              (i[(v + 36) >> 2] = g),
                              (0 | g) == 2147483647)
                            )
                              break a;
                            (i[(f + 112) >> 2] = i[(n + 12) >> 2]),
                              (i[(f + 116) >> 2] = i[(o + 12) >> 2]),
                              (i[(f + 120) >> 2] = i[(e + 12) >> 2]),
                              (i[(f + 124) >> 2] = i[(b + 12) >> 2]),
                              (i[(v + 24) >> 2] = 0),
                              (i[(v + 16) >> 2] = 0),
                              (i[(v + 20) >> 2] = 0),
                              (A = c[(v + 28) >> 2]),
                              (T =
                                (l = u(c[(o + 28) >> 2] - A)) < u(0)
                                  ? u(-l)
                                  : l),
                              (l = c[(v + 32) >> 2]),
                              (h = u(c[(o + 32) >> 2] - l)),
                              (d = u(T + (h < u(0) ? u(-h) : h))),
                              (T =
                                (h = u(c[(n + 28) >> 2] - A)) < u(0)
                                  ? u(-h)
                                  : h),
                              (h = u(c[(n + 32) >> 2] - l)),
                              (y = u(T + (h < u(0) ? u(-h) : h))),
                              (K = +u(y + d)),
                              (h = u((0.5 * +d) / K)),
                              (c[(f + 96) >> 2] = h),
                              (d = u((0.5 * +y) / K)),
                              (c[(f + 100) >> 2] = d),
                              (y = u(
                                u(
                                  u(c[(n + 16) >> 2] * h) +
                                    u(c[(o + 16) >> 2] * d)
                                ) + u(0)
                              )),
                              (c[(v + 16) >> 2] = y),
                              (j = u(
                                u(
                                  u(c[(n + 20) >> 2] * h) +
                                    u(c[(o + 20) >> 2] * d)
                                ) + u(0)
                              )),
                              (c[(v + 20) >> 2] = j),
                              (d = u(
                                u(
                                  u(c[(n + 24) >> 2] * h) +
                                    u(c[(o + 24) >> 2] * d)
                                ) + u(0)
                              )),
                              (c[(v + 24) >> 2] = d),
                              (T =
                                (h = u(c[(e + 28) >> 2] - A)) < u(0)
                                  ? u(-h)
                                  : h),
                              (h = u(c[(e + 32) >> 2] - l)),
                              (h = u(T + (h < u(0) ? u(-h) : h))),
                              (T =
                                (A = u(c[(b + 28) >> 2] - A)) < u(0)
                                  ? u(-A)
                                  : A),
                              (A = u(c[(b + 32) >> 2] - l)),
                              (A = u(T + (A < u(0) ? u(-A) : A))),
                              (K = +u(h + A)),
                              (A = u((0.5 * +A) / K)),
                              (c[(f + 104) >> 2] = A),
                              (l = u((0.5 * +h) / K)),
                              (c[(f + 108) >> 2] = l),
                              (h = u(
                                y +
                                  u(
                                    u(c[(e + 16) >> 2] * A) +
                                      u(c[(b + 16) >> 2] * l)
                                  )
                              )),
                              (c[(v + 16) >> 2] = h),
                              (y = u(
                                j +
                                  u(
                                    u(c[(e + 20) >> 2] * A) +
                                      u(c[(b + 20) >> 2] * l)
                                  )
                              )),
                              (c[(v + 20) >> 2] = y),
                              (A = u(
                                d +
                                  u(
                                    u(c[(e + 24) >> 2] * A) +
                                      u(c[(b + 24) >> 2] * l)
                                  )
                              )),
                              (c[(v + 24) >> 2] = A),
                              (c[(f + 140) >> 2] = A),
                              (c[(f + 136) >> 2] = y),
                              (c[(f + 132) >> 2] = h),
                              (i[(v + 12) >> 2] = 0),
                              (v = (v + 12) | 0),
                              (0 | (g = i[(a + 1736) >> 2])) == 8
                                ? _[i[(a + 76) >> 2]](
                                    (f + 132) | 0,
                                    (f + 112) | 0,
                                    (f + 96) | 0,
                                    v
                                  )
                                : _[0 | g](
                                    (f + 132) | 0,
                                    (f + 112) | 0,
                                    (f + 96) | 0,
                                    v,
                                    i[(a + 1896) >> 2]
                                  ),
                              i[v >> 2] | w[(a + 60) | 0] ||
                                ((0 | (v = i[(a + 1732) >> 2])) == 11
                                  ? _[i[(a + 12) >> 2]](100156)
                                  : _[0 | v](100156, i[(a + 1896) >> 2]),
                                (p[(a + 60) | 0] = 1)),
                              (p[(r + 14) | 0] = 1),
                              (p[(t + 14) | 0] = 1),
                              (p[
                                (i[i[(i[(t + 4) >> 2] + 4) >> 2] >> 2] + 14) | 0
                              ] = 1);
                          } else E0(a, t);
                        }
                        return (F = (f + 144) | 0), m2;
                      }
                      x0(i[(a + 68) >> 2]), (i[(a + 68) >> 2] = 0);
                    }
                    b2((a + 1740) | 0, 1), o2();
                  }
                  function y0(a, t, f, n, e, o) {
                    var b,
                      k,
                      s,
                      r = 0,
                      A = 0,
                      l = 0,
                      v = 0,
                      h = 0,
                      d = 0,
                      g = 0,
                      y = 0,
                      C = 0,
                      M = 0,
                      S = 0,
                      L = 0,
                      T = 0,
                      j = 0;
                    (F = b = (F - 80) | 0),
                      (i[(b + 76) >> 2] = t),
                      (s = (b + 55) | 0),
                      (k = (b + 56) | 0),
                      (t = 0);
                    i: {
                      a: for (;;) {
                        (0 | y) < 0 ||
                          (((2147483647 - y) | 0) < (0 | t)
                            ? ((i[613] = 61), (y = -1))
                            : (y = (t + y) | 0));
                        f: {
                          n: {
                            t: {
                              if (
                                ((v = i[(b + 76) >> 2]), (r = w[0 | (t = v)]))
                              )
                                for (;;) {
                                  b: {
                                    e: if ((r &= 255)) {
                                      if ((0 | r) != 37) break b;
                                      for (r = t; ; ) {
                                        if (w[(t + 1) | 0] != 37) break e;
                                        if (
                                          ((A = (t + 2) | 0),
                                          (i[(b + 76) >> 2] = A),
                                          (r = (r + 1) | 0),
                                          (h = w[(t + 2) | 0]),
                                          (t = A),
                                          (0 | h) != 37)
                                        )
                                          break;
                                      }
                                    } else r = t;
                                    if (((t = (r - v) | 0), a && X(a, v, t), t))
                                      continue a;
                                    (M = -1),
                                      (r = 1),
                                      (A = b),
                                      (t = i[(b + 76) >> 2]),
                                      (w[(t + 2) | 0] != 36) |
                                        ((p[(i[(b + 76) >> 2] + 1) | 0] -
                                          48) >>>
                                          0 >=
                                          10) ||
                                        ((M = (p[(t + 1) | 0] - 48) | 0),
                                        (L = 1),
                                        (r = 3)),
                                      (t = (r + t) | 0),
                                      (i[(A + 76) >> 2] = t),
                                      (C = 0);
                                    e: if (
                                      (A = ((l = p[0 | t]) - 32) | 0) >>> 0 >
                                      31
                                    )
                                      r = t;
                                    else if (((r = t), 75913 & (A = 1 << A)))
                                      for (;;) {
                                        if (
                                          ((r = (t + 1) | 0),
                                          (i[(b + 76) >> 2] = r),
                                          (C |= A),
                                          (A =
                                            ((l = p[(t + 1) | 0]) - 32) | 0) >>>
                                            0 >=
                                            32)
                                        )
                                          break e;
                                        if (((t = r), !(75913 & (A = 1 << A))))
                                          break;
                                      }
                                    e: if ((0 | l) != 42) {
                                      if ((0 | (d = w1((b + 76) | 0))) < 0)
                                        break t;
                                      t = i[(b + 76) >> 2];
                                    } else {
                                      if (
                                        ((A = b),
                                        (p[(r + 1) | 0] - 48) >>> 0 >= 10 ||
                                          ((t = i[(b + 76) >> 2]),
                                          w[(t + 2) | 0] != 36))
                                      ) {
                                        if (L) break t;
                                        (L = 0),
                                          (d = 0),
                                          a &&
                                            ((t = i[f >> 2]),
                                            (i[f >> 2] = t + 4),
                                            (d = i[t >> 2])),
                                          (t = (i[(b + 76) >> 2] + 1) | 0);
                                      } else
                                        (i[
                                          ((((p[(t + 1) | 0] << 2) + e) | 0) -
                                            192) >>
                                            2
                                        ] = 10),
                                          (d =
                                            i[
                                              ((((p[(t + 1) | 0] << 3) + n) |
                                                0) -
                                                384) >>
                                                2
                                            ]),
                                          (L = 1),
                                          (t = (t + 3) | 0);
                                      if (
                                        ((i[(A + 76) >> 2] = t), (0 | d) > -1)
                                      )
                                        break e;
                                      (d = (0 - d) | 0), (C |= 8192);
                                    }
                                    h = -1;
                                    e: if (w[0 | t] == 46)
                                      if (w[(t + 1) | 0] != 42)
                                        (i[(b + 76) >> 2] = t + 1),
                                          (h = w1((b + 76) | 0)),
                                          (t = i[(b + 76) >> 2]);
                                      else {
                                        if (
                                          !(
                                            (p[(t + 2) | 0] - 48) >>> 0 >=
                                            10
                                          ) &&
                                          ((t = i[(b + 76) >> 2]),
                                          w[(t + 3) | 0] == 36)
                                        ) {
                                          (i[
                                            ((((p[(t + 2) | 0] << 2) + e) | 0) -
                                              192) >>
                                              2
                                          ] = 10),
                                            (h =
                                              i[
                                                ((((p[(t + 2) | 0] << 3) + n) |
                                                  0) -
                                                  384) >>
                                                  2
                                              ]),
                                            (t = (t + 4) | 0),
                                            (i[(b + 76) >> 2] = t);
                                          break e;
                                        }
                                        if (L) break t;
                                        a
                                          ? ((t = i[f >> 2]),
                                            (i[f >> 2] = t + 4),
                                            (h = i[t >> 2]))
                                          : (h = 0),
                                          (t = (i[(b + 76) >> 2] + 2) | 0),
                                          (i[(b + 76) >> 2] = t);
                                      }
                                    for (r = 0; ; ) {
                                      if (
                                        ((S = r),
                                        (g = -1),
                                        (p[0 | t] - 65) >>> 0 > 57)
                                      )
                                        break i;
                                      if (
                                        ((l = (t + 1) | 0),
                                        (i[(b + 76) >> 2] = l),
                                        (r = p[0 | t]),
                                        (t = l),
                                        !(
                                          ((r =
                                            w[
                                              (1103 + ((r + Q(S, 58)) | 0)) | 0
                                            ]) -
                                            1) >>>
                                            0 <
                                          8
                                        ))
                                      )
                                        break;
                                    }
                                    e: {
                                      c: {
                                        if ((0 | r) != 19) {
                                          if (!r) break i;
                                          if ((0 | M) >= 0) {
                                            (i[((M << 2) + e) >> 2] = r),
                                              (r =
                                                i[
                                                  (4 +
                                                    (t = ((M << 3) + n) | 0)) >>
                                                    2
                                                ]),
                                              (i[(b + 64) >> 2] = i[t >> 2]),
                                              (i[(b + 68) >> 2] = r);
                                            break c;
                                          }
                                          if (!a) break f;
                                          A1((b - -64) | 0, r, f),
                                            (l = i[(b + 76) >> 2]);
                                          break e;
                                        }
                                        if ((0 | M) > -1) break i;
                                      }
                                      if (((t = 0), !a)) continue a;
                                    }
                                    (A = -65537 & C),
                                      (r = 8192 & C ? A : C),
                                      (g = 0),
                                      (M = 1024),
                                      (C = k);
                                    e: {
                                      c: {
                                        u: {
                                          o: {
                                            A: {
                                              r: {
                                                k: {
                                                  s: {
                                                    l: {
                                                      v: {
                                                        h: {
                                                          d: {
                                                            p: {
                                                              m: {
                                                                g: {
                                                                  switch (
                                                                    ((t =
                                                                      p[
                                                                        (l -
                                                                          1) |
                                                                          0
                                                                      ]),
                                                                    ((t =
                                                                      S &&
                                                                      (15 &
                                                                        t) ==
                                                                        3
                                                                        ? -33 &
                                                                          t
                                                                        : t) -
                                                                      88) |
                                                                      0)
                                                                  ) {
                                                                    case 11:
                                                                      break e;
                                                                    case 9:
                                                                    case 13:
                                                                    case 14:
                                                                    case 15:
                                                                      break c;
                                                                    case 27:
                                                                      break k;
                                                                    case 12:
                                                                    case 17:
                                                                      break v;
                                                                    case 23:
                                                                      break h;
                                                                    case 0:
                                                                    case 32:
                                                                      break d;
                                                                    case 24:
                                                                      break p;
                                                                    case 22:
                                                                      break m;
                                                                    case 29:
                                                                      break g;
                                                                    case 1:
                                                                    case 2:
                                                                    case 3:
                                                                    case 4:
                                                                    case 5:
                                                                    case 6:
                                                                    case 7:
                                                                    case 8:
                                                                    case 10:
                                                                    case 16:
                                                                    case 18:
                                                                    case 19:
                                                                    case 20:
                                                                    case 21:
                                                                    case 25:
                                                                    case 26:
                                                                    case 28:
                                                                    case 30:
                                                                    case 31:
                                                                      break n;
                                                                  }
                                                                  switch (
                                                                    (t - 65) |
                                                                    0
                                                                  ) {
                                                                    case 0:
                                                                    case 4:
                                                                    case 5:
                                                                    case 6:
                                                                      break c;
                                                                    case 2:
                                                                      break A;
                                                                    case 1:
                                                                    case 3:
                                                                      break n;
                                                                  }
                                                                  if (
                                                                    (0 | t) ==
                                                                    83
                                                                  )
                                                                    break r;
                                                                  break n;
                                                                }
                                                                (l =
                                                                  i[
                                                                    (b + 64) >>
                                                                      2
                                                                  ]),
                                                                  (A =
                                                                    i[
                                                                      (b +
                                                                        68) >>
                                                                        2
                                                                    ]),
                                                                  (M = 1024);
                                                                break l;
                                                              }
                                                              t = 0;
                                                              m: switch (
                                                                255 & S
                                                              ) {
                                                                case 0:
                                                                case 1:
                                                                case 6:
                                                                  i[
                                                                    i[
                                                                      (b +
                                                                        64) >>
                                                                        2
                                                                    ] >> 2
                                                                  ] = y;
                                                                  continue a;
                                                                case 2:
                                                                  (r =
                                                                    i[
                                                                      (b +
                                                                        64) >>
                                                                        2
                                                                    ]),
                                                                    (i[r >> 2] =
                                                                      y),
                                                                    (i[
                                                                      (r + 4) >>
                                                                        2
                                                                    ] =
                                                                      y >> 31);
                                                                  continue a;
                                                                case 3:
                                                                  c2[
                                                                    i[
                                                                      (b +
                                                                        64) >>
                                                                        2
                                                                    ] >> 1
                                                                  ] = y;
                                                                  continue a;
                                                                case 4:
                                                                  p[
                                                                    i[
                                                                      (b +
                                                                        64) >>
                                                                        2
                                                                    ]
                                                                  ] = y;
                                                                  continue a;
                                                                case 7:
                                                                  break m;
                                                                default:
                                                                  continue a;
                                                              }
                                                              (r =
                                                                i[
                                                                  (b + 64) >> 2
                                                                ]),
                                                                (i[r >> 2] = y),
                                                                (i[
                                                                  (r + 4) >> 2
                                                                ] = y >> 31);
                                                              continue a;
                                                            }
                                                            (h =
                                                              h >>> 0 > 8
                                                                ? h
                                                                : 8),
                                                              (r |= 8),
                                                              (t = 120);
                                                          }
                                                          if (
                                                            ((v = k),
                                                            (T = 32 & t),
                                                            (A = S =
                                                              i[
                                                                (b + 68) >> 2
                                                              ]) |
                                                              (l =
                                                                i[
                                                                  (b + 64) >> 2
                                                                ]))
                                                          )
                                                            for (
                                                              ;
                                                              (p[
                                                                0 |
                                                                  (v =
                                                                    (v - 1) | 0)
                                                              ] =
                                                                T |
                                                                w[
                                                                  (1632 +
                                                                    (15 & l)) |
                                                                    0
                                                                ]),
                                                                (j =
                                                                  (!A &
                                                                    (l >>> 0 >
                                                                      15)) |
                                                                  ((0 | A) !=
                                                                    0)),
                                                                (S = A),
                                                                (A =
                                                                  (A >>> 4) |
                                                                  0),
                                                                (l =
                                                                  ((15 & S) <<
                                                                    28) |
                                                                  (l >>> 4)),
                                                                j;

                                                            );
                                                          if (
                                                            !(
                                                              i[(b + 64) >> 2] |
                                                              i[(b + 68) >> 2]
                                                            ) | !(8 & r)
                                                          )
                                                            break s;
                                                          (M =
                                                            (1024 +
                                                              ((t >>> 4) | 0)) |
                                                            0),
                                                            (g = 2);
                                                          break s;
                                                        }
                                                        if (
                                                          ((t = k),
                                                          (A = v =
                                                            i[(b + 68) >> 2]) |
                                                            (l =
                                                              i[(b + 64) >> 2]))
                                                        )
                                                          for (
                                                            ;
                                                            (p[
                                                              0 |
                                                                (t =
                                                                  (t - 1) | 0)
                                                            ] = (7 & l) | 48),
                                                              (S =
                                                                (!A &
                                                                  (l >>> 0 >
                                                                    7)) |
                                                                ((0 | A) != 0)),
                                                              (v = A),
                                                              (A =
                                                                (A >>> 3) | 0),
                                                              (l =
                                                                ((7 & v) <<
                                                                  29) |
                                                                (l >>> 3)),
                                                              S;

                                                          );
                                                        if (((v = t), !(8 & r)))
                                                          break s;
                                                        h =
                                                          (0 |
                                                            (t = (k - v) | 0)) <
                                                          (0 | h)
                                                            ? h
                                                            : (t + 1) | 0;
                                                        break s;
                                                      }
                                                      (A = t =
                                                        i[(b + 68) >> 2]),
                                                        (l = i[(b + 64) >> 2]),
                                                        (0 | t) < -1 ||
                                                        (0 | t) <= -1
                                                          ? ((A =
                                                              (0 -
                                                                ((A +
                                                                  ((0 | l) !=
                                                                    0)) |
                                                                  0)) |
                                                              0),
                                                            (l = (0 - l) | 0),
                                                            (i[(b + 64) >> 2] =
                                                              l),
                                                            (i[(b + 68) >> 2] =
                                                              A),
                                                            (g = 1),
                                                            (M = 1024))
                                                          : 2048 & r
                                                          ? ((g = 1),
                                                            (M = 1025))
                                                          : (M = (g = 1 & r)
                                                              ? 1026
                                                              : 1024);
                                                    }
                                                    v = z2(l, A, k);
                                                  }
                                                  if (
                                                    ((r =
                                                      (0 | h) > -1
                                                        ? -65537 & r
                                                        : r),
                                                    (A = t = i[(b + 68) >> 2]),
                                                    !(
                                                      h |
                                                      ((0 |
                                                        (l =
                                                          i[(b + 64) >> 2])) !=
                                                        0) |
                                                      ((0 | t) != 0)
                                                    ))
                                                  ) {
                                                    (h = 0), (v = k);
                                                    break n;
                                                  }
                                                  h =
                                                    (0 |
                                                      (t =
                                                        (!(A | l) +
                                                          ((k - v) | 0)) |
                                                        0)) <
                                                    (0 | h)
                                                      ? h
                                                      : t;
                                                  break n;
                                                }
                                                C = (0 | (t = h)) != 0;
                                                k: {
                                                  s: {
                                                    l: {
                                                      v: if (
                                                        !(
                                                          !(
                                                            3 &
                                                            (r = v =
                                                              (r =
                                                                i[
                                                                  (b + 64) >> 2
                                                                ]) || 1071)
                                                          ) | !t
                                                        )
                                                      )
                                                        for (;;) {
                                                          if (!w[0 | r])
                                                            break l;
                                                          if (
                                                            ((C =
                                                              (0 |
                                                                (t =
                                                                  (t - 1) |
                                                                  0)) !=
                                                              0),
                                                            !(
                                                              3 &
                                                              (r = (r + 1) | 0)
                                                            ))
                                                          )
                                                            break v;
                                                          if (!t) break;
                                                        }
                                                      if (!C) break s;
                                                    }
                                                    l: if (
                                                      !(
                                                        !w[0 | r] |
                                                        (t >>> 0 < 4)
                                                      )
                                                    )
                                                      for (;;) {
                                                        if (
                                                          (-1 ^
                                                            (l = i[r >> 2])) &
                                                          (l - 16843009) &
                                                          -2139062144
                                                        )
                                                          break l;
                                                        if (
                                                          ((r = (r + 4) | 0),
                                                          !(
                                                            (t =
                                                              (t - 4) | 0) >>>
                                                              0 >
                                                            3
                                                          ))
                                                        )
                                                          break;
                                                      }
                                                    if (t)
                                                      for (;;) {
                                                        if (
                                                          ((l = r), !w[0 | r])
                                                        )
                                                          break k;
                                                        if (
                                                          ((r = (r + 1) | 0),
                                                          !(t = (t - 1) | 0))
                                                        )
                                                          break;
                                                      }
                                                  }
                                                  l = 0;
                                                }
                                                (C = l || (h + v) | 0),
                                                  (r = A),
                                                  (h = l ? (l - v) | 0 : h);
                                                break n;
                                              }
                                              if (((A = i[(b + 64) >> 2]), h))
                                                break o;
                                              (t = 0), a2(a, 32, d, 0, r);
                                              break u;
                                            }
                                            (i[(b + 12) >> 2] = 0),
                                              (i[(b + 8) >> 2] =
                                                i[(b + 64) >> 2]),
                                              (i[(b + 64) >> 2] = b + 8),
                                              (h = -1),
                                              (A = (b + 8) | 0);
                                          }
                                          t = 0;
                                          o: {
                                            for (;;) {
                                              if (!(v = i[A >> 2])) break o;
                                              if (
                                                !(
                                                  (l =
                                                    (0 |
                                                      (v = v1(
                                                        (b + 4) | 0,
                                                        v
                                                      ))) <
                                                    0) |
                                                  (v >>> 0 > (h - t) >>> 0)
                                                )
                                              ) {
                                                if (
                                                  ((A = (A + 4) | 0),
                                                  h >>> 0 >
                                                    (t = (t + v) | 0) >>> 0)
                                                )
                                                  continue;
                                                break o;
                                              }
                                              break;
                                            }
                                            if (((g = -1), l)) break i;
                                          }
                                          if ((a2(a, 32, d, t, r), t))
                                            for (
                                              A = 0, l = i[(b + 64) >> 2];
                                              ;

                                            ) {
                                              if (
                                                !(v = i[l >> 2]) ||
                                                (0 |
                                                  (A =
                                                    ((v = v1((b + 4) | 0, v)) +
                                                      A) |
                                                    0)) >
                                                  (0 | t)
                                              )
                                                break u;
                                              if (
                                                (X(a, (b + 4) | 0, v),
                                                (l = (l + 4) | 0),
                                                !(t >>> 0 > A >>> 0))
                                              )
                                                break;
                                            }
                                          else t = 0;
                                        }
                                        a2(a, 32, d, t, 8192 ^ r),
                                          (t = (0 | t) < (0 | d) ? d : t);
                                        continue a;
                                      }
                                      t =
                                        0 |
                                        _[0 | o](
                                          a,
                                          $[(b + 64) >> 3],
                                          d,
                                          h,
                                          r,
                                          t
                                        );
                                      continue a;
                                    }
                                    (p[(b + 55) | 0] = i[(b + 64) >> 2]),
                                      (h = 1),
                                      (v = s),
                                      (r = A);
                                    break n;
                                  }
                                  (A = (t + 1) | 0),
                                    (i[(b + 76) >> 2] = A),
                                    (r = w[(t + 1) | 0]),
                                    (t = A);
                                }
                              if (((g = y), a)) break i;
                              if (!L) break f;
                              for (t = 1; ; ) {
                                if ((a = i[((t << 2) + e) >> 2])) {
                                  if (
                                    (A1(((t << 3) + n) | 0, a, f),
                                    (g = 1),
                                    (0 | (t = (t + 1) | 0)) != 10)
                                  )
                                    continue;
                                  break i;
                                }
                                break;
                              }
                              if (((g = 1), t >>> 0 >= 10)) break i;
                              for (;;) {
                                if (i[((t << 2) + e) >> 2]) break t;
                                if ((0 | (t = (t + 1) | 0)) == 10) break;
                              }
                              break i;
                            }
                            g = -1;
                            break i;
                          }
                          a2(
                            a,
                            32,
                            (t =
                              (0 |
                                (A =
                                  ((h =
                                    (0 | (l = (C - v) | 0)) > (0 | h) ? l : h) +
                                    g) |
                                  0)) >
                              (0 | d)
                                ? A
                                : d),
                            A,
                            r
                          ),
                            X(a, M, g),
                            a2(a, 48, t, A, 65536 ^ r),
                            a2(a, 48, h, l, 0),
                            X(a, v, l),
                            a2(a, 32, t, A, 8192 ^ r);
                          continue;
                        }
                        break;
                      }
                      g = 0;
                    }
                    return (F = (b + 80) | 0), g;
                  }
                  function s0(a, t) {
                    var f,
                      n = 0,
                      e = 0,
                      o = 0,
                      b = 0,
                      k = u(0),
                      s = 0,
                      r = u(0),
                      A = 0,
                      l = 0,
                      v = 0;
                    (F = f = (F + -64) | 0),
                      (i[(a + 72) >> 2] = t),
                      (n = o = i[(t + 8) >> 2]);
                    i: {
                      a: {
                        f: {
                          for (;;) {
                            if ((e = i[(n + 24) >> 2])) break f;
                            if ((0 | o) == (0 | (n = i[(n + 8) >> 2]))) break;
                          }
                          for (
                            i[f >> 2] = i[(o + 4) >> 2],
                              o = n = i[(a - -64) >> 2];
                            (o = i[(o + 4) >> 2]),
                              (e = i[o >> 2]) &&
                                !(
                                  0 |
                                  _[i[(n + 16) >> 2]](i[(n + 12) >> 2], f, e)
                                );

                          );
                          if (
                            ((e = i[o >> 2]),
                            (o = i[i[(i[(e + 4) >> 2] + 8) >> 2] >> 2]),
                            (s = i[o >> 2]),
                            (b = i[e >> 2]),
                            V(
                              i[(i[(b + 4) >> 2] + 16) >> 2],
                              t,
                              i[(b + 16) >> 2]
                            ) == u(0))
                          ) {
                            if (
                              ((k = c[(t + 28) >> 2]),
                              (o = i[e >> 2]),
                              (n = i[(o + 16) >> 2]),
                              !(
                                (k != c[(n + 28) >> 2]) |
                                (c[(n + 32) >> 2] != c[(t + 32) >> 2])
                              ))
                            ) {
                              if (
                                ((e = i[(t + 8) >> 2]),
                                (i[(f + 40) >> 2] = 0),
                                (i[(f + 44) >> 2] = 0),
                                (i[(f + 32) >> 2] = 0),
                                (i[(f + 36) >> 2] = 0),
                                (t = i[287]),
                                (i[(f + 24) >> 2] = i[286]),
                                (i[(f + 28) >> 2] = t),
                                (t = i[285]),
                                (i[(f + 16) >> 2] = i[284]),
                                (i[(f + 20) >> 2] = t),
                                (i[(f + 32) >> 2] = i[(n + 12) >> 2]),
                                (i[(f + 36) >> 2] =
                                  i[(i[(e + 16) >> 2] + 12) >> 2]),
                                (c[(f + 52) >> 2] = c[(n + 16) >> 2]),
                                (c[(f + 56) >> 2] = c[(n + 20) >> 2]),
                                (c[(f + 60) >> 2] = c[(n + 24) >> 2]),
                                (i[(n + 12) >> 2] = 0),
                                (t = (n + 12) | 0),
                                (0 | (n = i[(a + 1736) >> 2])) == 8
                                  ? _[i[(a + 76) >> 2]](
                                      (f + 52) | 0,
                                      (f + 32) | 0,
                                      (f + 16) | 0,
                                      t
                                    )
                                  : _[0 | n](
                                      (f + 52) | 0,
                                      (f + 32) | 0,
                                      (f + 16) | 0,
                                      t,
                                      i[(a + 1896) >> 2]
                                    ),
                                i[t >> 2] || (i[t >> 2] = i[(f + 32) >> 2]),
                                z(o, e))
                              )
                                break a;
                              break i;
                            }
                            if (
                              ((b = i[(o + 4) >> 2]),
                              (n = i[(b + 16) >> 2]),
                              c[(n + 32) >> 2] != c[(t + 32) >> 2] ||
                                k != c[(n + 28) >> 2])
                            ) {
                              if (!n2(b)) break i;
                              if (w[(e + 15) | 0]) {
                                if (!i2(i[(o + 8) >> 2])) break i;
                                p[(e + 15) | 0] = 0;
                              }
                              if (!z(i[(t + 8) >> 2], o)) break i;
                              s0(a, t);
                              break a;
                            }
                            for (
                              ;
                              (e = i[i[(i[(e + 4) >> 2] + 4) >> 2] >> 2]),
                                (0 | n) ==
                                  i[(i[(i[e >> 2] + 4) >> 2] + 16) >> 2];

                            );
                            if (
                              ((o = i[i[(i[(e + 4) >> 2] + 8) >> 2] >> 2]),
                              (s = i[o >> 2]),
                              (b = i[(s + 4) >> 2]),
                              (n = i[(b + 8) >> 2]),
                              w[(o + 15) | 0])
                            ) {
                              if (
                                ((i[(s + 24) >> 2] = 0),
                                p2(i[(o + 4) >> 2]),
                                O(o),
                                !i2(b))
                              )
                                break i;
                              b = i[(i[(n + 4) >> 2] + 12) >> 2];
                            }
                            if (!z(i[(t + 8) >> 2], b)) break i;
                            (A = i[(b + 8) >> 2]),
                              (b = n),
                              (t = n),
                              (o = i[(i[(n + 4) >> 2] + 16) >> 2]),
                              (k = c[(o + 28) >> 2]),
                              (s = i[(n + 16) >> 2]),
                              (k < (r = c[(s + 28) >> 2])) |
                                (c[(o + 32) >> 2] <= c[(s + 32) >> 2]
                                  ? k == r
                                  : 0) || (t = 0),
                              F2(a, e, A, b, t, 1);
                            break a;
                          }
                          if (
                            ((l = w[(e + 12) | 0]),
                            (s = i[(s + 4) >> 2]),
                            (A = i[(s + 16) >> 2]),
                            (k = c[(A + 28) >> 2]),
                            (v = i[(i[(b + 4) >> 2] + 16) >> 2]),
                            (n = e),
                            k < (r = c[(v + 28) >> 2]) ||
                              (k == r &&
                                ((n = e),
                                c[(A + 32) >> 2] <= c[(v + 32) >> 2])) ||
                              (n = o),
                            w[(n + 15) | 0] || l)
                          ) {
                            n: {
                              if ((0 | n) == (0 | e)) {
                                if (
                                  (o = h2(
                                    i[(i[(t + 8) >> 2] + 4) >> 2],
                                    i[(b + 12) >> 2]
                                  ))
                                )
                                  break n;
                                break i;
                              }
                              if (
                                !(o = h2(
                                  i[(i[(s + 8) >> 2] + 4) >> 2],
                                  i[(t + 8) >> 2]
                                ))
                              )
                                break i;
                              o = i[(o + 4) >> 2];
                            }
                            if (w[(n + 15) | 0]) {
                              if (i2(i[n >> 2])) {
                                (i[n >> 2] = o),
                                  (p[(n + 15) | 0] = 0),
                                  (i[(o + 24) >> 2] = n),
                                  s0(a, t);
                                break a;
                              }
                              break i;
                            }
                            if (
                              !(n = H(16)) ||
                              ((i[n >> 2] = o),
                              (e = _0(i[(a - -64) >> 2], i[(e + 4) >> 2], n)),
                              (i[(n + 4) >> 2] = e),
                              !e)
                            )
                              break i;
                            (p[(n + 13) | 0] = 0),
                              (p[(n + 14) | 0] = 0),
                              (p[(n + 15) | 0] = 0),
                              (i[(o + 24) >> 2] = n),
                              (b = i[(a + 56) >> 2]),
                              (o =
                                (i[(i[n >> 2] + 28) >> 2] +
                                  i[(i[i[(e + 4) >> 2] >> 2] + 8) >> 2]) |
                                0),
                              (i[(n + 8) >> 2] = o);
                            n: {
                              t: switch ((b - 100130) | 0) {
                                case 0:
                                  e = 1 & o;
                                  break n;
                                case 1:
                                  e = (0 | o) != 0;
                                  break n;
                                case 2:
                                  e = (0 | o) > 0;
                                  break n;
                                case 3:
                                  e = (o >>> 31) | 0;
                                  break n;
                                case 4:
                                  break t;
                                default:
                                  break n;
                              }
                              e = (o + 1) >>> 0 > 2;
                            }
                            (p[(n + 12) | 0] = e), s0(a, t);
                            break a;
                          }
                          F2((n = a), e, (a = i[(t + 8) >> 2]), a, 0, 1);
                          break a;
                        }
                        for (
                          t = i[(i[e >> 2] + 16) >> 2];
                          (e = i[i[(i[(e + 4) >> 2] + 4) >> 2] >> 2]),
                            (n = i[e >> 2]),
                            (0 | t) == i[(n + 16) >> 2];

                        );
                        if (
                          w[(e + 15) | 0] &&
                          (!(t = h2(
                            i[
                              (i[i[i[(i[(e + 4) >> 2] + 8) >> 2] >> 2] >> 2] +
                                4) >>
                                2
                            ],
                            i[(n + 12) >> 2]
                          )) ||
                            !i2(i[e >> 2]) ||
                            ((i[e >> 2] = t),
                            (p[(e + 15) | 0] = 0),
                            (i[(t + 24) >> 2] = e),
                            !(e = i[i[(i[(e + 4) >> 2] + 4) >> 2] >> 2])))
                        )
                          break i;
                        if (
                          ((t = i[i[(i[(e + 4) >> 2] + 8) >> 2] >> 2]),
                          (n = i[t >> 2]),
                          (t = a0(a, t, 0)),
                          (0 | n) != (0 | (o = i[(t + 8) >> 2])))
                        )
                          F2(a, e, o, n, n, 1);
                        else {
                          if (
                            ((o = i[e >> 2]),
                            (A = i[i[(i[(e + 4) >> 2] + 8) >> 2] >> 2]),
                            (s = i[A >> 2]),
                            i[(i[(o + 4) >> 2] + 16) >> 2] !=
                              i[(i[(s + 4) >> 2] + 16) >> 2] && n1(a, e),
                            (v = 1),
                            (b = i[(a + 72) >> 2]),
                            (k = c[(b + 28) >> 2]),
                            (l = i[(o + 16) >> 2]),
                            !(
                              (k != c[(l + 28) >> 2]) |
                              (c[(l + 32) >> 2] != c[(b + 32) >> 2])
                            ))
                          ) {
                            if (!z(i[(i[(n + 4) >> 2] + 12) >> 2], o)) break i;
                            for (
                              n = i[(i[e >> 2] + 16) >> 2];
                              (e = i[i[(i[(e + 4) >> 2] + 4) >> 2] >> 2]),
                                (b = i[e >> 2]),
                                (0 | n) == i[(b + 16) >> 2];

                            );
                            if (
                              w[(e + 15) | 0] &&
                              (!(n = h2(
                                i[
                                  (i[
                                    i[i[(i[(e + 4) >> 2] + 8) >> 2] >> 2] >> 2
                                  ] +
                                    4) >>
                                    2
                                ],
                                i[(b + 12) >> 2]
                              )) ||
                                !i2(i[e >> 2]) ||
                                ((i[e >> 2] = n),
                                (p[(e + 15) | 0] = 0),
                                (i[(n + 24) >> 2] = e),
                                !(e = i[i[(i[(e + 4) >> 2] + 4) >> 2] >> 2])))
                            )
                              break i;
                            (b = i[i[(i[(e + 4) >> 2] + 8) >> 2] >> 2]),
                              (n = i[b >> 2]),
                              a0(a, b, A),
                              (b = i[(a + 72) >> 2]),
                              (k = c[(b + 28) >> 2]),
                              (v = 0);
                          }
                          f: {
                            if (
                              ((r = k),
                              (l = i[(s + 16) >> 2]),
                              (r != (k = c[(l + 28) >> 2])) |
                                (c[(l + 32) >> 2] != c[(b + 32) >> 2]))
                            ) {
                              if (v) break f;
                            } else {
                              if (!z(t, i[(i[(s + 4) >> 2] + 12) >> 2]))
                                break i;
                              t = a0(a, A, 0);
                            }
                            F2(a, e, i[(t + 8) >> 2], n, n, 1);
                            break a;
                          }
                          if (
                            ((n = i[(o + 16) >> 2]),
                            (r = c[(n + 28) >> 2]),
                            (!(c[(l + 32) >> 2] <= c[(n + 32) >> 2]) |
                              (k != r) &&
                              !(r > k)) ||
                              (o = i[(i[(s + 4) >> 2] + 12) >> 2]),
                            !(t = h2(i[(i[(t + 8) >> 2] + 4) >> 2], o)))
                          )
                            break i;
                          F2(a, e, t, (n = i[(t + 8) >> 2]), n, 0),
                            (p[(i[(i[(t + 4) >> 2] + 24) >> 2] + 15) | 0] = 1),
                            o1(a, e);
                        }
                      }
                      return void (F = (f - -64) | 0);
                    }
                    b2((a + 1740) | 0, 1), o2();
                  }
                  function t1(a) {
                    a |= 0;
                    var t,
                      f = 0,
                      n = 0,
                      e = 0,
                      o = u(0),
                      b = u(0),
                      k = 0,
                      s = 0,
                      r = u(0),
                      A = u(0),
                      l = u(0),
                      v = u(0),
                      h = 0,
                      d = u(0),
                      g = u(0),
                      y = u(0),
                      C = u(0),
                      M = u(0),
                      S = u(0),
                      L = u(0),
                      T = u(0),
                      j = 0,
                      D = 0,
                      K = u(0),
                      k2 = u(0),
                      m2 = 0,
                      f0 = 0,
                      P0 = 0,
                      B0 = 0,
                      T0 = 0,
                      j0 = 0,
                      F0 = 0,
                      U0 = 0;
                    (t = i[(a + 8) >> 2]),
                      (f = (F - 80) | 0),
                      (b = c[(a + 16) >> 2]),
                      (c[(f + 8) >> 2] = b),
                      (y = c[(a + 20) >> 2]),
                      (c[(f + 12) >> 2] = y),
                      (C = c[(a + 24) >> 2]),
                      (c[(f + 16) >> 2] = C);
                    i: if ((m2 = (b == u(0)) & (y == u(0)) & (C == u(0)))) {
                      if (
                        ((i[(f + 76) >> 2] = -42943038),
                        (i[(f + 68) >> 2] = -42943038),
                        (i[(f + 72) >> 2] = -42943038),
                        (i[(f + 64) >> 2] = 2104540610),
                        (i[(f + 56) >> 2] = 2104540610),
                        (i[(f + 60) >> 2] = 2104540610),
                        (f0 = (0 | (h = i[t >> 2])) == (0 | t)))
                      )
                        (g = u(-19999999867631625e21)),
                          (r = u(19999999867631625e21)),
                          (A = u(19999999867631625e21)),
                          (d = u(-19999999867631625e21)),
                          (l = u(19999999867631625e21)),
                          (v = u(-19999999867631625e21));
                      else {
                        for (
                          M = u(19999999867631625e21),
                            S = u(-19999999867631625e21),
                            L = u(-19999999867631625e21),
                            T = u(19999999867631625e21),
                            K = u(-19999999867631625e21),
                            k2 = u(19999999867631625e21),
                            g = u(-19999999867631625e21),
                            r = u(19999999867631625e21),
                            v = u(-19999999867631625e21),
                            l = u(19999999867631625e21),
                            d = u(-19999999867631625e21),
                            A = u(19999999867631625e21),
                            n = h;
                          (g = (e = (o = c[(n + 24) >> 2]) > g) ? o : g),
                            (S = e ? o : S),
                            (r = (j = o < r) ? o : r),
                            (M = j ? o : M),
                            (v = (k = (o = c[(n + 20) >> 2]) > v) ? o : v),
                            (L = k ? o : L),
                            (l = (D = o < l) ? o : l),
                            (T = D ? o : T),
                            (d = (s = (o = c[(n + 16) >> 2]) > d) ? o : d),
                            (K = s ? o : K),
                            (P0 = s ? n : P0),
                            (A = (s = o < A) ? o : A),
                            (k2 = s ? o : k2),
                            (B0 = s ? n : B0),
                            (T0 = e ? n : T0),
                            (j0 = j ? n : j0),
                            (F0 = k ? n : F0),
                            (U0 = D ? n : U0),
                            (0 | t) != (0 | (n = i[n >> 2]));

                        );
                        (i[(f + 20) >> 2] = B0),
                          (c[(f + 56) >> 2] = k2),
                          (c[(f + 68) >> 2] = K),
                          (i[(f + 32) >> 2] = P0),
                          (c[(f + 60) >> 2] = T),
                          (i[(f + 24) >> 2] = U0),
                          (c[(f + 72) >> 2] = L),
                          (i[(f + 36) >> 2] = F0),
                          (c[(f + 64) >> 2] = M),
                          (i[(f + 28) >> 2] = j0),
                          (c[(f + 76) >> 2] = S),
                          (i[(f + 40) >> 2] = T0);
                      }
                      if (
                        ((n = 2),
                        (e = (k = u(v - l) > u(d - A)) << 2),
                        (e =
                          u(g - r) >
                          u(
                            c[(e + ((f + 68) | 0)) >> 2] -
                              c[(e + ((f + 56) | 0)) >> 2]
                          )
                            ? 2
                            : k),
                        c[((k = e << 2) + ((f + 56) | 0)) >> 2] >=
                          c[(k + ((f + 68) | 0)) >> 2])
                      )
                        (i[(f + 8) >> 2] = 0), (i[(f + 12) >> 2] = 0);
                      else {
                        if (
                          ((n = i[((e <<= 2) + ((f + 20) | 0)) >> 2]),
                          (e = i[(e + ((f + 32) | 0)) >> 2]),
                          (S = c[(e + 16) >> 2]),
                          (l = u(c[(n + 16) >> 2] - S)),
                          (c[(f + 44) >> 2] = l),
                          (L = c[(e + 20) >> 2]),
                          (v = u(c[(n + 20) >> 2] - L)),
                          (c[(f + 48) >> 2] = v),
                          (T = c[(e + 24) >> 2]),
                          (o = u(c[(n + 24) >> 2] - T)),
                          (c[(f + 52) >> 2] = o),
                          !f0)
                        ) {
                          for (
                            M = u(0), n = h;
                            (r = u(c[(n + 20) >> 2] - L)),
                              (A = u(c[(n + 16) >> 2] - S)),
                              (g = u(u(l * r) - u(v * A))),
                              (d = u(c[(n + 24) >> 2] - T)),
                              (r = u(u(v * d) - u(o * r))),
                              (A = u(u(o * A) - u(l * d))),
                              (d = u(u(g * g) + u(u(r * r) + u(A * A)))) > M &&
                                ((C = g), (y = A), (M = d), (b = r)),
                              (0 | t) != (0 | (n = i[n >> 2]));

                          );
                          if (
                            ((c[(f + 16) >> 2] = C),
                            (c[(f + 12) >> 2] = y),
                            (c[(f + 8) >> 2] = b),
                            !(M <= u(0)))
                          )
                            break i;
                        }
                        (i[(f + 16) >> 2] = 0),
                          (i[(f + 8) >> 2] = 0),
                          (i[(f + 12) >> 2] = 0),
                          (n = (v < u(0) ? u(-v) : v) > (l < u(0) ? u(-l) : l)),
                          (b = c[(((f + 44) | 0) + (n << 2)) >> 2]),
                          (n =
                            (o < u(0) ? u(-o) : o) > (b < u(0) ? u(-b) : b)
                              ? 2
                              : n);
                      }
                      (i[(((f + 8) | 0) + (n << 2)) >> 2] = 1065353216),
                        (C = c[(f + 16) >> 2]),
                        (b = c[(f + 8) >> 2]),
                        (y = c[(f + 12) >> 2]);
                    } else h = i[t >> 2];
                    if (
                      ((e = (y < u(0) ? u(-y) : y) > (b < u(0) ? u(-b) : b)),
                      (b = c[(((f + 8) | 0) + (e << 2)) >> 2]),
                      (n = (a + 28) | 0),
                      (e =
                        (C < u(0) ? u(-C) : C) > (b < u(0) ? u(-b) : b)
                          ? 2
                          : e),
                      (i[(n + (k = e << 2)) >> 2] = 0),
                      (i[
                        ((s = ((e + 1) >>> 0) % 3 << 2) + n) >> 2
                      ] = 1065353216),
                      (i[((e = ((e + 2) >>> 0) % 3 << 2) + n) >> 2] = 0),
                      (i[((n = (a + 40) | 0) + k) >> 2] = 0),
                      (f = c[(k + ((f + 8) | 0)) >> 2] > u(0)),
                      (c[(n + s) >> 2] = u(f ? -0 : 0)),
                      (c[(n + e) >> 2] = u(f ? 1 : -1)),
                      !(e = (0 | t) == (0 | h)))
                    )
                      for (
                        n = h;
                        (f = i[(n + 20) >> 2]),
                          (i[(n + 28) >> 2] = i[(n + 16) >> 2]),
                          (i[(n + 32) >> 2] = f),
                          (0 | t) != (0 | (n = i[n >> 2]));

                      );
                    if (
                      m2 &&
                      (0 | (f = i[(t + 40) >> 2])) != (0 | (k = (t + 40) | 0))
                    ) {
                      for (b = u(0); ; ) {
                        if (
                          ((s = i[(f + 8) >> 2]), i[((n = s) + 28) >> 2] >= 1)
                        )
                          for (
                            ;
                            (j = i[(n + 16) >> 2]),
                              (D = i[(i[(n + 4) >> 2] + 16) >> 2]),
                              (b = u(
                                b +
                                  u(
                                    u(c[(j + 28) >> 2] - c[(D + 28) >> 2]) *
                                      u(c[(j + 32) >> 2] + c[(D + 32) >> 2])
                                  )
                              )),
                              (0 | s) != (0 | (n = i[(n + 12) >> 2]));

                          );
                        if ((0 | k) == (0 | (f = i[f >> 2]))) break;
                      }
                      if (b < u(0)) {
                        if (!e)
                          for (
                            ;
                            (c[(h + 32) >> 2] = -c[(h + 32) >> 2]),
                              (0 | (h = i[h >> 2])) != (0 | t);

                          );
                        (c[(a + 40) >> 2] = -c[(a + 40) >> 2]),
                          (c[(a + 44) >> 2] = -c[(a + 44) >> 2]),
                          (c[(a + 48) >> 2] = -c[(a + 48) >> 2]);
                      }
                    }
                  }
                  function O(a) {
                    var t = 0,
                      f = 0,
                      n = 0,
                      e = 0,
                      o = 0,
                      b = 0,
                      k = 0,
                      s = 0,
                      r = 0;
                    i: if ((a |= 0)) {
                      o =
                        ((n = (a - 8) | 0) + (a = -8 & (t = i[(a - 4) >> 2]))) |
                        0;
                      a: if (!(1 & t)) {
                        if (
                          !(3 & t) ||
                          (n = (n - (t = i[n >> 2])) | 0) >>> 0 < T2[618]
                        )
                          break i;
                        if (((a = (a + t) | 0), i[619] == (0 | n))) {
                          if ((3 & (t = i[(o + 4) >> 2])) == 3)
                            return (
                              (i[616] = a),
                              (i[(o + 4) >> 2] = -2 & t),
                              (i[(n + 4) >> 2] = 1 | a),
                              void (i[(a + n) >> 2] = a)
                            );
                        } else {
                          if (t >>> 0 <= 255) {
                            if (
                              ((e = i[(n + 8) >> 2]),
                              (t = (t >>> 3) | 0),
                              (0 | (f = i[(n + 12) >> 2])) == (0 | e))
                            ) {
                              (s = 2456), (r = i[614] & f2(t)), (i[s >> 2] = r);
                              break a;
                            }
                            (i[(e + 12) >> 2] = f), (i[(f + 8) >> 2] = e);
                            break a;
                          }
                          if (
                            ((k = i[(n + 24) >> 2]),
                            (0 | n) == (0 | (t = i[(n + 12) >> 2])))
                          )
                            if (
                              (f = i[(e = (n + 20) | 0) >> 2]) ||
                              (f = i[(e = (n + 16) | 0) >> 2])
                            ) {
                              for (
                                ;
                                (b = e),
                                  (f = i[(e = ((t = f) + 20) | 0) >> 2]) ||
                                    ((e = (t + 16) | 0),
                                    (f = i[(t + 16) >> 2]));

                              );
                              i[b >> 2] = 0;
                            } else t = 0;
                          else
                            (f = i[(n + 8) >> 2]),
                              (i[(f + 12) >> 2] = t),
                              (i[(t + 8) >> 2] = f);
                          if (!k) break a;
                          e = i[(n + 28) >> 2];
                          f: {
                            if (
                              i[(f = (2760 + (e << 2)) | 0) >> 2] ==
                              (0 | n)
                            ) {
                              if (((i[f >> 2] = t), t)) break f;
                              (s = 2460), (r = i[615] & f2(e)), (i[s >> 2] = r);
                              break a;
                            }
                            if (
                              ((i[
                                (k + (i[(k + 16) >> 2] == (0 | n) ? 16 : 20)) >>
                                  2
                              ] = t),
                              !t)
                            )
                              break a;
                          }
                          if (
                            ((i[(t + 24) >> 2] = k),
                            (f = i[(n + 16) >> 2]) &&
                              ((i[(t + 16) >> 2] = f), (i[(f + 24) >> 2] = t)),
                            !(f = i[(n + 20) >> 2]))
                          )
                            break a;
                          (i[(t + 20) >> 2] = f), (i[(f + 24) >> 2] = t);
                        }
                      }
                      if (!(n >>> 0 >= o >>> 0) && 1 & (t = i[(o + 4) >> 2])) {
                        a: {
                          if (!(2 & t)) {
                            if (i[620] == (0 | o)) {
                              if (
                                ((i[620] = n),
                                (a = (i[617] + a) | 0),
                                (i[617] = a),
                                (i[(n + 4) >> 2] = 1 | a),
                                i[619] != (0 | n))
                              )
                                break i;
                              return (i[616] = 0), void (i[619] = 0);
                            }
                            if (i[619] == (0 | o))
                              return (
                                (i[619] = n),
                                (a = (i[616] + a) | 0),
                                (i[616] = a),
                                (i[(n + 4) >> 2] = 1 | a),
                                void (i[(a + n) >> 2] = a)
                              );
                            a = ((-8 & t) + a) | 0;
                            f: if (t >>> 0 <= 255) {
                              if (
                                ((e = i[(o + 8) >> 2]),
                                (t = (t >>> 3) | 0),
                                (0 | (f = i[(o + 12) >> 2])) == (0 | e))
                              ) {
                                (s = 2456),
                                  (r = i[614] & f2(t)),
                                  (i[s >> 2] = r);
                                break f;
                              }
                              (i[(e + 12) >> 2] = f), (i[(f + 8) >> 2] = e);
                            } else {
                              if (
                                ((k = i[(o + 24) >> 2]),
                                (0 | o) == (0 | (t = i[(o + 12) >> 2])))
                              )
                                if (
                                  (f = i[(e = (o + 20) | 0) >> 2]) ||
                                  (f = i[(e = (o + 16) | 0) >> 2])
                                ) {
                                  for (
                                    ;
                                    (b = e),
                                      (f = i[(e = ((t = f) + 20) | 0) >> 2]) ||
                                        ((e = (t + 16) | 0),
                                        (f = i[(t + 16) >> 2]));

                                  );
                                  i[b >> 2] = 0;
                                } else t = 0;
                              else
                                (f = i[(o + 8) >> 2]),
                                  (i[(f + 12) >> 2] = t),
                                  (i[(t + 8) >> 2] = f);
                              if (k) {
                                e = i[(o + 28) >> 2];
                                n: {
                                  if (
                                    i[(f = (2760 + (e << 2)) | 0) >> 2] ==
                                    (0 | o)
                                  ) {
                                    if (((i[f >> 2] = t), t)) break n;
                                    (s = 2460),
                                      (r = i[615] & f2(e)),
                                      (i[s >> 2] = r);
                                    break f;
                                  }
                                  if (
                                    ((i[
                                      (k +
                                        (i[(k + 16) >> 2] == (0 | o)
                                          ? 16
                                          : 20)) >>
                                        2
                                    ] = t),
                                    !t)
                                  )
                                    break f;
                                }
                                (i[(t + 24) >> 2] = k),
                                  (f = i[(o + 16) >> 2]) &&
                                    ((i[(t + 16) >> 2] = f),
                                    (i[(f + 24) >> 2] = t)),
                                  (f = i[(o + 20) >> 2]) &&
                                    ((i[(t + 20) >> 2] = f),
                                    (i[(f + 24) >> 2] = t));
                              }
                            }
                            if (
                              ((i[(n + 4) >> 2] = 1 | a),
                              (i[(a + n) >> 2] = a),
                              i[619] != (0 | n))
                            )
                              break a;
                            return void (i[616] = a);
                          }
                          (i[(o + 4) >> 2] = -2 & t),
                            (i[(n + 4) >> 2] = 1 | a),
                            (i[(a + n) >> 2] = a);
                        }
                        if (a >>> 0 <= 255)
                          return (
                            (t = (2496 + ((a = (a >>> 3) | 0) << 3)) | 0),
                            (f = i[614]) & (a = 1 << a)
                              ? (a = i[(t + 8) >> 2])
                              : ((i[614] = a | f), (a = t)),
                            (i[(t + 8) >> 2] = n),
                            (i[(a + 12) >> 2] = n),
                            (i[(n + 12) >> 2] = t),
                            void (i[(n + 8) >> 2] = a)
                          );
                        (e = 31),
                          (i[(n + 16) >> 2] = 0),
                          (i[(n + 20) >> 2] = 0),
                          a >>> 0 <= 16777215 &&
                            ((t = (a >>> 8) | 0),
                            (t <<= b = ((t + 1048320) >>> 16) & 8),
                            (e =
                              (28 +
                                (((t =
                                  (((((t <<= e = ((t + 520192) >>> 16) & 4) <<
                                    (f = ((t + 245760) >>> 16) & 2)) >>>
                                    15) |
                                    0) -
                                    (f | e | b)) |
                                  0) <<
                                  1) |
                                  ((a >>> (t + 21)) & 1))) |
                              0)),
                          (i[(n + 28) >> 2] = e),
                          (b = (2760 + (e << 2)) | 0);
                        a: {
                          f: {
                            if ((f = i[615]) & (t = 1 << e)) {
                              for (
                                e =
                                  a <<
                                  ((0 | e) == 31
                                    ? 0
                                    : (25 - ((e >>> 1) | 0)) | 0),
                                  t = i[b >> 2];
                                ;

                              ) {
                                if (
                                  ((f = t), (-8 & i[(t + 4) >> 2]) == (0 | a))
                                )
                                  break f;
                                if (
                                  ((t = (e >>> 29) | 0),
                                  (e <<= 1),
                                  !(t = i[(16 + (b = (f + (4 & t)) | 0)) >> 2]))
                                )
                                  break;
                              }
                              (i[(b + 16) >> 2] = n), (i[(n + 24) >> 2] = f);
                            } else
                              (i[615] = t | f),
                                (i[b >> 2] = n),
                                (i[(n + 24) >> 2] = b);
                            (i[(n + 12) >> 2] = n), (i[(n + 8) >> 2] = n);
                            break a;
                          }
                          (a = i[(f + 8) >> 2]),
                            (i[(a + 12) >> 2] = n),
                            (i[(f + 8) >> 2] = n),
                            (i[(n + 24) >> 2] = 0),
                            (i[(n + 12) >> 2] = f),
                            (i[(n + 8) >> 2] = a);
                        }
                        (a = (i[622] - 1) | 0), (i[622] = a || -1);
                      }
                    }
                  }
                  function e1(a, t) {
                    var f,
                      n = 0,
                      e = 0,
                      o = 0,
                      b = 0,
                      k = 0,
                      s = 0,
                      r = 0;
                    f = (a + t) | 0;
                    i: {
                      a: if (!(1 & (n = i[(a + 4) >> 2]))) {
                        if (!(3 & n)) break i;
                        t = ((n = i[a >> 2]) + t) | 0;
                        f: {
                          if ((0 | (a = (a - n) | 0)) != i[619]) {
                            if (n >>> 0 <= 255) {
                              if (
                                ((o = i[(a + 8) >> 2]),
                                (n = (n >>> 3) | 0),
                                (0 | (e = i[(a + 12) >> 2])) != (0 | o))
                              )
                                break f;
                              (s = 2456), (r = i[614] & f2(n)), (i[s >> 2] = r);
                              break a;
                            }
                            if (
                              ((k = i[(a + 24) >> 2]),
                              (0 | (n = i[(a + 12) >> 2])) == (0 | a))
                            )
                              if (
                                (e = i[(o = (a + 20) | 0) >> 2]) ||
                                (e = i[(o = (a + 16) | 0) >> 2])
                              ) {
                                for (
                                  ;
                                  (b = o),
                                    (e = i[(o = ((n = e) + 20) | 0) >> 2]) ||
                                      ((o = (n + 16) | 0),
                                      (e = i[(n + 16) >> 2]));

                                );
                                i[b >> 2] = 0;
                              } else n = 0;
                            else
                              (e = i[(a + 8) >> 2]),
                                (i[(e + 12) >> 2] = n),
                                (i[(n + 8) >> 2] = e);
                            if (!k) break a;
                            o = i[(a + 28) >> 2];
                            n: {
                              if (
                                i[(e = (2760 + (o << 2)) | 0) >> 2] ==
                                (0 | a)
                              ) {
                                if (((i[e >> 2] = n), n)) break n;
                                (s = 2460),
                                  (r = i[615] & f2(o)),
                                  (i[s >> 2] = r);
                                break a;
                              }
                              if (
                                ((i[
                                  (k +
                                    (i[(k + 16) >> 2] == (0 | a) ? 16 : 20)) >>
                                    2
                                ] = n),
                                !n)
                              )
                                break a;
                            }
                            if (
                              ((i[(n + 24) >> 2] = k),
                              (e = i[(a + 16) >> 2]) &&
                                ((i[(n + 16) >> 2] = e),
                                (i[(e + 24) >> 2] = n)),
                              !(e = i[(a + 20) >> 2]))
                            )
                              break a;
                            (i[(n + 20) >> 2] = e), (i[(e + 24) >> 2] = n);
                            break a;
                          }
                          if ((3 & (n = i[(f + 4) >> 2])) != 3) break a;
                          return (
                            (i[616] = t),
                            (i[(f + 4) >> 2] = -2 & n),
                            (i[(a + 4) >> 2] = 1 | t),
                            void (i[f >> 2] = t)
                          );
                        }
                        (i[(o + 12) >> 2] = e), (i[(e + 8) >> 2] = o);
                      }
                      a: {
                        if (!(2 & (n = i[(f + 4) >> 2]))) {
                          if (i[620] == (0 | f)) {
                            if (
                              ((i[620] = a),
                              (t = (i[617] + t) | 0),
                              (i[617] = t),
                              (i[(a + 4) >> 2] = 1 | t),
                              i[619] != (0 | a))
                            )
                              break i;
                            return (i[616] = 0), void (i[619] = 0);
                          }
                          if (i[619] == (0 | f))
                            return (
                              (i[619] = a),
                              (t = (i[616] + t) | 0),
                              (i[616] = t),
                              (i[(a + 4) >> 2] = 1 | t),
                              void (i[(a + t) >> 2] = t)
                            );
                          t = ((-8 & n) + t) | 0;
                          f: if (n >>> 0 <= 255) {
                            if (
                              ((o = i[(f + 8) >> 2]),
                              (n = (n >>> 3) | 0),
                              (0 | (e = i[(f + 12) >> 2])) == (0 | o))
                            ) {
                              (s = 2456), (r = i[614] & f2(n)), (i[s >> 2] = r);
                              break f;
                            }
                            (i[(o + 12) >> 2] = e), (i[(e + 8) >> 2] = o);
                          } else {
                            if (
                              ((k = i[(f + 24) >> 2]),
                              (0 | f) == (0 | (n = i[(f + 12) >> 2])))
                            )
                              if (
                                (o = i[(e = (f + 20) | 0) >> 2]) ||
                                (o = i[(e = (f + 16) | 0) >> 2])
                              ) {
                                for (
                                  ;
                                  (b = e),
                                    (o = i[(e = ((n = o) + 20) | 0) >> 2]) ||
                                      ((e = (n + 16) | 0),
                                      (o = i[(n + 16) >> 2]));

                                );
                                i[b >> 2] = 0;
                              } else n = 0;
                            else
                              (e = i[(f + 8) >> 2]),
                                (i[(e + 12) >> 2] = n),
                                (i[(n + 8) >> 2] = e);
                            if (k) {
                              o = i[(f + 28) >> 2];
                              n: {
                                if (
                                  i[(e = (2760 + (o << 2)) | 0) >> 2] ==
                                  (0 | f)
                                ) {
                                  if (((i[e >> 2] = n), n)) break n;
                                  (s = 2460),
                                    (r = i[615] & f2(o)),
                                    (i[s >> 2] = r);
                                  break f;
                                }
                                if (
                                  ((i[
                                    (k +
                                      (i[(k + 16) >> 2] == (0 | f)
                                        ? 16
                                        : 20)) >>
                                      2
                                  ] = n),
                                  !n)
                                )
                                  break f;
                              }
                              (i[(n + 24) >> 2] = k),
                                (e = i[(f + 16) >> 2]) &&
                                  ((i[(n + 16) >> 2] = e),
                                  (i[(e + 24) >> 2] = n)),
                                (e = i[(f + 20) >> 2]) &&
                                  ((i[(n + 20) >> 2] = e),
                                  (i[(e + 24) >> 2] = n));
                            }
                          }
                          if (
                            ((i[(a + 4) >> 2] = 1 | t),
                            (i[(a + t) >> 2] = t),
                            i[619] != (0 | a))
                          )
                            break a;
                          return void (i[616] = t);
                        }
                        (i[(f + 4) >> 2] = -2 & n),
                          (i[(a + 4) >> 2] = 1 | t),
                          (i[(a + t) >> 2] = t);
                      }
                      if (t >>> 0 <= 255)
                        return (
                          (n = (2496 + ((t = (t >>> 3) | 0) << 3)) | 0),
                          (e = i[614]) & (t = 1 << t)
                            ? (t = i[(n + 8) >> 2])
                            : ((i[614] = t | e), (t = n)),
                          (i[(n + 8) >> 2] = a),
                          (i[(t + 12) >> 2] = a),
                          (i[(a + 12) >> 2] = n),
                          void (i[(a + 8) >> 2] = t)
                        );
                      (o = 31),
                        (i[(a + 16) >> 2] = 0),
                        (i[(a + 20) >> 2] = 0),
                        t >>> 0 <= 16777215 &&
                          ((n = (t >>> 8) | 0),
                          (n <<= b = ((n + 1048320) >>> 16) & 8),
                          (o =
                            (28 +
                              (((n =
                                (((((n <<= o = ((n + 520192) >>> 16) & 4) <<
                                  (e = ((n + 245760) >>> 16) & 2)) >>>
                                  15) |
                                  0) -
                                  (e | o | b)) |
                                0) <<
                                1) |
                                ((t >>> (n + 21)) & 1))) |
                            0)),
                        (i[(a + 28) >> 2] = o),
                        (b = (2760 + (o << 2)) | 0);
                      a: {
                        if ((e = i[615]) & (n = 1 << o)) {
                          for (
                            o =
                              t <<
                              ((0 | o) == 31 ? 0 : (25 - ((o >>> 1) | 0)) | 0),
                              n = i[b >> 2];
                            ;

                          ) {
                            if (((e = n), (-8 & i[(n + 4) >> 2]) == (0 | t)))
                              break a;
                            if (
                              ((n = (o >>> 29) | 0),
                              (o <<= 1),
                              !(n = i[(16 + (b = (e + (4 & n)) | 0)) >> 2]))
                            )
                              break;
                          }
                          (i[(b + 16) >> 2] = a), (i[(a + 24) >> 2] = e);
                        } else
                          (i[615] = n | e),
                            (i[b >> 2] = a),
                            (i[(a + 24) >> 2] = b);
                        return (
                          (i[(a + 12) >> 2] = a), void (i[(a + 8) >> 2] = a)
                        );
                      }
                      (t = i[(e + 8) >> 2]),
                        (i[(t + 12) >> 2] = a),
                        (i[(e + 8) >> 2] = a),
                        (i[(a + 24) >> 2] = 0),
                        (i[(a + 12) >> 2] = e),
                        (i[(a + 8) >> 2] = t);
                    }
                  }
                  function E0(a, t) {
                    var f,
                      n = 0,
                      e = 0,
                      o = u(0),
                      b = 0,
                      k = 0,
                      s = u(0),
                      r = 0,
                      A = 0,
                      l = 0,
                      v = 0,
                      h = 0,
                      d = 0,
                      g = 0,
                      y = 0,
                      C = 0,
                      M = 0,
                      S = 0,
                      L = 0,
                      T = 0,
                      j = 0;
                    F = f = (F - 48) | 0;
                    i: {
                      (l = i[t >> 2]),
                        (k = i[(l + 16) >> 2]),
                        (s = c[(k + 28) >> 2]),
                        (n = i[i[(i[(t + 4) >> 2] + 8) >> 2] >> 2]),
                        (h = i[n >> 2]),
                        (e = i[(h + 16) >> 2]),
                        (o = c[(e + 28) >> 2]);
                      a: {
                        if (
                          !(
                            !(c[(k + 32) >> 2] <= c[(e + 32) >> 2]) |
                            (s != o)
                          ) ||
                          s < o
                        ) {
                          if (V(i[(i[(h + 4) >> 2] + 16) >> 2], k, e) > u(0))
                            break a;
                          if (
                            ((k = i[(l + 16) >> 2]),
                            (e = i[(h + 16) >> 2]),
                            c[(k + 32) >> 2] != c[(e + 32) >> 2] ||
                              c[(k + 28) >> 2] != c[(e + 28) >> 2])
                          ) {
                            if (
                              !n2(i[(h + 4) >> 2]) ||
                              !z(l, i[(i[(h + 4) >> 2] + 12) >> 2])
                            )
                              break i;
                            (M = 1),
                              (p[(n + 14) | 0] = 1),
                              (p[(t + 14) | 0] = 1);
                            break a;
                          }
                          if (((M = 1), (0 | e) == (0 | k))) break a;
                          if (
                            ((b = i[(a + 68) >> 2]),
                            (0 | (t = i[(k + 36) >> 2])) >= 0)
                          ) {
                            if (
                              ((d = i[b >> 2]),
                              (r = i[d >> 2]),
                              (k = t),
                              (A = i[(d + 4) >> 2]),
                              (t = i[(4 + (S = (A + (t << 3)) | 0)) >> 2]),
                              (C = i[(d + 8) >> 2]),
                              (y = i[(r + (C << 2)) >> 2]),
                              (i[(r + (t << 2)) >> 2] = y),
                              (i[(4 + (L = ((y << 3) + A) | 0)) >> 2] = t),
                              (T = (C - 1) | 0),
                              (i[(d + 8) >> 2] = T),
                              (0 | t) < (0 | C))
                            ) {
                              f: {
                                if (
                                  (0 | t) < 2 ||
                                  ((n =
                                    i[
                                      ((i[(r + ((t << 1) & -4)) >> 2] << 3) +
                                        A) >>
                                        2
                                    ]),
                                  (o = c[(n + 28) >> 2]),
                                  (g = i[((y << 3) + A) >> 2]),
                                  o < (s = c[(g + 28) >> 2]) ||
                                    !(
                                      !(c[(n + 32) >> 2] <= c[(g + 32) >> 2]) |
                                      (s != o)
                                    ))
                                )
                                  for (j = ((y << 3) + A) | 0; ; ) {
                                    if (
                                      ((0 | T) <= (0 | (n = t << 1)) ||
                                        ((v =
                                          i[
                                            ((i[
                                              (r + ((e = 1 | n) << 2)) >> 2
                                            ] <<
                                              3) +
                                              A) >>
                                              2
                                          ]),
                                        (s = c[(v + 28) >> 2]),
                                        (b =
                                          i[
                                            ((i[(r + (n << 2)) >> 2] << 3) +
                                              A) >>
                                              2
                                          ]),
                                        (o = c[(b + 28) >> 2]),
                                        (!(
                                          c[(v + 32) >> 2] <= c[(b + 32) >> 2]
                                        ) |
                                          (s != o) &&
                                          !(s < o)) ||
                                          (n = e)),
                                      (0 | n) >= (0 | C))
                                    ) {
                                      n = t;
                                      break f;
                                    }
                                    if (
                                      ((g = i[j >> 2]),
                                      (s = c[(g + 28) >> 2]),
                                      (v = i[(r + (n << 2)) >> 2]),
                                      (e = i[(b = ((v << 3) + A) | 0) >> 2]),
                                      s < (o = c[(e + 28) >> 2]))
                                    ) {
                                      n = t;
                                      break f;
                                    }
                                    if (
                                      !(
                                        !(
                                          c[(g + 32) >> 2] <= c[(e + 32) >> 2]
                                        ) |
                                        (s != o)
                                      )
                                    ) {
                                      n = t;
                                      break f;
                                    }
                                    (i[(r + (t << 2)) >> 2] = v),
                                      (i[(b + 4) >> 2] = t),
                                      (t = n);
                                  }
                                for (;;) {
                                  if (
                                    ((v = i[(r + ((n = t >> 1) << 2)) >> 2]),
                                    (e = i[(b = ((v << 3) + A) | 0) >> 2]),
                                    (o = c[(e + 28) >> 2]) < s)
                                  ) {
                                    n = t;
                                    break f;
                                  }
                                  if (
                                    !(
                                      !(c[(e + 32) >> 2] <= c[(g + 32) >> 2]) |
                                      (s != o)
                                    )
                                  ) {
                                    n = t;
                                    break f;
                                  }
                                  if (
                                    ((i[(r + (t << 2)) >> 2] = v),
                                    (i[(b + 4) >> 2] = t),
                                    !((t = n) >>> 0 > 1))
                                  )
                                    break;
                                }
                              }
                              (i[(r + (n << 2)) >> 2] = y),
                                (i[(L + 4) >> 2] = n);
                            }
                            (i[S >> 2] = 0),
                              (i[(S + 4) >> 2] = i[(d + 16) >> 2]),
                              (i[(d + 16) >> 2] = k);
                          } else {
                            i[(i[(b + 4) >> 2] + ((-1 ^ t) << 2)) >> 2] = 0;
                            f: if (!((0 | (t = i[(b + 12) >> 2])) < 1))
                              for (k = i[(b + 8) >> 2]; ; ) {
                                if (
                                  i[i[(k + ((n = (t - 1) | 0) << 2)) >> 2] >> 2]
                                )
                                  break f;
                                if (
                                  ((i[(b + 12) >> 2] = n),
                                  (e = (0 | t) > 1),
                                  (t = n),
                                  !e)
                                )
                                  break;
                              }
                          }
                          if (
                            ((n = i[(i[(h + 4) >> 2] + 12) >> 2]),
                            (i[(f + 24) >> 2] = 0),
                            (i[(f + 28) >> 2] = 0),
                            (i[(f + 16) >> 2] = 0),
                            (i[(f + 20) >> 2] = 0),
                            (t = i[287]),
                            (i[(f + 8) >> 2] = i[286]),
                            (i[(f + 12) >> 2] = t),
                            (t = i[285]),
                            (i[f >> 2] = i[284]),
                            (i[(f + 4) >> 2] = t),
                            (t = i[(n + 16) >> 2]),
                            (i[(f + 16) >> 2] = i[(t + 12) >> 2]),
                            (i[(f + 20) >> 2] =
                              i[(i[(l + 16) >> 2] + 12) >> 2]),
                            (c[(f + 36) >> 2] = c[(t + 16) >> 2]),
                            (c[(f + 40) >> 2] = c[(t + 20) >> 2]),
                            (c[(f + 44) >> 2] = c[(t + 24) >> 2]),
                            (i[(t + 12) >> 2] = 0),
                            (e = (t + 12) | 0),
                            (0 | (t = i[(a + 1736) >> 2])) == 8
                              ? _[i[(a + 76) >> 2]](
                                  (f + 36) | 0,
                                  (f + 16) | 0,
                                  f,
                                  e
                                )
                              : _[0 | t](
                                  (f + 36) | 0,
                                  (f + 16) | 0,
                                  f,
                                  e,
                                  i[(a + 1896) >> 2]
                                ),
                            i[e >> 2] || (i[e >> 2] = i[(f + 16) >> 2]),
                            z(n, l))
                          )
                            break a;
                          break i;
                        }
                        if (
                          !(V(i[(i[(l + 4) >> 2] + 16) >> 2], e, k) < u(0)) &&
                          ((M = 1),
                          (p[(t + 14) | 0] = 1),
                          (p[
                            (i[i[(i[(t + 4) >> 2] + 4) >> 2] >> 2] + 14) | 0
                          ] = 1),
                          !n2(i[(l + 4) >> 2]) ||
                            !z(i[(i[(h + 4) >> 2] + 12) >> 2], l))
                        )
                          break i;
                      }
                      return (F = (f + 48) | 0), M;
                    }
                    b2((a + 1740) | 0, 1), o2();
                  }
                  function r0(a, t) {
                    var f,
                      n,
                      e = 0,
                      o = 0,
                      b = 0,
                      k = 0,
                      s = 0,
                      r = 0,
                      A = 0,
                      l = 0,
                      v = 0,
                      h = 0,
                      d = 0;
                    if (!a) return H(t);
                    if (t >>> 0 >= 4294967232) return (i[613] = 48), 0;
                    (f = t >>> 0 < 11 ? 16 : (t + 11) & -8),
                      (b = -8 & (n = i[(4 + (k = (a - 8) | 0)) >> 2]));
                    i: if (3 & n) {
                      s = (b + k) | 0;
                      a: if (b >>> 0 >= f >>> 0) {
                        if ((o = (b - f) | 0) >>> 0 < 16) break a;
                        (i[(k + 4) >> 2] = (1 & n) | f | 2),
                          (i[(4 + (e = (k + f) | 0)) >> 2] = 3 | o),
                          (i[(s + 4) >> 2] = 1 | i[(s + 4) >> 2]),
                          e1(e, o);
                      } else if (i[620] != (0 | s))
                        if (i[619] != (0 | s)) {
                          if (
                            2 & (o = i[(s + 4) >> 2]) ||
                            (A = (b + (-8 & o)) | 0) >>> 0 < f >>> 0
                          )
                            break i;
                          v = (A - f) | 0;
                          f: if (o >>> 0 <= 255) {
                            if (
                              ((b = i[(s + 8) >> 2]),
                              (e = (o >>> 3) | 0),
                              (0 | (o = i[(s + 12) >> 2])) == (0 | b))
                            ) {
                              (h = 2456), (d = i[614] & f2(e)), (i[h >> 2] = d);
                              break f;
                            }
                            (i[(b + 12) >> 2] = o), (i[(o + 8) >> 2] = b);
                          } else {
                            if (
                              ((l = i[(s + 24) >> 2]),
                              (0 | (r = i[(s + 12) >> 2])) == (0 | s))
                            )
                              if (
                                (e = i[(b = (s + 20) | 0) >> 2]) ||
                                (e = i[(b = (s + 16) | 0) >> 2])
                              ) {
                                for (
                                  ;
                                  (o = b),
                                    (r = e),
                                    (e = i[(b = (e + 20) | 0) >> 2]) ||
                                      ((b = (r + 16) | 0),
                                      (e = i[(r + 16) >> 2]));

                                );
                                i[o >> 2] = 0;
                              } else r = 0;
                            else
                              (e = i[(s + 8) >> 2]),
                                (i[(e + 12) >> 2] = r),
                                (i[(r + 8) >> 2] = e);
                            if (l) {
                              o = i[(s + 28) >> 2];
                              n: {
                                if (
                                  i[(e = (2760 + (o << 2)) | 0) >> 2] ==
                                  (0 | s)
                                ) {
                                  if (((i[e >> 2] = r), r)) break n;
                                  (h = 2460),
                                    (d = i[615] & f2(o)),
                                    (i[h >> 2] = d);
                                  break f;
                                }
                                if (
                                  ((i[
                                    ((i[(l + 16) >> 2] == (0 | s) ? 16 : 20) +
                                      l) >>
                                      2
                                  ] = r),
                                  !r)
                                )
                                  break f;
                              }
                              (i[(r + 24) >> 2] = l),
                                (e = i[(s + 16) >> 2]) &&
                                  ((i[(r + 16) >> 2] = e),
                                  (i[(e + 24) >> 2] = r)),
                                (e = i[(s + 20) >> 2]) &&
                                  ((i[(r + 20) >> 2] = e),
                                  (i[(e + 24) >> 2] = r));
                            }
                          }
                          v >>> 0 <= 15
                            ? ((i[(k + 4) >> 2] = (1 & n) | A | 2),
                              (i[(4 + (e = (k + A) | 0)) >> 2] =
                                1 | i[(e + 4) >> 2]))
                            : ((i[(k + 4) >> 2] = (1 & n) | f | 2),
                              (i[(4 + (o = (k + f) | 0)) >> 2] = 3 | v),
                              (i[(4 + (e = (k + A) | 0)) >> 2] =
                                1 | i[(e + 4) >> 2]),
                              e1(o, v));
                        } else {
                          if ((o = (b + i[616]) | 0) >>> 0 < f >>> 0) break i;
                          (e = (o - f) | 0) >>> 0 >= 16
                            ? ((i[(k + 4) >> 2] = (1 & n) | f | 2),
                              (i[(4 + (b = (k + f) | 0)) >> 2] = 1 | e),
                              (i[(o = (o + k) | 0) >> 2] = e),
                              (i[(o + 4) >> 2] = -2 & i[(o + 4) >> 2]))
                            : ((i[(k + 4) >> 2] = o | (1 & n) | 2),
                              (i[(4 + (e = (o + k) | 0)) >> 2] =
                                1 | i[(e + 4) >> 2]),
                              (e = 0),
                              (b = 0)),
                            (i[619] = b),
                            (i[616] = e);
                        }
                      else {
                        if ((b = (b + i[617]) | 0) >>> 0 <= f >>> 0) break i;
                        (i[(k + 4) >> 2] = (1 & n) | f | 2),
                          (e = (b - f) | 0),
                          (i[(4 + (o = (k + f) | 0)) >> 2] = 1 | e),
                          (i[617] = e),
                          (i[620] = o);
                      }
                      e = k;
                    } else {
                      if (
                        f >>> 0 < 256 ||
                        (b >>> 0 >= (f + 4) >>> 0 &&
                          ((e = k), (b - f) >>> 0 <= (i[734] << 1) >>> 0))
                      )
                        break i;
                      e = 0;
                    }
                    return e
                      ? (e + 8) | 0
                      : (k = H(t))
                      ? (b1(
                          k,
                          a,
                          t >>> 0 >
                            (e =
                              ((3 & (e = i[(a - 4) >> 2]) ? -4 : -8) +
                                (-8 & e)) |
                              0) >>>
                              0
                            ? e
                            : t
                        ),
                        O(a),
                        k)
                      : 0;
                  }
                  function o1(a, t) {
                    var f = 0,
                      n = 0,
                      e = 0,
                      o = 0,
                      b = 0,
                      k = 0,
                      s = u(0),
                      r = 0,
                      A = u(0);
                    for (n = i[i[(i[(t + 4) >> 2] + 8) >> 2] >> 2]; ; ) {
                      i: {
                        if (w[(n + 14) | 0])
                          for (
                            ;
                            (n = i[i[(i[((t = n) + 4) >> 2] + 8) >> 2] >> 2]),
                              w[(n + 14) | 0];

                          );
                        a: {
                          f: {
                            n: {
                              t: {
                                if (w[(t + 14) | 0]) f = t;
                                else if (
                                  !(f =
                                    i[i[(i[(t + 4) >> 2] + 4) >> 2] >> 2]) ||
                                  ((n = t), !w[(f + 14) | 0])
                                )
                                  break t;
                                (p[(f + 14) | 0] = 0),
                                  (e = i[f >> 2]),
                                  (t = i[(i[(e + 4) >> 2] + 16) >> 2]),
                                  (b = i[n >> 2]);
                                b: if (
                                  (0 | t) !=
                                  i[(i[(b + 4) >> 2] + 16) >> 2]
                                ) {
                                  (s = c[(t + 28) >> 2]),
                                    (r = i[i[(i[(f + 4) >> 2] + 8) >> 2] >> 2]),
                                    (o = i[r >> 2]),
                                    (k = i[(i[(o + 4) >> 2] + 16) >> 2]),
                                    (A = c[(k + 28) >> 2]);
                                  e: {
                                    if (
                                      !(
                                        !(
                                          c[(t + 32) >> 2] <= c[(k + 32) >> 2]
                                        ) |
                                        (s != A)
                                      ) ||
                                      s < A
                                    ) {
                                      if (V(t, k, i[(e + 16) >> 2]) < u(0)) {
                                        t = f;
                                        break b;
                                      }
                                      if (
                                        ((p[(f + 14) | 0] = 1),
                                        (p[
                                          (i[
                                            i[(i[(f + 4) >> 2] + 4) >> 2] >> 2
                                          ] +
                                            14) |
                                            0
                                        ] = 1),
                                        !(t = n2(e)))
                                      )
                                        break a;
                                      if (z(i[(o + 4) >> 2], t)) break e;
                                      break i;
                                    }
                                    if (V(k, t, i[(o + 16) >> 2]) > u(0)) {
                                      t = f;
                                      break b;
                                    }
                                    if (
                                      ((p[(r + 14) | 0] = 1),
                                      (p[(f + 14) | 0] = 1),
                                      !(t = n2(o)) ||
                                        !z(i[(e + 12) >> 2], i[(o + 4) >> 2]))
                                    )
                                      break i;
                                    t = i[(t + 4) >> 2];
                                  }
                                  if (
                                    ((p[(i[(t + 20) >> 2] + 21) | 0] =
                                      w[(f + 12) | 0]),
                                    w[(n + 15) | 0])
                                  ) {
                                    if (
                                      ((i[(i[n >> 2] + 24) >> 2] = 0),
                                      p2(i[(n + 4) >> 2]),
                                      O(n),
                                      !i2(b))
                                    )
                                      break i;
                                    (n = i[i[(i[(f + 4) >> 2] + 8) >> 2] >> 2]),
                                      (b = i[n >> 2]),
                                      (t = f);
                                  } else if (w[(f + 15) | 0]) {
                                    if (
                                      ((i[(i[f >> 2] + 24) >> 2] = 0),
                                      p2(i[(f + 4) >> 2]),
                                      O(f),
                                      !i2(e))
                                    )
                                      break i;
                                    (t = i[i[(i[(n + 4) >> 2] + 4) >> 2] >> 2]),
                                      (e = i[t >> 2]);
                                  } else t = f;
                                } else t = f;
                                if (i[(e + 16) >> 2] == i[(b + 16) >> 2])
                                  break f;
                                if (
                                  ((f = i[(i[(e + 4) >> 2] + 16) >> 2]),
                                  (o = i[(i[(b + 4) >> 2] + 16) >> 2]),
                                  w[(n + 15) | 0] |
                                    w[(t + 15) | 0] |
                                    ((0 | f) == (0 | o)) ||
                                    ((k = f),
                                    (0 | (f = i[(a + 72) >> 2])) != (0 | o) &&
                                      (0 | k) != (0 | f)))
                                )
                                  break n;
                                if (!n1(a, t)) break f;
                              }
                              return;
                            }
                            E0(a, t);
                          }
                          if (
                            i[(e + 16) >> 2] != i[(b + 16) >> 2] ||
                            ((o = i[(e + 4) >> 2]),
                            (f = i[(b + 4) >> 2]),
                            i[(o + 16) >> 2] != i[(f + 16) >> 2])
                          )
                            continue;
                          if (
                            ((i[(b + 28) >> 2] =
                              i[(b + 28) >> 2] + i[(e + 28) >> 2]),
                            (i[(f + 28) >> 2] =
                              i[(f + 28) >> 2] + i[(o + 28) >> 2]),
                            (i[(i[t >> 2] + 24) >> 2] = 0),
                            p2(i[(t + 4) >> 2]),
                            O(t),
                            !i2(e))
                          )
                            break i;
                          t = i[i[(i[(n + 4) >> 2] + 4) >> 2] >> 2];
                          continue;
                        }
                      }
                      break;
                    }
                    b2((a + 1740) | 0, 1), o2();
                  }
                  function i2(a) {
                    var t,
                      f = 0,
                      n = 0,
                      e = 0,
                      o = 0,
                      b = 0;
                    if (
                      ((o = i[(a + 4) >> 2]),
                      (0 | (t = i[(o + 20) >> 2])) !=
                        (0 | (n = i[(a + 20) >> 2])))
                    ) {
                      for (
                        f = e = i[(n + 8) >> 2];
                        (i[(f + 20) >> 2] = t),
                          (0 | e) != (0 | (f = i[(f + 12) >> 2]));

                      );
                      (f = i[n >> 2]),
                        (e = i[(n + 4) >> 2]),
                        (i[(f + 4) >> 2] = e),
                        (i[e >> 2] = f),
                        O(n);
                    }
                    if ((0 | (e = i[(a + 8) >> 2])) != (0 | a)) {
                      if (
                        ((b = i[(a + 4) >> 2]),
                        (f = i[(b + 12) >> 2]),
                        (i[(i[(b + 20) >> 2] + 8) >> 2] = f),
                        (i[(i[(a + 16) >> 2] + 8) >> 2] = e),
                        (b = i[(f + 8) >> 2]),
                        (i[(i[(e + 4) >> 2] + 12) >> 2] = f),
                        (i[(i[(b + 4) >> 2] + 12) >> 2] = a),
                        (i[(a + 8) >> 2] = b),
                        (i[(f + 8) >> 2] = e),
                        (0 | n) == (0 | t))
                      ) {
                        if (!(n = H(24))) return 0;
                        for (
                          f = i[(a + 20) >> 2],
                            e = i[(f + 4) >> 2],
                            i[(n + 4) >> 2] = e,
                            i[e >> 2] = n,
                            i[n >> 2] = f,
                            i[(f + 4) >> 2] = n,
                            i[(n + 12) >> 2] = 0,
                            i[(n + 16) >> 2] = 0,
                            i[(n + 8) >> 2] = a,
                            p[(n + 20) | 0] = 0,
                            p[(n + 21) | 0] = w[(f + 21) | 0],
                            f = a;
                          (i[(f + 20) >> 2] = n),
                            (0 | (f = i[(f + 12) >> 2])) != (0 | a);

                        );
                      }
                    } else {
                      for (
                        n = i[(a + 16) >> 2], f = e = i[(n + 8) >> 2];
                        (i[(f + 16) >> 2] = 0),
                          (0 | e) != (0 | (f = i[(f + 8) >> 2]));

                      );
                      (f = i[n >> 2]),
                        (e = i[(n + 4) >> 2]),
                        (i[(f + 4) >> 2] = e),
                        (i[e >> 2] = f),
                        O(n);
                    }
                    if ((0 | (f = i[(o + 8) >> 2])) != (0 | o))
                      (n = i[(i[(o + 4) >> 2] + 12) >> 2]),
                        (i[(i[(a + 20) >> 2] + 8) >> 2] = n),
                        (i[(i[(o + 16) >> 2] + 8) >> 2] = f),
                        (e = i[(n + 8) >> 2]),
                        (i[(i[(f + 4) >> 2] + 12) >> 2] = n),
                        (i[(i[(e + 4) >> 2] + 12) >> 2] = o),
                        (i[(o + 8) >> 2] = e),
                        (i[(n + 8) >> 2] = f);
                    else {
                      for (
                        n = i[(o + 16) >> 2], f = e = i[(n + 8) >> 2];
                        (i[(f + 16) >> 2] = 0),
                          (0 | e) != (0 | (f = i[(f + 8) >> 2]));

                      );
                      for (
                        f = i[n >> 2],
                          e = i[(n + 4) >> 2],
                          i[(f + 4) >> 2] = e,
                          i[e >> 2] = f,
                          O(n),
                          n = i[(o + 20) >> 2],
                          f = o = i[(n + 8) >> 2];
                        (i[(f + 20) >> 2] = 0),
                          (0 | o) != (0 | (f = i[(f + 12) >> 2]));

                      );
                      (f = i[n >> 2]),
                        (o = i[(n + 4) >> 2]),
                        (i[(f + 4) >> 2] = o),
                        (i[o >> 2] = f),
                        O(n);
                    }
                    return (
                      (f = i[(a + 4) >> 2]),
                      (f = i[(a = a >>> 0 > f >>> 0 ? f : a) >> 2]),
                      (n = i[i[(a + 4) >> 2] >> 2]),
                      (i[i[(f + 4) >> 2] >> 2] = n),
                      (i[i[(n + 4) >> 2] >> 2] = f),
                      O(a),
                      1
                    );
                  }
                  function h2(a, t) {
                    var f,
                      n = 0,
                      e = 0,
                      o = 0,
                      b = 0,
                      k = 0,
                      s = 0,
                      r = 0;
                    if (((n = 0), (f = H(64)))) {
                      if (
                        ((k = i[(a + 4) >> 2]),
                        (o = i[((n = a >>> 0 > k >>> 0 ? k : a) + 4) >> 2]),
                        (e = i[o >> 2]),
                        (i[(f + 32) >> 2] = e),
                        (i[i[(e + 4) >> 2] >> 2] = f),
                        (i[f >> 2] = n),
                        (b = (f + 32) | 0),
                        (i[o >> 2] = b),
                        (i[(f + 16) >> 2] = 0),
                        (i[(f + 20) >> 2] = 0),
                        (i[(f + 12) >> 2] = b),
                        (i[(f + 4) >> 2] = b),
                        (i[(f + 24) >> 2] = 0),
                        (i[(f + 28) >> 2] = 0),
                        (i[(f + 48) >> 2] = 0),
                        (i[(f + 52) >> 2] = 0),
                        (i[(f + 44) >> 2] = f),
                        (i[(f + 40) >> 2] = b),
                        (i[(f + 36) >> 2] = f),
                        (i[(f + 56) >> 2] = 0),
                        (i[(f + 60) >> 2] = 0),
                        (i[(f + 8) >> 2] = f),
                        (0 | (s = i[(a + 20) >> 2])) !=
                          (0 | (o = i[(t + 20) >> 2])))
                      ) {
                        for (
                          n = e = i[(o + 8) >> 2];
                          (i[(n + 20) >> 2] = s),
                            (0 | e) != (0 | (n = i[(n + 12) >> 2]));

                        );
                        (n = i[o >> 2]),
                          (e = i[(o + 4) >> 2]),
                          (i[(n + 4) >> 2] = e),
                          (i[e >> 2] = n),
                          O(o),
                          (k = i[(a + 4) >> 2]),
                          (e = i[(f + 8) >> 2]),
                          (n = i[(a + 20) >> 2]);
                      } else (e = f), (n = o);
                      if (
                        ((a = i[(a + 12) >> 2]),
                        (r = i[(a + 8) >> 2]),
                        (i[(i[(e + 4) >> 2] + 12) >> 2] = a),
                        (i[(i[(r + 4) >> 2] + 12) >> 2] = f),
                        (i[(f + 8) >> 2] = r),
                        (i[(a + 8) >> 2] = e),
                        (a = i[(t + 8) >> 2]),
                        (e = i[(f + 40) >> 2]),
                        (i[(i[(e + 4) >> 2] + 12) >> 2] = t),
                        (i[(i[(a + 4) >> 2] + 12) >> 2] = b),
                        (i[(f + 40) >> 2] = a),
                        (i[(t + 8) >> 2] = e),
                        (i[(f + 16) >> 2] = i[(k + 16) >> 2]),
                        (t = i[(t + 16) >> 2]),
                        (a = n),
                        (i[(f + 52) >> 2] = a),
                        (i[(f + 48) >> 2] = t),
                        (i[(f + 20) >> 2] = a),
                        (i[(a + 8) >> 2] = b),
                        (n = f),
                        (0 | o) == (0 | s) && ((n = 0), (t = H(24))))
                      ) {
                        for (
                          n = i[(a + 4) >> 2],
                            i[(t + 4) >> 2] = n,
                            i[n >> 2] = t,
                            i[t >> 2] = a,
                            i[(a + 4) >> 2] = t,
                            i[(t + 12) >> 2] = 0,
                            i[(t + 16) >> 2] = 0,
                            i[(t + 8) >> 2] = f,
                            p[(t + 20) | 0] = 0,
                            p[(t + 21) | 0] = w[(a + 21) | 0],
                            n = f;
                          (i[(n + 20) >> 2] = t),
                            (0 | (n = i[(n + 12) >> 2])) != (0 | f);

                        );
                        n = f;
                      }
                    }
                    return n;
                  }
                  function b1(a, t, f) {
                    var n = 0,
                      e = 0;
                    if (f >>> 0 >= 512) H1(0 | a, 0 | t, 0 | f);
                    else {
                      n = (a + f) | 0;
                      i: if (3 & (a ^ t))
                        if (n >>> 0 < 4) f = a;
                        else if ((e = (n - 4) | 0) >>> 0 < a >>> 0) f = a;
                        else
                          for (
                            f = a;
                            (p[0 | f] = w[0 | t]),
                              (p[(f + 1) | 0] = w[(t + 1) | 0]),
                              (p[(f + 2) | 0] = w[(t + 2) | 0]),
                              (p[(f + 3) | 0] = w[(t + 3) | 0]),
                              (t = (t + 4) | 0),
                              e >>> 0 >= (f = (f + 4) | 0) >>> 0;

                          );
                      else {
                        a: if (3 & a)
                          if ((0 | f) < 1) f = a;
                          else
                            for (f = a; ; ) {
                              if (
                                ((p[0 | f] = w[0 | t]),
                                (t = (t + 1) | 0),
                                !(3 & (f = (f + 1) | 0)))
                              )
                                break a;
                              if (!(f >>> 0 < n >>> 0)) break;
                            }
                        else f = a;
                        if (
                          !(
                            (a = -4 & n) >>> 0 < 64 ||
                            (e = (a + -64) | 0) >>> 0 < f >>> 0
                          )
                        )
                          for (
                            ;
                            (i[f >> 2] = i[t >> 2]),
                              (i[(f + 4) >> 2] = i[(t + 4) >> 2]),
                              (i[(f + 8) >> 2] = i[(t + 8) >> 2]),
                              (i[(f + 12) >> 2] = i[(t + 12) >> 2]),
                              (i[(f + 16) >> 2] = i[(t + 16) >> 2]),
                              (i[(f + 20) >> 2] = i[(t + 20) >> 2]),
                              (i[(f + 24) >> 2] = i[(t + 24) >> 2]),
                              (i[(f + 28) >> 2] = i[(t + 28) >> 2]),
                              (i[(f + 32) >> 2] = i[(t + 32) >> 2]),
                              (i[(f + 36) >> 2] = i[(t + 36) >> 2]),
                              (i[(f + 40) >> 2] = i[(t + 40) >> 2]),
                              (i[(f + 44) >> 2] = i[(t + 44) >> 2]),
                              (i[(f + 48) >> 2] = i[(t + 48) >> 2]),
                              (i[(f + 52) >> 2] = i[(t + 52) >> 2]),
                              (i[(f + 56) >> 2] = i[(t + 56) >> 2]),
                              (i[(f + 60) >> 2] = i[(t + 60) >> 2]),
                              (t = (t - -64) | 0),
                              e >>> 0 >= (f = (f - -64) | 0) >>> 0;

                          );
                        if (a >>> 0 <= f >>> 0) break i;
                        for (
                          ;
                          (i[f >> 2] = i[t >> 2]),
                            (t = (t + 4) | 0),
                            a >>> 0 > (f = (f + 4) | 0) >>> 0;

                        );
                      }
                      if (f >>> 0 < n >>> 0)
                        for (
                          ;
                          (p[0 | f] = w[0 | t]),
                            (t = (t + 1) | 0),
                            (0 | n) != (0 | (f = (f + 1) | 0));

                        );
                    }
                  }
                  function n2(a) {
                    var t,
                      f = 0,
                      n = 0,
                      e = 0,
                      o = 0,
                      b = 0;
                    if (
                      ((t = a |= 0),
                      (a = 0),
                      (f = H(64)) &&
                        ((e = i[(t + 4) >> 2]),
                        (o = i[((n = e >>> 0 < t >>> 0 ? e : t) + 4) >> 2]),
                        (b = i[o >> 2]),
                        (i[(f + 32) >> 2] = b),
                        (i[i[(b + 4) >> 2] >> 2] = f),
                        (i[f >> 2] = n),
                        (n = (f + 32) | 0),
                        (i[o >> 2] = n),
                        (i[(f + 16) >> 2] = 0),
                        (i[(f + 20) >> 2] = 0),
                        (i[(f + 12) >> 2] = n),
                        (i[(f + 4) >> 2] = n),
                        (i[(f + 24) >> 2] = 0),
                        (i[(f + 28) >> 2] = 0),
                        (i[(f + 48) >> 2] = 0),
                        (i[(f + 52) >> 2] = 0),
                        (i[(f + 40) >> 2] = n),
                        (i[(f + 36) >> 2] = f),
                        (i[(f + 56) >> 2] = 0),
                        (i[(f + 60) >> 2] = 0),
                        (i[(f + 8) >> 2] = f),
                        (o = i[(t + 12) >> 2]),
                        (b = i[(o + 8) >> 2]),
                        (i[(f + 44) >> 2] = o),
                        (i[(i[(b + 4) >> 2] + 12) >> 2] = f),
                        (i[(f + 8) >> 2] = b),
                        (i[(o + 8) >> 2] = f),
                        (o = i[(e + 16) >> 2]),
                        (i[(f + 16) >> 2] = o),
                        (e = H(40))))
                    ) {
                      for (
                        a = i[(o + 4) >> 2],
                          i[(e + 4) >> 2] = a,
                          i[a >> 2] = e,
                          i[e >> 2] = o,
                          i[(o + 4) >> 2] = e,
                          i[(e + 12) >> 2] = 0,
                          i[(e + 8) >> 2] = n,
                          a = n;
                        (i[(a + 16) >> 2] = e),
                          (0 | n) != (0 | (a = i[(a + 8) >> 2]));

                      );
                      (a = i[(t + 20) >> 2]),
                        (i[(f + 20) >> 2] = a),
                        (i[(f + 52) >> 2] = a),
                        (a = f);
                    }
                    return a
                      ? ((f = i[(a + 4) >> 2]),
                        (a = i[(t + 4) >> 2]),
                        (n = i[(i[(a + 4) >> 2] + 12) >> 2]),
                        (e = i[(n + 8) >> 2]),
                        (o = i[(a + 8) >> 2]),
                        (i[(i[(o + 4) >> 2] + 12) >> 2] = n),
                        (i[(i[(e + 4) >> 2] + 12) >> 2] = a),
                        (i[(a + 8) >> 2] = e),
                        (i[(n + 8) >> 2] = o),
                        (n = i[(f + 8) >> 2]),
                        (e = i[(a + 8) >> 2]),
                        (i[(i[(e + 4) >> 2] + 12) >> 2] = f),
                        (i[(i[(n + 4) >> 2] + 12) >> 2] = a),
                        (i[(a + 8) >> 2] = n),
                        (i[(f + 8) >> 2] = e),
                        (i[(a + 16) >> 2] = i[(f + 16) >> 2]),
                        (n = i[(f + 4) >> 2]),
                        (i[(i[(n + 16) >> 2] + 8) >> 2] = n),
                        (i[(n + 20) >> 2] = i[(a + 20) >> 2]),
                        (i[(f + 28) >> 2] = i[(t + 28) >> 2]),
                        (i[(n + 28) >> 2] = i[(a + 28) >> 2]),
                        0 | f)
                      : 0;
                  }
                  function F2(a, t, f, n, e, o) {
                    var b = 0,
                      k = 0,
                      s = 0,
                      r = 0,
                      A = 0;
                    (r = (t + 4) | 0), (s = (a - -64) | 0);
                    i: {
                      for (;;) {
                        if (
                          ((k = i[(f + 4) >> 2]),
                          !(b = H(16)) ||
                            ((i[b >> 2] = k),
                            (A = _0(i[s >> 2], i[(t + 4) >> 2], b)),
                            (i[(b + 4) >> 2] = A),
                            !A))
                        )
                          break i;
                        if (
                          ((p[(b + 13) | 0] = 0),
                          (p[(b + 14) | 0] = 0),
                          (p[(b + 15) | 0] = 0),
                          (i[(k + 24) >> 2] = b),
                          (0 | n) == (0 | (f = i[(f + 8) >> 2])))
                        )
                          break;
                      }
                      if (
                        ((b = i[i[(i[(t + 4) >> 2] + 8) >> 2] >> 2]),
                        (f = i[(i[b >> 2] + 4) >> 2]),
                        (e = e || i[(f + 8) >> 2]),
                        i[(f + 16) >> 2] == i[(e + 16) >> 2])
                      )
                        for (s = 0; ; ) {
                          if (
                            ((n = t),
                            (t = b),
                            (0 | (b = e)) != i[((e = f) + 8) >> 2] &&
                              (!z(i[(i[(e + 4) >> 2] + 12) >> 2], e) ||
                                !z(i[(i[(b + 4) >> 2] + 12) >> 2], e)))
                          )
                            break i;
                          (k = (i[(n + 8) >> 2] - i[(e + 28) >> 2]) | 0),
                            (i[(t + 8) >> 2] = k);
                          a: {
                            f: switch ((i[(a + 56) >> 2] - 100130) | 0) {
                              case 0:
                                f = 1 & k;
                                break a;
                              case 1:
                                f = (0 | k) != 0;
                                break a;
                              case 2:
                                f = (0 | k) > 0;
                                break a;
                              case 3:
                                f = (k >>> 31) | 0;
                                break a;
                              case 4:
                                break f;
                              default:
                                break a;
                            }
                            f = (k + 1) >>> 0 > 2;
                          }
                          if (
                            ((p[(t + 12) | 0] = f),
                            (p[(n + 14) | 0] = 1),
                            s &&
                              E0(a, n) &&
                              ((i[(e + 28) >> 2] =
                                i[(e + 28) >> 2] + i[(b + 28) >> 2]),
                              (f = i[(e + 4) >> 2]),
                              (i[(f + 28) >> 2] =
                                i[(f + 28) >> 2] +
                                i[(i[(b + 4) >> 2] + 28) >> 2]),
                              (i[(i[n >> 2] + 24) >> 2] = 0),
                              p2(i[r >> 2]),
                              O(n),
                              !i2(b)))
                          )
                            break i;
                          if (
                            ((r = (t + 4) | 0),
                            (s = 1),
                            (b = i[i[(i[(t + 4) >> 2] + 8) >> 2] >> 2]),
                            (f = i[(i[b >> 2] + 4) >> 2]),
                            i[(f + 16) >> 2] != i[(e + 16) >> 2])
                          )
                            break;
                        }
                      return (p[(t + 14) | 0] = 1), void (o && o1(a, t));
                    }
                    b2((a + 1740) | 0, 1), o2();
                  }
                  function k1(a) {
                    var t,
                      f = 0,
                      n = 0,
                      e = 0,
                      o = 0,
                      b = 0,
                      k = 0,
                      s = 0,
                      r = 0;
                    if (
                      (0 | (o = i[(40 + (a |= 0)) >> 2])) !=
                      (0 | (t = (a + 40) | 0))
                    )
                      for (;;) {
                        if (((r = i[o >> 2]), !w[(o + 21) | 0])) {
                          for (s = i[(o + 8) >> 2], a = i[(s + 12) >> 2]; ; ) {
                            if (
                              ((i[(a + 20) >> 2] = 0),
                              (k = i[(a + 12) >> 2]),
                              (f = i[(a + 4) >> 2]),
                              !i[(f + 20) >> 2])
                            ) {
                              if (
                                ((e = i[(a + 16) >> 2]),
                                (0 | (n = i[(a + 8) >> 2])) != (0 | a))
                              )
                                (i[(e + 8) >> 2] = n),
                                  (e = i[(f + 12) >> 2]),
                                  (b = i[(e + 8) >> 2]),
                                  (i[(i[(n + 4) >> 2] + 12) >> 2] = e),
                                  (i[(i[(b + 4) >> 2] + 12) >> 2] = a),
                                  (i[(a + 8) >> 2] = b),
                                  (i[(e + 8) >> 2] = n);
                              else {
                                for (
                                  f = n = i[(e + 8) >> 2];
                                  (i[(f + 16) >> 2] = 0),
                                    (0 | n) != (0 | (f = i[(f + 8) >> 2]));

                                );
                                (f = i[e >> 2]),
                                  (n = i[(e + 4) >> 2]),
                                  (i[(f + 4) >> 2] = n),
                                  (i[n >> 2] = f),
                                  O(e),
                                  (f = i[(a + 4) >> 2]);
                              }
                              if (
                                ((e = i[(f + 16) >> 2]),
                                (0 | (n = i[(f + 8) >> 2])) != (0 | f))
                              )
                                (i[(e + 8) >> 2] = n),
                                  (e = i[(i[(f + 4) >> 2] + 12) >> 2]),
                                  (b = i[(e + 8) >> 2]),
                                  (i[(i[(n + 4) >> 2] + 12) >> 2] = e),
                                  (i[(i[(b + 4) >> 2] + 12) >> 2] = f),
                                  (i[(f + 8) >> 2] = b),
                                  (i[(e + 8) >> 2] = n);
                              else {
                                for (
                                  f = n = i[(e + 8) >> 2];
                                  (i[(f + 16) >> 2] = 0),
                                    (0 | n) != (0 | (f = i[(f + 8) >> 2]));

                                );
                                (f = i[e >> 2]),
                                  (n = i[(e + 4) >> 2]),
                                  (i[(f + 4) >> 2] = n),
                                  (i[n >> 2] = f),
                                  O(e),
                                  (f = i[(a + 4) >> 2]);
                              }
                              (e = i[(f = a >>> 0 > f >>> 0 ? f : a) >> 2]),
                                (n = i[i[(f + 4) >> 2] >> 2]),
                                (i[i[(e + 4) >> 2] >> 2] = n),
                                (i[i[(n + 4) >> 2] >> 2] = e),
                                O(f);
                            }
                            if (((f = (0 | a) != (0 | s)), (a = k), !f)) break;
                          }
                          (a = i[o >> 2]),
                            (k = i[(o + 4) >> 2]),
                            (i[(a + 4) >> 2] = k),
                            (i[k >> 2] = a),
                            O(o);
                        }
                        if ((0 | t) == (0 | (o = r))) break;
                      }
                  }
                  function z(a, t) {
                    var f = 0,
                      n = 0,
                      e = 0,
                      o = 0,
                      b = 0,
                      k = 0;
                    if ((0 | (a |= 0)) != (0 | (t |= 0))) {
                      if (
                        (0 | (n = i[(t + 16) >> 2])) !=
                        (0 | (b = i[(a + 16) >> 2]))
                      ) {
                        for (
                          f = e = i[(n + 8) >> 2];
                          (i[(f + 16) >> 2] = b),
                            (0 | e) != (0 | (f = i[(f + 8) >> 2]));

                        );
                        (f = i[n >> 2]),
                          (e = i[(n + 4) >> 2]),
                          (i[(f + 4) >> 2] = e),
                          (i[e >> 2] = f),
                          O(n);
                      }
                      if (
                        (0 | (k = i[(a + 20) >> 2])) !=
                        (0 | (e = i[(t + 20) >> 2]))
                      ) {
                        for (
                          f = o = i[(e + 8) >> 2];
                          (i[(f + 20) >> 2] = k),
                            (0 | o) != (0 | (f = i[(f + 12) >> 2]));

                        );
                        (f = i[e >> 2]),
                          (o = i[(e + 4) >> 2]),
                          (i[(f + 4) >> 2] = o),
                          (i[o >> 2] = f),
                          O(e);
                      }
                      if (
                        ((f = i[(a + 8) >> 2]),
                        (o = i[(t + 8) >> 2]),
                        (i[(i[(o + 4) >> 2] + 12) >> 2] = a),
                        (i[(i[(f + 4) >> 2] + 12) >> 2] = t),
                        (i[(t + 8) >> 2] = f),
                        (i[(a + 8) >> 2] = o),
                        (0 | n) == (0 | b))
                      ) {
                        if (!(n = H(40))) return 0;
                        for (
                          f = i[(a + 16) >> 2],
                            b = i[(f + 4) >> 2],
                            i[(n + 4) >> 2] = b,
                            i[b >> 2] = n,
                            i[n >> 2] = f,
                            i[(f + 4) >> 2] = n,
                            i[(n + 12) >> 2] = 0,
                            i[(n + 8) >> 2] = t,
                            f = t;
                          (i[(f + 16) >> 2] = n),
                            (0 | (f = i[(f + 8) >> 2])) != (0 | t);

                        );
                        i[(i[(a + 16) >> 2] + 8) >> 2] = a;
                      }
                      if ((0 | e) == (0 | k)) {
                        if (!(n = H(24))) return 0;
                        for (
                          f = i[(a + 20) >> 2],
                            e = i[(f + 4) >> 2],
                            i[(n + 4) >> 2] = e,
                            i[e >> 2] = n,
                            i[n >> 2] = f,
                            i[(f + 4) >> 2] = n,
                            i[(n + 12) >> 2] = 0,
                            i[(n + 16) >> 2] = 0,
                            i[(n + 8) >> 2] = t,
                            p[(n + 20) | 0] = 0,
                            p[(n + 21) | 0] = w[(f + 21) | 0],
                            f = t;
                          (i[(f + 20) >> 2] = n),
                            (0 | (f = i[(f + 12) >> 2])) != (0 | t);

                        );
                        i[(i[(a + 20) >> 2] + 8) >> 2] = a;
                      }
                    }
                    return 1;
                  }
                  function u1(a, t) {
                    var f = 0,
                      n = 0,
                      e = 0,
                      o = 0,
                      b = 0,
                      k = 0,
                      s = u(0),
                      r = 0,
                      A = 0,
                      l = u(0);
                    if (i[(a + 20) >> 2]) {
                      (n = t),
                        (f = i[a >> 2]),
                        (a = (i[(f + 8) >> 2] + 1) | 0),
                        (i[(f + 8) >> 2] = a);
                      i: {
                        if (!((0 | (t = i[(f + 12) >> 2])) >= a << 1)) {
                          if (
                            ((i[(f + 12) >> 2] = t << 1),
                            (e = i[(f + 4) >> 2]),
                            (t = r0((o = i[f >> 2]), (t << 3) | 4)),
                            (i[f >> 2] = t),
                            !t)
                          ) {
                            (i[f >> 2] = o), (e = 2147483647);
                            break i;
                          }
                          if (
                            ((t = r0(
                              i[(f + 4) >> 2],
                              (8 + (i[(f + 12) >> 2] << 3)) | 0
                            )),
                            (i[(f + 4) >> 2] = t),
                            !t)
                          ) {
                            (i[(f + 4) >> 2] = e), (e = 2147483647);
                            break i;
                          }
                        }
                        if (
                          ((o = i[(f + 4) >> 2]),
                          (e = a),
                          (t = i[(f + 16) >> 2]) &&
                            ((i[(f + 16) >> 2] =
                              i[(4 + ((o + (t << 3)) | 0)) >> 2]),
                            (e = t)),
                          (b = i[f >> 2]),
                          (i[(b + (a << 2)) >> 2] = e),
                          (i[(k = (o + (e << 3)) | 0) >> 2] = n),
                          (i[(k + 4) >> 2] = a),
                          i[(f + 20) >> 2])
                        ) {
                          a: if (a >>> 0 < 2) t = a;
                          else
                            for (s = c[(n + 28) >> 2]; ; ) {
                              if (
                                ((f = i[(((t = a >> 1) << 2) + b) >> 2]),
                                (A = i[(r = (o + (f << 3)) | 0) >> 2]),
                                (l = c[(A + 28) >> 2]) < s)
                              ) {
                                t = a;
                                break a;
                              }
                              if (
                                !(
                                  !(c[(A + 32) >> 2] <= c[(n + 32) >> 2]) |
                                  (s != l)
                                )
                              ) {
                                t = a;
                                break a;
                              }
                              if (
                                ((i[((a << 2) + b) >> 2] = f),
                                (i[(r + 4) >> 2] = a),
                                !((a = t) >>> 0 > 1))
                              )
                                break;
                            }
                          (i[((t << 2) + b) >> 2] = e), (i[(k + 4) >> 2] = t);
                        }
                      }
                      return e;
                    }
                    if (
                      ((n = ((f = i[(a + 12) >> 2]) + 1) | 0),
                      (i[(a + 12) >> 2] = n),
                      (e = i[(a + 4) >> 2]),
                      (0 | (o = n)) < (0 | (n = i[(a + 16) >> 2])))
                    )
                      n = e;
                    else if (
                      ((i[(a + 16) >> 2] = n << 1),
                      (n = r0(e, n << 3)),
                      (i[(a + 4) >> 2] = n),
                      !n)
                    )
                      return (i[(a + 4) >> 2] = e), 2147483647;
                    return (i[((f << 2) + n) >> 2] = t), -1 ^ f;
                  }
                  function i0(a) {
                    a |= 0;
                    var t,
                      f,
                      n = 0,
                      e = 0,
                      o = 0,
                      b = 0,
                      k = 0;
                    (t = H(40)), (f = H(40));
                    i: {
                      if (!(o = H(24)) || !t | !f) {
                        if ((t && O(t), f && O(f), !o)) break i;
                        return O(o), 0;
                      }
                      if (!(n = H(64))) return 0;
                      for (
                        e = i[(a + 68) >> 2],
                          b =
                            i[
                              ((e =
                                e >>> 0 < (b = (a - -64) | 0) >>> 0 ? e : b) +
                                4) >>
                                2
                            ],
                          k = i[b >> 2],
                          i[(n + 32) >> 2] = k,
                          i[i[(k + 4) >> 2] >> 2] = n,
                          i[n >> 2] = e,
                          e = b,
                          b = (n + 32) | 0,
                          i[e >> 2] = b,
                          i[(n + 16) >> 2] = 0,
                          i[(n + 20) >> 2] = 0,
                          i[(n + 12) >> 2] = b,
                          i[(n + 4) >> 2] = b,
                          i[(n + 24) >> 2] = 0,
                          i[(n + 28) >> 2] = 0,
                          i[(n + 48) >> 2] = 0,
                          i[(n + 52) >> 2] = 0,
                          i[(n + 44) >> 2] = n,
                          i[(n + 40) >> 2] = b,
                          i[(n + 36) >> 2] = n,
                          i[(n + 56) >> 2] = 0,
                          i[(n + 60) >> 2] = 0,
                          i[(n + 8) >> 2] = n,
                          e = i[(a + 4) >> 2],
                          i[(t + 4) >> 2] = e,
                          i[e >> 2] = t,
                          i[(t + 12) >> 2] = 0,
                          i[(t + 8) >> 2] = n,
                          e = n;
                        (i[(e + 16) >> 2] = t),
                          (0 | (e = i[(e + 8) >> 2])) != (0 | n);

                      );
                      for (
                        i[(f + 4) >> 2] = t,
                          i[t >> 2] = f,
                          i[f >> 2] = a,
                          i[(a + 4) >> 2] = f,
                          i[(f + 12) >> 2] = 0,
                          i[(f + 8) >> 2] = b,
                          e = b;
                        (i[(e + 16) >> 2] = f),
                          (0 | b) != (0 | (e = i[(e + 8) >> 2]));

                      );
                      for (
                        e = i[(a + 44) >> 2],
                          i[(o + 4) >> 2] = e,
                          i[e >> 2] = o,
                          i[o >> 2] = a + 40,
                          i[(a + 44) >> 2] = o,
                          i[(o + 12) >> 2] = 0,
                          i[(o + 16) >> 2] = 0,
                          i[(o + 8) >> 2] = n,
                          p[(o + 20) | 0] = 0,
                          p[(o + 21) | 0] = w[(a + 61) | 0],
                          e = n;
                        (i[(e + 20) >> 2] = o),
                          (0 | (e = i[(e + 12) >> 2])) != (0 | n);

                      );
                    }
                    return 0 | n;
                  }
                  function C0(a, t) {
                    var f = 0,
                      n = 0,
                      e = 0,
                      o = 0,
                      b = 0,
                      k = 0;
                    (i[(a + 8) >> 2] = i[283]),
                      (f = i[282]),
                      (i[a >> 2] = i[281]),
                      (i[(a + 4) >> 2] = f),
                      (f = i[(t + 20) >> 2]);
                    i: if (w[(f + 21) | 0]) {
                      e = t;
                      a: {
                        f: {
                          for (;;) {
                            if (w[(f + 20) | 0]) break i;
                            if (
                              ((p[(f + 20) | 0] = 1),
                              (i[(f + 16) >> 2] = n),
                              (e = i[(i[(e + 12) >> 2] + 4) >> 2]),
                              (n = i[(e + 20) >> 2]),
                              w[(n + 21) | 0])
                            ) {
                              if (w[(n + 20) | 0]) break f;
                              if (
                                ((p[(n + 20) | 0] = 1),
                                (i[(n + 16) >> 2] = f),
                                (o = (o + 2) | 0),
                                (e = i[(e + 8) >> 2]),
                                (f = i[(e + 20) >> 2]),
                                w[(f + 21) | 0])
                              )
                                continue;
                              break i;
                            }
                            break;
                          }
                          o |= 1;
                          break a;
                        }
                        o |= 1;
                      }
                      n = f;
                    } else e = t;
                    (b = i[(t + 4) >> 2]), (f = i[(b + 20) >> 2]);
                    i: if (!(!w[(f + 21) | 0] | w[(f + 20) | 0])) {
                      a: {
                        f: {
                          for (;;) {
                            if (
                              ((p[(f + 20) | 0] = 1),
                              (i[(f + 16) >> 2] = n),
                              (t = i[(b + 12) >> 2]),
                              (b = i[(t + 4) >> 2]),
                              (n = i[(b + 20) >> 2]),
                              w[(n + 21) | 0])
                            ) {
                              if (w[(n + 20) | 0]) break f;
                              if (
                                ((p[(n + 20) | 0] = 1),
                                (i[(n + 16) >> 2] = f),
                                (k = (k + 2) | 0),
                                (t = i[(i[(b + 8) >> 2] + 4) >> 2]),
                                (b = i[(t + 4) >> 2]),
                                (f = i[(b + 20) >> 2]),
                                !w[(f + 21) | 0])
                              )
                                break i;
                              if (!w[(f + 20) | 0]) continue;
                              break i;
                            }
                            break;
                          }
                          k |= 1;
                          break a;
                        }
                        k |= 1;
                      }
                      n = f;
                    }
                    (f = (o + k) | 0), (i[a >> 2] = f);
                    i: {
                      if (1 & o) {
                        if (!(1 & k)) break i;
                        (i[a >> 2] = f - 1), (t = (t + 8) | 0);
                      } else t = (e + 4) | 0;
                      t = i[t >> 2];
                    }
                    if (((i[(a + 4) >> 2] = t), n))
                      for (; (p[(n + 20) | 0] = 0), (n = i[(n + 16) >> 2]); );
                  }
                  function R2(a, t) {
                    t |= 0;
                    var f = 0;
                    if ((0 | (f = i[(a |= 0) >> 2])) != (0 | t))
                      for (;;) {
                        i: if (t >>> 0 > f >>> 0) {
                          a: switch (0 | f) {
                            case 0:
                              (0 | (f = i[(a + 1732) >> 2])) == 11
                                ? _[i[(a + 12) >> 2]](100151)
                                : _[0 | f](100151, i[(a + 1896) >> 2]),
                                i[a >> 2] && R2(a, 0),
                                (i[(a + 112) >> 2] = 0),
                                (f = 1),
                                (i[a >> 2] = 1),
                                (p[(a + 108) | 0] = 0),
                                (i[(a + 1896) >> 2] = 0),
                                (i[(a + 8) >> 2] = 0);
                              break i;
                            case 1:
                              break a;
                            default:
                              break i;
                          }
                          if (
                            ((0 | (f = i[(a + 1732) >> 2])) == 11
                              ? _[i[(a + 12) >> 2]](100152)
                              : _[0 | f](100152, i[(a + 1896) >> 2]),
                            i[a >> 2] != 1 && R2(a, 1),
                            (i[a >> 2] = 2),
                            (i[(a + 4) >> 2] = 0),
                            (f = 2),
                            i[(a + 112) >> 2] < 1)
                          )
                            break i;
                          p[(a + 108) | 0] = 1;
                        } else {
                          a: switch ((f - 1) | 0) {
                            case 1:
                              (0 | (f = i[(a + 1732) >> 2])) == 11
                                ? _[i[(a + 12) >> 2]](100154)
                                : _[0 | f](100154, i[(a + 1896) >> 2]),
                                i[a >> 2] != 2 && R2(a, 2),
                                (f = 1),
                                (i[a >> 2] = 1);
                              break i;
                            case 0:
                              break a;
                            default:
                              break i;
                          }
                          (0 | (f = i[(a + 1732) >> 2])) == 11
                            ? _[i[(a + 12) >> 2]](100153)
                            : _[0 | f](100153, i[(a + 1896) >> 2]),
                            (f = i[(a + 8) >> 2]) && I0(f),
                            (f = 0),
                            (i[(a + 8) >> 2] = 0),
                            (i[a >> 2] = 0),
                            (i[(a + 4) >> 2] = 0);
                        }
                        if ((0 | t) == (0 | f)) break;
                      }
                  }
                  function c1(a, t, f) {
                    var n = 0,
                      e = 0,
                      o = 0,
                      b = 0,
                      k = 0,
                      s = 0,
                      r = 0,
                      A = 0,
                      l = 0;
                    i: {
                      a: {
                        f: {
                          n: {
                            t: {
                              b: {
                                e: {
                                  c: {
                                    u: {
                                      o: {
                                        if (((e = t), t)) {
                                          if (!(n = f)) break o;
                                          break u;
                                        }
                                        (a = ((a >>> 0) / (f >>> 0)) | 0),
                                          (v2 = 0);
                                        break i;
                                      }
                                      if (!a) break c;
                                      break e;
                                    }
                                    if (!((n - 1) & n)) break b;
                                    s =
                                      (0 -
                                        (k =
                                          (((c0(n) + 33) | 0) - c0(e)) | 0)) |
                                      0;
                                    break n;
                                  }
                                  (a = ((e >>> 0) / 0) | 0), (v2 = 0);
                                  break i;
                                }
                                if ((n = (32 - c0(e)) | 0) >>> 0 < 31) break t;
                                break f;
                              }
                              if ((0 | n) == 1) break a;
                              (f =
                                31 & (n = n ? (31 - c0((n - 1) ^ n)) | 0 : 32)),
                                (63 & n) >>> 0 >= 32
                                  ? ((e = 0), (a = (t >>> f) | 0))
                                  : ((e = (t >>> f) | 0),
                                    (a =
                                      ((((1 << f) - 1) & t) << (32 - f)) |
                                      (a >>> f))),
                                (v2 = e);
                              break i;
                            }
                            (k = (n + 1) | 0), (s = (63 - n) | 0);
                          }
                          if (
                            ((n = t),
                            (o = 31 & (e = 63 & k)),
                            e >>> 0 >= 32
                              ? ((e = 0), (o = (n >>> o) | 0))
                              : ((e = (n >>> o) | 0),
                                (o =
                                  ((((1 << o) - 1) & n) << (32 - o)) |
                                  (a >>> o))),
                            (n = 31 & (s &= 63)),
                            s >>> 0 >= 32
                              ? ((t = a << n), (a = 0))
                              : ((t =
                                  (((1 << n) - 1) & (a >>> (32 - n))) |
                                  (t << n)),
                                (a <<= n)),
                            k)
                          )
                            for (
                              s = (0 | (n = (f - 1) | 0)) != -1 ? 0 : -1;
                              (o =
                                ((r = b = (o << 1) | (t >>> 31)) -
                                  (A =
                                    f &
                                    (b =
                                      (s -
                                        (((e = (e << 1) | (o >>> 31)) +
                                          (n >>> 0 < b >>> 0)) |
                                          0)) >>
                                      31))) |
                                0),
                                (e = (e - (r >>> 0 < A >>> 0)) | 0),
                                (t = (t << 1) | (a >>> 31)),
                                (a = l | (a << 1)),
                                (l = b &= 1),
                                (k = (k - 1) | 0);

                            );
                          (v2 = (t << 1) | (a >>> 31)), (a = b | (a << 1));
                          break i;
                        }
                        (a = 0), (t = 0);
                      }
                      v2 = t;
                    }
                    return a;
                  }
                  function s1(a) {
                    var t,
                      f,
                      n,
                      e,
                      o = 0,
                      b = 0,
                      k = 0,
                      s = u(0),
                      r = 0,
                      A = u(0),
                      l = 0,
                      v = 0,
                      h = 0,
                      d = 0,
                      g = 0;
                    if (
                      ((f = i[(a + 4) >> 2]),
                      (t = i[a >> 2]),
                      (b = i[(t + 4) >> 2]),
                      (e = i[(o = (f + (b << 3)) | 0) >> 2]),
                      !((0 | (n = i[(a + 8) >> 2])) < 1) &&
                        ((l = i[((n << 2) + t) >> 2]),
                        (i[(t + 4) >> 2] = l),
                        (i[(4 + (v = ((l << 3) + f) | 0)) >> 2] = 1),
                        (i[o >> 2] = 0),
                        (i[(o + 4) >> 2] = i[(a + 16) >> 2]),
                        (h = (n - 1) | 0),
                        (i[(a + 8) >> 2] = h),
                        (i[(a + 16) >> 2] = b),
                        (0 | n) != 1))
                    ) {
                      for (
                        g = ((l << 3) + f) | 0, o = 1;
                        (0 | h) <= (0 | (a = o << 1)) ||
                          ((k =
                            i[
                              ((i[(((b = 1 | a) << 2) + t) >> 2] << 3) + f) >> 2
                            ]),
                          (s = c[(k + 28) >> 2]),
                          (r = i[((i[((a << 2) + t) >> 2] << 3) + f) >> 2]),
                          (A = c[(r + 28) >> 2]),
                          (!(c[(k + 32) >> 2] <= c[(r + 32) >> 2]) | (s != A) &&
                            !(s < A)) ||
                            (a = b)),
                          !(
                            (0 | a) >= (0 | n) ||
                            ((b = i[g >> 2]),
                            (s = c[(b + 28) >> 2]),
                            (k = i[((a << 2) + t) >> 2]),
                            (d = i[(r = ((k << 3) + f) | 0) >> 2]),
                            (s < (A = c[(d + 28) >> 2])) |
                              (c[(b + 32) >> 2] <= c[(d + 32) >> 2]
                                ? s == A
                                : 0))
                          );

                      )
                        (i[((o << 2) + t) >> 2] = k),
                          (i[(r + 4) >> 2] = o),
                          (o = a);
                      (i[((o << 2) + t) >> 2] = l), (i[(v + 4) >> 2] = o);
                    }
                    return e;
                  }
                  function r1(a, t, f) {
                    var n = 0,
                      e = 0;
                    if (
                      f &&
                      ((p[((n = (a + f) | 0) - 1) | 0] = t),
                      (p[0 | a] = t),
                      !(
                        f >>> 0 < 3 ||
                        ((p[(n - 2) | 0] = t),
                        (p[(a + 1) | 0] = t),
                        (p[(n - 3) | 0] = t),
                        (p[(a + 2) | 0] = t),
                        f >>> 0 < 7 ||
                          ((p[(n - 4) | 0] = t),
                          (p[(a + 3) | 0] = t),
                          f >>> 0 < 9 ||
                            ((n = ((n = a) + (a = (0 - a) & 3)) | 0),
                            (e = Q(255 & t, 16843009)),
                            (i[n >> 2] = e),
                            (i[((t = ((a = (f - a) & -4) + n) | 0) - 4) >> 2] =
                              e),
                            a >>> 0 < 9 ||
                              ((i[(n + 8) >> 2] = e),
                              (i[(n + 4) >> 2] = e),
                              (i[(t - 8) >> 2] = e),
                              (i[(t - 12) >> 2] = e),
                              a >>> 0 < 25 ||
                                ((i[(n + 24) >> 2] = e),
                                (i[(n + 20) >> 2] = e),
                                (i[(n + 16) >> 2] = e),
                                (i[(n + 12) >> 2] = e),
                                (i[(t - 16) >> 2] = e),
                                (i[(t - 20) >> 2] = e),
                                (i[(t - 24) >> 2] = e),
                                (i[(t - 28) >> 2] = e),
                                (f = (a - (t = (4 & n) | 24)) | 0) >>> 0 <
                                  32)))))
                      ))
                    )
                      for (
                        e = S0(e, 0, 1, 1), a = v2, t = (t + n) | 0;
                        (i[(t + 24) >> 2] = e),
                          (n = a),
                          (i[(t + 28) >> 2] = n),
                          (i[(t + 16) >> 2] = e),
                          (i[(t + 20) >> 2] = n),
                          (i[(t + 8) >> 2] = e),
                          (i[(t + 12) >> 2] = n),
                          (i[t >> 2] = e),
                          (i[(t + 4) >> 2] = n),
                          (t = (t + 32) | 0),
                          (f = (f - 32) | 0) >>> 0 > 31;

                      );
                  }
                  function A1(a, t, f) {
                    i: if (!(t >>> 0 > 20)) {
                      a: switch ((t - 9) | 0) {
                        case 0:
                          return (
                            (t = i[f >> 2]),
                            (i[f >> 2] = t + 4),
                            void (i[a >> 2] = i[t >> 2])
                          );
                        case 1:
                          return (
                            (t = i[f >> 2]),
                            (i[f >> 2] = t + 4),
                            (t = i[t >> 2]),
                            (i[a >> 2] = t),
                            void (i[(a + 4) >> 2] = t >> 31)
                          );
                        case 2:
                          return (
                            (t = i[f >> 2]),
                            (i[f >> 2] = t + 4),
                            (i[a >> 2] = i[t >> 2]),
                            void (i[(a + 4) >> 2] = 0)
                          );
                        case 3:
                          return (
                            (t = (i[f >> 2] + 7) & -8),
                            (i[f >> 2] = t + 8),
                            (f = i[(t + 4) >> 2]),
                            (i[a >> 2] = i[t >> 2]),
                            void (i[(a + 4) >> 2] = f)
                          );
                        case 4:
                          return (
                            (t = i[f >> 2]),
                            (i[f >> 2] = t + 4),
                            (t = c2[t >> 1]),
                            (i[a >> 2] = t),
                            void (i[(a + 4) >> 2] = t >> 31)
                          );
                        case 5:
                          return (
                            (t = i[f >> 2]),
                            (i[f >> 2] = t + 4),
                            (i[a >> 2] = B2[t >> 1]),
                            void (i[(a + 4) >> 2] = 0)
                          );
                        case 6:
                          return (
                            (t = i[f >> 2]),
                            (i[f >> 2] = t + 4),
                            (t = p[0 | t]),
                            (i[a >> 2] = t),
                            void (i[(a + 4) >> 2] = t >> 31)
                          );
                        case 7:
                          return (
                            (t = i[f >> 2]),
                            (i[f >> 2] = t + 4),
                            (i[a >> 2] = w[0 | t]),
                            void (i[(a + 4) >> 2] = 0)
                          );
                        case 8:
                          return (
                            (t = (i[f >> 2] + 7) & -8),
                            (i[f >> 2] = t + 8),
                            void ($[a >> 3] = $[t >> 3])
                          );
                        case 9:
                          break a;
                        default:
                          break i;
                      }
                      _[0](a, f);
                    }
                  }
                  function V(a, t, f) {
                    var n,
                      e = u(0),
                      o = u(0),
                      b = 0,
                      k = u(0),
                      s = u(0),
                      r = 0,
                      A = u(0),
                      l = u(0);
                    (F = n = (F + -64) | 0),
                      (r = (e = c[(t + 28) >> 2]) > (o = c[(a + 28) >> 2]));
                    i: {
                      a: {
                        if (
                          !(
                            !(c[(a + 32) >> 2] <= c[(t + 32) >> 2]) |
                            (e != o)
                          ) ||
                          r
                        ) {
                          if (
                            ((k = c[(f + 28) >> 2]) > e) |
                            (c[(t + 32) >> 2] <= c[(f + 32) >> 2] ? e == k : 0)
                          )
                            break i;
                          if (((b = 1), r)) break a;
                        }
                        (b = 0),
                          e == o && (b = c[(a + 32) >> 2] <= c[(t + 32) >> 2]);
                      }
                      (r = b),
                        (b = 1),
                        (k = c[(f + 28) >> 2]) > e ||
                          ((b = 0),
                          e == k && (b = c[(t + 32) >> 2] <= c[(f + 32) >> 2])),
                        (s = c[(a + 32) >> 2]),
                        (A = c[(t + 32) >> 2]),
                        (l = c[(f + 32) >> 2]),
                        ($[(n + 40) >> 3] = k),
                        ($[(n + 24) >> 3] = e),
                        ($[(n + 48) >> 3] = l),
                        ($[(n + 32) >> 3] = A),
                        ($[(n + 16) >> 3] = s),
                        ($[(n + 8) >> 3] = o),
                        (i[(n + 4) >> 2] = b),
                        (i[n >> 2] = r),
                        y1(1092, n),
                        (k = c[(f + 28) >> 2]),
                        (o = c[(a + 28) >> 2]),
                        (e = c[(t + 28) >> 2]);
                    }
                    return (
                      (s = u(0)),
                      (F = (n - -64) | 0),
                      (o = u(e - o)),
                      (e = u(k - e)),
                      u(o + e) > u(0) &&
                        ((s = o),
                        (o = c[(t + 32) >> 2]),
                        (s = u(
                          u(s * u(o - c[(f + 32) >> 2])) +
                            u(e * u(o - c[(a + 32) >> 2]))
                        ))),
                      s
                    );
                  }
                  function a0(a, t, f) {
                    var n = 0,
                      e = 0,
                      o = 0,
                      b = 0;
                    n = i[t >> 2];
                    i: {
                      if ((0 | t) != (0 | f))
                        for (;;) {
                          if (
                            ((p[(t + 15) | 0] = 0),
                            (b = i[(t + 4) >> 2]),
                            (o = i[i[(b + 8) >> 2] >> 2]),
                            (e = i[o >> 2]),
                            i[(e + 16) >> 2] != i[(n + 16) >> 2])
                          ) {
                            if (!w[(o + 15) | 0])
                              return (
                                (a = w[(t + 12) | 0]),
                                (f = i[(n + 20) >> 2]),
                                (i[(f + 8) >> 2] = n),
                                (p[(f + 21) | 0] = a),
                                (i[(n + 24) >> 2] = 0),
                                p2(b),
                                O(t),
                                n
                              );
                            if (
                              !(e = h2(
                                i[(i[(n + 8) >> 2] + 4) >> 2],
                                i[(e + 4) >> 2]
                              )) ||
                              !i2(i[o >> 2])
                            )
                              break i;
                            (i[o >> 2] = e),
                              (p[(o + 15) | 0] = 0),
                              (i[(e + 24) >> 2] = o);
                          }
                          if (
                            i[(n + 8) >> 2] != (0 | e) &&
                            (!z(i[(i[(e + 4) >> 2] + 12) >> 2], e) || !z(n, e))
                          )
                            break i;
                          if (
                            ((e = w[(t + 12) | 0]),
                            (n = i[t >> 2]),
                            (b = i[(n + 20) >> 2]),
                            (i[(b + 8) >> 2] = n),
                            (p[(b + 21) | 0] = e),
                            (i[(n + 24) >> 2] = 0),
                            p2(i[(t + 4) >> 2]),
                            O(t),
                            (n = i[o >> 2]),
                            (0 | f) == (0 | (t = o)))
                          )
                            break;
                        }
                      return n;
                    }
                    b2((a + 1740) | 0, 1), o2();
                  }
                  function q2(a, t, f) {
                    switch ((t - 100100) | 0) {
                      case 0:
                        return void (i[(a + 88) >> 2] = f || 15);
                      case 6:
                        return void (i[(a + 1716) >> 2] = f || 3);
                      case 4:
                        return (
                          (p[(a + 80) | 0] = (0 | f) != 0),
                          void (i[(a + 92) >> 2] = f || 14)
                        );
                      case 10:
                        return (
                          (p[(a + 80) | 0] = (0 | f) != 0),
                          void (i[(a + 1720) >> 2] = f || 4)
                        );
                      case 1:
                        return void (i[(a + 96) >> 2] = f || 13);
                      case 7:
                        return void (i[(a + 1724) >> 2] = f || 5);
                      case 2:
                        return void (i[(a + 100) >> 2] = f || 12);
                      case 8:
                        return void (i[(a + 1728) >> 2] = f || 6);
                      case 3:
                        return void (i[(a + 12) >> 2] = f || 18);
                      case 9:
                        return void (i[(a + 1732) >> 2] = f || 11);
                      case 5:
                        return void (i[(a + 76) >> 2] = f || 17);
                      case 11:
                        return void (i[(a + 1736) >> 2] = f || 8);
                      case 12:
                        return void (i[(a + 104) >> 2] = f || 16);
                    }
                    (0 | (t = i[(a + 1732) >> 2])) == 11
                      ? _[i[(a + 12) >> 2]](100900)
                      : _[0 | t](100900, i[(a + 1896) >> 2]);
                  }
                  function X(a, t, f) {
                    var n = 0,
                      e = 0,
                      o = 0;
                    if (!(32 & w[0 | a]))
                      i: {
                        (e = t), (n = f);
                        a: {
                          if (!(a = i[((t = a) + 16) >> 2])) {
                            if (
                              ((a = w[(t + 74) | 0]),
                              (p[(t + 74) | 0] = (a - 1) | a),
                              8 & (a = i[t >> 2])
                                ? ((i[t >> 2] = 32 | a), (a = -1))
                                : ((i[(t + 4) >> 2] = 0),
                                  (i[(t + 8) >> 2] = 0),
                                  (a = i[(t + 44) >> 2]),
                                  (i[(t + 28) >> 2] = a),
                                  (i[(t + 20) >> 2] = a),
                                  (i[(t + 16) >> 2] = a + i[(t + 48) >> 2]),
                                  (a = 0)),
                              a)
                            )
                              break a;
                            a = i[(t + 16) >> 2];
                          }
                          if ((a - (o = i[(t + 20) >> 2])) >>> 0 < n >>> 0) {
                            _[i[(t + 36) >> 2]](t, e, f);
                            break i;
                          }
                          f: if (!(p[(t + 75) | 0] < 0)) {
                            for (a = f; ; ) {
                              if (((n = a), !a)) break f;
                              if (w[(e + (a = (n - 1) | 0)) | 0] == 10) break;
                            }
                            if (_[i[(t + 36) >> 2]](t, e, n) >>> 0 < n >>> 0)
                              break a;
                            (e = (n + e) | 0),
                              (f = (f - n) | 0),
                              (o = i[(t + 20) >> 2]);
                          }
                          b1(o, e, f),
                            (i[(t + 20) >> 2] = i[(t + 20) >> 2] + f);
                        }
                      }
                  }
                  function l1(a, t, f, n) {
                    var e,
                      o = 0;
                    (F = e = (F - 208) | 0),
                      (i[(e + 204) >> 2] = f),
                      r1((e + 160) | 0, 0, 40),
                      (i[(e + 200) >> 2] = i[(e + 204) >> 2]),
                      (0 |
                        y0(
                          0,
                          t,
                          (e + 200) | 0,
                          (e + 80) | 0,
                          (e + 160) | 0,
                          n
                        )) <
                        0 ||
                        (i[(a + 76) >> 2],
                        (f = i[a >> 2]),
                        p[(a + 74) | 0] <= 0 && (i[a >> 2] = -33 & f),
                        (o = 32 & f),
                        i[(a + 48) >> 2]
                          ? y0(
                              a,
                              t,
                              (e + 200) | 0,
                              (e + 80) | 0,
                              (e + 160) | 0,
                              n
                            )
                          : ((i[(a + 48) >> 2] = 80),
                            (i[(a + 16) >> 2] = e + 80),
                            (i[(a + 28) >> 2] = e),
                            (i[(a + 20) >> 2] = e),
                            (f = i[(a + 44) >> 2]),
                            (i[(a + 44) >> 2] = e),
                            y0(
                              a,
                              t,
                              (e + 200) | 0,
                              (e + 80) | 0,
                              (e + 160) | 0,
                              n
                            ),
                            f &&
                              (_[i[(a + 36) >> 2]](a, 0, 0),
                              (i[(a + 48) >> 2] = 0),
                              (i[(a + 44) >> 2] = f),
                              (i[(a + 28) >> 2] = 0),
                              (i[(a + 16) >> 2] = 0),
                              (i[(a + 20) >> 2] = 0))),
                        (i[a >> 2] = i[a >> 2] | o)),
                      (F = (e + 208) | 0);
                  }
                  function v1(a, t) {
                    if (!a) return 0;
                    i: {
                      a: {
                        if (a) {
                          if (t >>> 0 <= 127) break a;
                          if (i[i[493] >> 2]) {
                            if (t >>> 0 <= 2047) {
                              (p[(a + 1) | 0] = (63 & t) | 128),
                                (p[0 | a] = (t >>> 6) | 192),
                                (a = 2);
                              break i;
                            }
                            if (!((-8192 & t) != 57344 && t >>> 0 >= 55296)) {
                              (p[(a + 2) | 0] = (63 & t) | 128),
                                (p[0 | a] = (t >>> 12) | 224),
                                (p[(a + 1) | 0] = ((t >>> 6) & 63) | 128),
                                (a = 3);
                              break i;
                            }
                            if ((t - 65536) >>> 0 <= 1048575) {
                              (p[(a + 3) | 0] = (63 & t) | 128),
                                (p[0 | a] = (t >>> 18) | 240),
                                (p[(a + 2) | 0] = ((t >>> 6) & 63) | 128),
                                (p[(a + 1) | 0] = ((t >>> 12) & 63) | 128),
                                (a = 4);
                              break i;
                            }
                          } else if ((-128 & t) == 57216) break a;
                          (i[613] = 25), (a = -1);
                        } else a = 1;
                        break i;
                      }
                      (p[0 | a] = t), (a = 1);
                    }
                    return a;
                  }
                  function R0() {
                    var a,
                      t = 0,
                      f = 0;
                    return (a = H(128))
                      ? ((i[(a + 8) >> 2] = 0),
                        (i[(a + 12) >> 2] = 0),
                        (t = (a + 40) | 0),
                        (i[(a + 44) >> 2] = t),
                        (i[(a + 48) >> 2] = 0),
                        (i[(a + 52) >> 2] = 0),
                        (i[(a + 40) >> 2] = t),
                        (c2[(a + 54) >> 1] = 0),
                        (c2[(a + 56) >> 1] = 0),
                        (c2[(a + 58) >> 1] = 0),
                        (c2[(a + 60) >> 1] = 0),
                        (i[(a + 72) >> 2] = 0),
                        (i[(a + 76) >> 2] = 0),
                        (t = (a + 96) | 0),
                        (i[(a + 68) >> 2] = t),
                        (f = (a - -64) | 0),
                        (i[(a + 64) >> 2] = f),
                        (i[(a + 80) >> 2] = 0),
                        (i[(a + 84) >> 2] = 0),
                        (i[(a + 88) >> 2] = 0),
                        (i[(a + 92) >> 2] = 0),
                        (i[(a + 104) >> 2] = 0),
                        (i[(a + 108) >> 2] = 0),
                        (i[(a + 100) >> 2] = f),
                        (i[(a + 96) >> 2] = t),
                        (i[(a + 112) >> 2] = 0),
                        (i[(a + 116) >> 2] = 0),
                        (i[(a + 120) >> 2] = 0),
                        (i[(a + 124) >> 2] = 0),
                        (i[a >> 2] = a),
                        (i[(a + 4) >> 2] = a),
                        0 | a)
                      : 0;
                  }
                  function M0(a) {
                    var t,
                      f,
                      n = 0,
                      e = 0,
                      o = 0,
                      b = u(0),
                      k = u(0),
                      s = 0;
                    if (!(n = i[(a + 12) >> 2])) return s1(i[a >> 2]);
                    if (
                      ((f = i[(a + 8) >> 2]),
                      (t = i[i[(((f + (n << 2)) | 0) - 4) >> 2] >> 2]),
                      (e = i[a >> 2]),
                      i[(e + 8) >> 2] &&
                        ((o =
                          i[
                            (i[(e + 4) >> 2] +
                              (i[(i[e >> 2] + 4) >> 2] << 3)) >>
                              2
                          ]),
                        (b = c[(o + 28) >> 2]),
                        (k = c[(t + 28) >> 2]),
                        !(!(c[(o + 32) >> 2] <= c[(t + 32) >> 2]) | (b != k)) ||
                          b < k))
                    )
                      return s1(e);
                    for (e = (((0 | n) < 1 ? n : 1) - 1) | 0; ; ) {
                      if ((0 | n) < 2) return (i[(a + 12) >> 2] = e), t;
                      if (
                        ((o = n << 2),
                        (n = s = (n - 1) | 0),
                        i[i[(((o + f) | 0) - 8) >> 2] >> 2])
                      )
                        break;
                    }
                    return (i[(a + 12) >> 2] = s), t;
                  }
                  function h1(a, t) {
                    var f = 0,
                      n = 0,
                      e = 0;
                    ((f = H(16)) &&
                      (e = i0(i[(a + 8) >> 2])) &&
                      ((n = i[(e + 16) >> 2]),
                      (c[(n + 32) >> 2] = t),
                      (i[(n + 28) >> 2] = 2112929218),
                      (n = i[(i[(e + 4) >> 2] + 16) >> 2]),
                      (c[(n + 32) >> 2] = t),
                      (i[(n + 28) >> 2] = -34554430),
                      (i[(a + 72) >> 2] = n),
                      (p[(f + 15) | 0] = 0),
                      (p[(f + 12) | 0] = 0),
                      (i[(f + 8) >> 2] = 0),
                      (i[f >> 2] = e),
                      (p[(f + 13) | 0] = 1),
                      (p[(f + 14) | 0] = 0),
                      (n = f),
                      (f = _0((e = i[(a + 64) >> 2]), e, f)),
                      (i[(n + 4) >> 2] = f),
                      f)) ||
                      (b2((a + 1740) | 0, 1), o2());
                  }
                  function I0(a) {
                    var t = 0,
                      f = 0,
                      n = 0;
                    if (
                      (0 | (t = i[(40 + (a |= 0)) >> 2])) !=
                      (0 | (f = (a + 40) | 0))
                    )
                      for (; (n = i[t >> 2]), O(t), (0 | f) != (0 | (t = n)); );
                    if ((0 | (t = i[a >> 2])) != (0 | a))
                      for (; (n = i[t >> 2]), O(t), (0 | (t = n)) != (0 | a); );
                    if (
                      (0 | (t = i[(a + 64) >> 2])) !=
                      (0 | (f = (a - -64) | 0))
                    )
                      for (; (n = i[t >> 2]), O(t), (0 | f) != (0 | (t = n)); );
                    O(a);
                  }
                  function d1(a) {
                    var t = 0,
                      f = u(0),
                      n = u(0);
                    if (!(t = i[(a + 12) >> 2]))
                      return (
                        (a = i[a >> 2]),
                        i[
                          (i[(a + 4) >> 2] + (i[(i[a >> 2] + 4) >> 2] << 3)) >>
                            2
                        ]
                      );
                    (t =
                      i[i[(((i[(a + 8) >> 2] + (t << 2)) | 0) - 4) >> 2] >> 2]),
                      (a = i[a >> 2]);
                    i: {
                      if (
                        i[(a + 8) >> 2] &&
                        ((a =
                          i[
                            (i[(a + 4) >> 2] +
                              (i[(i[a >> 2] + 4) >> 2] << 3)) >>
                              2
                          ]),
                        (f = c[(a + 28) >> 2]) < (n = c[(t + 28) >> 2]) ||
                          (f == n && c[(a + 32) >> 2] <= c[(t + 32) >> 2]))
                      )
                        break i;
                      a = t;
                    }
                    return a;
                  }
                  function z2(a, t, f) {
                    var n = 0,
                      e = 0,
                      o = 0;
                    if (t >>> 0 < 1) n = a;
                    else
                      for (
                        ;
                        (n = c1(a, t, 10)),
                          (o = e = v2),
                          (e = S0(n, e, 10, 0)),
                          (p[0 | (f = (f - 1) | 0)] = (a - e) | 48),
                          (e = t >>> 0 > 9),
                          (a = n),
                          (t = o),
                          e;

                      );
                    if (n)
                      for (
                        ;
                        (a = ((n >>> 0) / 10) | 0),
                          (p[0 | (f = (f - 1) | 0)] = (n - Q(a, 10)) | 48),
                          (t = n >>> 0 > 9),
                          (n = a),
                          t;

                      );
                    return f;
                  }
                  function p1(a, t, f, n) {
                    var e,
                      o = 0,
                      b = 0;
                    if (
                      ((e = (i[610] + 1) | 0), (i[610] = e), (i[a >> 2] = e), n)
                    )
                      for (;;) {
                        if (!i[(b = ((o << 3) + f) | 0) >> 2])
                          return (
                            (i[b >> 2] = e),
                            (i[(4 + (a = ((o << 3) + f) | 0)) >> 2] = t),
                            (i[(a + 8) >> 2] = 0),
                            Y(0 | n),
                            f
                          );
                        if ((0 | (o = (o + 1) | 0)) == (0 | n)) break;
                      }
                    return (
                      (o = a),
                      (a = n << 1),
                      (t = p1(o, t, r0(f, (n << 4) | 8), a)),
                      Y(0 | a),
                      t
                    );
                  }
                  function m1(a, t) {
                    var f,
                      n,
                      e = 0;
                    if (
                      (w0(+a),
                      (e = 0 | l2(1)),
                      (f = 0 | l2(0)),
                      (n = e),
                      (0 | (e = (e >>> 20) & 2047)) != 2047)
                    ) {
                      if (!e)
                        return (
                          (e = t),
                          a == 0
                            ? (t = 0)
                            : ((a = m1(18446744073709552e3 * a, t)),
                              (t = (i[t >> 2] + -64) | 0)),
                          (i[e >> 2] = t),
                          a
                        );
                      (i[t >> 2] = e - 1022),
                        i1(0, 0 | f),
                        i1(1, (-2146435073 & n) | 1071644672),
                        (a = +B1());
                    }
                    return a;
                  }
                  function g1(a, t, f) {
                    var n = u(0),
                      e = u(0),
                      o = u(0),
                      b = u(0),
                      k = u(0);
                    return (
                      (n = c[(t + 28) >> 2]),
                      (e = u(n - c[(a + 28) >> 2])),
                      (n = u(c[(f + 28) >> 2] - n)),
                      (o = u(e + n)) > u(0)
                        ? ((k = c[(t + 32) >> 2]),
                          (b = c[(((t = n > e) ? a : f) + 32) >> 2]),
                          (n = u(
                            u(k - b) +
                              u(
                                u((t ? e : n) / o) *
                                  u(b - c[((t ? f : a) + 32) >> 2])
                              )
                          )))
                        : (n = u(0)),
                      n
                    );
                  }
                  function _0(a, t, f) {
                    for (
                      var n = 0;
                      (t = i[(t + 8) >> 2]),
                        (n = i[t >> 2]) &&
                          !(0 | _[i[(a + 16) >> 2]](i[(a + 12) >> 2], n, f));

                    );
                    return (a = H(12))
                      ? ((i[a >> 2] = f),
                        (i[(a + 4) >> 2] = i[(t + 4) >> 2]),
                        (i[(i[(t + 4) >> 2] + 8) >> 2] = a),
                        (i[(a + 8) >> 2] = t),
                        (i[(t + 4) >> 2] = a),
                        a)
                      : 0;
                  }
                  function S0(a, t, f, n) {
                    var e,
                      o,
                      b,
                      k,
                      s = 0,
                      r = 0;
                    return (
                      (k = Q((s = (f >>> 16) | 0), (r = (a >>> 16) | 0))),
                      (s =
                        ((65535 &
                          (r =
                            ((((b = Q((e = 65535 & f), (o = 65535 & a))) >>>
                              16) |
                              0) +
                              Q(r, e)) |
                            0)) +
                          Q(s, o)) |
                        0),
                      (v2 =
                        (((Q(t, f) + k) | 0) +
                          Q(a, n) +
                          (r >>> 16) +
                          (s >>> 16)) |
                        0),
                      (65535 & b) | (s << 16)
                    );
                  }
                  function a2(a, t, f, n, e) {
                    var o;
                    if (
                      ((F = o = (F - 256) | 0),
                      !((73728 & e) | ((0 | f) <= (0 | n))))
                    ) {
                      if (
                        (r1(
                          o,
                          255 & t,
                          (n = (f = (f - n) | 0) >>> 0 < 256) ? f : 256
                        ),
                        !n)
                      )
                        for (; X(a, o, 256), (f = (f - 256) | 0) >>> 0 > 255; );
                      X(a, o, f);
                    }
                    F = (o + 256) | 0;
                  }
                  function G(a, t, f) {
                    var n = 0,
                      e = 0;
                    i: if (f)
                      for (;;) {
                        if (!(e = i[((n << 3) + t) >> 2])) break i;
                        if ((0 | a) == (0 | e))
                          return i[(4 + (((n << 3) + t) | 0)) >> 2];
                        if ((0 | (n = (n + 1) | 0)) == (0 | f)) break;
                      }
                    return 0;
                  }
                  function U2(a) {
                    var t, f;
                    return ((a = ((t = i[412]) + (f = (a + 3) & -4)) | 0) >>>
                      0 <=
                      t >>> 0 &&
                      f) ||
                      (a >>> 0 > (E1() << 16) >>> 0 && !(0 | j1(0 | a)))
                      ? ((i[613] = 48), -1)
                      : ((i[412] = a), t);
                  }
                  function w1(a) {
                    var t = 0,
                      f = 0,
                      n = 0;
                    if ((p[i[a >> 2]] - 48) >>> 0 < 10)
                      for (
                        ;
                        (t = i[a >> 2]),
                          (n = p[0 | t]),
                          (i[a >> 2] = t + 1),
                          (f = (((Q(f, 10) + n) | 0) - 48) | 0),
                          (p[(t + 1) | 0] - 48) >>> 0 < 10;

                      );
                    return f;
                  }
                  function x0(a) {
                    var t = 0;
                    (t = i[a >> 2]) && (O(i[(t + 4) >> 2]), O(i[t >> 2]), O(t)),
                      (t = i[(a + 8) >> 2]) && O(t),
                      (t = i[(a + 4) >> 2]) && O(t),
                      O(a);
                  }
                  function p2(a) {
                    var t;
                    (t = i[(a + 4) >> 2]),
                      (i[(t + 8) >> 2] = i[(a + 8) >> 2]),
                      (i[(i[(a + 8) >> 2] + 4) >> 2] = t),
                      O(a);
                  }
                  function y1(a, t) {
                    var f;
                    (F = f = (F - 16) | 0),
                      (i[(f + 12) >> 2] = t),
                      l1(i[288], a, t, 43),
                      (F = (f + 16) | 0);
                  }
                  function f2(a) {
                    var t;
                    return (
                      (((-1 >>> (t = 31 & a)) & -2) << t) |
                      (((-1 << (a = (0 - a) & 31)) & -2) >>> a)
                    );
                  }
                  function b2(a, t) {
                    (a |= 0),
                      (t |= 0),
                      i[611] || ((i[612] = t), (i[611] = a)),
                      F1();
                  }
                  function A0(a, t) {}
                  function M2(a) {}
                  function L0() {}
                  (I = w), q();
                  var _ = (function (a) {
                    return (
                      (a.set = function (t, f) {
                        this[t] = f;
                      }),
                      (a.get = function (t) {
                        return this[t];
                      }),
                      a
                    );
                  })([
                    null,
                    function (a, t, f) {
                      (a |= 0),
                        (t = i[(20 + (t |= 0)) >> 2]),
                        (i[(t + 16) >> 2] = i[(a + 84) >> 2]),
                        (i[(a + 84) >> 2] = t),
                        (p[(t + 20) | 0] = 1);
                    },
                    function (a, t, f) {
                      (t |= 0),
                        (f |= 0),
                        (0 | (f = i[(1716 + (a |= 0)) >> 2])) == 3
                          ? _[i[(a + 88) >> 2]](6)
                          : _[0 | f](6, i[(a + 1896) >> 2]),
                        (0 | (f = i[(a + 1724) >> 2])) == 5
                          ? _[i[(a + 96) >> 2]](i[(i[(t + 16) >> 2] + 12) >> 2])
                          : _[0 | f](
                              i[(i[(t + 16) >> 2] + 12) >> 2],
                              i[(a + 1896) >> 2]
                            ),
                        (0 | (f = i[(a + 1724) >> 2])) == 5
                          ? _[i[(a + 96) >> 2]](
                              i[(i[(i[(t + 4) >> 2] + 16) >> 2] + 12) >> 2]
                            )
                          : _[0 | f](
                              i[(i[(i[(t + 4) >> 2] + 16) >> 2] + 12) >> 2],
                              i[(a + 1896) >> 2]
                            ),
                        (f = i[(t + 20) >> 2]);
                      i: if (w[(f + 21) | 0])
                        for (;;) {
                          if (w[(f + 20) | 0]) break i;
                          if (
                            ((p[(f + 20) | 0] = 1),
                            (t = i[(t + 8) >> 2]),
                            (0 | (f = i[(a + 1724) >> 2])) == 5
                              ? _[i[(a + 96) >> 2]](
                                  i[(i[(i[(t + 4) >> 2] + 16) >> 2] + 12) >> 2]
                                )
                              : _[0 | f](
                                  i[(i[(i[(t + 4) >> 2] + 16) >> 2] + 12) >> 2],
                                  i[(a + 1896) >> 2]
                                ),
                            (f = i[(t + 20) >> 2]),
                            !w[(f + 21) | 0])
                          )
                            break;
                        }
                      (0 | (t = i[(a + 1728) >> 2])) == 6
                        ? _[i[(a + 100) >> 2]]()
                        : _[0 | t](i[(a + 1896) >> 2]);
                    },
                    A0,
                    A0,
                    A0,
                    M2,
                    function (a, t, f) {
                      (t |= 0),
                        (f |= 0),
                        (0 | (f = i[(1716 + (a |= 0)) >> 2])) == 3
                          ? _[i[(a + 88) >> 2]](5)
                          : _[0 | f](5, i[(a + 1896) >> 2]),
                        (0 | (f = i[(a + 1724) >> 2])) == 5
                          ? _[i[(a + 96) >> 2]](i[(i[(t + 16) >> 2] + 12) >> 2])
                          : _[0 | f](
                              i[(i[(t + 16) >> 2] + 12) >> 2],
                              i[(a + 1896) >> 2]
                            ),
                        (0 | (f = i[(a + 1724) >> 2])) == 5
                          ? _[i[(a + 96) >> 2]](
                              i[(i[(i[(t + 4) >> 2] + 16) >> 2] + 12) >> 2]
                            )
                          : _[0 | f](
                              i[(i[(i[(t + 4) >> 2] + 16) >> 2] + 12) >> 2],
                              i[(a + 1896) >> 2]
                            ),
                        (f = i[(t + 20) >> 2]);
                      i: if (w[(f + 21) | 0])
                        for (;;) {
                          if (
                            w[(f + 20) | 0] ||
                            ((p[(f + 20) | 0] = 1),
                            (t = i[(i[(t + 12) >> 2] + 4) >> 2]),
                            (0 | (f = i[(a + 1724) >> 2])) == 5
                              ? _[i[(a + 96) >> 2]](
                                  i[(i[(t + 16) >> 2] + 12) >> 2]
                                )
                              : _[0 | f](
                                  i[(i[(t + 16) >> 2] + 12) >> 2],
                                  i[(a + 1896) >> 2]
                                ),
                            (f = i[(t + 20) >> 2]),
                            !w[(f + 21) | 0] | w[(f + 20) | 0])
                          )
                            break i;
                          if (
                            ((p[(f + 20) | 0] = 1),
                            (t = i[(t + 8) >> 2]),
                            (0 | (f = i[(a + 1724) >> 2])) == 5
                              ? _[i[(a + 96) >> 2]](
                                  i[(i[(i[(t + 4) >> 2] + 16) >> 2] + 12) >> 2]
                                )
                              : _[0 | f](
                                  i[(i[(i[(t + 4) >> 2] + 16) >> 2] + 12) >> 2],
                                  i[(a + 1896) >> 2]
                                ),
                            (f = i[(t + 20) >> 2]),
                            !w[(f + 21) | 0])
                          )
                            break;
                        }
                      (0 | (t = i[(a + 1728) >> 2])) == 6
                        ? _[i[(a + 100) >> 2]]()
                        : _[0 | t](i[(a + 1896) >> 2]);
                    },
                    function (a, t, f, n, e) {},
                    function (a, t) {
                      (a |= 0), (t |= 0);
                      var f = u(0),
                        n = u(0);
                      if ((f = c[(a + 28) >> 2]) < (n = c[(t + 28) >> 2]))
                        a = 1;
                      else {
                        if (f != n) return 0;
                        a = c[(a + 32) >> 2] <= c[(t + 32) >> 2];
                      }
                      return 0 | a;
                    },
                    function (a, t, f) {
                      (a |= 0), (t |= 0), (f |= 0);
                      var n,
                        e,
                        o = u(0),
                        b = u(0);
                      return (
                        (f = i[f >> 2]),
                        (n = i[(i[(f + 4) >> 2] + 16) >> 2]),
                        (t = i[t >> 2]),
                        (0 | (e = i[(i[(t + 4) >> 2] + 16) >> 2])) ==
                        (0 | (a = i[(a + 72) >> 2]))
                          ? (0 | a) == (0 | n)
                            ? ((t = i[(t + 16) >> 2]),
                              (o = c[(t + 28) >> 2]),
                              (f = i[(f + 16) >> 2]),
                              (b = c[(f + 28) >> 2]),
                              !(
                                !(c[(t + 32) >> 2] <= c[(f + 32) >> 2]) |
                                (o != b)
                              ) || o < b
                                ? (V(a, t, f) <= u(0)) | 0
                                : (V(a, f, t) >= u(0)) | 0)
                            : (V(n, a, i[(f + 16) >> 2]) <= u(0)) | 0
                          : ((t = i[(t + 16) >> 2]),
                            (0 | a) == (0 | n)
                              ? (V(e, a, t) >= u(0)) | 0
                              : (g1(e, a, t) >=
                                  g1(
                                    i[(i[(f + 4) >> 2] + 16) >> 2],
                                    a,
                                    i[(f + 16) >> 2]
                                  )) |
                                0)
                      );
                    },
                    A0,
                    L0,
                    M2,
                    M2,
                    M2,
                    M2,
                    function (a, t, f, n) {},
                    M2,
                    R2,
                    function (a) {
                      a |= 0;
                      var t = 0,
                        f = 0,
                        n = u(0),
                        e = u(0),
                        o = u(0),
                        b = u(0),
                        k = u(0),
                        s = u(0),
                        r = 0,
                        A = 0,
                        l = 0,
                        v = u(0),
                        h = u(0),
                        d = 0,
                        g = u(0),
                        y = u(0),
                        C = u(0),
                        M = u(0),
                        S = u(0),
                        L = 0,
                        T = 0,
                        j = u(0),
                        D = u(0),
                        K = u(0);
                      i: {
                        a: if (!((0 | (l = i[(a + 112) >> 2])) < 3)) {
                          if (
                            ((r = ((T = (a + 116) | 0) + (l << 4)) | 0),
                            (b = c[(a + 24) >> 2]),
                            (k = c[(a + 16) >> 2]),
                            (s = c[(a + 20) >> 2]),
                            b != u(0) || (k != u(0)) | (s != u(0)))
                          )
                            (g = c[(a + 124) >> 2]),
                              (o = u(c[(a + 140) >> 2] - g)),
                              (y = c[(a + 120) >> 2]),
                              (v = u(c[(a + 136) >> 2] - y)),
                              (C = c[(a + 116) >> 2]),
                              (h = u(c[(a + 132) >> 2] - C));
                          else {
                            for (
                              f = (a + 148) | 0,
                                b = u(0),
                                s = u(0),
                                k = u(0),
                                t = (a + 132) | 0,
                                C = c[(a + 116) >> 2],
                                n = h = u(c[t >> 2] - C),
                                y = c[(a + 120) >> 2],
                                e = v = u(c[(a + 136) >> 2] - y),
                                g = c[(a + 124) >> 2],
                                M = o = u(c[(a + 140) >> 2] - g);
                              (S = u(c[(t + 20) >> 2] - y)),
                                (j = u(c[f >> 2] - C)),
                                (D = u(u(n * S) - u(e * j))),
                                (K = u(c[(t + 24) >> 2] - g)),
                                (e = u(u(e * K) - u(M * S))),
                                (n = u(u(M * j) - u(n * K))),
                                u(u(b * D) + u(u(k * e) + u(s * n))) >= u(0)
                                  ? ((s = u(s + n)),
                                    (k = u(k + e)),
                                    (b = u(b + D)))
                                  : ((s = u(s - n)),
                                    (k = u(k - e)),
                                    (b = u(b - D))),
                                (n = j),
                                (e = S),
                                (M = K),
                                r >>> 0 > (f = ((t = f) + 16) | 0) >>> 0;

                            );
                            if ((0 | l) < 3) break a;
                          }
                          for (f = (a + 148) | 0, t = d = (a + 132) | 0; ; ) {
                            (n = o),
                              (o = v),
                              (L = t),
                              (e = h),
                              (v = u(c[(t + 20) >> 2] - y)),
                              (h = u(c[(t = f) >> 2] - C)),
                              (S = u(b * u(u(e * v) - u(o * h)))),
                              (M = o),
                              (o = u(c[(L + 24) >> 2] - g));
                            f: if (
                              (n = u(
                                S +
                                  u(
                                    u(k * u(u(M * o) - u(n * v))) +
                                      u(s * u(u(n * h) - u(e * o)))
                                  )
                              )) != u(0)
                            ) {
                              if (n > u(0)) {
                                if (((f = 0), (L = (0 | A) < 0), (A = 1), !L))
                                  break f;
                                break i;
                              }
                              if (((f = 0), (L = (0 | A) > 0), (A = -1), L))
                                break i;
                            }
                            if (!(r >>> 0 > (f = (t + 16) | 0) >>> 0)) break;
                          }
                          switch (((f = 0), 0 | A)) {
                            case 2:
                              break i;
                            case 0:
                              break a;
                          }
                          f = 1;
                          f: {
                            n: switch ((i[(a + 56) >> 2] - 100132) | 0) {
                              case 0:
                                if ((0 | A) >= 0) break f;
                                break a;
                              case 2:
                                break i;
                              case 1:
                                break n;
                              default:
                                break f;
                            }
                            if ((0 | A) > 0) break a;
                          }
                          (0 | (t = i[(a + 1716) >> 2])) == 3
                            ? _[i[(a + 88) >> 2]](
                                w[(a + 81) | 0] ? 2 : (0 | l) < 4 ? 4 : 6
                              )
                            : _[0 | t](
                                w[(a + 81) | 0] ? 2 : (0 | l) < 4 ? 4 : 6,
                                i[(a + 1896) >> 2]
                              ),
                            (0 | (t = i[(a + 1724) >> 2])) == 5
                              ? _[i[(a + 96) >> 2]](i[(a + 128) >> 2])
                              : _[0 | t](i[(a + 128) >> 2], i[(a + 1896) >> 2]);
                          f: if ((0 | A) <= 0) {
                            if (T >>> 0 >= (t = (r - 16) | 0) >>> 0) break f;
                            for (
                              ;
                              (0 | (f = i[(a + 1724) >> 2])) == 5
                                ? _[i[(a + 96) >> 2]](i[(r - 4) >> 2])
                                : _[0 | f](i[(r - 4) >> 2], i[(a + 1896) >> 2]),
                                (r = t),
                                T >>> 0 < (t = (t - 16) | 0) >>> 0;

                            );
                          } else if (!((0 | l) < 2))
                            for (
                              ;
                              (0 | (t = i[(a + 1724) >> 2])) == 5
                                ? _[i[(a + 96) >> 2]](i[(d + 12) >> 2])
                                : _[0 | t](
                                    i[(d + 12) >> 2],
                                    i[(a + 1896) >> 2]
                                  ),
                                (d = (d + 16) | 0) >>> 0 < r >>> 0;

                            );
                          (0 | (t = i[(a + 1728) >> 2])) == 6
                            ? _[i[(a + 100) >> 2]]()
                            : _[0 | t](i[(a + 1896) >> 2]);
                        }
                        f = 1;
                      }
                      return 0 | f;
                    },
                    R0,
                    i0,
                    n2,
                    z,
                    t1,
                    b2,
                    function (a) {
                      a |= 0;
                      var t,
                        f = 0,
                        n = 0,
                        e = 0,
                        o = 0,
                        b = 0,
                        k = 0,
                        s = 0,
                        r = u(0),
                        A = u(0),
                        l = 0,
                        v = 0,
                        h = 0,
                        d = 0,
                        g = 0,
                        y = 0,
                        C = 0,
                        M = 0,
                        S = 0,
                        L = 0;
                      (F = t = (F - 48) | 0), (p[(a + 60) | 0] = 0);
                      i: {
                        if (
                          ((n = i[(a + 8) >> 2]),
                          (0 | (f = i[(n + 64) >> 2])) !=
                            (0 | (k = (n - -64) | 0)))
                        )
                          for (;;) {
                            (n = i[(f + 12) >> 2]),
                              (o = i[f >> 2]),
                              (b = i[(f + 16) >> 2]),
                              (e = i[(i[(f + 4) >> 2] + 16) >> 2]);
                            a: {
                              if (
                                !(
                                  (c[(b + 28) >> 2] != c[(e + 28) >> 2]) |
                                  (c[(b + 32) >> 2] != c[(e + 32) >> 2]) |
                                  (i[(n + 12) >> 2] == (0 | f))
                                )
                              ) {
                                (i[(t + 24) >> 2] = 0),
                                  (i[(t + 28) >> 2] = 0),
                                  (i[(t + 16) >> 2] = 0),
                                  (i[(t + 20) >> 2] = 0),
                                  (e = i[287]),
                                  (i[(t + 8) >> 2] = i[286]),
                                  (i[(t + 12) >> 2] = e),
                                  (e = i[285]),
                                  (i[t >> 2] = i[284]),
                                  (i[(t + 4) >> 2] = e),
                                  (e = i[(n + 16) >> 2]),
                                  (i[(t + 16) >> 2] = i[(e + 12) >> 2]),
                                  (i[(t + 20) >> 2] = i[(b + 12) >> 2]),
                                  (c[(t + 36) >> 2] = c[(e + 16) >> 2]),
                                  (c[(t + 40) >> 2] = c[(e + 20) >> 2]),
                                  (c[(t + 44) >> 2] = c[(e + 24) >> 2]),
                                  (i[(e + 12) >> 2] = 0),
                                  (e = (e + 12) | 0),
                                  (0 | (b = i[(a + 1736) >> 2])) == 8
                                    ? _[i[(a + 76) >> 2]](
                                        (t + 36) | 0,
                                        (t + 16) | 0,
                                        t,
                                        e
                                      )
                                    : _[0 | b](
                                        (t + 36) | 0,
                                        (t + 16) | 0,
                                        t,
                                        e,
                                        i[(a + 1896) >> 2]
                                      ),
                                  i[e >> 2] || (i[e >> 2] = i[(t + 16) >> 2]);
                                f: {
                                  if (z(n, f)) {
                                    if (!i2(f)) break f;
                                    e = i[(n + 12) >> 2];
                                    break a;
                                  }
                                  break i;
                                }
                                break i;
                              }
                              (e = n), (n = f);
                            }
                            if (i[(e + 12) >> 2] == (0 | n)) {
                              if (
                                ((0 | n) != (0 | e) &&
                                  ((o =
                                    i[(o + 4) >> 2] != (0 | e) &&
                                    (0 | e) != (0 | o)
                                      ? o
                                      : i[o >> 2]),
                                  !i2(e))) ||
                                ((f =
                                  ((0 | n) == (0 | o)) |
                                  (i[(o + 4) >> 2] == (0 | n))
                                    ? i[o >> 2]
                                    : o),
                                !i2(n))
                              )
                                break i;
                            } else f = o;
                            if ((0 | f) == (0 | k)) break;
                          }
                        (o = a),
                          (f = H(28))
                            ? ((e = f),
                              (n = H(28))
                                ? ((i[(n + 8) >> 2] = 0),
                                  (i[(n + 12) >> 2] = 32),
                                  (b = H(132)),
                                  (i[n >> 2] = b),
                                  b
                                    ? ((k = H(264)),
                                      (i[(n + 4) >> 2] = k),
                                      k
                                        ? ((i[(n + 24) >> 2] = 9),
                                          (i[(n + 16) >> 2] = 0),
                                          (i[(n + 20) >> 2] = 0),
                                          (i[(b + 4) >> 2] = 1),
                                          (i[(k + 8) >> 2] = 0))
                                        : (O(b), O(n), (n = 0)))
                                    : (O(n), (n = 0)))
                                : (n = 0),
                              (i[e >> 2] = n),
                              n
                                ? ((e = H(128)),
                                  (i[(f + 4) >> 2] = e),
                                  e
                                    ? ((i[(f + 24) >> 2] = 9),
                                      (i[(f + 20) >> 2] = 0),
                                      (i[(f + 12) >> 2] = 0),
                                      (i[(f + 16) >> 2] = 32))
                                    : (O(i[(n + 4) >> 2]),
                                      O(i[n >> 2]),
                                      O(n),
                                      O(f),
                                      (f = 0)))
                                : (O(f), (f = 0)))
                            : (f = 0),
                          (h = f),
                          (i[(o + 68) >> 2] = f);
                        a: if (f) {
                          f: {
                            n = i[(a + 8) >> 2];
                            n: {
                              if ((0 | (f = i[n >> 2])) != (0 | n))
                                for (;;) {
                                  if (
                                    ((o = u1(h, f)),
                                    (i[(f + 36) >> 2] = o),
                                    (0 | o) == 2147483647)
                                  )
                                    break n;
                                  if ((0 | n) == (0 | (f = i[f >> 2]))) break;
                                }
                              if (
                                ((F = y = (F - 400) | 0),
                                (o = H(
                                  (4 + (f = (g = i[(h + 12) >> 2]) << 2)) | 0
                                )),
                                (i[(h + 8) >> 2] = o),
                                (F = (y + 400) | 0),
                                o)
                              ) {
                                if (
                                  !(
                                    (b = (((f + o) | 0) - 4) | 0) >>> 0 <
                                    o >>> 0
                                  )
                                ) {
                                  if (
                                    ((n = i[(h + 4) >> 2]),
                                    (e =
                                      (1 +
                                        (((k = ((g << 2) - 4) | 0) >>> 2) |
                                          0)) &
                                      7))
                                  )
                                    for (
                                      f = o;
                                      (i[f >> 2] = n),
                                        (f = (f + 4) | 0),
                                        (n = (n + 4) | 0),
                                        (e = (e - 1) | 0);

                                    );
                                  else f = o;
                                  if (!(k >>> 0 < 28))
                                    for (
                                      ;
                                      (i[f >> 2] = n),
                                        (i[(f + 28) >> 2] = n + 28),
                                        (i[(f + 24) >> 2] = n + 24),
                                        (i[(f + 20) >> 2] = n + 20),
                                        (i[(f + 16) >> 2] = n + 16),
                                        (i[(f + 12) >> 2] = n + 12),
                                        (i[(f + 8) >> 2] = n + 8),
                                        (i[(f + 4) >> 2] = n + 4),
                                        (n = (n + 32) | 0),
                                        b >>> 0 >= (f = (f + 32) | 0) >>> 0;

                                    );
                                }
                                for (
                                  i[(y + 4) >> 2] = b,
                                    i[y >> 2] = o,
                                    C = 2016473283,
                                    s = 1;
                                  ;

                                ) {
                                  if (
                                    (l = i[((((s << 3) + y) | 0) - 4) >> 2]) >>>
                                      0 >
                                    ((k = i[((d << 3) + y) >> 2]) + 40) >>> 0
                                  )
                                    for (;;) {
                                      for (
                                        C = (Q(C, 1539415821) + 1) | 0,
                                          S =
                                            i[
                                              (f =
                                                (((C >>> 0) %
                                                  ((1 + ((l - k) >> 2)) >>>
                                                    0) <<
                                                  2) +
                                                  k) |
                                                0) >> 2
                                            ],
                                          i[f >> 2] = i[k >> 2],
                                          i[k >> 2] = S,
                                          e = (l + 4) | 0,
                                          n = (k - 4) | 0;
                                        ;

                                      ) {
                                        (o = e),
                                          (v = i[(n + 4) >> 2]),
                                          (b = n),
                                          (f = (n + 4) | 0),
                                          (e = i[v >> 2]),
                                          (r = c[(e + 28) >> 2]),
                                          (M = i[S >> 2]),
                                          (s = f);
                                        t: if (!(r < (A = c[(M + 28) >> 2]))) {
                                          for (;;) {
                                            if (
                                              ((n = f),
                                              (s = f),
                                              c[(e + 32) >> 2] <=
                                                c[(M + 32) >> 2] && r == A)
                                            )
                                              break t;
                                            if (
                                              ((f = (n + 4) | 0),
                                              (b = n),
                                              (v = i[(n + 4) >> 2]),
                                              (e = i[v >> 2]),
                                              A > (r = c[(e + 28) >> 2]))
                                            )
                                              break;
                                          }
                                          s = f;
                                        }
                                        (n = s),
                                          (s = i[(e = (o - 4) | 0) >> 2]),
                                          (f = i[s >> 2]);
                                        t: if (!(A < (r = c[(f + 28) >> 2])))
                                          for (;;) {
                                            if (
                                              !(
                                                !(
                                                  c[(M + 32) >> 2] <=
                                                  c[(f + 32) >> 2]
                                                ) |
                                                (r != A)
                                              )
                                            )
                                              break t;
                                            if (
                                              ((o = e),
                                              (s = i[(e = (e - 4) | 0) >> 2]),
                                              (f = i[s >> 2]),
                                              A < (r = c[(f + 28) >> 2]))
                                            )
                                              break;
                                          }
                                        if (
                                          ((i[n >> 2] = s),
                                          (i[e >> 2] = v),
                                          !(n >>> 0 < e >>> 0))
                                        )
                                          break;
                                      }
                                      if (
                                        ((f = i[n >> 2]),
                                        (i[n >> 2] = v),
                                        (i[e >> 2] = f),
                                        ((n - k) | 0) < ((l - e) | 0)
                                          ? ((f = o), (e = l), (l = b))
                                          : ((f = k), (e = b), (k = o)),
                                        (i[
                                          (4 + (n = ((d << 3) + y) | 0)) >> 2
                                        ] = e),
                                        (i[n >> 2] = f),
                                        (d = (d + 1) | 0),
                                        !((k + 40) >>> 0 < l >>> 0))
                                      )
                                        break;
                                    }
                                  if (
                                    ((s = d),
                                    l >>> 0 >= (o = (k + 4) | 0) >>> 0)
                                  )
                                    for (;;) {
                                      (e = i[o >> 2]), (n = f = o);
                                      t: if (!(k >>> 0 >= f >>> 0))
                                        for (;;) {
                                          if (
                                            ((b = i[e >> 2]),
                                            (r = c[(b + 28) >> 2]),
                                            (d = i[(n = (f - 4) | 0) >> 2]),
                                            (v = i[d >> 2]),
                                            r < (A = c[(v + 28) >> 2]))
                                          ) {
                                            n = f;
                                            break t;
                                          }
                                          if (
                                            !(
                                              !(
                                                c[(b + 32) >> 2] <=
                                                c[(v + 32) >> 2]
                                              ) |
                                              (r != A)
                                            )
                                          ) {
                                            n = f;
                                            break t;
                                          }
                                          if (
                                            ((i[f >> 2] = d),
                                            !(k >>> 0 < (f = n) >>> 0))
                                          )
                                            break;
                                        }
                                      if (
                                        ((i[n >> 2] = e),
                                        !(l >>> 0 >= (o = (o + 4) | 0) >>> 0))
                                      )
                                        break;
                                    }
                                  if (((d = (s - 1) | 0), !((0 | s) >= 1)))
                                    break;
                                }
                                if (
                                  ((i[(h + 20) >> 2] = 1),
                                  (i[(h + 16) >> 2] = g),
                                  (h = i[h >> 2]),
                                  (0 | (o = i[(h + 8) >> 2])) >= 1)
                                )
                                  for (
                                    l = i[(h + 4) >> 2], k = i[h >> 2], n = o;
                                    ;

                                  ) {
                                    for (
                                      e = n,
                                        s =
                                          (l +
                                            ((d = i[(k + (n << 2)) >> 2]) <<
                                              3)) |
                                          0,
                                        f = n;
                                      (0 | o) <= (0 | (n = f << 1)) ||
                                        ((v =
                                          i[
                                            (l +
                                              (i[
                                                (k + ((b = 1 | n) << 2)) >> 2
                                              ] <<
                                                3)) >>
                                              2
                                          ]),
                                        (r = c[(v + 28) >> 2]),
                                        (g =
                                          i[
                                            (l +
                                              (i[(k + (n << 2)) >> 2] << 3)) >>
                                              2
                                          ]),
                                        (A = c[(g + 28) >> 2]),
                                        (!(
                                          c[(v + 32) >> 2] <= c[(g + 32) >> 2]
                                        ) |
                                          (r != A) &&
                                          !(r < A)) ||
                                          (n = b)),
                                        !(
                                          (0 | n) > (0 | o) ||
                                          ((b = i[s >> 2]),
                                          (r = c[(b + 28) >> 2]),
                                          (v = i[(k + (n << 2)) >> 2]),
                                          (C =
                                            i[(g = (l + (v << 3)) | 0) >> 2]),
                                          (r < (A = c[(C + 28) >> 2])) |
                                            (c[(b + 32) >> 2] <=
                                            c[(C + 32) >> 2]
                                              ? r == A
                                              : 0))
                                        );

                                    )
                                      (i[(k + (f << 2)) >> 2] = v),
                                        (i[(g + 4) >> 2] = f),
                                        (f = n);
                                    if (
                                      ((i[(k + (f << 2)) >> 2] = d),
                                      (i[(s + 4) >> 2] = f),
                                      (n = (e - 1) | 0),
                                      !((0 | e) > 1))
                                    )
                                      break;
                                  }
                                (i[(h + 20) >> 2] = 1), (f = 1);
                              } else f = 0;
                              if (f) break f;
                            }
                            x0(i[(a + 68) >> 2]), (i[(a + 68) >> 2] = 0);
                            break a;
                          }
                          if (
                            ((n = (a - -64) | 0),
                            (f = H(20))
                              ? ((i[(f + 16) >> 2] = 10),
                                (i[(f + 12) >> 2] = a),
                                (i[f >> 2] = 0),
                                (i[(f + 8) >> 2] = f),
                                (i[(f + 4) >> 2] = f))
                              : (f = 0),
                            (i[n >> 2] = f),
                            !f)
                          )
                            break i;
                          if (
                            (h1(a, u(-3999999973526325e22)),
                            h1(a, u(3999999973526325e22)),
                            (n = M0(i[(a + 68) >> 2])))
                          )
                            for (;;) {
                              f: if ((f = d1(i[(a + 68) >> 2])))
                                for (;;) {
                                  if (
                                    (c[(f + 28) >> 2] != c[(n + 28) >> 2]) |
                                    (c[(f + 32) >> 2] != c[(n + 32) >> 2])
                                  )
                                    break f;
                                  if (
                                    ((o = i[(M0(i[(a + 68) >> 2]) + 8) >> 2]),
                                    (e = i[(n + 8) >> 2]),
                                    (i[(t + 24) >> 2] = 0),
                                    (i[(t + 28) >> 2] = 0),
                                    (i[(t + 16) >> 2] = 0),
                                    (i[(t + 20) >> 2] = 0),
                                    (f = i[287]),
                                    (i[(t + 8) >> 2] = i[286]),
                                    (i[(t + 12) >> 2] = f),
                                    (f = i[285]),
                                    (i[t >> 2] = i[284]),
                                    (i[(t + 4) >> 2] = f),
                                    (f = i[(e + 16) >> 2]),
                                    (i[(t + 16) >> 2] = i[(f + 12) >> 2]),
                                    (i[(t + 20) >> 2] =
                                      i[(i[(o + 16) >> 2] + 12) >> 2]),
                                    (c[(t + 36) >> 2] = c[(f + 16) >> 2]),
                                    (c[(t + 40) >> 2] = c[(f + 20) >> 2]),
                                    (c[(t + 44) >> 2] = c[(f + 24) >> 2]),
                                    (i[(f + 12) >> 2] = 0),
                                    (f = (f + 12) | 0),
                                    (0 | (b = i[(a + 1736) >> 2])) == 8
                                      ? _[i[(a + 76) >> 2]](
                                          (t + 36) | 0,
                                          (t + 16) | 0,
                                          t,
                                          f
                                        )
                                      : _[0 | b](
                                          (t + 36) | 0,
                                          (t + 16) | 0,
                                          t,
                                          f,
                                          i[(a + 1896) >> 2]
                                        ),
                                    i[f >> 2] || (i[f >> 2] = i[(t + 16) >> 2]),
                                    !z(e, o))
                                  )
                                    break i;
                                  if (!(f = d1(i[(a + 68) >> 2]))) break;
                                }
                              if ((s0(a, n), !(n = M0(i[(a + 68) >> 2]))))
                                break;
                            }
                          if (
                            ((f =
                              i[
                                i[(i[(o = (a - -64) | 0) >> 2] + 4) >> 2] >> 2
                              ]),
                            (n = i[f >> 2]),
                            (i[(a + 72) >> 2] = i[(n + 16) >> 2]),
                            (i[(n + 24) >> 2] = 0),
                            p2(i[(f + 4) >> 2]),
                            O(f),
                            (n = i[o >> 2]),
                            (f = i[i[(n + 4) >> 2] >> 2]))
                          )
                            for (
                              ;
                              (i[(i[f >> 2] + 24) >> 2] = 0),
                                p2(i[(f + 4) >> 2]),
                                O(f),
                                (n = i[o >> 2]),
                                (f = i[i[(n + 4) >> 2] >> 2]);

                            );
                          if ((0 | n) != (0 | (f = i[(n + 4) >> 2])))
                            for (
                              ;
                              O(f), (0 | n) != (0 | (f = i[(f + 4) >> 2]));

                            );
                          if (
                            (O(n),
                            x0(i[(a + 68) >> 2]),
                            (L = 1),
                            (a = i[(a + 8) >> 2]),
                            (0 | (n = i[(a + 40) >> 2])) !=
                              (0 | (o = (a + 40) | 0)))
                          )
                            for (;;) {
                              if (
                                ((a = i[(n + 8) >> 2]),
                                (n = i[n >> 2]),
                                (0 | a) == i[(i[(a + 12) >> 2] + 12) >> 2] &&
                                  ((f = i[(a + 8) >> 2]),
                                  (i[(f + 28) >> 2] =
                                    i[(f + 28) >> 2] + i[(a + 28) >> 2]),
                                  (f = i[(f + 4) >> 2]),
                                  (i[(f + 28) >> 2] =
                                    i[(f + 28) >> 2] +
                                    i[(i[(a + 4) >> 2] + 28) >> 2]),
                                  !i2(a)))
                              ) {
                                L = 0;
                                break a;
                              }
                              if ((0 | n) == (0 | o)) break;
                            }
                        }
                        return (F = (t + 48) | 0), 0 | L;
                      }
                      b2((a + 1740) | 0, 1), o2();
                    },
                    function (a, t, f) {
                      (t |= 0), (f |= 0);
                      var n = 0,
                        e = 0,
                        o = 0,
                        b = 0;
                      o = 1;
                      i: if (
                        (0 | (n = i[(64 + (a |= 0)) >> 2])) !=
                        (0 | (e = (a - -64) | 0))
                      ) {
                        if (((b = (0 - t) | 0), !f)) {
                          for (;;)
                            if (
                              ((a = w[(i[(n + 20) >> 2] + 21) | 0]),
                              (i[(n + 28) >> 2] =
                                (0 | a) ==
                                w[(i[(i[(n + 4) >> 2] + 20) >> 2] + 21) | 0]
                                  ? 0
                                  : a
                                  ? t
                                  : b),
                              (0 | e) == (0 | (n = i[n >> 2])))
                            )
                              break i;
                        }
                        for (;;) {
                          if (
                            ((a = i[n >> 2]),
                            (0 | (f = w[(i[(n + 20) >> 2] + 21) | 0])) ==
                              w[(i[(i[(n + 4) >> 2] + 20) >> 2] + 21) | 0])
                          ) {
                            if (!i2(n)) {
                              o = 0;
                              break i;
                            }
                          } else i[(n + 28) >> 2] = f ? t : b;
                          if ((0 | e) == (0 | (n = a))) break;
                        }
                      }
                      return 0 | o;
                    },
                    function (a) {
                      a |= 0;
                      var t,
                        f = 0,
                        n = 0,
                        e = 0,
                        o = u(0),
                        b = u(0),
                        k = 0,
                        s = 0,
                        r = 0;
                      if (
                        (0 | (f = i[(a + 40) >> 2])) !=
                        (0 | (t = (a + 40) | 0))
                      )
                        for (;;) {
                          if (((a = i[f >> 2]), w[(f + 21) | 0])) {
                            for (
                              f = (f + 8) | 0;
                              (f = i[f >> 2]),
                                (n = i[(i[(f + 4) >> 2] + 16) >> 2]),
                                (o = c[(n + 28) >> 2]),
                                (e = i[(f + 16) >> 2]),
                                (b = c[(e + 28) >> 2]),
                                !(
                                  !(c[(n + 32) >> 2] <= c[(e + 32) >> 2]) |
                                  (o != b)
                                ) || o < b;

                            )
                              f = (i[(f + 8) >> 2] + 4) | 0;
                            for (
                              ;
                              !(
                                !(c[(e + 32) >> 2] <= c[(n + 32) >> 2]) |
                                (o != b)
                              ) || o > b;

                            )
                              (f = i[(f + 12) >> 2]),
                                (e = i[(f + 16) >> 2]),
                                (b = c[(e + 28) >> 2]),
                                (n = i[(i[(f + 4) >> 2] + 16) >> 2]),
                                (o = c[(n + 28) >> 2]);
                            i: {
                              a: if (
                                (0 | (e = i[(i[(f + 8) >> 2] + 4) >> 2])) !=
                                i[(f + 12) >> 2]
                              )
                                for (;;) {
                                  if (
                                    ((k = i[(e + 16) >> 2]),
                                    (b = c[(k + 28) >> 2]),
                                    !(c[(n + 32) >> 2] <= c[(k + 32) >> 2]) |
                                      (o != b) && !(b > o))
                                  ) {
                                    f: if (i[(e + 12) >> 2] != (0 | f))
                                      for (;;) {
                                        if (
                                          ((n = i[(i[(f + 8) >> 2] + 4) >> 2]),
                                          (k = i[(n + 16) >> 2]),
                                          (o = c[(k + 28) >> 2]),
                                          (s = i[(i[(n + 4) >> 2] + 16) >> 2]),
                                          !(
                                            (o < (b = c[(s + 28) >> 2])) |
                                            (c[(k + 32) >> 2] <=
                                            c[(s + 32) >> 2]
                                              ? o == b
                                              : 0)
                                          ))
                                        ) {
                                          if (
                                            !(
                                              V(
                                                i[(i[(f + 4) >> 2] + 16) >> 2],
                                                i[(f + 16) >> 2],
                                                k
                                              ) >= u(0)
                                            )
                                          )
                                            break f;
                                          n = i[(i[(f + 8) >> 2] + 4) >> 2];
                                        }
                                        if (((f = h2(f, n)), (n = 0), !f))
                                          break i;
                                        if (
                                          (0 | (f = i[(f + 4) >> 2])) ==
                                          i[(e + 12) >> 2]
                                        )
                                          break;
                                      }
                                    f = i[(f + 12) >> 2];
                                  } else {
                                    f: if (
                                      (0 | (n = i[(e + 12) >> 2])) !=
                                      (0 | f)
                                    )
                                      for (k = (e + 12) | 0; ; ) {
                                        if (
                                          ((s = i[(i[(n + 4) >> 2] + 16) >> 2]),
                                          (o = c[(s + 28) >> 2]),
                                          (r = i[(n + 16) >> 2]),
                                          !(
                                            (o < (b = c[(r + 28) >> 2])) |
                                            (c[(s + 32) >> 2] <=
                                            c[(r + 32) >> 2]
                                              ? o == b
                                              : 0)
                                          ))
                                        ) {
                                          if (
                                            !(
                                              V(
                                                i[(e + 16) >> 2],
                                                i[(i[(e + 4) >> 2] + 16) >> 2],
                                                s
                                              ) <= u(0)
                                            )
                                          )
                                            break f;
                                          n = i[k >> 2];
                                        }
                                        if (((e = h2(n, e)), (n = 0), !e))
                                          break i;
                                        if (
                                          ((k =
                                            ((e = i[(e + 4) >> 2]) + 12) | 0),
                                          (0 | (n = i[(e + 12) >> 2])) ==
                                            (0 | f))
                                        )
                                          break;
                                      }
                                    e = i[(i[(e + 8) >> 2] + 4) >> 2];
                                  }
                                  if (i[(f + 12) >> 2] == (0 | e)) break a;
                                  (n = i[(i[(f + 4) >> 2] + 16) >> 2]),
                                    (o = c[(n + 28) >> 2]);
                                }
                              if (
                                ((n = i[(e + 12) >> 2]),
                                i[(n + 12) >> 2] != (0 | f))
                              )
                                for (;;) {
                                  if (((e = h2(n, e)), (n = 0), !e)) break i;
                                  if (
                                    ((e = i[(e + 4) >> 2]),
                                    (n = i[(e + 12) >> 2]),
                                    i[(n + 12) >> 2] == (0 | f))
                                  )
                                    break;
                                }
                              n = 1;
                            }
                            if (!n) return 0;
                          }
                          if ((0 | t) == (0 | (f = a))) break;
                        }
                      return 1;
                    },
                    function (a, t) {
                      a |= 0;
                      var f,
                        n = 0,
                        e = 0;
                      if (
                        (0 | (n = i[(40 + (t |= 0)) >> 2])) !=
                        (0 | (f = (t + 40) | 0))
                      )
                        for (;;) {
                          if (w[(n + 21) | 0]) {
                            for (
                              (0 | (t = i[(a + 1716) >> 2])) == 3
                                ? _[i[(a + 88) >> 2]](2)
                                : _[0 | t](2, i[(a + 1896) >> 2]),
                                t = i[(n + 8) >> 2];
                              (0 | (e = i[(a + 1724) >> 2])) == 5
                                ? _[i[(a + 96) >> 2]](
                                    i[(i[(t + 16) >> 2] + 12) >> 2]
                                  )
                                : _[0 | e](
                                    i[(i[(t + 16) >> 2] + 12) >> 2],
                                    i[(a + 1896) >> 2]
                                  ),
                                (0 | (t = i[(t + 12) >> 2])) != i[(n + 8) >> 2];

                            );
                            (0 | (t = i[(a + 1728) >> 2])) == 6
                              ? _[i[(a + 100) >> 2]]()
                              : _[0 | t](i[(a + 1896) >> 2]);
                          }
                          if ((0 | f) == (0 | (n = i[n >> 2]))) break;
                        }
                    },
                    function (a, t) {
                      t |= 0;
                      var f,
                        n,
                        e = 0,
                        o = 0,
                        b = 0,
                        k = 0,
                        s = 0,
                        r = 0,
                        A = 0,
                        l = 0,
                        v = 0,
                        h = 0,
                        d = 0,
                        g = 0,
                        y = 0,
                        C = 0,
                        M = 0;
                      if (
                        ((F = f = (F - 16) | 0),
                        (i[(84 + (a |= 0)) >> 2] = 0),
                        (0 | (A = i[(t + 40) >> 2])) !=
                          (0 | (n = (t + 40) | 0)))
                      )
                        for (
                          t = A;
                          (p[(t + 20) | 0] = 0),
                            (0 | n) != (0 | (t = i[t >> 2]));

                        );
                      if ((0 | A) != (0 | n)) {
                        for (;;) {
                          if (!(w[(A + 20) | 0] | !w[(A + 21) | 0])) {
                            if (((s = i[(A + 8) >> 2]), w[(a + 80) | 0]))
                              (t = 1), (e = 1);
                            else {
                              (b = 0),
                                (o = 0),
                                (t = 0),
                                (k = i[((e = s) + 20) >> 2]);
                              i: if (w[(k + 21) | 0])
                                for (;;) {
                                  if (w[((t = k) + 20) | 0]) {
                                    t = o;
                                    break i;
                                  }
                                  if (
                                    ((p[(t + 20) | 0] = 1),
                                    (i[(t + 16) >> 2] = o),
                                    (b = (b + 1) | 0),
                                    (o = t),
                                    (e = i[(e + 8) >> 2]),
                                    (k = i[(e + 20) >> 2]),
                                    !w[(k + 21) | 0])
                                  )
                                    break;
                                }
                              (o = i[(s + 4) >> 2]), (k = i[(o + 20) >> 2]);
                              i: {
                                a: if (!w[(k + 21) | 0] | w[(k + 20) | 0]) {
                                  if (((y = s), !t)) break i;
                                } else
                                  for (e = t; ; ) {
                                    if (
                                      ((p[((t = k) + 20) | 0] = 1),
                                      (i[(t + 16) >> 2] = e),
                                      (b = (b + 1) | 0),
                                      (y = i[(o + 12) >> 2]),
                                      (o = i[(y + 4) >> 2]),
                                      (k = i[(o + 20) >> 2]),
                                      !w[(k + 21) | 0])
                                    )
                                      break a;
                                    if (((e = t), w[(k + 20) | 0])) break;
                                  }
                                for (
                                  ;
                                  (p[(t + 20) | 0] = 0), (t = i[(t + 16) >> 2]);

                                );
                              }
                              (C = (0 | b) > 1),
                                (k = 0),
                                (e = 0),
                                (t = 0),
                                (h = i[(s + 12) >> 2]),
                                (o = i[((r = h) + 20) >> 2]);
                              i: if (w[(o + 21) | 0])
                                for (;;) {
                                  if (w[((t = o) + 20) | 0]) {
                                    t = e;
                                    break i;
                                  }
                                  if (
                                    ((p[(t + 20) | 0] = 1),
                                    (i[(t + 16) >> 2] = e),
                                    (k = (k + 1) | 0),
                                    (e = t),
                                    (r = i[(r + 8) >> 2]),
                                    (o = i[(r + 20) >> 2]),
                                    !w[(o + 21) | 0])
                                  )
                                    break;
                                }
                              (g = C ? b : 1),
                                (o = i[(h + 4) >> 2]),
                                (b = i[(o + 20) >> 2]);
                              i: {
                                a: if (!w[(b + 21) | 0] | w[(b + 20) | 0]) {
                                  if (!t) break i;
                                } else
                                  for (e = t; ; ) {
                                    if (
                                      ((p[((t = b) + 20) | 0] = 1),
                                      (i[(t + 16) >> 2] = e),
                                      (k = (k + 1) | 0),
                                      (h = i[(o + 12) >> 2]),
                                      (o = i[(h + 4) >> 2]),
                                      (b = i[(o + 20) >> 2]),
                                      !w[(b + 21) | 0])
                                    )
                                      break a;
                                    if (((e = t), w[(b + 20) | 0])) break;
                                  }
                                for (
                                  ;
                                  (p[(t + 20) | 0] = 0), (t = i[(t + 16) >> 2]);

                                );
                              }
                              (M = (0 | k) > (0 | g)),
                                (b = 0),
                                (e = 0),
                                (t = 0),
                                (d = i[(i[(s + 8) >> 2] + 4) >> 2]),
                                (o = i[((r = d) + 20) >> 2]);
                              i: if (w[(o + 21) | 0])
                                for (;;) {
                                  if (w[((t = o) + 20) | 0]) {
                                    t = e;
                                    break i;
                                  }
                                  if (
                                    ((p[(t + 20) | 0] = 1),
                                    (i[(t + 16) >> 2] = e),
                                    (b = (b + 1) | 0),
                                    (e = t),
                                    (r = i[(r + 8) >> 2]),
                                    (o = i[(r + 20) >> 2]),
                                    !w[(o + 21) | 0])
                                  )
                                    break;
                                }
                              (l = M ? k : g),
                                (o = i[(d + 4) >> 2]),
                                (k = i[(o + 20) >> 2]);
                              i: {
                                a: if (!w[(k + 21) | 0] | w[(k + 20) | 0]) {
                                  if (!t) break i;
                                } else
                                  for (e = t; ; ) {
                                    if (
                                      ((p[((t = k) + 20) | 0] = 1),
                                      (i[(t + 16) >> 2] = e),
                                      (b = (b + 1) | 0),
                                      (d = i[(o + 12) >> 2]),
                                      (o = i[(d + 4) >> 2]),
                                      (k = i[(o + 20) >> 2]),
                                      !w[(k + 21) | 0])
                                    )
                                      break a;
                                    if (((e = t), w[(k + 20) | 0])) break;
                                  }
                                for (
                                  ;
                                  (p[(t + 20) | 0] = 0), (t = i[(t + 16) >> 2]);

                                );
                              }
                              C0(f, s),
                                (r = i[(f + 8) >> 2]),
                                (g = i[(f + 4) >> 2]),
                                (v = i[f >> 2]),
                                C0(f, i[(s + 12) >> 2]),
                                (k = i[(f + 8) >> 2]),
                                (o = i[(f + 4) >> 2]),
                                (e = i[f >> 2]),
                                C0(f, i[(i[(s + 8) >> 2] + 4) >> 2]),
                                (t = b),
                                (0 |
                                  (t = (v =
                                    (0 |
                                      (t = (l =
                                        (0 |
                                          (t = (b = (0 | b) > (0 | l))
                                            ? t
                                            : l)) <
                                        (0 | v))
                                        ? v
                                        : t)) <
                                    (0 | e))
                                    ? e
                                    : t)) >=
                                (0 | (e = i[f >> 2]))
                                  ? ((s = v
                                      ? o
                                      : l
                                      ? g
                                      : b
                                      ? d
                                      : M
                                      ? h
                                      : C
                                      ? y
                                      : s),
                                    (e = v ? k : l ? r : b || C | M ? 2 : 1))
                                  : ((s = i[(f + 4) >> 2]),
                                    (t = e),
                                    (e = i[(f + 8) >> 2]));
                            }
                            _[0 | e](a, s, t);
                          }
                          if ((0 | n) == (0 | (A = i[A >> 2]))) break;
                        }
                        if ((b = i[(a + 84) >> 2])) {
                          for (
                            (0 | (t = i[(a + 1716) >> 2])) == 3
                              ? _[i[(a + 88) >> 2]](4)
                              : _[0 | t](4, i[(a + 1896) >> 2]),
                              k = -1;
                            ;

                          ) {
                            for (
                              t = i[(b + 8) >> 2];
                              w[(a + 80) | 0] &&
                                (0 |
                                  (e = !(s =
                                    w[
                                      (i[(i[(t + 4) >> 2] + 20) >> 2] + 21) | 0
                                    ]))) !=
                                  (0 | k) &&
                                ((0 | (o = i[(a + 1720) >> 2])) == 4
                                  ? _[i[(a + 92) >> 2]](!s)
                                  : _[0 | o](!s, i[(a + 1896) >> 2]),
                                (k = e)),
                                (0 | (e = i[(a + 1724) >> 2])) == 5
                                  ? _[i[(a + 96) >> 2]](
                                      i[(i[(t + 16) >> 2] + 12) >> 2]
                                    )
                                  : _[0 | e](
                                      i[(i[(t + 16) >> 2] + 12) >> 2],
                                      i[(a + 1896) >> 2]
                                    ),
                                (0 | (t = i[(t + 12) >> 2])) != i[(b + 8) >> 2];

                            );
                            if (!(b = i[(b + 16) >> 2])) break;
                          }
                          (0 | (t = i[(a + 1728) >> 2])) == 6
                            ? _[i[(a + 100) >> 2]]()
                            : _[0 | t](i[(a + 1896) >> 2]),
                            (i[(a + 84) >> 2] = 0);
                        }
                      }
                      F = (f + 16) | 0;
                    },
                    k1,
                    I0,
                    function (a, t) {
                      a |= 0;
                      var f,
                        n = 0;
                      (0 | (f = i[(4 + (t |= 0)) >> 2])) < i[(t + 8) >> 2] &&
                        ((n = (i[t >> 2] + (Q(i[(t + 12) >> 2], f) << 2)) | 0),
                        (c[n >> 2] = c[a >> 2]),
                        (c[(n + 4) >> 2] = c[(a + 4) >> 2]),
                        (i[(t + 4) >> 2] = f + 1));
                    },
                    M2,
                    L0,
                    function (a, t, f, n) {
                      (a |= 0), (t |= 0), (f |= 0), (n |= 0), (f = 0);
                      i: {
                        if ((t = i[520])) {
                          if (!((f = i[t >> 2]) >>> 0 < 100001)) {
                            t = H(12);
                            break i;
                          }
                        } else
                          (t = H(1200008)),
                            (i[(t + 4) >> 2] = 12),
                            (i[t >> 2] = 0),
                            (i[520] = t);
                        (i[t >> 2] = f + 1),
                          (t = (8 + ((Q(f, 12) + t) | 0)) | 0);
                      }
                      (c[t >> 2] = c[a >> 2]),
                        (c[(t + 4) >> 2] = c[(a + 4) >> 2]),
                        (c[(t + 8) >> 2] = c[(a + 8) >> 2]),
                        (i[n >> 2] = t);
                    },
                    function (a) {
                      var t;
                      (a |= 0),
                        (F = t = (F - 16) | 0),
                        (i[t >> 2] = a),
                        (F = a = (F - 16) | 0),
                        (i[(a + 12) >> 2] = t),
                        l1(i[288], 1078, t, 0),
                        (F = (a + 16) | 0),
                        (F = (t + 16) | 0);
                    },
                    M2,
                    function (a) {
                      return 0;
                    },
                    function (a, t, f) {
                      (t |= 0), (f |= 0);
                      var n,
                        e = 0,
                        o = 0,
                        b = 0,
                        k = 0,
                        s = 0,
                        r = 0;
                      (F = n = (F - 32) | 0),
                        (o = i[(28 + (a |= 0)) >> 2]),
                        (i[(n + 16) >> 2] = o),
                        (e = i[(a + 20) >> 2]),
                        (i[(n + 28) >> 2] = f),
                        (i[(n + 24) >> 2] = t),
                        (t = (e - o) | 0),
                        (i[(n + 20) >> 2] = t),
                        (o = (t + f) | 0),
                        (r = 2),
                        (t = (n + 16) | 0);
                      i: {
                        a: {
                          (e =
                            0 |
                            f1(i[(a + 60) >> 2], (n + 16) | 0, 2, (n + 12) | 0))
                            ? ((i[613] = e), (e = -1))
                            : (e = 0);
                          f: {
                            if (!e)
                              for (;;) {
                                if ((0 | (e = i[(n + 12) >> 2])) == (0 | o))
                                  break f;
                                if ((0 | e) <= -1) break a;
                                if (
                                  ((b =
                                    (e -
                                      ((k =
                                        (b = i[(t + 4) >> 2]) >>> 0 < e >>> 0)
                                        ? b
                                        : 0)) |
                                    0),
                                  (i[(s = ((k << 3) + t) | 0) >> 2] =
                                    b + i[s >> 2]),
                                  (i[(s = ((k ? 12 : 4) + t) | 0) >> 2] =
                                    i[s >> 2] - b),
                                  (o = (o - e) | 0),
                                  (t = k ? (t + 8) | 0 : t),
                                  (r = (r - k) | 0),
                                  (e =
                                    0 |
                                    f1(
                                      i[(a + 60) >> 2],
                                      0 | t,
                                      0 | r,
                                      (n + 12) | 0
                                    ))
                                    ? ((i[613] = e), (e = -1))
                                    : (e = 0),
                                  e)
                                )
                                  break;
                              }
                            if ((0 | o) != -1) break a;
                          }
                          (t = i[(a + 44) >> 2]),
                            (i[(a + 28) >> 2] = t),
                            (i[(a + 20) >> 2] = t),
                            (i[(a + 16) >> 2] = t + i[(a + 48) >> 2]),
                            (a = f);
                          break i;
                        }
                        (i[(a + 28) >> 2] = 0),
                          (i[(a + 16) >> 2] = 0),
                          (i[(a + 20) >> 2] = 0),
                          (i[a >> 2] = 32 | i[a >> 2]),
                          (a = 0),
                          (0 | r) != 2 && (a = (f - i[(t + 4) >> 2]) | 0);
                      }
                      return (F = (n + 32) | 0), 0 | a;
                    },
                    function (a, t, f, n) {
                      return (v2 = 0), 0;
                    },
                    function (a, t, f, n, e, o) {
                      (a |= 0),
                        (t = +t),
                        (f |= 0),
                        (n |= 0),
                        (e |= 0),
                        (o |= 0);
                      var b,
                        k = 0,
                        s = 0,
                        r = 0,
                        A = 0,
                        l = 0,
                        v = 0,
                        h = 0,
                        d = 0,
                        g = 0,
                        y = 0,
                        C = 0,
                        M = 0,
                        S = 0,
                        L = 0,
                        T = 0,
                        j = 0,
                        D = 0,
                        K = 0,
                        k2 = 0,
                        m2 = 0;
                      (F = b = (F - 560) | 0),
                        (i[(b + 44) >> 2] = 0),
                        w0(+t),
                        (k = 0 | l2(1)),
                        l2(0),
                        (0 | k) < -1 || (0 | k) <= -1
                          ? ((L = 1),
                            (T = 1034),
                            w0(+(t = -t)),
                            (k = 0 | l2(1)),
                            l2(0))
                          : 2048 & e
                          ? ((L = 1), (T = 1037))
                          : ((T = (L = 1 & e) ? 1040 : 1035), (m2 = !L));
                      i: if ((2146435072 & k) != 2146435072) {
                        M = (b + 16) | 0;
                        a: {
                          f: {
                            n: {
                              if (((t = m1(t, (b + 44) | 0)), (t += t) != 0)) {
                                if (
                                  ((k = i[(b + 44) >> 2]),
                                  (i[(b + 44) >> 2] = k - 1),
                                  (0 | (j = 32 | o)) != 97)
                                )
                                  break n;
                                break a;
                              }
                              if ((0 | (j = 32 | o)) == 97) break a;
                              (A = i[(b + 44) >> 2]), (v = (0 | n) < 0 ? 6 : n);
                              break f;
                            }
                            (A = (k - 29) | 0),
                              (i[(b + 44) >> 2] = A),
                              (t *= 268435456),
                              (v = (0 | n) < 0 ? 6 : n);
                          }
                          for (
                            s = y = (0 | A) < 0 ? (b + 48) | 0 : (b + 336) | 0;
                            (k = (t < 4294967296) & (t >= 0) ? ~~t >>> 0 : 0),
                              (i[(n = s) >> 2] = k),
                              (s = (s + 4) | 0),
                              (t = 1e9 * (t - +(k >>> 0))) != 0;

                          );
                          if ((0 | A) < 1) (n = A), (k = s), (r = y);
                          else
                            for (r = y, n = A; ; ) {
                              if (
                                ((C = (0 | n) < 29 ? n : 29),
                                !(r >>> 0 > (k = (s - 4) | 0) >>> 0))
                              ) {
                                for (
                                  n = C, d = 0;
                                  (g = k),
                                    (h = 0),
                                    (K = d),
                                    (d = i[k >> 2]),
                                    (l = 31 & n),
                                    (63 & n) >>> 0 >= 32
                                      ? ((k2 = d << l), (l = 0))
                                      : ((k2 =
                                          ((1 << l) - 1) & (d >>> (32 - l))),
                                        (l = d << l)),
                                    (h = (h + k2) | 0),
                                    (h =
                                      l >>> 0 > (d = (K + l) | 0) >>> 0
                                        ? (h + 1) | 0
                                        : h),
                                    (K = g),
                                    (g = S0(
                                      (d = c1((l = d), h, 1e9)),
                                      v2,
                                      1e9,
                                      0
                                    )),
                                    (i[K >> 2] = l - g),
                                    r >>> 0 <= (k = (k - 4) | 0) >>> 0;

                                );
                                (n = d) && (i[(r = (r - 4) | 0) >> 2] = n);
                              }
                              for (
                                ;
                                r >>> 0 < (k = s) >>> 0 &&
                                !i[(s = (k - 4) | 0) >> 2];

                              );
                              if (
                                ((n = (i[(b + 44) >> 2] - C) | 0),
                                (i[(b + 44) >> 2] = n),
                                (s = k),
                                !((0 | n) > 0))
                              )
                                break;
                            }
                          if (((s = (((v + 25) | 0) / 9) | 0), (0 | n) <= -1))
                            for (C = (s + 1) | 0, D = (0 | j) == 102; ; ) {
                              d = (0 | n) < -9 ? 9 : (0 - n) | 0;
                              f: if (k >>> 0 > r >>> 0) {
                                for (
                                  g = (1e9 >>> d) | 0,
                                    l = (-1 << d) ^ -1,
                                    n = 0,
                                    s = r;
                                  (K = n),
                                    (n = i[s >> 2]),
                                    (i[s >> 2] = K + ((n >>> d) | 0)),
                                    (n = Q(g, n & l)),
                                    (s = (s + 4) | 0) >>> 0 < k >>> 0;

                                );
                                if (((r = i[r >> 2] ? r : (r + 4) | 0), !n))
                                  break f;
                                (i[k >> 2] = n), (k = (k + 4) | 0);
                              } else r = i[r >> 2] ? r : (r + 4) | 0;
                              if (
                                ((n = (i[(b + 44) >> 2] + d) | 0),
                                (i[(b + 44) >> 2] = n),
                                (k =
                                  (0 | C) < (k - (s = D ? y : r)) >> 2
                                    ? (s + (C << 2)) | 0
                                    : k),
                                !((0 | n) < 0))
                              )
                                break;
                            }
                          if (
                            ((s = 0),
                            !(
                              k >>> 0 <= r >>> 0 ||
                              ((s = Q((y - r) >> 2, 9)),
                              (n = 10),
                              (l = i[r >> 2]) >>> 0 < 10)
                            ))
                          )
                            for (
                              ;
                              (s = (s + 1) | 0),
                                l >>> 0 >= (n = Q(n, 10)) >>> 0;

                            );
                          if (
                            (0 |
                              (n =
                                (((v - ((0 | j) == 102 ? 0 : s)) | 0) -
                                  (((0 | j) == 103) & ((0 | v) != 0))) |
                                0)) <
                            ((Q((k - y) >> 2, 9) - 9) | 0)
                          ) {
                            if (
                              ((h =
                                (((((l =
                                  ((0 | (g = (n + 9216) | 0)) / 9) | 0) <<
                                  2) +
                                  ((0 | A) < 0
                                    ? (b + 48) | 4
                                    : (b + 340) | 0)) |
                                  0) -
                                  4096) |
                                0),
                              (n = 10),
                              (0 | (g = (g - Q(l, 9)) | 0)) <= 7)
                            )
                              for (
                                ;
                                (n = Q(n, 10)), (0 | (g = (g + 1) | 0)) != 8;

                              );
                            if (
                              ((C =
                                ((g = i[h >> 2]) -
                                  Q(n, (l = ((g >>> 0) / (n >>> 0)) | 0))) |
                                0),
                              ((0 | (A = (h + 4) | 0)) != (0 | k) || C) &&
                                ((t = (0 | k) == (0 | A) ? 1 : 1.5),
                                (S =
                                  (A = (n >>> 1) | 0) >>> 0 > C >>> 0
                                    ? 0.5
                                    : (0 | A) == (0 | C)
                                    ? t
                                    : 1.5),
                                (t =
                                  1 & l ? 9007199254740994 : 9007199254740992),
                                (w[0 | T] != 45) | m2 || ((S = -S), (t = -t)),
                                (A = (g - C) | 0),
                                (i[h >> 2] = A),
                                t + S != t))
                            ) {
                              if (
                                ((n = (n + A) | 0),
                                (i[h >> 2] = n),
                                n >>> 0 >= 1e9)
                              )
                                for (
                                  ;
                                  (i[h >> 2] = 0),
                                    (h = (h - 4) | 0) >>> 0 < r >>> 0 &&
                                      (i[(r = (r - 4) | 0) >> 2] = 0),
                                    (n = (i[h >> 2] + 1) | 0),
                                    (i[h >> 2] = n),
                                    n >>> 0 > 999999999;

                                );
                              if (
                                ((s = Q((y - r) >> 2, 9)),
                                (n = 10),
                                !((A = i[r >> 2]) >>> 0 < 10))
                              )
                                for (
                                  ;
                                  (s = (s + 1) | 0),
                                    A >>> 0 >= (n = Q(n, 10)) >>> 0;

                                );
                            }
                            k = (n = (h + 4) | 0) >>> 0 < k >>> 0 ? n : k;
                          }
                          for (
                            ;
                            (l = k),
                              !(A = k >>> 0 <= r >>> 0) &&
                                !i[(k = (l - 4) | 0) >> 2];

                          );
                          if ((0 | j) == 103) {
                            if (
                              ((v =
                                (((n =
                                  ((0 | (k = v || 1)) > (0 | s)) &
                                  ((0 | s) > -5))
                                  ? -1 ^ s
                                  : -1) +
                                  k) |
                                0),
                              (o = ((n ? -1 : -2) + o) | 0),
                              !(d = 8 & e))
                            ) {
                              if (
                                ((k = -9),
                                !A &&
                                  (A = i[(l - 4) >> 2]) &&
                                  ((g = 10), (k = 0), !((A >>> 0) % 10 | 0)))
                              ) {
                                for (
                                  ;
                                  (n = k),
                                    (k = (k + 1) | 0),
                                    !((A >>> 0) % ((g = Q(g, 10)) >>> 0) | 0);

                                );
                                k = -1 ^ n;
                              }
                              (n = Q((l - y) >> 2, 9)),
                                (-33 & o) != 70
                                  ? ((d = 0),
                                    (v =
                                      (0 |
                                        (n =
                                          (0 |
                                            (n =
                                              (((((n + s) | 0) + k) | 0) - 9) |
                                              0)) >
                                          0
                                            ? n
                                            : 0)) >
                                      (0 | v)
                                        ? v
                                        : n))
                                  : ((d = 0),
                                    (v =
                                      (0 |
                                        (n =
                                          (0 | (n = (((n + k) | 0) - 9) | 0)) >
                                          0
                                            ? n
                                            : 0)) >
                                      (0 | v)
                                        ? v
                                        : n));
                            }
                          } else d = 8 & e;
                          if (
                            ((C = (v | d) != 0),
                            (n = a),
                            (A = f),
                            (0 | (g = -33 & o)) == 70)
                          )
                            o = (0 | s) > 0 ? s : 0;
                          else {
                            if (
                              ((M - (k = z2(((k = s >> 31) + s) ^ k, 0, M))) |
                                0) <=
                              1
                            )
                              for (
                                ;
                                (p[0 | (k = (k - 1) | 0)] = 48),
                                  ((M - k) | 0) < 2;

                              );
                            (p[0 | (D = (k - 2) | 0)] = o),
                              (p[(k - 1) | 0] = (0 | s) < 0 ? 45 : 43),
                              (o = (M - D) | 0);
                          }
                          a2(
                            n,
                            32,
                            A,
                            (h =
                              (1 + ((o + ((C + ((v + L) | 0)) | 0)) | 0)) | 0),
                            e
                          ),
                            X(a, T, L),
                            a2(a, 48, f, h, 65536 ^ e);
                          f: {
                            n: {
                              t: {
                                if ((0 | g) == 70) {
                                  for (
                                    n = (b + 16) | 8,
                                      s = (b + 16) | 9,
                                      r = o = r >>> 0 > y >>> 0 ? y : r;
                                    ;

                                  ) {
                                    k = z2(i[r >> 2], 0, s);
                                    b: if ((0 | o) == (0 | r))
                                      (0 | k) == (0 | s) &&
                                        ((p[(b + 24) | 0] = 48), (k = n));
                                    else {
                                      if ((b + 16) >>> 0 >= k >>> 0) break b;
                                      for (
                                        ;
                                        (p[0 | (k = (k - 1) | 0)] = 48),
                                          (b + 16) >>> 0 < k >>> 0;

                                      );
                                    }
                                    if (
                                      (X(a, k, (s - k) | 0),
                                      !(y >>> 0 >= (r = (r + 4) | 0) >>> 0))
                                    )
                                      break;
                                  }
                                  if (((k = 0), !C)) break n;
                                  if (
                                    (X(a, 1069, 1),
                                    ((0 | v) < 1) | (r >>> 0 >= l >>> 0))
                                  )
                                    break t;
                                  for (;;) {
                                    if (
                                      (k = z2(i[r >> 2], 0, s)) >>> 0 >
                                      (b + 16) >>> 0
                                    )
                                      for (
                                        ;
                                        (p[0 | (k = (k - 1) | 0)] = 48),
                                          (b + 16) >>> 0 < k >>> 0;

                                      );
                                    if (
                                      (X(a, k, (0 | v) < 9 ? v : 9),
                                      (k = (v - 9) | 0),
                                      l >>> 0 <= (r = (r + 4) | 0) >>> 0)
                                    )
                                      break n;
                                    if (((n = (0 | v) > 9), (v = k), !n)) break;
                                  }
                                  break n;
                                }
                                b: if (!((0 | v) < 0))
                                  for (
                                    o = r >>> 0 < l >>> 0 ? l : (r + 4) | 0,
                                      A = (b + 16) | 9,
                                      n = (b + 16) | 8,
                                      s = r;
                                    ;

                                  ) {
                                    (0 | A) ==
                                      (0 | (k = z2(i[s >> 2], 0, A))) &&
                                      ((p[(b + 24) | 0] = 48), (k = n));
                                    e: if ((0 | s) == (0 | r))
                                      X(a, k, 1),
                                        (k = (k + 1) | 0),
                                        (!d && (0 | v) <= 0) || X(a, 1069, 1);
                                    else {
                                      if ((b + 16) >>> 0 >= k >>> 0) break e;
                                      for (
                                        ;
                                        (p[0 | (k = (k - 1) | 0)] = 48),
                                          (b + 16) >>> 0 < k >>> 0;

                                      );
                                    }
                                    if (
                                      (X(
                                        a,
                                        (l = k),
                                        (0 | (k = (A - k) | 0)) < (0 | v)
                                          ? k
                                          : v
                                      ),
                                      (v = (v - k) | 0),
                                      o >>> 0 <= (s = (s + 4) | 0) >>> 0)
                                    )
                                      break b;
                                    if (!((0 | v) > -1)) break;
                                  }
                                a2(a, 48, (v + 18) | 0, 18, 0),
                                  X(a, D, (M - D) | 0);
                                break f;
                              }
                              k = v;
                            }
                            a2(a, 48, (k + 9) | 0, 9, 0);
                          }
                          break i;
                        }
                        if (
                          ((y = (A = 32 & o) ? (T + 9) | 0 : T),
                          !(n >>> 0 > 11) && (k = (12 - n) | 0))
                        ) {
                          for (S = 8; (S *= 16), (k = (k - 1) | 0); );
                          t = w[0 | y] != 45 ? t + S - S : -(S + (-t - S));
                        }
                        for (
                          (0 | M) ==
                            (0 |
                              (k = z2(
                                (s = (k = i[(b + 44) >> 2]) >> 31) ^ (k + s),
                                0,
                                M
                              ))) &&
                            ((p[(b + 15) | 0] = 48), (k = (b + 15) | 0)),
                            v = 2 | L,
                            s = i[(b + 44) >> 2],
                            p[0 | (l = (k - 2) | 0)] = o + 15,
                            p[(k - 1) | 0] = (0 | s) < 0 ? 45 : 43,
                            k = 8 & e,
                            r = (b + 16) | 0;
                          (o = r),
                            (d = A),
                            (s = T1(t) < 2147483648 ? ~~t : -2147483648),
                            (p[0 | r] = d | w[(s + 1632) | 0]),
                            (t = 16 * (t - +(0 | s))),
                            !(k || ((0 | n) > 0) | (t != 0)) |
                              ((((r = (o + 1) | 0) - ((b + 16) | 0)) | 0) !=
                                1) ||
                              ((p[(o + 1) | 0] = 46), (r = (o + 2) | 0)),
                            t != 0;

                        );
                        a2(
                          (o = a),
                          32,
                          (k = f),
                          (h =
                            ((A =
                              !n | (((((r - b) | 0) - 18) | 0) >= (0 | n))
                                ? (((M - ((l + ((b + 16) | 0)) | 0)) | 0) + r) |
                                  0
                                : (2 + ((((n + M) | 0) - l) | 0)) | 0) +
                              v) |
                            0),
                          e
                        ),
                          X(a, y, v),
                          a2(a, 48, f, h, 65536 ^ e),
                          X(a, (b + 16) | 0, (n = (r - ((b + 16) | 0)) | 0)),
                          a2(
                            a,
                            48,
                            (A - (((o = n) + (n = (M - l) | 0)) | 0)) | 0,
                            0,
                            0
                          ),
                          X(a, l, n);
                      } else
                        a2(a, 32, f, (h = (L + 3) | 0), -65537 & e),
                          X(a, T, L),
                          (n = 32 & o),
                          X(a, t != t ? (n ? 1053 : 1061) : n ? 1057 : 1065, 3);
                      return (
                        a2(a, 32, f, h, 8192 ^ e),
                        (F = (b + 560) | 0),
                        0 | ((0 | f) > (0 | h) ? f : h)
                      );
                    },
                  ]);
                  function E1() {
                    return (Z.byteLength / 65536) | 0;
                  }
                  return {
                    n: L0,
                    o: H,
                    p: O,
                    q: _,
                    r: function (a, t, f, n, e, o) {
                      (a |= 0),
                        (t |= 0),
                        (f |= 0),
                        (n |= 0),
                        (e |= 0),
                        (o |= 0);
                      for (
                        var b = 0,
                          k = 0,
                          s = 0,
                          r = 0,
                          A = 0,
                          l = u(0),
                          v = 0,
                          h = u(0),
                          d = u(0),
                          g = 0,
                          y = 0,
                          C = 0,
                          M = 0,
                          S = 0,
                          L = 0,
                          T = 0,
                          j = 0;
                        (s = i[(2032 + (b = k << 2)) >> 2]) && (i[s >> 2] = 0),
                          (s = i[(2032 + (4 | b)) >> 2]) && (i[s >> 2] = 0),
                          (s = i[(2032 + (8 | b)) >> 2]) && (i[s >> 2] = 0),
                          (b = i[(2032 + (12 | b)) >> 2]) && (i[b >> 2] = 0),
                          (0 | (k = (k + 4) | 0)) != 100;

                      );
                      if (
                        ((k = i[608]) || ((k = H(16)), (i[608] = k)),
                        (i[(k + 8) >> 2] = o),
                        (i[(k + 4) >> 2] = 0),
                        (i[(k + 12) >> 2] = n),
                        (i[k >> 2] = e),
                        (k = i[609]) ||
                          ((e = H(1900))
                            ? ((i[(e + 100) >> 2] = 12),
                              (i[(e + 96) >> 2] = 13),
                              (i[(e + 92) >> 2] = 14),
                              (i[(e + 88) >> 2] = 15),
                              (c2[(e + 80) >> 1] = 0),
                              (i[(e + 52) >> 2] = 0),
                              (i[(e + 56) >> 2] = 100130),
                              (i[(e + 16) >> 2] = 0),
                              (i[(e + 20) >> 2] = 0),
                              (i[e >> 2] = 0),
                              (i[(e + 1896) >> 2] = 0),
                              (i[(e + 1736) >> 2] = 8),
                              (i[(e + 1732) >> 2] = 11),
                              (i[(e + 1728) >> 2] = 6),
                              (i[(e + 1724) >> 2] = 5),
                              (i[(e + 1720) >> 2] = 4),
                              (i[(e + 1716) >> 2] = 3),
                              (i[(e + 104) >> 2] = 16),
                              (i[(e + 76) >> 2] = 17),
                              (i[(e + 12) >> 2] = 18),
                              (i[(e + 24) >> 2] = 0))
                            : (e = 0),
                          (i[609] = e),
                          q2(e, 100107, 34),
                          q2(i[609], 100100, 35),
                          q2(i[609], 100102, 36),
                          q2(i[609], 100105, 37),
                          q2(i[609], 100103, 38),
                          q2(i[609], 100104, 39),
                          (i[(i[609] + 56) >> 2] = 100130),
                          (e = i[609]),
                          (c[(e + 16) >> 2] = 0),
                          (c[(e + 24) >> 2] = 1),
                          (c[(e + 20) >> 2] = 0),
                          (k = i[609])),
                        (e = 0),
                        (o = i[608]),
                        i[k >> 2] && R2(k, 0),
                        (i[(k + 112) >> 2] = 0),
                        (i[k >> 2] = 1),
                        (p[(k + 108) | 0] = 0),
                        (i[(k + 1896) >> 2] = o),
                        (i[(k + 8) >> 2] = 0),
                        (0 | f) > 0)
                      )
                        for (o = 0; ; ) {
                          if (
                            ((g = i[((o << 2) + t) >> 2]),
                            (b = i[609]),
                            i[b >> 2] != 1 && R2(b, 1),
                            (i[b >> 2] = 2),
                            (i[(b + 4) >> 2] = 0),
                            i[(b + 112) >> 2] >= 1 && (p[(b + 108) | 0] = 1),
                            (k = 0),
                            (0 | g) > 0)
                          )
                            for (;;) {
                              (A = y = ((Q((e + k) | 0, n) << 2) + a) | 0),
                                (s = i[609]),
                                i[s >> 2] != 2 && R2(s, 2);
                              i: {
                                a: {
                                  f: {
                                    if (w[(s + 108) | 0]) {
                                      if (
                                        ((b = R0()), (i[(s + 8) >> 2] = b), !b)
                                      )
                                        break f;
                                      if ((0 | (b = i[(s + 112) >> 2])) >= 1)
                                        for (
                                          C = (116 + ((s + (b << 4)) | 0)) | 0,
                                            r = (s + 116) | 0,
                                            b = i[(s + 4) >> 2];
                                          ;

                                        ) {
                                          j = i[(r + 12) >> 2];
                                          n: {
                                            if (!b) {
                                              if (!(b = i0(i[(s + 8) >> 2])))
                                                break f;
                                              if (z(b, i[(b + 4) >> 2]))
                                                break n;
                                              break f;
                                            }
                                            if (!n2(b)) break f;
                                            b = i[(b + 12) >> 2];
                                          }
                                          if (
                                            ((v = i[(b + 16) >> 2]),
                                            (i[(v + 12) >> 2] = j),
                                            (c[(v + 16) >> 2] = c[r >> 2]),
                                            (l = c[(r + 4) >> 2]),
                                            (i[(v + 24) >> 2] = 0),
                                            (c[(v + 20) >> 2] = l),
                                            (i[(b + 28) >> 2] = 1),
                                            (i[(i[(b + 4) >> 2] + 28) >> 2] =
                                              -1),
                                            (i[(s + 4) >> 2] = b),
                                            !(
                                              C >>> 0 >
                                              (r = (r + 16) | 0) >>> 0
                                            ))
                                          )
                                            break;
                                        }
                                      (p[(s + 108) | 0] = 0),
                                        (i[(s + 112) >> 2] = 0),
                                        (i[(s + 4) >> 2] = 0);
                                    }
                                    (r =
                                      (S = +(l =
                                        (M = +(l = c[(A + 4) >> 2])) < -1e37
                                          ? u(-9999999933815813e21)
                                          : l)) > 1e37),
                                      (v =
                                        (T = +(h =
                                          (L = +(h = c[A >> 2])) < -1e37
                                            ? u(-9999999933815813e21)
                                            : h)) > 1e37),
                                      ((b = +(d = c[(A + 8) >> 2]) < -1e37) |
                                        (A =
                                          +(d = b
                                            ? u(-9999999933815813e21)
                                            : d) > 1e37) |
                                        (M < -1e37) |
                                        (S > 1e37) ||
                                        T > 1e37 ||
                                        L < -1e37) &&
                                        ((0 | (b = i[(s + 1732) >> 2])) == 11
                                          ? _[i[(s + 12) >> 2]](100155)
                                          : _[0 | b](
                                              100155,
                                              i[(s + 1896) >> 2]
                                            )),
                                      (l = r ? u(9999999933815813e21) : l),
                                      (h = v ? u(9999999933815813e21) : h);
                                    n: {
                                      if (!i[(s + 8) >> 2]) {
                                        if (
                                          (0 | (r = i[(s + 112) >> 2])) <=
                                          99
                                        ) {
                                          (c[
                                            (124 + (b = (s + (r << 4)) | 0)) >>
                                              2
                                          ] = A ? u(9999999933815813e21) : d),
                                            (c[(b + 120) >> 2] = l),
                                            (c[(b + 116) >> 2] = h),
                                            (i[(b + 128) >> 2] = y),
                                            (i[(s + 112) >> 2] = r + 1);
                                          break i;
                                        }
                                        if (
                                          ((b = R0()),
                                          (i[(s + 8) >> 2] = b),
                                          !b)
                                        )
                                          break n;
                                        if ((0 | (b = i[(s + 112) >> 2])) >= 1)
                                          for (
                                            v =
                                              (116 + ((s + (b << 4)) | 0)) | 0,
                                              r = (s + 116) | 0,
                                              b = i[(s + 4) >> 2];
                                            ;

                                          ) {
                                            C = i[(r + 12) >> 2];
                                            t: {
                                              if (!b) {
                                                if (!(b = i0(i[(s + 8) >> 2])))
                                                  break n;
                                                if (z(b, i[(b + 4) >> 2]))
                                                  break t;
                                                break n;
                                              }
                                              if (!n2(b)) break n;
                                              b = i[(b + 12) >> 2];
                                            }
                                            if (
                                              ((A = i[(b + 16) >> 2]),
                                              (i[(A + 12) >> 2] = C),
                                              (c[(A + 16) >> 2] = c[r >> 2]),
                                              (d = c[(r + 4) >> 2]),
                                              (i[(A + 24) >> 2] = 0),
                                              (c[(A + 20) >> 2] = d),
                                              (i[(b + 28) >> 2] = 1),
                                              (i[(i[(b + 4) >> 2] + 28) >> 2] =
                                                -1),
                                              (i[(s + 4) >> 2] = b),
                                              !(
                                                v >>> 0 >
                                                (r = (r + 16) | 0) >>> 0
                                              ))
                                            )
                                              break;
                                          }
                                        (p[(s + 108) | 0] = 0),
                                          (i[(s + 112) >> 2] = 0);
                                      }
                                      t: {
                                        b: {
                                          if (!(b = i[(s + 4) >> 2])) {
                                            if (!(b = i0(i[(s + 8) >> 2])))
                                              break t;
                                            if (z(b, i[(b + 4) >> 2])) break b;
                                            break t;
                                          }
                                          if (!n2(b)) break t;
                                          b = i[(b + 12) >> 2];
                                        }
                                        (r = i[(b + 16) >> 2]),
                                          (c[(r + 16) >> 2] = h),
                                          (i[(r + 12) >> 2] = y),
                                          (i[(r + 24) >> 2] = 0),
                                          (c[(r + 20) >> 2] = l),
                                          (i[(b + 28) >> 2] = 1),
                                          (i[(i[(b + 4) >> 2] + 28) >> 2] = -1),
                                          (i[(s + 4) >> 2] = b);
                                        break i;
                                      }
                                      if ((0 | (b = i[(s + 1732) >> 2])) != 11)
                                        break a;
                                      _[i[(s + 12) >> 2]](100902);
                                      break i;
                                    }
                                    if ((0 | (b = i[(s + 1732) >> 2])) != 11)
                                      break a;
                                    _[i[(s + 12) >> 2]](100902);
                                    break i;
                                  }
                                  if ((0 | (b = i[(s + 1732) >> 2])) == 11) {
                                    _[i[(s + 12) >> 2]](100902);
                                    break i;
                                  }
                                }
                                _[0 | b](100902, i[(s + 1896) >> 2]);
                              }
                              if ((0 | g) == (0 | (k = (k + 1) | 0))) break;
                            }
                          if (
                            ((b = i[609]),
                            i[b >> 2] != 2 && R2(b, 2),
                            (i[b >> 2] = 1),
                            (e = (e + g) | 0),
                            (0 | (o = (o + 1) | 0)) == (0 | f))
                          )
                            break;
                        }
                      (f = i[609]),
                        (a = 0),
                        (t = H(40)),
                        (i[t >> 2] = 0),
                        (e = p1((s = (f + 1740) | 0), 1, t, 4)),
                        (o = 0 | N());
                      i: {
                        a: {
                          f: {
                            n: {
                              t: {
                                b: for (;;) {
                                  e: {
                                    c: {
                                      u: {
                                        o: {
                                          A: {
                                            r: {
                                              k: {
                                                if (a) {
                                                  if (
                                                    (0 |
                                                      (a =
                                                        i[(f + 1732) >> 2])) !=
                                                    11
                                                  ) {
                                                    if (
                                                      ((t = i[(f + 1896) >> 2]),
                                                      (i[611] = 0),
                                                      j2(0 | a, 100902, 0 | t),
                                                      (a = i[611]),
                                                      (i[611] = 0),
                                                      (t = -1),
                                                      !a || !(n = i[612]))
                                                    )
                                                      break r;
                                                    if (
                                                      (t = G(i[a >> 2], e, o))
                                                    )
                                                      break k;
                                                    break t;
                                                  }
                                                  if (
                                                    ((a = i[(f + 12) >> 2]),
                                                    (i[611] = 0),
                                                    a1(0 | a, 100902),
                                                    (a = i[611]),
                                                    (i[611] = 0),
                                                    (t = -1),
                                                    !a || !(n = i[612]))
                                                  )
                                                    break o;
                                                  if ((t = G(i[a >> 2], e, o)))
                                                    break A;
                                                  break t;
                                                }
                                                if (i[f >> 2] == 1) break e;
                                                if (
                                                  ((i[611] = 0),
                                                  j2(19, 0 | f, 1),
                                                  (a = i[611]),
                                                  (i[611] = 0),
                                                  (t = -1),
                                                  !a || !(n = i[612]))
                                                )
                                                  break c;
                                                if ((t = G(i[a >> 2], e, o)))
                                                  break u;
                                                break t;
                                              }
                                              Y(0 | n);
                                            }
                                            if (((a = 0 | N()), (0 | t) == 1))
                                              continue;
                                            break i;
                                          }
                                          Y(0 | n);
                                        }
                                        if (((a = 0 | N()), (0 | t) == 1))
                                          continue;
                                        break i;
                                      }
                                      Y(0 | n);
                                    }
                                    if (((a = 0 | N()), (0 | t) == 1)) continue;
                                  }
                                  i[f >> 2] = 0;
                                  e: {
                                    c: {
                                      u: {
                                        if (!i[(f + 8) >> 2]) {
                                          if (
                                            !(
                                              w[(f + 80) | 0] |
                                              (i[(f + 104) >> 2] != 16)
                                            )
                                          ) {
                                            if (
                                              ((i[611] = 0),
                                              (b = 0 | $2(20, 0 | f)),
                                              (a = i[611]),
                                              (i[611] = 0),
                                              (t = -1),
                                              a && (n = i[612]))
                                            ) {
                                              if (!(t = G(i[a >> 2], e, o)))
                                                break t;
                                              Y(0 | n);
                                            }
                                            if (((a = 0 | N()), (0 | t) == 1))
                                              continue;
                                            if (b) {
                                              i[(f + 1896) >> 2] = 0;
                                              break i;
                                            }
                                          }
                                          if (
                                            ((i[611] = 0),
                                            (n = 0 | D1(21)),
                                            (a = i[611]),
                                            (i[611] = 0),
                                            (t = -1),
                                            a && (k = i[612]))
                                          ) {
                                            if (!(t = G(i[a >> 2], e, o)))
                                              break n;
                                            Y(0 | k);
                                          }
                                          if (((a = 0 | N()), (0 | t) == 1))
                                            continue;
                                          if (((i[(f + 8) >> 2] = n), !n))
                                            break u;
                                          if (
                                            (0 | (a = i[(f + 112) >> 2])) >=
                                            1
                                          )
                                            for (
                                              r =
                                                (116 + ((f + (a << 4)) | 0)) |
                                                0,
                                                n = (f + 116) | 0,
                                                t = i[(f + 4) >> 2];
                                              ;

                                            ) {
                                              g = i[(n + 12) >> 2];
                                              o: {
                                                A: {
                                                  r: {
                                                    k: {
                                                      s: {
                                                        l: {
                                                          if (!t) {
                                                            if (
                                                              ((a =
                                                                i[
                                                                  (f + 8) >> 2
                                                                ]),
                                                              (i[611] = 0),
                                                              (t =
                                                                0 |
                                                                $2(22, 0 | a)),
                                                              (a = i[611]),
                                                              (i[611] = 0),
                                                              (k = -1),
                                                              !a ||
                                                                !(b = i[612]))
                                                            )
                                                              break s;
                                                            if (
                                                              (k = G(
                                                                i[a >> 2],
                                                                e,
                                                                o
                                                              ))
                                                            )
                                                              break l;
                                                            break f;
                                                          }
                                                          if (
                                                            ((i[611] = 0),
                                                            (A =
                                                              0 |
                                                              $2(23, 0 | t)),
                                                            (a = i[611]),
                                                            (i[611] = 0),
                                                            (k = -1),
                                                            !a || !(b = i[612]))
                                                          )
                                                            break r;
                                                          if (
                                                            (k = G(
                                                              i[a >> 2],
                                                              e,
                                                              o
                                                            ))
                                                          )
                                                            break k;
                                                          break f;
                                                        }
                                                        Y(0 | b);
                                                      }
                                                      if (
                                                        ((a = 0 | N()),
                                                        (0 | k) != 1)
                                                      )
                                                        break A;
                                                      continue b;
                                                    }
                                                    Y(0 | b);
                                                  }
                                                  if (
                                                    ((a = 0 | N()),
                                                    (0 | k) == 1)
                                                  )
                                                    continue b;
                                                  if (!A) break u;
                                                  t = i[(t + 12) >> 2];
                                                  break o;
                                                }
                                                if (!t) break u;
                                                if (
                                                  ((a = i[(t + 4) >> 2]),
                                                  (i[611] = 0),
                                                  (A =
                                                    0 | O1(24, 0 | t, 0 | a)),
                                                  (a = i[611]),
                                                  (i[611] = 0),
                                                  (k = -1),
                                                  a && (b = i[612]))
                                                ) {
                                                  if (!(k = G(i[a >> 2], e, o)))
                                                    break f;
                                                  Y(0 | b);
                                                }
                                                if (
                                                  ((a = 0 | N()), (0 | k) == 1)
                                                )
                                                  continue b;
                                                if (!A) break u;
                                              }
                                              if (
                                                ((a = i[(t + 16) >> 2]),
                                                (i[(a + 12) >> 2] = g),
                                                (c[(a + 16) >> 2] = c[n >> 2]),
                                                (l = c[(n + 4) >> 2]),
                                                (i[(a + 24) >> 2] = 0),
                                                (c[(a + 20) >> 2] = l),
                                                (i[(t + 28) >> 2] = 1),
                                                (i[
                                                  (i[(t + 4) >> 2] + 28) >> 2
                                                ] = -1),
                                                (i[(f + 4) >> 2] = t),
                                                !(
                                                  r >>> 0 >
                                                  (n = (n + 16) | 0) >>> 0
                                                ))
                                              )
                                                break;
                                            }
                                          (p[(f + 108) | 0] = 0),
                                            (i[(f + 112) >> 2] = 0);
                                        }
                                        if (
                                          ((i[611] = 0),
                                          t1(f),
                                          (a = i[611]),
                                          (i[611] = 0),
                                          (t = -1),
                                          !a || !(n = i[612]))
                                        )
                                          break e;
                                        if ((t = G(i[a >> 2], e, o))) break c;
                                        break t;
                                      }
                                      if (
                                        ((i[611] = 0),
                                        j2(26, 0 | s, 1),
                                        (t = i[611]),
                                        (i[611] = 0),
                                        t && (a = i[612]))
                                      ) {
                                        if (!G(i[t >> 2], e, o)) break a;
                                        Y(0 | a);
                                      }
                                      a = 0 | N();
                                      continue;
                                    }
                                    Y(0 | n);
                                  }
                                  if (((a = 0 | N()), (0 | t) != 1)) {
                                    if (
                                      ((i[611] = 0),
                                      (b = 0 | $2(27, 0 | f)),
                                      (a = i[611]),
                                      (i[611] = 0),
                                      (t = -1),
                                      a && (n = i[612]))
                                    ) {
                                      if (!(t = G(i[a >> 2], e, o))) break t;
                                      Y(0 | n);
                                    }
                                    if (((a = 0 | N()), (0 | t) != 1)) {
                                      e: {
                                        c: {
                                          u: {
                                            o: {
                                              A: {
                                                r: {
                                                  k: {
                                                    s: {
                                                      l: {
                                                        v: {
                                                          h: {
                                                            if (!b) {
                                                              if (
                                                                ((i[611] = 0),
                                                                j2(
                                                                  26,
                                                                  0 | s,
                                                                  1
                                                                ),
                                                                (t = i[611]),
                                                                (i[611] = 0),
                                                                !t ||
                                                                  !(a = i[612]))
                                                              )
                                                                break v;
                                                              if (
                                                                G(
                                                                  i[t >> 2],
                                                                  e,
                                                                  o
                                                                )
                                                              )
                                                                break h;
                                                              break a;
                                                            }
                                                            if (
                                                              ((t =
                                                                i[
                                                                  (f + 8) >> 2
                                                                ]),
                                                              w[(f + 60) | 0])
                                                            )
                                                              break r;
                                                            if (
                                                              w[(f + 81) | 0]
                                                            ) {
                                                              if (
                                                                ((i[611] = 0),
                                                                (k =
                                                                  0 |
                                                                  U1(
                                                                    28,
                                                                    0 | t,
                                                                    1,
                                                                    1
                                                                  )),
                                                                (a = i[611]),
                                                                (i[611] = 0),
                                                                (n = -1),
                                                                !a ||
                                                                  !(b = i[612]))
                                                              )
                                                                break k;
                                                              if (
                                                                (n = G(
                                                                  i[a >> 2],
                                                                  e,
                                                                  o
                                                                ))
                                                              )
                                                                break l;
                                                              break f;
                                                            }
                                                            if (
                                                              ((i[611] = 0),
                                                              (k =
                                                                0 |
                                                                $2(29, 0 | t)),
                                                              (a = i[611]),
                                                              (i[611] = 0),
                                                              (n = -1),
                                                              !a ||
                                                                !(b = i[612]))
                                                            )
                                                              break k;
                                                            if (
                                                              (n = G(
                                                                i[a >> 2],
                                                                e,
                                                                o
                                                              ))
                                                            )
                                                              break s;
                                                            break f;
                                                          }
                                                          Y(0 | a);
                                                        }
                                                        a = 0 | N();
                                                        continue;
                                                      }
                                                      Y(0 | b);
                                                      break k;
                                                    }
                                                    Y(0 | b);
                                                  }
                                                  if (
                                                    ((a = 0 | N()),
                                                    (0 | n) == 1)
                                                  )
                                                    continue;
                                                  k: {
                                                    s: {
                                                      l: {
                                                        v: {
                                                          h: {
                                                            d: {
                                                              p: {
                                                                if (!k) {
                                                                  if (
                                                                    ((i[611] = 0),
                                                                    j2(
                                                                      26,
                                                                      0 | s,
                                                                      1
                                                                    ),
                                                                    (t =
                                                                      i[611]),
                                                                    (i[611] = 0),
                                                                    !t ||
                                                                      !(a =
                                                                        i[612]))
                                                                  )
                                                                    break d;
                                                                  if (
                                                                    G(
                                                                      i[t >> 2],
                                                                      e,
                                                                      o
                                                                    )
                                                                  )
                                                                    break p;
                                                                  break a;
                                                                }
                                                                if (
                                                                  !(
                                                                    (i[
                                                                      (f +
                                                                        88) >>
                                                                        2
                                                                    ] !=
                                                                      15) |
                                                                      (i[
                                                                        (f +
                                                                          100) >>
                                                                          2
                                                                      ] !=
                                                                        12) |
                                                                      (i[
                                                                        (f +
                                                                          96) >>
                                                                          2
                                                                      ] !=
                                                                        13) |
                                                                      (i[
                                                                        (f +
                                                                          92) >>
                                                                          2
                                                                      ] !=
                                                                        14) ||
                                                                    (i[
                                                                      (f +
                                                                        1716) >>
                                                                        2
                                                                    ] !=
                                                                      3) |
                                                                      (i[
                                                                        (f +
                                                                          1728) >>
                                                                          2
                                                                      ] !=
                                                                        6) |
                                                                      (i[
                                                                        (f +
                                                                          1724) >>
                                                                          2
                                                                      ] !=
                                                                        5) ||
                                                                    i[
                                                                      (f +
                                                                        1720) >>
                                                                        2
                                                                    ] != 4
                                                                  )
                                                                )
                                                                  break k;
                                                                if (
                                                                  w[
                                                                    (f + 81) | 0
                                                                  ]
                                                                ) {
                                                                  if (
                                                                    ((i[611] = 0),
                                                                    j2(
                                                                      30,
                                                                      0 | f,
                                                                      0 | t
                                                                    ),
                                                                    (a =
                                                                      i[611]),
                                                                    (i[611] = 0),
                                                                    (n = -1),
                                                                    !a ||
                                                                      !(k =
                                                                        i[612]))
                                                                  )
                                                                    break v;
                                                                  if (
                                                                    (n = G(
                                                                      i[a >> 2],
                                                                      e,
                                                                      o
                                                                    ))
                                                                  )
                                                                    break h;
                                                                  break n;
                                                                }
                                                                if (
                                                                  ((i[611] = 0),
                                                                  j2(
                                                                    31,
                                                                    0 | f,
                                                                    0 | t
                                                                  ),
                                                                  (a = i[611]),
                                                                  (i[611] = 0),
                                                                  (n = -1),
                                                                  !a ||
                                                                    !(k =
                                                                      i[612]))
                                                                )
                                                                  break s;
                                                                if (
                                                                  (n = G(
                                                                    i[a >> 2],
                                                                    e,
                                                                    o
                                                                  ))
                                                                )
                                                                  break l;
                                                                break n;
                                                              }
                                                              Y(0 | a);
                                                            }
                                                            a = 0 | N();
                                                            continue;
                                                          }
                                                          Y(0 | k);
                                                        }
                                                        if (
                                                          ((a = 0 | N()),
                                                          (0 | n) == 1)
                                                        )
                                                          continue;
                                                        break k;
                                                      }
                                                      Y(0 | k);
                                                    }
                                                    if (
                                                      ((a = 0 | N()),
                                                      (0 | n) == 1)
                                                    )
                                                      continue;
                                                  }
                                                  if (i[(f + 104) >> 2] != 16) {
                                                    if (
                                                      ((i[611] = 0),
                                                      k1(t),
                                                      (a = i[611]),
                                                      (i[611] = 0),
                                                      (n = -1),
                                                      !a || !(k = i[612]))
                                                    )
                                                      break o;
                                                    if (
                                                      (n = G(i[a >> 2], e, o))
                                                    )
                                                      break A;
                                                    break n;
                                                  }
                                                }
                                                if (
                                                  ((i[611] = 0),
                                                  I0(t),
                                                  (a = i[611]),
                                                  (i[611] = 0),
                                                  (t = -1),
                                                  !a || !(n = i[612]))
                                                )
                                                  break c;
                                                if ((t = G(i[a >> 2], e, o)))
                                                  break u;
                                                break t;
                                              }
                                              Y(0 | k);
                                            }
                                            if (((a = 0 | N()), (0 | n) != 1))
                                              break e;
                                            continue;
                                          }
                                          Y(0 | n);
                                        }
                                        if (((a = 0 | N()), (0 | t) == 1))
                                          continue;
                                        (i[(f + 8) >> 2] = 0),
                                          (i[(f + 1896) >> 2] = 0);
                                        break i;
                                      }
                                      if (
                                        ((a = i[(f + 104) >> 2]),
                                        (i[611] = 0),
                                        a1(0 | a, 0 | t),
                                        (a = i[611]),
                                        (i[611] = 0),
                                        (t = -1),
                                        a && (n = i[612]))
                                      ) {
                                        if (!(t = G(i[a >> 2], e, o))) break t;
                                        Y(0 | n);
                                      }
                                      if (((a = 0 | N()), (0 | t) != 1)) break;
                                    }
                                  }
                                }
                                (i[(f + 1896) >> 2] = 0), (i[(f + 8) >> 2] = 0);
                                break i;
                              }
                              b2(a, n), o2();
                            }
                            b2(a, k), o2();
                          }
                          b2(a, b), o2();
                        }
                        b2(t, a), o2();
                      }
                      return O(e), i[(i[608] + 4) >> 2];
                    },
                    s: function () {
                      return 0 | F;
                    },
                    t: function (a) {
                      F = a |= 0;
                    },
                    u: function (a, t) {
                      (a |= 0),
                        (t |= 0),
                        i[611] || ((i[612] = t), (i[611] = a));
                    },
                  };
                })(x);
              })(X0);
            },
            instantiate: function (m, R) {
              return {
                then: function (x) {
                  var I = new w2.Module(m);
                  x({ instance: new w2.Instance(I) });
                },
              };
            },
            RuntimeError: Error,
          };
        (Q2 = []),
          typeof w2 != "object" && X2("no native wasm support detected");
        var V2,
          G2,
          J2,
          Q0 = !1,
          W0 = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
        function q0(m, R, x) {
          for (var I = R + x, P = R; m[P] && !(P >= I); ) ++P;
          if (P - R > 16 && m.subarray && W0)
            return W0.decode(m.subarray(R, P));
          for (var B = ""; R < P; ) {
            var U = m[R++];
            if (128 & U) {
              var q = 63 & m[R++];
              if ((224 & U) != 192) {
                var J = 63 & m[R++];
                if (
                  (U =
                    (240 & U) == 224
                      ? ((15 & U) << 12) | (q << 6) | J
                      : ((7 & U) << 18) |
                        (q << 12) |
                        (J << 6) |
                        (63 & m[R++])) < 65536
                )
                  B += String.fromCharCode(U);
                else {
                  var e2 = U - 65536;
                  B += String.fromCharCode(
                    55296 | (e2 >> 10),
                    56320 | (1023 & e2)
                  );
                }
              } else B += String.fromCharCode(((31 & U) << 6) | q);
            } else B += String.fromCharCode(U);
          }
          return B;
        }
        function I1(m, R) {
          return m % R > 0 && (m += R - (m % R)), m;
        }
        function z0(m) {
          (V2 = m),
            (E.HEAP8 = new Int8Array(m)),
            (E.HEAP16 = new Int16Array(m)),
            (E.HEAP32 = J2 = new Int32Array(m)),
            (E.HEAPU8 = G2 = new Uint8Array(m)),
            (E.HEAPU16 = new Uint16Array(m)),
            (E.HEAPU32 = new Uint32Array(m)),
            (E.HEAPF32 = new Float32Array(m)),
            (E.HEAPF64 = new Float64Array(m));
        }
        var d2,
          K0 = E.INITIAL_MEMORY || 4194304;
        (N2 = E.wasmMemory
          ? E.wasmMemory
          : new w2.Memory({ initial: K0 / 65536, maximum: 32768 })) &&
          (V2 = N2.buffer),
          (K0 = V2.byteLength),
          z0(V2);
        var Y0 = [],
          N0 = [],
          V0 = [];
        function _1(m) {
          Y0.unshift(m);
        }
        function S1(m) {
          V0.unshift(m);
        }
        var _2 = 0,
          Z2 = null;
        function X2(m) {
          throw (
            (E.onAbort && E.onAbort(m),
            H2((m += "")),
            (Q0 = !0),
            (m = "abort(" + m + "). Build with -s ASSERTIONS=1 for more info."),
            new w2.RuntimeError(m))
          );
        }
        (E.preloadedImages = {}), (E.preloadedAudios = {});
        var t2,
          G0 = "data:application/octet-stream;base64,";
        function d0(m) {
          return m.startsWith(G0);
        }
        function J0(m) {
          return m.startsWith("file://");
        }
        function Z0(m) {
          try {
            if (m == t2 && Q2) return new Uint8Array(Q2);
            var R = W2(m);
            if (R) return R;
            if (e0) return e0(m);
            throw "both async and sync fetching of the wasm failed";
          } catch (x) {
            X2(x);
          }
        }
        function p0(m) {
          for (; m.length > 0; ) {
            var R = m.shift();
            if (typeof R != "function") {
              var x = R.func;
              typeof x == "number"
                ? R.arg === void 0
                  ? d2.get(x)()
                  : d2.get(x)(R.arg)
                : x(R.arg === void 0 ? null : R.arg);
            } else R(E);
          }
        }
        function x1(m) {
          try {
            return (
              N2.grow((m - V2.byteLength + 65535) >>> 16), z0(N2.buffer), 1
            );
          } catch {}
        }
        d0((t2 = "libtess-asm.wasm")) ||
          (t2 = (function (m) {
            return E.locateFile ? E.locateFile(m, A2) : A2 + m;
          })(t2));
        var o0 = {
            mappings: {},
            buffers: [null, [], []],
            printChar: function (m, R) {
              var x = o0.buffers[m];
              R === 0 || R === 10
                ? ((m === 1 ? M1 : H2)(q0(x, 0)), (x.length = 0))
                : x.push(R);
            },
            varargs: void 0,
            get: function () {
              return (o0.varargs += 4), J2[(o0.varargs - 4) >> 2];
            },
            getStr: function (m) {
              return (function (R, x) {
                return R ? q0(G2, R, x) : "";
              })(m);
            },
            get64: function (m, R) {
              return m;
            },
          },
          L1 =
            typeof atob == "function"
              ? atob
              : function (m) {
                  var R,
                    x,
                    I,
                    P,
                    B,
                    U,
                    q =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    J = "",
                    e2 = 0;
                  m = m.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                  do
                    (R =
                      (q.indexOf(m.charAt(e2++)) << 2) |
                      ((P = q.indexOf(m.charAt(e2++))) >> 4)),
                      (x =
                        ((15 & P) << 4) |
                        ((B = q.indexOf(m.charAt(e2++))) >> 2)),
                      (I = ((3 & B) << 6) | (U = q.indexOf(m.charAt(e2++)))),
                      (J += String.fromCharCode(R)),
                      B !== 64 && (J += String.fromCharCode(x)),
                      U !== 64 && (J += String.fromCharCode(I));
                  while (e2 < m.length);
                  return J;
                };
        function W2(m) {
          if (d0(m))
            return (function (R) {
              if (typeof h0 == "boolean" && h0) {
                var x = Buffer.from(R, "base64");
                return new Uint8Array(x.buffer, x.byteOffset, x.byteLength);
              }
              try {
                for (
                  var I = L1(R), P = new Uint8Array(I.length), B = 0;
                  B < I.length;
                  ++B
                )
                  P[B] = I.charCodeAt(B);
                return P;
              } catch {
                throw new Error("Converting base64 string to bytes failed.");
              }
            })(m.slice(G0.length));
        }
        var X0 = {
          i: function () {
            throw "longjmp";
          },
          m: function (m, R, x) {
            G2.copyWithin(m, R, R + x);
          },
          h: function (m) {
            var R = G2.length,
              x = 2147483648;
            if ((m >>>= 0) > x) return !1;
            for (var I = 1; I <= 4; I *= 2) {
              var P = R * (1 + 0.2 / I);
              if (
                ((P = Math.min(P, m + 100663296)),
                x1(Math.min(x, I1(Math.max(m, P), 65536))))
              )
                return !0;
            }
            return !1;
          },
          g: function (m, R, x, I) {
            for (var P = 0, B = 0; B < x; B++) {
              for (
                var U = J2[(R + 8 * B) >> 2],
                  q = J2[(R + (8 * B + 4)) >> 2],
                  J = 0;
                J < q;
                J++
              )
                o0.printChar(m, G2[U + J]);
              P += q;
            }
            return (J2[I >> 2] = P), 0;
          },
          c: function () {
            return H0;
          },
          l: function (m) {
            var R = S2();
            try {
              return d2.get(m)();
            } catch (x) {
              if ((x2(R), x !== x + 0 && x !== "longjmp")) throw x;
              L2(1, 0);
            }
          },
          e: function (m, R) {
            var x = S2();
            try {
              return d2.get(m)(R);
            } catch (I) {
              if ((x2(x), I !== I + 0 && I !== "longjmp")) throw I;
              L2(1, 0);
            }
          },
          k: function (m, R, x) {
            var I = S2();
            try {
              return d2.get(m)(R, x);
            } catch (P) {
              if ((x2(I), P !== P + 0 && P !== "longjmp")) throw P;
              L2(1, 0);
            }
          },
          j: function (m, R, x, I) {
            var P = S2();
            try {
              return d2.get(m)(R, x, I);
            } catch (B) {
              if ((x2(P), B !== B + 0 && B !== "longjmp")) throw B;
              L2(1, 0);
            }
          },
          f: function (m, R) {
            var x = S2();
            try {
              d2.get(m)(R);
            } catch (I) {
              if ((x2(x), I !== I + 0 && I !== "longjmp")) throw I;
              L2(1, 0);
            }
          },
          d: function (m, R, x) {
            var I = S2();
            try {
              d2.get(m)(R, x);
            } catch (P) {
              if ((x2(I), P !== P + 0 && P !== "longjmp")) throw P;
              L2(1, 0);
            }
          },
          a: N2,
          b: function (m) {
            H0 = m;
          },
        };
        (function () {
          var m = { a: X0 };
          function R(P, B) {
            var U = P.exports;
            (E.asm = U),
              (d2 = E.asm.q),
              (function (q) {
                N0.unshift(q);
              })(E.asm.n),
              (function (q) {
                if (
                  (_2--,
                  E.monitorRunDependencies && E.monitorRunDependencies(_2),
                  _2 == 0 && Z2)
                ) {
                  var J = Z2;
                  (Z2 = null), J();
                }
              })();
          }
          function x(P) {
            R(P.instance);
          }
          function I(P) {
            return (function () {
              if (!Q2 && (D0 || Y2)) {
                if (typeof fetch == "function" && !J0(t2))
                  return fetch(t2, { credentials: "same-origin" })
                    .then(function (B) {
                      if (!B.ok)
                        throw "failed to load wasm binary file at '" + t2 + "'";
                      return B.arrayBuffer();
                    })
                    .catch(function () {
                      return Z0(t2);
                    });
                if (t0)
                  return new Promise(function (B, U) {
                    t0(
                      t2,
                      function (q) {
                        B(new Uint8Array(q));
                      },
                      U
                    );
                  });
              }
              return Promise.resolve().then(function () {
                return Z0(t2);
              });
            })()
              .then(function (B) {
                return w2.instantiate(B, m);
              })
              .then(P, function (B) {
                H2("failed to asynchronously prepare wasm: " + B), X2(B);
              });
          }
          if (
            (_2++,
            E.monitorRunDependencies && E.monitorRunDependencies(_2),
            E.instantiateWasm)
          )
            try {
              return E.instantiateWasm(m, R);
            } catch (P) {
              return (
                H2("Module.instantiateWasm callback failed with error: " + P),
                !1
              );
            }
          Q2 ||
          typeof w2.instantiateStreaming != "function" ||
          d0(t2) ||
          J0(t2) ||
          typeof fetch != "function"
            ? I(x)
            : fetch(t2, { credentials: "same-origin" }).then(function (P) {
                return w2.instantiateStreaming(P, m).then(x, function (B) {
                  return (
                    H2("wasm streaming compile failed: " + B),
                    H2("falling back to ArrayBuffer instantiation"),
                    I(x)
                  );
                });
              });
        })(),
          (E.___wasm_call_ctors = function () {
            return (E.___wasm_call_ctors = E.asm.n).apply(null, arguments);
          }),
          (E._malloc = function () {
            return (E._malloc = E.asm.o).apply(null, arguments);
          }),
          (E._free = function () {
            return (E._free = E.asm.p).apply(null, arguments);
          }),
          (E._triangulate = function () {
            return (E._triangulate = E.asm.r).apply(null, arguments);
          });
        var b0,
          S2 = (E.stackSave = function () {
            return (S2 = E.stackSave = E.asm.s).apply(null, arguments);
          }),
          x2 = (E.stackRestore = function () {
            return (x2 = E.stackRestore = E.asm.t).apply(null, arguments);
          }),
          L2 = (E._setThrew = function () {
            return (L2 = E._setThrew = E.asm.u).apply(null, arguments);
          });
        function P1(m) {
          (this.name = "ExitStatus"),
            (this.message = "Program terminated with exit(" + m + ")"),
            (this.status = m);
        }
        function m0(m) {
          function R() {
            b0 ||
              ((b0 = !0),
              (E.calledRun = !0),
              Q0 ||
                (p0(N0),
                E.onRuntimeInitialized && E.onRuntimeInitialized(),
                (function () {
                  if (E.postRun)
                    for (
                      typeof E.postRun == "function" &&
                      (E.postRun = [E.postRun]);
                      E.postRun.length;

                    )
                      S1(E.postRun.shift());
                  p0(V0);
                })()));
          }
          _2 > 0 ||
            ((function () {
              if (E.preRun)
                for (
                  typeof E.preRun == "function" && (E.preRun = [E.preRun]);
                  E.preRun.length;

                )
                  _1(E.preRun.shift());
              p0(Y0);
            })(),
            _2 > 0 ||
              (E.setStatus
                ? (E.setStatus("Running..."),
                  setTimeout(function () {
                    setTimeout(function () {
                      E.setStatus("");
                    }, 1),
                      R();
                  }, 1))
                : R()));
        }
        if (
          ((Z2 = function m() {
            b0 || m0(), b0 || (Z2 = m);
          }),
          (E.run = m0),
          E.preInit)
        )
          for (
            typeof E.preInit == "function" && (E.preInit = [E.preInit]);
            E.preInit.length > 0;

          )
            E.preInit.pop()();
        m0();
        let g0 = null,
          y2 = null,
          P2 = null,
          k0 = null;
        const s2 = r2.Module;
        let $0 = 0;
        return (
          (r2.triangulate = (m, R, x) => {
            g0 || (g0 = s2._triangulate);
            let I = s2.HEAPF32;
            const P = s2.HEAP32.BYTES_PER_ELEMENT,
              B = I.BYTES_PER_ELEMENT;
            x > $0 &&
              (($0 = x),
              P2 && (s2._free(P2), (P2 = 0)),
              y2 && (s2._free(y2), (y2 = 0))),
              P2 || (P2 = s2._malloc(x * B)),
              k0 || (k0 = s2._malloc(4e3 * P));
            const U = 2 * x;
            y2 || (y2 = s2._malloc(U * B)),
              (I = s2.HEAPF32),
              I.set(m, P2 / B),
              s2.HEAP32.set(R, k0 / P);
            const q = U / 2,
              J = g0(P2, k0, Math.min(R.length, 4e3), 2, y2, q),
              e2 = 2 * J;
            I = s2.HEAPF32;
            const u0 = I.slice(y2 / B, y2 / B + e2),
              l2 = {};
            return (l2.buffer = u0), (l2.vertexCount = J), l2;
          }),
          r2.whenLoaded()
        );
      },
    };
  }),
  (R1 = C1()) !== void 0 && (O0.exports = R1);
const W1 = (function (I2, n0) {
  for (var r2 = 0; r2 < n0.length; r2++) {
    const E = n0[r2];
    if (typeof E != "string" && !Array.isArray(E)) {
      for (const g2 in E)
        if (g2 !== "default" && !(g2 in I2)) {
          const u2 = Object.getOwnPropertyDescriptor(E, g2);
          u2 &&
            Object.defineProperty(
              I2,
              g2,
              u2.get ? u2 : { enumerable: !0, get: () => E[g2] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(I2, Symbol.toStringTag, { value: "Module" })
  );
})({ __proto__: null, default: l0 }, [l0]);
export { W1 as l };
