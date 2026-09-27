// Extracted from HabboAirLauncher.deobf.js, line 364484.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/ProgressAchievement.as
// Obfuscated name: _if32827a1d27f50

class extends DefaultActionType {
  static {
    n(this, "ProgressAchievement");
  }
  _achievementDropdown = null;
  _rdec61986843cec = null;
  var_880 = null;
  get negativeCode() {
    return ActionTypeCodes.PROGRESS_ACHIEVEMENT;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._achievementDropdown = e.createDropdown(new DropdownParam("${wiredfurni.params.progress_achievement.name}"))),
      (this._rdec61986843cec = e.createRadioGroup([
        new RadioButtonParam(1, "${wiredfurni.params.progress_achievement.mode.1}"),
        new RadioButtonParam(0, "${wiredfurni.params.progress_achievement.mode.0}"),
      ])),
      (this.var_880 = e.createValueOrVariableSection(
        0,
        this.mergedSourceOptions(0),
        "${wiredfurni.params.progress_achievement.score}",
        0,
        2147483647,
      )),
      t.addElements(
        e.createSection("${wiredfurni.params.progress_achievement.name}", this._achievementDropdown),
        e.createSection("${wiredfurni.params.progress_achievement.mode}", this._rdec61986843cec),
        this.var_880,
      ));
  }
  onEditStart(e) {
    (this._r47692a4e4760a3(),
      (this.achievementName = e._r7e8836fc336e43),
      (this._rdec61986843cec.selected = e.getInt(0)),
      this.var_880.init(
        e._r09c1c618a6015f._r491f74a2c22d93,
        e._r1385185994d461[0] ?? "",
        e.getInt(3),
        e.getInt(1),
        e.getInt(2),
      ));
  }
  onEditInitialized() {
    this.var_880.onEditInitialized();
  }
  readIntParamsFromForm() {
    return [
      this._rdec61986843cec.selected,
      this.var_880.option,
      this.var_880.numberValue,
      this.var_880.target,
    ];
  }
  readStringParamFromForm() {
    return this.achievementName;
  }
  _r4ac8c24e31ca7e() {
    return [this.var_880.finalizeSelection];
  }
  mergedSelections() {
    return [[0, 1]];
  }
  setMergedType(e, r) {
    this.var_880.target = r;
  }
  getMergedType(e) {
    return this.var_880.target;
  }
  _r0f18641a2be1d6(e) {
    return [VariableExtraSourceTypes.GLOBAL_SOURCE, VariableExtraSourceTypes.CONTEXT_SOURCE];
  }
  isInputSourceDisabled(e, r) {
    return r === Ve.MERGED_SOURCE ? this.var_880._r0fd1b66bcbf656() : !1;
  }
  _r0b74b92fc06f4d(e) {
    return !0;
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
  _r47692a4e4760a3() {
    let e = [];
    for (let r = 0; r < this._r41f5cc7d3516ce._rfb9b76b95ed910.length; r += 1)
      e.push(new ExpandableDropdownOption(r, this._r41f5cc7d3516ce._rfb9b76b95ed910[r]));
    this._achievementDropdown.reinit(e, -1);
  }
  set achievementName(e) {
    for (let r of this._achievementDropdown._rd875ac05798c2f)
      if (r.dropdownOptions === e) {
        this._achievementDropdown.selectedId = r.id;
        return;
      }
    this._achievementDropdown.selectedId = -1;
  }
  get achievementName() {
    return this._achievementDropdown.selected == null ? "" : this._achievementDropdown.selected.dropdownOptions;
  }
}
