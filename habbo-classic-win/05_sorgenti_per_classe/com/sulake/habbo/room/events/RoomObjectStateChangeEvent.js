// Estratto da HabboAirLauncher.deobf.js, riga 180934.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomObjectStateChangeEvent.as
// Nome offuscato: _i937d60b3d579a1

class extends RoomObjectEvent {
  constructor(r, t, i = 0, s = !1, o = !1) {
    super(r, t, s, o);
    this.var_45 = i;
  }
  static {
    n(this, "RoomObjectStateChangeEvent");
  }
  static ROOM_OBJECT_STATE_CHANGE = "ROSCE_STATE_CHANGE";
  static ROOM_OBJECT_STATE_RANDOM = "ROSCE_STATE_RANDOM";
  get param() {
    return this.var_45;
  }
}
