// Estratto da HabboAirLauncher.deobf.js, riga 70335.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomEngineEvent.as
// Nome offuscato: _i32f1de10fde20d

class extends M {
  constructor(r, t, i = !1, s = !1) {
    super(r, i, s);
    this.var_2440 = t;
  }
  static {
    n(this, "RoomEngineEvent");
  }
  static ROOM_ENGINE_INITIALIZED = "REE_ENGINE_INITIALIZED";
  static ROOM_INITIALIZED = "REE_INITIALIZED";
  static ROOM_DISPOSED = "REE_DISPOSED";
  static ROOM_ENGINE_GAME_MODE = "REE_GAME_MODE";
  static ROOM_ENGINE_NORMAL_MODE = "REE_NORMAL_MODE";
  static ROOM_OBJECTS_INITIALIZED = "REE_OBJECTS_INITIALIZED";
  static ROOM_ZOOMED = "REE_ROOM_ZOOMED";
  static ROOM_ENTRANCE_AFTER_SPECTATE = "REE_ENTRANCE_AFTER_SPECTATE";
  get roomId() {
    return this.var_2440;
  }
}
