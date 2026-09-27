// Estratto da HabboAirLauncher.deobf.js, riga 351708.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/applications/ChronoRangeFilterPreset.as
// Nome offuscato: _i6741935e2591cc

class a extends WiredUIPreset {
  static {
    n(this, "ChronoRangeFilterPreset");
  }
  static MODE_SKIP = 0;
  static MODE_EXACT = 1;
  static MODE_RANGE = 2;
  _radioGroup;
  var_1239;
  _re837bede03349e;
  var_1398;
  var_718 = 0;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t, i, s, o, d) {
    ((this.var_718 = i),
      (this.var_1239 = this.var_102.createNumberInput(new NumberInputParam(i, s, o, d))),
      (this._re837bede03349e = this.var_102.createNumberInput(new NumberInputParam(i, s, o, d))),
      (this.var_1398 = this.var_102.createNumberInput(new NumberInputParam(i, s, o, d))));
    let c = this.var_102.createText("-", new Se(Se.MODE_STRETCH)),
      f = this.var_102.createSimpleListView(!1, [this._re837bede03349e, c, this.var_1398], !0),
      l = [
        new RadioButtonParam(a.MODE_SKIP, e),
        new RadioButtonParam(a.MODE_EXACT, r, this.var_1239),
        new RadioButtonParam(a.MODE_RANGE, t, f),
      ];
    ((this._radioGroup = this.var_102.createRadioGroup(l)),
      (this._radioGroup.selected = a.MODE_SKIP));
  }
  applyFilter(e) {
    if (!e.useFilter) {
      ((this._radioGroup.selected = a.MODE_SKIP),
        (this.var_1239.value = this.var_718),
        (this._re837bede03349e.value = this.var_718),
        (this.var_1398.value = this.var_718));
      return;
    }
    if (e.min === e.max) {
      ((this._radioGroup.selected = a.MODE_EXACT),
        (this.var_1239.value = e.min),
        (this._re837bede03349e.value = this.var_718),
        (this.var_1398.value = this.var_718));
      return;
    }
    ((this._radioGroup.selected = a.MODE_RANGE),
      (this._re837bede03349e.value = e.min),
      (this.var_1398.value = e.max),
      (this.var_1239.value = this.var_718));
  }
  _r59be397a47c1d2(e) {
    return this._radioGroup.selected === a.MODE_SKIP
      ? new ChronoFieldRangeFilter(e, !1, this.var_718, this.var_718, this.var_718)
      : this._radioGroup.selected === a.MODE_EXACT
        ? new ChronoFieldRangeFilter(e, !0, this.var_1239.value, this.var_1239.value, this.var_718)
        : new ChronoFieldRangeFilter(e, !0, this._re837bede03349e.value, this.var_1398.value, this.var_718);
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), this._radioGroup.resizeToWidth(e));
  }
  get window() {
    return this._radioGroup.window;
  }
  get childPresets() {
    return [this._radioGroup];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      (this._radioGroup = null),
      (this.var_1239 = null),
      (this._re837bede03349e = null),
      (this.var_1398 = null));
  }
}
