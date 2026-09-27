// Extracted from HabboAirLauncher.deobf.js, line 361963.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/chests/class_3904.as
// Obfuscated name: _iad1cbf2bd00a95

class a extends DefaultAddonType {
  static {
    n(this, "class_3904");
  }
  var_722 = null;
  _scanningMode = null;
  get code() {
    return AddonCodes.CHEST_ITEM_TYPE_SCANNER;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = e.createUsageInfoSection("${wiredfurni.params.chest_item_type_scanner.info}");
    ((this.var_722 = e.createChooseVariableSection(0, null, a.variableSelectionFilter)),
      (this._scanningMode = e.createRadioGroup([
        new RadioButtonParam(0, "${wiredfurni.params.chest_item_type_scanner.0}"),
        new RadioButtonParam(1, "${wiredfurni.params.chest_item_type_scanner.1}"),
      ])));
    let s = e.createSection(
      "${wiredfurni.params.chest_item_type_scanner}",
      this._scanningMode,
      Hr.COLLAPSED,
    );
    t.addElements(i, this.var_722, s);
  }
  onEditStart(e) {
    let r = e._r1385185994d461[0] ?? "";
    (this.var_722.init(e._r09c1c618a6015f._r491f74a2c22d93, r, VariableExtraSourceTypes.CONTEXT_SOURCE),
      (this._scanningMode.selected = e.getInt(0)));
  }
  onEditInitialized() {
    this.var_722.onEditInitialized();
  }
  _r4ac8c24e31ca7e() {
    return [this.var_722.finalizeSelection];
  }
  readIntParamsFromForm() {
    return [this._scanningMode.selected];
  }
  furniSelectionTitle(e) {
    return e === 0
      ? "wiredfurni.params.sources.furni.title.item_types"
      : "wiredfurni.params.sources.furni.title.chests";
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
  advancedAlwaysVisible() {
    return !0;
  }
  static variableSelectionFilter(e) {
    return e.hasValue && e.canCreateAndDelete && e.canWriteValue;
  }
}
