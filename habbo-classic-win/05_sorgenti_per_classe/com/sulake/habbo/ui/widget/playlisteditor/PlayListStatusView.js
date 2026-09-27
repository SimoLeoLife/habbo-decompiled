// Estratto da HabboAirLauncher.deobf.js, riga 324654.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/playlisteditor/PlayListStatusView.as
// Nome offuscato: _if0ac1127ca58f1

class a {
  constructor(e, r) {
    this.var_17 = e;
    this._container = r;
    this.createWindows();
  }
  static {
    n(this, "PlayListStatusView");
  }
  static ADD_SONGS = "PLSV_ADD_SONGS";
  static START_PLAYBACK = "PLSV_START_PLAYBACK";
  static NOW_PLAYING = "PLSV_NOW_PLAYING";
  _r6deb1da5f9a27b = new B();
  var_77 = "";
  destroy() {
    for (let e of this._r6deb1da5f9a27b.getValues()) e.destroy();
    this._r6deb1da5f9a27b.dispose();
  }
  _r526fa0c167a3bf(e) {
    this._container.numChildren > 0 && this._container.removeChildAt(0);
    let r = this._r6deb1da5f9a27b.getValue(e) ?? null;
    r != null && (this._container.addChildAt(r, 0), (this.var_77 = e));
  }
  set nowPlayingTrackName(e) {
    if (this.var_77 !== a.NOW_PLAYING) return;
    let t = (this._r6deb1da5f9a27b.getValue(this.var_77) ?? null)?.getChildByName(
      "now_playing_track_name",
    );
    t != null && (t.text = e);
  }
  set nowPlayingAuthorName(e) {
    if (this.var_77 !== a.NOW_PLAYING) return;
    let t = (this._r6deb1da5f9a27b.getValue(this.var_77) ?? null)?.getChildByName(
      "now_playing_author_name",
    );
    t != null && (t.text = e);
  }
  set addSongsBackgroundImage(e) {
    if (e == null) return;
    let t = (this._r6deb1da5f9a27b.getValue(a.ADD_SONGS) ?? null)?.getChildByName("background_image");
    t != null && ((t.bitmap = e.clone()), (t.width = e.width), (t.height = e.height));
  }
  createWindows() {
    let e = this.var_17.assets?.getAssetByName("playlisteditor_playlist_subwindow_add_songs"),
      r = this.var_17.windowManager?.buildFromXML(e?.content);
    if (
      (r != null && this._r6deb1da5f9a27b.add(a.ADD_SONGS, r),
      (e = this.var_17.assets?.getAssetByName("playlisteditor_playlist_subwindow_play_now")),
      (r = this.var_17.windowManager?.buildFromXML(e?.content)),
      r != null &&
        (this._r6deb1da5f9a27b.add(a.START_PLAYBACK, r),
        r.getChildByName("play_now_button")?.addEventListener(u.CLICK, this._r85df5c4c4c8b32)),
      (e = this.var_17.assets?.getAssetByName("playlisteditor_playlist_subwindow_nowplaying")),
      (r = this.var_17.windowManager?.buildFromXML(e?.content)),
      r != null)
    ) {
      this._r6deb1da5f9a27b.add(a.NOW_PLAYING, r);
      let t = r.getChildByName("button_pause");
      (t?.addEventListener(u.CLICK, this._r85df5c4c4c8b32),
        this.assignAssetToElement("icon_pause_large", t?.getChildByName("pause_image")),
        this.assignAssetToElement("jb_icon_disc", r.getChildByName("song_name_icon_bitmap")),
        this.assignAssetToElement("jb_icon_composer", r.getChildByName("author_name_icon_bitmap")));
    }
  }
  assignAssetToElement(e, r) {
    let i = this.var_17.assets?.getAssetByName(e)?.content;
    r != null && i != null && (r.bitmap = i.clone());
  }
  _r85df5c4c4c8b32 = n((e) => {
    this.var_17._r0b9a0770b58ad7();
  }, "_r85df5c4c4c8b32");
}
