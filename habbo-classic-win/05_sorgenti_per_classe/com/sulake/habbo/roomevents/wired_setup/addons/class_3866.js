// Extracted from HabboAirLauncher.deobf.js, line 361220.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/class_3866.as
// Obfuscated name: _i282c4b331e85c0

class a extends DefaultAddonType {
  static {
    n(this, "class_3866");
  }
  var_1660 = null;
  var_722 = null;
  var_2094 = null;
  _r7a37a210417240 = null;
  get code() {
    return AddonCodes.VARIABLE_CAPTURER;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_1660 = e.createPlaceholderNameSection(this.l("texts.capturer_name"), "#")),
      (this.var_722 = e.createChooseVariableSection(0, null, a.variableSelectionFilter, this.onChangeVariable)),
      (this.var_2094 = e.createVariablePlaceholderModeSection(this.l("texts.variable_input_type"))),
      t.addElements(this.var_1660, this.var_722, this.var_2094));
  }
  onEditStart(e) {
    let t = e._r7e8836fc336e43.split("	")[0] ?? "",
      i = e._r1385185994d461[0] ?? "",
      s = e.getBoolean(0);
    ((this.var_2094.isTextMode = s),
      (this.var_1660.placeholderName = t),
      this.var_722.init(e._r09c1c618a6015f._r491f74a2c22d93, i, VariableExtraSourceTypes.CONTEXT_SOURCE),
      (this._r7a37a210417240 = this.var_722.selected),
      this.onChangeVariable(this.var_722.selected));
  }
  onEditInitialized() {
    this.var_722.onEditInitialized();
  }
  readIntParamsFromForm() {
    return [this.var_2094.isTextMode ? 1 : 0];
  }
  readStringParamFromForm() {
    return this.var_1660.placeholderName;
  }
  _r4ac8c24e31ca7e() {
    return [this.var_722.finalizeSelection];
  }
  static variableSelectionFilter(e) {
    return e.hasValue && e.canCreateAndDelete && e.canWriteValue;
  }
  onChangeVariable = n((e) => {
    let r = e == null || !e.hasTextConnector;
    ((this.var_2094.get(1).disabled = r),
      r && (this.var_2094.isTextMode = !1),
      (this.var_1660.placeholderName === "" ||
        (this._r7a37a210417240 != null &&
          a.prettifiedName(this._r7a37a210417240) === this.var_1660.placeholderName)) &&
        (this.var_1660.placeholderName = a.prettifiedName(e)),
      (this._r7a37a210417240 = e));
  }, "onChangeVariable");
  static prettifiedName(e) {
    return e == null ? "" : we.flatVariableName(e);
  }
}
