import {
  ae as s,
  af as t,
  ag as d,
  dg as h,
  j as l,
  Q as o,
} from "./index.8fd7165c.js";
const f = (r) => {
  let e = class extends r {
    initialize() {
      this.handles.add(
        h(
          () => this.layer,
          "refresh",
          (i) => {
            this.doRefresh(i.dataChanged).catch((a) => {
              l(a) || o.getLogger(this.declaredClass).error(a);
            });
          }
        ),
        "RefreshableLayerView"
      );
    }
  };
  return (
    s([t()], e.prototype, "layer", void 0),
    (e = s([d("esri.layers.mixins.RefreshableLayerView")], e)),
    e
  );
};
export { f as i };
