// Extracted from HabboAirLauncher.deobf.js, line 162260.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/events/SongInfoReceivedEvent.as
// Obfuscated name: _i97362c5e0823b1

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
