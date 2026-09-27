// Estratto da HabboAirLauncher.deobf.js, riga 323137.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/loadingbar/LoadingBarWidget.as
// Nome offuscato: _id2763166e71c58

class extends RoomWidgetBase {
  static {
    n(this, "LoadingBarWidget");
  }
  _window = null;
  _config;
  constructor(e, r, t, i, s) {
    (super(e, r, t, i), (this._config = s));
  }
  dispose() {
    (this._window?.dispose(),
      (this._window = null),
      (this._config = null),
      super.dispose());
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetLoadingBarUpdateEvent.SHOW, this._r50f7f5d25d01dd),
      e.addEventListener?.(RoomWidgetLoadingBarUpdateEvent.HIDE, this._r99fed5fb1a1a6f),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(RoomWidgetLoadingBarUpdateEvent.SHOW, this._r50f7f5d25d01dd),
      e.removeEventListener?.(RoomWidgetLoadingBarUpdateEvent.HIDE, this._r50f7f5d25d01dd),
      e.removeEventListener?.(RoomWidgetLoadingBarUpdateEvent.HIDE, this._r99fed5fb1a1a6f));
  }
  _r50f7f5d25d01dd = n((e) => {
    e.type !== RoomWidgetLoadingBarUpdateEvent.SHOW ||
      !this.createWindow() ||
      ((this._window.visible = !0), this._window.center());
  }, "_r50f7f5d25d01dd");
  _r99fed5fb1a1a6f = n((e) => {
    e.type === RoomWidgetLoadingBarUpdateEvent.HIDE && (this._window?.dispose(), (this._window = null));
  }, "_r99fed5fb1a1a6f");
  createWindow() {
    if (this._window != null) return !0;
    let e = this.assets?.getAssetByName("room_loading_bar");
    if (
      e == null ||
      ((this._window = this.windowManager?.buildFromXML(e.content)), this._window == null)
    )
      return !1;
    this._window.visible = !1;
    let r = this._window.findChildByName("region");
    r != null;
    let t = this._window.findChildByName("image");
    if (t != null) {
      let i = t.height;
      this._window.scale(0, -i);
    }
    return !0;
  }
  clickHandler(e) {}
}
