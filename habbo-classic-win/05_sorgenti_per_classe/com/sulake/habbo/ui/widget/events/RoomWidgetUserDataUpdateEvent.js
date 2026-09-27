// Extracted from HabboAirLauncher.deobf.js, line 161191.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetUserDataUpdateEvent.as
// Obfuscated name: _icb5d03378f11dd

class a extends RoomWidgetUpdateEvent {
  static {
    n(this, "RoomWidgetUserDataUpdateEvent");
  }
  static USER_DATA_UPDATED = "rwudue_user_data_updated";
  constructor(e = !1, r = !1) {
    super(a.USER_DATA_UPDATED, e, r);
  }
}
