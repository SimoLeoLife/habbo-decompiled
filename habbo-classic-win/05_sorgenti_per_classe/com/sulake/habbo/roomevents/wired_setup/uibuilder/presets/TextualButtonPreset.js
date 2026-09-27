// Extracted from HabboAirLauncher.deobf.js, line 348061.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/TextualButtonPreset.as
// Obfuscated name: _icdb967f3b78500

class extends WiredUIPreset {
  static {
    n(this, "TextualButtonPreset");
  }
  _container;
  var_179;
  var_263 = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    ((this.var_263 = r),
      (this._container = this.var_102._rd65848eed931f7("growing_container_view")),
      (this.var_179 = this.var_102.createText(
        e,
        new Se(Se.MODE_STRETCH, !1, 0, !0),
      )),
      this._container.addChild(this.var_179.window),
      this._container.addEventListener(u.CLICK, this.onClick),
      (this._container.mouseThreshold = 0));
  }
  set text(e) {
    this.var_179.text = e;
  }
  onClick = n((...e) => {
    this.var_263?.();
  }, "onClick");
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this._container.width = e));
  }
  hasStaticWidth() {
    return !0;
  }
  get staticWidth() {
    return this._container.width;
  }
  get childPresets() {
    return [this.var_179];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this.var_179 = null),
      (this.var_263 = null));
  }
}
