// Estratto da HabboAirLauncher.deobf.js, riga 366723.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_4090.as
// Nome offuscato: _i028486a695000d

class extends DefaultConditionType {
  static {
    n(this, "class_4090");
  }
  var_3428 = null;
  var_3140 = null;
  var_2687 = !1;
  get code() {
    return ConditionCodes.INPUT_SOURCE_QUANTITY;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    this.var_3140 = e.createRadioGroup([
      new RadioButtonParam(0, this.l("comparison.0")),
      new RadioButtonParam(1, this.l("comparison.1")),
      new RadioButtonParam(2, this.l("comparison.2")),
    ]);
    let i = e.createSection(this.l("comparison_selection"), this.var_3140);
    ((this.var_3428 = e.createSliderSection("wiredfurni.params.setamount2", "", new class_4181(), 0, 100, 1)),
      t.addElements(i, this.var_3428));
  }
  onEditStart(e) {
    ((this.var_2687 = e.getBoolean(0)),
      (this.var_3428.value = e.intParams[1]),
      (this.var_3140.selected = e.intParams[2]));
  }
  readIntParamsFromForm() {
    return [this.var_2687 ? 1 : 0, this.var_3428.value, this.var_3140.selected];
  }
  mergedSelections() {
    return [[0, 0]];
  }
  setMergedType(e, r) {
    this.var_2687 = r === Ve.USER_SOURCE;
  }
  getMergedType(e) {
    return this.var_2687 ? Ve.USER_SOURCE : Ve.var_64;
  }
  advancedAlwaysVisible() {
    return !0;
  }
}
