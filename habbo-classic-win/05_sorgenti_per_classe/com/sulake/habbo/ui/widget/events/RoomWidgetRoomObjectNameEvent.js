// Estratto da HabboAirLauncher.deobf.js, riga 160997.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetRoomObjectNameEvent.as
// Nome offuscato: _iaf22cc7cbbf7d2

class a extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o) {
    super(a.OBJECT_NAME, !1, !1);
    this.userId = r;
    this.category = t;
    this.userName = i;
    this.userType = s;
    this.roomIndex = o;
  }
  static {
    n(this, "RoomWidgetRoomObjectNameEvent");
  }
  static OBJECT_NAME = "RWONE_TYPE";
}
