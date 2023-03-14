import {
  hb as ke,
  cd as ve,
  a0 as qe,
  aV as Ye,
  cE as Ze,
  r as Je,
  j as He,
} from "./index.8fd7165c.js";
import { E as we, I as he } from "./enums.fb086c25.js";
import {
  a as A,
  b as De,
  c as ce,
  n as ie,
  f as Se,
  i as Ke,
  r as Ce,
  t as Qe,
  N as Q,
  h as me,
  e as Xe,
  _ as $e,
} from "./GeometryUtils.874f8cf4.js";
import { t as Ee } from "./Rect.6884a4ea.js";
import { o as Re } from "./config.1337d16e.js";
import {
  l as re,
  m as v,
  o as Fe,
  n as Te,
  p as et,
  u as Be,
  a as te,
} from "./StyleDefinition.4f77c81e.js";
import { r as tt, c as st, i as it } from "./TurboLine.2982dc8d.js";
import {
  t as R,
  T as rt,
  m as nt,
  l as at,
} from "./StyleRepository.90f92f3e.js";
import { r as Oe } from "./earcut.9f54f087.js";
import { C as ot } from "./BidiEngine.520adad3.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./enums.13513a14.js";
import "./definitions.ce677f69.js";
import "./enums.64ab819c.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./colorUtils.3868c6ed.js";
function lt(o) {
  return (
    o === 746 ||
    o === 747 ||
    (!(o < 4352) &&
      ((o >= 12704 && o <= 12735) ||
        (o >= 12544 && o <= 12591) ||
        (o >= 65072 && o <= 65103 && !(o >= 65097 && o <= 65103)) ||
        (o >= 63744 && o <= 64255) ||
        (o >= 13056 && o <= 13311) ||
        (o >= 11904 && o <= 12031) ||
        (o >= 12736 && o <= 12783) ||
        (o >= 12288 &&
          o <= 12351 &&
          !(
            (o >= 12296 && o <= 12305) ||
            (o >= 12308 && o <= 12319) ||
            o === 12336
          )) ||
        (o >= 13312 && o <= 19903) ||
        (o >= 19968 && o <= 40959) ||
        (o >= 12800 && o <= 13055) ||
        (o >= 12592 && o <= 12687) ||
        (o >= 43360 && o <= 43391) ||
        (o >= 55216 && o <= 55295) ||
        (o >= 4352 && o <= 4607) ||
        (o >= 44032 && o <= 55215) ||
        (o >= 12352 && o <= 12447) ||
        (o >= 12272 && o <= 12287) ||
        (o >= 12688 && o <= 12703) ||
        (o >= 12032 && o <= 12255) ||
        (o >= 12784 && o <= 12799) ||
        (o >= 12448 && o <= 12543 && o !== 12540) ||
        (o >= 65280 &&
          o <= 65519 &&
          !(
            o === 65288 ||
            o === 65289 ||
            o === 65293 ||
            (o >= 65306 && o <= 65310) ||
            o === 65339 ||
            o === 65341 ||
            o === 65343 ||
            (o >= 65371 && o <= 65503) ||
            o === 65507 ||
            (o >= 65512 && o <= 65519)
          )) ||
        (o >= 65104 &&
          o <= 65135 &&
          !((o >= 65112 && o <= 65118) || (o >= 65123 && o <= 65126))) ||
        (o >= 5120 && o <= 5759) ||
        (o >= 6320 && o <= 6399) ||
        (o >= 65040 && o <= 65055) ||
        (o >= 19904 && o <= 19967) ||
        (o >= 40960 && o <= 42127) ||
        (o >= 42128 && o <= 42191)))
  );
}
function ht(o) {
  return (
    !(o < 11904) &&
    ((o >= 12704 && o <= 12735) ||
      (o >= 12544 && o <= 12591) ||
      (o >= 65072 && o <= 65103) ||
      (o >= 63744 && o <= 64255) ||
      (o >= 13056 && o <= 13311) ||
      (o >= 11904 && o <= 12031) ||
      (o >= 12736 && o <= 12783) ||
      (o >= 12288 && o <= 12351) ||
      (o >= 13312 && o <= 19903) ||
      (o >= 19968 && o <= 40959) ||
      (o >= 12800 && o <= 13055) ||
      (o >= 65280 && o <= 65519) ||
      (o >= 12352 && o <= 12447) ||
      (o >= 12272 && o <= 12287) ||
      (o >= 12032 && o <= 12255) ||
      (o >= 12784 && o <= 12799) ||
      (o >= 12448 && o <= 12543) ||
      (o >= 65040 && o <= 65055) ||
      (o >= 42128 && o <= 42191) ||
      (o >= 40960 && o <= 42127))
  );
}
function ct(o) {
  switch (o) {
    case 10:
    case 32:
    case 38:
    case 40:
    case 41:
    case 43:
    case 45:
    case 47:
    case 173:
    case 183:
    case 8203:
    case 8208:
    case 8211:
    case 8231:
      return !0;
  }
  return !1;
}
function Ne(o) {
  switch (o) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
      return !0;
  }
  return !1;
}
const Y = 24;
let We = class {
  constructor(o, t, e, i, s, a, r) {
    (this._glyphItems = o),
      (this._maxWidth = t),
      (this._lineHeight = e),
      (this._letterSpacing = i),
      (this._hAnchor = s),
      (this._vAnchor = a),
      (this._justify = r);
  }
  getShaping(o, t, e) {
    const i = this._letterSpacing,
      s = this._lineHeight,
      a = this._justify,
      r = this._maxWidth,
      n = [];
    let l = 0,
      u = 0;
    const c = o.length;
    for (let m = 0; m < c; m++) {
      const p = o.charCodeAt(m),
        _ = e && lt(p);
      let I;
      for (const w of this._glyphItems) if (((I = w[p]), I)) break;
      n.push({ codePoint: p, x: l, y: u, vertical: _, glyphMosaicItem: I }),
        I && (l += I.metrics.advance + i);
    }
    let f = l;
    r > 0 && (f = l / Math.max(1, Math.ceil(l / r)));
    const h = o.includes("​"),
      y = [];
    for (let m = 0; m < c - 1; m++) {
      const p = n[m].codePoint,
        _ = ht(p);
      if (ct(p) || _) {
        let I = 0;
        if (p === 10) I -= 1e4;
        else if (_ && h) I += 150;
        else {
          (p !== 40 && p !== 65288) || (I += 50);
          const w = n[m + 1].codePoint;
          (w !== 41 && w !== 65289) || (I += 50);
        }
        y.push(this._buildBreak(m + 1, n[m].x, f, y, I, !1));
      }
    }
    const d = this._optimalBreaks(this._buildBreak(c, l, f, y, 0, !0));
    let g = 0;
    const M = t ? -s : s;
    let x = 0;
    for (let m = 0; m < d.length; m++) {
      const p = d[m];
      let _ = x;
      for (; _ < p && Ne(n[_].codePoint); ) (n[_].glyphMosaicItem = null), ++_;
      let I = p - 1;
      for (; I > _ && Ne(n[I].codePoint); ) (n[I].glyphMosaicItem = null), --I;
      if (_ <= I) {
        const w = n[_].x;
        for (let B = _; B <= I; B++) (n[B].x -= w), (n[B].y = u);
        let b = n[I].x;
        n[I].glyphMosaicItem && (b += n[I].glyphMosaicItem.metrics.advance),
          (g = Math.max(b, g)),
          a && this._applyJustification(n, _, I);
      }
      (x = p), (u += M);
    }
    if (n.length > 0) {
      const m = d.length - 1,
        p = (a - this._hAnchor) * g;
      let _ = (-this._vAnchor * (m + 1) + 0.5) * s;
      t && m && (_ += m * s);
      for (const I of n) (I.x += p), (I.y += _);
    }
    return n.filter((m) => m.glyphMosaicItem);
  }
  static getTextBox(o, t) {
    if (!o.length) return null;
    let e = 1 / 0,
      i = 1 / 0,
      s = 0,
      a = 0;
    for (const r of o) {
      const n = r.glyphMosaicItem.metrics.advance,
        l = r.x,
        u = r.y - 17,
        c = l + n,
        f = u + t;
      (e = Math.min(e, l)),
        (s = Math.max(s, c)),
        (i = Math.min(i, u)),
        (a = Math.max(a, f));
    }
    return { x: e, y: i, width: s - e, height: a - i };
  }
  static getBox(o) {
    if (!o.length) return null;
    let t = 1 / 0,
      e = 1 / 0,
      i = 0,
      s = 0;
    for (const a of o) {
      const {
          height: r,
          left: n,
          top: l,
          width: u,
        } = a.glyphMosaicItem.metrics,
        c = a.x,
        f = a.y - (r - Math.abs(l)),
        h = c + u + n,
        y = f + r;
      (t = Math.min(t, c)),
        (i = Math.max(i, h)),
        (e = Math.min(e, f)),
        (s = Math.max(s, y));
    }
    return { x: t, y: e, width: i - t, height: s - e };
  }
  static addDecoration(o, t) {
    const e = o.length;
    if (e === 0) return;
    let i = o[0].x + o[0].glyphMosaicItem.metrics.left,
      s = o[0].y;
    for (let r = 1; r < e; r++) {
      const n = o[r];
      if (n.y !== s) {
        const l =
          o[r - 1].x +
          o[r - 1].glyphMosaicItem.metrics.left +
          o[r - 1].glyphMosaicItem.metrics.width;
        o.push({
          codePoint: 0,
          x: i,
          y: s + t - 3,
          vertical: !1,
          glyphMosaicItem: {
            sdf: !0,
            rect: new Ee(4, 0, 4, 8),
            metrics: { width: l - i, height: 8, left: 0, top: 0, advance: 0 },
            page: 0,
            code: 0,
          },
        }),
          (s = n.y),
          (i = n.x + n.glyphMosaicItem.metrics.left);
      }
    }
    const a =
      o[e - 1].x +
      o[e - 1].glyphMosaicItem.metrics.left +
      o[e - 1].glyphMosaicItem.metrics.width;
    o.push({
      codePoint: 0,
      x: i,
      y: s + t - 3,
      vertical: !1,
      glyphMosaicItem: {
        sdf: !0,
        rect: new Ee(4, 0, 4, 8),
        metrics: { width: a - i, height: 8, left: 0, top: 0, advance: 0 },
        page: 0,
        code: 0,
      },
    });
  }
  _breakScore(o, t, e, i) {
    const s = (o - t) * (o - t);
    return i ? (o < t ? s / 2 : 2 * s) : s + Math.abs(e) * e;
  }
  _buildBreak(o, t, e, i, s, a) {
    let r = null,
      n = this._breakScore(t, e, s, a);
    for (const l of i) {
      const u = t - l.x,
        c = this._breakScore(u, e, s, a) + l.score;
      c <= n && ((r = l), (n = c));
    }
    return { index: o, x: t, score: n, previousBreak: r };
  }
  _optimalBreaks(o) {
    return o ? this._optimalBreaks(o.previousBreak).concat(o.index) : [];
  }
  _applyJustification(o, t, e) {
    const i = o[e],
      s = i.vertical
        ? Y
        : i.glyphMosaicItem
        ? i.glyphMosaicItem.metrics.advance
        : 0,
      a = (i.x + s) * this._justify;
    for (let r = t; r <= e; r++) o[r].x -= a;
  }
};
const ue = 0.5;
class _e {
  constructor(t, e, i = 0, s = -1, a = 0.5) {
    (this.x = t),
      (this.y = e),
      (this.angle = i),
      (this.segment = s),
      (this.minzoom = a);
  }
}
class Ie {
  constructor(t, e, i, s, a, r = 0.5, n = ie) {
    (this.anchor = t),
      (this.labelAngle = e),
      (this.glyphAngle = i),
      (this.page = s),
      (this.alternateVerticalGlyph = a),
      (this.minzoom = r),
      (this.maxzoom = n);
  }
}
let ze = class {
    constructor(o, t, e, i, s, a, r, n, l, u, c, f) {
      (this.tl = o),
        (this.tr = t),
        (this.bl = e),
        (this.br = i),
        (this.mosaicRect = s),
        (this.labelAngle = a),
        (this.minAngle = r),
        (this.maxAngle = n),
        (this.anchor = l),
        (this.minzoom = u),
        (this.maxzoom = c),
        (this.page = f);
    }
  },
  Ue = class {
    constructor(o) {
      this.shapes = o;
    }
  };
