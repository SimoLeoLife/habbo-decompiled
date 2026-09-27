// Estratto da HabboAirLauncher.deobf.js, riga 345149.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/VerticalSplitterPreset.as
// Nome offuscato: _i56fd4ebd3ffc7a

class a extends WiredUIPreset {
  static {
    n(this, "VerticalSplitterPreset");
  }
  static SPLITTER_WIDTH = 1;
  _window;
  _height = 0;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this._height = e),
      (this._window = this.var_102._rd65848eed931f7("container_view")),
      (this._window.width = a.SPLITTER_WIDTH),
      (this._window.height = this._height),
      (this._window.background = !0),
      (this._window.color = this.var_40._r96ba3b58934003));
  }
  get window() {
    return this._window;
  }
  hasStaticWidth() {
    return !0;
  }
  get staticWidth() {
    return a.SPLITTER_WIDTH;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      (this._window.width = a.SPLITTER_WIDTH),
      (this._window.height = this._height));
  }
  dispose() {
    this.disposed || (super.dispose(), this._window.dispose(), (this._window = null));
  }
}
