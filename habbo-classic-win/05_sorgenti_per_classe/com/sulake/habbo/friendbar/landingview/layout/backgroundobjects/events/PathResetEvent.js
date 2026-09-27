// Estratto da HabboAirLauncher.deobf.js, riga 209439.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/layout/backgroundobjects/events/PathResetEvent.as
// Nome offuscato: _ia00c6a65d7d44a

class a extends M {
  constructor(r, t = !1, i = !1) {
    super(a.MOVING_OBJECT_PATH_RESET, t, i);
    this.objectId = r;
  }
  static {
    n(this, "PathResetEvent");
  }
  static MOVING_OBJECT_PATH_RESET = "LWMOPRE_MOVING_OBJECT_PATH_RESET";
}