var ne;
(function (o) {
  (o[(o.moveTo = 1)] = "moveTo"),
    (o[(o.lineTo = 2)] = "lineTo"),
    (o[(o.close = 7)] = "close");
})(ne || (ne = {}));
let ut = class {
    constructor(o, t) {
      (this.values = {}), (this._geometry = void 0), (this._pbfGeometry = null);
      const e = t.keys,
        i = t.values,
        s = o.asUnsafe();
      for (; s.next(); )
        switch (s.tag()) {
          case 1:
            this.id = s.getUInt64();
            break;
          case 2: {
            const a = s.getMessage().asUnsafe(),
              r = this.values;
            for (; !a.empty(); ) {
              const n = a.getUInt32(),
                l = a.getUInt32();
              r[e[n]] = i[l];
            }
            a.release();
            break;
          }
          case 3:
            this.type = s.getUInt32();
            break;
          case 4:
            this._pbfGeometry = s.getMessage();
            break;
          default:
            s.skip();
        }
    }
    getGeometry(o) {
      if (this._geometry !== void 0) return this._geometry;
      if (!this._pbfGeometry) return null;
      const t = this._pbfGeometry.asUnsafe();
      let e, i;
      (this._pbfGeometry = null), o ? o.reset(this.type) : (e = []);
      let s,
        a = ne.moveTo,
        r = 0,
        n = 0,
        l = 0;
      for (; !t.empty(); ) {
        if (r === 0) {
          const u = t.getUInt32();
          (a = 7 & u), (r = u >> 3);
        }
        switch ((r--, a)) {
          case ne.moveTo:
            (n += t.getSInt32()),
              (l += t.getSInt32()),
              o
                ? o.moveTo(n, l)
                : e && (i && e.push(i), (i = []), i.push(new A(n, l)));
            break;
          case ne.lineTo:
            (n += t.getSInt32()),
              (l += t.getSInt32()),
              o ? o.lineTo(n, l) : i && i.push(new A(n, l));
            break;
          case ne.close:
            o ? o.close() : i && !i[0].equals(n, l) && i.push(i[0].clone());
            break;
          default:
            throw (t.release(), new Error("Invalid path operation"));
        }
      }
      return (
        o ? (s = o.result()) : e && (i && e.push(i), (s = e)),
        t.release(),
        (this._geometry = s),
        s
      );
    }
  },
  se = class extends R {
    constructor() {
      super(12);
    }
    add(o, t, e) {
      const i = this.array;
      i.push(o), i.push(t), i.push(e);
    }
  };
class Le {
  constructor(t) {
    (this.extent = 4096),
      (this.keys = []),
      (this.values = []),
      (this._pbfLayer = t.clone());
    const e = t.asUnsafe();
    for (; e.next(); )
      switch (e.tag()) {
        case 1:
          this.name = e.getString();
          break;
        case 3:
          this.keys.push(e.getString());
          break;
        case 4:
          this.values.push(e.processMessage(Le._parseValue));
          break;
        case 5:
          this.extent = e.getUInt32();
          break;
        default:
          e.skip();
      }
  }
  getData() {
    return this._pbfLayer;
  }
  static _parseValue(t) {
    for (; t.next(); )
      switch (t.tag()) {
        case 1:
          return t.getString();
        case 2:
          return t.getFloat();
        case 3:
          return t.getDouble();
        case 4:
          return t.getInt64();
        case 5:
          return t.getUInt64();
        case 6:
          return t.getSInt64();
        case 7:
          return t.getBool();
        default:
          t.skip();
      }
    return null;
  }
}
let ft = class extends R {
    constructor(o) {
      super(o);
    }
    add(o, t, e, i, s, a, r, n, l, u, c, f) {
      const h = this.array;
      let y = R.i1616to32(o, t);
      h.push(y);
      const d = 31;
      (y = R.i8888to32(
        Math.round(d * e),
        Math.round(d * i),
        Math.round(d * s),
        Math.round(d * a)
      )),
        h.push(y),
        (y = R.i8888to32(
          Math.round(d * r),
          Math.round(d * n),
          Math.round(d * l),
          Math.round(d * u)
        )),
        h.push(y),
        (y = R.i1616to32(c, 0)),
        h.push(y),
        f && h.push(...f);
    }
  },
  dt = class extends R {
    constructor(o) {
      super(o);
    }
    add(o, t, e) {
      const i = this.array;
      i.push(R.i1616to32(o, t)), e && i.push(...e);
    }
  };
