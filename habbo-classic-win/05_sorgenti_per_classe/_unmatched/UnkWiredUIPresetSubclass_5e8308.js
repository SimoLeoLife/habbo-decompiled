// Extracted from HabboAirLauncher.deobf.js, line 344943.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i5e830860c36106

class extends WiredUIPreset {
  static {
    n(this, "UnkWiredUIPresetSubclass_5e8308");
  }
  _window;
  var_688;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this._window = this.var_102._rd65848eed931f7("container_view")),
      (this.var_688 = e),
      this._window.addChild(this.var_688.window));
  }
  get window() {
    return this._window;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this._window.width = e));
    let r;
    (this.var_688.hasStaticWidth()
      ? (this.var_688.resizeToWidth(this.var_688.staticWidth),
        (r = this.var_688.staticWidth))
      : (this.var_688.resizeToWidth(e), (r = this.var_688.window.width)),
      (this.var_688.window.x = Math.max(0, e / 2 - r / 2)),
      (this._window.height = this.var_688.window.height));
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
