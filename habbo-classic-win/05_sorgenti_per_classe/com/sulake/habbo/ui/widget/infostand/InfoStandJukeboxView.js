// Extracted from HabboAirLauncher.deobf.js, line 320673.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/InfoStandJukeboxView.as
// Obfuscated name: _i0e355522c53629

class extends X1 {
  static {
    n(this, "InfoStandJukeboxView");
  }
  var_3076 = -1;
  _songName = "";
  var_4814 = "";
  constructor(e, r) {
    super(e, r);
  }
  updateSongInfo(e) {
    (e.type === RoomWidgetSongUpdateEvent.SONG_PLAYING_CHANGED && (this.var_3076 = e.songId),
      e.songId === this.var_3076 &&
        ((this._songName = e._r504109a443ce10),
        (this.var_4814 = e._rf0d8f6a38f8f2c),
        this.updateNowPlaying(this.var_3076 >= 0)));
  }
  createWindow(e) {
    let r = this.var_17?.assets?.getAssetByName("jukebox_view");
    if (
      ((this._window = this.var_17?.windowManager?.buildFromXML(r?.content)),
      this._window == null)
    )
      throw new Error("Failed to construct window from XML!");
    if (
      ((this._border = this._window.getListItemByName("info_border")),
      (this.var_34 = this._window.getListItemByName("button_list")),
      (this._r99fda1d9e9f6a9 = this._border?.findChildByName("infostand_element_list")),
      (this._window.name = e),
      this.var_17?.mainContainer.addChild(this._window),
      this._border?.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose),
      this.var_34 != null)
    )
      for (let s = 0; s < this.var_34.numListItems; s++)
        this.var_34.getListItemAt(s)?.addEventListener(u.CLICK, this.onButtonClicked);
    ((this._r0cabb5f3546286 = this._border?.findChildByTag("catalog") ?? null),
      this._r0cabb5f3546286?.addEventListener(u.CLICK, this._r7135eb8d4233fa),
      (this._rc1e4df667e35be = this._border?.findChildByName("rent_button") ?? null),
      this._rc1e4df667e35be?.addEventListener(u.CLICK, this._rb77933fef3ae25),
      (this._re653c033b3caa6 = this._border?.findChildByName("extend_button") ?? null),
      this._re653c033b3caa6?.addEventListener(u.CLICK, this._rfaad168e4b59af),
      (this._rd19d99b6a51f87 = this._border?.findChildByName("buyout_button") ?? null),
      this._rd19d99b6a51f87?.addEventListener(u.CLICK, this._r1e85c3dc5fed85),
      this._r48aaf35fa6835d("icon_disc", "jb_icon_disc"),
      this._r48aaf35fa6835d("icon_composer", "jb_icon_composer"));
    let i = this._r99fda1d9e9f6a9?.getListItemByName("owner_region");
    (i?.addEventListener(u.CLICK, this._r18053e6db46985),
      i?.addEventListener(u.OVER, this._r18053e6db46985),
      i?.addEventListener(u.OUT, this._r18053e6db46985));
  }
  _r48aaf35fa6835d(e, r) {
    let t = this._border?.findChildByName(e),
      s = this.var_17?.assets?.getAssetByName(r)?.content;
    t != null && s != null && (t.bitmap = s.clone());
  }
  set nowPlayingTrackName(e) {
    let t = this._r99fda1d9e9f6a9
      ?.getListItemByName("trackname_container")
      ?.getChildByName("track_name_text");
    t != null && ((t.text = e), (t.visible = !0), (t.height = t.textHeight + 5));
  }
  set nowPlayingAuthorName(e) {
    let t = this._r99fda1d9e9f6a9
      ?.getListItemByName("creatorname_container")
      ?.getChildByName("track_creator_text");
    t != null && ((t.text = e), (t.visible = !0), (t.height = t.textHeight + 5));
  }
  updateNowPlaying(e) {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("now_playing_text");
    (r != null &&
      (r.text = e
        ? (this.var_17?.localizations?.getLocalization("infostand.jukebox.text.now.playing") ?? "")
        : (this.var_17?.localizations?.getLocalization("infostand.jukebox.text.not.playing") ??
          "")),
      e
        ? ((this.nowPlayingTrackName = this._songName), (this.nowPlayingAuthorName = this.var_4814))
        : ((this.nowPlayingTrackName = ""), (this.nowPlayingAuthorName = "")),
      this.updateWindow());
  }
}
