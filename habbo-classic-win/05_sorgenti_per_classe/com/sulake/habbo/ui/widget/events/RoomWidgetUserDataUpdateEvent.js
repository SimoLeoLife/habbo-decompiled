// Estratto da HabboAirLauncher.deobf.js, riga 161191.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetUserDataUpdateEvent.as
// Nome offuscato: _icb5d03378f11dd

class a extends RoomWidgetUpdateEvent {
  static {
    n(this, "RoomWidgetUserDataUpdateEvent");
  }
  static USER_DATA_UPDATED = "rwudue_user_data_updated";
  constructor(e = !1, r = !1) {
    super(a.USER_DATA_UPDATED, e, r);
  }
}
