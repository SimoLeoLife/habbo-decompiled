// Estratto da HabboAirLauncher.deobf.js, riga 159945.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/HideRoomWidgetEvent.as
// Nome offuscato: _i14c4adcbd4868d

class a extends M {
  constructor(r, t = !1, i = !1) {
    super(a.HIDE_ROOM_WIDGET, t, i);
    this.widgetType = r;
  }
  static {
    n(this, "HideRoomWidgetEvent");
  }
  static HIDE_ROOM_WIDGET = "hrwe_hide_room_widget";
}
