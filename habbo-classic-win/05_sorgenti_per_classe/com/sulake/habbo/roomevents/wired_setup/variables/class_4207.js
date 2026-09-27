// Estratto da HabboAirLauncher.deobf.js, riga 370004.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/variables/class_4207.as
// Nome offuscato: _i98d0e1f6cf4954

class a extends class_3947 {
  static {
    n(this, "class_4207");
  }
  _variableName = null;
  var_722 = null;
  _r7a37a210417240 = null;
  get code() {
    return VariableCodes.ECHO_VARIABLE;
  }
  get inputMode() {
    return class_3947.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._variableName = e.createVariableNameSection()),
      (this.var_722 = e.createChooseVariableSection(
        -1,
        [Ve.var_64, Ve.USER_SOURCE, VariableExtraSourceTypes.GLOBAL_SOURCE, VariableExtraSourceTypes.CONTEXT_SOURCE],
        a.variableSelectionFilter,
        this._r74c75e64e8d8be,
      )),
      t.addElements(this._variableName, this.var_722));
  }
  static variableSelectionFilter(e) {
    return e.variableType !== class_3973.var_4355;
  }
  readStringParamFromForm() {
    return this._variableName.variableName;
  }
  _r4ac8c24e31ca7e() {
    return [this.var_722.finalizeSelection];
  }
  onEditStart(e) {
    let r = e._r1385185994d461[0],
      t = Ve.USER_SOURCE,
      i = we._r20e36218db9fd8(e._r09c1c618a6015f._r491f74a2c22d93.variables ?? [], r);
    (i != null && (t = i.variableTarget),
      this.var_722.init(e._r09c1c618a6015f._r491f74a2c22d93, r, t),
      (this._r7a37a210417240 = this.var_722.selected),
      (this.initialVariableName = e._r7e8836fc336e43));
  }
  onEditInitialized() {
    this.var_722.onEditInitialized();
  }
  _r74c75e64e8d8be = n((e) => {
    ((this._variableName.variableName.length === 0 ||
      (this._r7a37a210417240 != null &&
        this._rac99bd934fd39d(this._r7a37a210417240) === this._variableName.variableName)) &&
      (this._variableName.variableName = e == null ? "" : this._rac99bd934fd39d(e)),
      (this._r7a37a210417240 = e));
  }, "_r74c75e64e8d8be");
  _rac99bd934fd39d(e) {
    return we.flatVariableName(e);
  }
  get variableNameSection() {
    return this._variableName;
  }
  variableType() {
    return this.var_722.target;
  }
}
