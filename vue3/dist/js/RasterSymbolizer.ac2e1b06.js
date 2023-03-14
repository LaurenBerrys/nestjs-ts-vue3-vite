import {
  s as pe,
  cE as Zt,
  aX as $t,
  c_ as Qt,
  r as X,
  a0 as Re,
  ae as z,
  af as H,
  R as er,
  ag as $e,
  dd as Qe,
  bO as ne,
  ar as at,
  aH as tr,
  t as Oe,
  d0 as Rt,
  cc as st,
  q as Ce,
  Q as lt,
} from "./index.8fd7165c.js";
import {
  u as et,
  m as se,
  i as Se,
  s as rr,
  h as ut,
  k as _e,
  l as or,
  p as ct,
  n as Ie,
} from "./dataUtils.e77088c3.js";
import { q as nr } from "./Table.e9c997d5.js";
import { y as Le, z as ft, v as ht, p as ir } from "./colorUtils.3868c6ed.js";
var Ue,
  dt,
  pt,
  we = {},
  ar = {
    get exports() {
      return we;
    },
    set exports(e) {
      we = e;
    },
  };
(dt = ar),
  (Ue = (function () {
    function e() {
      (this.pos = 0),
        (this.bufferLength = 0),
        (this.eof = !1),
        (this.buffer = null);
    }
    return (
      (e.prototype = {
        ensureBuffer: function (t) {
          var r = this.buffer,
            h = r ? r.byteLength : 0;
          if (t < h) return r;
          for (var d = 512; d < t; ) d <<= 1;
          for (var l = new Uint8Array(d), u = 0; u < h; ++u) l[u] = r[u];
          return (this.buffer = l);
        },
        getByte: function () {
          for (var t = this.pos; this.bufferLength <= t; ) {
            if (this.eof) return null;
            this.readBlock();
          }
          return this.buffer[this.pos++];
        },
        getBytes: function (t) {
          var r = this.pos;
          if (t) {
            this.ensureBuffer(r + t);
            for (var h = r + t; !this.eof && this.bufferLength < h; )
              this.readBlock();
            var d = this.bufferLength;
            h > d && (h = d);
          } else {
            for (; !this.eof; ) this.readBlock();
            h = this.bufferLength;
          }
          return (this.pos = h), this.buffer.subarray(r, h);
        },
        lookChar: function () {
          for (var t = this.pos; this.bufferLength <= t; ) {
            if (this.eof) return null;
            this.readBlock();
          }
          return String.fromCharCode(this.buffer[this.pos]);
        },
        getChar: function () {
          for (var t = this.pos; this.bufferLength <= t; ) {
            if (this.eof) return null;
            this.readBlock();
          }
          return String.fromCharCode(this.buffer[this.pos++]);
        },
        makeSubStream: function (t, r, h) {
          for (var d = t + r; this.bufferLength <= d && !this.eof; )
            this.readBlock();
          return new Stream(this.buffer, t, r, h);
        },
        skip: function (t) {
          t || (t = 1), (this.pos += t);
        },
        reset: function () {
          this.pos = 0;
        },
      }),
      e
    );
  })()),
  (pt = (function () {
    if (!self || !self.Uint32Array) return null;
    var e = new Uint32Array([
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
      ]),
      t = new Uint32Array([
        3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095,
        131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243,
        262259, 327811, 327843, 327875, 327907, 258, 258, 258,
      ]),
      r = new Uint32Array([
        1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177,
        262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057,
        590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353,
        876545,
      ]),
      h = [
        new Uint32Array([
          459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016,
          459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048,
          459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032,
          459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010,
          524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018,
          524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014,
          524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022,
          524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009,
          524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017,
          524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013,
          524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021,
          524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011,
          524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019,
          524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015,
          524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023,
          524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008,
          524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016,
          524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012,
          524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020,
          524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010,
          524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018,
          524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014,
          524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022,
          524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009,
          524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017,
          524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013,
          524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021,
          524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011,
          524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019,
          524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015,
          524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023,
          524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008,
          524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016,
          524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012,
          524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020,
          524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010,
          524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018,
          524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014,
          524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022,
          524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009,
          524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017,
          524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013,
          524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021,
          524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011,
          524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019,
          524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015,
          524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023,
          524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008,
          524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016,
          524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012,
          524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020,
          524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010,
          524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018,
          524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014,
          524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022,
          524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009,
          524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017,
          524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013,
          524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021,
          524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011,
          524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019,
          524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015,
          524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023,
          524399, 524335, 590015, 524303, 524431, 524367, 590079,
        ]),
        9,
      ],
      d = [
        new Uint32Array([
          327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708,
          327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681,
          327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683,
          327699, 327691, 327707, 327687, 327703, 327695, 0,
        ]),
        5,
      ];
    function l(o) {
      throw new Error(o);
    }
    function u(o) {
      var a = 0,
        s = o[a++],
        n = o[a++];
      (s != -1 && n != -1) || l("Invalid header in flate stream"),
        (15 & s) != 8 && l("Unknown compression method in flate stream"),
        ((s << 8) + n) % 31 != 0 && l("Bad FCHECK in flate stream"),
        32 & n && l("FDICT bit set in flate stream"),
        (this.bytes = o),
        (this.bytesPos = 2),
        (this.codeSize = 0),
        (this.codeBuf = 0),
        Ue.call(this);
    }
    return (
      (u.prototype = Object.create(Ue.prototype)),
      (u.prototype.getBits = function (o) {
        for (
          var a,
            s = this.codeSize,
            n = this.codeBuf,
            m = this.bytes,
            T = this.bytesPos;
          s < o;

        )
          (a = m[T++]) === void 0 && l("Bad encoding in flate stream"),
            (n |= a << s),
            (s += 8);
        return (
          (a = n & ((1 << o) - 1)),
          (this.codeBuf = n >> o),
          (this.codeSize = s -= o),
          (this.bytesPos = T),
          a
        );
      }),
      (u.prototype.getCode = function (o) {
        for (
          var a = o[0],
            s = o[1],
            n = this.codeSize,
            m = this.codeBuf,
            T = this.bytes,
            C = this.bytesPos;
          n < s;

        ) {
          var v;
          (v = T[C++]) === void 0 && l("Bad encoding in flate stream"),
            (m |= v << n),
            (n += 8);
        }
        var y = a[m & ((1 << s) - 1)],
          g = y >> 16,
          i = 65535 & y;
        return (
          (n == 0 || n < g || g == 0) && l("Bad encoding in flate stream"),
          (this.codeBuf = m >> g),
          (this.codeSize = n - g),
          (this.bytesPos = C),
          i
        );
      }),
      (u.prototype.generateHuffmanTable = function (o) {
        for (var a = o.length, s = 0, n = 0; n < a; ++n) o[n] > s && (s = o[n]);
        for (
          var m = 1 << s, T = new Uint32Array(m), C = 1, v = 0, y = 2;
          C <= s;
          ++C, v <<= 1, y <<= 1
        )
          for (var g = 0; g < a; ++g)
            if (o[g] == C) {
              var i = 0,
                f = v;
              for (n = 0; n < C; ++n) (i = (i << 1) | (1 & f)), (f >>= 1);
              for (n = i; n < m; n += y) T[n] = (C << 16) | g;
              ++v;
            }
        return [T, s];
      }),
      (u.prototype.readBlock = function () {
        function o(D, G, F, U, N) {
          for (var Y = D.getBits(F) + U; Y-- > 0; ) G[y++] = N;
        }
        var a = this.getBits(3);
        if ((1 & a && (this.eof = !0), (a >>= 1) != 0)) {
          var s, n;
          if (a == 1) (s = h), (n = d);
          else if (a == 2) {
            for (
              var m = this.getBits(5) + 257,
                T = this.getBits(5) + 1,
                C = this.getBits(4) + 4,
                v = Array(e.length),
                y = 0;
              y < C;

            )
              v[e[y++]] = this.getBits(3);
            for (
              var g = this.generateHuffmanTable(v),
                i = 0,
                f = ((y = 0), m + T),
                p = new Array(f);
              y < f;

            ) {
              var b = this.getCode(g);
              b == 16
                ? o(this, p, 2, 3, i)
                : b == 17
                ? o(this, p, 3, 3, (i = 0))
                : b == 18
                ? o(this, p, 7, 11, (i = 0))
                : (p[y++] = i = b);
            }
            (s = this.generateHuffmanTable(p.slice(0, m))),
              (n = this.generateHuffmanTable(p.slice(m, f)));
          } else l("Unknown block type in flate stream");
          for (
            var c = (B = this.buffer) ? B.length : 0, w = this.bufferLength;
            ;

          ) {
            var S = this.getCode(s);
            if (S < 256)
              w + 1 >= c && (c = (B = this.ensureBuffer(w + 1)).length),
                (B[w++] = S);
            else {
              if (S == 256) return void (this.bufferLength = w);
              var k = (S = t[(S -= 257)]) >> 16;
              k > 0 && (k = this.getBits(k)),
                (i = (65535 & S) + k),
                (S = this.getCode(n)),
                (k = (S = r[S]) >> 16) > 0 && (k = this.getBits(k));
              var E = (65535 & S) + k;
              w + i >= c && (c = (B = this.ensureBuffer(w + i)).length);
              for (var R = 0; R < i; ++R, ++w) B[w] = B[w - E];
            }
          }
        } else {
          var P,
            I = this.bytes,
            x = this.bytesPos;
          (P = I[x++]) === void 0 && l("Bad block header in flate stream");
          var A = P;
          (P = I[x++]) === void 0 && l("Bad block header in flate stream"),
            (A |= P << 8),
            (P = I[x++]) === void 0 && l("Bad block header in flate stream");
          var O = P;
          (P = I[x++]) === void 0 && l("Bad block header in flate stream"),
            (O |= P << 8) != (65535 & ~A) &&
              l("Bad uncompressed block length in flate stream"),
            (this.codeBuf = 0),
            (this.codeSize = 0);
          var M = this.bufferLength,
            B = this.ensureBuffer(M + A),
            _ = M + A;
          this.bufferLength = _;
          for (var L = M; L < _; ++L) {
            if ((P = I[x++]) === void 0) {
              this.eof = !0;
              break;
            }
            B[L] = P;
          }
          this.bytesPos = x;
        }
      }),
      u
    );
  })()) !== void 0 && (dt.exports = pt);
let sr = class Dt {
  constructor(t) {
    (this._canvas = null),
      (this._ctx = null),
      t &&
        ((this._canvas = t.canvas),
        (this._ctx = t.ctx || (t.canvas && t.canvas.getContext("2d"))));
  }
  decode(t, r, h) {
    if (!t || t.byteLength < 10)
      throw new pe(
        "imagecanvasdecoder: decode",
        "required a valid encoded data as input."
      );
    let { width: d = 0, height: l = 0, format: u } = r;
    const { applyJpegMask: o } = r;
    if (o && (!d || !l))
      throw new pe(
        "imagecanvasdecoder: decode",
        "image width and height are needed to apply jpeg mask directly to canvas"
      );
    return new Promise((a, s) => {
      let n = null;
      u === "jpg" && o && (n = Dt._getMask(t, { width: d, height: l }));
      const m = new Blob([new Uint8Array(t)], {
          type: "image/" + u == "jpg" ? "jpeg" : u,
        }),
        T = URL.createObjectURL(m),
        C = new Image();
      let v;
      (C.src = T),
        (C.onload = () => {
          if ((URL.revokeObjectURL(T), Zt(h))) return void s($t());
          (d = C.width),
            (l = C.height),
            this._canvas && this._ctx
              ? ((this._canvas.width === d && this._canvas.height === l) ||
                  ((this._canvas.width = d), (this._canvas.height = l)),
                this._ctx.clearRect(0, 0, d, l))
              : ((this._canvas = document.createElement("canvas")),
                (this._canvas.width = d),
                (this._canvas.height = l),
                (this._ctx = this._canvas.getContext("2d"))),
            this._ctx.drawImage(C, 0, 0);
          const y = this._ctx.getImageData(0, 0, d, l);
          let g;
          if (((v = y.data), r.renderOnCanvas)) {
            if (n)
              for (g = 0; g < n.length; g++)
                n[g] ? (v[4 * g + 3] = 255) : (v[4 * g + 3] = 0);
            return this._ctx.putImageData(y, 0, 0), void a(null);
          }
          const i = d * l,
            f = new Uint8Array(i),
            p = new Uint8Array(i),
            b = new Uint8Array(i);
          if (n)
            for (g = 0; g < i; g++)
              (f[g] = v[4 * g]), (p[g] = v[4 * g + 1]), (b[g] = v[4 * g + 2]);
          else
            for (n = new Uint8Array(i), g = 0; g < i; g++)
              (f[g] = v[4 * g]),
                (p[g] = v[4 * g + 1]),
                (b[g] = v[4 * g + 2]),
                (n[g] = v[4 * g + 3]);
          a({
            width: d,
            height: l,
            pixels: [f, p, b],
            mask: n,
            pixelType: "u8",
          });
        }),
        (C.onerror = () => {
          URL.revokeObjectURL(T), s("cannot load image");
        });
    });
  }
  static _getMask(t, r) {
    let h = null;
    try {
      const d = new Uint8Array(t),
        l = Math.ceil(d.length / 2);
      let u = 0;
      const o = d.length - 2;
      for (u = l; u < o && (d[u] !== 255 || d[u + 1] !== 217); u++);
      if (((u += 2), u < d.length - 1)) {
        const a = new we(d.subarray(u)).getBytes();
        h = new Uint8Array(r.width * r.height);
        let s = 0;
        for (let n = 0; n < a.length; n++)
          for (let m = 7; m >= 0; m--) h[s++] = (a[n] >> m) & 1;
      }
    } catch {}
    return h;
  }
};
var gt,
  mt,
  yt,
  Be = {},
  lr = {
    get exports() {
      return Be;
    },
    set exports(e) {
      Be = e;
    },
  };
