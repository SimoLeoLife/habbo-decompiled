// Estratto da HabboAirLauncher.deobf.js, riga 160942.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetRentableBotForceOpenContextMenuEvent.as
// Nome offuscato: _ie73afac22f08b2

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
