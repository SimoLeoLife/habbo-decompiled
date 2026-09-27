// Extracted from HabboAirLauncher.deobf.js, line 161250.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetUserLocationUpdateEvent.as
// Obfuscated name: _i804aee8f328e39

class a extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s = !1, o = !1) {
    super(a.USER_LOCATION_UPDATE, s, o);
    this.userId = r;
    this.rectangle = t;
    this._r2b48a29bd98b0a = i;
  }
  static {
    n(this, "RoomWidgetUserLocationUpdateEvent");
  }
  static USER_LOCATION_UPDATE = "RWULUE_USER_LOCATION_UPDATE";
}
