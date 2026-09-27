// Estratto da HabboAirLauncher.deobf.js, riga 181785.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectVariableFxStatusRemoveMessage.as
// Nome offuscato: _i8cf2bb16e51768

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
