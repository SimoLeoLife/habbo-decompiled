// Estratto da HabboAirLauncher.deobf.js, riga 159647.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionUserBadgesEvent.as
// Nome offuscato: _ie02d7cfe7875e9

class a extends RoomSessionEvent {
  constructor(r, t, i = null, s = !1, o = !1) {
    super(a.USER_BADGES, r, s, o);
    this._userId = t;
    this._selectedBadges = (i ?? []).map((d, c) => (typeof d == "string" ? new _i6e70f7261361b5(c + 1, d, 0, 0) : d));
  }
  static {
    n(this, "RoomSessionUserBadgesEvent");
  }
  static USER_BADGES = "RSUBE_BADGES";
  _selectedBadges;
  get userId() {
    return this._userId;
  }
  get selectedBadges() {
    return this._selectedBadges;
  }
  get badges() {
    return this._selectedBadges.map((r) => r._rc9fc89e7eb27a7);
  }
}
