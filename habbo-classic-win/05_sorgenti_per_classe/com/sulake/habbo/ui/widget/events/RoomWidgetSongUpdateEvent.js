// Estratto da HabboAirLauncher.deobf.js, riga 161105.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetSongUpdateEvent.as
// Nome offuscato: _i89b3ba3974dd8e

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o = !1, d = !1) {
    super(r, o, d);
    this.songId = t;
    this._r504109a443ce10 = i;
    this._rf0d8f6a38f8f2c = s;
  }
  static {
    n(this, "RoomWidgetSongUpdateEvent");
  }
  static SONG_DATA_RECEIVED = "RWSUE_DATA_RECEIVED";
  static SONG_PLAYING_CHANGED = "RWSUE_PLAYING_CHANGED";
}
