import {
  ae as t,
  af as l,
  dl as r,
  aH as p,
  ag as n,
} from "./index.8fd7165c.js";
import { r as s, z as c } from "./TilemapCache.cc0e5767.js";
const d = (o) => {
  let e = class extends o {
    constructor() {
      super(...arguments),
        (this.copyright = null),
        (this.minScale = 0),
        (this.maxScale = 0),
        (this.spatialReference = null),
        (this.tileInfo = null),
        (this.tilemapCache = null);
    }
    readMinScale(i, a) {
      return a.minLOD != null && a.maxLOD != null ? i : 0;
    }
    readMaxScale(i, a) {
      return a.minLOD != null && a.maxLOD != null ? i : 0;
    }
    get supportsBlankTile() {
      return this.version >= 10.2;
    }
    readTilemapCache(i, a) {
      return a.capabilities && a.capabilities.includes("Tilemap")
        ? new c({ layer: this })
        : null;
    }
  };
  return (
    t(
      [l({ json: { read: { source: "copyrightText" } } })],
      e.prototype,
      "copyright",
      void 0
    ),
    t([l()], e.prototype, "minScale", void 0),
    t([r("service", "minScale")], e.prototype, "readMinScale", null),
    t([l()], e.prototype, "maxScale", void 0),
    t([r("service", "maxScale")], e.prototype, "readMaxScale", null),
    t([l({ type: p })], e.prototype, "spatialReference", void 0),
    t([l({ readOnly: !0 })], e.prototype, "supportsBlankTile", null),
    t([l(s)], e.prototype, "tileInfo", void 0),
    t([l()], e.prototype, "tilemapCache", void 0),
    t(
      [r("service", "tilemapCache", ["capabilities"])],
      e.prototype,
      "readTilemapCache",
      null
    ),
    t([l()], e.prototype, "version", void 0),
    (e = t([n("esri.layers.mixins.ArcGISCachedService")], e)),
    e
  );
};
export { d as s };
