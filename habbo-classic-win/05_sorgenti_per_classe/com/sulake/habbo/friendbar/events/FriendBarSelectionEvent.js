// Estratto da HabboAirLauncher.deobf.js, riga 158455.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/events/FriendBarSelectionEvent.as
// Nome offuscato: _i635225cbef277c

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
