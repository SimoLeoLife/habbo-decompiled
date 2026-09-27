// Extracted from HabboAirLauncher.deobf.js, line 226460.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/GuildSettingsData.as
// Obfuscated name: _i6c8daec45d46d8

class a {
  static {
    n(this, "GuildSettingsData");
  }
  static _r0c2f6e840546db = 0;
  static _rb533843460cf8e = 0;
  var_2724 = a._r0c2f6e840546db;
  var_2661 = a._rb533843460cf8e;
  var_2347 = !1;
  constructor(e = null) {
    e != null && ((this.var_2724 = e.guildType), (this.var_2661 = e.guildRightsLevel));
  }
  get guildType() {
    return this.var_2724;
  }
  set guildType(e) {
    (e !== this.var_2724 && (this.var_2347 = !0), (this.var_2724 = e));
  }
  get _r40e0656765dad1() {
    return this.var_2661;
  }
  set _r40e0656765dad1(e) {
    (e !== this.var_2661 && (this.var_2347 = !0), (this.var_2661 = e));
  }
  get _r0ccd2949feccee() {
    return this.var_2347;
  }
  resetModified() {
    this.var_2347 = !1;
  }
}
