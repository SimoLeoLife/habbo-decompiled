// Estratto da HabboAirLauncher.deobf.js, riga 161130.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetStickieDataUpdateEvent.as
// Nome offuscato: _ieb9cf18bbe8092

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o, d, c = !1, f = !1) {
    super(r, c, f);
    this.objectId = t;
    this.objectType = i;
    this.text = s;
    this._r90e16a8c48c219 = o;
    this.controller = d;
  }
  static {
    n(this, "RoomWidgetStickieDataUpdateEvent");
  }
  static UPDATE_STICKIE_DATA = "RWSDUE_STICKIE_DATA";
}
