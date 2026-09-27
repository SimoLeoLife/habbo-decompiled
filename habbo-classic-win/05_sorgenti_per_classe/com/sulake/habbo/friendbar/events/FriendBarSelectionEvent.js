// Extracted from HabboAirLauncher.deobf.js, line 158455.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/events/FriendBarSelectionEvent.as
// Obfuscated name: _i635225cbef277c

class a extends M {
  constructor(r, t) {
    super(a.FRIEND_SELECTED);
    this.friendId = r;
    this._rc23a5b7fbc16c4 = t;
  }
  static {
    n(this, "FriendBarSelectionEvent");
  }
  static FRIEND_SELECTED = "FBVE_FRIEND_SELECTED";
}
