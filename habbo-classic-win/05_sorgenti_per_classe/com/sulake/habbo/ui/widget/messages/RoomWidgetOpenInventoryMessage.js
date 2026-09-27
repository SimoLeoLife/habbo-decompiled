// Estratto da HabboAirLauncher.deobf.js, riga 161829.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetOpenInventoryMessage.as
// Nome offuscato: _i4e7ba2d7dd9837

class a extends RoomWidgetMessage {
  constructor(r) {
    super(a.const_410);
    this._r4a91c80f4f2a04 = r;
  }
  static {
    n(this, "RoomWidgetOpenInventoryMessage");
  }
  static INVENTORY_BADGES = "inventory_badges";
  static INVENTORY_CLOTHES = "inventory_clothes";
  static INVENTORY_EFFECTS = "inventory_effects";
  static INVENTORY_FURNITURE = "inventory_furniture";
  static const_410 = "RWGOI_MESSAGE_OPEN_INVENTORY";
}