class yt extends R {
  constructor(t) {
    super(t);
  }
  add(t, e, i, s, a, r, n) {
    const l = this.array,
      u = this.index;
    let c = R.i1616to32(t, e);
    return (
      l.push(c),
      (c = R.i8888to32(Math.round(15 * i), Math.round(15 * s), a, r)),
      l.push(c),
      n && l.push(...n),
      u
    );
  }
}
class Ge extends R {
  constructor(t) {
    super(t);
  }
  add(t, e, i, s, a, r, n, l, u, c, f, h) {
    const y = this.array;
    let d = R.i1616to32(t, e);
    y.push(d),
      (d = R.i1616to32(Math.round(8 * i), Math.round(8 * s))),
      y.push(d),
      (d = R.i8888to32(a / 4, r / 4, l, u)),
      y.push(d),
      (d = R.i8888to32(0, Ke(n), 10 * c, Math.min(10 * f, 255))),
      y.push(d),
      h && y.push(...h);
  }
}
let xt = class extends R {
  constructor(o) {
    super(o);
  }
  add(o, t, e, i, s) {
    const a = this.array,
      r = R.i1616to32(2 * o + e, 2 * t + i);
    a.push(r), s && a.push(...s);
  }
};
class Me {
  constructor(t, e, i) {
    (this.layerExtent = 4096),
      (this._features = []),
      (this.layer = t),
      (this.zoom = e),
      (this._spriteInfo = i),
      (this._filter = t.getFeatureFilter());
  }
  pushFeature(t) {
    (this._filter && !this._filter.filter(t, this.zoom)) ||
      this._features.push(t);
  }
  hasFeatures() {
    return this._features.length > 0;
  }
  getResources(t, e, i) {}
}
let gt = class extends Me {
    constructor(o, t, e, i, s) {
      super(o, t, e),
        (this.type = we.CIRCLE),
        (this._circleVertexBuffer = i),
        (this._circleIndexBuffer = s);
    }
    get circleIndexStart() {
      return this._circleIndexStart;
    }
    get circleIndexCount() {
      return this._circleIndexCount;
    }
    processFeatures(o) {
      const t = this._circleVertexBuffer,
        e = this._circleIndexBuffer;
      (this._circleIndexStart = 3 * e.index), (this._circleIndexCount = 0);
      const i = this.layer,
        s = this.zoom;
      o && o.setExtent(this.layerExtent);
      for (const a of this._features) {
        const r = a.getGeometry(o);
        if (!r) continue;
        const n = i.circleMaterial.encodeAttributes(a, s, i);
        for (const l of r)
          if (l)
            for (const u of l) {
              const c = t.index;
              t.add(u.x, u.y, 0, 0, n),
                t.add(u.x, u.y, 0, 1, n),
                t.add(u.x, u.y, 1, 0, n),
                t.add(u.x, u.y, 1, 1, n),
                e.add(c + 0, c + 1, c + 2),
                e.add(c + 1, c + 2, c + 3),
                (this._circleIndexCount += 6);
            }
      }
    }
    serialize() {
      let o = 6;
      (o += this.layerUIDs.length),
        (o += this._circleVertexBuffer.array.length),
        (o += this._circleIndexBuffer.array.length);
      const t = new Uint32Array(o),
        e = new Int32Array(t.buffer);
      let i = 0;
      (t[i++] = this.type), (t[i++] = this.layerUIDs.length);
      for (let s = 0; s < this.layerUIDs.length; s++)
        t[i++] = this.layerUIDs[s];
      (t[i++] = this._circleIndexStart),
        (t[i++] = this._circleIndexCount),
        (t[i++] = this._circleVertexBuffer.array.length);
      for (let s = 0; s < this._circleVertexBuffer.array.length; s++)
        e[i++] = this._circleVertexBuffer.array[s];
      t[i++] = this._circleIndexBuffer.array.length;
      for (let s = 0; s < this._circleIndexBuffer.array.length; s++)
        t[i++] = this._circleIndexBuffer.array[s];
      return t.buffer;
    }
  },
  pt = class je extends Me {
    constructor(t, e, i, s, a, r, n) {
      super(t, e, i),
        (this.type = we.FILL),
        (this._patternMap = new Map()),
        (this._fillVertexBuffer = s),
        (this._fillIndexBuffer = a),
        (this._outlineVertexBuffer = r),
        (this._outlineIndexBuffer = n);
    }
    get fillIndexStart() {
      return this._fillIndexStart;
    }
    get fillIndexCount() {
      return this._fillIndexCount;
    }
    get outlineIndexStart() {
      return this._outlineIndexStart;
    }
    get outlineIndexCount() {
      return this._outlineIndexCount;
    }
    getResources(t, e, i) {
      const s = this.layer,
        a = this.zoom,
        r = s.getPaintProperty("fill-pattern");
      if (r)
        if (r.isDataDriven)
          for (const n of this._features) e(r.getValue(a, n), !0);
        else e(r.getValue(a), !0);
    }
    processFeatures(t) {
      (this._fillIndexStart = 3 * this._fillIndexBuffer.index),
        (this._fillIndexCount = 0),
        (this._outlineIndexStart = 3 * this._outlineIndexBuffer.index),
        (this._outlineIndexCount = 0);
      const e = this.layer,
        i = this.zoom,
        {
          fillMaterial: s,
          outlineMaterial: a,
          hasDataDrivenFill: r,
          hasDataDrivenOutline: n,
        } = e;
      t && t.setExtent(this.layerExtent);
      const l = e.getPaintProperty("fill-pattern"),
        u = l == null ? void 0 : l.isDataDriven;
      let c = !l && e.getPaintValue("fill-antialias", i);
      if (e.outlineUsesFillColor) {
        if (c && !e.hasDataDrivenOpacity) {
          const y = e.getPaintValue("fill-opacity", i),
            d = e.getPaintValue("fill-opacity", i + 1);
          y < 1 && d < 1 && (c = !1);
        }
        if (c && !e.hasDataDrivenColor) {
          const y = e.getPaintValue("fill-color", i),
            d = e.getPaintValue("fill-color", i + 1);
          y[3] < 1 && d[3] < 1 && (c = !1);
        }
      }
      const f = this._features,
        h = t == null ? void 0 : t.validateTessellation;
      if (u) {
        const y = [];
        for (const d of f) {
          const g = l.getValue(i, d),
            M = this._spriteInfo[g];
          if (!M || !M.rect) continue;
          const x = s.encodeAttributes(d, i, e, M),
            m = c && n ? a.encodeAttributes(d, i, e) : [],
            p = d.getGeometry(t);
          y.push({
            ddFillAttributes: x,
            ddOutlineAttributes: m,
            page: M.page,
            geometry: p,
          }),
            y.sort((_, I) => _.page - I.page);
          for (const {
            ddFillAttributes: _,
            ddOutlineAttributes: I,
            page: w,
            geometry: b,
          } of y)
            this._processFeature(b, c, e.outlineUsesFillColor, _, I, h, w);
        }
      } else
        for (const y of f) {
          const d = r ? s.encodeAttributes(y, i, e) : null,
            g = c && n ? a.encodeAttributes(y, i, e) : null,
            M = y.getGeometry(t);
          this._processFeature(M, c, e.outlineUsesFillColor, d, g, h);
        }
    }
    serialize() {
      let t = 10;
      (t += this.layerUIDs.length),
        (t += this._fillVertexBuffer.array.length),
        (t += this._fillIndexBuffer.array.length),
        (t += this._outlineVertexBuffer.array.length),
        (t += this._outlineIndexBuffer.array.length),
        (t += 3 * this._patternMap.size + 1);
      const e = new Uint32Array(t),
        i = new Int32Array(e.buffer);
      let s = 0;
      (e[s++] = this.type), (e[s++] = this.layerUIDs.length);
      for (let n = 0; n < this.layerUIDs.length; n++)
        e[s++] = this.layerUIDs[n];
      (e[s++] = this._fillIndexStart),
        (e[s++] = this._fillIndexCount),
        (e[s++] = this._outlineIndexStart),
        (e[s++] = this._outlineIndexCount);
      const a = this._patternMap,
        r = a.size;
      if (((e[s++] = r), r > 0))
        for (const [n, [l, u]] of a) (e[s++] = n), (e[s++] = l), (e[s++] = u);
      e[s++] = this._fillVertexBuffer.array.length;
      for (let n = 0; n < this._fillVertexBuffer.array.length; n++)
        i[s++] = this._fillVertexBuffer.array[n];
      e[s++] = this._fillIndexBuffer.array.length;
      for (let n = 0; n < this._fillIndexBuffer.array.length; n++)
        e[s++] = this._fillIndexBuffer.array[n];
      e[s++] = this._outlineVertexBuffer.array.length;
      for (let n = 0; n < this._outlineVertexBuffer.array.length; n++)
        i[s++] = this._outlineVertexBuffer.array[n];
      e[s++] = this._outlineIndexBuffer.array.length;
      for (let n = 0; n < this._outlineIndexBuffer.array.length; n++)
        e[s++] = this._outlineIndexBuffer.array[n];
      return e.buffer;
    }
    _processFeature(t, e, i, s, a, r, n) {
      if (!t) return;
      const l = t.length,
        u = !a || a.length === 0;
      if (e && (!i || u))
        for (let f = 0; f < l; f++) this._processOutline(t[f], a);
      let c;
      for (let f = 0; f < l; f++) {
        const h = je._area(t[f]);
        h > 32
          ? (c !== void 0 && this._processFill(t, c, s, r, n), (c = [f]))
          : h < -32 && c !== void 0 && c.push(f);
      }
      c !== void 0 && this._processFill(t, c, s, r, n);
    }
    _processOutline(t, e) {
      const i = this._outlineVertexBuffer,
        s = this._outlineIndexBuffer,
        a = s.index;
      let r, n, l;
      const u = new A(0, 0),
        c = new A(0, 0),
        f = new A(0, 0);
      let h = -1,
        y = -1,
        d = -1,
        g = -1,
        M = -1,
        x = !1,
        m = t.length;
      if (m < 2) return;
      const p = t[0];
      let _ = t[m - 1];
      for (; m && _.isEqual(p); ) --m, (_ = t[m - 1]);
      if (!(m - 0 < 2)) {
        for (let I = 0; I < m; ++I) {
          I === 0
            ? ((r = t[m - 1]),
              (n = t[0]),
              (l = t[1]),
              u.assignSub(n, r),
              u.normalize(),
              u.rightPerpendicular())
            : ((r = n),
              (n = l),
              (l = I !== m - 1 ? t[I + 1] : t[0]),
              u.assign(c));
          const w = this._isClipEdge(r, n);
          g === -1 && (x = w),
            c.assignSub(l, n),
            c.normalize(),
            c.rightPerpendicular();
          const b = u.x * c.y - u.y * c.x;
          f.assignAdd(u, c), f.normalize();
          const B = -f.x * -u.x + -f.y * -u.y;
          let T = Math.abs(B !== 0 ? 1 / B : 1);
          T > 8 && (T = 8),
            b >= 0
              ? ((d = i.add(n.x, n.y, u.x, u.y, 0, 1, e)),
                g === -1 && (g = d),
                h >= 0 && y >= 0 && d >= 0 && !w && s.add(h, y, d),
                (y = i.add(n.x, n.y, T * -f.x, T * -f.y, 0, -1, e)),
                M === -1 && (M = y),
                h >= 0 && y >= 0 && d >= 0 && !w && s.add(h, y, d),
                (h = y),
                (y = d),
                (d = i.add(n.x, n.y, f.x, f.y, 0, 1, e)),
                h >= 0 && y >= 0 && d >= 0 && !w && s.add(h, y, d),
                (y = i.add(n.x, n.y, c.x, c.y, 0, 1, e)),
                h >= 0 && y >= 0 && d >= 0 && !w && s.add(h, y, d))
              : ((d = i.add(n.x, n.y, T * f.x, T * f.y, 0, 1, e)),
                g === -1 && (g = d),
                h >= 0 && y >= 0 && d >= 0 && !w && s.add(h, y, d),
                (y = i.add(n.x, n.y, -u.x, -u.y, 0, -1, e)),
                M === -1 && (M = y),
                h >= 0 && y >= 0 && d >= 0 && !w && s.add(h, y, d),
                (h = y),
                (y = d),
                (d = i.add(n.x, n.y, -f.x, -f.y, 0, -1, e)),
                h >= 0 && y >= 0 && d >= 0 && !w && s.add(h, y, d),
                (h = i.add(n.x, n.y, -c.x, -c.y, 0, -1, e)),
                h >= 0 && y >= 0 && d >= 0 && !w && s.add(h, y, d));
        }
        h >= 0 && y >= 0 && g >= 0 && !x && s.add(h, y, g),
          h >= 0 && g >= 0 && M >= 0 && !x && s.add(h, M, g),
          (this._outlineIndexCount += 3 * (s.index - a));
      }
    }
    _processFill(t, e, i, s, a) {
      let r;
      e.length > 1 && (r = []);
      let n = 0;
      for (const f of e) n !== 0 && r.push(n), (n += t[f].length);
      const l = 2 * n,
        u = ke.acquire();
      for (const f of e) {
        const h = t[f],
          y = h.length;
        for (let d = 0; d < y; ++d) u.push(h[d].x, h[d].y);
      }
      const c = Oe(u, r, 2);
      if (Oe.deviation(u, r, 2, c) > 0) {
        const f = e.map((d) => t[d].length),
          { buffer: h, vertexCount: y } = tt(u, f);
        if (y > 0) {
          const d = this._fillVertexBuffer.index;
          for (let g = 0; g < y; g++)
            this._fillVertexBuffer.add(h[2 * g], h[2 * g + 1], i);
          for (let g = 0; g < y; g += 3) {
            const M = d + g;
            this._fillIndexBuffer.add(M, M + 1, M + 2);
          }
          if (a !== void 0) {
            const g = this._patternMap,
              M = g.get(a);
            M
              ? (M[1] += y)
              : g.set(a, [this._fillIndexStart + this._fillIndexCount, y]);
          }
          this._fillIndexCount += y;
        }
      } else {
        const f = c.length;
        if (f > 0) {
          const h = this._fillVertexBuffer.index;
          let y = 0;
          for (; y < l; ) this._fillVertexBuffer.add(u[y++], u[y++], i);
          let d = 0;
          for (; d < f; )
            this._fillIndexBuffer.add(h + c[d++], h + c[d++], h + c[d++]);
          if (a !== void 0) {
            const g = this._patternMap,
              M = g.get(a);
            M
              ? (M[1] += f)
              : g.set(a, [this._fillIndexStart + this._fillIndexCount, f]);
          }
          this._fillIndexCount += f;
        }
      }
      ke.release(u);
    }
    _isClipEdge(t, e) {
      return t.x === e.x
        ? t.x <= -64 || t.x >= 4160
        : t.y === e.y && (t.y <= -64 || t.y >= 4160);
    }
    static _area(t) {
      let e = 0;
      const i = t.length - 1;
      for (let s = 0; s < i; s++)
        e += (t[s].x - t[s + 1].x) * (t[s].y + t[s + 1].y);
      return (e += (t[i].x - t[0].x) * (t[i].y + t[0].y)), 0.5 * e;
    }
  };
