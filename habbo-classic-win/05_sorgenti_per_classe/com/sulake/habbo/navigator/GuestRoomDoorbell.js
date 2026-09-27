// Estratto da HabboAirLauncher.deobf.js, riga 251658.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/GuestRoomDoorbell.as
// Nome offuscato: _i184729ad7333de

class {
  constructor(e) {
    this._navigator = e;
  }
  static {
    n(this, "GuestRoomDoorbell");
  }
  _window = null;
  var_521 = null;
  var_4273 = !1;
  show(e, r = null, t = !1) {
    if (
      e == null ||
      ((this.var_521 = e),
      (this.var_4273 = t),
      this.createWindow(),
      this._window == null)
    )
      return;
    (r != null &&
      (r.offset(-(this._window.width / 2), -(this._window.height / 2)),
      this._window.setGlobalPosition(r)),
      (this._window.visible = !0),
      this._window.activate());
    let i = this._window.findChildByName("room_name");
    (i != null && (i.text = e.roomName),
      this.var_4273
        ? (this.setText("info", "${navigator.doorbell.waiting}"),
          this.setText("cancel", "${navigator.doorbell.button.cancel.entering}"),
          this.showButton("ring", !1))
        : (this.setText("info", "${navigator.doorbell.info}"),
          this.setText("cancel", "${generic.cancel}"),
          this.showButton("ring", !0)));
  }
  showWaiting() {
    this.var_521 != null && this.show(this.var_521, null, !0);
  }
  showNoAnswer() {
    this._window != null &&
      ((this._window.visible = !0),
      this._window.activate(),
      this.setText("info", "${navigator.doorbell.no.answer}"),
      this.showButton("ring", !1));
  }
  dispose() {
    (this._window?.dispose(),
      (this._window = null),
      (this._navigator = null),
      (this.var_521 = null));
  }
  hide() {
    this._window != null && (this._window.visible = !1);
  }
  showButton(e, r) {
    let t = this._window?.findChildByName(e);
    t != null && (t.visible = r);
  }
  createWindow() {
    if (this._window != null) return;
    let e = this._navigator?.assets.getAssetByName("doorbell_xml");
    if (
      ((this._window = this._navigator?.windowManager.buildFromXML(e?.content, 2)),
      this._window == null)
    )
      return;
    let r = this._window.findChildByName("ring"),
      t = this._window.findChildByName("cancel_region"),
      i = this._window.findChildByTag("close");
    (r?.addEventListener(u.CLICK, this._ref8078dda33df4),
      t?.addEventListener(u.CLICK, this.close),
      i?.addEventListener(u.CLICK, this.close));
  }
  setText(e, r) {
    let t = this._window?.findChildByName(e);
    t != null && (t.caption = r);
  }
  _ref8078dda33df4 = n((e) => {
    this.var_521 != null &&
      (this._navigator?.goToRoom(this.var_521.flatId, !0), this.hide());
  }, "_ref8078dda33df4");
  close = n((e) => {
    this._window != null &&
      (this.var_4273 && this._navigator?.send(new class_2551()),
      this._window.dispose(),
      (this._window = null));
  }, "close");
}
