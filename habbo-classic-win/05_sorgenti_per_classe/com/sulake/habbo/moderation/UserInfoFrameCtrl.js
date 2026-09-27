// Extracted from HabboAirLauncher.deobf.js, line 248334.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/UserInfoFrameCtrl.as
// Obfuscated name: _i71af277ba73585

class {
  constructor(e, r, t = null) {
    this._main = e;
    this._userId = r;
    this.var_3372 = t;
  }
  static {
    n(this, "UserInfoFrameCtrl");
  }
  _frame = null;
  _disposed = !1;
  _r3df8b5d947d831 = null;
  get disposed() {
    return this._disposed;
  }
  show() {
    ((this._frame = this._main.getXmlWindow("user_info_frame")),
      this._frame != null &&
        ((this._frame.caption = "User Info"),
        this._frame.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose),
        (this._r3df8b5d947d831 = new Km(this._frame, this._main, this.var_3372, null, !0)),
        this._frame.content != null && this._r3df8b5d947d831.load(this._frame.content, this._userId),
        (this._frame.visible = !0)));
  }
  getType() {
    return WindowTracker.TYPE_USERINFO;
  }
  getId() {
    return `${this._userId}`;
  }
  getFrame() {
    return this._frame;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._frame?.destroy(),
      (this._frame = null),
      this._r3df8b5d947d831?.dispose(),
      (this._r3df8b5d947d831 = null),
      (this.var_3372 = null));
  }
  onClose = n((e) => {
    e.type === u.CLICK && this.dispose();
  }, "onClose");
}