class mt extends Me {
  constructor(t, e, i, s, a) {
    super(t, e, i),
      (this.type = we.LINE),
      (this._tessellationOptions = {
        pixelCoordRatio: 8,
        halfWidth: 0,
        offset: 0,
      }),
      (this._patternMap = new Map()),
      (this.tessellationProperties = {
        _lineVertexBuffer: null,
        _lineIndexBuffer: null,
        _ddValues: null,
      }),
      (this.tessellationProperties._lineVertexBuffer = s),
      (this.tessellationProperties._lineIndexBuffer = a),
      (this._lineTessellator = new st(
        _t(this.tessellationProperties),
        It(this.tessellationProperties),
        t.canUseThinTessellation
      ));
  }
  get lineIndexStart() {
    return this._lineIndexStart;
  }
  get lineIndexCount() {
    return this._lineIndexCount;
  }
  getResources(t, e, i) {
    const s = this.layer,
      a = this.zoom,
      r = s.getPaintProperty("line-pattern"),
      n = s.getPaintProperty("line-dasharray"),
      l = s.getLayoutProperty("line-cap");
    if (!r && !n) return;
    const u = (l == null ? void 0 : l.getValue(a)) || 0,
      c = l == null ? void 0 : l.isDataDriven,
      f = r == null ? void 0 : r.isDataDriven,
      h = n == null ? void 0 : n.isDataDriven;
    if (f || h)
      for (const y of this._features)
        e(f ? r.getValue(a, y) : this._getDashArrayKey(y, a, s, n, c, l, u));
    else if (r) e(r.getValue(a));
    else if (n) {
      const y = n.getValue(a);
      e(s.getDashKey(y, u));
    }
  }
  processFeatures(t) {
    (this._lineIndexStart =
      3 * this.tessellationProperties._lineIndexBuffer.index),
      (this._lineIndexCount = 0);
    const e = this.layer,
      i = this.zoom,
      s = this._features,
      a = this._tessellationOptions,
      { hasDataDrivenLine: r, lineMaterial: n } = e;
    t && t.setExtent(this.layerExtent);
    const l = e.getPaintProperty("line-pattern"),
      u = e.getPaintProperty("line-dasharray"),
      c = l == null ? void 0 : l.isDataDriven,
      f = u == null ? void 0 : u.isDataDriven;
    let h;
    h = e.getLayoutProperty("line-cap");
    const y = h != null && h.isDataDriven ? h : null,
      d = y ? null : e.getLayoutValue("line-cap", i),
      g = d || 0,
      M = !!y;
    h = e.getLayoutProperty("line-join");
    const x = h != null && h.isDataDriven ? h : null,
      m = x ? null : e.getLayoutValue("line-join", i);
    h = e.getLayoutProperty("line-miter-limit");
    const p = h != null && h.isDataDriven ? h : null,
      _ = p ? null : e.getLayoutValue("line-miter-limit", i);
    h = e.getLayoutProperty("line-round-limit");
    const I = h != null && h.isDataDriven ? h : null,
      w = I ? null : e.getLayoutValue("line-round-limit", i);
    h = e.getPaintProperty("line-width");
    const b = h != null && h.isDataDriven ? h : null,
      B = b ? null : e.getPaintValue("line-width", i);
    h = e.getPaintProperty("line-offset");
    const T = h != null && h.isDataDriven ? h : null,
      V = T ? null : e.getPaintValue("line-offset", i);
    if (c || f) {
      const D = [];
      for (const P of s) {
        const k = c
            ? l.getValue(i, P)
            : this._getDashArrayKey(P, i, e, u, M, y, g),
          E = this._spriteInfo[k];
        if (!E || !E.rect) continue;
        const L = n.encodeAttributes(P, i, e, E),
          S = P.getGeometry(t);
        D.push({
          ddAttributes: L,
          page: E.page,
          cap: y ? y.getValue(i, P) : d,
          join: x ? x.getValue(i, P) : m,
          miterLimit: p ? p.getValue(i, P) : _,
          roundLimit: I ? I.getValue(i, P) : w,
          halfWidth: 0.5 * (b ? b.getValue(i, P) : B),
          offset: T ? T.getValue(i, P) : V,
          geometry: S,
        });
      }
      D.sort((P, k) => P.page - k.page), (a.textured = !0);
      for (const {
        ddAttributes: P,
        page: k,
        cap: E,
        join: L,
        miterLimit: S,
        roundLimit: O,
        halfWidth: N,
        offset: Z,
        geometry: X,
      } of D)
        (a.capType = E),
          (a.joinType = L),
          (a.miterLimit = S),
          (a.roundLimit = O),
          (a.halfWidth = N),
          (a.offset = Z),
          this._processFeature(X, P, k);
    } else {
      if (l) {
        const D = l.getValue(i),
          P = this._spriteInfo[D];
        if (!P || !P.rect) return;
      }
      (a.textured = !(!l && !u)),
        (a.capType = d),
        (a.joinType = m),
        (a.miterLimit = _),
        (a.roundLimit = w),
        (a.halfWidth = 0.5 * B),
        (a.offset = V);
      for (const D of s) {
        const P = r ? n.encodeAttributes(D, i, e) : null;
        y && (a.capType = y.getValue(i, D)),
          x && (a.joinType = x.getValue(i, D)),
          p && (a.miterLimit = p.getValue(i, D)),
          I && (a.roundLimit = I.getValue(i, D)),
          b && (a.halfWidth = 0.5 * b.getValue(i, D)),
          T && (a.offset = T.getValue(i, D));
        const k = D.getGeometry(t);
        this._processFeature(k, P);
      }
    }
  }
  serialize() {
    let t = 6;
    (t += this.layerUIDs.length),
      (t += this.tessellationProperties._lineVertexBuffer.array.length),
      (t += this.tessellationProperties._lineIndexBuffer.array.length),
      (t += 3 * this._patternMap.size + 1);
    const e = new Uint32Array(t),
      i = new Int32Array(e.buffer);
    let s = 0;
    (e[s++] = this.type), (e[s++] = this.layerUIDs.length);
    for (let n = 0; n < this.layerUIDs.length; n++) e[s++] = this.layerUIDs[n];
    (e[s++] = this._lineIndexStart), (e[s++] = this._lineIndexCount);
    const a = this._patternMap,
      r = a.size;
    if (((e[s++] = r), r > 0))
      for (const [n, [l, u]] of a) (e[s++] = n), (e[s++] = l), (e[s++] = u);
    e[s++] = this.tessellationProperties._lineVertexBuffer.array.length;
    for (
      let n = 0;
      n < this.tessellationProperties._lineVertexBuffer.array.length;
      n++
    )
      i[s++] = this.tessellationProperties._lineVertexBuffer.array[n];
    e[s++] = this.tessellationProperties._lineIndexBuffer.array.length;
    for (
      let n = 0;
      n < this.tessellationProperties._lineIndexBuffer.array.length;
      n++
    )
      e[s++] = this.tessellationProperties._lineIndexBuffer.array[n];
    return e.buffer;
  }
  _processFeature(t, e, i) {
    if (!t) return;
    const s = t.length;
    for (let a = 0; a < s; a++) this._processGeometry(t[a], e, i);
  }
  _processGeometry(t, e, i) {
    if (t.length < 2) return;
    let s,
      a,
      r = t[0],
      n = 1;
    for (; n < t.length; )
      (s = t[n].x - r.x),
        (a = t[n].y - r.y),
        s * s + a * a < 1e-6 ? t.splice(n, 1) : ((r = t[n]), ++n);
    if (t.length < 2) return;
    const l = this.tessellationProperties._lineIndexBuffer,
      u = 3 * l.index;
    (this._tessellationOptions.initialDistance = 0),
      (this._tessellationOptions.wrapDistance = 65535),
      (this.tessellationProperties._ddValues = e),
      this._lineTessellator.tessellate(t, this._tessellationOptions);
    const c = 3 * l.index - u;
    if (i !== void 0) {
      const f = this._patternMap,
        h = f.get(i);
      h ? (h[1] += c) : f.set(i, [u + this._lineIndexCount, c]);
    }
    this._lineIndexCount += c;
  }
  _getDashArrayKey(t, e, i, s, a, r, n) {
    const l = a ? r.getValue(e, t) : n,
      u = s.getValue(e, t);
    return i.getDashKey(u, l);
  }
}
const _t = (o) => (t, e, i, s, a, r, n, l, u, c, f) => (
    o._lineVertexBuffer.add(t, e, n, l, i, s, a, r, u, c, f, o._ddValues),
    o._lineVertexBuffer.index - 1
  ),
  It = (o) => (t, e, i) => {
    o._lineIndexBuffer.add(t, e, i);
  };
