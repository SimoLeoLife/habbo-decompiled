// Extracted from HabboAirLauncher.deobf.js, line 366176.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/chests/ChestHasAmount.as
// Obfuscated name: _ib0f25832634114

class extends DefaultConditionType {
  static {
    n(this, "ChestHasAmount");
  }
  var_4369 = null;
  var_506 = null;
  _compareRadioGroup = null;
  get code() {
    return ConditionCodes.CHEST_HAS_ITEMS;
  }
  readIntParamsFromForm() {
    return [
      this.var_506.numberValue,
      this.var_506.option,
      this.var_506.target,
      this._compareRadioGroup.selected,
    ];
  }
  _r4ac8c24e31ca7e() {
    return [this.var_506.finalizeSelection];
  }
  onEditStart(e) {
    let r = e.intParams,
      t = e._r1385185994d461[0],
      i = r[0],
      s = r[1],
      o = r[2];
    (s === 0 ? (t = WiredVariable.var_160) : (i = 1),
      this.var_506.init(e._r09c1c618a6015f._r491f74a2c22d93, t, o, s, i));
    let d = r[3];
    this._compareRadioGroup.selected = d;
  }
  onEditInitialized() {
    this.var_506.onEditInitialized();
  }
  isInputSourceDisabled(e, r) {
    return r === Ve.MERGED_SOURCE && e === 0 ? this.var_506._r0fd1b66bcbf656() : !1;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._compareRadioGroup = e.createRadioGroup(
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
      (this.var_4369 = e.createSection(this.l("comparison_selection"), this._compareRadioGroup)),
      (this.var_506 = e.createValueOrVariableSection(
        0,
        this.mergedSourceOptions(0),
        this.l("chest_compare_amount"),
        0,
        1e6,
      )),
      t.addElements(this.var_4369, this.var_506));
  }
  mergedSelectionTitle(e) {
    return "wiredfurni.params.sources.merged.title.variables_reference";
  }
  furniSelectionTitle(e) {
    return "wiredfurni.params.sources.furni.title.chests";
  }
  mergedSelections() {
    return [[1, 0]];
  }
  setMergedType(e, r) {
    this.var_506.target = r;
  }
  getMergedType(e) {
    return this.var_506.target;
  }
  get forceHidePickFurniInstructions() {
    return !0;
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
}
