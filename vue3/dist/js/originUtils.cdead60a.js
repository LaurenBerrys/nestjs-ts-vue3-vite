import { i as o } from "./multiOriginJSONSupportUtils.c978f4c3.js";
function p(i) {
  i &&
    i.writtenProperties &&
    i.writtenProperties.forEach(({ target: r, propName: e, newOrigin: t }) => {
      o(r) && t && r.originOf(e) !== t && r.updateOrigin(e, t);
    });
}
export { p as i };