(gt = lr),
  (mt = function () {
    var e = (function () {
      function t(r) {
        this.message = "JPEG error: " + r;
      }
      return (
        (t.prototype = new Error()),
        (t.prototype.name = "JpegError"),
        (t.constructor = t),
        t
      );
    })();
    return (function () {
      if (!self || !self.Uint8ClampedArray) return null;
      var t = new Uint8Array([
          0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26,
          33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57,
          50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31,
          39, 46, 53, 60, 61, 54, 47, 55, 62, 63,
        ]),
        r = 4017,
        h = 799,
        d = 3406,
        l = 2276,
        u = 1567,
        o = 3784,
        a = 5793,
        s = 2896;
      function n() {
        (this.decodeTransform = null), (this.colorTransform = -1);
      }
      function m(i, f) {
        for (var p, b, c = 0, w = [], S = 16; S > 0 && !i[S - 1]; ) S--;
        w.push({ children: [], index: 0 });
        var k,
          E = w[0];
        for (p = 0; p < S; p++) {
          for (b = 0; b < i[p]; b++) {
            for ((E = w.pop()).children[E.index] = f[c]; E.index > 0; )
              E = w.pop();
            for (E.index++, w.push(E); w.length <= p; )
              w.push((k = { children: [], index: 0 })),
                (E.children[E.index] = k.children),
                (E = k);
            c++;
          }
          p + 1 < S &&
            (w.push((k = { children: [], index: 0 })),
            (E.children[E.index] = k.children),
            (E = k));
        }
        return w[0].children;
      }
      function T(i, f, p) {
        return 64 * ((i.blocksPerLine + 1) * f + p);
      }
      function C(i, f, p, b, c, w, S, k, E) {
        var R = p.mcusPerLine,
          P = p.progressive,
          I = f,
          x = 0,
          A = 0;
        function O() {
          if (A > 0) return A--, (x >> A) & 1;
          if ((x = i[f++]) === 255) {
            var V = i[f++];
            if (V)
              throw new e("unexpected marker " + ((x << 8) | V).toString(16));
          }
          return (A = 7), x >>> 7;
        }
        function M(V) {
          for (var W = V; ; ) {
            if (typeof (W = W[O()]) == "number") return W;
            if (typeof W != "object") throw new e("invalid huffman sequence");
          }
        }
        function B(V) {
          for (var W = 0; V > 0; ) (W = (W << 1) | O()), V--;
          return W;
        }
        function _(V) {
          if (V === 1) return O() === 1 ? 1 : -1;
          var W = B(V);
          return W >= 1 << (V - 1) ? W : W + (-1 << V) + 1;
        }
        var L = 0,
          D,
          G = 0;
        function F(V, W, Z, ue, ie) {
          var K = Z % R;
          W(V, T(V, ((Z / R) | 0) * V.v + ue, K * V.h + ie));
        }
        function U(V, W, Z) {
          W(V, T(V, (Z / V.blocksPerLine) | 0, Z % V.blocksPerLine));
        }
        var N,
          Y,
          ee,
          J,
          re,
          le,
          ce = b.length;
        le = P
          ? w === 0
            ? k === 0
              ? function (V, W) {
                  var Z = M(V.huffmanTableDC),
                    ue = Z === 0 ? 0 : _(Z) << E;
                  V.blockData[W] = V.pred += ue;
                }
              : function (V, W) {
                  V.blockData[W] |= O() << E;
                }
            : k === 0
            ? function (V, W) {
                if (L > 0) L--;
                else
                  for (var Z = w, ue = S; Z <= ue; ) {
                    var ie = M(V.huffmanTableAC),
                      K = 15 & ie,
                      Q = ie >> 4;
                    if (K !== 0) {
                      var te = t[(Z += Q)];
                      (V.blockData[W + te] = _(K) * (1 << E)), Z++;
                    } else {
                      if (Q < 15) {
                        L = B(Q) + (1 << Q) - 1;
                        break;
                      }
                      Z += 16;
                    }
                  }
              }
            : function (V, W) {
                for (var Z, ue, ie = w, K = S, Q = 0; ie <= K; ) {
                  var te = t[ie];
                  switch (G) {
                    case 0:
                      if (
                        ((Q = (ue = M(V.huffmanTableAC)) >> 4),
                        (Z = 15 & ue) == 0)
                      )
                        Q < 15
                          ? ((L = B(Q) + (1 << Q)), (G = 4))
                          : ((Q = 16), (G = 1));
                      else {
                        if (Z !== 1) throw new e("invalid ACn encoding");
                        (D = _(Z)), (G = Q ? 2 : 3);
                      }
                      continue;
                    case 1:
                    case 2:
                      V.blockData[W + te]
                        ? (V.blockData[W + te] += O() << E)
                        : --Q == 0 && (G = G === 2 ? 3 : 0);
                      break;
                    case 3:
                      V.blockData[W + te]
                        ? (V.blockData[W + te] += O() << E)
                        : ((V.blockData[W + te] = D << E), (G = 0));
                      break;
                    case 4:
                      V.blockData[W + te] && (V.blockData[W + te] += O() << E);
                  }
                  ie++;
                }
                G === 4 && --L == 0 && (G = 0);
              }
          : function (V, W) {
              var Z = M(V.huffmanTableDC),
                ue = Z === 0 ? 0 : _(Z);
              V.blockData[W] = V.pred += ue;
              for (var ie = 1; ie < 64; ) {
                var K = M(V.huffmanTableAC),
                  Q = 15 & K,
                  te = K >> 4;
                if (Q !== 0) {
                  var he = t[(ie += te)];
                  (V.blockData[W + he] = _(Q)), ie++;
                } else {
                  if (te < 15) break;
                  ie += 16;
                }
              }
            };
        var ae,
          ge,
          $,
          Ae,
          fe = 0;
        for (
          ge =
            ce === 1
              ? b[0].blocksPerLine * b[0].blocksPerColumn
              : R * p.mcusPerColumn;
          fe < ge;

        ) {
          var Ee = c ? Math.min(ge - fe, c) : ge;
          for (Y = 0; Y < ce; Y++) b[Y].pred = 0;
          if (((L = 0), ce === 1))
            for (N = b[0], re = 0; re < Ee; re++) U(N, le, fe), fe++;
          else
            for (re = 0; re < Ee; re++) {
              for (Y = 0; Y < ce; Y++)
                for ($ = (N = b[Y]).h, Ae = N.v, ee = 0; ee < Ae; ee++)
                  for (J = 0; J < $; J++) F(N, le, fe, ee, J);
              fe++;
            }
          (A = 0), (ae = g(i, f)) && ae.invalid && (f = ae.offset);
          var me = ae && ae.marker;
          if (!me || me <= 65280) throw new e("marker was not found");
          if (!(me >= 65488 && me <= 65495)) break;
          f += 2;
        }
        return (ae = g(i, f)) && ae.invalid && (f = ae.offset), f - I;
      }
      function v(i, f, p) {
        var b,
          c,
          w,
          S,
          k,
          E,
          R,
          P,
          I,
          x,
          A,
          O,
          M,
          B,
          _,
          L,
          D,
          G = i.quantizationTable,
          F = i.blockData;
        if (!G) throw new e("missing required Quantization Table.");
        for (var U = 0; U < 64; U += 8)
          (I = F[f + U]),
            (x = F[f + U + 1]),
            (A = F[f + U + 2]),
            (O = F[f + U + 3]),
            (M = F[f + U + 4]),
            (B = F[f + U + 5]),
            (_ = F[f + U + 6]),
            (L = F[f + U + 7]),
            (I *= G[U]),
            x | A | O | M | B | _ | L
              ? ((x *= G[U + 1]),
                (A *= G[U + 2]),
                (O *= G[U + 3]),
                (M *= G[U + 4]),
                (B *= G[U + 5]),
                (_ *= G[U + 6]),
                (L *= G[U + 7]),
                (c =
                  (b =
                    ((b = (a * I + 128) >> 8) + (c = (a * M + 128) >> 8) + 1) >>
                    1) - c),
                (D = ((w = A) * o + (S = _) * u + 128) >> 8),
                (w = (w * u - S * o + 128) >> 8),
                (R =
                  (k =
                    ((k = (s * (x - L) + 128) >> 8) + (R = B << 4) + 1) >> 1) -
                  R),
                (E =
                  (P =
                    ((P = (s * (x + L) + 128) >> 8) + (E = O << 4) + 1) >> 1) -
                  E),
                (S = (b = (b + (S = D) + 1) >> 1) - S),
                (w = (c = (c + w + 1) >> 1) - w),
                (D = (k * l + P * d + 2048) >> 12),
                (k = (k * d - P * l + 2048) >> 12),
                (P = D),
                (D = (E * h + R * r + 2048) >> 12),
                (E = (E * r - R * h + 2048) >> 12),
                (R = D),
                (p[U] = b + P),
                (p[U + 7] = b - P),
                (p[U + 1] = c + R),
                (p[U + 6] = c - R),
                (p[U + 2] = w + E),
                (p[U + 5] = w - E),
                (p[U + 3] = S + k),
                (p[U + 4] = S - k))
              : ((D = (a * I + 512) >> 10),
                (p[U] = D),
                (p[U + 1] = D),
                (p[U + 2] = D),
                (p[U + 3] = D),
                (p[U + 4] = D),
                (p[U + 5] = D),
                (p[U + 6] = D),
                (p[U + 7] = D));
        for (var N = 0; N < 8; ++N)
          (I = p[N]),
            (x = p[N + 8]) |
            (A = p[N + 16]) |
            (O = p[N + 24]) |
            (M = p[N + 32]) |
            (B = p[N + 40]) |
            (_ = p[N + 48]) |
            (L = p[N + 56])
              ? ((c =
                  (b =
                    4112 +
                    (((b = (a * I + 2048) >> 12) +
                      (c = (a * M + 2048) >> 12) +
                      1) >>
                      1)) - c),
                (D = ((w = A) * o + (S = _) * u + 2048) >> 12),
                (w = (w * u - S * o + 2048) >> 12),
                (S = D),
                (R =
                  (k = ((k = (s * (x - L) + 2048) >> 12) + (R = B) + 1) >> 1) -
                  R),
                (E =
                  (P = ((P = (s * (x + L) + 2048) >> 12) + (E = O) + 1) >> 1) -
                  E),
                (D = (k * l + P * d + 2048) >> 12),
                (k = (k * d - P * l + 2048) >> 12),
                (P = D),
                (D = (E * h + R * r + 2048) >> 12),
                (E = (E * r - R * h + 2048) >> 12),
                (I =
                  (I = (b = (b + S + 1) >> 1) + P) < 16
                    ? 0
                    : I >= 4080
                    ? 255
                    : I >> 4),
                (x =
                  (x = (c = (c + w + 1) >> 1) + (R = D)) < 16
                    ? 0
                    : x >= 4080
                    ? 255
                    : x >> 4),
                (A = (A = (w = c - w) + E) < 16 ? 0 : A >= 4080 ? 255 : A >> 4),
                (O = (O = (S = b - S) + k) < 16 ? 0 : O >= 4080 ? 255 : O >> 4),
                (M = (M = S - k) < 16 ? 0 : M >= 4080 ? 255 : M >> 4),
                (B = (B = w - E) < 16 ? 0 : B >= 4080 ? 255 : B >> 4),
                (_ = (_ = c - R) < 16 ? 0 : _ >= 4080 ? 255 : _ >> 4),
                (L = (L = b - P) < 16 ? 0 : L >= 4080 ? 255 : L >> 4),
                (F[f + N] = I),
                (F[f + N + 8] = x),
                (F[f + N + 16] = A),
                (F[f + N + 24] = O),
                (F[f + N + 32] = M),
                (F[f + N + 40] = B),
                (F[f + N + 48] = _),
                (F[f + N + 56] = L))
              : ((D =
                  (D = (a * I + 8192) >> 14) < -2040
                    ? 0
                    : D >= 2024
                    ? 255
                    : (D + 2056) >> 4),
                (F[f + N] = D),
                (F[f + N + 8] = D),
                (F[f + N + 16] = D),
                (F[f + N + 24] = D),
                (F[f + N + 32] = D),
                (F[f + N + 40] = D),
                (F[f + N + 48] = D),
                (F[f + N + 56] = D));
      }
      function y(i, f) {
        for (
          var p = f.blocksPerLine,
            b = f.blocksPerColumn,
            c = new Int16Array(64),
            w = 0;
          w < b;
          w++
        )
          for (var S = 0; S < p; S++) v(f, T(f, w, S), c);
        return f.blockData;
      }
      function g(i, f, p) {
        function b(E) {
          return (i[E] << 8) | i[E + 1];
        }
        var c = i.length - 1,
          w = p < f ? p : f;
        if (f >= c) return null;
        var S = b(f);
        if (S >= 65472 && S <= 65534)
          return { invalid: null, marker: S, offset: f };
        for (var k = b(w); !(k >= 65472 && k <= 65534); ) {
          if (++w >= c) return null;
          k = b(w);
        }
        return { invalid: S.toString(16), marker: k, offset: w };
      }
      return (
        (n.prototype = {
          parse: function (i) {
            function f() {
              var K = (i[S] << 8) | i[S + 1];
              return (S += 2), K;
            }
            function p() {
              var K = f(),
                Q = S + K - 2,
                te = g(i, Q, S);
              te && te.invalid && (Q = te.offset);
              var he = i.subarray(S, Q);
              return (S += he.length), he;
            }
            function b(K) {
              for (
                var Q = Math.ceil(K.samplesPerLine / 8 / K.maxH),
                  te = Math.ceil(K.scanLines / 8 / K.maxV),
                  he = 0;
                he < K.components.length;
                he++
              ) {
                $ = K.components[he];
                var Kt = Math.ceil(
                    (Math.ceil(K.samplesPerLine / 8) * $.h) / K.maxH
                  ),
                  Jt = Math.ceil((Math.ceil(K.scanLines / 8) * $.v) / K.maxV),
                  qt = Q * $.h,
                  Xt = te * $.v * 64 * (qt + 1);
                ($.blockData = new Int16Array(Xt)),
                  ($.blocksPerLine = Kt),
                  ($.blocksPerColumn = Jt);
              }
              (K.mcusPerLine = Q), (K.mcusPerColumn = te);
            }
            var c,
              w,
              S = 0,
              k = null,
              E = null,
              R = [],
              P = [],
              I = [],
              x = f();
            if (x !== 65496) throw new e("SOI not found");
            for (x = f(); x !== 65497; ) {
              var A, O, M;
              switch (x) {
                case 65504:
                case 65505:
                case 65506:
                case 65507:
                case 65508:
                case 65509:
                case 65510:
                case 65511:
                case 65512:
                case 65513:
                case 65514:
                case 65515:
                case 65516:
                case 65517:
                case 65518:
                case 65519:
                case 65534:
                  var B = p();
                  x === 65504 &&
                    B[0] === 74 &&
                    B[1] === 70 &&
                    B[2] === 73 &&
                    B[3] === 70 &&
                    B[4] === 0 &&
                    (k = {
                      version: { major: B[5], minor: B[6] },
                      densityUnits: B[7],
                      xDensity: (B[8] << 8) | B[9],
                      yDensity: (B[10] << 8) | B[11],
                      thumbWidth: B[12],
                      thumbHeight: B[13],
                      thumbData: B.subarray(14, 14 + 3 * B[12] * B[13]),
                    }),
                    x === 65518 &&
                      B[0] === 65 &&
                      B[1] === 100 &&
                      B[2] === 111 &&
                      B[3] === 98 &&
                      B[4] === 101 &&
                      (E = {
                        version: (B[5] << 8) | B[6],
                        flags0: (B[7] << 8) | B[8],
                        flags1: (B[9] << 8) | B[10],
                        transformCode: B[11],
                      });
                  break;
                case 65499:
                  for (var _ = f() + S - 2; S < _; ) {
                    var L = i[S++],
                      D = new Uint16Array(64);
                    if (L >> 4) {
                      if (L >> 4 != 1) throw new e("DQT - invalid table spec");
                      for (O = 0; O < 64; O++) D[t[O]] = f();
                    } else for (O = 0; O < 64; O++) D[t[O]] = i[S++];
                    R[15 & L] = D;
                  }
                  break;
                case 65472:
                case 65473:
                case 65474:
                  if (c) throw new e("Only single frame JPEGs supported");
                  f(),
                    ((c = {}).extended = x === 65473),
                    (c.progressive = x === 65474),
                    (c.precision = i[S++]),
                    (c.scanLines = f()),
                    (c.samplesPerLine = f()),
                    (c.components = []),
                    (c.componentIds = {});
                  var G,
                    F = i[S++],
                    U = 0,
                    N = 0;
                  for (A = 0; A < F; A++) {
                    G = i[S];
                    var Y = i[S + 1] >> 4,
                      ee = 15 & i[S + 1];
                    U < Y && (U = Y), N < ee && (N = ee);
                    var J = i[S + 2];
                    (M = c.components.push({
                      h: Y,
                      v: ee,
                      quantizationId: J,
                      quantizationTable: null,
                    })),
                      (c.componentIds[G] = M - 1),
                      (S += 3);
                  }
                  (c.maxH = U), (c.maxV = N), b(c);
                  break;
                case 65476:
                  var re = f();
                  for (A = 2; A < re; ) {
                    var le = i[S++],
                      ce = new Uint8Array(16),
                      ae = 0;
                    for (O = 0; O < 16; O++, S++) ae += ce[O] = i[S];
                    var ge = new Uint8Array(ae);
                    for (O = 0; O < ae; O++, S++) ge[O] = i[S];
                    (A += 17 + ae), ((le >> 4 ? P : I)[15 & le] = m(ce, ge));
                  }
                  break;
                case 65501:
                  f(), (w = f());
                  break;
                case 65498:
                  f();
                  var $,
                    Ae = i[S++],
                    fe = [];
                  for (A = 0; A < Ae; A++) {
                    var Ee = c.componentIds[i[S++]];
                    $ = c.components[Ee];
                    var me = i[S++];
                    ($.huffmanTableDC = I[me >> 4]),
                      ($.huffmanTableAC = P[15 & me]),
                      fe.push($);
                  }
                  var V = i[S++],
                    W = i[S++],
                    Z = i[S++],
                    ue = C(i, S, c, fe, w, V, W, Z >> 4, 15 & Z);
                  S += ue;
                  break;
                case 65535:
                  i[S] !== 255 && S--;
                  break;
                default:
                  if (i[S - 3] === 255 && i[S - 2] >= 192 && i[S - 2] <= 254) {
                    S -= 3;
                    break;
                  }
                  throw new e("unknown marker " + x.toString(16));
              }
              x = f();
            }
            for (
              this.width = c.samplesPerLine,
                this.height = c.scanLines,
                this.jfif = k,
                this.eof = S,
                this.adobe = E,
                this.components = [],
                A = 0;
              A < c.components.length;
              A++
            ) {
              var ie = R[($ = c.components[A]).quantizationId];
              ie && ($.quantizationTable = ie),
                this.components.push({
                  output: y(0, $),
                  scaleX: $.h / c.maxH,
                  scaleY: $.v / c.maxV,
                  blocksPerLine: $.blocksPerLine,
                  blocksPerColumn: $.blocksPerColumn,
                });
            }
            this.numComponents = this.components.length;
          },
          _getLinearizedBlockData: function (i, f) {
            var p,
              b,
              c,
              w,
              S,
              k,
              E,
              R,
              P,
              I,
              x,
              A = this.width / i,
              O = this.height / f,
              M = 0,
              B = this.components.length,
              _ = i * f * B,
              L = new Uint8ClampedArray(_),
              D = new Uint32Array(i),
              G = 4294967288;
            for (E = 0; E < B; E++) {
              for (
                b = (p = this.components[E]).scaleX * A,
                  c = p.scaleY * O,
                  M = E,
                  x = p.output,
                  w = (p.blocksPerLine + 1) << 3,
                  S = 0;
                S < i;
                S++
              )
                (R = 0 | (S * b)), (D[S] = ((R & G) << 3) | (7 & R));
              for (k = 0; k < f; k++)
                for (
                  I = (w * ((R = 0 | (k * c)) & G)) | ((7 & R) << 3), S = 0;
                  S < i;
                  S++
                )
                  (L[M] = x[I + D[S]]), (M += B);
            }
            var F = this.decodeTransform;
            if (F)
              for (E = 0; E < _; )
                for (R = 0, P = 0; R < B; R++, E++, P += 2)
                  L[E] = ((L[E] * F[P]) >> 8) + F[P + 1];
            return L;
          },
          _isColorConversionNeeded: function () {
            return this.adobe
              ? !!this.adobe.transformCode
              : this.numComponents === 3
              ? this.colorTransform !== 0
              : this.colorTransform === 1;
          },
          _convertYccToRgb: function (i) {
            for (var f, p, b, c = 0, w = i.length; c < w; c += 3)
              (f = i[c]),
                (p = i[c + 1]),
                (b = i[c + 2]),
                (i[c] = f - 179.456 + 1.402 * b),
                (i[c + 1] = f + 135.459 - 0.344 * p - 0.714 * b),
                (i[c + 2] = f - 226.816 + 1.772 * p);
            return i;
          },
          _convertYcckToRgb: function (i) {
            for (var f, p, b, c, w = 0, S = 0, k = i.length; S < k; S += 4)
              (f = i[S]),
                (p = i[S + 1]),
                (b = i[S + 2]),
                (c = i[S + 3]),
                (i[w++] =
                  p *
                    (-660635669420364e-19 * p +
                      0.000437130475926232 * b -
                      54080610064599e-18 * f +
                      0.00048449797120281 * c -
                      0.154362151871126) -
                  122.67195406894 +
                  b *
                    (-0.000957964378445773 * b +
                      0.000817076911346625 * f -
                      0.00477271405408747 * c +
                      1.53380253221734) +
                  f *
                    (0.000961250184130688 * f -
                      0.00266257332283933 * c +
                      0.48357088451265) +
                  c * (-0.000336197177618394 * c + 0.484791561490776)),
                (i[w++] =
                  107.268039397724 +
                  p *
                    (219927104525741e-19 * p -
                      0.000640992018297945 * b +
                      0.000659397001245577 * f +
                      0.000426105652938837 * c -
                      0.176491792462875) +
                  b *
                    (-0.000778269941513683 * b +
                      0.00130872261408275 * f +
                      0.000770482631801132 * c -
                      0.151051492775562) +
                  f *
                    (0.00126935368114843 * f -
                      0.00265090189010898 * c +
                      0.25802910206845) +
                  c * (-0.000318913117588328 * c - 0.213742400323665)),
                (i[w++] =
                  p *
                    (-0.000570115196973677 * p -
                      263409051004589e-19 * b +
                      0.0020741088115012 * f -
                      0.00288260236853442 * c +
                      0.814272968359295) -
                  20.810012546947 +
                  b *
                    (-153496057440975e-19 * b -
                      0.000132689043961446 * f +
                      0.000560833691242812 * c -
                      0.195152027534049) +
                  f *
                    (0.00174418132927582 * f -
                      0.00255243321439347 * c +
                      0.116935020465145) +
                  c * (-0.000343531996510555 * c + 0.24165260232407));
            return i;
          },
          _convertYcckToCmyk: function (i) {
            for (var f, p, b, c = 0, w = i.length; c < w; c += 4)
              (f = i[c]),
                (p = i[c + 1]),
                (b = i[c + 2]),
                (i[c] = 434.456 - f - 1.402 * b),
                (i[c + 1] = 119.541 - f + 0.344 * p + 0.714 * b),
                (i[c + 2] = 481.816 - f - 1.772 * p);
            return i;
          },
          _convertCmykToRgb: function (i) {
            for (
              var f, p, b, c, w = 0, S = 1 / 255, k = 0, E = i.length;
              k < E;
              k += 4
            )
              (f = i[k] * S),
                (p = i[k + 1] * S),
                (b = i[k + 2] * S),
                (c = i[k + 3] * S),
                (i[w++] =
                  255 +
                  f *
                    (-4.387332384609988 * f +
                      54.48615194189176 * p +
                      18.82290502165302 * b +
                      212.25662451639585 * c -
                      285.2331026137004) +
                  p *
                    (1.7149763477362134 * p -
                      5.6096736904047315 * b -
                      17.873870861415444 * c -
                      5.497006427196366) +
                  b *
                    (-2.5217340131683033 * b -
                      21.248923337353073 * c +
                      17.5119270841813) -
                  c * (21.86122147463605 * c + 189.48180835922747)),
                (i[w++] =
                  255 +
                  f *
                    (8.841041422036149 * f +
                      60.118027045597366 * p +
                      6.871425592049007 * b +
                      31.159100130055922 * c -
                      79.2970844816548) +
                  p *
                    (-15.310361306967817 * p +
                      17.575251261109482 * b +
                      131.35250912493976 * c -
                      190.9453302588951) +
                  b *
                    (4.444339102852739 * b +
                      9.8632861493405 * c -
                      24.86741582555878) -
                  c * (20.737325471181034 * c + 187.80453709719578)),
                (i[w++] =
                  255 +
                  f *
                    (0.8842522430003296 * f +
                      8.078677503112928 * p +
                      30.89978309703729 * b -
                      0.23883238689178934 * c -
                      14.183576799673286) +
                  p *
                    (10.49593273432072 * p +
                      63.02378494754052 * b +
                      50.606957656360734 * c -
                      112.23884253719248) +
                  b *
                    (0.03296041114873217 * b +
                      115.60384449646641 * c -
                      193.58209356861505) -
                  c * (22.33816807309886 * c + 180.12613974708367));
            return i;
          },
          getData: function (i, f, p) {
            if (this.numComponents > 4) throw new e("Unsupported color mode");
            var b = this._getLinearizedBlockData(i, f);
            if (this.numComponents === 1 && p) {
              for (
                var c = b.length,
                  w = new Uint8ClampedArray(3 * c),
                  S = 0,
                  k = 0;
                k < c;
                k++
              ) {
                var E = b[k];
                (w[S++] = E), (w[S++] = E), (w[S++] = E);
              }
              return w;
            }
            if (this.numComponents === 3 && this._isColorConversionNeeded())
              return this._convertYccToRgb(b);
            if (this.numComponents === 4) {
              if (this._isColorConversionNeeded())
                return p
                  ? this._convertYcckToRgb(b)
                  : this._convertYcckToCmyk(b);
              if (p) return this._convertCmykToRgb(b);
            }
            return b;
          },
        }),
        n
      );
    })();
  }),
  (yt = mt()) !== void 0 && (gt.exports = yt);
let ur = class {
  static decode(e, t = !1) {
    const r = new Uint8Array(e),
      h = new Be();
    h.parse(r);
    const { width: d, height: l, numComponents: u, eof: o } = h,
      a = h.getData(d, l, !0),
      s = d * l;
    let n,
      m = null,
      T = 0,
      C = 0,
      v = 0;
    if (!t && o < r.length - 1)
      try {
        const y = new we(r.subarray(o)).getBytes();
        m = new Uint8Array(s);
        let g = 0;
        for (T = 0; T < y.length; T++)
          for (v = 7; v >= 0; v--) m[g++] = (y[T] >> v) & 1;
      } catch {}
    if (u === 1 && a.length === d * l) {
      const y = new Uint8Array(a.buffer);
      n = [y, y, y];
    } else {
      for (n = [], T = 0; T < 3; T++) n.push(new Uint8Array(s));
      for (v = 0, C = 0; C < s; C++) for (T = 0; T < 3; T++) n[T][C] = a[v++];
    }
    return { width: d, height: l, pixels: n, mask: m };
  }
};
const Lt = [
  { pixelType: "S8", size: 1, ctor: Int8Array, range: [-128, 127] },
  { pixelType: "U8", size: 1, ctor: Uint8Array, range: [0, 255] },
  { pixelType: "S16", size: 2, ctor: Int16Array, range: [-32768, 32767] },
  { pixelType: "U16", size: 2, ctor: Uint16Array, range: [0, 65536] },
  {
    pixelType: "S32",
    size: 4,
    ctor: Int32Array,
    range: [-2147483648, 2147483647],
  },
  { pixelType: "U32", size: 4, ctor: Uint32Array, range: [0, 4294967296] },
  {
    pixelType: "F32",
    size: 4,
    ctor: Float32Array,
    range: [-34027999387901484e22, 34027999387901484e22],
  },
  {
    pixelType: "F64",
    size: 8,
    ctor: Float64Array,
    range: [-17976931348623157e292, 17976931348623157e292],
  },
];
let Ne = null;
function Bt() {
  return (
    Ne ||
    ((Ne = nr(() => import("./lerc-wasm.b1315b4d.js"), [])
      .then((e) => e.l)
      .then(({ default: e }) =>
        e({ locateFile: (t) => Qt(`esri/layers/support/rasterFormats/${t}`) })
      )
      .then((e) => {
        (function (t) {
          const {
            _malloc: r,
            _free: h,
            _lerc_getBlobInfo: d,
            _lerc_getDataRanges: l,
            _lerc_decode_4D: u,
            asm: o,
          } = t;
          let a;
          const s = Object.values(o).find(
              (m) => m && "buffer" in m && m.buffer === t.HEAPU8.buffer
            ),
            n = (m) => {
              const T = m.map((g) =>
                  (function (i) {
                    return 16 + ((i >> 3) << 3);
                  })(g)
                ),
                C = T.reduce((g, i) => g + i),
                v = r(C);
              a = new Uint8Array(s.buffer);
              let y = T[0];
              T[0] = v;
              for (let g = 1; g < T.length; g++) {
                const i = T[g];
                (T[g] = T[g - 1] + y), (y = i);
              }
              return T;
            };
          (Ge.getBlobInfo = (m) => {
            const v = new Uint8Array(48),
              y = new Uint8Array(8 * 3),
              [g, i, f] = n([m.length, v.length, y.length]);
            a.set(m, g), a.set(v, i), a.set(y, f);
            let p = d(g, m.length, i, f, 12, 3);
            if (p)
              throw (h(g), new Error(`lerc-getBlobInfo: error code is ${p}`));
            (a = new Uint8Array(s.buffer)), de(a, i, v), de(a, f, y);
            const b = new Uint32Array(v.buffer),
              c = new Float64Array(y.buffer),
              [w, S, , k, E, R, P, I, x, A, O] = b,
              M = {
                version: w,
                depthCount: A,
                width: k,
                height: E,
                validPixelCount: P,
                bandCount: R,
                blobSize: I,
                maskCount: x,
                dataType: S,
                minValue: c[0],
                maxValue: c[1],
                maxZerror: c[2],
                statistics: [],
                bandCountWithNoData: O,
              };
            if (O) return M;
            if (A === 1 && R === 1)
              return (
                h(g), M.statistics.push({ minValue: c[0], maxValue: c[1] }), M
              );
            const B = A * R * 8,
              _ = new Uint8Array(B),
              L = new Uint8Array(B);
            let D = g,
              G = 0,
              F = 0,
              U = !1;
            if (
              (a.byteLength < g + 2 * B
                ? (h(g),
                  (U = !0),
                  ([D, G, F] = n([m.length, B, B])),
                  a.set(m, D))
                : ([G, F] = n([B, B])),
              a.set(_, G),
              a.set(L, F),
              (p = l(D, m.length, A, R, G, F)),
              p)
            )
              throw (
                (h(D),
                U || h(G),
                new Error(`lerc-getDataRanges: error code is ${p}`))
              );
            (a = new Uint8Array(s.buffer)), de(a, G, _), de(a, F, L);
            const N = new Float64Array(_.buffer),
              Y = new Float64Array(L.buffer),
              ee = M.statistics;
            for (let J = 0; J < R; J++)
              if (A > 1) {
                const re = N.slice(J * A, (J + 1) * A),
                  le = Y.slice(J * A, (J + 1) * A),
                  ce = Math.min.apply(null, re),
                  ae = Math.max.apply(null, le);
                ee.push({
                  minValue: ce,
                  maxValue: ae,
                  depthStats: { minValues: re, maxValues: le },
                });
              } else ee.push({ minValue: N[J], maxValue: Y[J] });
            return h(D), U || h(G), M;
          }),
            (Ge.decode = (m, T) => {
              const {
                  maskCount: C,
                  depthCount: v,
                  bandCount: y,
                  width: g,
                  height: i,
                  dataType: f,
                  bandCountWithNoData: p,
                } = T,
                b = Lt[f],
                c = g * i,
                w = new Uint8Array(c * y),
                S = c * v * y * b.size,
                k = new Uint8Array(S),
                E = new Uint8Array(y),
                R = new Uint8Array(8 * y),
                [P, I, x, A, O] = n([
                  m.length,
                  w.length,
                  k.length,
                  E.length,
                  R.length,
                ]);
              a.set(m, P), a.set(w, I), a.set(k, x), a.set(E, A), a.set(R, O);
              const M = u(P, m.length, C, I, v, g, i, y, f, x, A, O);
              if (M) throw (h(P), new Error(`lerc-decode: error code is ${M}`));
              (a = new Uint8Array(s.buffer)), de(a, x, k), de(a, I, w);
              let B = null;
              if (p) {
                de(a, A, E), de(a, O, R), (B = []);
                const _ = new Float64Array(R.buffer);
                for (let L = 0; L < E.length; L++) B.push(E[L] ? _[L] : null);
              }
              return h(P), { data: k, maskData: w, noDataValues: B };
            });
        })(e);
      })),
    Ne)
  );
}
const Ge = { getBlobInfo: null, decode: null };
function de(e, t, r) {
  r.set(e.slice(t, t + r.length));
}
function cr(e, t, r, h, d) {
  if (r < 2) return e;
  const l = new h(t * r);
  if (d)
    for (let u = 0, o = 0; u < t; u++)
      for (let a = 0, s = u; a < r; a++, s += t) l[s] = e[o++];
  else
    for (let u = 0, o = 0; u < t; u++)
      for (let a = 0, s = u; a < r; a++, s += t) l[o++] = e[s];
  return l;
}
function Gt(e, t = {}) {
  const r = t.inputOffset ?? 0,
    h = e instanceof Uint8Array ? e.subarray(r) : new Uint8Array(e, r),
    d = Ge.getBlobInfo(h),
    { data: l, maskData: u, noDataValues: o } = Ge.decode(h, d),
    {
      width: a,
      height: s,
      bandCount: n,
      depthCount: m,
      dataType: T,
      maskCount: C,
      statistics: v,
    } = d,
    y = Lt[T],
    g = new y.ctor(l.buffer),
    i = [],
    f = [],
    p = a * s,
    b = p * m;
  for (let R = 0; R < n; R++) {
    const P = g.subarray(R * b, (R + 1) * b);
    if (t.returnInterleaved) i.push(P);
    else {
      const I = cr(P, p, m, y.ctor, !0);
      i.push(I);
    }
    f.push(u.subarray(R * b, (R + 1) * b));
  }
  const c = C === 0 ? null : C === 1 ? f[0] : new Uint8Array(p);
  if (C > 1) {
    c.set(f[0]);
    for (let R = 1; R < f.length; R++) {
      const P = f[R];
      for (let I = 0; I < p; I++) c[I] = c[I] & P[I];
    }
  }
  const { noDataValue: w } = t,
    S = w != null && y.range[0] <= w && y.range[1] >= w;
  if (C > 0 && S)
    for (let R = 0; R < n; R++) {
      const P = i[R],
        I = f[R] || c;
      for (let x = 0; x < p; x++) I[x] === 0 && (P[x] = w);
    }
  const k = C === n && n > 1 ? f : null,
    { pixelType: E } = y;
  return {
    width: a,
    height: s,
    bandCount: n,
    pixelType: E,
    depthCount: m,
    statistics: v,
    pixels: i,
    mask: c,
    bandMasks: k,
    noDataValues: o,
  };
}
function Ct() {
  const e = [];
  for (let t = 0; t <= 257; t++) e[t] = [t];
  return e;
}
function bt(e, t) {
  for (let r = 0; r < t.length; r++) e.push(t[r]);
}
const Te = new Set();
function tt(e, t, r, h = !0) {
  const d = (function (g, i, f, p = !0) {
    if (i % 4 != 0 || f % 4 != 0) {
      const b = new ArrayBuffer(4 * Math.ceil(f / 4)),
        c = new Uint8Array(b),
        w = new Uint8Array(g, i, f);
      if (p)
        for (let S = 0; S < c.length; S += 4)
          (c[S] = w[S + 3]),
            (c[S + 1] = w[S + 2]),
            (c[S + 2] = w[S + 1]),
            (c[S + 3] = w[S]);
      else c.set(w);
      return new Uint32Array(c.buffer);
    }
    if (p) {
      const b = new Uint8Array(g, i, f),
        c = new Uint8Array(b.length);
      for (let w = 0; w < c.length; w += 4)
        (c[w] = b[w + 3]),
          (c[w + 1] = b[w + 2]),
          (c[w + 2] = b[w + 1]),
          (c[w + 3] = b[w]);
      return new Uint32Array(c.buffer);
    }
    return new Uint32Array(g, i, f / 4);
  })(e, t, r, h);
  let l = 9,
    u = Ct(),
    o = 32,
    a = u.length,
    s = [],
    n = 1,
    m = d[0],
    T = 0;
  const C = d.length,
    v = 8 * (4 * C - r),
    y = [];
  for (; m != null; ) {
    if (o >= l) (o -= l), (T = m >>> (32 - l)), (m <<= l);
    else {
      (T = m >>> (32 - o)), (m = d[n++]);
      const i = l - o;
      (o = 32 - i), (T = (T << i) + (m >>> o)), (m <<= i);
    }
    if (T === 257) break;
    if (T === 256) {
      (l = 9), (u = Ct()), (a = u.length), (s = []);
      continue;
    }
    const g = u[T];
    if (g == null) {
      if (T > u.length)
        throw new Error(
          "data integrity issue: code does not exist on code page"
        );
      s.push(s[0]), (u[a++] = s.slice()), bt(y, s);
    } else
      bt(y, g),
        s.push(g[0]),
        s.length > 1 && (u[a++] = s.slice()),
        (s = g.slice());
    if (
      (Te.has(a) && l++,
      o === 0 && ((m = d[n++]), (o = 32)),
      n > C || (n === C && o <= v))
    )
      break;
  }
  return new Uint8Array(y);
}
Te.add(511), Te.add(1023), Te.add(2047), Te.add(4095), Te.add(8191);
const wt = (e, t) => {
    const r = t.width * t.height,
      h = t.pixelType;
    return Math.floor(e.byteLength / (r * Ot(h)));
  },
  Ot = (e) => {
    let t = 1;
    switch (e) {
      case Uint8Array:
      case Int8Array:
        t = 1;
        break;
      case Uint16Array:
      case Int16Array:
        t = 2;
        break;
      case Uint32Array:
      case Int32Array:
      case Float32Array:
        t = 4;
        break;
      case Float64Array:
        t = 8;
    }
    return t;
  };
