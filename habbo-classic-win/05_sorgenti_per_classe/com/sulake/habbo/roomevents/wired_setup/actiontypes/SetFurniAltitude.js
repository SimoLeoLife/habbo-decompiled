// Extracted from HabboAirLauncher.deobf.js, line 365001.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/SetFurniAltitude.as
// Obfuscated name: _ib2000d52a9d7a6

class extends DefaultActionType {
  static {
    n(this, "SetFurniAltitude");
  }
  _r950d31fd3c4266 = null;
  var_3200 = null;
  get code() {
    return ActionTypeCodes.SET_FURNI_ALTITUDE;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._r950d31fd3c4266 = e.createSliderSection(
      "wiredfurni.params.setaltitude",
      "altitude",
      new SliderValueHundredth(),
      0,
      8e3,
      1,
    )),
      (this._r950d31fd3c4266.value = 0),
      (this.var_3200 = e.createRadioGroup([
        new RadioButtonParam(0, this.l("operator.0")),
        new RadioButtonParam(1, this.l("operator.1")),
        new RadioButtonParam(2, this.l("operator.2")),
      ])),
      t.addElements(
        e.createSection(this.l("choose_type"), this.var_3200),
        this._r950d31fd3c4266,
      ));
  }
  onEditStart(e) {
    ((this._r950d31fd3c4266.value = e.intParams[0] ?? 0),
      (this.var_3200.selected = e.intParams[1] ?? 0));
  }
  readIntParamsFromForm() {
    return [this._r950d31fd3c4266.value, this.var_3200.selected];
  }
}
