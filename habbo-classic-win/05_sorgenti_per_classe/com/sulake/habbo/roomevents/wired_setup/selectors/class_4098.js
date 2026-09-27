// Extracted from HabboAirLauncher.deobf.js, line 368107.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/selectors/class_4098.as
// Obfuscated name: _icb38d111d0ff62

class extends DefaultSelectorType {
  static {
    n(this, "class_4098");
  }
  var_2960 = null;
  var_3660 = null;
  var_2795 = null;
  get code() {
    return SelectorCodes.REMOTE_SELECTOR;
  }
  get inputMode() {
    return DefaultSelectorType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    this.var_2960 = e.createRadioGroup([
      new RadioButtonParam(0, this.l("remote_selection.type.0")),
      new RadioButtonParam(1, this.l("remote_selection.type.1")),
    ]);
    let i = e.createSection(this.l("remote_selection.type"), this.var_2960);
    ((this.var_2795 = e.createNumberInput(new NumberInputParam(0, 0, 2147483647, 40, 0, !1))),
      (this.var_3660 = e.createRadioGroup([
        new RadioButtonParam(0, this.l("remote_selection.filter.0")),
        new RadioButtonParam(1, this.l("remote_selection.filter.1"), this.var_2795),
      ])));
    let s = e.createSection(this.l("remote_selection.filter"), this.var_3660);
    t.addElements(i, s);
  }
  onEditStart(e) {
    this.var_2960.selected = e.intParams[0];
    let r = e.intParams[1];
    ((this.var_3660.selected = r > 0 ? 1 : 0), (this.var_2795.value = r));
  }
  readIntParamsFromForm() {
    let e = this.var_3660.selected === 1 ? this.var_2795.value : 0;
    return [this.var_2960.selected, e];
  }
}
