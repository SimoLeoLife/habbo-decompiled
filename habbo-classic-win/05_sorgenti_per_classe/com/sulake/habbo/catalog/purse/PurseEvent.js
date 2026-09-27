// Estratto da HabboAirLauncher.deobf.js, riga 144351.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/purse/PurseEvent.as
// Nome offuscato: _ie216553b705598

class a extends M {
  static {
    n(this, "PurseEvent");
  }
  static ACTIVITY_POINT_BALANCE = "catalog_purse_activity_point_balance";
  static CREDIT_BALANCE = "catalog_purse_credit_balance";
  static const_1091 = "catalog_purse_emerald_balance";
  static SILVER_BALANCE = "catalog_purse_silver_balance";
  var_4143;
  var_2772;
  constructor(e, r, t, i = !1, s = !1) {
    (super(e, i, s), (this.var_4143 = r), (this.var_2772 = t));
  }
  get balance() {
    return this.var_4143;
  }
  get activityPointType() {
    return this.var_2772;
  }
  clone() {
    return new a(this.type, this.var_4143, this.var_2772, this.bubbles, this.cancelable);
  }
}
