// Estratto da HabboAirLauncher.deobf.js, riga 161049.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetRoomQueueUpdateEvent.as
// Nome offuscato: _i728dcacdc6e79b

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o, d = !1, c = !1) {
    super(r, d, c);
    this.position = t;
    this.var_4493 = i;
    this.isActive = s;
    this.var_4259 = o;
  }
  static {
    n(this, "RoomWidgetRoomQueueUpdateEvent");
  }
  static SPECTATOR_QUEUE_STATUS = "RWRQUE_SPECTATOR_QUEUE_STATUS";
  static VISITOR_QUEUE_STATUS = "RWRQUE_VISITOR_QUEUE_STATUS";
}
