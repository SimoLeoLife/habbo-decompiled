// Extracted from HabboAirLauncher.deobf.js, line 253683.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/raidprotection/RaidProtectionSettingsData.as
// Obfuscated name: _ibf551c14125b88

class a {
  constructor(e, r, t, i, s, o, d, c, f, l) {
    this.var_2440 = e;
    this.var_1285 = r;
    this.var_4232 = t;
    this.var_3037 = i;
    this.var_4311 = s;
    this.var_4187 = o;
    this.var_4119 = d;
    this.var_4001 = c;
    this.var_4685 = f;
    this.var_4749 = l;
  }
  static {
    n(this, "RaidProtectionSettingsData");
  }
  static _r7adf57d45e5281 = 0;
  static _rad350cb13916ad = 1;
  static SENSITIVITY_HIGH = 2;
  static ACTION_KICK = 0;
  static _r355c5eefd89ad1 = 1;
  static fromSnapshot(e) {
    return new a(
      e.roomId,
      e.enabled,
      e._rd072b6d8e46ea7,
      e.actionType,
      e._r948f35b43ab81d,
      e.guardEnabled,
      e.guardDurationSeconds,
      e.guardSensitivity,
      e.incidentActive,
      e.lastRaidAtEpochSeconds,
    );
  }
  matchesEditable(e) {
    return (
      e !== null &&
      this.var_1285 === e.enabled &&
      this.var_4232 === e._rd072b6d8e46ea7 &&
      this.var_3037 === e.actionType &&
      this.var_4311 === e._r948f35b43ab81d &&
      this.var_4187 === e.guardEnabled &&
      this.var_4119 === e.guardDurationSeconds &&
      this.var_4001 === e.guardSensitivity
    );
  }
  get roomId() {
    return this.var_2440;
  }
  get enabled() {
    return this.var_1285;
  }
  get _rd072b6d8e46ea7() {
    return this.var_4232;
  }
  get actionType() {
    return this.var_3037;
  }
  get _r948f35b43ab81d() {
    return this.var_4311;
  }
  get guardEnabled() {
    return this.var_4187;
  }
  get guardDurationSeconds() {
    return this.var_4119;
  }
  get guardSensitivity() {
    return this.var_4001;
  }
  get incidentActive() {
    return this.var_4685;
  }
  get lastRaidAtEpochSeconds() {
    return this.var_4749;
  }
}
