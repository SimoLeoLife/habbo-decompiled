// Estratto da HabboAirLauncher.deobf.js, riga 180781.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomObjectFloorHoleEvent.as
// Nome offuscato: _i90916ccb5add94

class extends RoomObjectEvent {
  static {
    n(this, "RoomObjectFloorHoleEvent");
  }
  static ADD_HOLE = "ROFHO_ADD_HOLE";
  static REMOVE_HOLE = "ROFHO_REMOVE_HOLE";
  constructor(e, r, t = !1, i = !1) {
    super(e, r, t, i);
  }
}
