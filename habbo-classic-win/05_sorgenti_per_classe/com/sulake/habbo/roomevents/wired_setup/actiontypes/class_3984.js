// Estratto da HabboAirLauncher.deobf.js, riga 364947.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_3984.as
// Nome offuscato: _ic8ce28f8c894b1

class extends DefaultActionType {
  static {
    n(this, "class_3984");
  }
  _r15829f444ee007 = null;
  _rd7afea98f27c15 = null;
  get code() {
    return ActionTypeCodes.var_5869;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = [
      new ExpandableDropdownOption(0, "${wiredfurni.params.click_settings.user.0}"),
      new ExpandableDropdownOption(1, "${wiredfurni.params.click_settings.user.1}"),
      new ExpandableDropdownOption(2, "${wiredfurni.params.click_settings.user.2}"),
    ];
    this._r15829f444ee007 = e.createDropdown(new DropdownParam("${wiredfurni.params.click_settings.user}", i));
    let s = [
      new ExpandableDropdownOption(0, "${wiredfurni.params.click_settings.furni.0}"),
      new ExpandableDropdownOption(1, "${wiredfurni.params.click_settings.furni.1}"),
    ];
    ((this._rd7afea98f27c15 = e.createDropdown(new DropdownParam("${wiredfurni.params.click_settings.furni}", s))),
      t.addElements(
        e.createSection("${wiredfurni.params.click_settings.user}", this._r15829f444ee007),
        e.createSection("${wiredfurni.params.click_settings.furni}", this._rd7afea98f27c15),
      ));
  }
  onEditStart(e) {
    ((this._r15829f444ee007.selectedId = e.getInt(0)),
      (this._rd7afea98f27c15.selectedId = e.getInt(1)));
  }
  readIntParamsFromForm() {
    return [this._r15829f444ee007.selectedId, this._rd7afea98f27c15.selectedId];
  }
}
