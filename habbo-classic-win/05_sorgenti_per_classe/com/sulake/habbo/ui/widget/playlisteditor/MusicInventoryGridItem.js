// Extracted from HabboAirLauncher.deobf.js, line 324181.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/playlisteditor/MusicInventoryGridItem.as
// Obfuscated name: _i87ba68a0359367

class a {
  constructor(e, r, t, i, s) {
    this.var_17 = e;
    this._r0cc746c488199d = r;
    this.var_3076 = t;
    (this.createWindow(),
      this.deselect(),
      i != null && s != null && ((this.trackName = i), (this.diskColor = s)));
  }
  static {
    n(this, "MusicInventoryGridItem");
  }
  static const_1252 = 0;
  static const_348 = 1;
  static BUTTON_STATE_DOWNLOAD = 2;
  static BG_COLOR_SELECTED = 14612159;
  static BG_COLOR_UNSELECTED = 15856113;
  _window = null;
  _rc2d40b55982b1d = null;
  _r073c1ec9cf72f2 = a.const_1252;
  get window() {
    return this._window;
  }
  get _r398f5a77bf5446() {
    return this._r0cc746c488199d;
  }
  get songId() {
    return this.var_3076;
  }
  get gridItemEventProc() {
    return this._rc2d40b55982b1d;
  }
  get playButtonState() {
    return this._r073c1ec9cf72f2;
  }
  update(e, r, t) {
    e === this.var_3076 && ((this.trackName = r), (this.diskColor = t));
  }
  destroy() {
    (this._window?.destroy(), (this._window = null), (this._rc2d40b55982b1d = null));
  }
  select() {
    let e = this._window?.getChildByName("background"),
      r = this._window?.getChildByName("action_buttons"),
      t = this._window?.getChildByName("selected");
    (e != null && (e.color = a.BG_COLOR_SELECTED),
      r != null && (r.visible = !0),
      t != null && (t.visible = !0));
  }
  deselect() {
    let e = this._window?.getChildByName("background"),
      r = this._window?.getChildByName("action_buttons"),
      t = this._window?.getChildByName("selected");
    (e != null && (e.color = a.BG_COLOR_UNSELECTED),
      r != null && (r.visible = !1),
      t != null && (t.visible = !1));
  }
  set diskColor(e) {
    let t = this.var_17.assets?.getAssetByName("icon_cd_big")?.content;
    if (t == null) return;
    let i = t.clone();
    (i.colorTransform(t.rect, e), (this.diskIconBitmap = i));
  }
  set playButtonState(e) {
    let r = "icon_play";
    e === a.const_348 ? (r = "icon_pause") : e === a.BUTTON_STATE_DOWNLOAD && (r = "icon_download");
    let i = this.var_17.assets?.getAssetByName(r)?.content;
    (i != null && (this.buttonPlayPauseBitmap = i), (this._r073c1ec9cf72f2 = e));
  }
  set trackName(e) {
    let r = this._window?.getChildByName("song_title_text");
    r != null && (r.text = e);
  }
  createWindow() {
    let e = this.var_17.assets?.getAssetByName("playlisteditor_music_inventory_item");
    if (e?.content == null) throw new Error("Failed to construct window from XML!");
    if (
      ((this._window = this.var_17.windowManager?.buildFromXML(e.content)),
      this._window == null)
    )
      throw new Error("Failed to construct window from XML!");
    let r = this._window.getChildByName("action_buttons");
    (r != null && (this._rc2d40b55982b1d = r.getChildByName("button_to_playlist")),
      this.assignAssetByNameToElement("title_fader", this._window.getChildByName("title_fader_bitmap")));
    let i = this.var_17.assets?.getAssetByName("icon_arrow")?.content;
    (i != null && (this.buttonToPlaylistBitmap = i), (this.playButtonState = a.const_1252));
  }
  set diskIconBitmap(e) {
    let r = this._window?.getChildByName("disk_image");
    r != null && (r.bitmap = e);
  }
  set buttonToPlaylistBitmap(e) {
    this.assignBitmapDataToButton("button_to_playlist", "image_button_to_playlist", e);
  }
  set buttonPlayPauseBitmap(e) {
    this.assignBitmapDataToButton("button_play_pause", "image_button_play_pause", e);
  }
  assignBitmapDataToButton(e, r, t) {
    let o = this._window?.getChildByName("action_buttons")?.getChildByName(e)?.getChildByName(r);
    o != null && ((o.bitmap = t.clone()), (o.width = t.width), (o.height = t.height));
  }
  assignAssetByNameToElement(e, r) {
    let i = this.var_17.assets?.getAssetByName(e)?.content;
    r != null && i != null && (r.bitmap = i.clone());
  }
}
