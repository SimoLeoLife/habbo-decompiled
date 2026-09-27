// Extracted from HabboAirLauncher.deobf.js, line 350694.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/sections/UsageInfoSection.as
// Obfuscated name: _i396f3a2b1cf31c

class extends AbstractSectionPreset {
  static {
    n(this, "UsageInfoSection");
  }
  var_1387;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r = !1, t = null) {
    let i = new Se(Se.MODE_MULTILINE);
    ((i.textColor = this.var_40.softTextColor),
      (this.var_1387 = this.var_102.createText(e, i)),
      t == null && (t = this.l("general_box_info")),
      this.initializeSection(t, this.var_1387, r ? Hr.COLLAPSED : Hr.EXPANDED));
  }
  dispose() {
    this.disposed || (super.dispose(), (this.var_1387 = null));
  }
}
