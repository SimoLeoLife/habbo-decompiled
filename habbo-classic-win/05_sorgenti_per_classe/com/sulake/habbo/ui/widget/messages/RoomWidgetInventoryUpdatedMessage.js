// Estratto da HabboAirLauncher.deobf.js, riga 161763.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetInventoryUpdatedMessage.as
// Nome offuscato: _i06c95d0fef665d

class extends RoomWidgetUpdateEvent {
  static {
    n(this, "RoomWidgetInventoryUpdatedMessage");
  }
  static INVENTORY_UPDATED = "RWIUM_INVENTORY_UPDATED";
  constructor(e, r = !1, t = !1) {
    super(e, r, t);
  }
}
