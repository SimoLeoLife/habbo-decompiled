// Extracted from HabboAirLauncher.deobf.js, line 159158.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionDanceEvent.as
// Obfuscated name: _i74cd1cc5837720

class a extends RoomSessionEvent {
  constructor(r, t, i, s = !1, o = !1) {
    super(a.DANCE, r, s, o);
    this._userId = t;
    this.var_3484 = i;
  }
  static {
    n(this, "RoomSessionDanceEvent");
  }
  static DANCE = "RSDE_DANCE";
  get userId() {
    return this._userId;
  }
  get danceStyle() {
    return this.var_3484;
  }
}
