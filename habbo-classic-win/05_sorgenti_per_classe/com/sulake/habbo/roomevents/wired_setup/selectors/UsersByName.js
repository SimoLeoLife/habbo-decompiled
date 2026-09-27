// Estratto da HabboAirLauncher.deobf.js, riga 368144.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/selectors/UsersByName.as
// Nome offuscato: _i1f36c9a7ed6caf

class extends DefaultSelectorType {
  static {
    n(this, "UsersByName");
  }
  var_3871 = null;
  get code() {
    return SelectorCodes.USERS_BY_NAME;
  }
  get inputMode() {
    return DefaultSelectorType.INPUTS_TYPE_UI_BUILDER;
  }
  readStringParamFromForm() {
    return this.var_3871.text.replace(/\n\r/g, "	").replace(/\r/g, "	").replace(/\n/g, "	");
  }
  onEditStart(e) {
    this.var_3871.text = e._r7e8836fc336e43.replace(/\t/g, "\r");
  }
  buildInputs(e, r, t) {
    this.var_3871 = e._r1cb85c1e1927d4(new TextAreaParam(140, -1, 20, -1, 1e3));
    let i = e.createSection("${wiredfurni.params.enter_names}", this.var_3871);
    t.addElements(i);
  }
}
