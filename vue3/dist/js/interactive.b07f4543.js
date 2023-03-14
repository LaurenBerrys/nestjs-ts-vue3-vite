function i() {}
function l(e, t = !1) {
  if (e.disabled)
    return (
      e.el.setAttribute("tabindex", "-1"),
      e.el.setAttribute("aria-disabled", "true"),
      e.el.contains(document.activeElement) && document.activeElement.blur(),
      void (e.el.click = i)
    );
  (e.el.click = HTMLElement.prototype.click),
    typeof t == "function"
      ? e.el.setAttribute("tabindex", t.call(e) ? "0" : "-1")
      : t === !0
      ? e.el.setAttribute("tabindex", "0")
      : t === !1 && e.el.removeAttribute("tabindex"),
    e.el.removeAttribute("aria-disabled");
}
export { l as u };
