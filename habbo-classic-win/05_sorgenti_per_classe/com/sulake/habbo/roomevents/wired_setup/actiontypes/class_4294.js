// Estratto da HabboAirLauncher.deobf.js, riga 365075.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4294.as
// Nome offuscato: _i578dcc57c7214f

class extends DefaultActionType {
  static {
    n(this, "class_4294");
  }
  var_4094 = null;
  get code() {
    return ActionTypeCodes.var_5924;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_4094 = e.createCheckboxGroup([new CheckboxOptionParam(this.loc("wiredfurni.params.teleport.options.0"))])),
      t.addElements(
        e.createSection(this.loc("wiredfurni.params.teleport.options"), this.var_4094),
      ));
  }
  onEditStart(e) {
    this.var_4094.get(0).selected = e.getBoolean(0);
  }
  readIntParamsFromForm() {
    return [this.var_4094.get(0).selected ? 1 : 0];
  }
}
