// Extracted from HabboAirLauncher.deobf.js, line 161763.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetInventoryUpdatedMessage.as
// Obfuscated name: _i06c95d0fef665d

class extends RoomWidgetUpdateEvent {
  static {
    n(this, "RoomWidgetInventoryUpdatedMessage");
  }
  static INVENTORY_UPDATED = "RWIUM_INVENTORY_UPDATED";
  constructor(e, r = !1, t = !1) {
    super(e, r, t);
  }
}
