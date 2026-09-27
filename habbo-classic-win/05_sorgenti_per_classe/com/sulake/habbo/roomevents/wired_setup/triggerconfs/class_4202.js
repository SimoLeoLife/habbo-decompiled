// Extracted from HabboAirLauncher.deobf.js, line 368962.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/triggerconfs/class_4202.as
// Obfuscated name: _i20ca908d35e955

class extends DefaultTriggerConf {
  static {
    n(this, "class_4202");
  }
  var_2870 = null;
  get code() {
    return TriggerConfCodes.STATE_CHANGE;
  }
  readIntParamsFromForm() {
    return [this.var_2870.selected];
  }
  get hasStateSnapshot() {
    return !0;
  }
  get inputMode() {
    return DefaultTriggerConf.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    this.var_2870 = e.createRadioGroup([
      new RadioButtonParam(1, this.l("state_trigger.1")),
      new RadioButtonParam(0, this.l("state_trigger.0")),
    ]);
    let i = e.createSection(this.l("select_options"), this.var_2870);
    t.addElements(i);
  }
  onEditStart(e) {
    this.var_2870.selected = e.intParams[0];
  }
}
