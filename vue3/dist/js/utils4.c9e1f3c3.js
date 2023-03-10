function i(n) {
  for (let e = n; e; e = o(e))
    if (e instanceof Element && getComputedStyle(e).display === "none")
      return null;
  for (let e = o(n); e; e = o(e)) {
    if (!(e instanceof Element)) continue;
    const t = getComputedStyle(e);
    if (
      t.display !== "contents" &&
      (t.position !== "static" || t.filter !== "none" || e.tagName === "BODY")
    )
      return e;
  }
  return null;
}
function o(n) {
  return n.assignedSlot
    ? n.assignedSlot
    : n.parentNode instanceof ShadowRoot
    ? n.parentNode.host
    : n.parentNode;
}
export { i as offsetParent };
