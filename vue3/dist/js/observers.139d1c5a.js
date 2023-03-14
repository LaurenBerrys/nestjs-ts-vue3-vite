function u(n, o, i) {
  const c = (function (r) {
    class a extends window.MutationObserver {
      constructor(t) {
        super(t), (this.observedEntry = []), (this.callback = t);
      }
      observe(t, e) {
        return (
          this.observedEntry.push({ target: t, options: e }),
          super.observe(t, e)
        );
      }
      unobserve(t) {
        const e = this.observedEntry.filter((s) => s.target !== t);
        (this.observedEntry = []),
          this.callback(super.takeRecords(), this),
          this.disconnect(),
          e.forEach((s) => this.observe(s.target, s.options));
      }
    }
    return r === "intersection"
      ? window.IntersectionObserver
      : r === "mutation"
      ? a
      : window.ResizeObserver;
  })(n);
  return new c(o, i);
}
export { u as c };
