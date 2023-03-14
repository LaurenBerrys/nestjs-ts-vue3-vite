import { ae as I, ag as L } from "./index.8fd7165c.js";
import { n as M } from "./BitmapTileContainer.9704c56c.js";
const b = (e) => {
  let t = class extends e {
    attach() {
      this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),
        (this._bitmapView = new M(this._tileInfoView)),
        this.container.addChild(this._bitmapView);
    }
    detach() {
      var i;
      this.container.removeChild(this._bitmapView),
        (i = this._bitmapView) == null || i.removeAllChildren();
    }
  };
  return (t = I([L("esri.views.2d.layers.BitmapTileLayerView2D")], t)), t;
};
function y(e, t, i, a) {
  if (i.level === a.level) return t;
  const o = e.tileInfo.size,
    l = e.getTileResolution(i.level),
    s = e.getTileResolution(a.level);
  let r = e.getLODInfoAt(a.level);
  const u = r.getXForColumn(a.col),
    d = r.getYForRow(a.row);
  r = e.getLODInfoAt(i.level);
  const g = r.getXForColumn(i.col),
    w = r.getYForRow(i.row),
    h =
      (function (n) {
        return n instanceof HTMLImageElement ? n.naturalWidth : n.width;
      })(t) / o[0],
    c =
      (function (n) {
        return n instanceof HTMLImageElement ? n.naturalHeight : n.height;
      })(t) / o[1],
    f = Math.round(h * ((u - g) / l)),
    v = Math.round(c * (-(d - w) / l)),
    p = Math.round(h * o[0] * (s / l)),
    C = Math.round(c * o[1] * (s / l)),
    m = T(o);
  return m.getContext("2d").drawImage(t, f, v, p, C, 0, 0, o[0], o[1]), m;
}
function T(e) {
  const t = document.createElement("canvas");
  return ([t.width, t.height] = e), t;
}
export { y as n, T as o, b as t };
