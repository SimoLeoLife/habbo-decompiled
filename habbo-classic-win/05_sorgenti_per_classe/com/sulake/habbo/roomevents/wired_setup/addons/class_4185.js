// Estratto da HabboAirLauncher.deobf.js, riga 360810.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/class_4185.as
// Nome offuscato: _i2991b5802708ea

class extends DefaultAddonType {
  static {
    n(this, "class_4185");
  }
  var_3395 = null;
  var_3486 = null;
  get code() {
    return AddonCodes.var_5926;
  }
  readIntParamsFromForm() {
    return [this.var_3486.value, this.var_3395.value];
  }
  onEditStart(e) {
    ((this.var_3486.value = e.intParams[0] ?? 0),
      (this.var_3395.value = e.intParams[1] ?? 0));
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3486 = e.createSliderSection(
      "wiredfurni.params.skipactions",
      "skips",
      SliderSection.CONVERTER_ECHO,
      0,
      100,
      1,
      !1,
    )),
      (this.var_3395 = e.createSliderSection(
        "wiredfurni.params.pickamount",
        "picks",
        SliderSection.CONVERTER_ECHO,
        1,
        100,
        1,
        !1,
      )),
      t.addElements(this.var_3395, this.var_3486));
  }
}