let fr = class {
  static decode(e, t) {
    const r = t.pixelType,
      h = [],
      d = t.width * t.height,
      l = wt(e, t),
      { bandIds: u, format: o } = t,
      a = (u && u.length) || wt(e, t),
      s = e.byteLength - (e.byteLength % (d * Ot(r))),
      n = new r(e, 0, d * l);
    let m,
      T,
      C,
      v,
      y = null;
    if (o === "bip")
      for (m = 0; m < a; m++) {
        for (C = new r(d), v = u ? u[m] : m, T = 0; T < d; T++)
          C[T] = n[T * l + v];
        h.push(C);
      }
    else if (o === "bsq")
      for (m = 0; m < a; m++)
        (v = u ? u[m] : m), h.push(n.subarray(v * d, (v + 1) * d));
    return (
      s < e.byteLength - 1 &&
        (y = ((g, i) => {
          if (8 * g.byteLength < i) return null;
          const f = new Uint8Array(g, 0, Math.ceil(i / 8)),
            p = new Uint8Array(i);
          let b = 0,
            c = 0,
            w = 0,
            S = 0;
          for (w = 0; w < f.length - 1; w++)
            for (c = f[w], S = 7; S >= 0; S--) p[b++] = (c >> S) & 1;
          for (S = 7; b < i - 1; )
            (c = f[f.length - 1]), (p[b++] = (c >> S) & 1), S--;
          return p;
        })(e.slice(s), d)),
      { pixels: h, mask: y }
    );
  }
};
function hr(e, t) {
  let r = 0,
    h = "",
    d = 0,
    l = 0;
  const u = e.length;
  for (; r < u; )
    (l = e[r++]),
      (d = l >> 4),
      d < 8
        ? (d = 1)
        : d === 15
        ? ((d = 4),
          (l =
            ((7 & l) << 18) |
            ((63 & e[r++]) << 12) |
            ((63 & e[r++]) << 6) |
            (63 & e[r++])))
        : d === 14
        ? ((d = 3),
          (l = ((15 & l) << 12) | ((63 & e[r++]) << 6) | (63 & e[r++])))
        : ((d = 2), (l = ((31 & l) << 6) | (63 & e[r++]))),
      (l !== 0 || t) && (h += String.fromCharCode(l));
  return h;
}
const je = (() => {
    const e = [];
    return (
      (e[254] = "NEWSUBFILETYPE"),
      (e[255] = "SUBFILETYPE"),
      (e[256] = "IMAGEWIDTH"),
      (e[257] = "IMAGELENGTH"),
      (e[258] = "BITSPERSAMPLE"),
      (e[259] = "COMPRESSION"),
      (e[262] = "PHOTOMETRICINTERPRETATION"),
      (e[263] = "THRESHHOLDING"),
      (e[264] = "CELLWIDTH"),
      (e[265] = "CELLLENGTH"),
      (e[266] = "FILLORDER"),
      (e[269] = "DOCUMENTNAME"),
      (e[270] = "IMAGEDESCRIPTION"),
      (e[271] = "MAKE"),
      (e[272] = "MODEL"),
      (e[273] = "STRIPOFFSETS"),
      (e[274] = "ORIENTATION"),
      (e[277] = "SAMPLESPERPIXEL"),
      (e[278] = "ROWSPERSTRIP"),
      (e[279] = "STRIPBYTECOUNTS"),
      (e[280] = "MINSAMPLEVALUE"),
      (e[281] = "MAXSAMPLEVALUE"),
      (e[282] = "XRESOLUTION"),
      (e[283] = "YRESOLUTION"),
      (e[284] = "PLANARCONFIGURATION"),
      (e[285] = "PAGENAME"),
      (e[286] = "XPOSITION"),
      (e[287] = "YPOSITION"),
      (e[288] = "FREEOFFSETS"),
      (e[289] = "FREEBYTECOUNTS"),
      (e[290] = "GRAYRESPONSEUNIT"),
      (e[291] = "GRAYRESPONSECURVE"),
      (e[292] = "T4OPTIONS"),
      (e[293] = "T6OPTIONS"),
      (e[296] = "RESOLUTIONUNIT"),
      (e[297] = "PAGENUMBER"),
      (e[300] = "COLORRESPONSEUNIT"),
      (e[301] = "TRANSFERFUNCTION"),
      (e[305] = "SOFTWARE"),
      (e[306] = "DATETIME"),
      (e[315] = "ARTIST"),
      (e[316] = "HOSTCOMPUTER"),
      (e[317] = "PREDICTOR"),
      (e[318] = "WHITEPOINT"),
      (e[319] = "PRIMARYCHROMATICITIES"),
      (e[320] = "COLORMAP"),
      (e[321] = "HALFTONEHINTS"),
      (e[322] = "TILEWIDTH"),
      (e[323] = "TILELENGTH"),
      (e[324] = "TILEOFFSETS"),
      (e[325] = "TILEBYTECOUNTS"),
      (e[326] = "BADFAXLINES"),
      (e[327] = "CLEANFAXDATA"),
      (e[328] = "CONSECUTIVEBADFAXLINES"),
      (e[330] = "SUBIFD"),
      (e[332] = "INKSET"),
      (e[333] = "INKNAMES"),
      (e[334] = "NUMBEROFINKS"),
      (e[336] = "DOTRANGE"),
      (e[337] = "TARGETPRINTER"),
      (e[338] = "EXTRASAMPLES"),
      (e[339] = "SAMPLEFORMAT"),
      (e[340] = "SMINSAMPLEVALUE"),
      (e[341] = "SMAXSAMPLEVALUE"),
      (e[342] = "TRANSFERRANGE"),
      (e[347] = "JPEGTABLES"),
      (e[512] = "JPEGPROC"),
      (e[513] = "JPEGIFOFFSET"),
      (e[514] = "JPEGIFBYTECOUNT"),
      (e[515] = "JPEGRESTARTINTERVAL"),
      (e[517] = "JPEGLOSSLESSPREDICTORS"),
      (e[518] = "JPEGPOINTTRANSFORM"),
      (e[519] = "JPEGQTABLES"),
      (e[520] = "JPEGDCTABLES"),
      (e[521] = "JPEGACTABLES"),
      (e[529] = "YCBCRCOEFFICIENTS"),
      (e[530] = "YCBCRSUBSAMPLING"),
      (e[531] = "YCBCRPOSITIONING"),
      (e[532] = "REFERENCEBLACKWHITE"),
      (e[700] = "XMP"),
      (e[33550] = "GEOPIXELSCALE"),
      (e[33922] = "GEOTIEPOINTS"),
      (e[33432] = "COPYRIGHT"),
      (e[42112] = "GDAL_METADATA"),
      (e[42113] = "GDAL_NODATA"),
      (e[50844] = "RPCCOEFFICIENT"),
      (e[34264] = "GEOTRANSMATRIX"),
      (e[34735] = "GEOKEYDIRECTORY"),
      (e[34736] = "GEODOUBLEPARAMS"),
      (e[34737] = "GEOASCIIPARAMS"),
      (e[34665] = "EXIFIFD"),
      (e[34853] = "GPSIFD"),
      (e[40965] = "INTEROPERABILITYIFD"),
      e
    );
  })(),
  dr = (() => {
    const e = je.slice();
    return (
      (e[36864] = "ExifVersion"),
      (e[40960] = "FlashpixVersion"),
      (e[40961] = "ColorSpace"),
      (e[42240] = "Gamma"),
      (e[37121] = "ComponentsConfiguration"),
      (e[37122] = "CompressedBitsPerPixel"),
      (e[40962] = "PixelXDimension"),
      (e[40963] = "PixelYDimension"),
      (e[37500] = "MakerNote"),
      (e[37510] = "UserComment"),
      (e[40964] = "RelatedSoundFile"),
      (e[36867] = "DateTimeOriginal"),
      (e[36868] = "DateTimeDigitized"),
      (e[36880] = "OffsetTime"),
      (e[36881] = "OffsetTimeOriginal"),
      (e[36882] = "OffsetTimeDigitized"),
      (e[37520] = "SubSecTime"),
      (e[37521] = "SubSecTimeOriginal"),
      (e[37522] = "SubSecTimeDigitized"),
      (e[37888] = "Temperature"),
      (e[37889] = "Humidity"),
      (e[37890] = "Pressure"),
      (e[37891] = "WaterDepth"),
      (e[37892] = "Acceleration"),
      (e[37893] = "CameraElevationAngle"),
      (e[42016] = "ImageUniqueID"),
      (e[42032] = "CameraOwnerName"),
      (e[42033] = "BodySerialNumber"),
      (e[42034] = "LensSpecification"),
      (e[42035] = "LensMake"),
      (e[42036] = "LensModel"),
      (e[42037] = "LensSerialNumber"),
      (e[33434] = "ExposureTime"),
      (e[33437] = "FNumber"),
      (e[34850] = "ExposureProgram"),
      (e[34852] = "SpectralSensitivity"),
      (e[34855] = "PhotographicSensitivity"),
      (e[34856] = "OECF"),
      (e[34864] = "SensitivityType"),
      (e[34865] = "StandardOutputSensitivity"),
      (e[34866] = "RecommendedExposureIndex"),
      (e[34867] = "ISOSpeed"),
      (e[34868] = "ISOSpeedLatitudeyyy"),
      (e[34869] = "ISOSpeedLatitudezzz"),
      (e[37377] = "ShutterSpeedValue"),
      (e[37378] = "ApertureValue"),
      (e[37379] = "BrightnessValue"),
      (e[37380] = "ExposureBiasValue"),
      (e[37381] = "MaxApertureValue"),
      (e[37382] = "SubjectDistance"),
      (e[37383] = "MeteringMode"),
      (e[37384] = "LightSource"),
      (e[37385] = "Flash"),
      (e[37386] = "FocalLength"),
      (e[37396] = "SubjectArea"),
      (e[41483] = "FlashEnergy"),
      (e[41484] = "SpatialFrequencyResponse"),
      (e[41486] = "FocalPlaneXResolution"),
      (e[41487] = "FocalPlaneYResolution"),
      (e[41488] = "FocalPlaneResolutionUnit"),
      (e[41492] = "SubjectLocation"),
      (e[41493] = "ExposureIndex"),
      (e[41495] = "SensingMethod"),
      (e[41728] = "FileSource"),
      (e[41729] = "SceneType"),
      (e[41730] = "CFAPattern"),
      (e[41985] = "CustomRendered"),
      (e[41986] = "ExposureMode"),
      (e[41987] = "WhiteBalance"),
      (e[41988] = "DigitalZoomRatio"),
      (e[41989] = "FocalLengthIn35mmFilm"),
      (e[41990] = "SceneCaptureType"),
      (e[41991] = "GainControl"),
      (e[41992] = "Contrast"),
      (e[41993] = "Saturation"),
      (e[41994] = "Sharpness"),
      (e[41995] = "DeviceSettingDescription"),
      (e[41996] = "SubjectDistanceRange"),
      e
    );
  })(),
  pr = (() => {
    const e = [];
    return (
      (e[1024] = "GTModelTypeGeoKey"),
      (e[1025] = "GTRasterTypeGeoKey"),
      (e[1026] = "GTCitationGeoKey"),
      (e[2048] = "GeographicTypeGeoKey"),
      (e[2049] = "GeogCitationGeoKey"),
      (e[2050] = "GeogGeodeticDatumGeoKey"),
      (e[2051] = "GeogPrimeMeridianGeoKey"),
      (e[2052] = "GeogLinearUnitsGeoKey"),
      (e[2053] = "GeogLinearUnitSizeGeoKey"),
      (e[2054] = "GeogAngularUnitsGeoKey"),
      (e[2055] = "GeogAngularUnitSizeGeoKey"),
      (e[2056] = "GeogEllipsoidGeoKey"),
      (e[2057] = "GeogSemiMajorAxisGeoKey"),
      (e[2058] = "GeogSemiMinorAxisGeoKey"),
      (e[2059] = "GeogInvFlatteningGeoKey"),
      (e[2061] = "GeogPrimeMeridianLongGeoKey"),
      (e[2060] = "GeogAzimuthUnitsGeoKey"),
      (e[3072] = "ProjectedCSTypeGeoKey"),
      (e[3073] = "PCSCitationGeoKey"),
      (e[3074] = "ProjectionGeoKey"),
      (e[3075] = "ProjCoordTransGeoKey"),
      (e[3076] = "ProjLinearUnitsGeoKey"),
      (e[3077] = "ProjLinearUnitSizeGeoKey"),
      (e[3078] = "ProjStdParallel1GeoKey"),
      (e[3079] = "ProjStdParallel2GeoKey"),
      (e[3080] = "ProjNatOriginLongGeoKey"),
      (e[3081] = "ProjNatOriginLatGeoKey"),
      (e[3082] = "ProjFalseEastingGeoKey"),
      (e[3083] = "ProjFalseNorthingGeoKey"),
      (e[3084] = "ProjFalseOriginLongGeoKey"),
      (e[3085] = "ProjFalseOriginLatGeoKey"),
      (e[3086] = "ProjFalseOriginEastingGeoKey"),
      (e[3087] = "ProjFalseOriginNorthingGeoKey"),
      (e[3088] = "ProjCenterLongGeoKey"),
      (e[3090] = "ProjCenterEastingGeoKey"),
      (e[3091] = "ProjCenterNorthingGeoKey"),
      (e[3092] = "ProjScaleAtNatOriginGeoKey"),
      (e[3093] = "ProjScaleAtCenterGeoKey"),
      (e[3094] = "ProjAzimuthAngleGeoKey"),
      (e[3095] = "ProjStraightVertPoleLongGeoKey"),
      (e[4096] = "VerticalCSTypeGeoKey"),
      (e[4097] = "VerticalCitationGeoKey"),
      (e[4098] = "VerticalDatumGeoKey"),
      (e[4099] = "VerticalUnitsGeoKey"),
      e
    );
  })(),
  He = new Map();
He.set("EXIFIFD", dr),
  He.set("GPSIFD", [
    "GPSVersionID",
    "GPSLatitudeRef",
    "GPSLatitude",
    "GPSLongitudeRef",
    "GPSLongitude",
    "GPSAltitudeRef",
    "GPSAltitude",
    "GPSTimeStamp",
    "GPSSatellites",
    "GPSStatus",
    "GPSMeasureMode",
    "GPSDOP",
    "GPSSpeedRef",
    "GPSSpeed",
    "GPSTrackRef",
    "GPSTrack",
    "GPSImgDirectionRef",
    "GPSImgDirection",
    "GPSMapDatum",
    "GPSDestLatitudeRef",
    "GPSDestLatitude",
    "GPSDestLongitudeRef",
    "GPSDestLongitude",
    "GPSDestBearingRef",
    "GPSDestBearing",
    "GPSDestDistanceRef",
    "GPSDestDistance",
    "GPSProcessingMethod",
    "GPSAreaInformation",
    "GPSDateStamp",
    "GPSDifferential",
    "GPSHPositioningError",
  ]);
const ve = {
    TIFF_TAGS: je,
    ifdTags: He,
    GEO_KEYS: pr,
    getTagName: (e, t) => {
      let r = (t || je)[e];
      return r === void 0 && (r = "unknown" + String(e)), r;
    },
  },
  rt = (() => {
    const e = new ArrayBuffer(4),
      t = new Uint8Array(e);
    return (new Uint32Array(e)[0] = 1), t[0] === 1;
  })(),
  Tt = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, -1, -1, -1, 8, 8, 8],
  ke = 4294967296,
  gr = new Set([1, 5, 6, 7, 8, 34712, 34887]);
function ot(e, t) {
  let r = "unknown";
  return (
    e === 3
      ? (r = t === 64 ? "f64" : "f32")
      : e === 1
      ? t === 1
        ? (r = "u1")
        : t === 2
        ? (r = "u2")
        : t === 4
        ? (r = "u4")
        : t <= 8
        ? (r = "u8")
        : t <= 16
        ? (r = "u16")
        : t <= 32 && (r = "u32")
      : e === 2 &&
        (t <= 8 ? (r = "s8") : t <= 16 ? (r = "s16") : t <= 32 && (r = "s32")),
    r
  );
}
function Me(e) {
  let t = null;
  switch (e ? e.toLowerCase() : "f32") {
    case "u1":
    case "u2":
    case "u4":
    case "u8":
      t = Uint8Array;
      break;
    case "u16":
      t = Uint16Array;
      break;
    case "u32":
      t = Uint32Array;
      break;
    case "s8":
      t = Int8Array;
      break;
    case "s16":
      t = Int16Array;
      break;
    case "s32":
      t = Int32Array;
      break;
    case "f64":
      t = Float64Array;
      break;
    default:
      t = Float32Array;
  }
  return t;
}
function mr(e, t) {
  return {
    x: t[0] * e.x + t[1] * e.y + t[2],
    y: t[3] * e.x + t[4] * e.y + t[5],
  };
}
function Mt(e, t) {
  var r;
  return (r = e.get(t)) == null ? void 0 : r.values;
}
function be(e, t) {
  var r;
  return (r = e.get(t)) == null ? void 0 : r.values;
}
function St(e, t) {
  var r, h;
  return (h = (r = e.get(t)) == null ? void 0 : r.values) == null
    ? void 0
    : h[0];
}
function j(e, t) {
  var r, h;
  return (h = (r = e.get(t)) == null ? void 0 : r.values) == null
    ? void 0
    : h[0];
}
function Fe(e, t, r, h = 0, d = ve.TIFF_TAGS, l = 4) {
  const u = l === 8,
    o = u
      ? it(new DataView(e, r, 8), 0, t)
      : new DataView(e, r, 2).getUint16(0, t),
    a = 4 + 2 * l,
    s = u ? 8 : 2,
    n = s + o * a;
  if (r + n > e.byteLength)
    return { success: !1, ifd: null, nextIFD: null, requiredBufferSize: n };
  const m =
      r + n + 4 <= e.byteLength
        ? De(new DataView(e, r + n, l === 8 ? 8 : 4), 0, t, l === 8)
        : null,
    T = r + s,
    C = new Map();
  let v,
    y,
    g,
    i,
    f,
    p = 0,
    b = 0;
  for (let c = 0; c < o; c++) {
    (y = new DataView(e, T + a * c, a)),
      (g = y.getUint16(0, t)),
      (f = y.getUint16(2, t)),
      (i = ve.getTagName(g, d));
    const w = [];
    l === 2
      ? ((p = y.getUint16(4, t)), (b = y.getUint16(6, t)))
      : l === 4
      ? ((p = y.getUint32(4, t)), (b = y.getUint32(8, t)))
      : l === 8 &&
        ((p = De(y, 4, t, !0)),
        (b = De(y, 12, t, !0)),
        w.push(y.getUint32(12, t)),
        w.push(y.getUint32(16, t))),
      (v = {
        id: g,
        type: f,
        valueCount: p,
        valueOffset: b,
        valueOffsets: w,
        values: null,
      }),
      Tr(e, t, v, h, !1, l),
      C.set(i, v);
  }
  return { success: !0, ifd: C, nextIFD: m, requiredBufferSize: n };
}
const yr = (e, t) => Gt(e, { inputOffset: t }).pixels[0];
function We(e, t) {
  if (t !== 1 && t !== 2 && t !== 4) return e;
  const r = new Uint8Array(e),
    h = 8 / t,
    d = new Uint8Array(e.byteLength * h);
  let l = 0;
  const u = 2 ** t - 1;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    for (let s = 0; s < h; s++) d[l++] = ((a << (t * s)) >>> (8 - t)) & u;
  }
  return d.buffer;
}
function Ye(e, t, r) {
  const h = new Be();
  h.parse(e), (h.colorTransform = r === 6 ? -1 : 0);
  const d = h.getData(h.width, h.height, t !== 1);
  return new Uint8Array(d.buffer);
}
function Ke(e) {
  const t = new we(e).getBytes(),
    r = new ArrayBuffer(t.length),
    h = new Uint8Array(r);
  return h.set(t), h;
}
async function Je(e, t, r, h, d) {
  const l = rt === t,
    u = j(r, "BITSPERSAMPLE"),
    o = j(r, "SAMPLESPERPIXEL"),
    a = j(r, "PHOTOMETRICINTERPRETATION"),
    s = ot(j(r, "SAMPLEFORMAT") ?? 1, u),
    n = j(r, "COMPRESSION") ?? 1,
    m = Me(s);
  let T, C, v;
  if (n === 34887) return await Bt(), yr(e, h);
  if (n === 1) (T = e.slice(h, h + d)), (C = new Uint8Array(T));
  else if (n === 8 || n === 32946)
    (C = new Uint8Array(e, h, d)), (C = Ke(C)), (T = C.buffer);
  else if (n === 6)
    (C = new Uint8Array(e, h, d)), (C = Ye(C, o, a)), (T = C.buffer);
  else if (n === 7) {
    const y = r.get("JPEGTABLES").values,
      g = y.length - 2;
    C = new Uint8Array(g + d - 2);
    for (let f = 0; f < g; f++) C[f] = y[f];
    const i = new Uint8Array(e, h + 2, d - 2);
    for (let f = 0; f < i.length; f++) C[g + f] = i[f];
    (C = Ye(C, o, a)), (T = C.buffer);
  } else {
    if (n !== 5) throw new Error("tiff-decode: unsupport compression " + n);
    (C = tt(e, h, d, t)), (T = C.buffer);
  }
  if (((T = We(T, u)), s === "u8" || s === "s8" || l)) v = new m(T);
  else {
    T = new ArrayBuffer(C.length);
    const y = new Uint8Array(T);
    switch (s) {
      case "u16":
      case "s16":
        for (let g = 0; g < C.length; g += 2)
          (y[g] = C[g + 1]), (y[g + 1] = C[g]);
        break;
      case "u32":
      case "s32":
      case "f32":
        for (let g = 0; g < C.length; g += 4)
          (y[g] = C[g + 3]),
            (y[g + 1] = C[g + 2]),
            (y[g + 2] = C[g + 1]),
            (y[g + 3] = C[g]);
    }
    v = new m(T);
  }
  return v;
}
const Cr = (e, t, r) => {
    const h = rt === t.littleEndian,
      d = be(r, "STRIPOFFSETS");
    if (d === void 0) return null;
    const { width: l, height: u, pixelType: o } = qe([r]),
      a = j(r, "SAMPLESPERPIXEL") || t.planes,
      s = j(r, "PHOTOMETRICINTERPRETATION"),
      n = l * u,
      m = j(r, "BITSPERSAMPLE"),
      T = Me(o),
      C = new T(n * a),
      v = be(r, "STRIPBYTECOUNTS"),
      y = j(r, "ROWSPERSTRIP"),
      g = j(r, "COMPRESSION") ?? 1;
    let i,
      f,
      p,
      b,
      c,
      w,
      S,
      k,
      E,
      R = y;
    if (m % 8 == 0)
      for (i = 0; i < d.length; i++) {
        if (
          ((c = i * (y * l) * a),
          (R = (i + 1) * y > u ? u - i * y : y),
          o === "u8" || o === "s8" || h)
        )
          g === 8 || g === 32946
            ? ((S = new Uint8Array(e, d[i], v[i])), (S = Ke(S)), (w = S.buffer))
            : g === 6
            ? ((S = new Uint8Array(e, d[i], v[i])),
              (S = Ye(S, a, s)),
              (w = S.buffer))
            : g === 5
            ? ((S = tt(e, d[i], v[i], t.littleEndian)), (w = S.buffer))
            : (v[i], (w = e.slice(d[i], d[i] + v[i]))),
            (w = We(w, m)),
            (b = new T(w));
        else {
          switch (
            (g === 6 || g === 8 || g === 32946
              ? ((S = new Uint8Array(e, d[i], v[i])),
                (k = Ke(S)),
                (w = k.buffer))
              : (v[i],
                (w = new ArrayBuffer(v[i])),
                (S = new Uint8Array(e, d[i], v[i])),
                (k = new Uint8Array(w))),
            o)
          ) {
            case "u16":
            case "s16":
              for (p = 0; p < S.length; p += 2)
                (k[p] = S[p + 1]), (k[p + 1] = S[p]);
              break;
            case "u32":
            case "s32":
            case "f32":
              for (p = 0; p < S.length; p += 4)
                (k[p] = S[p + 3]),
                  (k[p + 1] = S[p + 2]),
                  (k[p + 2] = S[p + 1]),
                  (k[p + 3] = S[p]);
          }
          (w = We(w, m)), (b = new T(w));
        }
        C.set(b, c);
      }
    const P = [];
    if (a === 1) P.push(C);
    else
      for (i = 0; i < a; i++) {
        for (E = new T(n), f = 0; f < n; f++) E[f] = C[f * a + i];
        P.push(E);
      }
    return { width: l, height: u, pixelType: o, pixels: P };
  },
  br = (e, t, r) => {
    if (!(e && e.length > 0 && t && r)) return null;
    let h, d, l;
    const u = e[0].length,
      o = e.length,
      a = new Uint8Array(u);
    for (let s = 0; s < o; s++)
      if (((h = e[s]), (d = t[s]), (l = r[s]), s === 0))
        for (let n = 0; n < u; n++) a[n] = h[n] < d || h[n] > l ? 0 : 1;
      else
        for (let n = 0; n < u; n++)
          a[n] && (a[n] = h[n] < d || h[n] > l ? 0 : 1);
    return a;
  },
  wr = (e) => {
    if (!e) return null;
    const t = e.match(/<Item(.*?)Item>/gi);
    if (!t || t.length === 0) return null;
    const r = new Map();
    let h, d, l, u, o;
    for (let i = 0; i < t.length; i++)
      (h = t[i]),
        (d = h.slice(6, h.indexOf(">"))),
        (u = h.indexOf("sample=")),
        u > -1 && (o = h.slice(u + 8, h.indexOf('"', u + 8))),
        (u = h.indexOf("name=")),
        u > -1 && (d = h.slice(u + 6, h.indexOf('"', u + 6))),
        d &&
          ((l = h.slice(h.indexOf(">") + 1, h.indexOf("</Item>")).trim()),
          o != null
            ? r.has(d)
              ? (r.get(d)[o] = l)
              : r.set(d, [l])
            : r.set(d, l)),
        (o = null);
    const a = r.get("STATISTICS_MINIMUM"),
      s = r.get("STATISTICS_MAXIMUM"),
      n = r.get("STATISTICS_MEAN"),
      m = r.get("STATISTICS_STDDEV");
    let T = null;
    if (a && s) {
      T = [];
      for (let i = 0; i < a.length; i++)
        T.push({
          min: parseFloat(a[i]),
          max: parseFloat(s[i]),
          avg: n && parseFloat(n[i]),
          stddev: m && parseFloat(m[i]),
        });
    }
    const C = r.get("BandName"),
      v = r.get("WavelengthMin"),
      y = r.get("WavelengthMax");
    let g = null;
    if (C) {
      g = [];
      for (let i = 0; i < C.length; i++)
        g.push({
          BandName: C[i],
          WavelengthMin: v && parseFloat(v[i]),
          WavelengthMax: y && parseFloat(y[i]),
        });
    }
    return {
      statistics: T,
      bandProperties: g,
      dataType: r.get("DataType"),
      rawMetadata: r,
    };
  };
