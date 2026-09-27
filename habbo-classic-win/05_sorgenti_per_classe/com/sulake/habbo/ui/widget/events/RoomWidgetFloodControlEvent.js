// Extracted from HabboAirLauncher.deobf.js, line 160274.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetFloodControlEvent.as
// Obfuscated name: _id339c4631c6bdd

class a extends RoomWidgetUpdateEvent {
  constructor(r) {
    super(a.const_271, !1, !1);
    this.seconds = r;
  }
  static {
    n(this, "RoomWidgetFloodControlEvent");
  }
  static const_271 = "RWFCE_FLOOD_CONTROL";
}
