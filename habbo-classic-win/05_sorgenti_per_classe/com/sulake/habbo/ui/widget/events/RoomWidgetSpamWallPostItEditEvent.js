// Extracted from HabboAirLauncher.deobf.js, line 161118.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetSpamWallPostItEditEvent.as
// Obfuscated name: _i1957ca1daf815e

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o = !1, d = !1) {
    super(r, o, d);
    this.objectId = t;
    this.location = i;
    this.objectType = s;
  }
  static {
    n(this, "RoomWidgetSpamWallPostItEditEvent");
  }
  static const_417 = "RWSWPUE_OPEN_EDITOR";
}
