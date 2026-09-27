// Extracted from HabboAirLauncher.deobf.js, line 324726.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/playlisteditor/MainWindowHandler.as
// Obfuscated name: _i2e3651d0e08c42

class a {
  constructor(e, r) {
    this.var_17 = e;
    this._r8976fb174e3935 = r;
    let t = [
      class_3939.MY_MUSIC_TITLE_LOADABLE_ASSET,
      class_3939.PLAYLIST_TITLE_LOADABLE_ASSET,
      class_3939.PREVIEW_BACKGROUND_LOADABLE_ASSET,
      class_3939.GET_MORE_MUSIC_BACKGROUND_LOADABLE_ASSET,
      class_3939.ADD_SONGS_BACKGROUND_LOADABLE_ASSET,
    ];
    for (let i of t) {
      let s = this.var_17._rac43efd7337d8b(i);
      s != null ? s.dispose() : this.var_17.retrieveWidgetImage(i);
    }
    (this.createWindow(),
      (this._r151196fd30016d = new MusicInventoryGridView(
        this.var_17,
        this.getMusicInventoryGrid(),
        this._r8976fb174e3935,
      )),
      (this._r69faa25ca16938 = new UnkClass_073931(this.var_17, this.getPlayListEditorItemList())),
      (this.var_502 = new kX(this.var_17, this.getMusicInventoryStatusContainer())),
      (this.var_611 = new qI(this.var_17, this.getPlayListStatusContainer())),
      this.refreshLoadableAsset());
  }
  static {
    n(this, "MainWindowHandler");
  }
  static SHOW_BUY_MORE_MUSIC_DISK_COUNT = 6;
  static MY_MUSIC_SHOW_SCROLLBAR_ITEM_COUNT_LIMIT = 9;
  static PLAYLIST_SHOW_SCROLLBAR_ITEM_COUNT_LIMIT = 5;
  var_33 = null;
  _r4a03abb290f01f = null;
  _r4257da0938b130 = null;
  _r151196fd30016d = null;
  _r69faa25ca16938 = null;
  var_502 = null;
  var_611 = null;
  _r2ec53d535b1e0a = null;
  _r1823d1cb03a5e2 = null;
  get window() {
    return this.var_33;
  }
  get _re30bf34771d639() {
    return this._r151196fd30016d;
  }
  get _rc10b3de056a064() {
    return this._r69faa25ca16938;
  }
  destroy() {
    (this._r8976fb174e3935 != null && this._r8976fb174e3935.stop(UnkConstants_a57980._r741ad58ad5e51a),
      (this._r8976fb174e3935 = null),
      this._r151196fd30016d?.destroy(),
      (this._r151196fd30016d = null),
      this._r69faa25ca16938?.destroy(),
      (this._r69faa25ca16938 = null),
      this.var_611?.destroy(),
      (this.var_611 = null),
      this.var_502?.destroy(),
      (this.var_502 = null),
      this.var_33?.destroy(),
      (this.var_33 = null),
      (this._r4a03abb290f01f = null),
      (this._r4257da0938b130 = null),
      (this._r2ec53d535b1e0a = null),
      (this._r1823d1cb03a5e2 = null));
  }
  hide() {
    (this.var_33 != null && (this.var_33.visible = !1),
      this.var_17?._rb2da6120579a49());
  }
  show() {
    this._r8976fb174e3935._r6bb71aecc5e807();
    let e = this._r8976fb174e3935._r6ad19d72b36cea();
    (e != null && (e.requestPlayList(), this.selectPlayListStatusViewByFurniPlayListState()),
      this.var_33 != null && (this.var_33.visible = !0));
  }
  refreshLoadableAsset(e = "") {
    ((e === "" || e === class_3939.MY_MUSIC_TITLE_LOADABLE_ASSET) &&
      this.assignWindowBitmapByAsset(this._r4a03abb290f01f, "music_inventory_splash_image", class_3939.MY_MUSIC_TITLE_LOADABLE_ASSET),
      (e === "" || e === class_3939.PLAYLIST_TITLE_LOADABLE_ASSET) &&
        this.assignWindowBitmapByAsset(this._r4257da0938b130, "playlist_editor_splash_image", class_3939.PLAYLIST_TITLE_LOADABLE_ASSET),
      (e === "" || e === class_3939.PREVIEW_BACKGROUND_LOADABLE_ASSET) &&
        this.var_502?.setPreviewPlayingBackgroundImage(this.var_17._rac43efd7337d8b(class_3939.PREVIEW_BACKGROUND_LOADABLE_ASSET)),
      (e === "" || e === class_3939.GET_MORE_MUSIC_BACKGROUND_LOADABLE_ASSET) &&
        this.var_502?.setGetMoreMusicBackgroundImage(this.var_17._rac43efd7337d8b(class_3939.GET_MORE_MUSIC_BACKGROUND_LOADABLE_ASSET)),
      (e === "" || e === class_3939.ADD_SONGS_BACKGROUND_LOADABLE_ASSET) &&
        (this.var_611.addSongsBackgroundImage = this.var_17._rac43efd7337d8b(
          class_3939.ADD_SONGS_BACKGROUND_LOADABLE_ASSET,
        )));
  }
  _rc3e5fddf800389() {
    (this._r6e18e38dc984f6(), this.selectPlayListStatusViewByFurniPlayListState());
    let e = this._r8976fb174e3935._r6ad19d72b36cea();
    if (e == null) return;
    let r = e._rd788ebdf380b70;
    if (r !== -1) {
      let t = this._r8976fb174e3935._r716cd8f1931469(r);
      ((this.var_611.nowPlayingTrackName = t?.name ?? ""),
        (this.var_611.nowPlayingAuthorName = t?.creator ?? ""));
    }
    this._r1823d1cb03a5e2 != null && (this._r1823d1cb03a5e2.visible = e.length > a.PLAYLIST_SHOW_SCROLLBAR_ITEM_COUNT_LIMIT);
  }
  _rd414a252c211c2() {
    (this._r151196fd30016d?.refresh(),
      this._r8eb91b1e052da9(),
      this._r2ec53d535b1e0a != null &&
        this._r151196fd30016d != null &&
        (this._r2ec53d535b1e0a.visible = this._r151196fd30016d.itemCount > a.MY_MUSIC_SHOW_SCROLLBAR_ITEM_COUNT_LIMIT));
  }
  _r8ea3cefb0641f7(e) {
    switch (e.type) {
      case RoomWidgetPlayListEditorNowPlayingEvent.NOW_PLAYING_SONG_CHANGED: {
        if ((this.selectPlayListStatusViewByFurniPlayListState(), this._r69faa25ca16938?._r1958af931fc4c2(e.position), e.id !== -1)) {
          let r = this._r8976fb174e3935._r716cd8f1931469(e.id);
          ((this.var_611.nowPlayingTrackName = r?.name ?? ""),
            (this.var_611.nowPlayingAuthorName = r?.creator ?? ""));
        }
        break;
      }
      case RoomWidgetPlayListEditorNowPlayingEvent.USER_PLAY_SONG: {
        this._r151196fd30016d?._r858e723740b683();
        let r = this._r8976fb174e3935._r716cd8f1931469(e.id);
        ((this.var_502._r504109a443ce10 = r?.name ?? ""),
          (this.var_502._r504109a443ce10 = r?.name ?? ""),
          (this.var_502.authorName = r?.creator ?? ""),
          this._r8eb91b1e052da9());
        break;
      }
      case RoomWidgetPlayListEditorNowPlayingEvent.USER_STOP_SONG:
        (this._r151196fd30016d?._r0edf0270c9d949(), this._r8eb91b1e052da9());
        break;
    }
  }
  assignWindowBitmapByAsset(e, r, t) {
    let i = e?.getChildByName(r),
      s = this.var_17._rac43efd7337d8b(t);
    i != null && s != null && ((i.bitmap = s), (i.width = s.width), (i.height = s.height));
  }
  createWindow() {
    let e = this.var_17.assets?.getAssetByName("playlisteditor_main_window");
    if (
      ((this.var_33 = this.var_17.windowManager?.buildFromXML(e?.content)),
      this.var_33 == null)
    )
      throw new Error("Failed to construct window from XML!");
    this.var_33.position = new E(80, 0);
    let r = this.var_33.getChildByName("content_area");
    if (r == null) throw new Error("Window is missing 'content_area' element");
    if (
      ((this._r4a03abb290f01f = r.getChildByName("my_music_border")),
      (this._r4257da0938b130 = r.getChildByName("playlist_border")),
      this._r4a03abb290f01f == null)
    )
      throw new Error("Window content area is missing 'my_music_border' window element");
    if (this._r4257da0938b130 == null)
      throw new Error("Window content area is missing 'playlist_border' window element");
    if (
      ((this._r2ec53d535b1e0a = this._r4a03abb290f01f.getChildByName("music_inventory_scrollbar")),
      (this._r1823d1cb03a5e2 = this._r4257da0938b130.getChildByName("playlist_scrollbar")),
      this._r2ec53d535b1e0a == null)
    )
      throw new Error("Window content area is missing 'music_inventory_scrollbar' window element");
    if (this._r1823d1cb03a5e2 == null)
      throw new Error("Window content area is missing 'playlist_scrollbar' window element");
    this.var_33.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose);
  }
  getMusicInventoryGrid() {
    return this._r4a03abb290f01f?.getChildByName("music_inventory_itemgrid");
  }
  getPlayListEditorItemList() {
    return this._r4257da0938b130?.getChildByName("playlist_editor_itemlist");
  }
  getMusicInventoryStatusContainer() {
    return this._r4a03abb290f01f?.getChildByName("preview_play_container");
  }
  getPlayListStatusContainer() {
    return this._r4257da0938b130?.getChildByName("now_playing_container");
  }
  selectPlayListStatusViewByFurniPlayListState() {
    let e = this._r8976fb174e3935._r6ad19d72b36cea();
    e != null &&
      (e._rd20fc4247cac6a
        ? this.var_611?._r526fa0c167a3bf(qI.NOW_PLAYING)
        : e.length > 0
          ? this.var_611?._r526fa0c167a3bf(qI.START_PLAYBACK)
          : this.var_611?._r526fa0c167a3bf(qI.ADD_SONGS));
  }
  _r8eb91b1e052da9() {
    this._r06a0977331c2f6()
      ? (this.var_502?.show(), this.var_502?._r526fa0c167a3bf(kX.PREVIEW_PLAYING))
      : this._r8976fb174e3935._r7cff41fce75721() <= a.SHOW_BUY_MORE_MUSIC_DISK_COUNT
        ? (this.var_502?.show(), this.var_502?._r526fa0c167a3bf(kX.BUY_MORE))
        : this.var_502?.hide();
  }
  _r6e18e38dc984f6() {
    let e = this._r8976fb174e3935._r6ad19d72b36cea(),
      r = [],
      t = -1;
    if (e != null) {
      for (let i = 0; i < e.length; i++) {
        let s = e.getEntry(i);
        s != null && r.push(s);
      }
      t = e._r306a305681bfdc;
    }
    this._r69faa25ca16938?.refresh(r, t);
  }
  onClose = n((e) => {
    this.hide();
  }, "onClose");
  _r06a0977331c2f6() {
    return this._r8976fb174e3935._r1e81274f76e6d5(UnkConstants_a57980._r741ad58ad5e51a) !== -1;
  }
}
