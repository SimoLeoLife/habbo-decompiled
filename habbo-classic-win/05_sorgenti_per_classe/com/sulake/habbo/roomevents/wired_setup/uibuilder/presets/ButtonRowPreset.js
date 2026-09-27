// Extracted from HabboAirLauncher.deobf.js, line 345360.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/ButtonRowPreset.as
// Obfuscated name: _ied1665245e7536

class extends WiredUIPreset {
  static {
    n(this, "ButtonRowPreset");
  }
  _container;
  var_122;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this._container = this.var_102._rd65848eed931f7("growing_container_view")),
      (this.var_122 = this.var_102.createSimpleListView(!1, e)),
      (this.var_122.spacing = this.var_40._r9cc205fa488cbc),
      this._container.addChild(this.var_122.window));
  }
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), this.var_122.resizeToWidth(e));
  }
  get childPresets() {
    return [this.var_122];
  }
  dispose() {
    this.disposed ||
      (super.dispose(), this._container.dispose(), (this._container = null), (this.var_122 = null));
  }
}
