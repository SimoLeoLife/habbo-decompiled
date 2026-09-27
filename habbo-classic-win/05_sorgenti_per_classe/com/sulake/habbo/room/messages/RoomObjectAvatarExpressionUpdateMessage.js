// Estratto da HabboAirLauncher.deobf.js, riga 181171.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectAvatarExpressionUpdateMessage.as
// Nome offuscato: _i9b67a9462a7a2a

class extends RoomObjectUpdateStateMessage {
  constructor(r = -1) {
    super();
    this.var_3211 = r;
  }
  static {
    n(this, "RoomObjectAvatarExpressionUpdateMessage");
  }
  get expressionType() {
    return this.var_3211;
  }
}
