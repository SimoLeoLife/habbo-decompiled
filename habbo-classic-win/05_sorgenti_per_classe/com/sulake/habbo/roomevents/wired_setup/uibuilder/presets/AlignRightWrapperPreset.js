// Estratto da HabboAirLauncher.deobf.js, riga 344981.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/AlignRightWrapperPreset.as
// Nome offuscato: _i810755096381fa

class extends WiredUIPreset {
  static {
    n(this, "AlignRightWrapperPreset");
  }
  _window;
  var_688;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this._window = this.var_102._rd65848eed931f7("growing_container_view")),
      (this.var_688 = e),
      this._window.addChild(this.var_688.window));
  }
  get window() {
    return this._window;
  }
  resizeToWidth(e) {
    if ((super.resizeToWidth(e), !this.var_688.hasStaticWidth()))
      throw new Error(
        "Attempting to align UI preset to the right is only possible if a static width is given",
      );
    let r = this.var_688.staticWidth;
    ((this.var_688.window.x = Math.max(0, e - r)),
      this.var_688.resizeToWidth(this.var_688.staticWidth));
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
