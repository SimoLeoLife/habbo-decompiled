// Estratto da HabboAirLauncher.deobf.js, riga 324475.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/playlisteditor/PlayListEditorItem.as
// Nome offuscato: _ieb1422ae3889af

class a {
  constructor(e, r, t, i) {
    this.var_17 = e;
    this.var_536 = i;
    (this.createWindow(),
      this.setIconState(a.ICON_STATE_NORMAL),
      this.deselect(),
      (this.trackName = r),
      (this.trackAuthor = t),
      (this.diskColor = i));
  }
  static {
    n(this, "PlayListEditorItem");
  }
  static ICON_STATE_NORMAL = "PLEI_ICON_STATE_NORMAL";
  static ICON_STATE_PLAYING = "PLEI_ICON_STATE_PLAYING";
  static BG_COLOR_SELECTED = 14283002;
  static BG_COLOR_UNSELECTED = 15856113;
  _window = null;
  var_4613 = null;
  get window() {
    return this._window;
  }
  get removeButton() {
    return this.var_4613;
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
  setIconState(e) {
    switch (e) {
      case a.ICON_STATE_NORMAL:
        this.diskColor = this.var_536;
        break;
      case a.ICON_STATE_PLAYING: {
        let t = this.var_17.assets?.getAssetByName("icon_notes_small")?.content;
        t != null && (this.diskIconBitmap = t.clone());
        break;
      }
    }
  }
  set diskColor(e) {
    let t = this.var_17.assets?.getAssetByName("icon_cd_small")?.content;
    if (t == null) return;
    let i = t.clone();
    (i.colorTransform(t.rect, e), (this.diskIconBitmap = i));
  }
  set trackName(e) {
    let r = this._window?.getChildByName("song_title_text");
    r != null && (r.text = e);
  }
  set trackAuthor(e) {
    let r = this._window?.getChildByName("song_author_text");
    r != null && (r.text = e);
  }
  createWindow() {
    let e = this.var_17.assets?.getAssetByName("playlisteditor_playlist_item");
    if (e?.content == null) throw new Error("Failed to construct window from XML!");
    if (
      ((this._window = this.var_17.windowManager?.buildFromXML(e.content)),
      this._window == null)
    )
      throw new Error("Failed to construct window from XML!");
    let t = this.var_17.assets?.getAssetByName("icon_arrow_left")?.content;
    (t != null && (this.buttonRemoveBitmap = t),
      this.assignAssetByNameToElement("jb_icon_disc", this._window.getChildByName("song_name_icon_bitmap")),
      this.assignAssetByNameToElement(
        "jb_icon_composer",
        this._window.getChildByName("author_name_icon_bitmap"),
      ));
    let i = this._window.getChildByName("action_buttons");
    i != null &&
      ((i = i.getChildByName("button_border")),
      i != null && (this.var_4613 = i.getChildByName("button_remove_from_playlist")));
  }
  set diskIconBitmap(e) {
    let r = this._window?.getChildByName("disk_image");
    r != null && (r.bitmap = e);
  }
  set buttonRemoveBitmap(e) {
    let s = this._window
      ?.getChildByName("action_buttons")
      ?.getChildByName("button_border")
      ?.getChildByName("button_remove_from_playlist")
      ?.getChildByName("button_remove_from_playlist_image");
    s != null && ((s.bitmap = e.clone()), (s.width = e.width), (s.height = e.height));
  }
  assignAssetByNameToElement(e, r) {
    let i = this.var_17.assets?.getAssetByName(e)?.content;
    r != null && i != null && (r.bitmap = i.clone());
  }
}
