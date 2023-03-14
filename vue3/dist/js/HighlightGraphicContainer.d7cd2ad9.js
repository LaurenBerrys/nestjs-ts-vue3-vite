import { ae as n, ag as a } from "./index.8fd7165c.js";
import { T as o } from "./color.4c5303e9.js";
import { n as d } from "./BaseGraphicContainer.5e700f86.js";
import { _ as h } from "./enums.64ab819c.js";
let e = class extends d {
  doRender(r) {
    r.drawPhase === o.HIGHLIGHT && super.doRender(r);
  }
  renderChildren(r) {
    if ((this.attributeView.update(), !this.children.some((s) => s.hasData)))
      return;
    this.attributeView.bindTextures(r.context), super.renderChildren(r);
    const { painter: i } = r,
      t = i.effects.highlight;
    t.bind(r),
      r.context.setColorMask(!0, !0, !0, !0),
      r.context.clear(h.COLOR_BUFFER_BIT),
      this._renderChildren(r, t.defines.concat(["highlightAll"])),
      t.draw(r),
      t.unbind();
  }
};
e = n([a("esri.views.2d.layers.support.HighlightGraphicContainer")], e);
const u = e;
export { u as n };
