// Estratto da HabboAirLauncher.deobf.js, riga 370157.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/variables/class_4177.as
// Nome offuscato: _i14a4fa2668ec42

class a extends class_3947 {
  static {
    n(this, "class_4177");
  }
  static STRING_PARAM_SPLITTER = "	";
  _variableName = null;
  _questChainName = null;
  get code() {
    return VariableCodes.var_5876;
  }
  onEditStart(e) {
    super.onEditStart(e);
    let r = e._r7e8836fc336e43.split(a.STRING_PARAM_SPLITTER);
    ((this.initialVariableName = r.length > 0 ? r[0] : ""),
      (this._questChainName.text = r.length > 1 ? r[1] : ""));
  }
  readStringParamFromForm() {
    return this._variableName.variableName + a.STRING_PARAM_SPLITTER + this._questChainName.text;
  }
  get inputMode() {
    return class_3947.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._variableName = e.createVariableNameSection()),
      (this._questChainName = e._r178edc7e663bd7(new it("", 500))));
    let i = e.createSection(this.l("variables.quest_chain_name"), this._questChainName);
    t.addElements(this._variableName, i);
  }
  variableType() {
    return class_4222.USER;
  }
  get variableNameSection() {
    return this._variableName;
  }
}
