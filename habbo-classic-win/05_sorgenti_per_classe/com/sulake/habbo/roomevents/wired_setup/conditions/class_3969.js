// Estratto da HabboAirLauncher.deobf.js, riga 367297.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_3969.as
// Nome offuscato: _i2b63a3e0e36f4b

class a extends DefaultConditionType {
  static {
    n(this, "class_3969");
  }
  _picker = null;
  var_3323 = null;
  _section1 = null;
  _section2 = null;
  _section3 = null;
  _variableTarget = 0;
  get code() {
    return ConditionCodes.VARIABLE_VALUE;
  }
  readIntParamsFromForm() {
    let e = [];
    return (
      e.push(this._variableTarget),
      e.push(this.var_3323.selected),
      e.push(this._section3.option),
      we._r42a38bf88649b5(e, this._section3.numberValue),
      e.push(this._section3.target),
      e
    );
  }
  _r4ac8c24e31ca7e() {
    return [this._picker.finalizeSelection, this._section3.finalizeSelection];
  }
  onEditStart(e) {
    let r = e.intParams,
      t = e._r1385185994d461[1],
      i = e._r1385185994d461[0];
    this._variableTarget = r[0];
    let s = r[1],
      o = r[2],
      d = r[4],
      c = r[5];
    (this._picker.init(e._r09c1c618a6015f._r491f74a2c22d93, i, this._variableTarget),
      (this.var_3323.selected = s),
      o === 0 ? (t = WiredVariable.var_160) : (d = 0),
      this._section3.init(e._r09c1c618a6015f._r491f74a2c22d93, t, c, o, d));
  }
  onEditInitialized() {
    (this._section1.sourceType().select(this._variableTarget),
      this._section3.onEditInitialized());
  }
  isInputSourceDisabled(e, r) {
    return r === Ve.MERGED_SOURCE && e === 1 ? this._section3._r0fd1b66bcbf656() : !1;
  }
  static variableSelectionFilter(e) {
    return e.hasValue;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = new SourceTypeSelectorParam(this.mergedSourceOptions(0), this.createSourceTypeListener(0));
    ((this._picker = e.createVariablePicker(a.variableSelectionFilter)),
      (this._section1 = e.createSection(
        this.l("variables.variable_selection"),
        this._picker,
        new Hr(i),
      )),
      (this.var_3323 = e.createRadioGroup(
        [
          new RadioButtonParam(2, ">"),
          new RadioButtonParam(5, "\u2265"),
          new RadioButtonParam(1, "="),
          new RadioButtonParam(3, "\u2264"),
          new RadioButtonParam(0, "<"),
          new RadioButtonParam(4, "\u2260"),
        ],
        null,
        6,
      )),
      (this._section2 = e.createSection(this.l("comparison_selection"), this.var_3323)),
      (this._section3 = e.createValueOrVariableSection(
        1,
        this.mergedSourceOptions(1),
        this.l("variables.reference_value"),
        -2147483648,
        2147483647,
      )),
      t.addElements(this._section1, this._section2, this._section3));
  }
  mergedSelectionTitle(e) {
    return e === 0
      ? "wiredfurni.params.sources.merged.title.variables"
      : "wiredfurni.params.sources.merged.title.variables_reference";
  }
  mergedSelections() {
    return [
      [0, 0],
      [1, 1],
    ];
  }
  setMergedType(e, r) {
    e === 0
      ? ((this._variableTarget = r), (this._picker.variableTarget = this._variableTarget))
      : (this._section3.target = r);
  }
  getMergedType(e) {
    return e === 0 ? this._variableTarget : this._section3.target;
  }
  _r0f18641a2be1d6(e) {
    return [VariableExtraSourceTypes.GLOBAL_SOURCE, VariableExtraSourceTypes.CONTEXT_SOURCE];
  }
  _r0b74b92fc06f4d(e) {
    return !0;
  }
  advancedAlwaysVisible() {
    return !0;
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
}
