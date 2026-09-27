// Extracted from HabboAirLauncher.deobf.js, line 360027.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/DefaultElement.as
// Obfuscated name: _ia0ee0a671341c7

class a {
  static {
    n(this, "DefaultElement");
  }
  static INPUTS_TYPE_NONE = 0;
  static INPUTS_TYPE_UI_BUILDER = 1;
  _cont = null;
  _roomEvents = null;
  _initialized = !1;
  get code() {
    return -1;
  }
  get negativeCode() {
    return -1;
  }
  get hasStateSnapshot() {
    return !1;
  }
  readIntParamsFromForm() {
    return [];
  }
  _r4ac8c24e31ca7e() {
    return [];
  }
  readStringParamFromForm() {
    return "";
  }
  _r0effae977df5f6(e) {
    this._roomEvents = e;
  }
  onInit(e) {
    ((this._roomEvents = e), (this._initialized = !0));
  }
  onEditStart(e) {}
  onEditInitialized() {}
  _r879e385d197fa5() {}
  validate() {
    return null;
  }
  _r9cafa9a1789cdf(e) {}
  furniSelectionTitle(e) {
    return "wiredfurni.params.sources.furni.title";
  }
  userSelectionTitle(e) {
    return "wiredfurni.params.sources.users.title";
  }
  get forceFurniSelection() {
    return this.hasStateSnapshot;
  }
  mergedSelections() {
    return [];
  }
  mergedSelectionTitle(e) {
    return "wiredfurni.params.sources.merged.title";
  }
  setMergedType(e, r) {}
  getMergedType(e) {
    return 0;
  }
  isInputSourceDisabled(e, r) {
    return !1;
  }
  _r0f18641a2be1d6(e) {
    return [];
  }
  get forceHidePickFurniInstructions() {
    return !1;
  }
  advancedAlwaysVisible() {
    return !1;
  }
  get _rcae2a8c2f9affd() {
    return !1;
  }
  get requireConfirmation() {
    return null;
  }
  buildInputs(e, r, t) {}
  get inputMode() {
    return a.INPUTS_TYPE_NONE;
  }
  mergedSourceOptions(e) {
    let r = [Ve.var_64, Ve.USER_SOURCE];
    for (let t of this._r0f18641a2be1d6(e))
      (!this._roomEvents.getBoolean("wired.variables.context_visible") &&
        t === VariableExtraSourceTypes.CONTEXT_SOURCE &&
        this.getMergedType(e) !== VariableExtraSourceTypes.CONTEXT_SOURCE) ||
        r.push(t);
    return r;
  }
  _r0b74b92fc06f4d(e) {
    return !1;
  }
  createSourceTypeListener(e) {
    return new class_2862(this, e);
  }
  get cont() {
    return this._cont;
  }
  get _r41f5cc7d3516ce() {
    return this._roomEvents;
  }
  get _r4294af0daf7815() {
    return this._roomEvents.presetManager;
  }
  loc(e) {
    return this._roomEvents.localization.getLocalization(e, e);
  }
  l(e) {
    return "${wiredfurni.params." + e + "}";
  }
  get widthModifier() {
    return 1;
  }
  get _r401186d17e05f2() {
    return !1;
  }
}
