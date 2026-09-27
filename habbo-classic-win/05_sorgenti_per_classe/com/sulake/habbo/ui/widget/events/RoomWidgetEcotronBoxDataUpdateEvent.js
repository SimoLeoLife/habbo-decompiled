// Extracted from HabboAirLauncher.deobf.js, line 160259.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetEcotronBoxDataUpdateEvent.as
// Obfuscated name: _i4eaef1184f81f2

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o = !1, d = null, c = !1, f = !1) {
    super(r, c, f);
    this.objectId = t;
    this.text = i;
    this.furniTypeName = s;
    this.controller = o;
    this._r9b96440f25f1f8 = d;
  }
  static {
    n(this, "RoomWidgetEcotronBoxDataUpdateEvent");
  }
  static const_128 = "RWEBDUE_CONTENTS";
  static UPDATE_PACKAGEINFO = "RWEBDUE_PACKAGEINFO";
}
