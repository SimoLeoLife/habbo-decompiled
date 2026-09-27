// Extracted from HabboAirLauncher.deobf.js, line 181634.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectRoomMaskUpdateMessage.as
// Obfuscated name: _ib431640e8dfe73

class a extends RoomObjectUpdateMessage {
  constructor(r, t, i = null, s = null, o = a.MASK_CATEGORY_WINDOW) {
    super(null, null);
    this._type = r;
    this.var_5528 = t;
    this.var_5366 = i;
    this.var_5354 = o;
    this.Vector3d = s != null ? new k(s.x, s.y, s.z) : null;
  }
  static {
    n(this, "RoomObjectRoomMaskUpdateMessage");
  }
  static ADD_MASK = "RORMUM_ADD_MASK";
  static REMOVE_MASK = "RORMUM_REMOVE_MASK";
  static MASK_TYPE_DOOR = "door";
  static MASK_CATEGORY_WINDOW = "window";
  static MASK_CATEGORY_HOLE = "hole";
  Vector3d;
  get type() {
    return this._type;
  }
  get _r0c058391653c77() {
    return this.var_5528;
  }
  get maskType() {
    return this.var_5366;
  }
  get _rda96ad60b60561() {
    return this.Vector3d;
  }
  get _rfc4ac0d3e6fa60() {
    return this.var_5354;
  }
}
