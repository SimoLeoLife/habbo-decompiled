// Estratto da HabboAirLauncher.deobf.js, riga 369043.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/triggerconfs/TriggerOnce.as
// Nome offuscato: _i81c33fb266157a

class extends DefaultTriggerConf {
  static {
    n(this, "TriggerOnce");
  }
  var_1324 = null;
  get code() {
    return TriggerConfCodes.TRIGGER_ONCE;
  }
  get inputMode() {
    return DefaultTriggerConf.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_1324 = e.createSliderSection(
      "wiredfurni.params.settime2",
      "",
      SliderSection.CONVERTER_PULSES,
      1,
      1200,
      1,
    )),
      t.addElements(this.var_1324));
  }
  onEditStart(e) {
    this.var_1324.value = e.getInt(0);
  }
  readIntParamsFromForm() {
    return [this.var_1324.value];
  }
  static getSecsFromPulses(e) {
    let r = Math.floor(e / 2);
    return e % 2 === 0 ? `${r}` : `${r}.5`;
  }
}
