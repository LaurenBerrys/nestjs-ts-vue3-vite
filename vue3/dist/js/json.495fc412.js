const u = {
  convertToGEGeometry: function (i, t) {
    return t == null ? null : i.convertJSONToGeometry(t);
  },
  exportPoint: function (i, t, s) {
    const n = new a(i.getPointX(t), i.getPointY(t), s),
      e = i.hasZ(t),
      o = i.hasM(t);
    return e && (n.z = i.getPointZ(t)), o && (n.m = i.getPointM(t)), n;
  },
  exportPolygon: function (i, t, s) {
    return new r(i.exportPaths(t), s, i.hasZ(t), i.hasM(t));
  },
  exportPolyline: function (i, t, s) {
    return new c(i.exportPaths(t), s, i.hasZ(t), i.hasM(t));
  },
  exportMultipoint: function (i, t, s) {
    return new x(i.exportPoints(t), s, i.hasZ(t), i.hasM(t));
  },
  exportExtent: function (i, t, s) {
    const n = i.hasZ(t),
      e = i.hasM(t),
      o = new m(i.getXMin(t), i.getYMin(t), i.getXMax(t), i.getYMax(t), s);
    if (n) {
      const h = i.getZExtent(t);
      (o.zmin = h.vmin), (o.zmax = h.vmax);
    }
    if (e) {
      const h = i.getMExtent(t);
      (o.mmin = h.vmin), (o.mmax = h.vmax);
    }
    return o;
  },
};
class a {
  constructor(t, s, n) {
    (this.x = t),
      (this.y = s),
      (this.spatialReference = n),
      (this.z = void 0),
      (this.m = void 0);
  }
}
class r {
  constructor(t, s, n, e) {
    (this.rings = t),
      (this.spatialReference = s),
      (this.hasZ = void 0),
      (this.hasM = void 0),
      n && (this.hasZ = n),
      e && (this.hasM = e);
  }
}
class c {
  constructor(t, s, n, e) {
    (this.paths = t),
      (this.spatialReference = s),
      (this.hasZ = void 0),
      (this.hasM = void 0),
      n && (this.hasZ = n),
      e && (this.hasM = e);
  }
}
class x {
  constructor(t, s, n, e) {
    (this.points = t),
      (this.spatialReference = s),
      (this.hasZ = void 0),
      (this.hasM = void 0),
      n && (this.hasZ = n),
      e && (this.hasM = e);
  }
}
class m {
  constructor(t, s, n, e, o) {
    (this.xmin = t),
      (this.ymin = s),
      (this.xmax = n),
      (this.ymax = e),
      (this.spatialReference = o),
      (this.zmin = void 0),
      (this.zmax = void 0),
      (this.mmin = void 0),
      (this.mmax = void 0);
  }
}
export { u as t };
