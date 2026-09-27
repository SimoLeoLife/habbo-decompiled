// Estratto da HabboAirLauncher.deobf.js, riga 365237.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/chests/class_4128.as
// Nome offuscato: _i06f32674010b45

class a extends DefaultActionType {
  static {
    n(this, "class_4128");
  }
  static MODE_AMOUNT = 0;
  static MODE_ALL = 1;
  var_5678 = null;
  var_506 = null;
  var_4473 = null;
  _rewardingModeRadioGroup = null;
  var_3350 = null;
  _showByDefault = null;
  readIntParamsFromForm() {
    let e = [];
    return (
      e.push(this._rewardingModeRadioGroup.selected),
      e.push(this.var_506.numberValue),
      e.push(this.var_506.option),
      e.push(this.var_506.target),
      e.push(this._showByDefault.get(0).selected ? 1 : 0),
      e
    );
  }
  _r4ac8c24e31ca7e() {
    return [this.var_506.finalizeSelection];
  }
  readStringParamFromForm() {
    return this.var_3350.text;
  }
  onEditStart(e) {
    let r = e.intParams,
      t = e._r1385185994d461[0] ?? WiredVariable.var_160,
      i = r[0] ?? 0;
    this._rewardingModeRadioGroup.selected = i;
    let s = r[1] ?? 0,
      o = r[2] ?? 0,
      d = r[3] ?? 0;
    (i === a.MODE_AMOUNT
      ? o === 0
        ? (t = WiredVariable.var_160)
        : (s = 1)
      : ((t = WiredVariable.var_160), (s = 1)),
      (this.var_506.disabled = i === a.MODE_ALL),
      this.var_506.init(e._r09c1c618a6015f._r491f74a2c22d93, t, d, o, s),
      (this._showByDefault.get(0).selected = e.getBoolean(4)),
      (this.var_3350.text = e._r7e8836fc336e43));
  }
  get _r69c4aa02799b1c() {
    return this._rewardingModeRadioGroup.selected;
  }
  onEditInitialized() {
    this.var_506.onEditInitialized();
  }
  isInputSourceDisabled(e, r) {
    return r === Ve.MERGED_SOURCE && e === 0
      ? this.var_506._r0fd1b66bcbf656() || this.var_506.disabled
      : !1;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = [new RadioButtonParam(0, this.l("rewarding_mode.0")), new RadioButtonParam(1, this.l("rewarding_mode.1"))];
    ((this._rewardingModeRadioGroup = e.createRadioGroup(i, this.onModeChange)),
      (this.var_5678 = e.createSection(this.l("rewarding_mode"), this._rewardingModeRadioGroup)),
      (this.var_506 = e.createValueOrVariableSection(
        0,
        this.mergedSourceOptions(0),
        this.l("amount_to_give"),
        1,
        2147483647,
      )),
      (this.var_3350 = e._r1cb85c1e1927d4(
        new TextAreaParam(45, -1, 3, -1, 200, "", "${wiredfurni.reward_contract.reward_popup.text.tooltip}"),
      )),
      (this._showByDefault = e.createCheckboxGroup([
        new CheckboxOptionParam("${wiredfurni.reward_contract.reward_popup.show_by_default}"),
      ])));
    let s = e.createSimpleListView(!0, [this.var_3350, this._showByDefault]);
    ((this.var_4473 = e.createSection("${wiredfurni.reward_contract.reward_popup}", s)),
      this.finalizeBuilding(t));
  }
  finalizeBuilding(e) {
    e.addElements(this.var_5678, this.var_506, this.var_4473);
  }
  onModeChange = n((e) => {
    ((this.var_506.disabled = e === a.MODE_ALL),
      this._r41f5cc7d3516ce.presetManager._ra0bf1c6a404ceb(Ve.MERGED_SOURCE, 0));
  }, "onModeChange");
  mergedSelectionTitle(e) {
    return "wiredfurni.params.sources.merged.title.variables_reference";
  }
  furniSelectionTitle(e) {
    return "wiredfurni.params.sources.furni.title.chests";
  }
  userSelectionTitle(e) {
    return "wiredfurni.params.sources.users.title.reward_user";
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
  mergedSelections() {
    return [[1, 1]];
  }
  setMergedType(e, r) {
    this.var_506.target = r;
  }
  getMergedType(e) {
    return this.var_506.target;
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
}
