import {
  ae as a,
  af as l,
  am as d,
  ag as p,
  P as V,
  G as y,
  an as h,
  ao as m,
  t as n,
} from "./index.8fd7165c.js";
import { r as w } from "./GroupContainer.cb198d14.js";
import { u as v, f as u } from "./LayerView.d8517e2e.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./WGLContainer.e7ddd41d.js";
import "./definitions.ce677f69.js";
import "./VertexArrayObject.1b8f3583.js";
import "./Texture.fb0c670a.js";
import "./enums.64ab819c.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./color.4c5303e9.js";
import "./enums.13513a14.js";
import "./ProgramTemplate.4bbf0f5e.js";
import "./MaterialKey.97cb3dc8.js";
import "./utils.1f803f1b.js";
import "./StyleDefinition.4f77c81e.js";
import "./config.1337d16e.js";
import "./GeometryUtils.82ab0a13.js";
import "./Container.a5892366.js";
import "./earcut.9f54f087.js";
let t = class extends v {
  constructor(i) {
    super(i), (this.type = "group"), (this.layerViews = new V());
  }
  _allLayerViewVisibility(i) {
    this.layerViews.forEach((e) => {
      e.visible = i;
    });
  }
  initialize() {
    this.handles.add(
      [
        this.layerViews.on("change", (i) => this._layerViewsChangeHandler(i)),
        y(
          () => this.layer.visibilityMode,
          () =>
            this._applyVisibility(
              () => this._allLayerViewVisibility(this.visible),
              () => this._applyExclusiveVisibility(null)
            ),
          h
        ),
        y(
          () => this.visible,
          (i) => {
            this._applyVisibility(
              () => this._allLayerViewVisibility(i),
              () => {}
            );
          },
          h
        ),
      ],
      "grouplayerview"
    ),
      this._layerViewsChangeHandler({
        target: null,
        added: this.layerViews.toArray(),
        removed: [],
        moved: [],
      });
  }
  set layerViews(i) {
    this._set("layerViews", m(i, this._get("layerViews")));
  }
  get updatingProgress() {
    return this.layerViews.length === 0
      ? 1
      : this.layerViews.reduce((i, e) => i + e.updatingProgress, 0) /
          this.layerViews.length;
  }
  isUpdating() {
    return this.layerViews.some((i) => i.updating);
  }
  _hasLayerViewVisibleOverrides() {
    return this.layerViews.some((i) => i._isOverridden("visible"));
  }
  _findLayerViewForLayer(i) {
    return i && this.layerViews.find((e) => e.layer === i);
  }
  _firstVisibleOnLayerOrder() {
    const i = this.layer.layers.find((e) => {
      var s;
      return !!((s = this._findLayerViewForLayer(e)) != null && s.visible);
    });
    return i && this._findLayerViewForLayer(i);
  }
  _applyExclusiveVisibility(i) {
    n(i) &&
      ((i = this._firstVisibleOnLayerOrder()),
      n(i) &&
        this.layerViews.length > 0 &&
        (i = this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),
      this.layerViews.forEach((e) => {
        e.visible = e === i;
      });
  }
  _layerViewsChangeHandler(i) {
    this.handles.remove("grouplayerview:visible"),
      this.handles.add(
        this.layerViews
          .map((s) =>
            y(
              () => s.visible,
              (r) =>
                this._applyVisibility(
                  () => {
                    r !== this.visible && (s.visible = this.visible);
                  },
                  () => this._applyExclusiveVisibility(r ? s : null)
                ),
              h
            )
          )
          .toArray(),
        "grouplayerview:visible"
      );
    const e = i.added[i.added.length - 1];
    this._applyVisibility(
      () => this._allLayerViewVisibility(this.visible),
      () => this._applyExclusiveVisibility(e != null && e.visible ? e : null)
    );
  }
  _applyVisibility(i, e) {
    var s, r;
    this._hasLayerViewVisibleOverrides() &&
      (((s = this.layer) == null ? void 0 : s.visibilityMode) === "inherited"
        ? i()
        : ((r = this.layer) == null ? void 0 : r.visibilityMode) ===
            "exclusive" && e());
  }
};
a([l({ cast: d })], t.prototype, "layerViews", null),
  a([l({ readOnly: !0 })], t.prototype, "updatingProgress", null),
  a([l()], t.prototype, "view", void 0),
  (t = a([p("esri.views.layers.GroupLayerView")], t));
const b = t;
let o = class extends u(b) {
  constructor() {
    super(...arguments), (this.container = new w());
  }
  attach() {
    this._updateStageChildren(),
      this.addAttachHandles(
        this.layerViews.on("after-changes", () => this._updateStageChildren())
      );
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(i) {}
  moveStart() {}
  viewChange() {}
  moveEnd() {}
  _updateStageChildren() {
    this.container.removeAllChildren(),
      this.layerViews.forEach((i, e) =>
        this.container.addChildAt(i.container, e)
      );
  }
};
o = a([p("esri.views.2d.layers.GroupLayerView2D")], o);
const N = o;
export { N as default };
