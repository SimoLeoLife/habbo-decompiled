// Estratto da HabboAirLauncher.deobf.js, riga 363663.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_3917.as
// Nome offuscato: _ifc2cd1b3236755

class a extends DefaultActionType {
  static {
    n(this, "class_3917");
  }
  _picker = null;
  _rac18c38a23524f = null;
  var_390 = null;
  _section1 = null;
  _section2 = null;
  _variableTarget = 0;
  get code() {
    return ActionTypeCodes.GIVE_VARIABLE;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = new SourceTypeSelectorParam(this.mergedSourceOptions(0), this.createSourceTypeListener(0));
    ((this._picker = e.createVariablePicker(a.variableSelectionFilter, this._r74c75e64e8d8be)),
      (this._rac18c38a23524f = e._r57e9c197ec2941(
        new CheckboxOptionParam(this.l("variables.value_settings.override_existing")),
      )));
    let s = e.createSimpleListView(!0, [this._picker, this._rac18c38a23524f]);
    ((this._section1 = e.createSection(this.l("variables.variable_selection"), s, new Hr(i))),
      (this.var_390 = e.createNamedNumberInput(
        new NumberInputParam(0, -2147483648, 2147483647),
        this.l("variables.value_settings.initial_value"),
      )),
      (this._section2 = e.createSection(this.l("variables.value_settings"), this.var_390)),
      t.addElements(this._section1, this._section2));
  }
  onEditStart(e) {
    let r = e._r1385185994d461[0] ?? WiredVariable.var_160;
    this._variableTarget = e.intParams[0] ?? 0;
    let t = e.intParams[2] ?? 0,
      i = (e.intParams[3] ?? 0) !== 0;
    this._picker.init(e._r09c1c618a6015f._r491f74a2c22d93, r, this._variableTarget);
    let s = this._picker.selected;
    ((s != null && s.canWriteValue) || (t = 0),
      this._r74c75e64e8d8be(s),
      (this._rac18c38a23524f.selected = i),
      (this.var_390.value = t));
  }
  onEditInitialized() {
    this._section1.sourceType().select(this._variableTarget);
  }
  readIntParamsFromForm() {
    let e = [];
    return (
      e.push(this._variableTarget),
      we._r42a38bf88649b5(e, this.var_390.value),
      e.push(this._rac18c38a23524f.selected ? 1 : 0),
      e
    );
  }
  _r4ac8c24e31ca7e() {
    return [this._picker.finalizeSelection];
  }
  mergedSelectionTitle(e) {
    return "wiredfurni.params.sources.merged.title.variables_destination";
  }
  mergedSelections() {
    return [[0, 0]];
  }
  setMergedType(e, r) {
    ((this._variableTarget = r), (this._picker.variableTarget = this._variableTarget));
  }
  _r0f18641a2be1d6(e) {
    return [VariableExtraSourceTypes.CONTEXT_SOURCE];
  }
  _r0b74b92fc06f4d(e) {
    return !0;
  }
  getMergedType(e) {
    return this._variableTarget;
  }
  advancedAlwaysVisible() {
    return !0;
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
  static variableSelectionFilter(e) {
    return e.canCreateAndDelete;
  }
  _r74c75e64e8d8be = n((e) => {
    this._section2.disabled = e == null || !e.hasValue;
  }, "_r74c75e64e8d8be");
}
