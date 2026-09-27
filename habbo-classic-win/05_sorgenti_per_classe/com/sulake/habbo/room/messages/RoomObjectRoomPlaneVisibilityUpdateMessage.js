// Extracted from HabboAirLauncher.deobf.js, line 181686.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectRoomPlaneVisibilityUpdateMessage.as
// Obfuscated name: _i6bcdd287114f73

class extends RoomObjectUpdateMessage {
  constructor(r, t) {
    super(null, null);
    this._type = r;
    this.var_679 = t;
  }
  static {
    n(this, "RoomObjectRoomPlaneVisibilityUpdateMessage");
  }
  static const_253 = "RORPVUM_WALL_VISIBILITY";
  static const_1294 = "RORPVUM_FLOOR_VISIBILITY";
  get type() {
    return this._type;
  }
  get visible() {
    return this.var_679;
  }
}
