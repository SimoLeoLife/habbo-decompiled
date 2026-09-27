// Extracted from HabboAirLauncher.deobf.js, line 360387.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/SelectorFilter.as
// Obfuscated name: _i40b6b9d31aa71a

class extends DefaultAddonType {
  static {
    n(this, "SelectorFilter");
  }
  _section1 = null;
  get isFilter() {
    return !0;
  }
  readIntParamsFromForm() {
    return [this._section1.numberValue, this._section1.option, this._section1.target];
  }
  _r4ac8c24e31ca7e() {
    return [this._section1.finalizeSelection];
  }
  onEditStart(e) {
    let r = e.intParams,
      t = e._r1385185994d461[0] ?? WiredVariable.var_160,
      i = r[0] ?? 0,
      s = r[1] ?? 0,
      o = r[2] ?? 0;
    (s === 0 ? (t = WiredVariable.var_160) : (i = 1),
      this._section1.init(e._r09c1c618a6015f._r491f74a2c22d93, t, o, s, i));
  }
  onEditInitialized() {
    this._section1.onEditInitialized();
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._section1 = e.createValueOrVariableSection(0, this.mergedSourceOptions(0), this.l("setfilter"), 1, 1e3)),
      t.addElements(this._section1));
  }
  isInputSourceDisabled(e, r) {
    return r === Ve.MERGED_SOURCE ? this._section1._r0fd1b66bcbf656() : !1;
  }
  mergedSelectionTitle(e) {
    return "wiredfurni.params.sources.merged.title.variables_reference";
  }
  mergedSelections() {
    return [[0, 0]];
  }
  setMergedType(e, r) {
    this._section1.target = r;
  }
  getMergedType(e) {
    return this._section1.target;
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
