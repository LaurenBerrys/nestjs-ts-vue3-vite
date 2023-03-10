import {
  ae as m,
  ag as u,
  G as y,
  H as d,
  w as h,
  r as b,
  dE as c,
} from "./index.8fd7165c.js";
import f from "./FeatureLayerView2D.8f85b8aa.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./Container.a5892366.js";
import "./definitions.ce677f69.js";
import "./enums.64ab819c.js";
import "./Texture.fb0c670a.js";
import "./LayerView.d8517e2e.js";
import "./schemaUtils.264ba82d.js";
import "./color.4c5303e9.js";
import "./enums.13513a14.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./utils.1f803f1b.js";
import "./MaterialKey.97cb3dc8.js";
import "./visualVariablesUtils.de38be9a.js";
import "./ExpandedCIM.e22c8b13.js";
import "./BidiEngine.520adad3.js";
import "./GeometryUtils.874f8cf4.js";
import "./Rect.6884a4ea.js";
import "./quantizationUtils.1e9e702d.js";
import "./floatRGBA.6f2fa7cd.js";
import "./util.79a0d0b9.js";
import "./floorFilterUtils.08225a6d.js";
import "./popupUtils.4682c28c.js";
import "./RefreshableLayerView.d05f575e.js";
let p = class extends f {
  initialize() {
    this.addHandles(
      [
        y(
          () => this.view.scale,
          () => this._update(),
          d
        ),
      ],
      "constructor"
    );
  }
  isUpdating() {
    var l;
    const t = this.layer.sublayers.some((n) => n.renderer != null),
      e = this._commandsQueue.updating,
      s = this._updatingRequiredFieldsPromise != null,
      r = !this._proxy || !this._proxy.isReady,
      i = this._pipelineIsUpdating,
      a =
        this.tileRenderer == null ||
        ((l = this.tileRenderer) == null ? void 0 : l.updating),
      o = t && (e || s || r || i || a);
    return h("esri-2d-log-updating"), o;
  }
  _injectOverrides(t) {
    let e = super._injectOverrides(t);
    const s = this.view.scale,
      r = this.layer.sublayers
        .filter((a) =>
          (function (o, l) {
            return (
              !o.visible ||
              (o.minScale !== 0 && l > o.minScale) ||
              (o.maxScale !== 0 && l < o.maxScale)
            );
          })(a, s)
        )
        .map((a) => a.subtypeCode);
    if (!r.length) return e;
    e = b(e) ? e : new c().toJSON();
    const i = `NOT ${this.layer.subtypeField} IN (${r.join(",")})`;
    return (e.where = e.where ? `(${e.where}) AND (${i})` : i), e;
  }
  _setLayersForFeature(t) {
    const e = this.layer.fieldsIndex.get(this.layer.subtypeField),
      s = t.attributes[e.name],
      r = this.layer.sublayers.find((i) => i.subtypeCode === s);
    t.layer = t.sourceLayer = r;
  }
  _createSchemaConfig() {
    const t = {
        subtypeField: this.layer.subtypeField,
        sublayers: Array.from(this.layer.sublayers).map((i) => ({
          featureReduction: null,
          geometryType: this.layer.geometryType,
          labelingInfo: i.labelingInfo,
          labelsVisible: i.labelsVisible,
          renderer: i.renderer,
          subtypeCode: i.subtypeCode,
          orderBy: null,
        })),
      },
      e = this.layer.sublayers.map((i) => i.subtypeCode).join(","),
      s = this.layer.sublayers.length
        ? `${this.layer.subtypeField} IN (${e})`
        : "1=2";
    let r = this.layer.definitionExpression
      ? this.layer.definitionExpression + " AND "
      : "";
    return (
      (r += s),
      { ...super._createSchemaConfig(), ...t, definitionExpression: r }
    );
  }
};
p = m([u("esri.views.2d.layers.SubtypeGroupLayerView2D")], p);
const M = p;
export { M as default };
