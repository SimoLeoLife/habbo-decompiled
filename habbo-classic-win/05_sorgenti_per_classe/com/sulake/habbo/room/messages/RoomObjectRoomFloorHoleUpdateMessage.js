// Extracted from HabboAirLauncher.deobf.js, line 181596.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectRoomFloorHoleUpdateMessage.as
// Obfuscated name: _i2b688d4db8c4e9

class extends RoomObjectUpdateMessage {
  constructor(r, t, i = 0, s = 0, o = 0, d = 0, c = !1) {
    super(null, null);
    this._type = r;
    this._id = t;
    this._x = i;
    this._y = s;
    this._width = o;
    this._height = d;
    this.var_4678 = c;
  }
  static {
    n(this, "RoomObjectRoomFloorHoleUpdateMessage");
  }
  static ADD_HOLE = "RORPFHUM_ADD";
  static REMOVE_HOLE = "RORPFHUM_REMOVE";
  get type() {
    return this._type;
  }
  get id() {
    return this._id;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get invert() {
    return this.var_4678;
  }
}
