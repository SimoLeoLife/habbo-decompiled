// Estratto da HabboAirLauncher.deobf.js, riga 366580.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/FurnisHaveAvatars.as
// Nome offuscato: _i5f0b5a1692af5a

class extends DefaultConditionType {
  static {
    n(this, "FurnisHaveAvatars");
  }
  var_3131 = null;
  get code() {
    return ConditionCodes.FURNIS_HAVE_AVATARS;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3131 = e.createRadioGroup([
      new RadioButtonParam(0, this.l("requireall.2")),
      new RadioButtonParam(1, this.l("requireall.3")),
    ])),
      t.addElements(e.createSection(this.l("requireall"), this.var_3131)));
  }
  onEditStart(e) {
    this.var_3131.selected = e.intParams[0];
  }
  readIntParamsFromForm() {
    return [this.var_3131.selected];
  }
}
