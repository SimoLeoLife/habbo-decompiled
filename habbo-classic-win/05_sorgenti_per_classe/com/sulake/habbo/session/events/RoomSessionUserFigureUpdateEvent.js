// Estratto da HabboAirLauncher.deobf.js, riga 159681.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionUserFigureUpdateEvent.as
// Nome offuscato: _i84ecaed147b483

class a extends RoomSessionEvent {
  constructor(r, t, i, s, o, d, c = -1, f = !1, l = !1) {
    super(a.USER_FIGURE, r, f, l);
    this._userId = t;
    this.var_1129 = i;
    this.var_106 = s;
    this._customInfo = o;
    this._achievementScore = d;
    this.var_3126 = c;
  }
  static {
    n(this, "RoomSessionUserFigureUpdateEvent");
  }
  static USER_FIGURE = "RSUBE_FIGURE";
  get userId() {
    return this._userId;
  }
  get figure() {
    return this.var_1129;
  }
  get gender() {
    return this.var_106;
  }
  get customInfo() {
    return this._customInfo;
  }
  get achievementScore() {
    return this._achievementScore;
  }
  get badgesRank() {
    return this.var_3126;
  }
}
