// Estratto da HabboAirLauncher.deobf.js, riga 70355.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomEngineObjectEvent.as
// Nome offuscato: _i2af948c5435c09

class extends RoomEngineEvent {
  constructor(r, t, i, s, o = !1, d = !1) {
    super(r, t, o, d);
    this.var_344 = i;
    this.var_163 = s;
  }
  static {
    n(this, "RoomEngineObjectEvent");
  }
  static SELECTED = "REOE_SELECTED";
  static DESELECTED = "REOE_DESELECTED";
  static ADDED = "REOE_ADDED";
  static REMOVED = "REOE_REMOVED";
  static const_72 = "REOE_UPDATED";
  static PLACED = "REOE_PLACED";
  static PLACED_ON_USER = "REOE_PLACED_ON_USER";
  static CONTENT_UPDATED = "REOE_CONTENT_UPDATED";
  static REQUEST_MOVE = "REOE_REQUEST_MOVE";
  static REQUEST_ROTATE = "REOE_REQUEST_ROTATE";
  static REQUEST_PICKUP = "REOE_REQUEST_PICKUP";
  static MOUSE_ENTER = "REOE_MOUSE_ENTER";
  static MOUSE_LEAVE = "REOE_MOUSE_LEAVE";
  get objectId() {
    return this.var_344;
  }
  get category() {
    return this.var_163;
  }
}
