import { cy as r, cx as e } from "./index.8fd7165c.js";
function o(t) {
  return {
    origin: "portal-item",
    url: r(t.itemUrl),
    portal: t.portal || e.getDefault(),
    portalItem: t,
    readResourcePaths: [],
  };
}
function a(t) {
  return {
    origin: "portal-item",
    messages: [],
    writtenProperties: [],
    url: t.itemUrl ? r(t.itemUrl) : null,
    portal: t.portal || e.getDefault(),
    portalItem: t,
  };
}
export { o as e, a as o };
