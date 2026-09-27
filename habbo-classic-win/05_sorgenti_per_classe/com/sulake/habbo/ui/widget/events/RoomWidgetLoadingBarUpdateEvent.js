// Extracted from HabboAirLauncher.deobf.js, line 160347.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetLoadingBarUpdateEvent.as
// Obfuscated name: _ie04757924958d7

class extends RoomWidgetUpdateEvent {
  static {
    n(this, "RoomWidgetLoadingBarUpdateEvent");
  }
  static HIDE = "RWLBUW_HIDE_LOADING_BAR";
  static SHOW = "RWLBUE_SHOW_LOADING_BAR";
  constructor(e, r = !1, t = !1) {
    super(e, r, t);
  }
}
