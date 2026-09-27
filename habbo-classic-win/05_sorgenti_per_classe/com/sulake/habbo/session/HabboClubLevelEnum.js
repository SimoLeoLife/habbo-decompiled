// Estratto da HabboAirLauncher.deobf.js, riga 145172.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/HabboClubLevelEnum.as
// Nome offuscato: _id7a65d24d806e0

class a {
  static {
    n(this, "HabboClubLevelEnum");
  }
  static CLUB = 1;
  static NO_CLUB = 0;
  static VIP = 2;
  static HasClub(e) {
    return e >= a.CLUB;
  }
  static HasVip(e) {
    return e >= a.CLUB;
  }
}
