// Extracted from HabboAirLauncher.deobf.js, line 181483.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectGroupBadgeUpdateMessage.as
// Obfuscated name: _i39fe90566c58b9

class extends RoomObjectUpdateMessage {
  constructor(r, t) {
    super(null, null);
    this.var_595 = r;
    this._assetName = t;
  }
  static {
    n(this, "RoomObjectGroupBadgeUpdateMessage");
  }
  static BADGE_LOADED = "ROGBUM_BADGE_LOADED";
  get badgeId() {
    return this.var_595;
  }
  get assetName() {
    return this._assetName;
  }
}
