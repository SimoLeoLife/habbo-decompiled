// Extracted from HabboAirLauncher.deobf.js, line 180861.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomObjectMoveEvent.as
// Obfuscated name: _i5826b7d5df54e0

class extends RoomObjectEvent {
  static {
    n(this, "RoomObjectMoveEvent");
  }
  static const_396 = "ROME_OBJECT_REMOVED";
  static const_1059 = "ROME_POSITION_CHANGED";
  static SLIDE_ANIMATION = "ROME_SLIDE_ANIMATION";
  constructor(e, r, t = !1, i = !1) {
    super(e, r, t, i);
  }
}
