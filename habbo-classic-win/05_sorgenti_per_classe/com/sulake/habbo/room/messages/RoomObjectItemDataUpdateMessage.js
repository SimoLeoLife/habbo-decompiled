// Estratto da HabboAirLauncher.deobf.js, riga 181512.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectItemDataUpdateMessage.as
// Nome offuscato: _i824d0547164476

class extends RoomObjectUpdateMessage {
  constructor(r) {
    super(null, null);
    this.var_2025 = r;
  }
  static {
    n(this, "RoomObjectItemDataUpdateMessage");
  }
  get itemData() {
    return this.var_2025;
  }
}
