const i = {
    container: "container",
    containerBorderSelected: "container--border-selected",
    containerBorderUnselected: "container--border-unselected",
    contentContainer: "content-container",
    contentContainerSelectable: "content-container--selectable",
    contentContainerHasCenterContent: "content-container--has-center-content",
    nestedContainer: "nested-container",
    nestedContainerHidden: "nested-container--hidden",
    content: "content",
    customContent: "custom-content",
    actionsStart: "actions-start",
    contentStart: "content-start",
    label: "label",
    description: "description",
    contentEnd: "content-end",
    actionsEnd: "actions-end",
    selectionContainer: "selection-container",
    openContainer: "open-container",
  },
  r = {
    actionsStart: "actions-start",
    contentStart: "content-start",
    content: "content",
    contentEnd: "content-end",
    actionsEnd: "actions-end",
  },
  s = 5,
  l = {
    selectedMultiple: "check-circle-f",
    selectedSingle: "circle-f",
    unselected: "blank",
    closedLTR: "caret-right",
    closedRTL: "caret-left",
    open: "caret-down",
    blank: "blank",
  },
  a = "calcite-list-item-group",
  c = "calcite-list-item";
function d(n) {
  const t = n.target.assignedElements({ flatten: !0 });
  return [
    ...t
      .filter((e) => (e == null ? void 0 : e.matches(a)))
      .map((e) => Array.from(e.querySelectorAll(c)))
      .reduce((e, o) => [...e, ...o], []),
    ...t.filter((e) => (e == null ? void 0 : e.matches(c))),
  ];
}
function u(n) {
  n.forEach((t) => {
    (t.setPosition = n.indexOf(t) + 1), (t.setSize = n.length);
  });
}
function m(n, t = !1) {
  const e = t
    ? "ancestor::calcite-list-item | ancestor::calcite-list-item-group"
    : "ancestor::calcite-list-item";
  return document.evaluate(
    e,
    n,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
  ).snapshotLength;
}
export { i as C, l as I, s as M, r as S, m as a, d as g, u };
