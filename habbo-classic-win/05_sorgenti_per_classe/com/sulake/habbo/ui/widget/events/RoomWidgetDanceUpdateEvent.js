// Extracted from HabboAirLauncher.deobf.js, line 160133.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetDanceUpdateEvent.as
// Obfuscated name: _ice8aa5dcccd66b

class a extends RoomWidgetUpdateEvent {
  constructor(r, t = !1, i = !1) {
    super(a.const_839, t, i);
    this.style = r;
  }
  static {
    n(this, "RoomWidgetDanceUpdateEvent");
  }
  static const_839 = "RWUE_DANCE";
}
