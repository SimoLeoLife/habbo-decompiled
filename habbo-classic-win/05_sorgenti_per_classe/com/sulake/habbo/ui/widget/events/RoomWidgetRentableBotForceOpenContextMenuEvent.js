// Extracted from HabboAirLauncher.deobf.js, line 160942.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetRentableBotForceOpenContextMenuEvent.as
// Obfuscated name: _ie73afac22f08b2

class a extends RoomWidgetUpdateEvent {
  constructor(r) {
    super(a.OPEN);
    this.botId = r;
  }
  static {
    n(this, "RoomWidgetRentableBotForceOpenContextMenuEvent");
  }
  static OPEN = "RWRBFOCME_OPEN";
}
