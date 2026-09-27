// Estratto da HabboAirLauncher.deobf.js, riga 159021.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/enum/RoomTradingLevelEnum.as
// Nome offuscato: _ifce84d7444f35e

class a {
  static {
    n(this, "RoomTradingLevelEnum");
  }
  static FREE_TRADING = 2;
  static NO_TRADING = 0;
  static ROOM_CONTROLLER_REQUIRED = 1;
  static getLocalizationKey(e) {
    switch (e) {
      case a.FREE_TRADING:
        return "${trading.mode.free}";
      case a.ROOM_CONTROLLER_REQUIRED:
        return "${trading.mode.controller}";
      case a.NO_TRADING:
        return "${trading.mode.not.allowed}";
      default:
        return "";
    }
  }
}
