// Estratto da HabboAirLauncher.deobf.js, riga 160284.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetFriendRequestUpdateEvent.as
// Nome offuscato: _i54b1e647607a27

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i = 0, s = null, o = !1, d = !1) {
    super(r, o, d);
    this.requestId = t;
    this.userId = i;
    this.userName = s;
  }
  static {
    n(this, "RoomWidgetFriendRequestUpdateEvent");
  }
  static HIDE_FRIEND_REQUEST = "RWFRUE_HIDE_FRIEND_REQUEST";
  static SHOW_FRIEND_REQUEST = "RWFRUE_SHOW_FRIEND_REQUEST";
}
