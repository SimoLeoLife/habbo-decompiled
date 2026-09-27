// Extracted from HabboAirLauncher.deobf.js, line 367531.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/selectors/InArea.as
// Obfuscated name: _i61b4d76134d6d3

class a extends DefaultSelectorType {
  static {
    n(this, "InArea");
  }
  _r59cc4b28e895a2 = null;
  var_1811 = 0;
  var_1980 = 0;
  _width = 0;
  _height = 0;
  var_920 = !1;
  var_3760 = null;
  var_2391 = null;
  var_2888 = null;
  var_4071 = null;
  onInit(e) {
    (super.onInit(e), (this._r59cc4b28e895a2 = e.roomEngine._r607a58da345e94));
  }
  onEditStart(e) {
    (this.var_920 ||
      (this.var_920 =
        this._r59cc4b28e895a2?.activate(this._rb4028484048086, class_3156.const_321) ?? !1),
      (this.var_1811 = e.intParams[0]),
      (this.var_1980 = e.intParams[1]),
      (this._width = e.intParams[2]),
      (this._height = e.intParams[3]),
      this.var_920
        ? (this._r59cc4b28e895a2.setHighlight(
            this.var_1811,
            this.var_1980,
            this._width,
            this._height,
          ),
          a.enableButton(this.var_2888, !0),
          a.enableButton(this.var_4071, !0))
        : (a.enableButton(this.var_2888, !1), a.enableButton(this.var_4071, !1)));
  }
  _r879e385d197fa5() {
    (super._r879e385d197fa5(),
      this.var_920 && (this._r59cc4b28e895a2?.deactivate(), (this.var_920 = !1)));
  }
  readIntParamsFromForm() {
    return [this.var_1811, this.var_1980, this._width, this._height];
  }
  get inputMode() {
    return DefaultSelectorType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = new Se(Se.MODE_MULTILINE);
    i.textColor = r.softTextColor;
    let s = e.createText(this.l("area_selection.info"), i);
    ((this.var_3760 = e.createButton(this.l("area_selection.select"), this.onSelect)),
      (this.var_2391 = e.createButton(this.l("area_selection.clear"), this.onClear)));
    let o = e.createButtonRow([this.var_3760, this.var_2391]),
      d = e.createSection(this.l("area_selection"), e.createSimpleListView(!0, [s, o]));
    (t.addElements(d),
      (this.var_2888 = this.var_3760.window),
      (this.var_4071 = this.var_2391.window));
  }
  onSelect = n(() => {
    (a.enableButton(this.var_2888, !1), this._r59cc4b28e895a2?._r7399110b76ac0e());
  }, "onSelect");
  onClear = n(() => {
    this._r59cc4b28e895a2?.clearHighlight();
  }, "onClear");
  _rb4028484048086 = n((e, r, t, i) => {
    (a.enableButton(this.var_2888, !0),
      (this.var_1811 = e),
      (this.var_1980 = r),
      (this._width = t),
      (this._height = i));
  }, "_rb4028484048086");
  static enableButton(e, r) {
    e != null && (r ? e.enable() : e.disable());
  }
}