function wt(o, t) {
  return o.iconMosaicItem && t.iconMosaicItem
    ? o.iconMosaicItem.page === t.iconMosaicItem.page
      ? 0
      : o.iconMosaicItem.page - t.iconMosaicItem.page
    : o.iconMosaicItem && !t.iconMosaicItem
    ? 1
    : !o.iconMosaicItem && t.iconMosaicItem
    ? -1
    : 0;
}
class H extends Me {
  constructor(t, e, i, s, a, r, n, l) {
    super(t, e, l.getSpriteItems()),
      (this.type = we.SYMBOL),
      (this._markerMap = new Map()),
      (this._glyphMap = new Map()),
      (this._glyphBufferDataStorage = new Map()),
      (this._isIconSDF = !1),
      (this._iconVertexBuffer = i),
      (this._iconIndexBuffer = s),
      (this._textVertexBuffer = a),
      (this._textIndexBuffer = r),
      (this._placementEngine = n),
      (this._workerTileHandler = l);
  }
  get markerPageMap() {
    return this._markerMap;
  }
  get glyphsPageMap() {
    return this._glyphMap;
  }
  get symbolInstances() {
    return this._symbolInstances;
  }
  getResources(t, e, i) {
    const s = this.layer,
      a = this.zoom;
    t && t.setExtent(this.layerExtent);
    const r = s.getLayoutProperty("icon-image"),
      n = s.getLayoutProperty("text-field");
    let l = s.getLayoutProperty("text-transform"),
      u = s.getLayoutProperty("text-font");
    const c = [];
    let f, h, y, d;
    r && !r.isDataDriven && (f = r.getValue(a)),
      n && !n.isDataDriven && (h = n.getValue(a)),
      (l && l.isDataDriven) ||
        ((y = s.getLayoutValue("text-transform", a)), (l = null)),
      (u && u.isDataDriven) ||
        ((d = s.getLayoutValue("text-font", a)), (u = null));
    for (const g of this._features) {
      const M = g.getGeometry(t);
      if (!M || M.length === 0) continue;
      let x, m;
      r &&
        ((x = r.isDataDriven
          ? r.getValue(a, g)
          : this._replaceKeys(f, g.values)),
        x && e(x));
      let p = !1;
      if (
        n &&
        ((m = n.isDataDriven
          ? n.getValue(a, g)
          : this._replaceKeys(h, g.values)),
        m)
      ) {
        switch (
          ((m = m.replace(
            /\\n/g,
            `
`
          )),
          l && (y = l.getValue(a, g)),
          y)
        ) {
          case Fe.LOWERCASE:
            m = m.toLowerCase();
            break;
          case Fe.UPPERCASE:
            m = m.toUpperCase();
        }
        if (H._bidiEngine.hasBidiChar(m)) {
          let b;
          (b = H._bidiEngine.checkContextual(m) === "rtl" ? "IDNNN" : "ICNNN"),
            (m = H._bidiEngine.bidiTransform(m, b, "VLYSN")),
            (p = !0);
        }
        const w = m.length;
        if (w > 0) {
          u && (d = u.getValue(a, g));
          for (const b of d) {
            let B = i[b];
            B || (B = i[b] = new Set());
            for (let T = 0; T < w; T++) {
              const V = m.charCodeAt(T);
              B.add(V);
            }
          }
        }
      }
      if (!x && !m) continue;
      const _ = s.getLayoutValue("symbol-sort-key", a, g),
        I = {
          feature: g,
          sprite: x,
          label: m,
          rtl: p,
          geometry: M,
          hash: (m ? ve(m) : 0) ^ (x ? ve(x) : 0),
          priority: _,
          textFont: d,
        };
      c.push(I);
    }
    this._symbolFeatures = c;
  }
  processFeatures(t) {
    t && t.setExtent(this.layerExtent);
    const e = this.layer,
      i = this.zoom,
      s = e.getLayoutValue("symbol-placement", i),
      a = s !== Te.POINT,
      r = 8 * e.getLayoutValue("symbol-spacing", i),
      n = e.getLayoutProperty("icon-image"),
      l = e.getLayoutProperty("text-field"),
      u = n ? new rt(e, i, a) : null,
      c = l ? new nt(e, i, a) : null,
      f = this._workerTileHandler;
    let h;
    n && (h = f.getSpriteItems()),
      (this._iconIndexStart = 3 * this._iconIndexBuffer.index),
      (this._textIndexStart = 3 * this._textIndexBuffer.index),
      (this._iconIndexCount = 0),
      (this._textIndexCount = 0),
      this._markerMap.clear(),
      this._glyphMap.clear();
    const y = [];
    let d = 1;
    c && c.size && (d = c.size / Y);
    const g = c ? c.maxAngle * De : 0,
      M = c ? 8 * c.size : 0;
    for (const x of this._symbolFeatures) {
      let m, p;
      u &&
        h &&
        x.sprite &&
        ((m = h[x.sprite]), m && m.sdf && (this._isIconSDF = !0)),
        m && u.update(i, x.feature);
      let _ = 0;
      const I = x.label;
      if (I) {
        qe(c), c.update(i, x.feature);
        const w =
          a && c.rotationAlignment === re.MAP
            ? c.keepUpright
            : c.writingMode && c.writingMode.includes(et.VERTICAL);
        let b = 0.5;
        switch (c.anchor) {
          case v.TOP_LEFT:
          case v.LEFT:
          case v.BOTTOM_LEFT:
            b = 0;
            break;
          case v.TOP_RIGHT:
          case v.RIGHT:
          case v.BOTTOM_RIGHT:
            b = 1;
        }
        let B = 0.5;
        switch (c.anchor) {
          case v.TOP_LEFT:
          case v.TOP:
          case v.TOP_RIGHT:
            B = 0;
            break;
          case v.BOTTOM_LEFT:
          case v.BOTTOM:
          case v.BOTTOM_RIGHT:
            B = 1;
        }
        let T = 0.5;
        switch (c.justify) {
          case Be.AUTO:
            T = b;
            break;
          case Be.LEFT:
            T = 0;
            break;
          case Be.RIGHT:
            T = 1;
        }
        const V = c.letterSpacing * Y,
          D = a ? 0 : c.maxWidth * Y,
          P = c.lineHeight * Y,
          k = x.textFont.map((E) => f.getGlyphItems(E));
        if (
          ((p = new We(k, D, P, V, b, B, T).getShaping(I, x.rtl, w)),
          p && p.length > 0)
        ) {
          let E = 1e30,
            L = -1e30;
          for (const S of p) (E = Math.min(E, S.x)), (L = Math.max(L, S.x));
          _ = (L - E + 48) * d * 8;
        }
      }
      for (let w of x.geometry) {
        const b = [];
        if (s === Te.LINE) {
          if (p != null && p.length && c != null && c.size) {
            const B = 8 * c.size * (2 + Math.min(2, 4 * Math.abs(c.offset[1])));
            w = H._smoothVertices(w, B);
          }
          H._pushAnchors(b, w, r, _);
        } else
          s === Te.LINE_CENTER
            ? H._pushCenterAnchor(b, w)
            : x.feature.type === Qe.Polygon
            ? H._pushCentroid(b, w)
            : b.push(new _e(w[0].x, w[0].y));
        for (const B of b) {
          if (
            B.x < 0 ||
            B.x > 4096 ||
            B.y < 0 ||
            B.y > 4096 ||
            (a &&
              _ > 0 &&
              (c == null ? void 0 : c.rotationAlignment) === re.MAP &&
              !H._honorsTextMaxAngle(w, B, _, g, M))
          )
            continue;
          const T = {
            shaping: p,
            line: w,
            iconMosaicItem: m,
            anchor: B,
            symbolFeature: x,
            textColliders: [],
            iconColliders: [],
            textVertexRanges: [],
            iconVertexRanges: [],
          };
          y.push(T), this._processFeature(T, u, c);
        }
      }
    }
    y.sort(wt), this._addPlacedGlyphs(), (this._symbolInstances = y);
  }
  serialize() {
    let t = 11;
    (t += this.layerUIDs.length),
      (t += 3 * this.markerPageMap.size),
      (t += 3 * this.glyphsPageMap.size),
      (t += H._symbolsSerializationLength(this._symbolInstances)),
      (t += this._iconVertexBuffer.array.length),
      (t += this._iconIndexBuffer.array.length),
      (t += this._textVertexBuffer.array.length),
      (t += this._textIndexBuffer.array.length);
    const e = new Uint32Array(t),
      i = new Int32Array(e.buffer),
      s = new Float32Array(e.buffer);
    let a = 0;
    (e[a++] = this.type), (e[a++] = this.layerUIDs.length);
    for (let r = 0; r < this.layerUIDs.length; r++) e[a++] = this.layerUIDs[r];
    (e[a++] = this._isIconSDF ? 1 : 0), (e[a++] = this.markerPageMap.size);
    for (const [r, [n, l]] of this.markerPageMap)
      (e[a++] = r), (e[a++] = n), (e[a++] = l);
    e[a++] = this.glyphsPageMap.size;
    for (const [r, [n, l]] of this.glyphsPageMap)
      (e[a++] = r), (e[a++] = n), (e[a++] = l);
    (e[a++] = this._iconVertexBuffer.index / 4),
      (e[a++] = this._textVertexBuffer.index / 4),
      (a = H.serializeSymbols(e, i, s, a, this._symbolInstances)),
      (e[a++] = this._iconVertexBuffer.array.length);
    for (let r = 0; r < this._iconVertexBuffer.array.length; r++)
      i[a++] = this._iconVertexBuffer.array[r];
    e[a++] = this._iconIndexBuffer.array.length;
    for (let r = 0; r < this._iconIndexBuffer.array.length; r++)
      e[a++] = this._iconIndexBuffer.array[r];
    e[a++] = this._textVertexBuffer.array.length;
    for (let r = 0; r < this._textVertexBuffer.array.length; r++)
      i[a++] = this._textVertexBuffer.array[r];
    e[a++] = this._textIndexBuffer.array.length;
    for (let r = 0; r < this._textIndexBuffer.array.length; r++)
      e[a++] = this._textIndexBuffer.array[r];
    return e.buffer;
  }
  static _symbolsSerializationLength(t) {
    let e = 0;
    e += 1;
    for (const i of t || []) {
      (e += 4), (e += 1);
      for (const s of i.textColliders) e += 10;
      for (const s of i.iconColliders) e += 10;
      (e += 1),
        (e += 2 * i.textVertexRanges.length),
        (e += 1),
        (e += 2 * i.iconVertexRanges.length);
    }
    return e;
  }
  static serializeSymbols(t, e, i, s, a) {
    (a = a || []), (e[s++] = a.length);
    for (const r of a) {
      (e[s++] = r.anchor.x),
        (e[s++] = r.anchor.y),
        (e[s++] = r.symbolFeature.hash),
        (e[s++] = r.symbolFeature.priority),
        (e[s++] = r.textColliders.length + r.iconColliders.length);
      for (const n of r.textColliders)
        (e[s++] = n.xTile),
          (e[s++] = n.yTile),
          (e[s++] = n.dxPixels),
          (e[s++] = n.dyPixels),
          (e[s++] = n.hard ? 1 : 0),
          (e[s++] = n.partIndex),
          (i[s++] = n.minLod),
          (i[s++] = n.maxLod),
          (e[s++] = n.width),
          (e[s++] = n.height);
      for (const n of r.iconColliders)
        (e[s++] = n.xTile),
          (e[s++] = n.yTile),
          (e[s++] = n.dxPixels),
          (e[s++] = n.dyPixels),
          (e[s++] = n.hard ? 1 : 0),
          (e[s++] = n.partIndex),
          (i[s++] = n.minLod),
          (i[s++] = n.maxLod),
          (e[s++] = n.width),
          (e[s++] = n.height);
      e[s++] = r.textVertexRanges.length;
      for (const [n, l] of r.textVertexRanges) (e[s++] = n), (e[s++] = l);
      e[s++] = r.iconVertexRanges.length;
      for (const [n, l] of r.iconVertexRanges) (e[s++] = n), (e[s++] = l);
    }
    return s;
  }
  _replaceKeys(t, e) {
    return t.replace(/{([^{}]+)}/g, (i, s) => (s in e ? e[s] : ""));
  }
  _processFeature(t, e, i) {
    const { line: s, iconMosaicItem: a, shaping: r, anchor: n } = t,
      l = this.zoom,
      u = this.layer,
      c = !!a;
    let f = !0;
    c && (f = (e == null ? void 0 : e.optional) || !a);
    const h = r && r.length > 0,
      y = !h || (i == null ? void 0 : i.optional);
    let d, g;
    if (
      (c && (d = this._placementEngine.getIconPlacement(n, a, e)),
      (d || f) &&
        (h && (g = this._placementEngine.getTextPlacement(n, r, s, i)), g || y))
    ) {
      if (
        ((d && g) ||
          (y || f
            ? y || g
              ? f || d || (g = null)
              : (d = null)
            : ((d = null), (g = null))),
        g)
      ) {
        const M = u.hasDataDrivenText
          ? u.textMaterial.encodeAttributes(t.symbolFeature.feature, l, u)
          : null;
        if (
          (this._storePlacedGlyphs(t, g.shapes, l, i.rotationAlignment, M),
          g.textColliders)
        ) {
          t.textColliders = g.textColliders;
          for (const x of g.textColliders) {
            (x.minLod = Math.max(l + Q(x.minLod), 0)),
              (x.maxLod = Math.min(l + Q(x.maxLod), 25));
            const m = x.angle;
            if (m) {
              const p = Math.cos(m),
                _ = Math.sin(m),
                I = x.dxPixels * p - x.dyPixels * _,
                w = x.dxPixels * _ + x.dyPixels * p,
                b = (x.dxPixels + x.width) * p - x.dyPixels * _,
                B = (x.dxPixels + x.width) * _ + x.dyPixels * p,
                T = x.dxPixels * p - (x.dyPixels + x.height) * _,
                V = x.dxPixels * _ + (x.dyPixels + x.height) * p,
                D = (x.dxPixels + x.width) * p - (x.dyPixels + x.height) * _,
                P = (x.dxPixels + x.width) * _ + (x.dyPixels + x.height) * p,
                k = Math.min(I, b, T, D),
                E = Math.max(I, b, T, D),
                L = Math.min(w, B, V, P),
                S = Math.max(w, B, V, P);
              (x.dxPixels = k),
                (x.dyPixels = L),
                (x.width = E - k),
                (x.height = S - L);
            }
          }
        }
      }
      if (d) {
        const M = u.hasDataDrivenIcon
          ? u.iconMaterial.encodeAttributes(t.symbolFeature.feature, l, u)
          : null;
        if (
          (this._addPlacedIcons(
            t,
            d.shapes,
            l,
            a.page,
            e.rotationAlignment === re.VIEWPORT,
            M
          ),
          d.iconColliders)
        ) {
          t.iconColliders = d.iconColliders;
          for (const x of d.iconColliders) {
            (x.minLod = Math.max(l + Q(x.minLod), 0)),
              (x.maxLod = Math.min(l + Q(x.maxLod), 25));
            const m = x.angle;
            if (m) {
              const p = Math.cos(m),
                _ = Math.sin(m),
                I = x.dxPixels * p - x.dyPixels * _,
                w = x.dxPixels * _ + x.dyPixels * p,
                b = (x.dxPixels + x.width) * p - x.dyPixels * _,
                B = (x.dxPixels + x.width) * _ + x.dyPixels * p,
                T = x.dxPixels * p - (x.dyPixels + x.height) * _,
                V = x.dxPixels * _ + (x.dyPixels + x.height) * p,
                D = (x.dxPixels + x.width) * p - (x.dyPixels + x.height) * _,
                P = (x.dxPixels + x.width) * _ + (x.dyPixels + x.height) * p,
                k = Math.min(I, b, T, D),
                E = Math.max(I, b, T, D),
                L = Math.min(w, B, V, P),
                S = Math.max(w, B, V, P);
              (x.dxPixels = k),
                (x.dyPixels = L),
                (x.width = E - k),
                (x.height = S - L);
            }
          }
        }
      }
    }
  }
  _addPlacedIcons(t, e, i, s, a, r) {
    const n = Math.max(i - 1, 0),
      l = this._iconVertexBuffer,
      u = this._iconIndexBuffer,
      c = this._markerMap;
    for (const f of e) {
      const h = a ? 0 : Math.max(i + Q(f.minzoom), n),
        y = a ? 25 : Math.min(i + Q(f.maxzoom), 25);
      if (y <= h) continue;
      const d = f.tl,
        g = f.tr,
        M = f.bl,
        x = f.br,
        m = f.mosaicRect,
        p = f.labelAngle,
        _ = f.minAngle,
        I = f.maxAngle,
        w = f.anchor,
        b = l.index,
        B = m.x,
        T = m.y,
        V = B + m.width,
        D = T + m.height,
        P = l.index;
      l.add(w.x, w.y, d.x, d.y, B, T, p, _, I, h, y, r),
        l.add(w.x, w.y, g.x, g.y, V, T, p, _, I, h, y, r),
        l.add(w.x, w.y, M.x, M.y, B, D, p, _, I, h, y, r),
        l.add(w.x, w.y, x.x, x.y, V, D, p, _, I, h, y, r),
        t.iconVertexRanges.length > 0 &&
        t.iconVertexRanges[0][0] + t.iconVertexRanges[0][1] === P
          ? (t.iconVertexRanges[0][1] += 4)
          : t.iconVertexRanges.push([P, 4]),
        u.add(b + 0, b + 1, b + 2),
        u.add(b + 1, b + 2, b + 3),
        c.has(s)
          ? (c.get(s)[1] += 6)
          : c.set(s, [this._iconIndexStart + this._iconIndexCount, 6]),
        (this._iconIndexCount += 6);
    }
  }
  _addPlacedGlyphs() {
    const t = this._textVertexBuffer,
      e = this._textIndexBuffer,
      i = this._glyphMap;
    for (const [s, a] of this._glyphBufferDataStorage)
      for (const r of a) {
        const n = t.index,
          l = r.symbolInstance,
          u = r.ddAttributes,
          c = t.index;
        t.add(
          r.glyphAnchor[0],
          r.glyphAnchor[1],
          r.tl[0],
          r.tl[1],
          r.xmin,
          r.ymin,
          r.labelAngle,
          r.minAngle,
          r.maxAngle,
          r.minLod,
          r.maxLod,
          u
        ),
          t.add(
            r.glyphAnchor[0],
            r.glyphAnchor[1],
            r.tr[0],
            r.tr[1],
            r.xmax,
            r.ymin,
            r.labelAngle,
            r.minAngle,
            r.maxAngle,
            r.minLod,
            r.maxLod,
            u
          ),
          t.add(
            r.glyphAnchor[0],
            r.glyphAnchor[1],
            r.bl[0],
            r.bl[1],
            r.xmin,
            r.ymax,
            r.labelAngle,
            r.minAngle,
            r.maxAngle,
            r.minLod,
            r.maxLod,
            u
          ),
          t.add(
            r.glyphAnchor[0],
            r.glyphAnchor[1],
            r.br[0],
            r.br[1],
            r.xmax,
            r.ymax,
            r.labelAngle,
            r.minAngle,
            r.maxAngle,
            r.minLod,
            r.maxLod,
            u
          ),
          l.textVertexRanges.length > 0 &&
          l.textVertexRanges[0][0] + l.textVertexRanges[0][1] === c
            ? (l.textVertexRanges[0][1] += 4)
            : l.textVertexRanges.push([c, 4]),
          e.add(n + 0, n + 1, n + 2),
          e.add(n + 1, n + 2, n + 3),
          i.has(s)
            ? (i.get(s)[1] += 6)
            : i.set(s, [this._textIndexStart + this._textIndexCount, 6]),
          (this._textIndexCount += 6);
      }
    this._glyphBufferDataStorage.clear();
  }
  _storePlacedGlyphs(t, e, i, s, a) {
    const r = Math.max(i - 1, 0),
      n = s === re.VIEWPORT;
    let l, u, c, f, h, y, d, g, M, x, m;
    for (const p of e)
      (l = n ? 0 : Math.max(i + Q(p.minzoom), r)),
        (u = n ? 25 : Math.min(i + Q(p.maxzoom), 25)),
        u <= l ||
          ((c = p.tl),
          (f = p.tr),
          (h = p.bl),
          (y = p.br),
          (d = p.labelAngle),
          (g = p.minAngle),
          (M = p.maxAngle),
          (x = p.anchor),
          (m = p.mosaicRect),
          this._glyphBufferDataStorage.has(p.page) ||
            this._glyphBufferDataStorage.set(p.page, []),
          this._glyphBufferDataStorage.get(p.page).push({
            glyphAnchor: [x.x, x.y],
            tl: [c.x, c.y],
            tr: [f.x, f.y],
            bl: [h.x, h.y],
            br: [y.x, y.y],
            xmin: m.x,
            ymin: m.y,
            xmax: m.x + m.width,
            ymax: m.y + m.height,
            labelAngle: d,
            minAngle: g,
            maxAngle: M,
            minLod: l,
            maxLod: u,
            placementLod: r,
            symbolInstance: t,
            ddAttributes: a,
          }));
  }
  static _pushAnchors(t, e, i, s) {
    i += s;
    let a = 0;
    const r = e.length - 1;
    for (let h = 0; h < r; h++) a += A.distance(e[h], e[h + 1]);
    let n = s || i;
    if (((n *= 0.5), a <= n)) return;
    const l = n / a;
    let u = 0,
      c = -(i = a / Math.max(Math.round(a / i), 1)) / 2;
    const f = e.length - 1;
    for (let h = 0; h < f; h++) {
      const y = e[h],
        d = e[h + 1],
        g = d.x - y.x,
        M = d.y - y.y,
        x = Math.sqrt(g * g + M * M);
      let m;
      for (; c + i < u + x; ) {
        c += i;
        const p = (c - u) / x,
          _ = me(y.x, d.x, p),
          I = me(y.y, d.y, p);
        m === void 0 && (m = Math.atan2(M, g)), t.push(new _e(_, I, m, h, l));
      }
      u += x;
    }
  }
  static _pushCenterAnchor(t, e) {
    let i = 0;
    const s = e.length - 1;
    for (let l = 0; l < s; l++) i += A.distance(e[l], e[l + 1]);
    const a = i / 2;
    let r = 0;
    const n = e.length - 1;
    for (let l = 0; l < n; l++) {
      const u = e[l],
        c = e[l + 1],
        f = c.x - u.x,
        h = c.y - u.y,
        y = Math.sqrt(f * f + h * h);
      if (a < r + y) {
        const d = (a - r) / y,
          g = me(u.x, c.x, d),
          M = me(u.y, c.y, d),
          x = Math.atan2(h, f);
        return void t.push(new _e(g, M, x, l, 0));
      }
      r += y;
    }
  }
  static _deviation(t, e, i) {
    const s = (e.x - t.x) * (i.x - e.x) + (e.y - t.y) * (i.y - e.y),
      a = (e.x - t.x) * (i.y - e.y) - (e.y - t.y) * (i.x - e.x);
    return Math.atan2(a, s);
  }
  static _honorsTextMaxAngle(t, e, i, s, a) {
    let r = 0;
    const n = i / 2;
    let l = new A(e.x, e.y),
      u = e.segment + 1;
    for (; r > -n; ) {
      if ((--u, u < 0)) return !1;
      (r -= A.distance(t[u], l)), (l = t[u]);
    }
    r += A.distance(t[u], t[u + 1]);
    const c = [];
    let f = 0;
    const h = t.length;
    for (; r < n; ) {
      const y = t[u];
      let d,
        g = u;
      do {
        if ((++g, g === h)) return !1;
        d = t[g];
      } while (d.isEqual(y));
      let M,
        x = g;
      do {
        if ((++x, x === h)) return !1;
        M = t[x];
      } while (M.isEqual(d));
      const m = this._deviation(y, d, M);
      for (
        c.push({ deviation: m, distToAnchor: r }), f += m;
        r - c[0].distToAnchor > a;

      )
        f -= c.shift().deviation;
      if (Math.abs(f) > s) return !1;
      (r += A.distance(d, M)), (u = g);
    }
    return !0;
  }
  static _smoothVertices(t, e) {
    if (e <= 0) return t;
    let i = t.length;
    if (i < 3) return t;
    const s = [];
    let a = 0,
      r = 0;
    s.push(0);
    for (let g = 1; g < i; g++) {
      const M = A.distance(t[g], t[g - 1]);
      M > 0 && ((a += M), s.push(a), r++, r !== g && (t[r] = t[g]));
    }
    if (((i = r + 1), i < 3)) return t;
    e = Math.min(e, 0.2 * a);
    const n = t[0].x,
      l = t[0].y,
      u = t[i - 1].x,
      c = t[i - 1].y,
      f = A.sub(t[0], t[1]);
    f.normalize(),
      (t[0].x += e * f.x),
      (t[0].y += e * f.y),
      f.assignSub(t[i - 1], t[i - 2]),
      f.normalize(),
      (t[i - 1].x += e * f.x),
      (t[i - 1].y += e * f.y),
      (s[0] -= e),
      (s[i - 1] += e);
    const h = [];
    h.push(new A(n, l));
    const y = 1e-6,
      d = 0.5 * e;
    for (let g = 1; g < i - 1; g++) {
      let M = 0,
        x = 0,
        m = 0;
      for (let p = g - 1; p >= 0; p--) {
        const _ = d + s[p + 1] - s[g];
        if (_ < 0) break;
        const I = s[p + 1] - s[p],
          w = s[g] - s[p] < d ? 1 : _ / I;
        if (w < y) break;
        const b = w * w,
          B = w * _ - 0.5 * b * I,
          T = (w * I) / e,
          V = t[p + 1],
          D = t[p].x - V.x,
          P = t[p].y - V.y;
        (M +=
          (T / B) *
          (V.x * w * _ + 0.5 * b * (_ * D - I * V.x) - (b * w * I * D) / 3)),
          (x +=
            (T / B) *
            (V.y * w * _ + 0.5 * b * (_ * P - I * V.y) - (b * w * I * P) / 3)),
          (m += T);
      }
      for (let p = g + 1; p < i; p++) {
        const _ = d - s[p - 1] + s[g];
        if (_ < 0) break;
        const I = s[p] - s[p - 1],
          w = s[p] - s[g] < d ? 1 : _ / I;
        if (w < y) break;
        const b = w * w,
          B = w * _ - 0.5 * b * I,
          T = (w * I) / e,
          V = t[p - 1],
          D = t[p].x - V.x,
          P = t[p].y - V.y;
        (M +=
          (T / B) *
          (V.x * w * _ + 0.5 * b * (_ * D - I * V.x) - (b * w * I * D) / 3)),
          (x +=
            (T / B) *
            (V.y * w * _ + 0.5 * b * (_ * P - I * V.y) - (b * w * I * P) / 3)),
          (m += T);
      }
      h.push(new A(M / m, x / m));
    }
    return (
      h.push(new A(u, c)),
      (t[0].x = n),
      (t[0].y = l),
      (t[i - 1].x = u),
      (t[i - 1].y = c),
      h
    );
  }
  static _pushCentroid(t, e) {
    const a = e.length - 1;
    let r = 0,
      n = 0,
      l = 0,
      u = e[0].x,
      c = e[0].y;
    u > 4096 && (u = 4096),
      u < 0 && (u = 0),
      c > 4096 && (c = 4096),
      c < 0 && (c = 0);
    for (let f = 1; f < a; f++) {
      let h = e[f].x,
        y = e[f].y,
        d = e[f + 1].x,
        g = e[f + 1].y;
      h > 4096 && (h = 4096),
        h < 0 && (h = 0),
        y > 4096 && (y = 4096),
        y < 0 && (y = 0),
        d > 4096 && (d = 4096),
        d < 0 && (d = 0),
        g > 4096 && (g = 4096),
        g < 0 && (g = 0);
      const M = (h - u) * (g - c) - (d - u) * (y - c);
      (r += M * (u + h + d)), (n += M * (c + y + g)), (l += M);
    }
    (r /= 3 * l), (n /= 3 * l), isNaN(r) || isNaN(n) || t.push(new _e(r, n));
  }
}
var q;
(H._bidiEngine = new ot()),
  (function (o) {
    (o[(o.INITIALIZED = 0)] = "INITIALIZED"),
      (o[(o.NO_DATA = 1)] = "NO_DATA"),
      (o[(o.READY = 2)] = "READY"),
      (o[(o.MODIFIED = 3)] = "MODIFIED"),
      (o[(o.INVALID = 4)] = "INVALID");
  })(q || (q = {}));
