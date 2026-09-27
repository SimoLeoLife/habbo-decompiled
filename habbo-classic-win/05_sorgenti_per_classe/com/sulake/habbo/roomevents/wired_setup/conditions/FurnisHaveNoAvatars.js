// Estratto da HabboAirLauncher.deobf.js, riga 366605.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/FurnisHaveNoAvatars.as
// Nome offuscato: _if8d49f2360cf03

class extends FurnisHaveAvatars {
  static {
    n(this, "FurnisHaveNoAvatars");
  }
  get code() {
    return ConditionCodes.NOT_FURNIS_HAVE_AVATARS;
  }
  get inputMode() {
    return FurnisHaveAvatars.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3131 = e.createRadioGroup([
      new RadioButtonParam(1, this.l("not_requireall.2")),
      new RadioButtonParam(0, this.l("not_requireall.3")),
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
