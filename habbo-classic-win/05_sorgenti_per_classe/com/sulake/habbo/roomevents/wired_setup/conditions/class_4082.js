// Estratto da HabboAirLauncher.deobf.js, riga 366654.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_4082.as
// Nome offuscato: _i940be50a5345a0

class a extends DefaultConditionType {
  static {
    n(this, "class_4082");
  }
  _picker = null;
  _section1 = null;
  _variableTarget = 0;
  get code() {
    return ConditionCodes.name_11;
  }
  get negativeCode() {
    return ConditionCodes.NOT_HAS_VARIABLE;
  }
  static variableSelectionFilter(e) {
    return !e.alwaysAvailable;
  }
  readIntParamsFromForm() {
    return [this._variableTarget];
  }
  _r4ac8c24e31ca7e() {
    return [this._picker.finalizeSelection];
  }
  onEditStart(e) {
    let r = e._r1385185994d461[0];
    ((this._variableTarget = e.intParams[0]),
      this._picker.init(e._r09c1c618a6015f._r491f74a2c22d93, r, this._variableTarget));
  }
  onEditInitialized() {
    this._section1.sourceType().select(this._variableTarget);
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = new SourceTypeSelectorParam(this.mergedSourceOptions(0), this.createSourceTypeListener(0));
    this._picker = e.createVariablePicker(a.variableSelectionFilter);
    let s = new Hr(i);
    ((this._section1 = e.createSection(
      this.loc("wiredfurni.params.variables.variable_selection"),
      this._picker,
      s,
    )),
      t.addElements(this._section1));
  }
  mergedSelectionTitle(e) {
    return "wiredfurni.params.sources.merged.title.variables";
  }
  mergedSelections() {
    return [[0, 0]];
  }
  setMergedType(e, r) {
    ((this._variableTarget = r), (this._picker.variableTarget = this._variableTarget));
  }
  getMergedType(e) {
    return this._variableTarget;
  }
  _r0b74b92fc06f4d(e) {
    return !0;
  }
  _r0f18641a2be1d6(e) {
    return [VariableExtraSourceTypes.CONTEXT_SOURCE];
  }
  advancedAlwaysVisible() {
    return !0;
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
}
