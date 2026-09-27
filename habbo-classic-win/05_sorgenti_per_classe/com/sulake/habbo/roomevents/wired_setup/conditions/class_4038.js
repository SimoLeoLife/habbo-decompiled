// Estratto da HabboAirLauncher.deobf.js, riga 367177.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_4038.as
// Nome offuscato: _i2c3ed678313cdd

class a extends DefaultConditionType {
  static {
    n(this, "class_4038");
  }
  _section1 = null;
  _picker = null;
  var_3440 = null;
  var_1466 = null;
  var_3921 = null;
  _timeUnit = null;
  _variableTarget = 0;
  get code() {
    return ConditionCodes.VARIABLE_AGE;
  }
  readIntParamsFromForm() {
    let e = [];
    return (
      e.push(this._variableTarget),
      e.push(this.var_3440.selected),
      e.push(this.var_1466.selected),
      we._r42a38bf88649b5(e, this.var_3921.value),
      e.push(this._timeUnit.selectedId),
      e
    );
  }
  _r4ac8c24e31ca7e() {
    return [this._picker.finalizeSelection];
  }
  onEditStart(e) {
    let r = e.intParams,
      t = e._r1385185994d461[0];
    ((this._variableTarget = r[0]),
      this._picker.init(e._r09c1c618a6015f._r491f74a2c22d93, t, this._variableTarget));
    let i = r[1],
      s = r[2],
      o = r[4],
      d = r[5];
    ((this.var_3440.selected = i),
      (this.var_1466.selected = s),
      (this.var_3921.value = o),
      (this._timeUnit.selectedId = d),
      this._r5f5daf726df171(this._picker.selected));
  }
  onEditInitialized() {
    this._section1.sourceType().select(this._variableTarget);
  }
  _r5f5daf726df171 = n((e) => {
    (this.var_1466.setOptionDisabled(0, !1), this.var_1466.setOptionDisabled(1, !1), e != null);
  }, "_r5f5daf726df171");
  static variableSelectionFilter(e) {
    return e.canReadCreationTime || e.canReadLastUpdateTime;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = new SourceTypeSelectorParam(this.mergedSourceOptions(0), this.createSourceTypeListener(0));
    this._picker = e.createVariablePicker(a.variableSelectionFilter, this._r5f5daf726df171);
    let s = new Hr(i);
    ((this._section1 = e.createSection(
      this.l("variables.variable_selection"),
      this._picker,
      s,
    )),
      (this.var_1466 = e.createRadioGroup([
        new RadioButtonParam(0, this.l("variables.compare_value.0")),
        new RadioButtonParam(1, this.l("variables.compare_value.1")),
      ])));
    let o = e.createSection(this.l("variables.compare_value"), this.var_1466);
    this.var_3440 = e.createRadioGroup([
      new RadioButtonParam(0, this.l("comparison.0")),
      new RadioButtonParam(2, this.l("comparison.2")),
    ]);
    let d = e.createSection(this.l("comparison_selection"), this.var_3440);
    ((this.var_3921 = e.createNamedNumberInput(
      new NumberInputParam(0, -2147483648, 2147483647),
      this.l("variables.duration"),
    )),
      (this._timeUnit = e.createDropdown(
        new DropdownParam("", [
          new ExpandableDropdownOption(0, this.l("variables.duration.0")),
          new ExpandableDropdownOption(1, this.l("variables.duration.1")),
          new ExpandableDropdownOption(2, this.l("variables.duration.2")),
          new ExpandableDropdownOption(3, this.l("variables.duration.3")),
          new ExpandableDropdownOption(4, this.l("variables.duration.4")),
          new ExpandableDropdownOption(5, this.l("variables.duration.5")),
          new ExpandableDropdownOption(6, this.l("variables.duration.6")),
          new ExpandableDropdownOption(7, this.l("variables.duration.7")),
        ]),
      )));
    let c = e.createSpacing(!1, 5),
      f = e.createSimpleListView(!1, [this.var_3921, c, this._timeUnit], !0),
      l = e.createSection(this.l("variables.time_selection"), f);
    t.addElements(this._section1, o, d, l);
  }
  _r0b74b92fc06f4d(e) {
    return !0;
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
  _r0f18641a2be1d6(e) {
    return [VariableExtraSourceTypes.GLOBAL_SOURCE, VariableExtraSourceTypes.CONTEXT_SOURCE];
  }
  advancedAlwaysVisible() {
    return !0;
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
}
