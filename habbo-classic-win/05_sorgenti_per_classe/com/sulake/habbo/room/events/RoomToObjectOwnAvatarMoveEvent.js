// Extracted from HabboAirLauncher.deobf.js, line 181058.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomToObjectOwnAvatarMoveEvent.as
// Obfuscated name: _i6cb568c242cccb

class extends RoomToObjectEvent {
  constructor(r, t, i = !1, s = !1) {
    super(r, i, s);
    this.var_349 = t;
  }
  static {
    n(this, "RoomToObjectOwnAvatarMoveEvent");
  }
  static MOVE_TO = "ROAME_MOVE_TO";
  get targetLoc() {
    return this.var_349;
  }
}
