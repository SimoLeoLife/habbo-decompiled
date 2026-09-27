// Estratto da HabboAirLauncher.deobf.js, riga 365107.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_3934.as
// Nome offuscato: _i340ebb386b4421

class extends DefaultActionType {
  static {
    n(this, "class_3934");
  }
  toggleMode = null;
  get code() {
    return ActionTypeCodes.TOGGLE_FURNI_STATE;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = [
        new RadioButtonParam(0, this.loc("wiredfurni.params.toggletype.0")),
        new RadioButtonParam(1, this.loc("wiredfurni.params.toggletype.1")),
      ],
      s = e.createRadioGroup(i),
      o = e.createSection(this.loc("wiredfurni.params.toggletype_selection"), s);
    (t.addElements(o), (this.toggleMode = s));
  }
  onEditStart(e) {
    this.toggleMode.selected = e.intParams[0] ?? 0;
  }
  readIntParamsFromForm() {
    return [this.toggleMode.selected];
  }
}
