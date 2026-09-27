// Extracted from HabboAirLauncher.deobf.js, line 352140.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/FloatVerticallyPreset.as
// Obfuscated name: _i073ee3bafab1aa

class extends WiredUIPreset {
  static {
    n(this, "FloatVerticallyPreset");
  }
  _window;
  var_688;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this._window = this.var_102._rd65848eed931f7("container_view")),
      (this.var_688 = e),
      this._window.addChild(this.var_688.window),
      (this._window.height = 1),
      (this._window.width = this.var_688.window.width),
      this.var_688.window.setParamFlag(class_2094._r5f5ff9955e2bf4, !1));
  }
  get window() {
    return this._window;
  }
  hasStaticWidth() {
    return this.var_688.hasStaticWidth();
  }
  get staticWidth() {
    return this.var_688.staticWidth;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      this.var_688.hasStaticWidth()
        ? this.var_688.resizeToWidth(this.var_688.staticWidth)
        : ((this._window.width = e), this.var_688.resizeToWidth(e)));
  }
  get childPresets() {
    return [this.var_688];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._window.dispose(),
      (this._window = null),
      (this.var_688 = null));
  }
}
