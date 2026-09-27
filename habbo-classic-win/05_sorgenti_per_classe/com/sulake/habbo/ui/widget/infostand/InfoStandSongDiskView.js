// Extracted from HabboAirLauncher.deobf.js, line 321886.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/InfoStandSongDiskView.as
// Obfuscated name: _i388c88cac39fb0

class extends X1 {
  static {
    n(this, "InfoStandSongDiskView");
  }
  var_3076 = -1;
  constructor(e, r) {
    super(e, r);
  }
  update(e) {
    (super.update(e), (this.var_3076 = this.getSongIdFromExtraParam(e.extraParam)));
  }
  updateSongInfo(e) {
    e.type === RoomWidgetSongUpdateEvent.SONG_DATA_RECEIVED &&
      e.songId === this.var_3076 &&
      ((this.trackName = e._r504109a443ce10), (this.authorName = e._rf0d8f6a38f8f2c));
  }
  createWindow(e) {
    let r = this.var_17?.assets?.getAssetByName("songdisk_view");
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
  set trackName(e) {
    let t = this._r99fda1d9e9f6a9
      ?.getListItemByName("trackname_container")
      ?.getChildByName("track_name_text");
    t != null && ((t.text = e), (t.visible = !0), (t.height = t.textHeight + 5), this.updateWindow());
  }
  set authorName(e) {
    let t = this._r99fda1d9e9f6a9
      ?.getListItemByName("creatorname_container")
      ?.getChildByName("track_creator_text");
    t != null && ((t.text = e), (t.visible = !0), (t.height = t.textHeight + 5), this.updateWindow());
  }
  getSongIdFromExtraParam(e) {
    if (e != null) {
      let r = e.substr(RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_SONGDISK.length, e.length);
      return Number.parseInt(r, 10);
    }
    return -1;
  }
}