function Tr(e, t, r, h = 0, d = !1, l = 4) {
  if (r.values) return !0;
  const u = r.type,
    o = r.valueCount;
  let a = r.valueOffset,
    s = [];
  const n = Tt[u],
    m = 8 * n,
    T = o * n,
    C = o * Tt[u] * 8;
  let v, y;
  const g = l === 8 ? 64 : 32,
    i = r.valueOffsets;
  if (C > g && T > (d ? e.byteLength : e ? e.byteLength - a + h : 0))
    return (r.offlineOffsetSize = [a, T]), (r.values = null), !1;
  if (C <= g) {
    if (!t)
      if (g <= 32) a >>>= 32 - C;
      else {
        const f = i != null && i.length ? i[0] : a >>> 0,
          p = i != null && i.length ? i[1] : Math.round((a - f) / ke);
        C <= 32
          ? ((a = f >>> (32 - C)), (i[0] = a))
          : ((a = f * 2 ** (32 - C) + (p >>> (32 - C))),
            (i[0] = f),
            (i[1] = p >>> (32 - C)));
      }
    if (o === 1 && m === g) s = [a];
    else if (g === 64) {
      const f = i != null && i.length ? i[0] : a >>> 0,
        p = i != null && i.length ? i[1] : Math.round((a - f) / ke);
      let b = f,
        c = 32;
      for (y = 1; y <= o; y++) {
        const w = 32 - ((m * y) % 32);
        if (c < m) {
          const S = (b << w) >>> (32 - c),
            k = (p << (32 - c)) >>> (32 - c);
          (b = p), s.push(S + k * 2 ** (m - c)), (c -= 32 - (m - c));
        } else s.push((b << w) >>> (32 - m)), (c -= m);
        c === 0 && ((c = 32), (b = p));
      }
    } else
      for (y = 1; y <= o; y++) {
        const f = 32 - m * y;
        s.push((a << f) >>> (32 - m));
      }
  } else {
    (a -= h), d && (a = 0);
    for (let f = a; f < a + T; f += n) {
      switch (u) {
        case 1:
        case 2:
        case 7:
          v = new DataView(e, f, 1).getUint8(0);
          break;
        case 3:
          v = new DataView(e, f, 2).getUint16(0, t);
          break;
        case 4:
        case 13:
          v = new DataView(e, f, 4).getUint32(0, t);
          break;
        case 5:
          v =
            new DataView(e, f, 4).getUint32(0, t) /
            new DataView(e, f + 4, 4).getUint32(0, t);
          break;
        case 6:
          v = new DataView(e, f, 1).getInt8(0);
          break;
        case 8:
          v = new DataView(e, f, 2).getInt16(0, t);
          break;
        case 9:
          v = new DataView(e, f, 4).getInt32(0, t);
          break;
        case 10:
          v =
            new DataView(e, f, 4).getInt32(0, t) /
            new DataView(e, f + 4, 4).getInt32(0, t);
          break;
        case 11:
          v = new DataView(e, f, 4).getFloat32(0, t);
          break;
        case 12:
          v = new DataView(e, f, 8).getFloat64(0, t);
          break;
        case 16:
        case 18:
          v = it(new DataView(e, f, 8), 0, t);
          break;
        case 17:
          v = Sr(new DataView(e, f, 8), 0, t);
          break;
        default:
          v = null;
      }
      s.push(v);
    }
  }
  if (u === 2) {
    let f = "";
    const p = s;
    for (s = [], y = 0; y < p.length; y++)
      p[y] === 0 && f !== ""
        ? (s.push(f), (f = ""))
        : (f += String.fromCharCode(p[y]));
    (f === "" && s.length !== 0) || s.push(f);
  }
  return (r.values = s), !0;
}
function qe(e) {
  const t = e[0],
    r = j(t, "TILEWIDTH"),
    h = j(t, "TILELENGTH"),
    d = j(t, "IMAGEWIDTH"),
    l = j(t, "IMAGELENGTH"),
    u = j(t, "BITSPERSAMPLE"),
    o = j(t, "SAMPLESPERPIXEL"),
    a = j(t, "SAMPLEFORMAT") ?? 1,
    s = ot(a, u),
    n = nt(t),
    m = Mt(t, "GDAL_NODATA");
  let T = null;
  m != null &&
    m.length &&
    ((T = m.map((L) => parseFloat(L))), T.some((L) => isNaN(L)) && (T = null));
  const C = j(t, "COMPRESSION") ?? 1;
  let v;
  switch (C) {
    case 1:
      v = "NONE";
      break;
    case 2:
    case 3:
    case 4:
    case 32771:
      v = "CCITT";
      break;
    case 5:
      v = "LZW";
      break;
    case 6:
    case 7:
      v = "JPEG";
      break;
    case 32773:
      v = "PACKBITS";
      break;
    case 8:
    case 32946:
      v = "DEFLATE";
      break;
    case 34712:
      v = "JPEG2000";
      break;
    case 34887:
      v = "LERC";
      break;
    default:
      v = String(C);
  }
  let y = !0,
    g = "";
  gr.has(C) || ((y = !1), (g += "unsupported tag compression " + C)),
    a > 3 && ((y = !1), (g += "unsupported tag sampleFormat " + a)),
    u !== 1 &&
      u !== 2 &&
      u !== 4 &&
      u % 8 != 0 &&
      ((y = !1), (g += "unsupported tag bitsPerSample " + u));
  const i = St(t, "GEOASCIIPARAMS");
  let f;
  if (i) {
    const L = i.split("|").find((G) => G.includes("ESRI PE String = ")),
      D = L ? L.replace("ESRI PE String = ", "") : "";
    f =
      D.startsWith("COMPD_CS") ||
      D.startsWith("PROJCS") ||
      D.startsWith("GEOGCS")
        ? { wkid: null, wkt: D }
        : null;
  }
  const p = be(t, "GEOTIEPOINTS"),
    b = be(t, "GEOPIXELSCALE"),
    c = be(t, "GEOTRANSMATRIX"),
    w = t.has("GEOKEYDIRECTORY") ? t.get("GEOKEYDIRECTORY").data : null;
  let S,
    k,
    E = !1,
    R = !1;
  if (w) {
    E = j(w, "GTRasterTypeGeoKey") === 2;
    const L = j(w, "GTModelTypeGeoKey");
    if (L === 2) {
      const D = j(w, "GeographicTypeGeoKey");
      D >= 1024 && D <= 32766 && (f = { wkid: D }),
        f || D !== 32767 || ((R = !0), (f = { wkid: 4326 }));
    } else if (L === 1) {
      const D = j(w, "ProjectedCSTypeGeoKey");
      D >= 1024 && D <= 32766 && (f = { wkid: D });
    }
  }
  if (
    (b && p && p.length >= 6
      ? ((S = [
          b[0],
          0,
          p[3] - p[0] * b[0],
          0,
          -Math.abs(b[1]),
          p[4] - p[1] * b[1],
        ]),
        E &&
          ((S[2] -= 0.5 * S[0] + 0.5 * S[1]),
          (S[5] -= 0.5 * S[3] + 0.5 * S[4])))
      : c &&
        c.length === 16 &&
        (S = E
          ? [c[0], c[1], c[3] - 0.5 * c[0], c[4], c[5], c[7] - 0.5 * c[5]]
          : [c[0], c[1], c[3], c[4], c[5], c[7]]),
    S)
  ) {
    const L = [
      { x: 0, y: l },
      { x: 0, y: 0 },
      { x: d, y: l },
      { x: d, y: 0 },
    ];
    let D,
      G = Number.POSITIVE_INFINITY,
      F = Number.POSITIVE_INFINITY,
      U = Number.NEGATIVE_INFINITY,
      N = Number.NEGATIVE_INFINITY;
    for (let Y = 0; Y < L.length; Y++)
      (D = mr(L[Y], S)),
        (G = D.x > G ? G : D.x),
        (U = D.x < U ? U : D.x),
        (F = D.y > F ? F : D.y),
        (N = D.y < N ? N : D.y);
    k = { xmin: G, xmax: U, ymin: F, ymax: N, spatialReference: f };
  } else
    k = {
      xmin: -0.5,
      ymin: 0.5 - l,
      xmax: d - 0.5,
      ymax: 0.5,
      spatialReference: f,
    };
  R &&
    (k.xmax - k.xmin > 400 ||
      Math.max(Math.abs(k.xmin), Math.abs(k.xmax)) > 361) &&
    ((f = null), (k.spatialReference = null));
  const P = _t(e);
  let I, x, A, O, M;
  if (P.length > 0) {
    A = Math.round(Math.log(d / j(P[0], "IMAGEWIDTH")) / Math.LN2);
    const L = P[P.length - 1];
    (O = Math.round(Math.log(d / j(L, "IMAGEWIDTH")) / Math.LN2)),
      (I = j(L, "TILEWIDTH")),
      (x = j(L, "TILELENGTH"));
  }
  (I = O != null && O > 0 ? I || r : null),
    (x = O != null && O > 0 ? x || h : null),
    r &&
      ((M = [
        {
          maxCol: Math.ceil(d / r) - 1,
          maxRow: Math.ceil(l / h) - 1,
          minRow: 0,
          minCol: 0,
        },
      ]),
      P.forEach((L) => {
        M.push({
          maxCol: Math.ceil(j(L, "IMAGEWIDTH") / j(L, "TILEWIDTH")) - 1,
          maxRow: Math.ceil(j(L, "IMAGELENGTH") / j(L, "TILELENGTH")) - 1,
          minRow: 0,
          minCol: 0,
        });
      }));
  const B = St(e[0], "GDAL_METADATA"),
    _ = wr(B);
  return (
    (g +=
      " " +
      Nt({
        width: d,
        height: l,
        tileWidth: r,
        tileHeight: h,
        planes: o,
        ifds: e,
      })),
    {
      width: d,
      height: l,
      tileWidth: r,
      tileHeight: h,
      planes: o,
      isBSQ: n,
      pixelType: s,
      compression: v,
      noData: T,
      hasMaskBand: Ut(e).length === P.length + 1,
      isSupported: y,
      message: g,
      extent: k,
      isPseudoGeographic: R,
      affine: b ? null : S,
      firstPyramidLevel: A,
      maximumPyramidLevel: O,
      pyramidBlockWidth: I,
      pyramidBlockHeight: x,
      tileBoundary: M,
      metadata: _,
    }
  );
}
function nt(e, t) {
  const r = Mt(e, "PLANARCONFIGURATION");
  return r ? r[0] === 2 : !!t && t.isBSQ;
}
function _t(e) {
  return e.filter((t) => j(t, "NEWSUBFILETYPE") === 1);
}
function Ut(e) {
  return e.filter((t) => {
    const r = (4 & (j(t, "NEWSUBFILETYPE") ?? 0)) == 4,
      h = j(t, "PHOTOMETRICINTERPRETATION") === 4;
    return r && h;
  });
}
function it(e, t, r) {
  const h = e.getUint32(t, r),
    d = e.getUint32(t + 4, r);
  return r ? d * ke + h : h * ke + d;
}
function Sr(e, t, r) {
  let h = r ? e.getInt32(t, r) : e.getUint32(t, r),
    d = r ? e.getUint32(t + 4, r) : e.getInt32(t + 4, r);
  const l = (r ? h : d) >= 0 ? 1 : -1;
  return r ? (h *= l) : (d *= l), l * (r ? d * ke + h : h * ke + d);
}
function De(e, t, r, h) {
  return h ? it(e, t, r) : e.getUint32(t, r);
}
function vr(e) {
  const t = new DataView(e, 0, 16),
    r = t.getUint16(0, !1);
  let h = null;
  if (r === 18761) h = !0;
  else {
    if (r !== 19789) throw new Error("unexpected endianess byte");
    h = !1;
  }
  const d = t.getUint16(2, h);
  if (d !== 42 && d !== 43) throw new Error("unexpected tiff identifier");
  let l = 4;
  const u = d === 43;
  if (u) {
    const o = t.getUint16(l, h);
    if (((l += 2), o !== 8)) throw new Error("unsupported bigtiff version");
    if (t.getUint16(l, h) !== 0) throw new Error("unsupported bigtiff version");
    l += 2;
  }
  return { littleEndian: h, isBigTiff: u, firstIFDPos: De(t, l, h, u) };
}
function kr(e, t, r, h = 0, d = ve.TIFF_TAGS, l = 4) {
  const u = Fe(e, t, r, h, d, l);
  let o;
  const a = u.ifd;
  if (a) {
    if (
      (ve.ifdTags.forEach((s, n) => {
        a.has(n) &&
          ((o = a.get(n)), (o.data = Fe(e, t, o.valueOffset - h, h, s).ifd));
      }),
      a.has("GEOKEYDIRECTORY"))
    ) {
      o = a.get("GEOKEYDIRECTORY");
      const s = o.values;
      if (s && s.length > 4) {
        const n = s[0] + "." + s[1] + "." + s[2];
        (o.data = Fe(e, t, o.valueOffset + 6 - h, h, ve.GEO_KEYS, 2).ifd),
          o.data &&
            o.data.set("GEOTIFFVersion", {
              id: 0,
              type: 2,
              valueCount: 1,
              valueOffset: null,
              values: [n],
            });
      }
    }
    if (a.has("XMP")) {
      o = a.get("XMP");
      const s = o.values;
      typeof s[0] == "number" &&
        o.type === 7 &&
        (o.values = [hr(new Uint8Array(s))]);
    }
  }
  return u;
}
function Nt(e) {
  const { width: t, height: r, tileHeight: h, tileWidth: d } = e,
    l = e.planes,
    u = d ? d * h : t * r,
    o = j(e.ifds[0], "BITSPERSAMPLE");
  let a = "";
  return (
    u * l > 2 ** 30 / (o > 8 ? o / 8 : 1) &&
      (a = d
        ? "tiled tiff exceeding 1 gigabits per tile is not supported"
        : "scanline tiff exceeding 1 gigabits is not supported"),
    a
  );
}
async function Ir(e, t = {}) {
  const r = t.pyramidLevel || 0,
    h =
      t.headerInfo ||
      (function (n) {
        const { littleEndian: m, isBigTiff: T, firstIFDPos: C } = vr(n);
        let v = C;
        const y = [];
        do {
          const g = kr(n, m, v, 0, ve.TIFF_TAGS, T ? 8 : 4);
          if (!g.success) break;
          y.push(g.ifd), (v = g.nextIFD);
        } while (v > 0);
        return {
          ...qe(y),
          littleEndian: m,
          isBigTiff: T,
          ifds: y,
          pyramidIFDs: _t(y),
          maskIFDs: Ut(y),
        };
      })(e),
    { ifds: d, noData: l } = h;
  if (d.length === 0) throw new Error("no valid image file directory");
  const u = Nt(h);
  if (u) throw u;
  let o = null;
  const a = r === -1 ? d[d.length - 1] : d[r],
    s = l ?? t.noDataValue;
  return (
    (o = h.tileWidth
      ? await (async function (n, m, T) {
          const C = be(T, "TILEOFFSETS");
          if (C === void 0) return null;
          const v = be(T, "TILEBYTECOUNTS"),
            {
              width: y,
              height: g,
              pixelType: i,
              tileWidth: f,
              tileHeight: p,
            } = qe([T]),
            b = nt(T, m),
            c = j(T, "SAMPLESPERPIXEL") || m.planes,
            w = y * g,
            S = j(T, "BITSPERSAMPLE"),
            k = (j(T, "COMPRESSION") ?? 1) === 34887,
            E = Me(i),
            R = [];
          for (let Y = 0; Y < c; Y++) R.push(new E(w));
          let P, I, x, A, O, M, B, _, L, D, G, F, U;
          const N = Math.ceil(y / f);
          if (S % 8 == 0) {
            if (k && b && c > 1) {
              const Y = Math.round(C.length / c);
              for (P = 0; P < Y; P++) {
                (M = Math.floor(P / N) * p), (B = (P % N) * f), (_ = M * y + B);
                for (let ee = 0; ee < c; ee++) {
                  const J = P * c + ee;
                  if (v[J] !== 0)
                    for (
                      x = await Je(n, m.littleEndian, T, C[J], v[J]),
                        D = 0,
                        L = _,
                        F = Math.min(f, y - B),
                        G = Math.min(p, g - M),
                        U = R[ee],
                        A = 0;
                      A < G;
                      A++
                    )
                      for (
                        L = _ + A * y, D = A * f, O = 0;
                        O < F;
                        O++, L++, D++
                      )
                        U[L] = x[D];
                }
              }
            } else
              for (P = 0; P < C.length; P++)
                if (v[P] !== 0)
                  for (
                    M = Math.floor(P / N) * p,
                      B = (P % N) * f,
                      _ = M * y + B,
                      x = await Je(n, m.littleEndian, T, C[P], v[P]),
                      D = 0,
                      L = _,
                      F = Math.min(f, y - B),
                      G = Math.min(p, g - M),
                      I = 0;
                    I < c;
                    I++
                  )
                    if (((U = R[I]), b || k))
                      for (A = 0; A < G; A++)
                        for (
                          L = _ + A * y, D = f * p * I + A * f, O = 0;
                          O < F;
                          O++, L++, D++
                        )
                          U[L] = x[D];
                    else
                      for (A = 0; A < G; A++)
                        for (
                          L = _ + A * y, D = A * f * c + I, O = 0;
                          O < F;
                          O++, L++, D += c
                        )
                          U[L] = x[D];
          }
          return { width: y, height: g, pixelType: i, pixels: R };
        })(e, h, a)
      : await Cr(e, h, a)),
    o && (s != null && et(o, s), o)
  );
}
var xr = (function (e) {
  var t, r, h;
  function d(l) {
    var u, o, a, s, n, m, T, C, v, y, g, i, f;
    for (
      this.data = l,
        this.pos = 8,
        this.palette = [],
        this.imgData = [],
        this.transparency = {},
        this.animation = null,
        this.text = {},
        n = null;
      ;

    ) {
      switch (
        ((u = this.readUInt32()),
        (C = function () {
          var p, b;
          for (b = [], p = 0; p < 4; ++p)
            b.push(String.fromCharCode(this.data[this.pos++]));
          return b;
        }
          .call(this)
          .join("")),
        C)
      ) {
        case "IHDR":
          (this.width = this.readUInt32()),
            (this.height = this.readUInt32()),
            (this.bits = this.data[this.pos++]),
            (this.colorType = this.data[this.pos++]),
            (this.compressionMethod = this.data[this.pos++]),
            (this.filterMethod = this.data[this.pos++]),
            (this.interlaceMethod = this.data[this.pos++]);
          break;
        case "acTL":
          this.animation = {
            numFrames: this.readUInt32(),
            numPlays: this.readUInt32() || 1 / 0,
            frames: [],
          };
          break;
        case "PLTE":
          this.palette = this.read(u);
          break;
        case "fcTL":
          n && this.animation.frames.push(n),
            (this.pos += 4),
            (n = {
              width: this.readUInt32(),
              height: this.readUInt32(),
              xOffset: this.readUInt32(),
              yOffset: this.readUInt32(),
            }),
            (s = this.readUInt16()),
            (a = this.readUInt16() || 100),
            (n.delay = (1e3 * s) / a),
            (n.disposeOp = this.data[this.pos++]),
            (n.blendOp = this.data[this.pos++]),
            (n.data = []);
          break;
        case "IDAT":
        case "fdAT":
          for (
            C === "fdAT" && ((this.pos += 4), (u -= 4)),
              l = (n != null ? n.data : void 0) || this.imgData,
              g = 0;
            0 <= u ? g < u : g > u;
            0 <= u ? ++g : --g
          )
            l.push(this.data[this.pos++]);
          break;
        case "tRNS":
          switch (((this.transparency = {}), this.colorType)) {
            case 3:
              if (
                ((this.transparency.indexed = this.read(u)),
                (v = 255 - this.transparency.indexed.length) > 0)
              )
                for (i = 0; 0 <= v ? i < v : i > v; 0 <= v ? ++i : --i)
                  this.transparency.indexed.push(255);
              break;
            case 0:
              this.transparency.grayscale = this.read(u)[0];
              break;
            case 2:
              this.transparency.rgb = this.read(u);
          }
          break;
        case "tEXt":
          (m = (y = this.read(u)).indexOf(0)),
            (T = String.fromCharCode.apply(String, y.slice(0, m))),
            (this.text[T] = String.fromCharCode.apply(String, y.slice(m + 1)));
          break;
        case "IEND":
          return (
            n && this.animation.frames.push(n),
            (this.colors = function () {
              switch (this.colorType) {
                case 0:
                case 3:
                case 4:
                  return 1;
                case 2:
                case 6:
                  return 3;
              }
            }.call(this)),
            (this.hasAlphaChannel = (f = this.colorType) === 4 || f === 6),
            (o = this.colors + (this.hasAlphaChannel ? 1 : 0)),
            (this.pixelBitlength = this.bits * o),
            (this.colorSpace = function () {
              switch (this.colors) {
                case 1:
                  return "DeviceGray";
                case 3:
                  return "DeviceRGB";
              }
            }.call(this)),
            void (this.imgData = new Uint8Array(this.imgData))
          );
        default:
          this.pos += u;
      }
      if (((this.pos += 4), this.pos > this.data.length))
        throw new Error("Incomplete or corrupt PNG file");
    }
  }
  return (
    (d.load = function (l, u, o) {
      var a;
      return (
        typeof u == "function" && (o = u),
        (a = new XMLHttpRequest()).open("GET", l, !0),
        (a.responseType = "arraybuffer"),
        (a.onload = function () {
          var s;
          return (
            (s = new d(new Uint8Array(a.response || a.mozResponseArrayBuffer))),
            typeof (u != null ? u.getContext : void 0) == "function" &&
              s.render(u),
            typeof o == "function" ? o(s) : void 0
          );
        }),
        a.send(null)
      );
    }),
    (d.prototype.read = function (l) {
      var u, o;
      for (o = [], u = 0; 0 <= l ? u < l : u > l; 0 <= l ? ++u : --u)
        o.push(this.data[this.pos++]);
      return o;
    }),
    (d.prototype.readUInt32 = function () {
      return (
        (this.data[this.pos++] << 24) |
        (this.data[this.pos++] << 16) |
        (this.data[this.pos++] << 8) |
        this.data[this.pos++]
      );
    }),
    (d.prototype.readUInt16 = function () {
      return (this.data[this.pos++] << 8) | this.data[this.pos++];
    }),
    (d.prototype.decodePixels = function (l) {
      var u, o, a, s, n, m, T, C, v, y, g, i, f, p, b, c, w, S, k, E, R, P, I;
      if ((l == null && (l = this.imgData), l.length === 0))
        return new Uint8Array(0);
      for (
        l = (l = new we(l)).getBytes(),
          c = (i = this.pixelBitlength / 8) * this.width,
          f = new Uint8Array(c * this.height),
          m = l.length,
          b = 0,
          p = 0,
          o = 0;
        p < m;

      ) {
        switch (l[p++]) {
          case 0:
            for (s = k = 0; k < c; s = k += 1) f[o++] = l[p++];
            break;
          case 1:
            for (s = E = 0; E < c; s = E += 1)
              (u = l[p++]),
                (n = s < i ? 0 : f[o - i]),
                (f[o++] = (u + n) % 256);
            break;
          case 2:
            for (s = R = 0; R < c; s = R += 1)
              (u = l[p++]),
                (a = (s - (s % i)) / i),
                (w = b && f[(b - 1) * c + a * i + (s % i)]),
                (f[o++] = (w + u) % 256);
            break;
          case 3:
            for (s = P = 0; P < c; s = P += 1)
              (u = l[p++]),
                (a = (s - (s % i)) / i),
                (n = s < i ? 0 : f[o - i]),
                (w = b && f[(b - 1) * c + a * i + (s % i)]),
                (f[o++] = (u + Math.floor((n + w) / 2)) % 256);
            break;
          case 4:
            for (s = I = 0; I < c; s = I += 1)
              (u = l[p++]),
                (a = (s - (s % i)) / i),
                (n = s < i ? 0 : f[o - i]),
                b === 0
                  ? (w = S = 0)
                  : ((w = f[(b - 1) * c + a * i + (s % i)]),
                    (S = a && f[(b - 1) * c + (a - 1) * i + (s % i)])),
                (T = n + w - S),
                (C = Math.abs(T - n)),
                (y = Math.abs(T - w)),
                (g = Math.abs(T - S)),
                (v = C <= y && C <= g ? n : y <= g ? w : S),
                (f[o++] = (u + v) % 256);
            break;
          default:
            throw new Error("Invalid filter algorithm: " + l[p - 1]);
        }
        b++;
      }
      return f;
    }),
    (d.prototype.decodePalette = function () {
      var l, u, o, a, s, n, m, T, C;
      for (
        o = this.palette,
          n = this.transparency.indexed || [],
          s = new Uint8Array((n.length || 0) + o.length),
          a = 0,
          o.length,
          l = 0,
          u = m = 0,
          T = o.length;
        m < T;
        u = m += 3
      )
        (s[a++] = o[u]),
          (s[a++] = o[u + 1]),
          (s[a++] = o[u + 2]),
          (s[a++] = (C = n[l++]) != null ? C : 255);
      return s;
    }),
    (d.prototype.copyToImageData = function (l, u) {
      var o, a, s, n, m, T, C, v, y, g, i;
      if (
        ((a = this.colors),
        (y = null),
        (o = this.hasAlphaChannel),
        this.palette.length &&
          ((y =
            (i = this._decodedPalette) != null
              ? i
              : (this._decodedPalette = this.decodePalette())),
          (a = 4),
          (o = !0)),
        (v = (s = l.data || l).length),
        (m = y || u),
        (n = T = 0),
        a === 1)
      )
        for (; n < v; )
          (C = y ? 4 * u[n / 4] : T),
            (g = m[C++]),
            (s[n++] = g),
            (s[n++] = g),
            (s[n++] = g),
            (s[n++] = o
              ? m[C++]
              : this.transparency.grayscale && this.transparency.grayscale === g
              ? 0
              : 255),
            (T = C);
      else
        for (; n < v; )
          (C = y ? 4 * u[n / 4] : T),
            (s[n++] = m[C++]),
            (s[n++] = m[C++]),
            (s[n++] = m[C++]),
            (s[n++] = o
              ? m[C++]
              : this.transparency.rgb &&
                this.transparency.rgb[1] === m[C - 3] &&
                this.transparency.rgb[3] === m[C - 2] &&
                this.transparency.rgb[5] === m[C - 1]
              ? 0
              : 255),
            (T = C);
    }),
    (d.prototype.decode = function () {
      var l;
      return (
        (l = new Uint8Array(this.width * this.height * 4)),
        this.copyToImageData(l, this.decodePixels()),
        l
      );
    }),
    (r = e.document && e.document.createElement("canvas")),
    (h = r && r.getContext("2d")),
    (t = function (l) {
      var u;
      return (
        (h.width = l.width),
        (h.height = l.height),
        h.clearRect(0, 0, l.width, l.height),
        h.putImageData(l, 0, 0),
        ((u = new Image()).src = r.toDataURL()),
        u
      );
    }),
    (d.prototype.decodeFrames = function (l) {
      var u, o, a, s, n, m, T, C;
      if (this.animation) {
        for (
          C = [], o = n = 0, m = (T = this.animation.frames).length;
          n < m;
          o = ++n
        )
          (u = T[o]),
            (a = l.createImageData(u.width, u.height)),
            (s = this.decodePixels(new Uint8Array(u.data))),
            this.copyToImageData(a, s),
            (u.imageData = a),
            C.push((u.image = t(a)));
        return C;
      }
    }),
    (d.prototype.renderFrame = function (l, u) {
      var o, a, s;
      return (
        (o = (a = this.animation.frames)[u]),
        (s = a[u - 1]),
        u === 0 && l.clearRect(0, 0, this.width, this.height),
        (s != null ? s.disposeOp : void 0) === 1
          ? l.clearRect(s.xOffset, s.yOffset, s.width, s.height)
          : (s != null ? s.disposeOp : void 0) === 2 &&
            l.putImageData(s.imageData, s.xOffset, s.yOffset),
        o.blendOp === 0 && l.clearRect(o.xOffset, o.yOffset, o.width, o.height),
        l.drawImage(o.image, o.xOffset, o.yOffset)
      );
    }),
    (d.prototype.animate = function (l) {
      var u,
        o,
        a,
        s,
        n,
        m,
        T = this;
      return (
        (o = 0),
        (m = this.animation),
        (s = m.numFrames),
        (a = m.frames),
        (n = m.numPlays),
        (u = function () {
          var C, v;
          if (
            ((C = o++ % s), (v = a[C]), T.renderFrame(l, C), s > 1 && o / s < n)
          )
            return (T.animation._timeout = setTimeout(u, v.delay));
        })()
      );
    }),
    (d.prototype.stopAnimation = function () {
      var l;
      return clearTimeout((l = this.animation) != null ? l._timeout : void 0);
    }),
    (d.prototype.render = function (l) {
      var u, o;
      return (
        l._png && l._png.stopAnimation(),
        (l._png = this),
        (l.width = this.width),
        (l.height = this.height),
        (u = l.getContext("2d")),
        this.animation
          ? (this.decodeFrames(u), this.animate(u))
          : ((o = u.createImageData(this.width, this.height)),
            this.copyToImageData(o, this.decodePixels()),
            u.putImageData(o, 0, 0))
      );
    }),
    d
  );
})(self);
const Ar = new Set(["jpg", "png", "bmp", "gif"]);
async function Er(e, t) {
  if (!rt)
    throw new pe(
      "rasterCoded:decode",
      "lerc decoder is not supported on big endian platform"
    );
  await Bt();
  const { offset: r } = t,
    {
      width: h,
      height: d,
      pixelType: l,
      statistics: u,
      depthCount: o,
      noDataValues: a,
      bandMasks: s,
      pixels: n,
      mask: m,
    } = Gt(e, { inputOffset: r, returnInterleaved: t.returnInterleaved });
  return new se({
    width: h,
    height: d,
    pixelType: l.toLowerCase(),
    pixels: n,
    mask: m,
    statistics: u,
    bandMasks: s,
    depthCount: o,
    noDataValues: a,
  });
}
async function Pr(e, t) {
  const r = await Ir(e, { ...t, noDataValue: null });
  Re(r);
  const h = new se({
    width: r.width,
    height: r.height,
    pixels: r.pixels,
    pixelType: r.pixelType.toLowerCase(),
    mask: r.mask,
    statistics: null,
  });
  return h.updateStatistics(), h;
}
async function Rr(e, t) {
  const r = await (async function (d, l) {
      const { headerInfo: u, ifd: o, offsets: a, sizes: s } = l,
        n = [];
      for (let x = 0; x < a.length; x++) {
        const A = await Je(d, u.littleEndian, o, a[x], s[x] || d.byteLength);
        n.push(A);
      }
      const m = nt(o, u),
        T = j(o, "BITSPERSAMPLE"),
        C = ot(j(o, "SAMPLEFORMAT") ?? 1, T),
        v = j(o, "SAMPLESPERPIXEL") || u.planes,
        y = Me(C),
        g = j(o, "TILEWIDTH"),
        i = j(o, "TILELENGTH"),
        f = j(o, "COMPRESSION") ?? 1,
        p = g * i;
      let b;
      const c = [];
      let w = n[0];
      const S = f === 34887;
      for (let x = 0; x < v; x++) {
        if (((b = new y(p)), m && S)) {
          if (((w = n[x]), w.length))
            for (let A = 0; A < p; A++) b[A] = w[x][A + x];
        } else if (w.length)
          if (m || (S && !m)) b = w.slice(p * x, p * (x + 1));
          else for (let A = 0; A < p; A++) b[A] = w[A * v + x];
        c.push(b);
      }
      const k = u.noData ? u.noData[0] : l.noDataValue,
        E = u.metadata ? u.metadata.statistics : null,
        R = E ? E.map((x) => x.min) : null,
        P = E ? E.map((x) => x.max) : null,
        I = { pixelType: C, width: g, height: i, pixels: c, noDataValue: k };
      return (
        k != null
          ? et(I, k)
          : R && P && l.applyMinMaxConstraint && (I.mask = br(c, R, P)),
        I
      );
    })(e, t.customOptions),
    h = new se({
      width: r.width,
      height: r.height,
      pixels: r.pixels,
      pixelType: r.pixelType.toLowerCase(),
      mask: r.mask,
      statistics: null,
    });
  return h.updateStatistics(), h;
}
function Ft(e, t) {
  const r = t.pixelType || "u8",
    h = se.getPixelArrayConstructor(r),
    d = r === "u8" ? e : new h(e.buffer),
    l = [],
    u = t.planes || 1;
  if (u === 1) l.push(d);
  else
    for (let a = 0; a < u; a++) {
      const s = (t.width || 1) * (t.height || e.length),
        n = new h(s);
      for (let m = 0; m < s; m++) n[m] = d[m * u + a];
      l.push(n);
    }
  const o = new se({
    width: t.width || 1,
    height: t.height || e.length,
    pixels: l,
    pixelType: r,
    statistics: null,
  });
  return o.updateStatistics(), o;
}
function Dr(e, t) {
  return Ft(new we(new Uint8Array(e)).getBytes(), t);
}
function Lr(e, t) {
  return Ft(tt(e, t.offset, t.eof, !t.isInputBigEndian), t);
}
function Br(e, t, r) {
  const { pixelTypeCtor: h } = (function (u) {
      let o = null,
        a = null;
      switch (u ? u.toLowerCase() : "f32") {
        case "u1":
        case "u2":
        case "u4":
        case "u8":
          (a = 255), (o = Uint8Array);
          break;
        case "u16":
          (a = a || 65535), (o = Uint16Array);
          break;
        case "u32":
          (a = a || 4294967295), (o = Uint32Array);
          break;
        case "s8":
          (a = a || -128), (o = Int8Array);
          break;
        case "s16":
          (a = a || -32768), (o = Int16Array);
          break;
        case "s32":
          (a = a || -2147483648), (o = Int32Array);
          break;
        default:
          o = Float32Array;
      }
      return { pixelTypeCtor: o, noDataValue: a };
    })(t.pixelType),
    d = (0, fr.decode)(e, {
      width: t.width,
      height: t.height,
      pixelType: h,
      format: r,
    }),
    l = new se({
      width: t.width,
      height: t.height,
      pixels: d.pixels,
      pixelType: t.pixelType,
      mask: d.mask,
      statistics: null,
    });
  return l.updateStatistics(), l;
}
function Gr(e, t) {
  const r = ur.decode(e, t.hasNoZlibMask ?? void 0),
    h = new se({
      width: r.width,
      height: r.height,
      pixels: r.pixels,
      pixelType: "U8",
      mask: r.mask,
      statistics: null,
    });
  return h.updateStatistics(), h;
}
function Or(e, t) {
  const r = new Uint8Array(e),
    h = new xr(r),
    { width: d, height: l } = t,
    u = d * l,
    o = h.decode();
  let a,
    s = 0,
    n = 0;
  const m = new Uint8Array(u);
  for (s = 0; s < u; s++) m[s] = o[4 * s + 3];
  const T = new se({
    width: d,
    height: l,
    pixels: [],
    pixelType: "U8",
    mask: m,
    statistics: [],
  });
  for (s = 0; s < 3; s++) {
    for (a = new Uint8Array(u), n = 0; n < u; n++) a[n] = o[4 * n + s];
    T.addData({ pixels: a });
  }
  return T.updateStatistics(), T;
}
function Vt(e) {
  if (e == null)
    throw new pe("rasterCodec:decode", "parameter encodeddata is required.");
  const t = new Uint8Array(e, 0, 10);
  let r = "";
  return (
    t[0] === 255 && t[1] === 216
      ? (r = "jpg")
      : t[0] === 137 && t[1] === 80 && t[2] === 78 && t[3] === 71
      ? (r = "png")
      : t[0] === 67 &&
        t[1] === 110 &&
        t[2] === 116 &&
        t[3] === 90 &&
        t[4] === 73 &&
        t[5] === 109 &&
        t[6] === 97 &&
        t[7] === 103 &&
        t[8] === 101 &&
        t[9] === 32
      ? (r = "lerc")
      : t[0] === 76 &&
        t[1] === 101 &&
        t[2] === 114 &&
        t[3] === 99 &&
        t[4] === 50 &&
        t[5] === 32
      ? (r = "lerc2")
      : (t[0] === 73 && t[1] === 73 && t[2] === 42 && t[3] === 0) ||
        (t[0] === 77 && t[1] === 77 && t[2] === 0 && t[3] === 42) ||
        (t[0] === 73 && t[1] === 73 && t[2] === 43 && t[3] === 0) ||
        (t[0] === 77 && t[1] === 77 && t[2] === 0 && t[3] === 43)
      ? (r = "tiff")
      : t[0] === 71 && t[1] === 73 && t[2] === 70
      ? (r = "gif")
      : t[0] === 66 && t[1] === 77
      ? (r = "bmp")
      : String.fromCharCode.apply(null, t).toLowerCase().includes("error") &&
        (r = "error"),
    r
  );
}
function Xr(e) {
  let t = Vt(e);
  return t === "lerc2" ? (t = "lerc") : t === "error" && (t = ""), t;
}
async function Zr(e, t = {}, r) {
  if (e == null)
    throw new pe("rasterCodec:decode", "missing encodeddata parameter.");
  let h = t.format && t.format.toLowerCase();
  if (!((h !== "bsq" && h !== "bip") || (t.width != null && t.height != null)))
    throw new pe(
      "rasterCodec:decode",
      "requires width and height in options parameter."
    );
  if (h === "tiff" && t.customOptions) return Rr(e, t);
  if (
    ((!h || (h !== "bsq" && h !== "bip" && h !== "deflate" && h !== "lzw")) &&
      (h = Vt(e)),
    t.useCanvas && Ar.has(h))
  )
    return (async function (u, o, a, s) {
      const n = new sr(),
        m = { applyJpegMask: !1, format: o, ...a },
        T = await n.decode(u, m, s),
        C = new se(T);
      return C.updateStatistics(), C;
    })(e, h, t, r);
  const d = (function (u) {
    let o = null;
    switch (u) {
      case "lerc":
      case "lerc2":
        o = Er;
        break;
      case "jpg":
        o = Gr;
        break;
      case "png":
        o = Or;
        break;
      case "bsq":
      case "bip":
        o = (a, s) => Br(a, s, u);
        break;
      case "tiff":
        o = Pr;
        break;
      case "deflate":
        o = Dr;
        break;
      case "lzw":
        o = Lr;
        break;
      case "error":
        o = () => {
          throw new pe("rasterCodec:decode", "input data contains error");
        };
        break;
      default:
        o = () => {
          throw new pe("rasterCodec:decode", "unsupported raster format");
        };
    }
    return o;
  })(h);
  t.isPoint &&
    ((t = { ...t }).width != null && t.width++, t.height != null && t.height++);
  const l = await d(e, t);
  return (
    l &&
    (h !== "jpg" &&
      t.noDataValue != null &&
      l.depthCount === 1 &&
      et(l, t.noDataValue, { customFloatTolerance: t.tolerance }),
    t.isPoint &&
      (function (u, o = 1) {
        if (!u) return;
        const { pixels: a, width: s, height: n, mask: m } = u;
        if (!a || a.length === 0) return;
        const T = a.length,
          C = s - 1,
          v = n - 1,
          y = [];
        let g,
          i,
          f,
          p,
          b,
          c,
          w = null;
        const S = se.getPixelArrayConstructor(u.pixelType);
        if (o === 0) {
          for (g = 0; g < T; g++) {
            for (b = a[g], c = new S(C * v), i = 0; i < v; i++)
              for (p = i * s, f = 0; f < C; f++) c[i * C + f] = b[p + f];
            y.push(c);
          }
          if (X(m))
            for (w = new Uint8Array(C * v), i = 0; i < v; i++)
              for (p = i * s, f = 0; f < C; f++) w[i * C + f] = m[p + f];
        } else {
          for (g = 0; g < T; g++) {
            for (b = a[g], c = new S(C * v), i = 0; i < v; i++)
              for (p = i * s, f = 0; f < C; f++)
                c[i * C + f] =
                  (b[p + f] + b[p + f + 1] + b[p + s + f] + b[p + s + f + 1]) /
                  4;
            y.push(c);
          }
          if (m)
            for (w = new Uint8Array(C * v), i = 0; i < v; i++)
              for (p = i * s, f = 0; f < C; f++)
                w[i * C + f] = Math.min.apply(null, [
                  m[p + f],
                  m[p + f + 1],
                  m[p + s + f],
                  m[p + s + f + 1],
                ]);
        }
        (u.width = C), (u.height = v), (u.mask = w), (u.pixels = y);
      })(l),
    l)
  );
}
var Xe;
let oe = (Xe = class extends Qe {
  constructor() {
    super(...arguments),
      (this.blockWidth = void 0),
      (this.blockHeight = void 0),
      (this.compression = null),
      (this.origin = null),
      (this.firstPyramidLevel = null),
      (this.maximumPyramidLevel = null),
      (this.pyramidScalingFactor = 2),
      (this.pyramidBlockWidth = null),
      (this.pyramidBlockHeight = null),
      (this.isVirtualTileInfo = !1),
      (this.tileInfo = null),
      (this.transposeInfo = null),
      (this.blockBoundary = null);
  }
  clone() {
    return new Xe({
      blockWidth: this.blockWidth,
      blockHeight: this.blockHeight,
      compression: this.compression,
      origin: ne(this.origin),
      firstPyramidLevel: this.firstPyramidLevel,
      maximumPyramidLevel: this.maximumPyramidLevel,
      pyramidResolutions: ne(this.pyramidResolutions),
      pyramidScalingFactor: this.pyramidScalingFactor,
      pyramidBlockWidth: this.pyramidBlockWidth,
      pyramidBlockHeight: this.pyramidBlockHeight,
      isVirtualTileInfo: this.isVirtualTileInfo,
      tileInfo: ne(this.tileInfo),
      transposeInfo: ne(this.transposeInfo),
      blockBoundary: ne(this.blockBoundary),
    });
  }
});
z(
  [H({ type: Number, json: { write: !0 } })],
  oe.prototype,
  "blockWidth",
  void 0
),
  z(
    [H({ type: Number, json: { write: !0 } })],
    oe.prototype,
    "blockHeight",
    void 0
  ),
  z(
    [H({ type: String, json: { write: !0 } })],
    oe.prototype,
    "compression",
    void 0
  ),
  z([H({ type: er, json: { write: !0 } })], oe.prototype, "origin", void 0),
  z(
    [H({ type: Number, json: { write: !0 } })],
    oe.prototype,
    "firstPyramidLevel",
    void 0
  ),
  z(
    [H({ type: Number, json: { write: !0 } })],
    oe.prototype,
    "maximumPyramidLevel",
    void 0
  ),
  z([H({ json: { write: !0 } })], oe.prototype, "pyramidResolutions", void 0),
  z(
    [H({ type: Number, json: { write: !0 } })],
    oe.prototype,
    "pyramidScalingFactor",
    void 0
  ),
  z(
    [H({ type: Number, json: { write: !0 } })],
    oe.prototype,
    "pyramidBlockWidth",
    void 0
  ),
  z(
    [H({ type: Number, json: { write: !0 } })],
    oe.prototype,
    "pyramidBlockHeight",
    void 0
  ),
  z(
    [H({ type: Boolean, json: { write: !0 } })],
    oe.prototype,
    "isVirtualTileInfo",
    void 0
  ),
  z([H({ json: { write: !0 } })], oe.prototype, "tileInfo", void 0),
  z([H()], oe.prototype, "transposeInfo", void 0),
  z([H()], oe.prototype, "blockBoundary", void 0),
  (oe = Xe = z([$e("esri.layers.support.RasterStorageInfo")], oe));
