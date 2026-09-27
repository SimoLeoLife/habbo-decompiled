// Extracted from HabboAirLauncher.deobf.js, line 353487.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/presets/VariableFxAdvancedRangePreset.as
// Obfuscated name: _i7f7037a2211d9f

class extends WiredUIPreset {
  static {
    n(this, "VariableFxAdvancedRangePreset");
  }
  var_263;
  _state;
  _variables;
  var_967;
  var_2878;
  _overrideMinPreset;
  _overrideMaxPreset;
  var_603 = -2147483648;
  _re7a03a855dfd32(e) {
    ((this.var_263 = e),
      (this._overrideMinPreset = this.var_102._r3d3cc43bf190fd(
        tx.const_88,
        this._r327108af3d307a,
      )),
      (this._overrideMaxPreset = this.var_102._r3d3cc43bf190fd(
        tx.MAXIMUM,
        this._r327108af3d307a,
      )),
      (this.var_2878 = this.var_102.createSimpleListView(!0, [
        this._overrideMinPreset,
        this._overrideMaxPreset,
      ])),
      (this.var_2878.spacing = this.var_40._r249f7dc0054eba),
      (this.var_967 = this.var_102.createSection(
        "${wiredfurni.params.variablefx.advanced.range}",
        this.var_2878,
        Hr.COLLAPSED,
      )));
  }
  init(e, r) {
    ((this._state = e), (this._variables = r), this.refreshForSourceType(e));
  }
  applyToState(e, r = !1) {
    this.visible &&
      (this._overrideMinPreset.applyToState(e, r), this._overrideMaxPreset.applyToState(e, r));
  }
  refreshForSourceType(e) {
    let r = this.visible,
      t = this.var_603;
    return (
      (this.var_603 = e.sourceType),
      (this.visible = VariableFxEditorMetadata._r2c86baf9826707(e.categoryId)),
      this.visible
        ? (this._r34bdb5b5f3c551(e), r !== this.visible || t !== this.var_603)
        : r !== this.visible
    );
  }
  _r34bdb5b5f3c551(e) {
    (this._overrideMinPreset.init(this._variables, e),
      this._overrideMaxPreset.init(this._variables, e));
  }
  _r327108af3d307a = n(() => {
    (this.applyToState(this._state),
      this._state.sanitize(),
      this.var_263._r58c377c82ec4b6(this._state, !1));
  }, "_r327108af3d307a");
  get window() {
    return this.var_967.window;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), this.var_967.resizeToWidth(e));
  }
  get childPresets() {
    return [this.var_967];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      (this.var_263 = null),
      (this._state = null),
      (this._variables = null),
      (this.var_967 = null),
      (this.var_2878 = null),
      (this._overrideMinPreset = null),
      (this._overrideMaxPreset = null));
  }
}
