// Extracted from HabboAirLauncher.deobf.js, line 181207.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectAvatarFlatControlUpdateMessage.as
// Obfuscated name: _i9f8252a99bd8d0

class extends RoomObjectUpdateStateMessage {
  constructor(r) {
    super();
    this.var_5188 = r;
  }
  static {
    n(this, "RoomObjectAvatarFlatControlUpdateMessage");
  }
  _isAdmin = !1;
  get isAdmin() {
    return this._isAdmin;
  }
  get rawData() {
    return this.var_5188;
  }
}
