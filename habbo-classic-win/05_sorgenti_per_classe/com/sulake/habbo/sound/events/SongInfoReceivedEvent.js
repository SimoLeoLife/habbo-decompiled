// Estratto da HabboAirLauncher.deobf.js, riga 162260.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/events/SongInfoReceivedEvent.as
// Nome offuscato: _i97362c5e0823b1

class extends M {
  constructor(r, t, i = !1, s = !1) {
    super(r, i, s);
    this._id = t;
  }
  static {
    n(this, "SongInfoReceivedEvent");
  }
  static TRAX_SONG_INFO_RECEIVED = "SIR_TRAX_SONG_INFO_RECEIVED";
  get id() {
    return this._id;
  }
}
