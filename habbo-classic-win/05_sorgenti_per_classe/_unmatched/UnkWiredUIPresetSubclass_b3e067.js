// Extracted from HabboAirLauncher.deobf.js, line 347801.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib3e0676c249ed8

class extends WiredUIPreset {
  static {
    n(this, "UnkWiredUIPresetSubclass_b3e067");
  }
  _window;
  var_688;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    ((this._window = this.var_102._rd65848eed931f7("container_view")),
      (this.var_688 = e),
      this._window.addChild(this.var_688.window),
      (this._window.height = r));
  }
  get window() {
    return this._window;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this._window.width = e), this.var_688.resizeToWidth(e));
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
