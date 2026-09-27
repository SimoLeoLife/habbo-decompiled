// Estratto da HabboAirLauncher.deobf.js, riga 319282.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/trophy/TrophyTheme.as
// Nome offuscato: _ie4eefac8d60107

class a {
  static {
    n(this, "TrophyTheme");
  }
  static GOLD = 0;
  static SILVER = 1;
  static BRONZE = 2;
  static DEFAULT_BACKGROUND_TINT = 16777215;
  static _r3955662c83a70f = ["trophy_bg_gold", "trophy_bg_silver", "trophy_bg_bronze"];
  static _rca989ea402dac0 = [4293707079, 4291411404, 4290279476];
  static normalize(e) {
    return e < a.GOLD || e > a.BRONZE ? a.GOLD : e;
  }
  static _reb9cc699a3afdc(e) {
    return a._r3955662c83a70f[a.normalize(e)] ?? a._r3955662c83a70f[a.GOLD];
  }
  static _r54508071f4d27b(e) {
    return a._rca989ea402dac0[a.normalize(e)] ?? a._rca989ea402dac0[a.GOLD];
  }
}
