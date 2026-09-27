// Estratto da HabboAirLauncher.deobf.js, riga 349469.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/WindowWrapperPreset.as
// Nome offuscato: _i5974b0a777d415

class extends WiredUIPreset {
  static {
    n(this, "WindowWrapperPreset");
  }
  _window;
  _staticWidth = !1;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    ((this._window = e), (this._staticWidth = r));
  }
  get window() {
    return this._window;
  }
  hasStaticWidth() {
    return this._staticWidth;
  }
  get staticWidth() {
    return this._staticWidth ? this._window.width : -1;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this._window.width = e));
  }
  dispose() {
    this.disposed || (super.dispose(), this._window.dispose(), (this._window = null));
  }
}
