// Extracted from HabboAirLauncher.deobf.js, line 365041.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4213.as
// Obfuscated name: _i90f74c7c2e1b79

class extends DefaultActionType {
  static {
    n(this, "class_4213");
  }
  var_3558 = null;
  get code() {
    return ActionTypeCodes.var_5935;
  }
  get hasStateSnapshot() {
    return !0;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = [
      new CheckboxOptionParam(this.loc("wiredfurni.params.condition.state")),
      new CheckboxOptionParam(this.loc("wiredfurni.params.condition.direction")),
      new CheckboxOptionParam(this.loc("wiredfurni.params.condition.position")),
      new CheckboxOptionParam(this.loc("wiredfurni.params.condition.altitude")),
    ];
    this.var_3558 = e.createCheckboxGroup(i);
    let s = e.createSection(this.loc("wiredfurni.params.conditions"), this.var_3558);
    t.addElements(s);
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
