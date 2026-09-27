// Extracted from HabboAirLauncher.deobf.js, line 144754.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconControllerEvent.as
// Obfuscated name: _i79c76fa3be9826

class a extends M {
  static {
    n(this, "HabbiconControllerEvent");
  }
  static const_1213 = "hce_owned_habbicons_updated";
  static SHOP_DATA_UPDATED = "hce_shop_data_updated";
  static const_805 = "hce_habbicon_status_changed";
  static RECENT_HABBICONS_UPDATED = "hce_recent_habbicons_updated";
  static ROOM_USE_HABBICON = "hce_room_use_habbicon";
  habbiconId;
  collectionId;
  roomIndex;
  constructor(e, r = 0, t = 0, i = 0) {
    (super(e), (this.habbiconId = r), (this.collectionId = t), (this.roomIndex = i));
  }
  clone() {
    return new a(this.type, this.habbiconId, this.collectionId, this.roomIndex);
  }
}