class Mt {
  constructor(t, e, i, s, a) {
    var c;
    if (
      ((this._pbfTiles = {}),
      (this._tileClippers = {}),
      (this._client = i),
      (this._tile = e),
      a)
    ) {
      this._styleLayerUIDs = new Set();
      for (const f of a) this._styleLayerUIDs.add(f);
    }
    (this._styleRepository = s),
      (this._layers =
        ((c = this._styleRepository) == null ? void 0 : c.layers) ?? []);
    const [r, n, l] = e.tileKey.split("/").map(parseFloat);
    this._level = r;
    const u = 8 + Math.max(5 * (this._level - 14), 0);
    for (const f of Object.keys(t)) {
      const h = t[f];
      if (
        ((this._pbfTiles[f] = new Ye(
          new Uint8Array(h.protobuff),
          new DataView(h.protobuff)
        )),
        h.refKey)
      ) {
        const [y] = h.refKey.split("/").map(parseFloat),
          d = r - y;
        if (d > 0) {
          const g = (1 << d) - 1,
            M = n & g,
            x = l & g;
          this._tileClippers[f] = new Xe(d, M, x, 8, u);
        }
      }
      this._tileClippers[f] || (this._tileClippers[f] = new $e());
    }
  }
  _canParseStyleLayer(t) {
    return !this._styleLayerUIDs || this._styleLayerUIDs.has(t);
  }
  async parse(t) {
    const e = it(),
      i = this._initialize(t),
      { returnedBuckets: s } = i;
    this._processLayers(i), this._linkReferences(i), this._filterFeatures(i);
    const a = [],
      r = new Set(),
      n = (c, f) => {
        r.has(c) || (a.push({ name: c, repeat: f }), r.add(c));
      },
      l = {};
    for (const c of s) c.getResources(c.tileClipper, n, l);
    if (this._tile.status === q.INVALID) return [];
    const u = this._fetchResources(a, l, t);
    return Promise.all([...u, e]).then(() =>
      this._processFeatures(i.returnedBuckets)
    );
  }
  _initialize(t) {
    return {
      signal: t && t.signal,
      sourceNameToTileData: this._parseTileData(this._pbfTiles),
      layers: this._layers,
      zoom: this._level,
      sourceNameToTileClipper: this._tileClippers,
      sourceNameToUniqueSourceLayerBuckets: {},
      sourceNameToUniqueSourceLayers: {},
      returnedBuckets: [],
      layerIdToBucket: {},
      referencerUIDToReferencedId: new Map(),
    };
  }
  _processLayers(t) {
    const {
      sourceNameToTileData: e,
      layers: i,
      zoom: s,
      sourceNameToTileClipper: a,
      sourceNameToUniqueSourceLayerBuckets: r,
      sourceNameToUniqueSourceLayers: n,
      returnedBuckets: l,
      layerIdToBucket: u,
      referencerUIDToReferencedId: c,
    } = t;
    for (let f = i.length - 1; f >= 0; f--) {
      const h = i[f];
      if (
        !this._canParseStyleLayer(h.uid) ||
        (h.minzoom && s < Math.floor(h.minzoom)) ||
        (h.maxzoom && s >= h.maxzoom) ||
        h.type === te.BACKGROUND ||
        !e[h.source] ||
        !a[h.source]
      )
        continue;
      const y = e[h.source],
        d = a[h.source],
        g = h.sourceLayer,
        M = y[g];
      if (M) {
        let x = n[h.source];
        if (
          (x || (x = n[h.source] = new Set()),
          x.add(h.sourceLayer),
          h.refLayerId)
        )
          c.set(h.uid, h.refLayerId);
        else {
          const m = this._createBucket(h);
          if (m) {
            (m.layerUIDs = [h.uid]),
              (m.layerExtent = M.extent),
              (m.tileClipper = d);
            let p = r[h.source];
            p || (p = r[h.source] = {});
            let _ = p[g];
            _ || (_ = p[g] = []), _.push(m), l.push(m), (u[h.id] = m);
          }
        }
      }
    }
  }
  _linkReferences(t) {
    const { layerIdToBucket: e, referencerUIDToReferencedId: i } = t;
    i.forEach((s, a) => {
      e[s] && e[s].layerUIDs.push(a);
    });
  }
  _filterFeatures(t) {
    const {
        signal: e,
        sourceNameToTileData: i,
        sourceNameToUniqueSourceLayerBuckets: s,
        sourceNameToUniqueSourceLayers: a,
      } = t,
      r = 10 * this._level,
      n = 10 * (this._level + 1),
      l = [],
      u = [];
    for (const c of Object.keys(a))
      a[c].forEach((f) => {
        l.push(f), u.push(c);
      });
    for (let c = 0; c < l.length; c++) {
      const f = u[c],
        h = l[c];
      if (!i[f] || !s[f]) continue;
      const y = i[f][h],
        d = s[f][h];
      if (!d || d.length === 0) continue;
      if (Ze(e)) return;
      const g = y.getData();
      for (; g.nextTag(2); ) {
        const M = g.getMessage(),
          x = new ut(M, y);
        M.release();
        const m = x.values;
        if (m) {
          const p = m._minzoom;
          if (p && p >= n) continue;
          const _ = m._maxzoom;
          if (_ && _ <= r) continue;
        }
        for (const p of d) p.pushFeature(x);
      }
    }
  }
  _fetchResources(t, e, i) {
    const s = [],
      a = this._tile.getWorkerTileHandler();
    let r, n;
    t.length > 0 && ((r = a.fetchSprites(t, this._client, i)), s.push(r));
    for (const l in e) {
      const u = e[l];
      u.size > 0 &&
        ((n = a.fetchGlyphs(this._tile.tileKey, l, u, this._client, i)),
        s.push(n));
    }
    return s;
  }
  _processFeatures(t) {
    const e = t.filter(
      (i) => i.hasFeatures() || this._canParseStyleLayer(i.layer.uid)
    );
    for (const i of e) i.processFeatures(i.tileClipper);
    return e;
  }
  _parseTileData(t) {
    const e = {};
    for (const i of Object.keys(t)) {
      const s = t[i],
        a = {};
      for (; s.next(); )
        switch (s.tag()) {
          case 3: {
            const r = s.getMessage(),
              n = new Le(r);
            r.release(), (a[n.name] = n);
            break;
          }
          default:
            s.skip();
        }
      e[i] = a;
    }
    return e;
  }
  _createBucket(t) {
    switch (t.type) {
      case te.BACKGROUND:
        return null;
      case te.FILL:
        return this._createFillBucket(t);
      case te.LINE:
        return this._createLineBucket(t);
      case te.CIRCLE:
        return this._createCircleBucket(t);
      case te.SYMBOL:
        return this._createSymbolBucket(t);
    }
  }
  _createFillBucket(t) {
    return new pt(
      t,
      this._level,
      this._tile.getWorkerTileHandler().getSpriteItems(),
      new dt(t.fillMaterial.getStride()),
      new se(),
      new yt(t.outlineMaterial.getStride()),
      new se()
    );
  }
  _createLineBucket(t) {
    return new mt(
      t,
      this._level,
      this._tile.getWorkerTileHandler().getSpriteItems(),
      new ft(t.lineMaterial.getStride()),
      new se()
    );
  }
  _createCircleBucket(t) {
    return new gt(
      t,
      this._level,
      this._tile.getWorkerTileHandler().getSpriteItems(),
      new xt(t.circleMaterial.getStride()),
      new se()
    );
  }
  _createSymbolBucket(t) {
    const e = this._tile;
    return new H(
      t,
      this._level,
      new Ge(t.iconMaterial.getStride()),
      new se(),
      new Ge(t.textMaterial.getStride()),
      new se(),
      e.placementEngine,
      e.getWorkerTileHandler()
    );
  }
}
class bt {
  constructor(t, e, i, s) {
    (this.status = q.INITIALIZED),
      (this.placementEngine = new (class {
        getIconPlacement(a, r, n) {
          const l = new A(a.x, a.y),
            u = n.rotationAlignment === re.MAP,
            c = n.keepUpright;
          let f = n.rotate * De;
          u && (f += a.angle);
          const h = new Ue([]);
          return (
            (n.allowOverlap && n.ignorePlacement) ||
              !Re ||
              (h.iconColliders = []),
            this._addIconPlacement(h, l, r, n, f),
            u && c && this._addIconPlacement(h, l, r, n, f + ce),
            h
          );
        }
        _addIconPlacement(a, r, n, l, u) {
          const c = n.pixelRatio,
            f = n.width / c,
            h = n.height / c,
            y = l.offset;
          let d = y[0],
            g = y[1];
          switch (l.anchor) {
            case v.CENTER:
              (d -= f / 2), (g -= h / 2);
              break;
            case v.LEFT:
              g -= h / 2;
              break;
            case v.RIGHT:
              (d -= f), (g -= h / 2);
              break;
            case v.TOP:
              d -= f / 2;
              break;
            case v.BOTTOM:
              (d -= f / 2), (g -= h);
              break;
            case v.TOP_LEFT:
              break;
            case v.BOTTOM_LEFT:
              g -= h;
              break;
            case v.TOP_RIGHT:
              d -= f;
              break;
            case v.BOTTOM_RIGHT:
              (d -= f), (g -= h);
          }
          const M = n.rect,
            x = 2 / c,
            m = d - x,
            p = g - x,
            _ = m + M.width / c,
            I = p + M.height / c,
            w = new A(m, p),
            b = new A(_, I),
            B = new A(m, I),
            T = new A(_, p);
          if (u !== 0) {
            const D = Math.cos(u),
              P = Math.sin(u);
            w.rotate(D, P), b.rotate(D, P), B.rotate(D, P), T.rotate(D, P);
          }
          const V = new ze(w, T, B, b, M, u, 0, 256, r, ue, ie, 0);
          if (
            (a.shapes.push(V), (!l.allowOverlap || !l.ignorePlacement) && Re)
          ) {
            const D = l.size,
              P = l.padding,
              k = {
                xTile: r.x,
                yTile: r.y,
                dxPixels: d * D - P,
                dyPixels: g * D - P,
                hard: !l.optional,
                partIndex: 0,
                width: f * D + 2 * P,
                height: h * D + 2 * P,
                angle: u,
                minLod: ue,
                maxLod: ie,
              };
            a.iconColliders.push(k);
          }
        }
        getTextPlacement(a, r, n, l) {
          const u = new A(a.x, a.y),
            c = l.rotate * De,
            f = l.rotationAlignment === re.MAP,
            h = l.keepUpright,
            y = l.padding;
          let d = ue;
          const g = f ? a.angle : 0,
            M = a.segment >= 0 && f,
            x = l.allowOverlap && l.ignorePlacement ? null : [],
            m = [],
            p = !M;
          let _ = Number.POSITIVE_INFINITY,
            I = Number.NEGATIVE_INFINITY,
            w = _,
            b = I;
          const B = (M || f) && h,
            T = l.size / Y;
          let V = !1;
          for (const L of r)
            if (L.vertical) {
              V = !0;
              break;
            }
          let D,
            P = 0,
            k = 0;
          if (!M && V) {
            const L = We.getTextBox(r, l.lineHeight * Y);
            switch (l.anchor) {
              case v.LEFT:
                (P = L.height / 2), (k = -L.width / 2);
                break;
              case v.RIGHT:
                (P = -L.height / 2), (k = L.width / 2);
                break;
              case v.TOP:
                (P = L.height / 2), (k = L.width / 2);
                break;
              case v.BOTTOM:
                (P = -L.height / 2), (k = -L.width / 2);
                break;
              case v.TOP_LEFT:
                P = L.height;
                break;
              case v.BOTTOM_LEFT:
                k = -L.width;
                break;
              case v.TOP_RIGHT:
                k = L.width;
                break;
              case v.BOTTOM_RIGHT:
                P = -L.height;
            }
          }
          (P += l.offset[0] * Y), (k += l.offset[1] * Y);
          for (const L of r) {
            const S = L.glyphMosaicItem;
            if (!S || S.rect.isEmpty) continue;
            const O = S.rect,
              N = S.metrics,
              Z = S.page;
            if (x && p) {
              if (D !== void 0 && D !== L.y) {
                let C, z, U, G;
                V
                  ? ((C = -b + P), (z = _ + k), (U = b - w), (G = I - _))
                  : ((C = _ + P), (z = w + k), (U = I - _), (G = b - w));
                const K = {
                  xTile: a.x,
                  yTile: a.y,
                  dxPixels: C * T - y,
                  dyPixels: z * T - y,
                  hard: !l.optional,
                  partIndex: 1,
                  width: U * T + 2 * y,
                  height: G * T + 2 * y,
                  angle: c,
                  minLod: ue,
                  maxLod: ie,
                };
                x.push(K),
                  (_ = Number.POSITIVE_INFINITY),
                  (I = Number.NEGATIVE_INFINITY),
                  (w = _),
                  (b = I);
              }
              D = L.y;
            }
            const X = [];
            if (M) {
              const C = 0.5 * S.metrics.width,
                z = (L.x + N.left - 4 + C) * T * 8;
              if (
                ((d = this._placeGlyph(
                  a,
                  d,
                  z,
                  n,
                  a.segment,
                  1,
                  L.vertical,
                  Z,
                  X
                )),
                h &&
                  (d = this._placeGlyph(
                    a,
                    d,
                    z,
                    n,
                    a.segment,
                    -1,
                    L.vertical,
                    Z,
                    X
                  )),
                d >= 2)
              )
                break;
            } else
              X.push(new Ie(u, g, g, Z, !1)),
                f && h && X.push(new Ie(u, g + ce, g + ce, Z, !1));
            const j = L.x + N.left,
              ee = L.y - 17 - N.top,
              ae = j + N.width,
              be = ee + N.height;
            let F, W, fe, de, $, ye, Ve, Ae;
            if (!M && V)
              if (L.vertical) {
                const C = (j + ae) / 2 - N.height / 2,
                  z = (ee + be) / 2 + N.width / 2;
                (F = new A(-z - 4 + P, C - 4 + k)),
                  (W = new A(F.x + O.width, F.y + O.height)),
                  (fe = new A(F.x, W.y)),
                  (de = new A(W.x, F.y));
              } else
                (F = new A(4 - ee + P, j - 4 + k)),
                  (W = new A(F.x - O.height, F.y + O.width)),
                  (fe = new A(W.x, F.y)),
                  (de = new A(F.x, W.y));
            else
              (F = new A(j - 4 + P, ee - 4 + k)),
                (W = new A(F.x + O.width, F.y + O.height)),
                (fe = new A(F.x, W.y)),
                (de = new A(W.x, F.y));
            for (const C of X) {
              let z, U, G, K;
              if (C.alternateVerticalGlyph) {
                if (!$) {
                  const J = (ee + be) / 2 + k;
                  ($ = new A(
                    (j + ae) / 2 + P - N.height / 2 - 4,
                    J + N.width / 2 + 4
                  )),
                    (ye = new A($.x + O.height, $.y - O.width)),
                    (Ve = new A(ye.x, $.y)),
                    (Ae = new A($.x, ye.y));
                }
                (z = $), (U = Ve), (G = Ae), (K = ye);
              } else (z = F), (U = fe), (G = de), (K = W);
              const xe = ee,
                Pe = be,
                ge = C.glyphAngle + c;
              if (ge !== 0) {
                const J = Math.cos(ge),
                  pe = Math.sin(ge);
                (z = z.clone()),
                  (U = U == null ? void 0 : U.clone()),
                  (G = G == null ? void 0 : G.clone()),
                  (K = K == null ? void 0 : K.clone()),
                  z.rotate(J, pe),
                  K == null || K.rotate(J, pe),
                  U == null || U.rotate(J, pe),
                  G == null || G.rotate(J, pe);
              }
              let oe = 0,
                le = 256;
              if (
                (M && V
                  ? L.vertical
                    ? C.alternateVerticalGlyph
                      ? ((oe = 32), (le = 96))
                      : ((oe = 224), (le = 32))
                    : ((oe = 224), (le = 96))
                  : ((oe = 192), (le = 64)),
                m.push(
                  new ze(
                    z,
                    G,
                    U,
                    K,
                    O,
                    C.labelAngle,
                    oe,
                    le,
                    C.anchor,
                    C.minzoom,
                    C.maxzoom,
                    C.page
                  )
                ),
                x && (!B || this._legible(C.labelAngle)))
              ) {
                if (p)
                  j < _ && (_ = j),
                    xe < w && (w = xe),
                    ae > I && (I = ae),
                    Pe > b && (b = Pe);
                else if (C.minzoom < 2) {
                  const J = {
                    xTile: a.x,
                    yTile: a.y,
                    dxPixels: (j + P) * T - y,
                    dyPixels: (xe + P) * T - y,
                    hard: !l.optional,
                    partIndex: 1,
                    width: (ae - j) * T + 2 * y,
                    height: (Pe - xe) * T + 2 * y,
                    angle: ge,
                    minLod: C.minzoom,
                    maxLod: C.maxzoom,
                  };
                  x.push(J);
                }
              }
            }
          }
          if (d >= 2) return null;
          if (x && p) {
            let L, S, O, N;
            V
              ? ((L = -b + P), (S = _ + k), (O = b - w), (N = I - _))
              : ((L = _ + P), (S = w + k), (O = I - _), (N = b - w));
            const Z = {
              xTile: a.x,
              yTile: a.y,
              dxPixels: L * T - y,
              dyPixels: S * T - y,
              hard: !l.optional,
              partIndex: 1,
              width: O * T + 2 * y,
              height: N * T + 2 * y,
              angle: c,
              minLod: ue,
              maxLod: ie,
            };
            x.push(Z);
          }
          const E = new Ue(m);
          return x && x.length > 0 && (E.textColliders = x), E;
        }
        _legible(a) {
          const r = Ke(a);
          return r < 65 || r >= 193;
        }
        _placeGlyph(a, r, n, l, u, c, f, h, y) {
          let d = c;
          const g = d < 0 ? Se(a.angle + ce, Ce) : a.angle;
          let M = 0;
          n < 0 && ((d *= -1), (n *= -1), (M = ce)), d > 0 && ++u;
          let x = new A(a.x, a.y),
            m = l[u],
            p = ie;
          if (l.length <= u) return p;
          for (;;) {
            const _ = m.x - x.x,
              I = m.y - x.y,
              w = Math.sqrt(_ * _ + I * I),
              b = Math.max(n / w, r),
              B = _ / w,
              T = I / w,
              V = Se(Math.atan2(T, B) + M, Ce);
            if (
              (y.push(new Ie(x, g, V, h, !1, b, p)),
              f && y.push(new Ie(x, g, V, h, !0, b, p)),
              b <= r)
            )
              return b;
            x = m.clone();
            do {
              if (((u += d), l.length <= u || u < 0)) return b;
              m = l[u];
            } while (x.isEqual(m));
            let D = m.x - x.x,
              P = m.y - x.y;
            const k = Math.sqrt(D * D + P * P);
            (D *= w / k), (P *= w / k), (x.x -= D), (x.y -= P), (p = b);
          }
        }
      })()),
      (this.tileKey = t),
      (this.refKeys = e),
      (this._workerTileHandler = i),
      (this._styleRepository = s);
  }
  release() {
    (this.tileKey = ""),
      (this.refKeys = null),
      (this.status = q.INITIALIZED),
      (this._workerTileHandler = null);
  }
  async parse(t, e) {
    const i = e && e.signal;
    if (Je(i)) {
      const c = () => {
        i.removeEventListener("abort", c), (this.status = q.INVALID);
      };
      i.addEventListener("abort", c);
    }
    let s;
    const a = { bucketsWithData: [], emptyBuckets: null };
    try {
      s = await this._parse(t, e);
    } catch (c) {
      if (He(c)) throw c;
      return { result: a, transferList: [] };
    }
    this.status = q.READY;
    const r = a.bucketsWithData,
      n = [];
    for (const c of s)
      if (c.hasFeatures()) {
        const f = c.serialize();
        r.push(f);
      } else n.push(c.layer.uid);
    const l = [...r];
    let u = null;
    return (
      n.length > 0 && ((u = Uint32Array.from(n)), l.push(u.buffer)),
      (a.emptyBuckets = u),
      { result: a, transferList: l }
    );
  }
  setObsolete() {
    this.status = q.INVALID;
  }
  getLayers() {
    return this._workerTileHandler.getLayers();
  }
  getWorkerTileHandler() {
    return this._workerTileHandler;
  }
  async _parse(t, e) {
    const i = t.sourceName2DataAndRefKey;
    return Object.keys(i).length === 0
      ? []
      : ((this.status = q.MODIFIED),
        new Mt(
          i,
          this,
          e.client,
          this._styleRepository,
          t.styleLayerUIDs
        ).parse(e));
  }
}
class jt {
  constructor() {
    (this._spriteInfo = {}), (this._glyphInfo = {});
  }
  reset() {
    return (this._spriteInfo = {}), (this._glyphInfo = {}), Promise.resolve();
  }
  getLayers() {
    var t;
    return ((t = this._styleRepository) == null ? void 0 : t.layers) ?? [];
  }
  async createTileAndParse(t, e) {
    const { key: i } = t,
      s = {};
    for (const r of Object.keys(t.sourceName2DataAndRefKey)) {
      const n = t.sourceName2DataAndRefKey[r];
      s[r] = n.refKey;
    }
    const a = new bt(i, s, this, this._styleRepository);
    try {
      return await a.parse(t, e);
    } catch (r) {
      if ((a.setObsolete(), a.release(), !He(r))) throw r;
      return null;
    }
  }
  updateStyle(t) {
    if (!t || t.length === 0 || !this._styleRepository) return;
    const e = this._styleRepository;
    for (const i of t) {
      const s = i.type,
        a = i.data;
      switch (s) {
        case he.PAINTER_CHANGED:
          e.setPaintProperties(a.layer, a.paint);
          break;
        case he.LAYOUT_CHANGED:
          e.setLayoutProperties(a.layer, a.layout);
          break;
        case he.LAYER_REMOVED:
          e.deleteStyleLayer(a.layer);
          break;
        case he.LAYER_CHANGED:
          e.setStyleLayer(a.layer, a.index);
          break;
        case he.SPRITES_CHANGED:
          this._spriteInfo = {};
      }
    }
  }
  setStyle(t) {
    (this._styleRepository = new at(t)),
      (this._spriteInfo = {}),
      (this._glyphInfo = {});
  }
  fetchSprites(t, e, i) {
    const s = [],
      a = this._spriteInfo;
    for (const r of t) a[r.name] === void 0 && s.push(r);
    return s.length === 0
      ? Promise.resolve()
      : e.invoke("getSprites", s, { signal: i && i.signal }).then((r) => {
          for (const n in r) {
            const l = r[n];
            a[n] = l;
          }
        });
  }
  getSpriteItems() {
    return this._spriteInfo;
  }
  fetchGlyphs(t, e, i, s, a) {
    const r = [];
    let n = this._glyphInfo[e];
    return (
      n
        ? i.forEach((l) => {
            n[l] || r.push(l);
          })
        : ((n = this._glyphInfo[e] = []), i.forEach((l) => r.push(l))),
      r.length === 0
        ? Promise.resolve()
        : s
            .invoke("getGlyphs", { tileID: t, font: e, codePoints: r }, a)
            .then((l) => {
              for (let u = 0; u < l.length; u++) l[u] && (n[u] = l[u]);
            })
    );
  }
  getGlyphItems(t) {
    return this._glyphInfo[t];
  }
}
export { jt as default };
