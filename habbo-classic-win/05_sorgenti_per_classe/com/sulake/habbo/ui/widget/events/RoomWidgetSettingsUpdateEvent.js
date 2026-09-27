// Extracted from HabboAirLauncher.deobf.js, line 161084.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetSettingsUpdateEvent.as
// Obfuscated name: _ib6cecbe3fa773b

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o = !1, d = !1) {
    super(r, o, d);
    this._rb9df644ab4c279 = t;
    this._r3ebcfbd6f36b12 = i;
    this._r8f5b65d437e79d = s;
  }
  static {
    n(this, "RoomWidgetSettingsUpdateEvent");
  }
  static const_1025 = "RWSUE_SETTINGS";
}
