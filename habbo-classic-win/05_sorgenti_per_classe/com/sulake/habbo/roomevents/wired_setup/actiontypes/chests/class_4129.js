// Extracted from HabboAirLauncher.deobf.js, line 365357.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/chests/class_4129.as
// Obfuscated name: _if2c3285d9b7db4

class extends Hg {
  static {
    n(this, "class_4129");
  }
  var_3073 = null;
  _rb19a0a34767db6 = null;
  get code() {
    return ActionTypeCodes.GIVE_CURRENCY_FROM_CHEST;
  }
  readIntParamsFromForm() {
    let e = super.readIntParamsFromForm();
    return (e.push(this.var_3073.selectedId), e);
  }
  onEditStart(e) {
    super.onEditStart(e);
    let r = e.intParams[5] ?? 0;
    this.var_3073.selectedId = r;
  }
  buildInputs(e, r, t) {
    let i = [
      new ExpandableDropdownOption(11, "${wiredfurni.params.earnings_category.11}"),
      new ExpandableDropdownOption(13, "${wiredfurni.params.earnings_category.13}"),
    ];
    ((this.var_3073 = e.createDropdown(new DropdownParam("${wiredfurni.params.earnings_category}", i))),
      (this._rb19a0a34767db6 = e.createSection(
        "${wiredfurni.params.earnings_category}",
        this.var_3073,
        Hr.COLLAPSED,
      )),
      super.buildInputs(e, r, t));
  }
  finalizeBuilding(e) {
    (super.finalizeBuilding(e), e.addElements(this._rb19a0a34767db6));
  }
}