const Mr = oe;
var Ze;
let q = (Ze = class extends Qe {
  constructor(e) {
    super(e),
      (this.attributeTable = null),
      (this.bandCount = null),
      (this.colormap = null),
      (this.extent = null),
      (this.format = void 0),
      (this.height = null),
      (this.width = null),
      (this.histograms = null),
      (this.keyProperties = {}),
      (this.multidimensionalInfo = null),
      (this.noDataValue = null),
      (this.pixelSize = null),
      (this.pixelType = null),
      (this.isPseudoSpatialReference = !1),
      (this.spatialReference = null),
      (this.statistics = null),
      (this.storageInfo = null),
      (this.transform = null);
  }
  get dataType() {
    var t, r;
    const e =
      ((r = (t = this.keyProperties) == null ? void 0 : t.DataType) == null
        ? void 0
        : r.toLowerCase()) ?? "generic";
    return e === "stdtime" ? "standard-time" : e;
  }
  get nativeExtent() {
    return this._get("nativeExtent") || this.extent;
  }
  set nativeExtent(e) {
    e && this._set("nativeExtent", e);
  }
  get nativePixelSize() {
    if (Oe(this.transform) || !this.transform.affectsPixelSize)
      return this.pixelSize;
    const e = this.nativeExtent;
    return { x: e.width / this.width, y: e.height / this.height };
  }
  get hasMultidimensionalTranspose() {
    var e;
    return !!((e = this.storageInfo) != null && e.transposeInfo);
  }
  clone() {
    return new Ze({
      attributeTable: ne(this.attributeTable),
      bandCount: this.bandCount,
      colormap: ne(this.colormap),
      extent: ne(this.extent),
      nativePixelSize: ne(this.nativePixelSize),
      format: this.format,
      height: this.height,
      width: this.width,
      histograms: ne(this.histograms),
      keyProperties: ne(this.keyProperties),
      multidimensionalInfo: ne(this.multidimensionalInfo),
      noDataValue: this.noDataValue,
      pixelSize: ne(this.pixelSize),
      pixelType: this.pixelType,
      isPseudoSpatialReference: this.isPseudoSpatialReference,
      spatialReference: ne(this.spatialReference),
      statistics: ne(this.statistics),
      storageInfo: ne(this.storageInfo),
      transform: ne(this.transform),
    });
  }
});
z([H({ json: { write: !0 } })], q.prototype, "attributeTable", void 0),
  z([H({ json: { write: !0 } })], q.prototype, "bandCount", void 0),
  z([H({ json: { write: !0 } })], q.prototype, "colormap", void 0),
  z([H({ type: String, readOnly: !0 })], q.prototype, "dataType", null),
  z([H({ type: at, json: { write: !0 } })], q.prototype, "extent", void 0),
  z([H({ type: at, json: { write: !0 } })], q.prototype, "nativeExtent", null),
  z([H({ json: { write: !0 } })], q.prototype, "nativePixelSize", null),
  z([H({ json: { write: !0 } })], q.prototype, "format", void 0),
  z([H({ json: { write: !0 } })], q.prototype, "height", void 0),
  z([H({ json: { write: !0 } })], q.prototype, "width", void 0),
  z(
    [H({ json: { write: !0 } })],
    q.prototype,
    "hasMultidimensionalTranspose",
    null
  ),
  z([H({ json: { write: !0 } })], q.prototype, "histograms", void 0),
  z([H({ json: { write: !0 } })], q.prototype, "keyProperties", void 0),
  z([H({ json: { write: !0 } })], q.prototype, "multidimensionalInfo", void 0),
  z([H({ json: { write: !0 } })], q.prototype, "noDataValue", void 0),
  z([H({ json: { write: !0 } })], q.prototype, "pixelSize", void 0),
  z([H({ json: { write: !0 } })], q.prototype, "pixelType", void 0),
  z([H()], q.prototype, "isPseudoSpatialReference", void 0),
  z(
    [H({ type: tr, json: { write: !0 } })],
    q.prototype,
    "spatialReference",
    void 0
  ),
  z([H({ json: { write: !0 } })], q.prototype, "statistics", void 0),
  z([H({ type: Mr, json: { write: !0 } })], q.prototype, "storageInfo", void 0),
  z([H({ json: { write: !0 } })], q.prototype, "transform", void 0),
  (q = Ze = z([$e("esri.layers.support.RasterInfo")], q));
