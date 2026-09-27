// Estratto da HabboAirLauncher.deobf.js, riga 363049.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_3990.as
// Nome offuscato: _iab518a04d0d979

class a extends DefaultActionType {
  static {
    n(this, "class_3990");
  }
  _picker = null;
  var_1698 = null;
  _section1 = null;
  _section2 = null;
  _section3 = null;
  _variableTarget = 0;
  get code() {
    return ActionTypeCodes.CHANGE_VARIABLE;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = new SourceTypeSelectorParam(this.mergedSourceOptions(0), this.createSourceTypeListener(0));
    ((this._picker = e.createVariablePicker(a.variableSelectionFilter1)),
      (this._section1 = e.createSection(
        this.l("variables.variable_selection"),
        this._picker,
        new Hr(i),
      )),
      (this.var_1698 = e.createDropdown(
        new DropdownParam(
          this.l("variables.operation.tooltip"),
          a.operatorOptions(this._r41f5cc7d3516ce.localization),
          this._r00a96030e55b84,
          this.l("variables.operation.advanced"),
        ),
      )),
      (this._section2 = e.createSection(this.l("variables.operation"), this.var_1698)),
      (this._section3 = e.createValueOrVariableSection(
        1,
        this.mergedSourceOptions(1),
        this.l("variables.reference_value"),
        -2147483648,
        2147483647,
      )),
      t.addElements(this._section1, this._section2, this._section3));
  }
  onEditStart(e) {
    let r = e.intParams,
      t = e._r1385185994d461[0] ?? WiredVariable.var_160,
      i = e._r1385185994d461[1] ?? WiredVariable.var_160;
    this._variableTarget = r[0] ?? 0;
    let s = r[1] ?? 0,
      o = r[2] ?? 0,
      d = r[4] ?? 0,
      c = r[5] ?? 0;
    (this._picker.init(e._r09c1c618a6015f._r491f74a2c22d93, t, this._variableTarget),
      o === 0 ? (i = WiredVariable.var_160) : (d = 0),
      this._section3.init(e._r09c1c618a6015f._r491f74a2c22d93, i, c, o, d),
      (this.var_1698.selectedId = s),
      this._r00a96030e55b84(this.var_1698.selected));
  }
  onEditInitialized() {
    (this._section1.sourceType().select(this._variableTarget),
      this._section3.onEditInitialized());
  }
  readIntParamsFromForm() {
    let e = [];
    return (
      e.push(this._variableTarget),
      e.push(this.var_1698.selectedId),
      e.push(this._ra2d7c29e531450() ? this._section3.option : 0),
      we._r42a38bf88649b5(e, this._section3.numberValue),
      e.push(this._section3.target),
      e
    );
  }
  _r4ac8c24e31ca7e() {
    return [this._picker.finalizeSelection, this._section3.finalizeSelection];
  }
  isInputSourceDisabled(e, r) {
    return r === Ve.MERGED_SOURCE && e === 1
      ? this._section3._r0fd1b66bcbf656() || !this._ra2d7c29e531450()
      : !1;
  }
  mergedSelectionTitle(e) {
    return e === 0
      ? "wiredfurni.params.sources.merged.title.variables_destination"
      : "wiredfurni.params.sources.merged.title.variables_reference";
  }
  mergedSelections() {
    return [
      [0, 0],
      [1, 1],
    ];
  }
  setMergedType(e, r) {
    e === 0
      ? ((this._variableTarget = r), (this._picker.variableTarget = this._variableTarget))
      : (this._section3.target = r);
  }
  getMergedType(e) {
    return e === 0 ? this._variableTarget : this._section3.target;
  }
  _r0f18641a2be1d6(e) {
    return [VariableExtraSourceTypes.GLOBAL_SOURCE, VariableExtraSourceTypes.CONTEXT_SOURCE];
  }
  _r0b74b92fc06f4d(e) {
    return !0;
  }
  advancedAlwaysVisible() {
    return !0;
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
  _ra2d7c29e531450() {
    return (
      this.var_1698.selectedId !== 103 &&
      this.var_1698.selectedId !== 60 &&
      this.var_1698.selectedId !== 110
    );
  }
  _r00a96030e55b84 = n((...e) => {
    ((this._section3.disabled = !this._ra2d7c29e531450()),
      this._r41f5cc7d3516ce.presetManager._ra0bf1c6a404ceb(Ve.MERGED_SOURCE, 1));
  }, "_r00a96030e55b84");
  static operatorOptions(e) {
    let r = [];
    for (let t = 0; t < 7; t += 1) this.pushOption(r, t);
    (this.pushOption(r, 40, !0),
      this.pushOption(r, 41, !0),
      this.pushOption(r, 50, !0),
      this.pushOption(r, 60, !0));
    for (let t = 100; t < 106; t += 1) this.pushOption(r, t, !0);
    (this.pushOption(r, 110, !0),
      this.pushOption(r, 115, !0),
      this.pushOption(r, 116, !0),
      this.pushOption(r, 117, !0),
      this.pushOption(r, 118, !0));
    for (let t = 111; t <= 114; t++) this.pushOption(r, t, !0);
    for (let t = 119; t <= 122; t++) this.pushOption(r, t, !0);
    return r;
  }
  static pushOption(e, r, t = !1) {
    return (e.push(new ExpandableDropdownOption(r, "${wiredfurni.params.variables.operation." + r + "}", t)), e);
  }
  static variableSelectionFilter1(e) {
    return e.canWriteValue;
  }
}
