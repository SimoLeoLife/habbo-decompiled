// Extracted from HabboAirLauncher.deobf.js, line 353373.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/presets/VariableFxVariableOverrideRowPreset.as
// Obfuscated name: _ia66007fd54d1d8

class a extends WiredUIPreset {
  static {
    n(this, "VariableFxVariableOverrideRowPreset");
  }
  static const_88 = 0;
  static MAXIMUM = 1;
  _r75842c4ed24070 = 0;
  var_2637 = null;
  var_603 = 0;
  var_1341 = !1;
  _red8c83d52fe982;
  var_1389;
  var_2992;
  var_2878;
  _re7a03a855dfd32(e, r) {
    ((this._r75842c4ed24070 = e),
      (this.var_2637 = r),
      (this.var_603 = Ve.USER_SOURCE),
      (this.var_1389 = this.var_102.createVariablePicker(
        a.variableSelectionFilter,
        this._r1adb7596814949,
      )),
      (this.var_2992 = this.var_102.createSourceTypeSelector(
        new SourceTypeSelectorParam(a._rb309a9a9cd5e85(this.var_603), this, this.var_603),
      )),
      (this.var_2878 = this.var_102.createSimpleListView(
        !1,
        [this.var_1389, this.var_2992],
        !0,
      )),
      (this._red8c83d52fe982 = this.var_102.createCheckboxGroup(
        [new CheckboxOptionParam(a.labelForKind(e), 0, null, this.var_2878)],
        this._r58a8df6de4a51a,
      )));
  }
  init(e, r) {
    ((this.var_1341 = !0),
      (this.var_603 = this._re4cd1e4a06c0f0(r)),
      this.var_1389.init(e, this.variableId(r), this.var_603),
      this.var_2992.reinit(a._rb309a9a9cd5e85(r.sourceType), this.var_603),
      (this._red8c83d52fe982.get(0).selected = this.enabled(r)),
      this._red8c83d52fe982.get(0).var_982(),
      (this.var_1341 = !1));
  }
  applyToState(e, r = !1) {
    this._r75842c4ed24070 === a.const_88
      ? ((e._r16a3bcde5cd330 = this._red8c83d52fe982.get(0).selected),
        (e.overrideMinTarget = this.var_603),
        (e.overrideMinVariableId = this.selectedVariableId(r)))
      : ((e._r8e06fbd9c71180 = this._red8c83d52fe982.get(0).selected),
        (e.overrideMaxTarget = this.var_603),
        (e.overrideMaxVariableId = this.selectedVariableId(r)));
  }
  get _r7402297208347e() {
    return this.var_603;
  }
  set sourceType(e) {
    ((this.var_603 = e),
      (this.var_1389.variableTarget = this.var_603),
      this.notifyChanged());
  }
  selectedVariableId(e) {
    return e ? this.var_1389.finalizeSelection : (this.var_1389.selected?.variableId ?? "");
  }
  _r1adb7596814949 = n((e) => {
    this.notifyChanged();
  }, "_r1adb7596814949");
  _r58a8df6de4a51a = n((e, r) => {
    this.notifyChanged();
  }, "_r58a8df6de4a51a");
  notifyChanged() {
    this.var_1341 || this.var_2637?.();
  }
  enabled(e) {
    return this._r75842c4ed24070 === a.const_88 ? e._r16a3bcde5cd330 : e._r8e06fbd9c71180;
  }
  _re4cd1e4a06c0f0(e) {
    return this._r75842c4ed24070 === a.const_88 ? e.overrideMinTarget : e.overrideMaxTarget;
  }
  variableId(e) {
    return this._r75842c4ed24070 === a.const_88 ? e.overrideMinVariableId : e.overrideMaxVariableId;
  }
  static _rb309a9a9cd5e85(e) {
    return e === Ve.var_64
      ? [Ve.var_64, VariableExtraSourceTypes.GLOBAL_SOURCE]
      : [Ve.USER_SOURCE, VariableExtraSourceTypes.GLOBAL_SOURCE];
  }
  static labelForKind(e) {
    return e === this.const_88
      ? "${wiredfurni.params.variablefx.advanced.override_min}"
      : "${wiredfurni.params.variablefx.advanced.override_max}";
  }
  static variableSelectionFilter(e) {
    return e.hasValue;
  }
  get window() {
    return this._red8c83d52fe982.window;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), this._red8c83d52fe982.resizeToWidth(e));
  }
  get childPresets() {
    return [this._red8c83d52fe982];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      (this.var_2637 = null),
      (this._red8c83d52fe982 = null),
      (this.var_1389 = null),
      (this.var_2992 = null),
      (this.var_2878 = null));
  }
}
