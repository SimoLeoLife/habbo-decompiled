// Extracted from HabboAirLauncher.deobf.js, line 363314.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4028.as
// Obfuscated name: _i2655d305c29706

class extends DefaultActionType {
  static {
    n(this, "class_4028");
  }
  _effectDropdown = null;
  _cancelCheckbox = null;
  get code() {
    return ActionTypeCodes.FREEZE_USER;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = [];
    for (let d = 0; d <= 4; d += 1) i.push(new ExpandableDropdownOption(d, this.l(`freeze.effect.${d}`)));
    ((this._effectDropdown = e.createDropdown(new DropdownParam("${wiredfurni.params.freeze.effect_selection}", i))),
      (this._cancelCheckbox = e.createCheckboxGroup([new CheckboxOptionParam(this.l("freeze.cancel_on_teleport"), 0)])));
    let s = e.createSimpleListView(!0, [this._effectDropdown, this._cancelCheckbox]),
      o = e.createSection("${wiredfurni.params.freeze.effect_selection}", s);
    t.addElements(o);
  }
  onEditStart(e) {
    ((this._effectDropdown.selectedId = e.intParams[0] ?? 0),
      (this._cancelCheckbox.get(0).selected = e.getBoolean(1)));
  }
  readIntParamsFromForm() {
    return [this._effectDropdown.selectedId, this._cancelCheckbox.get(0).selected ? 1 : 0];
  }
}
