// Extracted from HabboAirLauncher.deobf.js, line 162218.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/events/NowPlayingEvent.as
// Obfuscated name: _iec87e93f7897ef

class extends M {
  constructor(r, t, i, s, o = !1, d = !1) {
    super(r, o, d);
    this._priority = t;
    this._id = i;
    this._position = s;
  }
  static {
    n(this, "NowPlayingEvent");
  }
  static USER_PLAY_SONG = "NPE_USER_PLAY_SONG";
  static USER_STOP_SONG = "NPW_USER_STOP_SONG";
  static NOW_PLAYING_SONG_CHANGED = "NPE_SONG_CHANGED";
  get id() {
    return this._id;
  }
  get position() {
    return this._position;
  }
  get priority() {
    return this._priority;
  }
}
