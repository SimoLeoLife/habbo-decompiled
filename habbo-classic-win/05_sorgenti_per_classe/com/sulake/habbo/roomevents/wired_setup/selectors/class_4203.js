// Extracted from HabboAirLauncher.deobf.js, line 367956.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/selectors/class_4203.as
// Obfuscated name: _idf1780b35a355e

class a extends DefaultSelectorType {
  static {
    n(this, "class_4203");
  }
  _section1 = null;
  _picker = null;
  _section2 = null;
  var_1602 = null;
  _section3 = null;
  var_3323 = null;
  _section4 = null;
  readIntParamsFromForm() {
    let e = [];
    return (
      e.push(this.var_3323.selected),
      e.push(this.var_1602.selected ? this._section4.option + 1 : 0),
      we._r42a38bf88649b5(e, this._section4.numberValue),
      e.push(this._section4.target),
      e
    );
  }
  _r4ac8c24e31ca7e() {
    return [this._picker.finalizeSelection, this._section4.finalizeSelection];
  }
  get variableSource() {
    return -1;
  }
  onEditStart(e) {
    let r = e.intParams,
      t = e._r1385185994d461[0],
      i = e._r1385185994d461[1],
      s = r[0],
      o = r[1],
      d = r[3],
      c = r[4];
    (this._picker.init(e._r09c1c618a6015f._r491f74a2c22d93, t, this.variableSource),
      (this.var_3323.selected = s),
      o === 0 || this._picker.selected == null || !this._picker.selected.hasValue
        ? ((i = WiredVariable.var_160), (d = 0), (o = 0), (this.var_1602.selected = !1))
        : o === 1
          ? ((i = WiredVariable.var_160), (this.var_1602.selected = !0))
          : ((d = 0), (this.var_1602.selected = !0)),
      this._section4.init(e._r09c1c618a6015f._r491f74a2c22d93, i, c, o - 1, d),
      this._r31bb2797dbeac6(
        this._picker.selected != null && this._picker.selected.hasValue && o > 0,
      ),
      this._r74c75e64e8d8be(this._picker.selected));
  }
  onEditInitialized() {
    this._section4.onEditInitialized();
  }
  isInputSourceDisabled(e, r) {
    return r === Ve.MERGED_SOURCE && e === 0
      ? this._section2.disabled ||
          !this.var_1602.selected ||
          this._section4._r0fd1b66bcbf656()
      : !1;
  }
  _r74c75e64e8d8be = n((e) => {
    let r = e != null && e.hasValue;
    ((this._section2.disabled = !r), this._r31bb2797dbeac6(r && this.var_1602.selected));
  }, "_r74c75e64e8d8be");
  _r31bb2797dbeac6(e) {
    ((this._section3.disabled = !e),
      (this._section4.disabled = !e),
      this._r41f5cc7d3516ce.presetManager._ra0bf1c6a404ceb(Ve.MERGED_SOURCE, 0));
  }
  onSelectByValueChange = n((e, r) => {
    this._r31bb2797dbeac6(r);
  }, "onSelectByValueChange");
  static variableSelectionFilter(e) {
    return !0;
  }
  get inputMode() {
    return DefaultSelectorType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._picker = e.createVariablePicker(a.variableSelectionFilter, this._r74c75e64e8d8be)),
      (this._section1 = e.createSection(
        this.l("variables.variable_selection"),
        this._picker,
      )));
    let i = e.createCheckboxGroup(
      [new CheckboxOptionParam(this.l("variables.value_settings.select_by_value"))],
      this.onSelectByValueChange,
    );
    ((this.var_1602 = i.get(0)),
      (this._section2 = e.createSection(this.l("choose_type"), this.var_1602)),
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
      (this._section3 = e.createSection(this.l("comparison_selection"), this.var_3323)),
      (this._section4 = e.createValueOrVariableSection(
        0,
        this.mergedSourceOptions(0),
        this.l("variables.reference_value"),
        -2147483648,
        2147483647,
      )),
      t.addElements(
        this._section1,
        this._section2,
        this._section3,
        this._section4,
      ));
  }
  mergedSelectionTitle(e) {
    return "wiredfurni.params.sources.merged.title.variables_reference";
  }
  mergedSelections() {
    return [[0, 0]];
  }
  setMergedType(e, r) {
    this._section4.target = r;
  }
  getMergedType(e) {
    return this._section4.target;
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
