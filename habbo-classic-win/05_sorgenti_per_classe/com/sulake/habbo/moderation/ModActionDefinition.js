// Estratto da HabboAirLauncher.deobf.js, riga 247522.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/ModActionDefinition.as
// Nome offuscato: _i646bad3c10dda5

class {
  constructor(e, r, t, i, s) {
    this.var_4801 = e;
    this._name = r;
    this.var_3037 = t;
    this.var_4865 = i;
    this._actionLengthHours = s;
  }
  static {
    n(this, "ModActionDefinition");
  }
  static ALERT = 1;
  static MUTE = 2;
  static BAN = 3;
  static KICK = 4;
  static TRADING_LOCK = 5;
  static MESSAGE = 6;
  get _r2d360965d7f1d3() {
    return this.var_4801;
  }
  get name() {
    return this._name;
  }
  get actionType() {
    return this.var_3037;
  }
  get _r137d5aaa36d7c8() {
    return this.var_4865;
  }
  get _r34a906c358e362() {
    return this._actionLengthHours;
  }
}
