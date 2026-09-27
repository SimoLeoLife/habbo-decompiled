// Extracted from HabboAirLauncher.deobf.js, line 160986.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetRoomEngineUpdateEvent.as
// Obfuscated name: _i19b2d18c98922e

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
