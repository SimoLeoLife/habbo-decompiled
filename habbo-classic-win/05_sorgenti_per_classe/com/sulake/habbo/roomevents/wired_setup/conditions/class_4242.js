// Estratto da HabboAirLauncher.deobf.js, riga 367133.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_4242.as
// Nome offuscato: _i374ebaefd4ec9e

class extends DefaultConditionType {
  static {
    n(this, "class_4242");
  }
  var_3849 = null;
  var_3635 = null;
  get code() {
    return ConditionCodes.USER_COUNT_IN;
  }
  get negativeCode() {
    return ConditionCodes.NOT_USER_COUNT_IN;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3849 = e.createSliderSection(
      "wiredfurni.params.usercountmin",
      "value",
      new class_4181(),
      0,
      125,
      1,
      !1,
    )),
      (this.var_3635 = e.createSliderSection(
        "wiredfurni.params.usercountmax",
        "value",
        new class_4181(),
        0,
        125,
        1,
        !1,
      )),
      t.addElements(this.var_3849, this.var_3635));
  }
  onEditStart(e) {
    ((this.var_3849.value = e.intParams[0]),
      (this.var_3635.value = e.intParams[1]));
  }
  readIntParamsFromForm() {
    return [this.var_3849.value, this.var_3635.value];
  }
}
