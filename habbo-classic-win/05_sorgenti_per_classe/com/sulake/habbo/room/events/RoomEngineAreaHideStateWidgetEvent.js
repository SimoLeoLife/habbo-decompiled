// Extracted from HabboAirLauncher.deobf.js, line 70431.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomEngineAreaHideStateWidgetEvent.as
// Obfuscated name: _i5a96d5bd72efb6

class a extends RoomEngineToWidgetEvent {
  constructor(r, t, i, s) {
    super(a.UPDATE_STATE_AREA_HIDE, r, t, i, null, !1, !1);
    this.var_1427 = s;
  }
  static {
    n(this, "RoomEngineAreaHideStateWidgetEvent");
  }
  static UPDATE_STATE_AREA_HIDE = "RETWE_UPDATE_STATE_AREA_HIDE";
  get isOn() {
    return this.var_1427;
  }
}
