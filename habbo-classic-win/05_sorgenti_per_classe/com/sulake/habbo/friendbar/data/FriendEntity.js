// Estratto da HabboAirLauncher.deobf.js, riga 212062.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/data/FriendEntity.as
// Nome offuscato: _ic5de4c9d811f8a

class a {
  constructor(e, r, t, i, s, o, d, c, f, l) {
    this.id = e;
    this.name = r;
    this.realName = t;
    this.motto = i;
    this.gender = s;
    this.online = o;
    this._allowFollow = d;
    this.figure = c;
    this.categoryId = f;
    this._r1939eac45a5e21 = l;
  }
  static {
    n(this, "FriendEntity");
  }
  static ROLLING_LOG_EVENT_ID = 0;
  _notifications = null;
  var_5728 = -1;
  get notifications() {
    return (this._notifications == null && (this._notifications = []), this._notifications);
  }
  get logEventId() {
    return this.var_5728;
  }
  set logEventId(e) {
    this.var_5728 = e;
  }
  getNextLogEventId() {
    return ((a.ROLLING_LOG_EVENT_ID += 1), a.ROLLING_LOG_EVENT_ID);
  }
}
