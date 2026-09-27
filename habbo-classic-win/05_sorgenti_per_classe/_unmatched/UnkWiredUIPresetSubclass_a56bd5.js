// Extracted from HabboAirLauncher.deobf.js, line 347746.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia56bd560817792

class extends WiredUIPreset {
  static {
    n(this, "UnkWiredUIPresetSubclass_a56bd5");
  }
  _window;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32() {
    this._window = this.var_40.createSplitterView();
  }
  get window() {
    return this._window;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this._window.width = e));
  }
  dispose() {
    this.disposed || (super.dispose(), this._window.dispose(), (this._window = null));
  }
}
