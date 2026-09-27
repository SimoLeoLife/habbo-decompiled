// Extracted from HabboAirLauncher.deobf.js, line 369899.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/variables/class_3947.as
// Obfuscated name: _ic33be9a78c1673

class extends So {
  static {
    n(this, "class_3947");
  }
  _initialVariableName = "";
  static isVariableStored(e) {
    return e === class_4337.var_4280 || e === class_4337.var_5113;
  }
  set initialVariableName(e) {
    ((this._initialVariableName = e), this.variableNameSection != null && (this.variableNameSection.variableName = e));
  }
  get initialVariableName() {
    return this._initialVariableName;
  }
  variableType() {
    return 0;
  }
  get variableNameSection() {
    return null;
  }
}
