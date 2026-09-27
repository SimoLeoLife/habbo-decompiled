// Extracted from HabboAirLauncher.deobf.js, line 162273.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/events/SoundCompleteEvent.as
// Obfuscated name: _if0e2a8dbd41d79

class extends M {
  constructor(r, t, i = !1, s = !1) {
    super(r, i, s);
    this._id = t;
  }
  static {
    n(this, "SoundCompleteEvent");
  }
  static TRAX_SONG_COMPLETE = "SCE_TRAX_SONG_COMPLETE";
  get id() {
    return this._id;
  }
}
