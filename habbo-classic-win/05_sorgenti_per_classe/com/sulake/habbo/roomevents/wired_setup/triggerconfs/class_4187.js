// Extracted from HabboAirLauncher.deobf.js, line 369007.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/triggerconfs/class_4187.as
// Obfuscated name: _i9442aa28bcb737

class extends DefaultTriggerConf {
  static {
    n(this, "class_4187");
  }
  get code() {
    return TriggerConfCodes.TRANSACTION_COMPLETED;
  }
  get inputMode() {
    return DefaultTriggerConf.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = e.createUsageInfoSection("${wiredfurni.params.transaction_complete.usage_info}");
    t.addElements(i);
  }
}
