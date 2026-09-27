// Estratto da HabboAirLauncher.deobf.js, riga 347720.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/SpacingPreset.as
// Nome offuscato: _i12794419348d10

class extends WiredUIPreset {
  static {
    n(this, "SpacingPreset");
  }
  _container;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    ((this._container = this.var_102._rd65848eed931f7("container_view")),
      e ? (this._container.height = r) : (this._container.width = r));
  }
  get window() {
    return this._container;
  }
  resizeToWidth(e) {}
  hasStaticWidth() {
    return !0;
  }
  get staticWidth() {
    return this._container.width;
  }
  dispose() {
    this.disposed || (super.dispose(), this._container.dispose(), (this._container = null));
  }
}
