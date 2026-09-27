// Extracted from HabboAirLauncher.deobf.js, line 160357.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetMiniMailUpdateEvent.as
// Obfuscated name: _i0ab21c1c90d052

class extends RoomWidgetUpdateEvent {
  static {
    n(this, "RoomWidgetMiniMailUpdateEvent");
  }
  static NEW_MESSAGE_NOTIFICATION = "RWMMUE_new_mini_mail";
  static const_700 = "RWMMUE_unread_mini_mail";
  constructor(e, r = !1, t = !1) {
    super(e, r, t);
  }
}
