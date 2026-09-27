// Estratto da HabboAirLauncher.deobf.js, riga 158495.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/events/NotificationEvent.as
// Nome offuscato: _i18ee518b70e8d2

class a extends M {
  constructor(r, t) {
    super(a.FRIEND_NOTIFICATION_EVENT);
    this.friendId = r;
    this.notification = t;
  }
  static {
    n(this, "NotificationEvent");
  }
  static FRIEND_NOTIFICATION_EVENT = "FBE_NOTIFICATION_EVENT";
}
