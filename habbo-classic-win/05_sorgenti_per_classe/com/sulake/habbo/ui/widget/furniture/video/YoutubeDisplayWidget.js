// Estratto da HabboAirLauncher.deobf.js, riga 319571.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/video/YoutubeDisplayWidget.as
// Nome offuscato: _iabdfb93a7546d4

class extends RoomWidgetBase {
  static {
    n(this, "YoutubeDisplayWidget");
  }
  _window = null;
  _roomObject = null;
  constructor(e, r, t, i) {
    super(e, r, t, i);
  }
  get mainWindow() {
    return this._window;
  }
  _ra8ff50865900f0(e, r = null) {
    ((this._roomObject = e),
      this.createWindow(),
      this._window != null &&
        (this._rba98609e054b9c(r),
        (this._window.visible = !0),
        this._window.center(),
        this._window.activate()));
  }
  hide(e) {
    this._roomObject === e &&
      (this._window?.dispose(), (this._window = null), (this._roomObject = null));
  }
  dispose() {
    this.disposed || (this.hide(this._roomObject), super.dispose());
  }
  createWindow() {
    if (this._window != null) return;
    let e = this.assets?.getAssetByName(this.assetName);
    e?.content != null &&
      ((this._window = this.windowManager?.buildFromXML(e.content)),
      this._window != null &&
        ((this._window.procedure = this.windowProcedure),
        (this._window.caption = this._r6b6e5a29b89555)));
  }
  _rba98609e054b9c(e) {
    if (this._window == null) return;
    let r = this._window.findChildByName("video_wrapper"),
      t = this._window.findChildByName("no_videos_label"),
      i = this._window.findChildByName("video_id_editor"),
      s = this._window.findChildByName("video_id"),
      o = this._window.findChildByName("playlists"),
      d = this._window.findChildByName("right_pane"),
      c = this._window.findChildByName("playlist_prev"),
      f = this._window.findChildByName("playlist_next");
    if (
      (r != null && (r.visible = !1),
      t != null &&
        ((t.visible = !0),
        (t.text =
          e == null
            ? `${this._r6b6e5a29b89555} playback is not supported in this client yet.`
            : `${this._r6b6e5a29b89555} playback is not supported in this client yet.
${e}`)),
      o != null)
    )
      for (; o.numListItems > 0;) o.removeListItemAt(0)?.dispose();
    if ((c?.disable(), f?.disable(), d != null && this.assetName === "video_viewer_xml")) {
      d.visible = !1;
      let l = this._window.findChildByName("video_background");
      l != null && (l.width = this._window.width - 20);
    }
    (i != null && (i.visible = e != null), s != null && ((s.caption = e ?? ""), s.disable()));
  }
  windowProcedure = n((e, r) => {
    e.type !== u.CLICK ||
      this._roomObject == null ||
      (r.name === "header_button_close" && this.hide(this._roomObject));
  }, "windowProcedure");
}
