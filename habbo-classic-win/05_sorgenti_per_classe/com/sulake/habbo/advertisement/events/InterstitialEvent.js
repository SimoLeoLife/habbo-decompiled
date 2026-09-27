// Extracted from HabboAirLauncher.deobf.js, line 158350.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/advertisement/events/InterstitialEvent.as
// Obfuscated name: _i17ae80d02b1e0d

class extends M {
  constructor(r, t = "", i = !1, s = !1) {
    super(r, i, s);
    this._status = t;
  }
  static {
    n(this, "InterstitialEvent");
  }
  static INTERSTITIAL_COMPLETE = "AE_INTERSTITIAL_COMPLETE";
  static INTERSTITIAL_NOT_SHOWN = "AE_INTERSTITIAL_NOT_SHOWN";
  static INTERSTITIAL_SHOW = "AE_INTERSTITIAL_SHOW";
  get status() {
    return this._status;
  }
}
