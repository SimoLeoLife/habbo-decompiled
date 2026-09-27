// Extracted from HabboAirLauncher.deobf.js, line 250330.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/StartPanelCtrl.as
// Obfuscated name: _i257ad17760d265

class {
  constructor(e) {
    this._main = e;
  }
  static {
    n(this, "StartPanelCtrl");
  }
  _frame = null;
  _userId = 0;
  _isGuestRoom = !1;
  var_2440 = 0;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0), this._frame?.dispose(), (this._frame = null), (this._main = null));
  }
  userSelected(e, r) {
    if (this._frame == null) return;
    ((this._userId = e), this._frame.findChildByName("userinfo_but")?.enable());
    let t = this._frame.findChildByName("userinfo_but")?.findChildByName("offence_name");
    t != null && ((t.textColor = 0), (t.caption = `User info: ${r}`));
  }
  guestRoomEntered(e) {
    if (this._frame == null) return;
    this._frame.findChildByName("room_tool_but")?.enable();
    let r = this._frame.findChildByName("room_tool_but")?.findChildByName("offence_name");
    (r != null && (r.textColor = 0),
      this.enableChatlogButton(),
      (this._isGuestRoom = !0),
      (this.var_2440 = e.guestRoomId));
  }
  roomExited() {
    this._frame != null &&
      (this._frame.findChildByName("room_tool_but")?.disable(),
      this._frame.findChildByName("chatlog_but")?.disable());
  }
  show() {
    if (this._frame == null) {
      if (((this._frame = this._main.getXmlWindow("start_panel")), this._frame == null))
        return;
      let e = this._frame.findChildByName("room_tool_but"),
        r = this._frame.findChildByName("chatlog_but"),
        t = this._frame.findChildByName("ticket_queue_but"),
        i = this._frame.findChildByName("userinfo_but");
      (e?.addEventListener(u.CLICK, this._r776f1ae7bb3c30),
        r?.addEventListener(u.CLICK, this._raeacb7171830b6),
        t?.addEventListener(u.CLICK, this._r4672e04320116d),
        i?.addEventListener(u.CLICK, this._r009b906a7022f5),
        e?.addEventListener(u.OVER, this._rad325cc53260a0),
        r?.addEventListener(u.OVER, this._rad325cc53260a0),
        t?.addEventListener(u.OVER, this._rad325cc53260a0),
        i?.addEventListener(u.OVER, this._rad325cc53260a0),
        e?.addEventListener(u.OUT, this.onMousetOut),
        r?.addEventListener(u.OUT, this.onMousetOut),
        t?.addEventListener(u.OUT, this.onMousetOut),
        i?.addEventListener(u.OUT, this.onMousetOut),
        i?.disable(),
        e?.disable(),
        r?.disable(),
        this._main.initMsg?._rcb8641858fa2ef || t?.disable(),
        this._main.initMsg?._r4b53b923dcf15f || r?.disable());
      for (let s of ["userinfo_but", "room_tool_but", "chatlog_but"]) {
        let o = this._frame.findChildByName(s)?.findChildByName("offence_name");
        o != null && (o.textColor = 6710886);
      }
    }
    this._frame.visible = !0;
  }
  enableChatlogButton() {
    if (this._frame != null && this._main.initMsg?._r4b53b923dcf15f) {
      this._frame.findChildByName("chatlog_but")?.enable();
      let e = this._frame.findChildByName("chatlog_but")?.findChildByName("offence_name");
      e != null && (e.textColor = 0);
    }
  }
  _rad325cc53260a0 = n((e) => {
    let r = e.window;
    r == null ||
      !r.isEnabled() ||
      (r.findChildByName("mouseover") && (r.findChildByName("mouseover").visible = !0));
  }, "_rad325cc53260a0");
  onMousetOut = n((e) => {
    let r = e.window;
    r != null && r.findChildByName("mouseover") && (r.findChildByName("mouseover").visible = !1);
  }, "onMousetOut");
  _r776f1ae7bb3c30 = n((e) => {
    this._main._r2512b8a3ecad84.show(
      new uQ(this._main, this.var_2440),
      this._frame,
      !1,
      !1,
      !0,
    );
  }, "_r776f1ae7bb3c30");
  _raeacb7171830b6 = n((e) => {
    this._main._r2512b8a3ecad84.show(
      new N1(
        new class_2523(this._isGuestRoom ? 0 : 1, this.var_2440),
        this._main,
        WindowTracker.const_1136,
        this.var_2440,
      ),
      this._frame,
      !1,
      !1,
      !0,
    );
  }, "_raeacb7171830b6");
  _r009b906a7022f5 = n((e) => {
    this._main._r2512b8a3ecad84.show(
      new UserInfoFrameCtrl(this._main, this._userId),
      this._frame,
      !1,
      !1,
      !0,
    );
  }, "_r009b906a7022f5");
  _r4672e04320116d = n((e) => {
    this._main._r74ed78993f8dd6.init();
  }, "_r4672e04320116d");
}
