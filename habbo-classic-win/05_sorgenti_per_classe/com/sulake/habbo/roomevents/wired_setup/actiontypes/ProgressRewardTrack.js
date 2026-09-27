// Extracted from HabboAirLauncher.deobf.js, line 364584.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/ProgressRewardTrack.as
// Obfuscated name: _iff55de1e3f8d60

class a extends DefaultActionType {
  static {
    n(this, "ProgressRewardTrack");
  }
  static const_387 = "a-zA-Z0-9_";
  var_3072;
  var_3881;
  _addToExistingScore;
  var_880;
  get code() {
    return ActionTypeCodes.PROGRESS_REWARD_TRACK;
  }
  get inputMode() {
    return So.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3072 = e.createNamedTextInput(
      new it("", 100, null, -1, a.const_387),
      "${wiredfurni.params.reward_track.track_id}",
    )),
      (this.var_3881 = e.createNamedTextInput(
        new it("", 100, null, -1, a.const_387),
        "${wiredfurni.params.reward_track.task_id}",
      )));
    let i = e.createSimpleListView(!0, [this.var_3072, this.var_3881]),
      s = e.createSection("${wiredfurni.params.reward_track.progress.ids}", i);
    this._addToExistingScore = e._r57e9c197ec2941(
      new CheckboxOptionParam("${wiredfurni.params.reward_track.add_to_existing_score}"),
    );
    let o = e.createSection("${wiredfurni.params.reward_track.progress.mode}", this._addToExistingScore);
    ((this.var_880 = e.createValueOrVariableSection(
      0,
      this.mergedSourceOptions(0),
      "${wiredfurni.params.reward_track.score}",
      1,
      2147483647,
    )),
      t.addElements(s, o, this.var_880));
  }
  readIntParamsFromForm() {
    return [
      this._addToExistingScore.selected ? 1 : 0,
      this.var_880.option,
      this.var_880.numberValue,
      this.var_880.target,
    ];
  }
  readStringParamFromForm() {
    return this.var_3072.text + "	" + this.var_3881.text;
  }
  _r4ac8c24e31ca7e() {
    return [this.var_880.finalizeSelection];
  }
  onEditStart(e) {
    ((this.var_3072.text = e.getString(0)),
      (this.var_3881.text = e.getString(1)),
      (this._addToExistingScore.selected = e.getBoolean(0)));
    let r = e._r1385185994d461[0],
      t = e.getInt(1),
      i = e.getInt(2),
      s = e.getInt(3);
    (t === 0 && (r = WiredVariable.var_160),
      this.var_880.init(e._r09c1c618a6015f._r491f74a2c22d93, r, s, t, i));
  }
  onEditInitialized() {
    this.var_880.onEditInitialized();
  }
  mergedSelections() {
    return [[0, 1]];
  }
  mergedSelectionTitle(e) {
    return "wiredfurni.params.sources.merged.title.variables_reference";
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
    return r === Ve.MERGED_SOURCE && this.var_880._r0fd1b66bcbf656();
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
}
