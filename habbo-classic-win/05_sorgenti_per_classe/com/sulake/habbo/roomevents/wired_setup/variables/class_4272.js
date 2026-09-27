// Extracted from HabboAirLauncher.deobf.js, line 369934.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/variables/class_4272.as
// Obfuscated name: _i2d54f89e272808

class extends class_3947 {
  static {
    n(this, "class_4272");
  }
  _variableName = null;
  var_3293 = null;
  get code() {
    return VariableCodes.CONTEXT_VARIABLE;
  }
  readIntParamsFromForm() {
    return [this.var_3293.get(0).selected ? 1 : 0];
  }
  onEditStart(e) {
    (super.onEditStart(e),
      (this.var_3293.get(0).selected = e.intParams[0] !== 0),
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
    t.addElements(this._variableName, i);
  }
  variableType() {
    return class_4222.var_5940;
  }
  get variableNameSection() {
    return this._variableName;
  }
}
