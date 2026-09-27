// Estratto da HabboAirLauncher.deobf.js, riga 181686.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectRoomPlaneVisibilityUpdateMessage.as
// Nome offuscato: _i6bcdd287114f73

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
