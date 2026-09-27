// Estratto da HabboAirLauncher.deobf.js, riga 160986.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetRoomEngineUpdateEvent.as
// Nome offuscato: _i19b2d18c98922e

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i = !1, s = !1) {
    super(r, i, s);
    this.roomId = t;
  }
  static {
    n(this, "RoomWidgetRoomEngineUpdateEvent");
  }
  static GAME_MODE = "RWREUE_GAME_MODE";
  static NORMAL_MODE = "RWREUE_NORMAL_MODE";
}
