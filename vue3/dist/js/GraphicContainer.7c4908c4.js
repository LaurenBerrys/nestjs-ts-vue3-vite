import { T as t } from "./color.4c5303e9.js";
import { n as h } from "./BaseGraphicContainer.5e700f86.js";
class a extends h {
  renderChildren(e) {
    this.attributeView.update(),
      this.children.some((r) => r.hasData) &&
        (this.attributeView.bindTextures(e.context, !1),
        super.renderChildren(e),
        e.drawPhase === t.MAP && this._renderChildren(e),
        this.hasHighlight() &&
          e.drawPhase === t.HIGHLIGHT &&
          this._renderHighlight(e),
        this._boundsRenderer && this._boundsRenderer.doRender(e));
  }
  _renderHighlight(e) {
    const { painter: r } = e,
      i = r.effects.highlight;
    i.bind(e), this._renderChildren(e, i.defines), i.draw(e), i.unbind();
  }
}
export { a as i };
