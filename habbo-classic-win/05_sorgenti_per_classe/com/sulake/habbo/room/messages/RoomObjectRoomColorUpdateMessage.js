// Extracted from HabboAirLauncher.deobf.js, line 181571.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectRoomColorUpdateMessage.as
// Obfuscated name: _ib36abe10a75890

class extends RoomObjectUpdateMessage {
  constructor(r, t, i, s) {
    super(null, null);
    this._type = r;
    this._color = t;
    this.var_1803 = i;
    this.var_4440 = s;
  }
  static {
    n(this, "RoomObjectRoomColorUpdateMessage");
  }
  static BACKGROUND_COLOR = "RORCUM_BACKGROUND_COLOR";
  get type() {
    return this._type;
  }
  get color() {
    return this._color;
  }
  get light() {
    return this.var_1803;
  }
  get bgOnly() {
    return this.var_4440;
  }
}
