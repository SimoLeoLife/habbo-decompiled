// Extracted from HabboAirLauncher.deobf.js, line 324396.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/playlisteditor/MusicInventoryStatusView.as
// Obfuscated name: _i4b0a9d1bdc53dd

class a {
  constructor(e, r) {
    this.var_17 = e;
    this._container = r;
    (this.createWindows(), this.hide());
  }
  static {
    n(this, "MusicInventoryStatusView");
  }
  static BUY_MORE = "MISV_BUY_MORE";
  static PREVIEW_PLAYING = "MISV_PREVIEW_PLAYING";
  _r6deb1da5f9a27b = new B();
  var_77 = "";
  _r5f363e1d0bd3d8 = null;
  _r4580d40831a834 = null;
  destroy() {
    for (let e of this._r6deb1da5f9a27b.getValues()) e.destroy();
    (this._r6deb1da5f9a27b.dispose(), (this._r5f363e1d0bd3d8 = null), (this._r4580d40831a834 = null));
  }
  show() {
    this._container.visible = !0;
  }
  hide() {
    this._container.visible = !1;
  }
  _r526fa0c167a3bf(e) {
    this._container.numChildren > 0 && this._container.removeChildAt(0);
    let r = this._r6deb1da5f9a27b.getValue(e) ?? null;
    r != null && (this._container.addChildAt(r, 0), (this.var_77 = e));
  }
  set _r504109a443ce10(e) {
    this._r5f363e1d0bd3d8 != null && (this._r5f363e1d0bd3d8.text = e);
  }
  set authorName(e) {
    this._r4580d40831a834 != null && (this._r4580d40831a834.text = e);
  }
  setPreviewPlayingBackgroundImage(e, r = !0) {
    (this.blitBackgroundImage(a.PREVIEW_PLAYING, "preview_play_background_image", e),
      r && e != null && e.dispose());
  }
  setGetMoreMusicBackgroundImage(e, r = !0) {
    (this.blitBackgroundImage(a.BUY_MORE, "get_more_music_background_image", e),
      r && e != null && e.dispose());
  }
  createWindows() {
    let e = this.var_17.assets?.getAssetByName("playlisteditor_inventory_subwindow_play_preview"),
      r = this.var_17.windowManager?.buildFromXML(e?.content);
    (r != null &&
      (this._r6deb1da5f9a27b.add(a.PREVIEW_PLAYING, r),
      (this._r5f363e1d0bd3d8 = r.getChildByName("preview_play_track_name")),
      (this._r4580d40831a834 = r.getChildByName("preview_play_author_name")),
      r.getChildByName("stop_preview_button")?.addEventListener(u.CLICK, this._r9cdbe4fb32eef2),
      this.setPreviewPlayingBackgroundImage(this.var_17._rac43efd7337d8b(class_3939.PREVIEW_BACKGROUND_LOADABLE_ASSET)),
      this.assignAssetByNameToElement("jb_icon_disc", r.getChildByName("song_name_icon_bitmap")),
      this.assignAssetByNameToElement("jb_icon_composer", r.getChildByName("author_name_icon_bitmap"))),
      (e = this.var_17.assets?.getAssetByName("playlisteditor_inventory_subwindow_get_more_music")),
      (r = this.var_17.windowManager?.buildFromXML(e?.content)),
      r != null &&
        (this._r6deb1da5f9a27b.add(a.BUY_MORE, r),
        r.getChildByName("open_catalog_button")?.addEventListener(u.CLICK, this.onOpenCatalogButtonClicked),
        this.setGetMoreMusicBackgroundImage(this.var_17._rac43efd7337d8b(class_3939.GET_MORE_MUSIC_BACKGROUND_LOADABLE_ASSET))));
  }
  blitBackgroundImage(e, r, t) {
    let s = (this._r6deb1da5f9a27b.getValue(e) ?? null)?.getChildByName(r);
    if (s == null || t == null) return;
    let o = new A(s.width, s.height, !1, 4294967295);
    (o.copyPixels(t, t.rect, new E(0, 0)), (s.bitmap = o));
  }
  assignAssetByNameToElement(e, r) {
    let i = this.var_17.assets?.getAssetByName(e)?.content;
    r != null && i != null && (r.bitmap = i.clone());
  }
  onOpenCatalogButtonClicked = n((e) => {
    this.var_17._r4f2d526fec5f12();
  }, "onOpenCatalogButtonClicked");
  _r9cdbe4fb32eef2 = n((e) => {
    this.var_17._rb2da6120579a49();
  }, "_r9cdbe4fb32eef2");
}
