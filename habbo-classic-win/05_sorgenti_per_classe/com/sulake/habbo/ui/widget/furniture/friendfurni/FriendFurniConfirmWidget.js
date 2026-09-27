// Extracted from HabboAirLauncher.deobf.js, line 317433.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/friendfurni/FriendFurniConfirmWidget.as
// Obfuscated name: _ibc4a604f9f0a51

class extends RoomWidgetBase {
  static {
    n(this, "FriendFurniConfirmWidget");
  }
  _stuffId = -1;
  _window = null;
  var_5645 = -1;
  constructor(e, r, t, i) {
    (super(e, r, t, i), (this.confirmWidgetHandler.widget = this));
  }
  dispose() {
    ((this._stuffId = -1), this.destroyWindow(), super.dispose());
  }
  get mainWindow() {
    return this._window;
  }
  open(e, r) {
    (this._window != null &&
      this._window.visible &&
      this._stuffId !== -1 &&
      (this.confirmWidgetHandler.sendLockConfirm(this._stuffId, !1), this.destroyWindow()),
      (this._stuffId = e),
      this.createWindow(),
      this._window != null &&
        (r
          ? ((this._window.findChildByName("other_locked_container").height = this.var_5645),
            (this._window.findChildByName("message").visible = !1))
          : (this._window.findChildByName("other_locked_container").height = 0),
        (this.mainWindow.visible = !0)));
  }
  close(e) {
    e === this._stuffId && this.destroyWindow();
  }
  otherConfirmed(e) {
    this._window != null &&
      e === this._stuffId &&
      ((this._window.findChildByName("lock").assetUri =
        "${image.library.url}furniextras/locked_image.png"),
      (this._window.findChildByName("message").visible = !0));
  }
  get confirmWidgetHandler() {
    return this._handler;
  }
  createWindow() {
    this._window == null &&
      ((this._window = this.windowManager?.buildFromXML(
        this.assets?.getAssetByName("lock_confirm_xml")?.content,
      )),
      this._window != null &&
        ((this._window.procedure = this.windowProcedure),
        (this.var_5645 =
          this._window.findChildByName("other_locked_container")?.height ?? 0),
        this._window.center()));
  }
  destroyWindow() {
    (this._window?.dispose(), (this._window = null));
  }
  windowProcedure = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case "header_button_close":
        case "cancel_button":
          (this.confirmWidgetHandler.sendLockConfirm(this._stuffId, !1), this.destroyWindow());
          break;
        case "confirm_button":
          (this.confirmWidgetHandler.sendLockConfirm(this._stuffId, !0), this.destroyWindow());
          break;
      }
  }, "windowProcedure");
}
