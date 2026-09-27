// Estratto da HabboAirLauncher.deobf.js, riga 366114.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_4232.as
// Nome offuscato: _i2fceed11b900eb

class extends DefaultConditionType {
  static {
    n(this, "class_4232");
  }
  var_3364 = null;
  get code() {
    return ConditionCodes.ACTOR_IS_WEARING_BADGE;
  }
  get negativeCode() {
    return ConditionCodes.NOT_ACTOR_IS_WEARING_BADGE;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3364 = e._r178edc7e663bd7(
      new it("", 1e3, null, -1, null, !0, this.loc("wiredfurni.tooltip.badgecode")),
    )),
      t.addElements(e.createSection(this.l("badgecode"), this.var_3364)));
  }
  readStringParamFromForm() {
    return this.var_3364.text;
  }
  onEditStart(e) {
    this.var_3364.text = e._r7e8836fc336e43;
  }
}
