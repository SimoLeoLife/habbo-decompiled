// Estratto da HabboAirLauncher.deobf.js, riga 370108.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/variables/class_3948.as
// Nome offuscato: _ic5ddd7b790ffe2

class extends class_3947 {
  static {
    n(this, "class_3948");
  }
  _variableName = null;
  var_2813 = null;
  var_166 = null;
  get code() {
    return VariableCodes.GLOBAL_VARIABLE;
  }
  readIntParamsFromForm() {
    return [this.var_2813.selected];
  }
  onEditStart(e) {
    (super.onEditStart(e),
      (this.var_2813.selected = e.intParams[0] ?? 1),
      (this.initialVariableName = e._r7e8836fc336e43));
    let r = e._r09c1c618a6015f._r50f73c18b75c9a.value;
    this._r41f5cc7d3516ce.localization._r43eae9731f5b27(
      "wiredfurni.params.variables.inspection.current_value",
      "value",
      `${r}`,
    );
  }
  readStringParamFromForm() {
    return this._variableName.variableName;
  }
  get inputMode() {
    return class_3947.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._variableName = e.createVariableNameSection()),
      (this.var_166 = e.createText(this.l("variables.inspection.current_value"))));
    let i = e.createSection(this.l("variables.inspection"), this.var_166);
    this.var_2813 = e.createRadioGroup([
      new RadioButtonParam(1, this.l("variables.availability.1")),
      new RadioButtonParam(10, this.l("variables.availability.10")),
      new RadioButtonParam(11, this.l("variables.availability.11")),
    ]);
    let s = e.createSection(this.l("variables.availability"), this.var_2813);
    t.addElements(this._variableName, i, s);
  }
  variableType() {
    return class_4222.var_5797;
  }
  get variableNameSection() {
    return this._variableName;
  }
}
