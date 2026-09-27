// Extracted from HabboAirLauncher.deobf.js, line 369022.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/triggerconfs/class_3954.as
// Obfuscated name: _iebf9f597e3f24f

class extends DefaultTriggerConf {
  static {
    n(this, "class_3954");
  }
  get code() {
    return TriggerConfCodes.TRANSACTION_FAILED;
  }
  get inputMode() {
    return DefaultTriggerConf.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = e.createUsageInfoSection("${wiredfurni.params.transaction_failed.usage_info}"),
      s = e.createTextualButtonPreset(this.loc("wiredfurni.view_in_menu"), this.viewInMenuCallback);
    t.addElements(i, s.alignCenter());
  }
  viewInMenuCallback = n(() => {
    this._r41f5cc7d3516ce.context._r6b6c989018eb05(
      "wiredmenu/open/variable_overview/@event.transaction_failed.reason",
    );
  }, "viewInMenuCallback");
}
