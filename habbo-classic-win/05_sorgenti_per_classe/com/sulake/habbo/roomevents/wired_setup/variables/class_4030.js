// Extracted from HabboAirLauncher.deobf.js, line 369970.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/variables/class_4030.as
// Obfuscated name: _ib5b5f0c01b473a

class a extends class_3947 {
  static {
    n(this, "class_4030");
  }
  static STRING_PARAM_SPLITTER = "	";
  _variableName = null;
  var_3376 = null;
  get code() {
    return VariableCodes.var_5870;
  }
  get inputMode() {
    return class_3947.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._variableName = e.createVariableNameSection()),
      (this.var_3376 = e._r178edc7e663bd7(new it("", 100, "1234.."))));
    let i = e.createSection("${wiredfurni.params.variables.daily_task_name}", this.var_3376);
    t.addElements(this._variableName, i);
  }
  readStringParamFromForm() {
    return this._variableName.variableName + a.STRING_PARAM_SPLITTER + this.var_3376.text;
  }
  onEditStart(e) {
    let r = e._r7e8836fc336e43.split(a.STRING_PARAM_SPLITTER);
    ((this.initialVariableName = r.length > 0 ? r[0] : ""),
      (this.var_3376.text = r.length > 1 ? r[1] : ""));
  }
  get variableNameSection() {
    return this._variableName;
  }
  variableType() {
    return class_4222.USER;
  }
}
