// Extracted from HabboAirLauncher.deobf.js, line 181785.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectVariableFxStatusRemoveMessage.as
// Obfuscated name: _i8cf2bb16e51768

class extends RoomObjectUpdateMessage {
  constructor(r, t) {
    super(null, null);
    this.var_3623 = r;
    this._variableId = t;
  }
  static {
    n(this, "RoomObjectVariableFxStatusRemoveMessage");
  }
  get configId() {
    return this.var_3623;
  }
  get variableId() {
    return this._variableId;
  }
}
