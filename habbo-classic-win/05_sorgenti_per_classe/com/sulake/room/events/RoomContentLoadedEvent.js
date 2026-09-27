// Extracted from HabboAirLauncher.deobf.js, line 290473.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/events/RoomContentLoadedEvent.as
// Obfuscated name: _i30cab1472eb473

class extends M {
  constructor(r, t, i = !1, s = !1) {
    super(r, i, s);
    this.var_3455 = t;
  }
  static {
    n(this, "RoomContentLoadedEvent");
  }
  static CONTENT_LOAD_CANCEL = "RCLE_CANCEL";
  static CONTENT_LOAD_FAILURE = "RCLE_FAILURE";
  static CONTENT_LOAD_SUCCESS = "RCLE_SUCCESS";
  get contentType() {
    return this.var_3455;
  }
}
