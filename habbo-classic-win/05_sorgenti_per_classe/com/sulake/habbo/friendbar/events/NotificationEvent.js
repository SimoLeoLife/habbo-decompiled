// Extracted from HabboAirLauncher.deobf.js, line 158495.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/events/NotificationEvent.as
// Obfuscated name: _i18ee518b70e8d2

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
