// Estratto da HabboAirLauncher.deobf.js, riga 161118.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetSpamWallPostItEditEvent.as
// Nome offuscato: _i1957ca1daf815e

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
