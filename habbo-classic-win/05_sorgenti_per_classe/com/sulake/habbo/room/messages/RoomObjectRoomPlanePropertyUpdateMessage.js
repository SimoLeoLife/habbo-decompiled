// Extracted from HabboAirLauncher.deobf.js, line 181668.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectRoomPlanePropertyUpdateMessage.as
// Obfuscated name: _iebad6c0342525d

class extends RoomObjectUpdateMessage {
  constructor(r, t) {
    super(null, null);
    this._type = r;
    this._value = t;
  }
  static {
    n(this, "RoomObjectRoomPlanePropertyUpdateMessage");
  }
  static WALL_THICKNESS = "RORPPUM_WALL_THICKNESS";
  static FLOOR_THICKNESS = "RORPVUM_FLOOR_THICKNESS";
  get type() {
    return this._type;
  }
  get value() {
    return this._value;
  }
}
