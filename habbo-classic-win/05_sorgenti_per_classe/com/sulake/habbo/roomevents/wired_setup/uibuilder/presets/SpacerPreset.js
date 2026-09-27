// Extracted from HabboAirLauncher.deobf.js, line 347692.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/SpacerPreset.as
// Obfuscated name: _i1ccbae7544152a

class extends WiredUIPreset {
  static {
    n(this, "SpacerPreset");
  }
  _container;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this._container = this.var_102._rd65848eed931f7("container_view")),
      (this._container.height = e));
  }
  set backgroundEnabled(e) {
    this._container.background = e;
  }
  set backgroundColor(e) {
    this._container.color = 4278190080 | e;
  }
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this._container.width = e));
  }
  dispose() {
    this.disposed || (super.dispose(), this._container.dispose(), (this._container = null));
  }
}
