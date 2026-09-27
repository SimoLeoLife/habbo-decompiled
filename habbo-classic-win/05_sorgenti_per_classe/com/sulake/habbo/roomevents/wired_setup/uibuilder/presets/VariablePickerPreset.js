// Estratto da HabboAirLauncher.deobf.js, riga 349257.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/VariablePickerPreset.as
// Nome offuscato: _i9d7a0216df26bd

class extends WiredUIPreset {
  static {
    n(this, "VariablePickerPreset");
  }
  _picker;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e = null, r = null) {
    this._picker = new Rg(
      this._roomEvents,
      this.var_102._rd65848eed931f7("search_tree_dropdown"),
      e,
      r,
      this.var_40,
    );
  }
  init(e, r, t) {
    this._picker.init(e, r, t);
  }
  set variableTarget(e) {
    this._picker.variableTarget = e;
  }
  get selected() {
    return this._picker.selected;
  }
  get finalizeSelection() {
    let e = this.selected;
    return (this._picker._rfe938462bb3aca(), e == null ? WiredVariable.var_160 : e.variableId);
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this._picker.width = e));
  }
  get window() {
    return this._picker.window;
  }
  dispose() {
    this.disposed || (super.dispose(), this._picker.dispose(), (this._picker = null));
  }
}