const _r = q;
function vt(e) {
  let { altitude: t, azimuth: r } = e;
  const {
      hillshadeType: h,
      pixelSizePower: d = 1,
      pixelSizeFactor: l = 1,
      scalingType: u,
      isGCS: o,
      resolution: a,
    } = e,
    s = h === "multi-directional" ? 2 * e.zFactor : e.zFactor,
    { x: n, y: m } = a;
  let T = s / (8 * n),
    C = s / (8 * m);
  if ((o && s > 0.001 && ((T /= 111e3), (C /= 111e3)), u === "adjusted"))
    if (o) {
      const I = 111e3 * n,
        x = 111e3 * m;
      (T = (s + I ** d * l) / (8 * I)), (C = (s + x ** d * l) / (8 * x));
    } else (T = (s + n ** d * l) / (8 * n)), (C = (s + m ** d * l) / (8 * m));
  let v = ((90 - t) * Math.PI) / 180,
    y = Math.cos(v),
    g = ((360 - r + 90) * Math.PI) / 180,
    i = Math.sin(v) * Math.cos(g),
    f = Math.sin(v) * Math.sin(g);
  const p = [315, 270, 225, 360, 180, 0],
    b = [60, 60, 60, 60, 60, 90],
    c = new Float32Array([3, 5, 3, 2, 1, 4]),
    w = c.reduce((I, x) => I + x),
    S = c.map((I) => I / w),
    k = h === "multi-directional" ? p.length : 1,
    E = new Float32Array(6),
    R = new Float32Array(6),
    P = new Float32Array(6);
  if (h === "multi-directional")
    for (let I = 0; I < k; I++)
      (t = b[I]),
        (r = p[I]),
        (v = ((90 - t) * Math.PI) / 180),
        (y = Math.cos(v)),
        (g = ((360 - r + 90) * Math.PI) / 180),
        (i = Math.sin(v) * Math.cos(g)),
        (f = Math.sin(v) * Math.sin(g)),
        (E[I] = y),
        (R[I] = i),
        (P[I] = f);
  else E.fill(y), R.fill(i), P.fill(f);
  return {
    resolution: a,
    factor: [T, C],
    sinZcosA: i,
    sinZsinA: f,
    cosZ: y,
    sinZcosAs: R,
    sinZsinAs: P,
    cosZs: E,
    weights: S,
    hillshadeType: ["traditional", "multi-directional"].indexOf(h),
  };
}
function $r(e, t) {
  if (!Se(e)) return e;
  const r = t.zFactor,
    h = t.pixelSizePower ?? 1,
    d = t.pixelSizeFactor ?? 1,
    l = t.slopeType,
    u = t.isGCS,
    { width: o, height: a, mask: s } = e,
    n = e.pixels[0],
    m = new Uint8Array(o * a);
  let T = 1;
  if (X(s)) {
    for (let I = 0; I < s.length; I++)
      if (s[I]) {
        T = s[I];
        break;
      }
    m.set(s);
  }
  const C = new Float32Array(o * a),
    { x: v, y } = t.resolution;
  let g = r / (8 * v),
    i = r / (8 * y);
  u && Math.abs(r - 1) < 1e-4 && ((g /= 111e3), (i /= 111e3)),
    l === "adjusted" &&
      ((g = (r + v ** h * d) / (8 * v)), (i = (r + y ** h * d) / (8 * y)));
  let f, p, b, c, w, S, k, E;
  const R = X(s);
  for (let I = 1; I < a - 1; I++) {
    const x = I * o;
    for (let A = 1; A < o - 1; A++) {
      if (s && !s[x + A]) {
        C[x + A] = 0;
        continue;
      }
      let O = 0;
      if (
        R &&
        ((O =
          (s[x - o + A - 1] +
            s[x - o + A] +
            s[x - o + A + 1] +
            s[x + A - 1] +
            s[x + A + 1] +
            s[x + o + A - 1] +
            s[x + o + A] +
            s[x + o + A + 1]) /
          T),
        O < 7)
      ) {
        (C[x + A] = 0), (m[x + A] = 0);
        continue;
      }
      s && O === 7
        ? ((f = s[x - o + A - 1] ? n[x - o + A - 1] : n[x + A]),
          (p = s[x - o + A] ? n[x - o + A] : n[x + A]),
          (b = s[x - o + A + 1] ? n[x - o + A + 1] : n[x + A]),
          (c = s[x + A - 1] ? n[x + A - 1] : n[x + A]),
          (w = s[x + A + 1] ? n[x + A + 1] : n[x + A]),
          (S = s[x + o + A - 1] ? n[x + o + A - 1] : n[x + A]),
          (k = s[x + o + A] ? n[x + o + A] : n[x + A]),
          (E = s[x + o + A + 1] ? n[x + o + A + 1] : n[x + A]))
        : ((f = n[x - o + A - 1]),
          (p = n[x - o + A]),
          (b = n[x - o + A + 1]),
          (c = n[x + A - 1]),
          (w = n[x + A + 1]),
          (S = n[x + o + A - 1]),
          (k = n[x + o + A]),
          (E = n[x + o + A + 1]));
      const M = (b + w + w + E - (f + c + c + S)) * g,
        B = (S + k + k + E - (f + p + p + b)) * i,
        _ = Math.sqrt(M * M + B * B);
      C[x + A] = l === "percent-rise" ? 100 * _ : 57.2957795 * Math.atan(_);
    }
  }
  for (let I = 0; I < a; I++)
    (C[I * o] = C[I * o + 1]), (C[(I + 1) * o - 1] = C[(I + 1) * o - 2]);
  for (let I = 1; I < o - 1; I++)
    (C[I] = C[I + o]), (C[I + (a - 1) * o] = C[I + (a - 2) * o]);
  const P = new se({
    width: o,
    height: a,
    pixels: [C],
    mask: s ? m : null,
    pixelType: "f32",
    validPixelCount: e.validPixelCount,
  });
  return P.updateStatistics(), P;
}
function Qr(e, t = {}) {
  if (!Se(e)) return e;
  const { width: r, height: h, mask: d } = e,
    l = e.pixels[0],
    u = new Uint8Array(r * h);
  X(d) && u.set(d);
  const o = new Float32Array(r * h),
    { resolution: a } = t,
    s = a ? 1 / a.x : 1,
    n = a ? 1 / a.y : 1;
  let m, T, C, v, y, g, i, f;
  const p = X(d);
  for (let b = 1; b < h - 1; b++) {
    const c = b * r;
    for (let w = 1; w < r - 1; w++) {
      if (d && !d[c + w]) {
        o[c + w] = 0;
        continue;
      }
      let S = 0;
      if (
        p &&
        ((S =
          d[c - r + w - 1] +
          d[c - r + w] +
          d[c - r + w + 1] +
          d[c + w - 1] +
          d[c + w + 1] +
          d[c + r + w - 1] +
          d[c + r + w] +
          d[c + r + w + 1]),
        S < 7)
      ) {
        (o[c + w] = 0), (u[c + w] = 0);
        continue;
      }
      d && S === 7
        ? ((m = d[c - r + w - 1] ? l[c - r + w - 1] : l[c + w]),
          (T = d[c - r + w] ? l[c - r + w] : l[c + w]),
          (C = d[c - r + w + 1] ? l[c - r + w + 1] : l[c + w]),
          (v = d[c + w - 1] ? l[c + w - 1] : l[c + w]),
          (y = d[c + w + 1] ? l[c + w + 1] : l[c + w]),
          (g = d[c + r + w - 1] ? l[c + r + w - 1] : l[c + w]),
          (i = d[c + r + w] ? l[c + r + w] : l[c + w]),
          (f = d[c + r + w + 1] ? l[c + r + w + 1] : l[c + w]))
        : ((m = l[c - r + w - 1]),
          (T = l[c - r + w]),
          (C = l[c - r + w + 1]),
          (v = l[c + w - 1]),
          (y = l[c + w + 1]),
          (g = l[c + r + w - 1]),
          (i = l[c + r + w]),
          (f = l[c + r + w + 1]));
      const k = (C + y + y + f - (m + v + v + g)) * s,
        E = (g + i + i + f - (m + T + T + C)) * n;
      let R = -1;
      (k === 0 && E === 0) ||
        ((R = 90 - 57.29578 * Math.atan2(E, -k)),
        R < 0 && (R += 360),
        R === 360 ? (R = 0) : R > 360 && (R %= 360)),
        (o[c + w] = R);
    }
  }
  for (let b = 0; b < h; b++)
    (o[b * r] = o[b * r + 1]), (o[(b + 1) * r - 1] = o[(b + 1) * r - 2]);
  for (let b = 1; b < r - 1; b++)
    (o[b] = o[b + r]), (o[b + (h - 1) * r] = o[b + (h - 2) * r]);
  return new se({
    width: r,
    height: h,
    pixels: [o],
    mask: d ? u : null,
    pixelType: "f32",
    validPixelCount: e.validPixelCount,
    statistics: [{ minValue: 0, maxValue: 360 }],
  });
}
const eo = [
    "random",
    "ndvi",
    "ndvi2",
    "ndvi3",
    "elevation",
    "gray",
    "hillshade",
  ],
  zt = [
    {
      id: "aspect_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [190, 190, 190], toColor: [255, 45, 8] },
        { fromColor: [255, 45, 8], toColor: [255, 181, 61] },
        { fromColor: [255, 181, 61], toColor: [255, 254, 52] },
        { fromColor: [255, 254, 52], toColor: [0, 251, 50] },
        { fromColor: [0, 251, 50], toColor: [255, 254, 52] },
        { fromColor: [0, 253, 255], toColor: [0, 181, 255] },
        { fromColor: [0, 181, 255], toColor: [26, 35, 253] },
        { fromColor: [26, 35, 253], toColor: [255, 57, 251] },
        { fromColor: [255, 57, 251], toColor: [255, 45, 8] },
      ],
    },
    {
      id: "blackToWhite_predefined",
      fromColor: [0, 0, 0],
      toColor: [255, 255, 255],
    },
    {
      id: "blueBright_predefined",
      fromColor: [204, 204, 255],
      toColor: [0, 0, 224],
    },
    {
      id: "blueLightToDark_predefined",
      fromColor: [211, 229, 232],
      toColor: [46, 100, 140],
    },
    {
      id: "blueGreenBright_predefined",
      fromColor: [203, 245, 234],
      toColor: [48, 207, 146],
    },
    {
      id: "blueGreenLightToDark_predefined",
      fromColor: [216, 242, 237],
      toColor: [21, 79, 74],
    },
    {
      id: "brownLightToDark_predefined",
      fromColor: [240, 236, 170],
      toColor: [102, 72, 48],
    },
    {
      id: "brownToBlueGreenDivergingBright_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [156, 85, 31], toColor: [255, 255, 191] },
        { fromColor: [255, 255, 191], toColor: [33, 130, 145] },
      ],
    },
    {
      id: "brownToBlueGreenDivergingDark_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [110, 70, 45], toColor: [204, 204, 102] },
        { fromColor: [204, 204, 102], toColor: [48, 100, 102] },
      ],
    },
    {
      id: "coefficientBias_predefined",
      fromColor: [214, 214, 255],
      toColor: [0, 57, 148],
    },
    {
      id: "coldToHotDiverging_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [69, 117, 181], toColor: [255, 255, 191] },
        { fromColor: [255, 255, 191], toColor: [214, 47, 39] },
      ],
    },
    {
      id: "conditionNumber_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [0, 97, 0], toColor: [255, 255, 0] },
        { fromColor: [255, 255, 0], toColor: [255, 34, 0] },
      ],
    },
    {
      id: "cyanToPurple_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [0, 245, 245], toColor: [0, 0, 245] },
        { fromColor: [0, 0, 245], toColor: [245, 0, 245] },
      ],
    },
    {
      id: "cyanLightToBlueDark_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [182, 237, 240], toColor: [31, 131, 224] },
        { fromColor: [31, 131, 224], toColor: [9, 9, 145] },
      ],
    },
    {
      id: "distance_predefined",
      fromColor: [255, 200, 0],
      toColor: [0, 0, 255],
    },
    {
      id: "elevation1_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [175, 240, 233], toColor: [255, 255, 179] },
        { fromColor: [255, 255, 179], toColor: [0, 128, 64] },
        { fromColor: [0, 128, 64], toColor: [252, 186, 3] },
        { fromColor: [252, 186, 3], toColor: [128, 0, 0] },
        { fromColor: [120, 0, 0], toColor: [105, 48, 13] },
        { fromColor: [105, 48, 13], toColor: [171, 171, 171] },
        { fromColor: [171, 171, 171], toColor: [255, 252, 255] },
      ],
    },
    {
      id: "elevation2_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [118, 219, 211], toColor: [255, 255, 199] },
        { fromColor: [255, 255, 199], toColor: [255, 255, 128] },
        { fromColor: [255, 255, 128], toColor: [217, 194, 121] },
        { fromColor: [217, 194, 121], toColor: [135, 96, 38] },
        { fromColor: [135, 96, 38], toColor: [150, 150, 181] },
        { fromColor: [150, 150, 181], toColor: [181, 150, 181] },
        { fromColor: [181, 150, 181], toColor: [255, 252, 255] },
      ],
    },
    {
      id: "errors_predefined",
      fromColor: [255, 235, 214],
      toColor: [196, 10, 10],
    },
    {
      id: "grayLightToDark_predefined",
      fromColor: [219, 219, 219],
      toColor: [69, 69, 69],
    },
    {
      id: "greenBright_predefined",
      fromColor: [204, 255, 204],
      toColor: [14, 204, 14],
    },
    {
      id: "greenLightToDark_predefined",
      fromColor: [220, 245, 233],
      toColor: [34, 102, 51],
    },
    {
      id: "greenToBlue_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [32, 204, 16], toColor: [0, 242, 242] },
        { fromColor: [0, 242, 242], toColor: [2, 33, 227] },
      ],
    },
    {
      id: "orangeBright_predefined",
      fromColor: [255, 235, 204],
      toColor: [240, 118, 5],
    },
    {
      id: "orangeLightToDark_predefined",
      fromColor: [250, 233, 212],
      toColor: [171, 65, 36],
    },
    {
      id: "partialSpectrum_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [242, 241, 162], toColor: [255, 255, 0] },
        { fromColor: [255, 255, 0], toColor: [255, 0, 0] },
        { fromColor: [252, 3, 69], toColor: [176, 7, 237] },
        { fromColor: [176, 7, 237], toColor: [2, 29, 173] },
      ],
    },
    {
      id: "partialSpectrum1Diverging_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [135, 38, 38], toColor: [240, 149, 12] },
        { fromColor: [240, 149, 12], toColor: [255, 255, 191] },
        { fromColor: [255, 255, 191], toColor: [74, 80, 181] },
        { fromColor: [74, 80, 181], toColor: [39, 32, 122] },
      ],
    },
    {
      id: "partialSpectrum2Diverging_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [115, 77, 42], toColor: [201, 137, 52] },
        { fromColor: [201, 137, 52], toColor: [255, 255, 191] },
        { fromColor: [255, 255, 191], toColor: [91, 63, 176] },
        { fromColor: [91, 63, 176], toColor: [81, 13, 97] },
      ],
    },
    {
      id: "pinkToYellowGreenDivergingBright_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [158, 30, 113], toColor: [255, 255, 191] },
        { fromColor: [255, 255, 191], toColor: [99, 110, 45] },
      ],
    },
    {
      id: "pinkToYellowGreenDivergingDark_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [97, 47, 73], toColor: [204, 204, 102] },
        { fromColor: [204, 204, 102], toColor: [22, 59, 15] },
      ],
    },
    {
      id: "precipitation_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [194, 82, 60], toColor: [237, 161, 19] },
        { fromColor: [237, 161, 19], toColor: [255, 255, 0] },
        { fromColor: [255, 255, 0], toColor: [0, 219, 0] },
        { fromColor: [0, 219, 0], toColor: [32, 153, 143] },
        { fromColor: [32, 153, 143], toColor: [11, 44, 122] },
      ],
    },
    {
      id: "prediction_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [40, 146, 199], toColor: [250, 250, 100] },
        { fromColor: [250, 250, 100], toColor: [232, 16, 20] },
      ],
    },
    {
      id: "purpleBright_predefined",
      fromColor: [255, 204, 255],
      toColor: [199, 0, 199],
    },
    {
      id: "purpleToGreenDivergingBright_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [77, 32, 150], toColor: [255, 255, 191] },
        { fromColor: [255, 255, 191], toColor: [20, 122, 11] },
      ],
    },
    {
      id: "purpleToGreenDivergingDark_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [67, 14, 89], toColor: [204, 204, 102] },
        { fromColor: [204, 204, 102], toColor: [24, 79, 15] },
      ],
    },
    {
      id: "purpleBlueBright_predefined",
      fromColor: [223, 184, 230],
      toColor: [112, 12, 242],
    },
    {
      id: "purpleBlueLightToDark_predefined",
      fromColor: [229, 213, 242],
      toColor: [93, 44, 112],
    },
    {
      id: "purpleRedBright_predefined",
      fromColor: [255, 204, 225],
      toColor: [199, 0, 99],
    },
    {
      id: "purpleRedLightToDark_predefined",
      fromColor: [250, 215, 246],
      toColor: [143, 17, 57],
    },
    {
      id: "redBright_predefined",
      fromColor: [255, 204, 204],
      toColor: [219, 0, 0],
    },
    {
      id: "redLightToDark_predefined",
      fromColor: [255, 224, 224],
      toColor: [143, 10, 10],
    },
    {
      id: "redToBlueDivergingBright_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [196, 69, 57], toColor: [255, 255, 191] },
        { fromColor: [255, 255, 191], toColor: [48, 95, 207] },
      ],
    },
    {
      id: "redToBlueDivergingDark_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [107, 13, 13], toColor: [204, 204, 102] },
        { fromColor: [204, 204, 102], toColor: [13, 53, 97] },
      ],
    },
    {
      id: "redToGreen_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [245, 0, 0], toColor: [245, 245, 0] },
        { fromColor: [245, 245, 0], toColor: [0, 245, 0] },
      ],
    },
    {
      id: "redToGreenDivergingBright_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [186, 20, 20], toColor: [255, 255, 191] },
        { fromColor: [255, 255, 191], toColor: [54, 145, 33] },
      ],
    },
    {
      id: "redToGreenDivergingDark_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [97, 21, 13], toColor: [204, 204, 102] },
        { fromColor: [204, 204, 102], toColor: [16, 69, 16] },
      ],
    },
    {
      id: "slope_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [56, 168, 0], toColor: [255, 255, 0] },
        { fromColor: [255, 255, 0], toColor: [255, 0, 0] },
      ],
    },
    {
      id: "spectrumFullBright_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [255, 0, 0], toColor: [255, 255, 0] },
        { fromColor: [255, 255, 0], toColor: [0, 255, 255] },
        { fromColor: [0, 255, 255], toColor: [0, 0, 255] },
      ],
    },
    {
      id: "spectrumFullDark_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [153, 0, 0], toColor: [153, 153, 0] },
        { fromColor: [153, 153, 0], toColor: [0, 153, 153] },
        { fromColor: [0, 153, 153], toColor: [0, 0, 153] },
      ],
    },
    {
      id: "spectrumFullLight_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [255, 153, 153], toColor: [255, 255, 153] },
        { fromColor: [255, 255, 153], toColor: [153, 255, 255] },
        { fromColor: [153, 255, 255], toColor: [153, 153, 255] },
      ],
    },
    {
      id: "surface_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [112, 153, 89], toColor: [242, 238, 162] },
        { fromColor: [242, 238, 162], toColor: [242, 206, 133] },
        { fromColor: [242, 206, 133], toColor: [194, 140, 124] },
        { fromColor: [194, 140, 124], toColor: [255, 242, 255] },
      ],
    },
    {
      id: "temperature_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [255, 252, 255], toColor: [255, 0, 255] },
        { fromColor: [255, 0, 255], toColor: [0, 0, 255] },
        { fromColor: [0, 0, 255], toColor: [0, 255, 255] },
        { fromColor: [0, 255, 255], toColor: [0, 255, 0] },
        { fromColor: [0, 255, 0], toColor: [255, 255, 0] },
        { fromColor: [255, 255, 0], toColor: [255, 128, 0] },
        { fromColor: [255, 128, 0], toColor: [128, 0, 0] },
      ],
    },
    {
      id: "whiteToBlack_predefined",
      fromColor: [255, 255, 255],
      toColor: [0, 0, 0],
    },
    {
      id: "yellowToDarkRed_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [255, 255, 128], toColor: [242, 167, 46] },
        { fromColor: [242, 167, 46], toColor: [107, 0, 0] },
      ],
    },
    {
      id: "yellowToGreenToDarkBlue_predefined",
      type: "multipart",
      colorRamps: [
        { fromColor: [255, 255, 128], toColor: [56, 224, 9] },
        { fromColor: [56, 224, 9], toColor: [26, 147, 171] },
        { fromColor: [26, 147, 171], toColor: [12, 16, 120] },
      ],
    },
    {
      id: "yellowToRed_predefined",
      fromColor: [245, 245, 0],
      toColor: [255, 0, 0],
    },
    {
      id: "yellowGreenBright_predefined",
      fromColor: [236, 252, 204],
      toColor: [157, 204, 16],
    },
    {
      id: "yellowGreenLightToDark_predefined",
      fromColor: [215, 240, 175],
      toColor: [96, 107, 45],
    },
  ],
  jt = {
    aspect_predefined: "Aspect",
    blackToWhite_predefined: "Black to White",
    blueBright_predefined: "Blue Bright",
    blueLightToDark_predefined: "Blue Light to Dark",
    blueGreenBright_predefined: "Blue-Green Bright",
    blueGreenLightToDark_predefined: "Blue-Green Light to Dark",
    brownLightToDark_predefined: "Brown Light to Dark",
    brownToBlueGreenDivergingBright_predefined:
      "Brown to Blue Green Diverging, Bright",
    brownToBlueGreenDivergingDark_predefined:
      "Brown to Blue Green Diverging, Dark",
    coefficientBias_predefined: "Coefficient Bias",
    coldToHotDiverging_predefined: "Cold to Hot Diverging",
    conditionNumber_predefined: "Condition Number",
    cyanToPurple_predefined: "Cyan to Purple",
    cyanLightToBlueDark_predefined: "Cyan-Light to Blue-Dark",
    distance_predefined: "Distance",
    elevation1_predefined: "Elevation #1",
    elevation2_predefined: "Elevation #2",
    errors_predefined: "Errors",
    grayLightToDark_predefined: "Gray Light to Dark",
    greenBright_predefined: "Green Bright",
    greenLightToDark_predefined: "Green Light to Dark",
    greenToBlue_predefined: "Green to Blue",
    orangeBright_predefined: "Orange Bright",
    orangeLightToDark_predefined: "Orange Light to Dark",
    partialSpectrum_predefined: "Partial Spectrum",
    partialSpectrum1Diverging_predefined: "Partial Spectrum 1 Diverging",
    partialSpectrum2Diverging_predefined: "Partial Spectrum 2 Diverging",
    pinkToYellowGreenDivergingBright_predefined:
      "Pink to YellowGreen Diverging, Bright",
    pinkToYellowGreenDivergingDark_predefined:
      "Pink to YellowGreen Diverging, Dark",
    precipitation_predefined: "Precipitation",
    prediction_predefined: "Prediction",
    purpleBright_predefined: "Purple Bright",
    purpleToGreenDivergingBright_predefined:
      "Purple to Green Diverging, Bright",
    purpleToGreenDivergingDark_predefined: "Purple to Green Diverging, Dark",
    purpleBlueBright_predefined: "Purple-Blue Bright",
    purpleBlueLightToDark_predefined: "Purple-Blue Light to Dark",
    purpleRedBright_predefined: "Purple-Red Bright",
    purpleRedLightToDark_predefined: "Purple-Red Light to Dark",
    redBright_predefined: "Red Bright",
    redLightToDark_predefined: "Red Light to Dark",
    redToBlueDivergingBright_predefined: "Red to Blue Diverging, Bright",
    redToBlueDivergingDark_predefined: "Red to Blue Diverging, Dark",
    redToGreen_predefined: "Red to Green",
    redToGreenDivergingBright_predefined: "Red to Green Diverging, Bright",
    redToGreenDivergingDark_predefined: "Red to Green Diverging, Dark",
    slope_predefined: "Slope",
    spectrumFullBright_predefined: "Spectrum-Full Bright",
    spectrumFullDark_predefined: "Spectrum-Full Dark",
    spectrumFullLight_predefined: "Spectrum-Full Light",
    surface_predefined: "Surface",
    temperature_predefined: "Temperature",
    whiteToBlack_predefined: "White to Black",
    yellowToDarkRed_predefined: "Yellow to Dark Red",
    yellowToGreenToDarkBlue_predefined: "Yellow to Green to Dark Blue",
    yellowToRed_predefined: "Yellow to Red",
    yellowGreenBright_predefined: "Yellow-Green Bright",
    yellowGreenLightToDark_predefined: "Yellow-Green Light to Dark",
  },
  Ur = new Rt({
    Aspect: "aspect",
    "Black to White": "black-to-white",
    "Blue Bright": "blue-bright",
    "Blue Light to Dark": "blue-light-to-dark",
    "Blue-Green Bright": "blue-green-bright",
    "Blue-Green Light to Dark": "blue-green-light-to-dark",
    "Brown Light to Dark": "brown-light-to-dark",
    "Brown to Blue Green Diverging, Bright":
      "brown-to-blue-green-diverging-right",
    "Brown to Blue Green Diverging, Dark": "brown-to-blue-green-diverging-dark",
    "Coefficient Bias": "coefficient-bias",
    "Cold to Hot Diverging": "cold-to-hot-diverging",
    "Condition Number": "condition-number",
    "Cyan to Purple": "cyan-to-purple",
    "Cyan-Light to Blue-Dark": "cyan-light-to-blue-dark",
    Distance: "distance",
    "Elevation #1": "elevation1",
    "Elevation #2": "elevation2",
    Errors: "errors",
    "Gray Light to Dark": "gray-light-to-dark",
    "Green Bright": "green-bright",
    "Green Light to Dark": "green-light-to-dark",
    "Green to Blue": "green-to-blue",
    "Orange Bright": "orange-bright",
    "Orange Light to Dark": "orange-light-to-dark",
    "Partial Spectrum": "partial-spectrum",
    "Partial Spectrum 1 Diverging": "partial-spectrum-1-diverging",
    "Partial Spectrum 2 Diverging": "partial-spectrum-2-diverging",
    "Pink to YellowGreen Diverging, Bright":
      "pink-to-yellow-green-diverging-bright",
    "Pink to YellowGreen Diverging, Dark":
      "pink-to-yellow-green-diverging-dark",
    Precipitation: "precipitation",
    Prediction: "prediction",
    "urple Bright": "purple-bright",
    "Purple to Green Diverging, Bright": "purple-to-green-diverging-bright",
    "Purple to Green Diverging, Dark": "purple-to-green-diverging-dark",
    "Purple-Blue Bright": "purple-blue-bright",
    "Purple-Blue Light to Dark": "purple-blue-light-to-dark",
    "Purple-Red Bright": "purple-red-bright",
    "Purple-Red Light to Dark": "purple-red-light-to-dark",
    "Red Bright": "red-bright",
    "Red Light to Dark": "red-light-to-dark",
    "Red to Blue Diverging, Bright": "red-to-blue-diverging-bright",
    "Red to Blue Diverging, Dark": "red-to-blue-diverging-dark",
    "Red to Green": "red-to-green",
    "Red to Green Diverging, Bright": "red-to-green-diverging-bright",
    "Red to Green Diverging, Dark": "red-to-green-diverging-dark",
    Slope: "slope",
    "Spectrum-Full Bright": "spectrum-full-bright",
    "Spectrum-Full Dark": "spectrum-full-dark",
    "Spectrum-Full Light": "spectrum-full-light",
    Surface: "surface",
    Temperature: "temperature",
    "White to Black": "white-to-black",
    "Yellow to Dark Red": "yellow-to-dark-red",
    "Yellow to Green to Dark Blue": "yellow-to-green-to-dark-blue",
    "Yellow to Red": "yellow-to-red",
    "Yellow-Green Bright": "yellow-green-bright",
    "Yellow-Green Light to Dark": "yellow-green-light-to-dark",
  });
