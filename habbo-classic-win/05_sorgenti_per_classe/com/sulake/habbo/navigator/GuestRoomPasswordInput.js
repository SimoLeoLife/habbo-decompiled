// Estratto da HabboAirLauncher.deobf.js, riga 251745.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/GuestRoomPasswordInput.as
// Nome offuscato: _i4b21c7d8f6275a

class {
  constructor(e) {
    this._navigator = e;
  }
  static {
    n(this, "GuestRoomPasswordInput");
  }
  _window = null;
  var_521 = null;
  show(e, r = null) {
    if (
      ((this.var_521 = e),
      this.var_521 == null || (this.createWindow(), this._window == null))
    )
      return;
    (r != null &&
      (r.offset(-(this._window.width / 2), -(this._window.height / 2)),
      this._window.setGlobalPosition(r)),
      (this._window.visible = !0),
      this._window.activate());
    let t = this._window.findChildByName("room_name");
    t != null && (t.text = e.roomName);
    let i = this._window.findChildByName("password_input");
    (i != null && (i.text = ""), this.setInfoText("${navigator.password.info}"));
  }
  showRetry() {
    this.var_521 != null &&
      (this.show(this.var_521), this.setInfoText("${navigator.password.retryinfo}"));
  }
  dispose() {
    (this._window?.dispose(),
      (this._window = null),
      (this._navigator = null),
      (this.var_521 = null));
  }
  createWindow() {
    if (this._window != null) return;
    let e = this._navigator?.assets.getAssetByName("password_input_xml");
    if (
      ((this._window = this._navigator?.windowManager.buildFromXML(e?.content, 2)),
      this._window == null)
    )
      return;
    let r = this._window.findChildByName("try"),
      t = this._window.findChildByName("cancel_region"),
      i = this._window.findChildByTag("close");
    (r?.addEventListener(u.CLICK, this._r8b7b4442ba577b),
      t?.addEventListener(u.CLICK, this.close),
      i?.addEventListener(u.CLICK, this.close));
  }
  setInfoText(e) {
    let r = this._window?.findChildByName("info");
    r != null && (r.caption = e);
  }
  _r8b7b4442ba577b = n((e) => {
    let r = this._window?.findChildByName("password_input");
    r == null ||
      this.var_521 == null ||
      (this._navigator?.goToRoom(this.var_521.flatId, !0, r.text),
      this.hide());
  }, "_r8b7b4442ba577b");
  close = n((e) => {
    this._window != null && (this._window.dispose(), (this._window = null));
  }, "close");
  hide() {
    this._window != null && (this._window.visible = !1);
  }
}
