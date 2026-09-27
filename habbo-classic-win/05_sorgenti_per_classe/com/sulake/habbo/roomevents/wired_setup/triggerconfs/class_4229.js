// Estratto da HabboAirLauncher.deobf.js, riga 369155.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/triggerconfs/class_4229.as
// Nome offuscato: _i76fd6c5c9b45dd

class extends DefaultTriggerConf {
  static {
    n(this, "class_4229");
  }
  var_2811 = null;
  get code() {
    return TriggerConfCodes.PERIODIC_SHORT;
  }
  readIntParamsFromForm() {
    return [this.var_2811.value];
  }
  get inputMode() {
    return DefaultTriggerConf.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2811 = e.createSliderSection(
      "wiredfurni.params.setshorttime",
      "ms",
      new SliderValueMilliseconds50(),
      1,
      10,
      1,
      !1,
    )),
      (this.var_2811.value = 1),
      t.addElements(this.var_2811));
  }
  onEditStart(e) {
    this.var_2811.value = e.intParams[0];
  }
}
