// Extracted from HabboAirLauncher.deobf.js, line 211272.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/data/FriendNotification.as
// Obfuscated name: _i9f60804682a4fd

class a {
  constructor(e, r, t) {
    this._r46e70b63ffc509 = e;
    this.message = r;
    this._viewOnce = t;
  }
  static {
    n(this, "FriendNotification");
  }
  static TYPE_MESSENGER = -1;
  static const_887 = 0;
  static const_571 = 1;
  static TYPE_QUEST = 2;
  static TYPE_PLAYING_GAME = 3;
  static TYPE_FINISHED_GAME = 4;
  static typeCodeToString(e) {
    switch (e) {
      case a.TYPE_MESSENGER:
        return "instant_message";
      case a.const_887:
        return "room_event";
      case a.const_571:
        return "achievement";
      case a.TYPE_QUEST:
        return "quest";
      case a.TYPE_PLAYING_GAME:
        return "playing_game";
      case a.TYPE_FINISHED_GAME:
        return "finished_game";
      default:
        return "unknown";
    }
  }
}
