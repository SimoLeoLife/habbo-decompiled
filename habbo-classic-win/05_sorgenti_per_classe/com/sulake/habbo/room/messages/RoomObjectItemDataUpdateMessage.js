// Extracted from HabboAirLauncher.deobf.js, line 181512.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectItemDataUpdateMessage.as
// Obfuscated name: _i824d0547164476

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
