import { Q as l, s as a } from "./index.8fd7165c.js";
import { $ as i, L as s } from "./color.4c5303e9.js";
function p(e) {
  return i(e.minDataValue) &&
    i(e.maxDataValue) &&
    e.minSize != null &&
    e.maxSize != null
    ? s.SIZE_MINMAX_VALUE
    : ((e.expression && e.expression === "view.scale") ||
        (e.valueExpression && e.valueExpression === "$view.scale")) &&
      Array.isArray(e.stops)
    ? s.SIZE_SCALE_STOPS
    : (e.field != null ||
        (e.expression && e.expression !== "view.scale") ||
        (e.valueExpression && e.valueExpression !== "$view.scale")) &&
      (Array.isArray(e.stops) || ("levels" in e && e.levels))
    ? s.SIZE_FIELD_STOPS
    : (e.field != null ||
        (e.expression && e.expression !== "view.scale") ||
        (e.valueExpression && e.valueExpression !== "$view.scale")) &&
      e.valueUnit != null
    ? s.SIZE_UNIT_VALUE
    : (l
        .getLogger("esri.views.2d.engine.webgl")
        .error(
          new a("mapview-bad-type", "Found invalid size VisualVariable", e)
        ),
      s.NONE);
}
export { p as l };
