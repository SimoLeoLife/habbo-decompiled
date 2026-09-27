// Estratto da HabboAirLauncher.deobf.js, riga 181458.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectFurniIconUpdateMessage.as
// Nome offuscato: _ibc591173c99cd0

class extends RoomObjectUpdateMessage {
  constructor(r, t, i, s) {
    super(null, null);
    this._assetName = r;
    this.var_4798 = t;
    this.var_4146 = i;
    this.var_3191 = s;
  }
  static {
    n(this, "RoomObjectFurniIconUpdateMessage");
  }
  static BADGE_LOADED = "ROFIUM_FURNI_ICON_LOADED";
  get assetName() {
    return this._assetName;
  }
  get wallItem() {
    return this.var_4798;
  }
  get typeId() {
    return this.var_4146;
  }
  get extra() {
    return this.var_3191;
  }
}
