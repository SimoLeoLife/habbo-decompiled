// Extracted from HabboAirLauncher.deobf.js, line 370368.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/variables/class_4218.as
// Obfuscated name: _i595173ea6a5413

class extends class_3947 {
  static {
    n(this, "class_4218");
  }
  var_4562 = -1;
  _variableName = null;
  var_2813 = null;
  var_3293 = null;
  get code() {
    return VariableCodes.USER_VARIABLE;
  }
  readIntParamsFromForm() {
    return [this.var_2813.selected, this.var_3293.get(0).selected ? 1 : 0];
  }
  onEditStart(e) {
    super.onEditStart(e);
    let r = e.intParams[0] ?? 0;
    ((this.var_3293.get(0).selected = e.intParams[1] !== 0),
      (this.var_4562 = r),
      (this.var_2813.selected = r),
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
      new RadioButtonParam(0, this.l("variables.availability.0")),
      new RadioButtonParam(10, this.l("variables.availability.10")),
      new RadioButtonParam(11, this.l("variables.availability.11")),
    ]);
    let s = e.createSection(this.l("variables.availability"), this.var_2813);
    t.addElements(this._variableName, i, s);
  }
  get requireConfirmation() {
    return class_3947.isVariableStored(this.var_4562) && !class_3947.isVariableStored(this.var_2813.selected)
      ? {
          title: "${wiredfurni.variables.availability_change.title}",
          body: "${wiredfurni.variables.availability_change.body}",
        }
      : null;
  }
  variableType() {
    return class_4222.USER;
  }
  get variableNameSection() {
    return this._variableName;
  }
}
