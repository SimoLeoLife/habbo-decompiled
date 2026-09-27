// Extracted from HabboAirLauncher.deobf.js, line 324942.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/playlisteditor/PlayListEditorWidget.as
// Obfuscated name: _ia4595a858c8a71

class a extends RoomWidgetBase {
  constructor(r, t, i, s = null, o = null, d = null, c = null) {
    super(r, t, s, o);
    this._soundManager = i;
    this._configuration = d;
    this._catalog = c;
  }
  static {
    n(this, "PlayListEditorWidget");
  }
  static _re56532ea804b80 = 130;
  static _r4f9c470c65c6dd = 100;
  static _r936bc9cd8a2163 = 130;
  static _r912caf8d33a46d = 100;
  static _ra2c6ded23a2a2d = 130;
  static _r9a282172e16334 = 100;
  var_33 = null;
  var_2287 = 0;
  dispose() {
    this.disposed ||
      (this.var_33?.destroy(),
      (this.var_33 = null),
      (this._soundManager = null),
      super.dispose());
  }
  get mainWindow() {
    return this.var_33?.window ?? null;
  }
  get mainWindowHandler() {
    return this.var_33;
  }
  registerUpdateEvents(r) {
    r != null &&
      (r.addEventListener?.(RoomWidgetPlayListEditorEvent.SHOW_PLAYLIST_EDITOR, this._rdd86db3730e638),
      r.addEventListener?.(RoomWidgetPlayListEditorEvent.const_1104, this._r71d88880e2a3bc),
      r.addEventListener?.(RoomWidgetPlayListEditorEvent.INVENTORY_UPDATED, this._r18f262144c3a73),
      r.addEventListener?.(RoomWidgetPlayListEditorEvent.SONG_DISK_INVENTORY_UPDATED, this._ra0abc2abee0fb2),
      r.addEventListener?.(RoomWidgetPlayListEditorEvent.PLAY_LIST_UPDATED, this._r920d401e5ca366),
      r.addEventListener?.(RoomWidgetPlayListEditorEvent.PLAY_LIST_FULL, this._r6e925955ef8ee4),
      r.addEventListener?.(RoomWidgetPlayListEditorNowPlayingEvent.NOW_PLAYING_SONG_CHANGED, this._r46e7164d3392eb),
      r.addEventListener?.(RoomWidgetPlayListEditorNowPlayingEvent.USER_PLAY_SONG, this._r46e7164d3392eb),
      r.addEventListener?.(RoomWidgetPlayListEditorNowPlayingEvent.USER_STOP_SONG, this._r46e7164d3392eb),
      super.registerUpdateEvents(r));
  }
  unregisterUpdateEvents(r) {
    r != null &&
      (r.removeEventListener?.(RoomWidgetPlayListEditorEvent.SHOW_PLAYLIST_EDITOR, this._rdd86db3730e638),
      r.removeEventListener?.(RoomWidgetPlayListEditorEvent.const_1104, this._r71d88880e2a3bc),
      r.removeEventListener?.(RoomWidgetPlayListEditorEvent.INVENTORY_UPDATED, this._r18f262144c3a73),
      r.removeEventListener?.(RoomWidgetPlayListEditorEvent.SONG_DISK_INVENTORY_UPDATED, this._ra0abc2abee0fb2),
      r.removeEventListener?.(RoomWidgetPlayListEditorEvent.PLAY_LIST_UPDATED, this._r920d401e5ca366),
      r.removeEventListener?.(RoomWidgetPlayListEditorEvent.PLAY_LIST_FULL, this._r6e925955ef8ee4),
      r.removeEventListener?.(RoomWidgetPlayListEditorNowPlayingEvent.NOW_PLAYING_SONG_CHANGED, this._r46e7164d3392eb),
      r.removeEventListener?.(RoomWidgetPlayListEditorNowPlayingEvent.USER_PLAY_SONG, this._r46e7164d3392eb),
      r.removeEventListener?.(RoomWidgetPlayListEditorNowPlayingEvent.USER_STOP_SONG, this._r46e7164d3392eb));
  }
  _rbc4755f50a3273(r) {
    let t = 0,
      i = 0,
      s = 0;
    for (let o = 0; o < r.length; o++)
      switch (o % 3) {
        case 0:
          t += r.charCodeAt(o) * 37;
          break;
        case 1:
          i += r.charCodeAt(o) * 37;
          break;
        case 2:
          s += r.charCodeAt(o) * 37;
          break;
      }
    return (
      (t = (t % a._r4f9c470c65c6dd) + a._re56532ea804b80),
      (i = (i % a._r912caf8d33a46d) + a._r936bc9cd8a2163),
      (s = (s % a._r9a282172e16334) + a._ra2c6ded23a2a2d),
      new UnkClass_4210dc(t / 255, i / 255, s / 255)
    );
  }
  _r9dda2f0a86966c(r) {
    let t = this._soundManager?.soundManager?._r6ad19d72b36cea();
    if (t != null) {
      let i = new RoomWidgetPlayListModificationMessage(RoomWidgetPlayListModificationMessage.ADD_TO_PLAYLIST, t.length, r);
      this._r1515e6bde00451?.RoomWidgetLetUserInMessage(i);
    }
  }
  _re207617a61b687(r) {
    let t = new RoomWidgetPlayListModificationMessage(RoomWidgetPlayListModificationMessage.REMOVE_FROM_PLAYLIST, r);
    this._r1515e6bde00451?.RoomWidgetLetUserInMessage(t);
  }
  _r0b9a0770b58ad7() {
    let r = 0;
    this.var_33?._rc10b3de056a064 != null &&
      (r =
        this.var_33._rc10b3de056a064.getAt !== -1
          ? this.var_33._rc10b3de056a064.getAt
          : 0);
    let t = new RoomWidgetPlayListPlayStateMessage(RoomWidgetPlayListPlayStateMessage.TOGGLE_PLAY_PAUSE, this.var_2287, r);
    this._r1515e6bde00451?.RoomWidgetLetUserInMessage(t);
  }
  _r436bff01c15f8f(r) {
    let t = this._soundManager?.soundManager,
      i = t?._r1e81274f76e6d5(UnkConstants_a57980._r91444358db0d2d) ?? -1;
    if (i !== -1) {
      let s = t?._r716cd8f1931469(i);
      s?._r551c6e37b9b07d != null && (s._r551c6e37b9b07d._r754bf5401e8707 = 0);
    }
    t?._r327803e778efff(r, UnkConstants_a57980._r741ad58ad5e51a, 0, 0, 0, 0);
  }
  _rb2da6120579a49() {
    this._soundManager?.soundManager?.stop(UnkConstants_a57980._r741ad58ad5e51a);
  }
  _rac43efd7337d8b(r) {
    return this.assets?.getAssetByName(r)?.content?.clone() ?? null;
  }
  retrieveWidgetImage(r) {
    let t = this._configuration?.getProperty("image.library.playlist.url") ?? "";
    this.assets
      ?.loadAssetFromFile(r, new UnkClass_636490(`${t}${r}.gif`), "image/gif")
      ?.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._re63c2704996dde);
  }
  _r4f2d526fec5f12() {
    let r = new RoomWidgetPlayListUserActionMessage(RoomWidgetPlayListUserActionMessage.const_464);
    (this._r1515e6bde00451?.RoomWidgetLetUserInMessage(r),
      this._catalog?.openCatalogPage(CatalogPageName.CATALOG_PAGE_SONG_DISK_SHOP));
  }
  alertPlayListFull() {
    this.windowManager?.alert(
      "${playlist.editor.alert.playlist.full.title}",
      "${playlist.editor.alert.playlist.full}",
      0,
      this._r079944701b6df1,
    );
  }
  _r079944701b6df1 = n((r, t) => {
    r.dispose();
  }, "_r079944701b6df1");
  _rdd86db3730e638 = n((r) => {
    ((this.var_2287 = r.furniId),
      this.var_33 == null &&
        this._soundManager?.soundManager != null &&
        ((this.var_33 = new oCe(this, this._soundManager.soundManager)),
        this.var_33.window != null && (this.var_33.window.visible = !1)),
      this.var_33?.window != null &&
        !this.var_33.window.visible &&
        (this.var_33.show(),
        this._soundManager?.soundManager?._r6bb71aecc5e807(),
        this._soundManager?.soundManager?._r6ad19d72b36cea()?.requestPlayList()));
  }, "_rdd86db3730e638");
  _r71d88880e2a3bc = n((r) => {
    this.var_33?.window?.visible && this.var_33.hide();
  }, "_r71d88880e2a3bc");
  _r18f262144c3a73 = n((r) => {
    this.var_33?.window?.visible && this._soundManager?.soundManager?._r6bb71aecc5e807();
  }, "_r18f262144c3a73");
  _re63c2704996dde = n((r) => {
    if (r.type === Le.ASSET_LOADER_EVENT_COMPLETE) {
      let t = r.target;
      t != null && this.var_33?.refreshLoadableAsset(t.assetName);
    }
  }, "_re63c2704996dde");
  _ra0abc2abee0fb2 = n((r) => {
    this.var_33?._rd414a252c211c2();
  }, "_ra0abc2abee0fb2");
  _r920d401e5ca366 = n((r) => {
    this.var_33?._rc3e5fddf800389();
  }, "_r920d401e5ca366");
  _r6e925955ef8ee4 = n((r) => {
    this.alertPlayListFull();
  }, "_r6e925955ef8ee4");
  _r46e7164d3392eb = n((r) => {
    this.var_33?._r8ea3cefb0641f7(r);
  }, "_r46e7164d3392eb");
}
