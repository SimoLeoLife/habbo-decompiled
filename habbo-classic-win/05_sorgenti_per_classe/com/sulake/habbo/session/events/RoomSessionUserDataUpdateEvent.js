// Estratto da HabboAirLauncher.deobf.js, riga 159668.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionUserDataUpdateEvent.as
// Nome offuscato: _i3f1e34d9a77e00

class a extends RoomSessionEvent {
  constructor(r, t, i = !1, s = !1) {
    super(a.USER_DATA_UPDATED, r, i, s);
    this._addedUsers = t;
  }
  static {
    n(this, "RoomSessionUserDataUpdateEvent");
  }
  static USER_DATA_UPDATED = "rsudue_user_data_updated";
  get addedUsers() {
    return this._addedUsers;
  }
}
