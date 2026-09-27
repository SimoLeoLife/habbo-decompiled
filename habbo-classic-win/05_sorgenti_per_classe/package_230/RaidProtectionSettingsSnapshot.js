// Estratto da HabboAirLauncher.deobf.js, riga 127304.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_230/RaidProtectionSettingsSnapshot.as
// Nome offuscato: _i4f4962cdbf6038

class a {
    static {
      n(this, "RaidProtectionSettingsSnapshot");
    }
    constructor(e, r, t, i, s, o, d, c, f, l) {
      ((this.var_2440 = e),
        (this.var_1285 = r),
        (this.var_4232 = t),
        (this.var_3037 = i),
        (this.var_4311 = s),
        (this.var_4187 = o),
        (this.var_4119 = d),
        (this.var_4001 = c),
        (this.var_4685 = f),
        (this.var_4749 = l));
    }
    static {
      ixt(this, "RaidProtectionSettingsSnapshot");
    }
    static _r7adf57d45e5281 = 0;
    static _rad350cb13916ad = 1;
    static SENSITIVITY_HIGH = 2;
    static ACTION_KICK = 0;
    static _r355c5eefd89ad1 = 1;
    static readFromMessage(e) {
      return a.readAfterRoomId(e.readInteger(), e);
    }
    static readAfterRoomId(e, r) {
      return new a(
        e,
        r.readBoolean(),
        r.readInteger(),
        r.readInteger(),
        r.readInteger(),
        r.readBoolean(),
        r.readInteger(),
        r.readInteger(),
        r.readBoolean(),
        r.readInteger(),
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
