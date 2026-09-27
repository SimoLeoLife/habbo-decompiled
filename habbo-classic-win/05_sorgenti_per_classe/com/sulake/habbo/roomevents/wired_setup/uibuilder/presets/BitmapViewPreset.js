// Extracted from HabboAirLauncher.deobf.js, line 345276.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/BitmapViewPreset.as
// Obfuscated name: _ib1a172ad77c269

class extends WiredUIPreset {
  static {
    n(this, "BitmapViewPreset");
  }
  _window;
  _width = 0;
  _height = 0;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e = !1) {
    ((this._window = this.var_102._rd65848eed931f7("bitmap_wrapper_view")),
      e && this._window.setParamFlag(N.const_421, !1));
  }
  get bitmapWindow() {
    return this._window;
  }
  get window() {
    return this._window;
  }
  hasStaticWidth() {
    return !0;
  }
  get staticWidth() {
    return this._width;
  }
  setBitmapSize(e, r) {
    ((this._width = e), (this._height = r));
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      (this._window.width = this._width),
      (this._window.height = this._height));
  }
  dispose() {
    this.disposed || (super.dispose(), this._window.dispose(), (this._window = null));
  }
}
