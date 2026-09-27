// Estratto da HabboAirLauncher.deobf.js, riga 362649.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4126.as
// Nome offuscato: _ibe20bd1526dc0b

class extends DefaultActionType {
  static {
    n(this, "class_4126");
  }
  var_3452 = null;
  var_3592 = null;
  var_3200 = null;
  get code() {
    return ActionTypeCodes.ADJUST_CLOCK;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3452 = e.createSliderSection(
      "wiredfurni.params.clock_seconds",
      "seconds",
      new SliderValuePulses(),
      0,
      119,
      1,
      !1,
    )),
      (this.var_3592 = e.createSliderSection(
        "wiredfurni.params.clock_minutes",
        "minutes",
        SliderSection.CONVERTER_ECHO,
        0,
        99,
        1,
        !1,
      )),
      (this.var_3200 = e.createRadioGroup([
        new RadioButtonParam(0, this.l("operator.0")),
        new RadioButtonParam(1, this.l("operator.1")),
        new RadioButtonParam(2, this.l("operator.2")),
      ])),
      t.addElements(
        e.createSection(this.l("choose_type"), this.var_3200),
        this.var_3592,
        this.var_3452,
      ));
  }
  onEditStart(e) {
    let r = e.intParams[0] ?? 0,
      t = e.intParams[1] ?? 0,
      i = e.intParams[2] ?? 0;
    ((this.var_3452.value = r * 2 + i),
      (this.var_3592.value = t),
      (this.var_3200.selected = e.intParams[3] ?? 0));
  }
  readIntParamsFromForm() {
    let e = this.var_3452.value,
      r = Math.floor(e / 2),
      t = e % 2;
    return [r, this.var_3592.value, t, this.var_3200.selected];
  }
}
