// Extracted from HabboAirLauncher.deobf.js, line 365433.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/chests/class_4135.as
// Obfuscated name: _i2b1dd9ef5e9952

class extends DefaultActionType {
  static {
    n(this, "class_4135");
  }
  _transactionMode = null;
  var_506 = null;
  var_3508 = null;
  var_3181 = null;
  get code() {
    return ActionTypeCodes.INITIATE_TRANSACTION;
  }
  readIntParamsFromForm() {
    return [
      this._transactionMode.selected,
      this.var_506.numberValue,
      this.var_506.option,
      this.var_506.target,
      this.var_3508.get(0).selected ? 1 : 0,
      this.var_3181.value,
    ];
  }
  _r4ac8c24e31ca7e() {
    return [this.var_506.finalizeSelection];
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  onEditStart(e) {
    let r = e._r1385185994d461[0] ?? WiredVariable.var_160,
      t = e.getInt(0);
    this._transactionMode.selected = t;
    let i = e.getInt(1),
      s = e.getInt(2),
      o = e.getInt(3);
    (s === 0 ? (r = WiredVariable.var_160) : (i = 1),
      this.var_506.init(e._r09c1c618a6015f._r491f74a2c22d93, r, o, s, i),
      (this.var_3508.get(0).selected = e.getBoolean(4)),
      (this.var_3181.value = e.getInt(5)),
      this.onModeChange(t));
  }
  buildInputs(e, r, t) {
    this._transactionMode = e.createRadioGroup(
      [
        new RadioButtonParam(0, "${wiredfurni.params.contract.mode.0}"),
        new RadioButtonParam(1, "${wiredfurni.params.contract.mode.1}"),
        new RadioButtonParam(2, "${wiredfurni.params.contract.mode.2}"),
      ],
      this.onModeChange,
    );
    let i = e.createSection("${wiredfurni.params.contract.mode}", this._transactionMode);
    ((this.var_506 = e.createValueOrVariableSection(
      0,
      this.mergedSourceOptions(0),
      "${wiredfurni.params.contract.multiplier_selection}",
      1,
      500,
    )),
      (this.var_3181 = e.createNamedNumberInput(
        new NumberInputParam(300, 30, 3600),
        "${wiredfurni.params.contract.timeout.selection}",
      )));
    let s = new CheckboxOptionParam("${wiredfurni.params.contract.timeout.desc}");
    ((s.extra2 = this.var_3181), (this.var_3508 = e.createCheckboxGroup([s])));
    let o = e.createSection("${wiredfurni.params.contract.timeout}", this.var_3508);
    t.addElements(i, this.var_506, o);
  }
  onEditInitialized() {
    this.var_506.onEditInitialized();
  }
  isInputSourceDisabled(e, r) {
    return r === Ve.MERGED_SOURCE && e === 0 ? this.var_506._r0fd1b66bcbf656() : !1;
  }
  mergedSelectionTitle(e) {
    return "wiredfurni.params.sources.merged.title.variables_reference";
  }
  furniSelectionTitle(e) {
    return e === 0
      ? "wiredfurni.params.sources.furni.title.chests"
      : "wiredfurni.params.sources.furni.title.contracts";
  }
  mergedSelections() {
    return [[2, 1]];
  }
  setMergedType(e, r) {
    this.var_506.target = r;
  }
  getMergedType(e) {
    return this.var_506.target;
  }
  get forceHidePickFurniInstructions() {
    return !0;
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
  onModeChange = n((e) => {
    let r = e === class_4343._rca36b8a1fa6523,
      t = e === class_4343.var_5941;
    ((this.var_506.sectionTitle = r
      ? "${wiredfurni.params.contract.multiplier_selection2}"
      : "${wiredfurni.params.contract.multiplier_selection}"),
      (this.var_506.disabled = t));
  }, "onModeChange");
}
