// Extracted from HabboAirLauncher.deobf.js, line 354114.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/presets/VariableFxValueRangePreset.as
// Obfuscated name: _i2e872c685ba8fe

class extends WiredUIPreset {
  static {
    n(this, "VariableFxValueRangePreset");
  }
  var_263;
  _state;
  var_1341 = !1;
  var_967;
  var_1897;
  var_1997;
  _re7a03a855dfd32(e) {
    ((this.var_263 = e),
      (this.var_1897 = this.var_102.createNumberInput(
        new NumberInputParam(0, -2147483648, 2147483647, -1),
      )),
      (this.var_1997 = this.var_102.createNumberInput(
        new NumberInputParam(100, -2147483648, 2147483647, -1),
      )),
      (this.var_1897._r53e08e0209a3cd = this._r4ab3eadac6d73c),
      (this.var_1997._r53e08e0209a3cd = this._r4ab3eadac6d73c));
    let r = new Se(Se.MODE_MULTILINE);
    r.textColor = this.var_40.softTextColor;
    let t = this.var_102.createText("${wiredfurni.params.variablefx.value_range.info}", r),
      i = this.var_102.createText("Min:", new Se(Se.MODE_STRETCH, !1));
    i.window.width = 26;
    let s = this.var_102.createText("-", new Se(Se.MODE_STRETCH, !1));
    s.window.width = 8;
    let o = this.var_102.createText("Max:", new Se(Se.MODE_STRETCH, !1));
    o.window.width = 30;
    let d = this.var_102.createSimpleListView(
      !1,
      [i, this.var_1897, s, o, this.var_1997],
      !0,
    );
    this.var_967 = this.var_102.createSection(
      "${wiredfurni.params.variablefx.value_range}",
      this.var_102.createSimpleListView(!0, [t, d]),
    );
  }
  init(e) {
    ((this._state = e), this.refreshForState(e));
  }
  applyToState(e) {
    this.visible &&
      ((e._r528f4963a1a948 = this.var_1897.value),
      (e._r5e470edbfdddac = this.var_1997.value));
  }
  refreshForState(e) {
    ((this.var_1341 = !0),
      (this.visible = VariableFxEditorMetadata._r2c86baf9826707(e.categoryId)),
      (this.var_1897.value = e._r528f4963a1a948),
      (this.var_1997.value = e._r5e470edbfdddac),
      (this.var_1341 = !1));
  }
  _r4ab3eadac6d73c = n((e) => {
    this.var_1341 ||
      (this.applyToState(this._state),
      this._state.sanitize(),
      this.var_263._r58c377c82ec4b6(this._state, !0));
  }, "_r4ab3eadac6d73c");
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
      (this.var_967 = null),
      (this.var_1897 = null),
      (this.var_1997 = null));
  }
}
