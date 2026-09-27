// Extracted from HabboAirLauncher.deobf.js, line 370192.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/variables/class_4092.as
// Obfuscated name: _i5efedb0fe0c300

class a extends class_3947 {
  static {
    n(this, "class_4092");
  }
  static STRING_PARAM_SPLITTER = "	";
  _variableName = null;
  _questName = null;
  get code() {
    return VariableCodes.var_5865;
  }
  onEditStart(e) {
    super.onEditStart(e);
    let r = e._r7e8836fc336e43.split(a.STRING_PARAM_SPLITTER);
    ((this.initialVariableName = r.length > 0 ? r[0] : ""),
      (this._questName.text = r.length > 1 ? r[1] : ""));
  }
  readStringParamFromForm() {
    return this._variableName.variableName + a.STRING_PARAM_SPLITTER + this._questName.text;
  }
  get inputMode() {
    return class_3947.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._variableName = e.createVariableNameSection()),
      (this._questName = e._r178edc7e663bd7(new it("", 500))));
    let i = e.createSection(this.l("variables.quest_name"), this._questName);
    t.addElements(this._variableName, i);
  }
  variableType() {
    return class_4222.USER;
  }
  get variableNameSection() {
    return this._variableName;
  }
}
