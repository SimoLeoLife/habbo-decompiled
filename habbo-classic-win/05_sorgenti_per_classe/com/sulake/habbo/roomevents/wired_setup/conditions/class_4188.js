// Extracted from HabboAirLauncher.deobf.js, line 366141.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_4188.as
// Obfuscated name: _ie5b3486538e39e

class extends DefaultConditionType {
  static {
    n(this, "class_4188");
  }
  var_3894 = null;
  get code() {
    return ConditionCodes.ACTOR_IS_WEARING_EFFECT;
  }
  get negativeCode() {
    return ConditionCodes.NOT_ACTOR_IS_WEARING_EFFECT;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3894 = e.createNumberInput(
      new NumberInputParam(0, -2147483648, 2147483647, 200, 0, !1, !1, this.loc("wiredfurni.tooltip.effectid")),
    )),
      t.addElements(e.createSection(this.l("effectid"), this.var_3894)));
  }
  readIntParamsFromForm() {
    return [this.var_3894.value];
  }
  onEditStart(e) {
    this.var_3894.value = e.intParams[0];
  }
}
