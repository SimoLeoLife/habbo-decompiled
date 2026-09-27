// Estratto da HabboAirLauncher.deobf.js, riga 350750.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/sections/ChooseVariableSection.as
// Nome offuscato: _ic0d24aba517716

class extends AbstractSectionPreset {
  static {
    n(this, "ChooseVariableSection");
  }
  _picker;
  _rbef7126d711cf0 = -1;
  _variableTarget = 0;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t, i, s = null) {
    this._rbef7126d711cf0 = e;
    let o = null;
    (r != null && (o = new Hr(new SourceTypeSelectorParam(r, this))),
      (this._picker = this.var_102.createVariablePicker(t, i)),
      this.initializeSection(s ?? this.l("variables.variable_selection"), this._picker, o));
  }
  init(e, r, t) {
    (this._picker.init(e, r, t), (this._variableTarget = t));
  }
  onEditInitialized() {
    let e = this.var_967.sourceType();
    e?.select(this._variableTarget);
  }
  set target(e) {
    ((this._variableTarget = e), (this._picker.variableTarget = this._variableTarget));
  }
  get target() {
    return this._variableTarget;
  }
  get finalizeSelection() {
    return this._picker.finalizeSelection;
  }
  get selected() {
    return this._picker.selected;
  }
  set sourceType(e) {
    this._rbef7126d711cf0 !== -1
      ? this._roomEvents.presetManager._r7c52280433036c(this._rbef7126d711cf0, e)
      : (this.target = e);
  }
  dispose() {
    this.disposed || (super.dispose(), (this._picker = null));
  }
}
