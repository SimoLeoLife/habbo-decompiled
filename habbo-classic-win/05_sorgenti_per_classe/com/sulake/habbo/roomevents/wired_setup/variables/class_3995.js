// Estratto da HabboAirLauncher.deobf.js, riga 370065.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/variables/class_3995.as
// Nome offuscato: _ia48d480c62e017

class extends class_3947 {
  static {
    n(this, "class_3995");
  }
  _variableName = null;
  var_2813 = null;
  var_3293 = null;
  get code() {
    return VariableCodes.var_5921;
  }
  readIntParamsFromForm() {
    return [this.var_3293.get(0).selected ? 1 : 0, this.var_2813.selected];
  }
  onEditStart(e) {
    (super.onEditStart(e),
      (this.var_3293.get(0).selected = e.intParams[0] !== 0),
      (this.var_2813.selected = e.intParams[1] ?? 1),
      (this.initialVariableName = e._r7e8836fc336e43));
  }
  readStringParamFromForm() {
    return this._variableName.variableName;
  }
  get inputMode() {
    return class_3947.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._variableName = e.createVariableNameSection()),
      (this.var_3293 = e.createCheckboxGroup([new CheckboxOptionParam(this.l("variables.settings.has_value"))])));
    let i = e.createSection(this.l("variables.settings"), this.var_3293);
    this.var_2813 = e.createRadioGroup([
      new RadioButtonParam(1, this.l("variables.availability.1")),
      new RadioButtonParam(10, this.l("variables.availability.10")),
    ]);
    let s = e.createSection(this.l("variables.availability"), this.var_2813);
    t.addElements(this._variableName, i, s);
  }
  variableType() {
    return class_4222.FURNI;
  }
  get variableNameSection() {
    return this._variableName;
  }
}