function Pe(e, t) {
  if (!e || !t || e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++)
    if (e[r] > t[r] + 2 || e[r] < t[r] - 2) return !1;
  return !0;
}
function Nr(e) {
  const t = (function (r, h) {
    if (!r) return;
    const d = h || zt;
    let l = null;
    return (
      r.type === "algorithmic"
        ? d.some((u) => {
            if (
              Pe(r.fromColor.toRgb(), u.fromColor) &&
              Pe(r.toColor.toRgb(), u.toColor)
            )
              return (l = u.id), !0;
          })
        : r.type === "multipart" &&
          d.some((u) => {
            const o = r.colorRamps,
              a = u.colorRamps;
            if (
              o &&
              a &&
              o.length === a.length &&
              !a.some((s, n) => {
                if (
                  !Pe(o[n].fromColor.toRgb(), new st(s.fromColor).toRgb()) ||
                  !Pe(o[n].toColor.toRgb(), new st(s.toColor).toRgb())
                )
                  return !0;
              })
            ) {
              if (l) return !0;
              l = u.id;
            }
          }),
      l
    );
  })(e);
  return t ? jt[t] : null;
}
function to(e) {
  var d;
  const t = Ur.toJSON(e),
    r =
      (d = Object.entries(jt).find((l) => l[1] === t)) == null ? void 0 : d[0],
    h = zt.find((l) => l.id === r);
  return h
    ? h.colorRamps
      ? {
          type: "multipart",
          colorRamps: h.colorRamps.map((l) => ({
            type: "algorithmic",
            algorithm: "esriCIELabAlgorithm",
            fromColor: l.fromColor,
            toColor: l.toColor,
          })),
        }
      : {
          type: "algorithmic",
          algorithm: "esriCIELabAlgorithm",
          fromColor: h.fromColor,
          toColor: h.toColor,
        }
    : null;
}
function Ht(e) {
  const t = (e = e || {}).numColors || 256,
    r = e.distanceOffset || 0,
    h =
      e.isCustomInterval != null
        ? e.isCustomInterval
        : e.distanceInterval !== null && e.distanceInterval !== 1 / (t - 1),
    d = e.distanceInterval || 1 / (t - 1);
  return {
    ...e,
    numColors: t,
    distanceOffset: r,
    interpolateAlpha: !!e.interpolateAlpha,
    distanceInterval: d,
    isCustomInterval: h,
    weights: e.weights,
  };
}
function kt(e, t) {
  let { fromColor: r, toColor: h } = e;
  r.length === 3 && (r = r.concat([255])),
    h.length === 3 && (h = h.concat([255]));
  const d = e.algorithm || "esriCIELabAlgorithm",
    l = Ht(t),
    {
      numColors: u,
      distanceOffset: o,
      isCustomInterval: a,
      interpolateAlpha: s,
    } = l;
  if (u === 1 && o === 0) return [r];
  if (u === 2 && o === 0 && !a) return [r, h];
  const n = { r: r[0], g: r[1], b: r[2] },
    m = { r: h[0], g: h[1], b: h[2] },
    T =
      d === "esriCIELabAlgorithm"
        ? (function (g, i, f) {
            const {
              numColors: p,
              distanceOffset: b,
              distanceInterval: c,
              isCustomInterval: w,
            } = f;
            let { l: S, a: k, b: E } = g;
            const R = (i.l - S) * c,
              P = (i.a - k) * c,
              I = (i.b - E) * c,
              x = [];
            if (b) {
              const A = b / c;
              (S += A * R), (k += A * P), (E += A * I);
            }
            for (let A = 0; A < p - 1; A++)
              x.push({ l: S, a: k, b: E }), (S += R), (k += P), (E += I);
            return x.push(w ? { l: S, a: k, b: E } : i), x;
          })(ft(n), ft(m), l)
        : d === "esriHSVAlgorithm"
        ? (function (g, i, f) {
            const {
                numColors: p,
                distanceOffset: b,
                distanceInterval: c,
                isCustomInterval: w,
              } = f,
              S = g.s === 0,
              k = i.s === 0;
            let E = g.h,
              R = i.h;
            S && !k ? (E = R) : k && !S && ((i = { ...i, h: E }), (R = E));
            let P,
              I = Math.abs(R - E);
            const x = 360;
            I < 180
              ? (P = (R - E) * c)
              : ((I = x - I), (P = E > R ? I * c : -I * c));
            const A = (i.s - g.s) * c,
              O = (i.v - g.v) * c;
            let { s: M, v: B } = g,
              _ = E;
            if (b) {
              const D = b / c;
              (_ = (_ + D * P + x) % x), (M += D * A), (B += D * O);
            }
            const L = [];
            for (let D = 0; D < p - 1; D++)
              L.push({ h: _, s: M, v: B }),
                (_ = (_ + P + x) % x),
                (M += A),
                (B += O);
            return L.push(w ? { h: _, s: M, v: B } : i), L;
          })(Le(n), Le(m), l)
        : (function (g, i, f) {
            const {
                numColors: p,
                distanceOffset: b,
                distanceInterval: c,
                isCustomInterval: w,
              } = f,
              S = g.h,
              k = i.h,
              E = 2 * Math.PI;
            let R;
            if (S <= k) {
              const _ = k - S,
                L = k - S - E;
              R = Math.abs(L) < Math.abs(_) ? L : _;
            } else {
              const _ = k + E - S,
                L = k - S;
              R = Math.abs(L) < Math.abs(_) ? L : _;
            }
            const P = R * c,
              I = (i.l - g.l) * c,
              x = (i.c - g.c) * c;
            let { l: A, c: O, h: M } = g;
            if (b) {
              const _ = b / c;
              (A += _ * I), (O += _ * x), (M = (M + _ * P + E) % E);
            }
            const B = [];
            for (let _ = 0; _ < p - 1; _++)
              B.push({ l: A, c: O, h: M }),
                (A += I),
                (O += x),
                (M = (M + P + E) % E);
            return B.push(w ? { l: A, c: O, h: M } : i), B;
          })(ht(n), ht(m), l),
    C = [],
    v = r[3] ?? 255,
    y = ((h[3] ?? 255) - v) / (u - 1);
  for (let g = 0; g < u; g++) {
    const { r: i, g: f, b: p } = ir(T[g]),
      b = s ? Math.round(v + y * g) : 255;
    C.push([i, f, p, b]);
  }
  return C;
}
function Fr(e, t) {
  const r = "toJSON" in e ? e.toJSON() : e;
  return r.type === "multipart"
    ? (function (h, d) {
        const { numColors: l, interpolateAlpha: u } = Ht(d);
        let o = d == null ? void 0 : d.weights;
        const { colorRamps: a } = h;
        if (o) {
          const y = o.reduce((g, i) => g + i);
          o = o.map((g) => g / y);
        } else {
          o = [];
          for (let y = 0; y < a.length; y++) o[y] = 1 / a.length;
        }
        const s = [];
        let n = 0,
          m = 0;
        const T = 1 / (l - 1);
        let C = !1;
        for (let y = 0; y < a.length; y++) {
          let g = C ? 0 : n * T - m,
            i = y === a.length - 1 ? l - 1 - n : (o[y] - g) / T;
          if (((C = Math.ceil(i) === i), (i = Math.ceil(i)), i === 0)) continue;
          g /= o[y];
          const f = kt(a[y], {
            numColors: i,
            interpolateAlpha: u,
            distanceOffset: g,
            distanceInterval: T / o[y],
          });
          (n += f.length), s.push(...f), (m += o[y]);
        }
        const v = [...a[a.length - 1].toColor];
        return v.length === 3 && v.push(255), s.push(v), s;
      })(r, t)
    : kt(r, t);
}
function It(e, t) {
  const r = Fr(e, t),
    h = t == null ? void 0 : t.interpolateAlpha;
  return (
    r.forEach((d, l) => {
      d.unshift(l), h || d.pop();
    }),
    r
  );
}
function ro(e) {
  const t = Nr(e);
  if (e) {
    if (e.type === "algorithmic") return { ...xt(e), Name: t };
    if (e.colorRamps) {
      const r = e.colorRamps.map(xt);
      return {
        type: "MultiPartColorRamp",
        NumColorRamps: r.length,
        ArrayOfColorRamp: r,
        Name: t,
      };
    }
  }
}
function xt(e) {
  var t;
  if (e)
    return {
      Algorithm:
        ((t = e.toJSON()) == null ? void 0 : t.Algorithm) || "esriHSVAlgorithm",
      type: "AlgorithmicColorRamp",
      FromColor: At(e.fromColor),
      ToColor: At(e.toColor),
    };
}
function At(e) {
  const t = Le(e);
  return {
    type: "HsvColor",
    Hue: t.h,
    Saturation: t.s,
    Value: t.v,
    AlphaValue: 255,
  };
}
function oo(e) {
  const t = e.reverse().map((r) => {
    const h = r.toString(16);
    return h.length < 2 ? "0" + h : h;
  });
  return 4294967295 & Number.parseInt(t.join(""), 16);
}
const no = new Rt({
    none: "none",
    standardDeviation: "standard-deviation",
    histogramEqualization: "histogram-equalization",
    minMax: "min-max",
    percentClip: "percent-clip",
    sigmoid: "sigmoid",
  }),
  Vr = {
    0: "none",
    3: "standardDeviation",
    4: "histogramEqualization",
    5: "minMax",
    6: "percentClip",
    9: "sigmoid",
  },
  Ve = 1,
  zr = [0.299, 0.587, 0.114];
