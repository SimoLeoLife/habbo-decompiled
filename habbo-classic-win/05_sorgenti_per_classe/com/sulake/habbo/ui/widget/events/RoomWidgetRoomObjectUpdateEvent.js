// Estratto da HabboAirLauncher.deobf.js, riga 161011.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetRoomObjectUpdateEvent.as
// Nome offuscato: _i4b95e33c26f375

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o = !1, d = !1) {
    super(r, o, d);
    this.id = t;
    this.category = i;
    this.roomId = s;
  }
  static {
    n(this, "RoomWidgetRoomObjectUpdateEvent");
  }
  static const_739 = "RWROUE_FURNI_ADDED";
  static const_912 = "RWROUE_FURNI_REMOVED";
  static const_734 = "RWROUE_OBJECT_DESELECTED";
  static const_298 = "RWROUE_OBJECT_ROLL_OUT";
  static OBJECT_ROLL_OVER = "RWROUE_OBJECT_ROLL_OVER";
  static const_1209 = "RWROUE_OBJECT_SELECTED";
  static USER_ADDED = "RWROUE_USER_ADDED";
  static USER_REMOVED = "RWROUE_USER_REMOVED";
}
