// Extracted from HabboAirLauncher.deobf.js, line 181735.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectTileCursorUpdateMessage.as
// Obfuscated name: _iccc71a5346b686

class extends RoomObjectUpdateMessage {
  constructor(r, t, i, s, o = !1) {
    super(r, null);
    this._height = t;
    this.var_679 = i;
    this.var_5513 = s;
    this.var_5245 = o;
  }
  static {
    n(this, "RoomObjectTileCursorUpdateMessage");
  }
  get height() {
    return this._height;
  }
  get visible() {
    return this.var_679;
  }
  get sourceEventId() {
    return this.var_5513;
  }
  get toggleVisibility() {
    return this.var_5245;
  }
}
