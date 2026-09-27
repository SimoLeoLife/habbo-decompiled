// Extracted from HabboAirLauncher.deobf.js, line 159041.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionEvent.as
// Obfuscated name: _i9920b53cfa3039

class extends M {
  constructor(r, t, i = !0, s = !1, o = !1) {
    super(r, s, o);
    this.var_61 = t;
    this.var_5292 = i;
  }
  static {
    n(this, "RoomSessionEvent");
  }
  static const_481 = "RSE_CREATED";
  static const_215 = "RSE_ENDED";
  static SESSION_ROOM_DATA = "RSE_ROOM_DATA";
  static const_1398 = "RSE_STARTED";
  get session() {
    return this.var_61;
  }
  get openLandingPage() {
    return this.var_5292;
  }
}
