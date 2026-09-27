// Estratto da HabboAirLauncher.deobf.js, riga 160767.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetPlayListEditorNowPlayingEvent.as
// Nome offuscato: _id672e4ef157dac

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o = !1, d = !1) {
    super(r, o, d);
    this.id = t;
    this.position = i;
    this.priority = s;
  }
  static {
    n(this, "RoomWidgetPlayListEditorNowPlayingEvent");
  }
  static NOW_PLAYING_SONG_CHANGED = "RWPLENPE_SONG_CHANGED";
  static USER_PLAY_SONG = "RWPLENPE_USER_PLAY_SONG";
  static USER_STOP_SONG = "RWPLENPW_USER_STOP_SONG";
}
