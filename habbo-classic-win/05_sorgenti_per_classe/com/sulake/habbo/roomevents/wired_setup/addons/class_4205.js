// Extracted from HabboAirLauncher.deobf.js, line 361650.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/class_4205.as
// Obfuscated name: _i22a9b9321fe760

class a extends DefaultAddonType {
  static {
    n(this, "class_4205");
  }
  var_1660 = null;
  var_722 = null;
  var_2094 = null;
  var_1270 = null;
  _r7a37a210417240 = null;
  get code() {
    return AddonCodes.VARIABLE_PLACEHOLDER;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_1660 = e.createPlaceholderNameSection(this.l("texts.placeholder_name"), "$")),
      (this.var_722 = e.createChooseVariableSection(
        0,
        this.mergedSourceOptions(0),
        a.variableSelectionFilter,
        this.onChangeVariable,
      )),
      (this.var_2094 = e.createVariablePlaceholderModeSection(this.l("texts.variable_display_type"))),
      (this.var_1270 = e.createPlaceholderTypeSection()),
      t.addElements(
        this.var_1660,
        this.var_722,
        this.var_2094,
        this.var_1270,
      ));
  }
  onEditStart(e) {
    let r = e._r7e8836fc336e43.split("	"),
      t = r[0] ?? "",
      i = r.length > 1 ? r[1] : "",
      s = e._r1385185994d461[0] ?? "",
      o = e.getBoolean(0),
      d = e.getInt(1),
      c = e.getBoolean(2);
    ((this.var_2094.isTextMode = c),
      (this.var_1660.placeholderName = t),
      (this.var_1270.isShowMultiple = o),
      (this.var_1270.delimiter = i),
      this.var_722.init(e._r09c1c618a6015f._r491f74a2c22d93, s, d),
      (this._r7a37a210417240 = this.var_722.selected),
      this.onChangeVariable(this.var_722.selected),
      this._rc4b83517445596());
  }
  onEditInitialized() {
    this.var_722.onEditInitialized();
  }
  readIntParamsFromForm() {
    return [
      this.var_1270.isShowMultiple ? 1 : 0,
      this.var_722.target,
      this.var_2094.isTextMode ? 1 : 0,
    ];
  }
  readStringParamFromForm() {
    return this.var_1270.isShowMultiple
      ? this.var_1660.placeholderName + "	" + this.var_1270.delimiter
      : this.var_1660.placeholderName;
  }
  _r4ac8c24e31ca7e() {
    return [this.var_722.finalizeSelection];
  }
  mergedSelectionTitle(e) {
    return "wiredfurni.params.sources.merged.title.variables";
  }
  mergedSelections() {
    return [[0, 0]];
  }
  setMergedType(e, r) {
    ((this.var_722.target = r), this._rc4b83517445596());
  }
  getMergedType(e) {
    return this.var_722.target;
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
  _r0b74b92fc06f4d(e) {
    return !0;
  }
  static variableSelectionFilter(e) {
    return e.hasValue;
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
  _rc4b83517445596() {
    let e =
      this.var_722.target === VariableExtraSourceTypes.CONTEXT_SOURCE ||
      this.var_722.target === VariableExtraSourceTypes.GLOBAL_SOURCE;
    ((this.var_1270.get(1).disabled = e), e && (this.var_1270.isShowMultiple = !1));
  }
}
