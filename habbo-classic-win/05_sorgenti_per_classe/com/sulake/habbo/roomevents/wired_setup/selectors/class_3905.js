// Extracted from HabboAirLauncher.deobf.js, line 367500.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/selectors/class_3905.as
// Obfuscated name: _i47ec71b41157f2

class extends DefaultSelectorType {
  static {
    n(this, "class_3905");
  }
  _stateCheckbox = null;
  get code() {
    return SelectorCodes.FURNI_BY_TYPE;
  }
  get inputMode() {
    return DefaultSelectorType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    this._stateCheckbox = e.createCheckboxGroup([new CheckboxOptionParam(this.l("state_match"), 0)]);
    let i = e.createSection(this.l("select_options"), this._stateCheckbox);
    t.addElements(i);
  }
  onEditStart(e) {
    this._stateCheckbox.get(0).selected = e.getBoolean(0);
  }
  readIntParamsFromForm() {
    return [this._stateCheckbox.get(0).selected ? 1 : 0];
  }
}
