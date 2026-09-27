// Extracted from HabboAirLauncher.deobf.js, line 181704.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectRoomUpdateMessage.as
// Obfuscated name: _if1f766e1bfa776

class extends RoomObjectUpdateMessage {
  constructor(r, t) {
    super(null, null);
    this._type = r;
    this._value = t;
  }
  static {
    n(this, "RoomObjectRoomUpdateMessage");
  }
  static ROOM_WALL_UPDATE = "RORUM_ROOM_WALL_UPDATE";
  static ROOM_FLOOR_UPDATE = "RORUM_ROOM_FLOOR_UPDATE";
  static ROOM_LANDSCAPE_UPDATE = "RORUM_ROOM_LANDSCAPE_UPDATE";
  get type() {
    return this._type;
  }
  get value() {
    return this._value;
  }
}
