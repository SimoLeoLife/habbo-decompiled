// Extracted from HabboAirLauncher.deobf.js, line 145293.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/SessionDataPreferencesEvent.as
// Obfuscated name: _i0ffb155911d958

class a extends M {
  static {
    n(this, "SessionDataPreferencesEvent");
  }
  static const_72 = "APUE_UPDATED";
  var_810;
  constructor(e, r = !1, t = !1) {
    (super(a.const_72, r, t), (this.var_810 = e));
  }
  get uiFlags() {
    return this.var_810;
  }
}
