// Estratto da HabboAirLauncher.deobf.js, riga 161157.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetTrophyDataUpdateEvent.as
// Nome offuscato: _icbdfb256e75a6c

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o, d, c = !1, f = !1) {
    super(r, c, f);
    this.color = t;
    this.name = i;
    this.date = s;
    this.message = o;
    this.var_3948 = d;
  }
  static {
    n(this, "RoomWidgetTrophyDataUpdateEvent");
  }
  static UPDATE_TROPHY_DATA = "RWTDUE_TROPHY_DATA";
}
