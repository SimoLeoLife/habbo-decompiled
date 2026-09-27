// Estratto da HabboAirLauncher.deobf.js, riga 350991.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/sections/ValueOrVariableSection.as
// Nome offuscato: _i2a9f7e4520b04c

class a extends AbstractSectionPreset {
  static {
    n(this, "ValueOrVariableSection");
  }
  var_1946;
  var_1181;
  _picker;
  var_2594;
  _rbef7126d711cf0 = 0;
  _variableTarget = 0;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t, i, s) {
    ((this._rbef7126d711cf0 = e),
      (this.var_1181 = this.var_102.createNumberInput(new NumberInputParam(0, i, s, 45, 0, !1, !0))),
      (this.var_2594 = this.var_102.createSourceTypeSelector(new SourceTypeSelectorParam(r, this))),
      (this._picker = this.var_102.createVariablePicker(a.variableSelectionFilter)),
      (this.var_1946 = this.var_102.createRadioGroup(
        [
          new RadioButtonParam(0, this.l("variables.reference_value.set_value"), this.var_1181),
          new RadioButtonParam(
            1,
            this.l("variables.reference_value.from_variable"),
            this.var_2594.alignRight(),
            this._picker,
          ),
        ],
        this._rba01b4ab7d7ce9,
      )),
      this.initializeSection(t, this.var_1946));
  }
  init(e, r, t, i, s) {
    (this._picker.init(e, r, t),
      (this._variableTarget = t),
      (this.var_1946.selected = i),
      (this.var_1181.value = s));
  }
  onEditInitialized() {
    this.var_2594.select(this._variableTarget);
  }
  set target(e) {
    ((this._variableTarget = e), (this._picker.variableTarget = this._variableTarget));
  }
  get target() {
    return this._variableTarget;
  }
  get option() {
    return this.var_1946.selected;
  }
  get numberValue() {
    return this.var_1181.value;
  }
  get finalizeSelection() {
    return this._picker.finalizeSelection;
  }
  _rba01b4ab7d7ce9 = n((e) => {
    this._roomEvents.presetManager._ra0bf1c6a404ceb(Ve.MERGED_SOURCE, this._rbef7126d711cf0);
  }, "_rba01b4ab7d7ce9");
  _r0fd1b66bcbf656() {
    return this.var_1946.selected === 0;
  }
  static variableSelectionFilter(e) {
    return e.hasValue;
  }
  set sourceType(e) {
    this._roomEvents.presetManager._r7c52280433036c(this._rbef7126d711cf0, e);
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      (this.var_1946 = null),
      (this.var_1181 = null),
      (this._picker = null),
      (this.var_2594 = null));
  }
}
