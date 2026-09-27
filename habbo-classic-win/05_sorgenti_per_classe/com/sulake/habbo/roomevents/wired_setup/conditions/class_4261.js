// Estratto da HabboAirLauncher.deobf.js, riga 366807.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_4261.as
// Nome offuscato: _i1f104b58923c7b

class extends DefaultConditionType {
  static {
    n(this, "class_4261");
  }
  var_3558 = null;
  get code() {
    return ConditionCodes.STATES_MATCH;
  }
  get negativeCode() {
    return ConditionCodes.NOT_STATES_MATCH;
  }
  get hasStateSnapshot() {
    return !0;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3558 = e.createCheckboxGroup([
      new CheckboxOptionParam(this.l("condition.state")),
      new CheckboxOptionParam(this.l("condition.direction")),
      new CheckboxOptionParam(this.l("condition.position")),
      new CheckboxOptionParam(this.l("condition.altitude")),
    ])),
      t.addElements(e.createSection(this.l("conditions"), this.var_3558)));
  }
  onEditStart(e) {
    for (let r = 0; r < 4; r += 1) this.var_3558.get(r).selected = e.getBoolean(r);
  }
  readIntParamsFromForm() {
    let e = [];
    for (let r = 0; r < 4; r += 1) e.push(this.var_3558.get(r).selected ? 1 : 0);
    return e;
  }
}
