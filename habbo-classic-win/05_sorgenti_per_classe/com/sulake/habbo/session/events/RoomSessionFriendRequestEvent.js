// Estratto da HabboAirLauncher.deobf.js, riga 159303.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionFriendRequestEvent.as
// Nome offuscato: _i03df4ef053f153

class a extends RoomSessionEvent {
  constructor(r, t, i, s, o = !1, d = !1) {
    super(a.FRIEND_REQUEST, r, o, d);
    this._requestId = t;
    this._userId = i;
    this._userName = s;
  }
  static {
    n(this, "RoomSessionFriendRequestEvent");
  }
  static FRIEND_REQUEST = "RSFRE_FRIEND_REQUEST";
  get requestId() {
    return this._requestId;
  }
  get userId() {
    return this._userId;
  }
  get userName() {
    return this._userName;
  }
}
