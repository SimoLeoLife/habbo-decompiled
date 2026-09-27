// Estratto da HabboAirLauncher.deobf.js, riga 363573.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/GiveScore.as
// Nome offuscato: _ia6316d6c2148bd

class a extends DefaultActionType {
  static {
    n(this, "GiveScore");
  }
  static var_5931 = 10;
  static var_2977 = a.var_5931 + 1;
  var_3904 = null;
  var_2360 = null;
  var_2960 = null;
  get code() {
    return ActionTypeCodes.GIVE_SCORE;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3904 = e.createSliderSection(
      "wiredfurni.params.setpoints2",
      "",
      SliderSection.CONVERTER_ECHO,
      1,
      1e3,
      1,
    )),
      (this.var_2360 = e.createSliderSection(
        "wiredfurni.params.settimesingame",
        "times",
        new _ia221c060ea16cd(a.var_2977),
        1,
        a.var_2977,
        1,
        !1,
      )),
      (this.var_2960 = e.createRadioGroup([
        new RadioButtonParam(0, this.l("points_operation.0")),
        new RadioButtonParam(1, this.l("points_operation.1")),
      ])),
      t.addElements(
        this.var_3904,
        this.var_2360,
        e.createSection(this.l("points_operation"), this.var_2960),
      ));
  }
  onEditStart(e) {
    let r = e.intParams[0] ?? 0,
      t = e.intParams[1] ?? 0,
      i = 0;
    (r < 0 && ((r = -r), (i = 1)),
      (this.var_2360.visible = t !== 0),
      (this.var_2960.selected = i),
      (this.var_3904.value = r),
      (this.var_2360.value = t === 0 ? a.var_2977 : t));
  }
  readIntParamsFromForm() {
    let e = this.var_3904.value;
    this.var_2960.selected === 1 && (e = -e);
    let r = this.var_2360.value === a.var_2977 ? 0 : this.var_2360.value;
    return [e, r];
  }
}
