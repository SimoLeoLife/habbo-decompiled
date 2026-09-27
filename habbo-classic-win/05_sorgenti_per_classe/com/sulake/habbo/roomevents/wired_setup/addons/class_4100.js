// Extracted from HabboAirLauncher.deobf.js, line 360456.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/class_4100.as
// Obfuscated name: _i5bb529ce6ae8fc

class a extends DefaultAddonType {
  static {
    n(this, "class_4100");
  }
  _section1 = null;
  var_2730 = null;
  _section2 = null;
  var_2821 = null;
  _section3 = null;
  get variableType() {
    return -1;
  }
  get isFilter() {
    return !0;
  }
  readIntParamsFromForm() {
    return [
      this._section3.numberValue,
      this.var_2821.selectedId,
      this._section3.option,
      this._section3.target,
    ];
  }
  _r4ac8c24e31ca7e() {
    return [this.var_2730.finalizeSelection, this._section3.finalizeSelection];
  }
  onEditStart(e) {
    let r = e.intParams,
      t = e._r1385185994d461[0] ?? "",
      i = e._r1385185994d461[1] ?? WiredVariable.var_160,
      s = r[0] ?? 0,
      o = r[1] ?? 0,
      d = r[2] ?? 0,
      c = r[3] ?? 0;
    (this.var_2730.init(e._r09c1c618a6015f._r491f74a2c22d93, t, this.variableType),
      d === 0 ? (i = WiredVariable.var_160) : (s = 1),
      this._section3.init(e._r09c1c618a6015f._r491f74a2c22d93, i, c, d, s),
      this.initSortingDropdown(this.var_2730.selected, o));
  }
  onEditInitialized() {
    this._section3.onEditInitialized();
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2730 = e.createVariablePicker(a.variableSelectionFilter, this.initSortingDropdown)),
      (this._section1 = e.createSection(
        this.loc("wiredfurni.params.variables.variable_selection"),
        this.var_2730,
      )),
      (this.var_2821 = e.createDropdown(new DropdownParam(this.l("variables.sort_by.caption"), []))),
      (this._section2 = e.createSection(this.l("variables.sort_by"), this.var_2821)),
      (this._section3 = e.createValueOrVariableSection(0, this.mergedSourceOptions(0), this.l("setfilter"), 1, 1e3)),
      t.addElements(this._section1, this._section2, this._section3));
  }
  isInputSourceDisabled(e, r) {
    return r === Ve.MERGED_SOURCE ? this._section3._r0fd1b66bcbf656() : !1;
  }
  mergedSelectionTitle(e) {
    return "wiredfurni.params.sources.merged.title.variables_reference";
  }
  mergedSelections() {
    return [[0, 0]];
  }
  setMergedType(e, r) {
    this._section3.target = r;
  }
  getMergedType(e) {
    return this._section3.target;
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
  initSortingDropdown = n((e, r = -1) => {
    r === -1 && (r = this.var_2821.selectedId);
    let t = [],
      i = "variables.sort_by.";
    ((e == null || e.hasValue) && (t.push(new ExpandableDropdownOption(0, this.l(i + "0"))), t.push(new ExpandableDropdownOption(1, this.l(i + "1")))),
      (e == null || e.canReadCreationTime) &&
        (t.push(new ExpandableDropdownOption(2, this.l(i + "2"))), t.push(new ExpandableDropdownOption(3, this.l(i + "3")))),
      (e == null || e.canReadLastUpdateTime) &&
        (t.push(new ExpandableDropdownOption(4, this.l(i + "4"))), t.push(new ExpandableDropdownOption(5, this.l(i + "5")))),
      this.var_2821.reinit(t, r));
  }, "initSortingDropdown");
  static variableSelectionFilter(e) {
    return e.hasValue || e.canReadCreationTime || e.canReadLastUpdateTime;
  }
}