function Wt(e, t = 256) {
  t = Math.min(t, 256);
  const { size: r, counts: h } = e,
    d = new Uint8Array(r),
    l = h.reduce((n, m) => n + m / t, 0);
  let u = 0,
    o = 0,
    a = 0,
    s = l;
  for (let n = 0; n < r; n++)
    if (((a += h[n]), !(n < r - 1 && a + h[n + 1] < s))) {
      for (; u < t - 1 && s < a; ) u++, (s += l);
      for (let m = o; m <= n; m++) d[m] = u;
      o = n + 1;
    }
  for (let n = o; n < r; n++) d[n] = t - 1;
  return d;
}
function Et(e) {
  const { minCutOff: t, maxCutOff: r, gamma: h, pixelType: d, rounding: l } = e,
    u = e.outMin || 0,
    o = e.outMax || 255;
  if (!["u8", "u16", "s8", "s16"].includes(d)) return null;
  const a = t.length;
  let s,
    n,
    m = 0;
  d === "s8" ? (m = -127) : d === "s16" && (m = -32767);
  let T = 256;
  ["u16", "s16"].includes(d) && (T = 65536);
  const C = [],
    v = [],
    y = o - u;
  for (s = 0; s < a; s++)
    (v[s] = r[s] - t[s]), (C[s] = v[s] === 0 ? 0 : y / v[s]);
  let g;
  const i = [];
  let f, p, b;
  if (h && h.length >= a) {
    const c = Yt(a, h);
    for (s = 0; s < a; s++) {
      for (b = [], n = 0; n < T; n++)
        if (v[s] !== 0)
          if (
            ((f = n + m),
            (g = (f - t[s]) / v[s]),
            (p = 1),
            h[s] > 1 && (p -= (1 / y) ** (g * c[s])),
            f < r[s] && f > t[s])
          ) {
            const w = p * y * g ** (1 / h[s]) + u;
            b[n] =
              l === "floor" ? Math.floor(w) : l === "round" ? Math.round(w) : w;
          } else f >= r[s] ? (b[n] = o) : (b[n] = u);
        else b[n] = u;
      i[s] = b;
    }
  } else
    for (s = 0; s < a; s++) {
      for (b = [], n = 0; n < T; n++)
        if (((f = n + m), f <= t[s])) b[n] = u;
        else if (f >= r[s]) b[n] = o;
        else {
          const c = (f - t[s]) * C[s] + u;
          b[n] =
            l === "floor" ? Math.floor(c) : l === "round" ? Math.round(c) : c;
        }
      i[s] = b;
    }
  if (e.contrastOffset != null) {
    const c = (function (w, S) {
      const k = Math.min(Math.max(w, -100), 100),
        E = Math.min(Math.max(S ?? 0, -100), 100),
        R = 255,
        P = 128;
      let I = 0,
        x = 0;
      const A = new Uint8Array(256);
      for (I = 0; I < 256; I++)
        k > 0 && k < 100
          ? (x = (200 * I - 100 * R + 2 * R * E) / (2 * (100 - k)) + P)
          : k <= 0 && k > -100
          ? (x = ((200 * I - 100 * R + 2 * R * E) * (100 + k)) / 2e4 + P)
          : k === 100
          ? ((x = 200 * I - 100 * R + (R + 1) * (100 - k) + 2 * R * E),
            (x = x > 0 ? R : 0))
          : k === -100 && (x = P),
          (A[I] = x > R ? R : x < 0 ? 0 : x);
      return A;
    })(e.contrastOffset, e.brightnessOffset);
    for (s = 0; s < a; s++) for (b = i[s], n = 0; n < T; n++) b[n] = c[b[n]];
  }
  return { lut: i, offset: m };
}
function jr(e, t, r) {
  const h = [];
  for (let d = 0; d < t.length; d++) {
    let l = 0,
      u = 0,
      o = 0;
    "min" in t[d] ? ({ min: l, max: u, avg: o } = t[d]) : ([l, u, o] = t[d]);
    let a = o ?? 0;
    e !== "u8" && (a = (255 * (a - l)) / (u - l)),
      r && (a *= zr[d]),
      h.push(Hr(a));
  }
  return h;
}
function Hr(e) {
  if (e <= 0 || e >= 255) return Ve;
  let t = 0;
  e !== 150 &&
    (t = e <= 150 ? 45 * Math.cos(0.01047 * e) : 17 * Math.sin(0.021 * e));
  const r = e + t,
    h = Math.log(e / 255),
    d = Math.log(r / 255);
  if (d === 0) return Ve;
  const l = h / d;
  return isNaN(l) ? Ve : Math.min(9.9, Math.max(0.01, l));
}
function Wr(e) {
  var k;
  if (Oe(e) || !((k = e.pixels) != null && k.length)) return null;
  const { pixels: t, mask: r, pixelType: h } = e,
    d = e.width * e.height,
    l = t.length;
  let u, o, a, s, n;
  const m = [],
    T = [];
  let C, v, y, g, i, f, p, b, c, w;
  const S = 256;
  for (s = 0; s < l; s++) {
    if (((C = new Uint32Array(S)), (y = t[s]), h === "u8"))
      if (((u = -0.5), (o = 255.5), r))
        for (n = 0; n < d; n++) r[n] && C[y[n]]++;
      else for (n = 0; n < d; n++) C[y[n]]++;
    else {
      let E = !1;
      e.statistics || (e.updateStatistics(), (E = !0));
      const R = e.statistics;
      if (
        ((u = R[s].minValue), (o = R[s].maxValue), (a = (o - u) / S), a === 0)
      ) {
        !R || e.validPixelCount || E || e.updateStatistics();
        const P = (e.validPixelCount || e.width * e.height) / S;
        for (let I = 0; I < S; I++)
          C[I] = Math.round(P * (I + 1)) - Math.round(P * I);
      } else {
        for (v = new Uint32Array(257), n = 0; n < d; n++)
          (r && !r[n]) || v[Math.floor((y[n] - u) / a)]++;
        for (n = 0; n < 255; n++) C[n] = v[n];
        C[255] = v[255] + v[S];
      }
    }
    for (
      m.push({ min: u, max: o, size: S, counts: C }),
        g = 0,
        i = 0,
        b = 0,
        n = 0;
      n < S;
      n++
    )
      (g += C[n]), (i += n * C[n]);
    for (c = i / g, n = 0; n < S; n++) b += C[n] * (n - c) ** 2;
    (w = Math.sqrt(b / (g - 1))),
      (a = (o - u) / S),
      (f = (c + 0.5) * a + u),
      (p = w * a),
      T.push({ min: u, max: o, avg: f, stddev: p });
  }
  return { statistics: T, histograms: m };
}
function io(e) {
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const { min: h, max: d, size: l, counts: u } = e[r];
    let o = 0,
      a = 0;
    for (let v = 0; v < l; v++) (o += u[v]), (a += v * u[v]);
    const s = a / o;
    let n = 0;
    for (let v = 0; v < l; v++) n += u[v] * (v - s) ** 2;
    const m = (d - h) / l,
      T = (s + 0.5) * m + h,
      C = Math.sqrt(n / (o - 1)) * m;
    t.push({ min: h, max: d, avg: T, stddev: C });
  }
  return t;
}
function xe(e, t) {
  var R;
  const { pixelBlock: r, bandIds: h, returnHistogramLut: d, rasterInfo: l } = t;
  let u = null,
    o = null,
    a = e.stretchType;
  if ((typeof a == "number" && (a = Vr[a]), e.dra))
    if (a === "minMax" && X(r) && r.statistics)
      u = r.statistics.map((P) => [P.minValue, P.maxValue, 0, 0]);
    else {
      const P = Wr(r);
      (u = X(P) ? P.statistics : null), (o = X(P) ? P.histograms : null);
    }
  else
    (u =
      ((R = e.statistics) == null ? void 0 : R.length) > 0
        ? e.statistics
        : Ce(l.statistics)),
      (o = e.histograms || Ce(l.histograms));
  (a !== "percentClip" && a !== "histogramEqualization") ||
    (o != null && o.length) ||
    (a = "minMax");
  const s =
      (u == null ? void 0 : u.length) ||
      (o == null ? void 0 : o.length) ||
      l.bandCount,
    n = [],
    m = [];
  let T, C, v, y, g, i, f, p, b;
  u &&
    !Array.isArray(u[0]) &&
    (u = u.map((P) => [P.min, P.max, P.avg, P.stddev]));
  const [c, w] = rr(l.pixelType);
  if (!(u != null && u.length)) {
    for (u = [], p = 0; p < s; p++) u.push([c, w, 1, 1]);
    a === "standardDeviation" && (a = "minMax");
  }
  switch (a) {
    case "none":
      for (p = 0; p < s; p++) (n[p] = c), (m[p] = w);
      break;
    case "minMax":
      for (p = 0; p < s; p++) (n[p] = u[p][0]), (m[p] = u[p][1]);
      break;
    case "standardDeviation":
      for (p = 0; p < s; p++)
        (n[p] = u[p][2] - e.numberOfStandardDeviations * u[p][3]),
          (m[p] = u[p][2] + e.numberOfStandardDeviations * u[p][3]),
          n[p] < u[p][0] && (n[p] = u[p][0]),
          m[p] > u[p][1] && (m[p] = u[p][1]);
      break;
    case "histogramEqualization":
      for (Re(o), p = 0; p < s; p++) (n[p] = o[p].min), (m[p] = o[p].max);
      break;
    case "percentClip":
      for (Re(o), p = 0; p < o.length; p++) {
        for (
          T = o[p],
            g = new Uint32Array(T.size),
            y = [...T.counts],
            y.length >= 20 &&
              (y[0] = y[1] = y[2] = y[y.length - 1] = y[y.length - 2] = 0),
            v = 0,
            C = (T.max - T.min) / T.size,
            f = T.min === -0.5 && C === 1 ? 0.5 : 0,
            b = 0;
          b < T.size;
          b++
        )
          (v += y[b]), (g[b] = v);
        for (
          i = ((e.minPercent || 0) * v) / 100, n[p] = T.min + f, b = 0;
          b < T.size;
          b++
        )
          if (g[b] > i) {
            n[p] = T.min + C * (b + f);
            break;
          }
        for (
          i = (1 - (e.maxPercent || 0) / 100) * v,
            m[p] = T.max + f,
            b = T.size - 2;
          b >= 0;
          b--
        )
          if (g[b] < i) {
            m[p] = T.min + C * (b + 2 - f);
            break;
          }
        if (m[p] < n[p]) {
          const P = n[p];
          (n[p] = m[p]), (m[p] = P);
        }
      }
      break;
    default:
      for (p = 0; p < s; p++) (n[p] = u[p][0]), (m[p] = u[p][1]);
  }
  let S, k, E;
  return (
    a === "histogramEqualization"
      ? (Re(o), (k = o[0].size || 256), (S = 0), d && (E = o.map((P) => Wt(P))))
      : ((k = e.max || 255), (S = e.min || 0)),
    (function (P, I) {
      if (I == null || I.length === 0) return P;
      const x = Math.max.apply(null, I),
        {
          minCutOff: A,
          maxCutOff: O,
          outMin: M,
          outMax: B,
          histogramLut: _,
        } = P;
      return A.length === I.length || A.length <= x
        ? P
        : {
            minCutOff: I.map((L) => A[L]),
            maxCutOff: I.map((L) => O[L]),
            histogramLut: _ ? I.map((L) => _[L]) : null,
            outMin: M,
            outMax: B,
          };
    })({ minCutOff: n, maxCutOff: m, outMax: k, outMin: S, histogramLut: E }, h)
  );
}
function Yt(e, t) {
  const r = new Float32Array(e);
  for (let h = 0; h < e; h++)
    t[h] > 1
      ? t[h] > 2
        ? (r[h] = 6.5 + (t[h] - 2) ** 2.5)
        : (r[h] = 6.5 + 100 * (2 - t[h]) ** 4)
      : (r[h] = 1);
  return r;
}
function ze(e, t) {
  var P;
  if (Oe(e) || !((P = e.pixels) != null && P.length)) return e;
  const { mask: r, width: h, height: d, pixels: l } = e,
    { minCutOff: u, maxCutOff: o, gamma: a } = t,
    s = t.outMin || 0,
    n = t.outMax || 255,
    m = h * d,
    T = t.outputPixelType || "u8",
    C = e.pixels.map(() => se.createEmptyBand(T, m)),
    v = C.length;
  let y, g, i, f, p;
  const b = n - s,
    c = [],
    w = [];
  for (y = 0; y < v; y++)
    (w[y] = o[y] - u[y]), (c[y] = w[y] === 0 ? 0 : b / w[y]);
  const S = T.startsWith("u") || T.startsWith("s"),
    k = a && a.length >= v,
    E = !!t.isRenderer;
  if (k) {
    const I = Yt(v, a);
    for (g = 0; g < m; g++)
      if (r == null || r[g])
        for (y = 0; y < v; y++)
          if (w[y] !== 0)
            if (
              ((i = l[y][g]),
              (p = (i - u[y]) / w[y]),
              (f = 1),
              a[y] > 1 && (f -= (1 / b) ** (p * I[y])),
              i < o[y] && i > u[y])
            ) {
              const x = f * b * p ** (1 / a[y]) + s;
              C[y][g] = E ? Math.floor(x) : S ? Math.round(x) : x;
            } else i >= o[y] ? (C[y][g] = n) : (C[y][g] = s);
          else C[y][g] = s;
  } else
    for (g = 0; g < m; g++)
      if (r == null || r[g])
        for (y = 0; y < v; y++)
          if (((i = l[y][g]), i < o[y] && i > u[y])) {
            const I = (i - u[y]) * c[y] + s;
            C[y][g] = E ? Math.floor(I) : S ? Math.round(I) : I;
          } else i >= o[y] ? (C[y][g] = n) : (C[y][g] = s);
  const R = new se({ width: h, height: d, mask: r, pixels: C, pixelType: T });
  return R.updateStatistics(), R;
}
let ye = class extends Qe {
  constructor(e) {
    super(e);
  }
  bind() {
    const { rendererJSON: e } = this;
    if (!e) return { success: !1 };
    let t;
    switch (((this.lookup = { rendererJSON: {} }), e.type)) {
      case "uniqueValue":
        t = this._updateUVRenderer(e);
        break;
      case "rasterColormap":
        t = this._updateColormapRenderer(e);
        break;
      case "rasterStretch":
        t = this._updateStretchRenderer(e);
        break;
      case "classBreaks":
        t = this._updateClassBreaksRenderer(e);
        break;
      case "rasterShadedRelief":
        t = this._updateShadedReliefRenderer(e);
        break;
      case "vectorField":
        t = this._updateVectorFieldRenderer();
        break;
      case "flowRenderer":
        t = this._updateFlowRenderer();
    }
    return t;
  }
  symbolize(e) {
    let t = e && e.pixelBlock;
    if (!Pt(t)) return t;
    if (e.simpleStretchParams && this.rendererJSON.type === "rasterStretch")
      return this.simpleStretch(t, e.simpleStretchParams);
    try {
      let r;
      switch (
        (t.pixels.length > 3 && (t = ut(t, [0, 1, 2])), this.rendererJSON.type)
      ) {
        case "uniqueValue":
        case "rasterColormap":
          r = this._symbolizeColormap(t);
          break;
        case "classBreaks":
          r = this._symbolizeClassBreaks(t);
          break;
        case "rasterStretch":
          r = this._symbolizeStretch(t, e.bandIds);
          break;
        case "rasterShadedRelief": {
          const h = e.extent,
            d = h.spatialReference.isGeographic,
            l = {
              x: (h.xmax - h.xmin) / t.width,
              y: (h.ymax - h.ymin) / t.height,
            };
          r = this._symbolizeShadedRelief(t, { isGCS: d, resolution: l });
          break;
        }
      }
      return r;
    } catch (r) {
      return lt.getLogger(this.declaredClass).error("symbolize", r.message), t;
    }
  }
  simpleStretch(e, t) {
    if (!Pt(e)) return e;
    try {
      return (
        e.pixels.length > 3 && (e = ut(e, [0, 1, 2])),
        ze(e, { ...t, isRenderer: !0 })
      );
    } catch (r) {
      return lt.getLogger(this.declaredClass).error("symbolize", r.message), e;
    }
  }
  generateWebGLParameters(e) {
    if (
      ["uniqueValue", "rasterColormap", "classBreaks"].includes(
        this.rendererJSON.type
      )
    ) {
      const { indexedColormap: u, offset: o } = this.lookup.colormapLut || {};
      return { colormap: u, colormapOffset: o, type: "lut" };
    }
    const { pixelBlock: t, isGCS: r, resolution: h, bandIds: d } = e,
      { rendererJSON: l } = this;
    return l.type === "rasterStretch"
      ? this._generateStretchWebGLParams(t, l, d)
      : l.type === "rasterShadedRelief"
      ? this._generateShadedReliefWebGLParams(l, r, h ?? void 0)
      : l.type === "vectorField"
      ? this._generateVectorFieldWebGLParams(l)
      : null;
  }
  _isLUTChanged(e) {
    if (!this.lookup || !this.lookup.rendererJSON) return !0;
    if ("colorRamp" in this.rendererJSON) {
      const t = this.rendererJSON.colorRamp;
      return e
        ? JSON.stringify(t) !==
            JSON.stringify(this.lookup.rendererJSON.colorRamp)
        : (this.rendererJSON,
          this.lookup.rendererJSON,
          JSON.stringify(this.rendererJSON) !==
            JSON.stringify(this.lookup.rendererJSON));
    }
    return (
      JSON.stringify(this.rendererJSON) !==
      JSON.stringify(this.lookup.rendererJSON)
    );
  }
  _symbolizeColormap(e) {
    return this._isLUTChanged() && !this.bind().success
      ? e
      : _e(e, this.lookup.colormapLut);
  }
  _symbolizeClassBreaks(e) {
    const { canUseIndexedLUT: t } = this._analyzeClassBreaks(this.rendererJSON);
    return this._isLUTChanged() && !this.bind().success
      ? e
      : t
      ? _e(e, this.lookup.colormapLut)
      : or(e, this.lookup.remapLut ?? []);
  }
  _symbolizeStretch(e, t) {
    var m, T, C;
    const { rasterInfo: r } = this,
      { pixelType: h, bandCount: d } = r,
      l = this.rendererJSON,
      u = ["u8", "u16", "s8", "s16"].includes(h);
    let o, a;
    const { dra: s } = l,
      { gamma: n } = this.lookup;
    if (l.stretchType === "histogramEqualization") {
      const v = s ? null : (m = this.lookup) == null ? void 0 : m.histogramLut,
        y = xe(l, {
          rasterInfo: r,
          pixelBlock: e,
          bandIds: t,
          returnHistogramLut: !v,
        }),
        g = ze(e, { ...y, gamma: n, isRenderer: !0 });
      a = ct(g, { lut: s ? y.histogramLut : v, offset: 0 });
    } else if (u) {
      if (s) {
        const v = xe(l, { rasterInfo: r, pixelBlock: e, bandIds: t });
        o = Et({ pixelType: h, ...v, gamma: n, rounding: "floor" });
      } else if (this._isLUTChanged()) {
        if (!this.bind().success) return e;
        o = this.lookup ? this.lookup.stretchLut : null;
      } else o = this.lookup ? this.lookup.stretchLut : null;
      if (!o) return e;
      d > 1 &&
        (t == null ? void 0 : t.length) ===
          ((T = Ce(e)) == null ? void 0 : T.pixels.length) &&
        (o == null ? void 0 : o.lut.length) === d &&
        (o = { lut: t.map((v) => o.lut[v]), offset: o.offset }),
        (a = ct(e, o));
    } else
      a = ze(e, {
        ...xe(l, { rasterInfo: r, pixelBlock: e, bandIds: t }),
        gamma: n,
        isRenderer: !0,
      });
    if (l.colorRamp) {
      if (this._isLUTChanged(!0) && !this.bind().success) return e;
      a = _e(a, (C = this.lookup) == null ? void 0 : C.colormapLut);
    }
    return a;
  }
  _symbolizeShadedRelief(e, t) {
    var l;
    const r = this.rendererJSON,
      h = (function (u, o) {
        if (!Se(u)) return u;
        const { width: a, height: s, mask: n } = u,
          m = new Uint8Array(a * s);
        let T = 1;
        if (X(n)) {
          for (let L = 0; L < n.length; L++)
            if (n[L]) {
              T = n[L];
              break;
            }
          m.set(n);
        }
        const {
            factor: C,
            sinZcosA: v,
            sinZsinA: y,
            cosZ: g,
            sinZcosAs: i,
            sinZsinAs: f,
            cosZs: p,
            weights: b,
          } = vt(o),
          [c, w] = C,
          { hillshadeType: S } = o,
          k = u.pixels[0],
          E = new Uint8Array(a * s);
        let R, P, I, x, A, O, M, B;
        const _ = X(n);
        for (let L = 1; L < s - 1; L++) {
          const D = L * a;
          for (let G = 1; G < a - 1; G++) {
            if (n && !n[D + G]) {
              E[D + G] = 0;
              continue;
            }
            let F = 8;
            if (
              _ &&
              ((F =
                (n[D - a + G - 1] +
                  n[D - a + G] +
                  n[D - a + G + 1] +
                  n[D + G - 1] +
                  n[D + G + 1] +
                  n[D + a + G - 1] +
                  n[D + a + G] +
                  n[D + a + G + 1]) /
                T),
              F < 7)
            ) {
              (E[D + G] = 0), (m[D + G] = 0);
              continue;
            }
            n && F === 7
              ? ((R = n[D - a + G - 1] ? k[D - a + G - 1] : k[D + G]),
                (P = n[D - a + G] ? k[D - a + G] : k[D + G]),
                (I = n[D - a + G + 1] ? k[D - a + G + 1] : k[D + G]),
                (x = n[D + G - 1] ? k[D + G - 1] : k[D + G]),
                (A = n[D + G + 1] ? k[D + G + 1] : k[D + G]),
                (O = n[D + a + G - 1] ? k[D + a + G - 1] : k[D + G]),
                (M = n[D + a + G] ? k[D + a + G] : k[D + G]),
                (B = n[D + a + G + 1] ? k[D + a + G + 1] : k[D + G]))
              : ((R = k[D - a + G - 1]),
                (P = k[D - a + G]),
                (I = k[D - a + G + 1]),
                (x = k[D + G - 1]),
                (A = k[D + G + 1]),
                (O = k[D + a + G - 1]),
                (M = k[D + a + G]),
                (B = k[D + a + G + 1]));
            const U = (I + A + A + B - (R + x + x + O)) * c,
              N = (O + M + M + B - (R + P + P + I)) * w,
              Y = Math.sqrt(1 + U * U + N * N);
            let ee = 0;
            if (S === "traditional") {
              let J = (255 * (g + y * N - v * U)) / Y;
              J < 0 && (J = 0), (ee = J);
            } else {
              const J = f.length;
              for (let re = 0; re < J; re++) {
                let le = (255 * (p[re] + f[re] * N - i[re] * U)) / Y;
                le < 0 && (le = 0), (ee += le * b[re]);
              }
            }
            E[D + G] = 255 & ee;
          }
        }
        for (let L = 0; L < s; L++)
          (E[L * a] = E[L * a + 1]), (E[(L + 1) * a - 1] = E[(L + 1) * a - 2]);
        for (let L = 1; L < a - 1; L++)
          (E[L] = E[L + a]), (E[L + (s - 1) * a] = E[L + (s - 2) * a]);
        return new se({
          width: a,
          height: s,
          pixels: [E],
          mask: n ? m : null,
          pixelType: "u8",
          validPixelCount: u.validPixelCount,
          statistics: [{ minValue: 0, maxValue: 255 }],
        });
      })(e, { ...r, ...t });
    if (!r.colorRamp) return h;
    let d;
    if (this._isLUTChanged(!0)) {
      if (!this.bind().success) return h;
      d = this.lookup ? this.lookup.hsvMap : null;
    } else d = this.lookup ? this.lookup.hsvMap : null;
    return (
      d &&
        (function (u, o, a, s) {
          if (!Se(u) || !Se(o)) return;
          const { min: n, max: m } = s,
            T = u.pixels[0],
            { pixels: C, mask: v } = o,
            y = C[0],
            g = 255.00001 / (m - n),
            i = new Uint8ClampedArray(y.length),
            f = new Uint8ClampedArray(y.length),
            p = new Uint8ClampedArray(y.length),
            b = a.length - 1;
          for (let c = 0; c < y.length; c++) {
            if (v && v[c] === 0) continue;
            const w = Math.floor((y[c] - n) * g),
              [S, k] = a[w < 0 ? 0 : w > b ? b : w],
              E = T[c],
              R = E * k,
              P = R * (1 - Math.abs((S % 2) - 1)),
              I = E - R;
            switch (Math.floor(S)) {
              case 0:
                (i[c] = R + I), (f[c] = P + I), (p[c] = I);
                break;
              case 1:
                (i[c] = P + I), (f[c] = R + I), (p[c] = I);
                break;
              case 2:
                (i[c] = I), (f[c] = R + I), (p[c] = P + I);
                break;
              case 3:
                (i[c] = I), (f[c] = P + I), (p[c] = R + I);
                break;
              case 4:
                (i[c] = P + I), (f[c] = I), (p[c] = R + I);
                break;
              case 5:
              case 6:
                (i[c] = R + I), (f[c] = I), (p[c] = P + I);
            }
          }
          (u.pixels = [i, f, p]), u.updateStatistics();
        })(
          h,
          e,
          d,
          ((l = Ce(this.rasterInfo.statistics)) == null ? void 0 : l[0]) ?? {
            min: 0,
            max: 8e3,
          }
        ),
      h
    );
  }
  _isVectorFieldData() {
    const { bandCount: e, dataType: t } = this.rasterInfo;
    return e === 2 && (t === "vector-magdir" || t === "vector-uv");
  }
  _updateVectorFieldRenderer() {
    return this._isVectorFieldData()
      ? { success: !0 }
      : {
          success: !1,
          error: `Unsupported data type "${this.rasterInfo.dataType}"; VectorFieldRenderer only supports "vector-magdir" and "vector-uv".`,
        };
  }
  _updateFlowRenderer() {
    return this._isVectorFieldData()
      ? { success: !0 }
      : {
          success: !1,
          error: `Unsupported data type "${this.rasterInfo.dataType}"; FlowRenderer only supports "vector-magdir" and "vector-uv".`,
        };
  }
  _updateUVRenderer(e) {
    var s;
    const { bandCount: t, attributeTable: r, pixelType: h } = this.rasterInfo,
      d = e.field1;
    if (!d)
      return {
        success: !1,
        error: "Unsupported renderer; missing UniqueValueRenderer.field.",
      };
    const l = e.defaultSymbol,
      u = t === 1 && ["u8", "s8"].includes(h);
    if (
      !(function (n, m) {
        const { attributeTable: T, bandCount: C } = n;
        return (
          !(Oe(T) || C > 1) &&
          (!m ||
            T.fields.find((v) => v.name.toLowerCase() === m.toLowerCase()) !=
              null)
        );
      })(this.rasterInfo, d) &&
      !u
    )
      return {
        success: !1,
        error:
          "Unsupported data; UniqueValueRenderer is only supported on single band data with a valid raster attribute table.",
      };
    const o = [];
    if (X(r)) {
      const n = r.fields.find((m) => m.name.toLowerCase() === "value");
      if (!n)
        return {
          success: !1,
          error:
            "Unsupported data; the data's raster attribute table does not have a value field.",
        };
      r.features.forEach((m) => {
        var v, y;
        const T =
            (v = e.uniqueValueInfos) == null
              ? void 0
              : v.find((g) => String(g.value) === String(m.attributes[d])),
          C = (y = T == null ? void 0 : T.symbol) == null ? void 0 : y.color;
        C
          ? o.push([m.attributes[n.name]].concat(C))
          : l && o.push([m.attributes[n.name]].concat(l.color));
      });
    } else {
      if (d.toLowerCase() !== "value")
        return {
          success: !1,
          error:
            'Unsupported renderer; UniqueValueRenderer.field must be "Value" when raster attribute table is not availalbe.',
        };
      (s = e.uniqueValueInfos) == null ||
        s.forEach((n) => {
          var T;
          const m =
            (T = n == null ? void 0 : n.symbol) == null ? void 0 : T.color;
          m
            ? o.push([parseInt("" + n.value, 10)].concat(m))
            : l &&
              o.push(
                [parseInt("" + n.value, 10)].concat(
                  l == null ? void 0 : l.color
                )
              );
        });
    }
    if (o.length === 0)
      return {
        success: !1,
        error:
          "Invalid UniqueValueRenderer. Cannot find matching records in the raster attribute table.",
      };
    const a = Ie({ colormap: o });
    return (
      (this.lookup = { rendererJSON: e, colormapLut: a }),
      (this.canRenderInWebGL = !0),
      { success: !0 }
    );
  }
  _updateColormapRenderer(e) {
    if (
      !(function (h) {
        const { bandCount: d, colormap: l } = h;
        return X(l) && l.length > 0 && d === 1;
      })(this.rasterInfo)
    )
      return {
        success: !1,
        error: "Unsupported data; the data source does not have a colormap.",
      };
    const t = e.colormapInfos
      .map((h) => [h.value].concat(h.color))
      .sort((h, d) => h[0] - d[0]);
    if (!t || t.length === 0)
      return {
        success: !1,
        error:
          "Unsupported renderer; ColormapRenderer must have meaningful colormapInfos.",
      };
    const r = Ie({ colormap: t });
    return (
      (this.lookup = { rendererJSON: e, colormapLut: r }),
      (this.canRenderInWebGL = !0),
      { success: !0 }
    );
  }
  _updateShadedReliefRenderer(e) {
    if (
      !(function (t) {
        const { bandCount: r, dataType: h, pixelType: d } = t;
        return (
          h === "elevation" ||
          (h === "generic" &&
            r === 1 &&
            (d === "s16" || d === "f32" || d === "f64"))
        );
      })(this.rasterInfo)
    )
      return {
        success: !1,
        error: `Unsupported data type "${this.rasterInfo.dataType}"; ShadedReliefRenderer only supports "elevation", or single band float/s16 data.`,
      };
    if (e.colorRamp) {
      const t = It(e.colorRamp, { interpolateAlpha: !0 }),
        r = Ie({ colormap: t }),
        h = [],
        d = r.indexedColormap;
      for (let l = 0; l < d.length; l += 4) {
        const u = Le({ r: d[l], g: d[l + 1], b: d[l + 2] });
        h.push([u.h / 60, u.s / 100, (255 * u.v) / 100]);
      }
      this.lookup = { rendererJSON: e, colormapLut: r, hsvMap: h };
    } else this.lookup = null;
    return (this.canRenderInWebGL = !0), { success: !0 };
  }
  _analyzeClassBreaks(e) {
    const { attributeTable: t, pixelType: r } = this.rasterInfo,
      h = X(t) ? t.fields.find((u) => u.name.toLowerCase() === "value") : null,
      d = X(t)
        ? t.fields.find((u) => u.name.toLowerCase() === e.field.toLowerCase())
        : null,
      l = h != null && d !== null;
    return {
      canUseIndexedLUT: ["u8", "u16", "s8", "s16"].includes(r) || l,
      tableValueField: h,
      tableBreakField: d,
    };
  }
  _updateClassBreaksRenderer(e) {
    const { attributeTable: t } = this.rasterInfo,
      {
        canUseIndexedLUT: r,
        tableValueField: h,
        tableBreakField: d,
      } = this._analyzeClassBreaks(e),
      l = e.classBreakInfos;
    if (!(l != null && l.length))
      return {
        success: !1,
        error:
          "Unsupported renderer; missing or invalid ClassBreaksRenderer.classBreakInfos.",
      };
    const u = l.sort((m, T) => m.classMaxValue - T.classMaxValue),
      o = u[u.length - 1];
    let a = e.minValue;
    if (!r) {
      const m = [];
      for (let T = 0; T < u.length; T++)
        m.push({
          value: u[T].classMinValue ?? a,
          mappedColor: u[T].symbol.color,
        }),
          (a = u[T].classMaxValue);
      return (
        m.push({ value: o.classMaxValue, mappedColor: o.symbol.color }),
        (this.lookup = { rendererJSON: e, remapLut: m }),
        (this.canRenderInWebGL = !1),
        { success: !0 }
      );
    }
    const s = [];
    if (X(t) && h != null && d !== null && h !== d) {
      const m = h.name,
        T = d.name,
        C = u[u.length - 1],
        { classMaxValue: v } = C;
      a = e.minValue;
      for (const y of t.features) {
        const g = y.attributes[m],
          i = y.attributes[T],
          f =
            i === v
              ? C
              : i < a
              ? null
              : u.find(({ classMaxValue: p }) => p > i);
        f && s.push([g].concat(f.symbol.color));
      }
    } else {
      a = Math.floor(e.minValue);
      for (let m = 0; m < u.length; m++) {
        const T = u[m];
        for (let C = a; C < T.classMaxValue; C++)
          s.push([C].concat(T.symbol.color));
        a = Math.ceil(T.classMaxValue);
      }
      o.classMaxValue === a && s.push([o.classMaxValue].concat(o.symbol.color));
    }
    const n = Ie({ colormap: s, fillUnspecified: !1 });
    return (
      (this.lookup = { rendererJSON: e, colormapLut: n }),
      (this.canRenderInWebGL = !0),
      { success: !0 }
    );
  }
  _isHistogramRequired(e) {
    return e === "percentClip" || e === "histogramEqualization";
  }
  _isValidRasterStatistics(e) {
    return X(e) && e.length > 0 && e[0].min != null && e[0].max != null;
  }
  _updateStretchRenderer(e) {
    var n, m;
    let { stretchType: t, dra: r } = e;
    if (
      !(
        t === "none" ||
        ((n = e.statistics) != null && n.length) ||
        this._isValidRasterStatistics(this.rasterInfo.statistics) ||
        r
      )
    )
      return {
        success: !1,
        error:
          "Unsupported renderer; StretchRenderer.statistics is required when dynamic range adjustment is not used.",
      };
    const h = Ce(e.histograms || this.rasterInfo.histograms);
    !this._isHistogramRequired(e.stretchType) ||
      (h != null && h.length) ||
      r ||
      (t = "minMax");
    const { computeGamma: d, useGamma: l, colorRamp: u } = e;
    let { gamma: o } = e;
    if (l && d && !(o != null && o.length)) {
      const T =
        (m = e.statistics) != null && m.length
          ? e.statistics
          : Ce(this.rasterInfo.statistics);
      o = jr(this.rasterInfo.pixelType, T);
    }
    const a = this.rasterInfo.pixelType,
      s = !r && ["u8", "u16", "s8", "s16"].includes(a);
    if (t === "histogramEqualization") {
      const T = h.map((C) => Wt(C));
      this.lookup = { rendererJSON: e, histogramLut: T };
    } else if (s) {
      const T = Et({
        pixelType: a,
        ...xe(e, { rasterInfo: this.rasterInfo }),
        gamma: l ? o : null,
        rounding: "floor",
      });
      this.lookup = { rendererJSON: e, stretchLut: T };
    }
    if (u) {
      const T = It(u, { interpolateAlpha: !0 });
      this.lookup || (this.lookup = { rendererJSON: e }),
        (this.lookup.colormapLut = Ie({ colormap: T })),
        (this.lookup.rendererJSON = e);
    }
    return (
      (this.lookup.gamma = l && o != null && o.length ? o : null),
      (this.canRenderInWebGL = !0),
      { success: !0 }
    );
  }
  _generateStretchWebGLParams(e, t, r) {
    let h = null,
      d = null;
    const l = this.lookup && this.lookup.colormapLut;
    t.colorRamp && l && ((h = l.indexedColormap), (d = l.offset)),
      t.stretchType === "histogramEqualization" &&
        (t = { ...t, stretchType: "minMax" });
    const { gamma: u } = this.lookup,
      o = !!(t.useGamma && u && u.some((p) => p !== 1)),
      {
        minCutOff: a,
        maxCutOff: s,
        outMin: n,
        outMax: m,
      } = xe(t, { rasterInfo: this.rasterInfo, pixelBlock: e, bandIds: r });
    let T = 0;
    X(e) &&
      ((T = e.getPlaneCount()),
      T === 2 &&
        (((e = e.clone()).statistics = [e.statistics[0]]),
        (e.pixels = [e.pixels[0]])));
    const { bandCount: C } = this.rasterInfo,
      v = Math.min(3, (r == null ? void 0 : r.length) || T || C, C),
      y = new Float32Array(v),
      g = h || o ? 1 : 255;
    let i;
    for (i = 0; i < a.length; i++)
      y[i] = s[i] === a[i] ? 0 : (m - n) / (s[i] - a[i]) / g;
    const f = new Float32Array(v);
    if (o && u)
      for (i = 0; i < v; i++)
        u[i] > 1
          ? u[i] > 2
            ? (f[i] = 6.5 + (u[i] - 2) ** 2.5)
            : (f[i] = 6.5 + 100 * (2 - u[i]) ** 4)
          : (f[i] = 1);
    return {
      bandCount: v,
      outMin: n / g,
      outMax: m / g,
      minCutOff: a,
      maxCutOff: s,
      factor: y,
      useGamma: o,
      gamma: o ? u : [1, 1, 1],
      gammaCorrection: o ? f : [1, 1, 1],
      colormap: h,
      colormapOffset: d,
      stretchType: t.stretchType,
      type: "stretch",
    };
  }
  _generateShadedReliefWebGLParams(e, t = !1, r = { x: 0, y: 0 }) {
    var a;
    let h = null,
      d = null;
    const l = this.lookup && this.lookup.colormapLut;
    e.colorRamp && l && ((h = l.indexedColormap), (d = l.offset));
    const u = vt({ ...e, isGCS: t, resolution: r }),
      o = (a = Ce(this.rasterInfo.statistics)) == null ? void 0 : a[0];
    return {
      ...u,
      minValue: (o == null ? void 0 : o.min) ?? 0,
      maxValue: (o == null ? void 0 : o.max) ?? 8e3,
      hillshadeType: e.hillshadeType === "traditional" ? 0 : 1,
      type: "hillshade",
      colormap: h,
      colormapOffset: d,
    };
  }
  _generateVectorFieldWebGLParams(e) {
    var i, f, p;
    const {
      style: t,
      inputUnit: r,
      outputUnit: h,
      visualVariables: d,
      symbolTileSize: l,
      flowRepresentation: u,
    } = e;
    let o;
    const a =
        ((i = this.rasterInfo.statistics) == null ? void 0 : i[0].min) ?? 0,
      s = ((f = this.rasterInfo.statistics) == null ? void 0 : f[0].max) ?? 50,
      n = (d == null ? void 0 : d.find((b) => b.type === "sizeInfo")) ?? {
        type: "sizeInfo",
        field: "Magnitude",
        maxDataValue: s,
        maxSize: 0.8 * l,
        minDataValue: a,
        minSize: 0.2 * l,
      },
      m = n.minDataValue ?? a,
      T = n.maxDataValue ?? s,
      C =
        X(n.maxSize) && X(n.minSize)
          ? [n.minSize / l, n.maxSize / l]
          : [0.2, 0.8];
    if (t === "wind_speed") {
      const b = (C[0] + C[1]) / 2;
      C[0] = C[1] = b;
    }
    const v = X(m) && X(T) ? [m, T] : null;
    if (t === "classified_arrow")
      if (X(m) && X(T) && X(n)) {
        o = [];
        const b = (n.maxDataValue - n.minDataValue) / 5;
        for (let c = 0; c < 6; c++) o.push(n.minDataValue + b * c);
      } else o = [0, 1e-6, 3.5, 7, 10.5, 14];
    const y =
        (u === "flow_to") ==
        (t === "ocean_current_kn" || t === "ocean_current_m")
          ? 0
          : Math.PI,
      g = d == null ? void 0 : d.find((b) => b.type === "rotationInfo");
    return {
      breakValues: o,
      dataRange: v,
      inputUnit: r,
      outputUnit: h,
      symbolTileSize: l,
      symbolPercentRange: C,
      style: t || "single_arrow",
      rotation: y,
      rotationType:
        (p = this.rasterInfo.storageInfo) != null &&
        p.tileInfo &&
        this.rasterInfo.dataType === "vector-uv"
          ? "geographic"
          : (g == null ? void 0 : g.rotationType) || e.rotationType,
      type: "vectorField",
    };
  }
};
function Pt(e) {
  return Se(e) && e.validPixelCount !== 0;
}
z([H({ json: { write: !0 } })], ye.prototype, "rendererJSON", void 0),
  z([H({ type: _r, json: { write: !0 } })], ye.prototype, "rasterInfo", void 0),
  z([H({ json: { write: !0 } })], ye.prototype, "lookup", void 0),
  z([H()], ye.prototype, "canRenderInWebGL", void 0),
  (ye = z([$e("esri.renderers.support.RasterSymbolizer")], ye));
const ao = ye;
export {
  kr as B,
  Nr as C,
  nt as D,
  Tr as L,
  Yt as M,
  _t as N,
  qe as R,
  Zr as S,
  ao as T,
  Ut as U,
  It as _,
  Ur as a,
  $r as b,
  Et as c,
  no as d,
  oo as e,
  Mr as f,
  Vr as g,
  zt as h,
  io as i,
  Xr as j,
  Fr as k,
  rt as l,
  to as m,
  eo as n,
  Qr as o,
  Wr as p,
  vr as q,
  hr as r,
  ve as s,
  _r as u,
  ro as v,
  xe as x,
  ze as y,
};
