// Estratto da HabboAirLauncher.deobf.js, riga 351649.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/applications/ChronoMaskFilterPreset.as
// Nome offuscato: _i8f5f15dd11feb6

class extends WiredUIPreset {
  static {
    n(this, "ChronoMaskFilterPreset");
  }
  _checkboxGroup;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r = 1) {
    let t = [];
    for (let i = 0; i < e.length; i += 1) t.push(new CheckboxOptionParam(e[i], i));
    this._checkboxGroup = this.var_102.createCheckboxGroup(t, null, r);
  }
  get mask() {
    return this._checkboxGroup.mask;
  }
  set mask(e) {
    this._checkboxGroup.mask = e;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), this._checkboxGroup.resizeToWidth(e));
  }
  get window() {
    return this._checkboxGroup.window;
  }
  get childPresets() {
    return [this._checkboxGroup];
  }
  dispose() {
    this.disposed || (super.dispose(), (this._checkboxGroup = null));
  }
}
