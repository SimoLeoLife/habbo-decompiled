// Extracted from HabboAirLauncher.deobf.js, line 360240.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/class_3959.as
// Obfuscated name: _i35fa8f392ae143

class a extends DefaultAddonType {
  static {
    n(this, "class_3959");
  }
  static var_5253 = 4;
  static _compareTypes = 3;
  var_4948 = null;
  var_3380 = null;
  var_1195 = [];
  get code() {
    return AddonCodes.CONDITION_EVALUATION;
  }
  onEditStart(e) {
    for (let t = 0; t < a._compareTypes; t++) this.var_1195[t].value = 0;
    let r = e.intParams[0] ?? 0;
    if (r === -1) {
      let t = e.intParams[1] ?? 0,
        i = e.intParams[2] ?? 0;
      ((r = a.var_5253 + t),
        t >= 0 && t < this.var_1195.length && (this.var_1195[t].value = i));
    }
    this.var_3380.selected = r;
  }
  readIntParamsFromForm() {
    let e = [],
      r = this.var_3380.selected,
      t = 0,
      i = 0;
    return (
      r >= a.var_5253 &&
        ((t = r - a.var_5253), (i = this.var_1195[t].value), (r = -1)),
      e.push(r),
      e.push(t),
      e.push(i),
      e
    );
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_4948 = e.createUsageInfoSection(this.l("cond_eval.note"))), (this.var_1195 = []));
    for (let s = 0; s < a._compareTypes; s++)
      this.var_1195.push(e.createNumberInput(new NumberInputParam(0, 0, 1e3, 35, 0, !1, !1)));
    this.var_3380 = e.createRadioGroup([
      new RadioButtonParam(0, this.l("eval_mode.0")),
      new RadioButtonParam(1, this.l("eval_mode.1")),
      new RadioButtonParam(2, this.l("eval_mode.2")),
      new RadioButtonParam(3, this.l("eval_mode.3")),
      new RadioButtonParam(4, this.l("eval_mode.cmp.0"), this.var_1195[0]),
      new RadioButtonParam(5, this.l("eval_mode.cmp.1"), this.var_1195[1]),
      new RadioButtonParam(6, this.l("eval_mode.cmp.2"), this.var_1195[2]),
    ]);
    let i = e.createSection(this.l("eval_mode"), this.var_3380);
    t.addElements(this.var_4948, i);
  }
}
