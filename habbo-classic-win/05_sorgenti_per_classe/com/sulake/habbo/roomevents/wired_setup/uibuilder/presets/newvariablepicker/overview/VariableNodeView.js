// Extracted from HabboAirLauncher.deobf.js, line 348432.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/newvariablepicker/overview/VariableNodeView.as
// Obfuscated name: _idc1eecd92ec814

class a {
  constructor(e, r, t, i) {
    this._variableNode = e;
    this._picker = r;
    this._parent = t;
    this.var_2162 = i;
    let s = this._picker._r41f5cc7d3516ce.presetManager.wiredStyle;
    ((this._window = this._picker._r41f5cc7d3516ce._rb85a698a5a11d9.acquireNodeView(s)),
      (this.interactiveCursorDisabled = this._variableNode._r70b9577f42d34d(this._picker)),
      (this.blend = this._variableNode._rf078988d47175b(this._picker)),
      (this.icon.visible = this._variableNode.variableNode > 0),
      (this.nodeName.text = this._variableNode.name ?? ""),
      (this._window._r824ae5dcbb4686 = !this.interactiveCursorDisabled),
      (this.nodeName.blend = this.blend ? 0.55 : 1),
      (this.icon.blend = this.blend ? 0.55 : 1),
      this._window.addEventListener(u.CLICK, this.onClick),
      this._window.addEventListener(u.OVER, this._rb2fb7964bb4ade));
    let o = this._picker._r41f5cc7d3516ce.localization;
    (this.blend
      ? (this._window.toolTipCaption = o.getLocalization(
          "wiredfurni.variable_picker.tooltip_disabled",
        ))
      : this.interactiveCursorDisabled
        ? (this._window.toolTipCaption = "")
        : (this._window.toolTipCaption = o.getLocalization(
            "wiredfurni.variable_picker.tooltip_not_selectable",
          )),
      this.updateColoring());
  }
  static {
    n(this, "VariableNodeView");
  }
  static HOVER_BG = 4292927712;
  static MODE1_BG = 4293914607;
  static MODE2_BG = 4294638330;
  _window;
  var_1463 = !1;
  interactiveCursorDisabled = !1;
  blend = !1;
  _r0706a10c670987 = null;
  _disposed = !1;
  get childrenCount() {
    return this._variableNode;
  }
  get window() {
    return this._window;
  }
  get disposed() {
    return this._disposed;
  }
  set hover(e) {
    this.var_1463 !== e &&
      ((this.var_1463 = e),
      this.updateColoring(),
      this.childrenCount.variableNode > 0 &&
        (this.var_1463 ? this.initSublist() : this.removeSublist()));
  }
  dispose() {
    this._disposed ||
      (this.removeSublist(),
      this._window.removeEventListener(u.CLICK, this.onClick),
      this._window.removeEventListener(u.OVER, this._rb2fb7964bb4ade),
      this._picker._r41f5cc7d3516ce._rb85a698a5a11d9.releaseNodeView(
        this._picker._r41f5cc7d3516ce.presetManager.wiredStyle,
        this._window,
      ),
      (this._picker = null),
      (this._window = null),
      (this._variableNode = null),
      (this.var_2162 = 0),
      (this.var_1463 = !1),
      (this._parent = null),
      (this._disposed = !0));
  }
  updateColoring() {
    this.var_1463
      ? (this._window.color = a.HOVER_BG)
      : this.var_2162 % 2 === 0
        ? (this._window.color = a.MODE1_BG)
        : (this._window.color = a.MODE2_BG);
  }
  onClick = n((e) => {
    this.interactiveCursorDisabled && this._picker.select(this._variableNode.variable);
  }, "onClick");
  _rb2fb7964bb4ade = n((e) => {
    this._parent.setHover(this);
  }, "_rb2fb7964bb4ade");
  initSublist() {
    this._r0706a10c670987 = new zX(
      this._picker,
      this.childrenCount.children,
      this._window.width,
    );
    let e = this._r0706a10c670987.window,
      r = this._picker._r4c9b549e0dbdb0.window;
    r.addChild(e);
    let t = new E();
    this.window.getGlobalPosition(t);
    let i = new E();
    (r.getGlobalPosition(i),
      (e.x = t.x - i.x + this._window.width + this._parent.scrollbarWidth),
      (e.y = t.y - i.y));
    let s = e.desktop,
      o = new D();
    (e.getGlobalRectangle(o),
      o.bottom > s.bottom && (e.offset(0, s.bottom - o.bottom), e.y < 0 && (e.y = 0)));
  }
  removeSublist() {
    this._r0706a10c670987 != null &&
      (this._window.parent.removeChild(this._r0706a10c670987.window),
      this._r0706a10c670987.dispose(),
      (this._r0706a10c670987 = null));
  }
  get icon() {
    return this._window.findChildByName("right_triangle_icon");
  }
  get nodeName() {
    return this._window.findChildByName("node_name");
  }
}
