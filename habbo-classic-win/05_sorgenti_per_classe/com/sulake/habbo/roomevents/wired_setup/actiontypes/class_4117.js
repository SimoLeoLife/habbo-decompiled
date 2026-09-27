// Extracted from HabboAirLauncher.deobf.js, line 363947.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4117.as
// Obfuscated name: _i71b39b70f26f65

class extends DefaultActionType {
  static {
    n(this, "class_4117");
  }
  var_2539 = null;
  var_1324 = null;
  get code() {
    return ActionTypeCodes.MOVE_FURNI_TO;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2539 = e.createRadioGroup([
      new RadioButtonParam(0, this.l("movefurni.0")),
      new RadioButtonParam(2, this.l("movefurni.2")),
      new RadioButtonParam(4, this.l("movefurni.4")),
      new RadioButtonParam(6, this.l("movefurni.6")),
    ])),
      (this.var_2539.selected = 0),
      (this.var_1324 = e.createSliderSection(
        "wiredfurni.params.emptytiles",
        "tiles",
        SliderSection.CONVERTER_ECHO,
        1,
        5,
        1,
      )),
      (this.var_1324.value = 1),
      t.addElements(
        e.createSection(this.l("movefurni"), this.var_2539),
        this.var_1324,
      ));
  }
  onEditStart(e) {
    ((this.var_2539.selected = e.intParams[0] ?? 0),
      (this.var_1324.value = e.intParams[1] ?? 1));
  }
  readIntParamsFromForm() {
    return [this.var_2539.selected, this.var_1324.value];
  }
  furniSelectionTitle(e) {
    return `wiredfurni.params.sources.furni.title.mv.${e}`;
  }
}
