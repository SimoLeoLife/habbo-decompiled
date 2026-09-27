// Estratto da HabboAirLauncher.deobf.js, riga 162286.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/events/TraxSongLoadEvent.as
// Nome offuscato: _i9d2f4646e0b775

class extends M {
  constructor(r, t, i = !1, s = !1) {
    super(r, i, s);
    this._id = t;
  }
  static {
    n(this, "TraxSongLoadEvent");
  }
  static TRAX_LOAD_COMPLETE = "TSLE_TRAX_LOAD_COMPLETE";
  static TRAX_LOAD_FAILED = "TSLE_TRAX_LOAD_FAILED";
  get id() {
    return this._id;
  }
}
