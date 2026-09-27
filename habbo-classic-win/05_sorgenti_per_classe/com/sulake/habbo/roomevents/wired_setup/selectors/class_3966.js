// Estratto da HabboAirLauncher.deobf.js, riga 367876.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/selectors/class_3966.as
// Nome offuscato: _i14f657e1fd9fd9

class extends DefaultSelectorType {
  static {
    n(this, "class_3966");
  }
  var_2960 = null;
  get code() {
    return SelectorCodes.FURNI_ON_FURNI;
  }
  get inputMode() {
    return DefaultSelectorType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2960 = e.createRadioGroup([
      new RadioButtonParam(0, this.l("onfurni.0")),
      new RadioButtonParam(1, this.l("onfurni.1")),
      new RadioButtonParam(2, this.l("onfurni.2")),
      new RadioButtonParam(3, this.l("onfurni.3")),
    ])),
      (this.var_2960.selected = 0));
    let i = e.createSection(this.l("selection_type"), this.var_2960);
    t.addElements(i);
  }
  onEditStart(e) {
    this.var_2960.selected = e.intParams[0];
  }
  readIntParamsFromForm() {
    return [this.var_2960.selected];
  }
}
