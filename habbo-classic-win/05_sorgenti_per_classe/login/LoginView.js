// Extracted from HabboAirLauncher.deobf.js, line 157068.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/login/LoginView.as
// Obfuscated name: _i7dd80957d27010

class extends Sprite {
  constructor(r) {
    super();
    this._context = r;
    (this.addEventListener(M._scrollBar, this.ChatHistoryScrollBar), this.init());
  }
  static {
    n(this, "LoginView");
  }
  var_1402 = null;
  var_533 = null;
  var_2064 = null;
  _r7cdadefd719cec = null;
  _loginAreaWidth = 640;
  _r51822f13a78386 = null;
  _initialized = !1;
  dispose() {
    (this.var_533?.dispose(), this.var_2064?.dispose());
  }
  init() {
    this._initialized ||
      ((this._initialized = !0), this.addTitleField(), this.addInputFields(), this.addButtons());
  }
  ready() {
    this.var_533 != null && (this.var_533.active = !0);
  }
  addTitleField() {
    this.var_1402 == null &&
      ((this.var_1402 = Tr.createTextField(
        "${connection.login.title}",
        40,
        Tr.HITCH_TEXT_HIGHLIGHT_COLOUR,
        !1,
        !0,
        !1,
        !1,
        _s.const_27,
      )),
      (this.var_1402.x = 0),
      (this.var_1402.y = 0),
      (this.var_1402.width = 500),
      (this.var_1402.multiline = !1),
      (this.var_1402.thickness = 50),
      this.addChild(this.var_1402));
  }
  addInputFields() {
    ((this._r7cdadefd719cec = new UnkSpriteSubclass_6db332(
      this._context,
      this._loginAreaWidth,
      "${connection.login.email}",
      gr.readSOLString(gr.SOL_PROPERTY_LOGIN_NAME) ?? "",
      "${connection.login.missing_credentials}",
      "",
    )),
      this.addChild(this._r7cdadefd719cec),
      (this._r7cdadefd719cec.x = 0),
      (this._r7cdadefd719cec.y = 100),
      (this._r51822f13a78386 = new UnkSpriteSubclass_6db332(
        this._context,
        this._loginAreaWidth,
        "${connection.login.password}",
        gr.restorePassword() ?? "",
        "",
        "",
        !0,
      )),
      this.addChild(this._r51822f13a78386));
  }
  addButtons() {
    ((this.var_2064 = new to(
      to.BUTTON_RED,
      "${generic.cancel}",
      new D(0, 300, 0, 40),
      !0,
      this.onCancel,
      14211288,
    )),
      this.addChild(this.var_2064),
      (this.var_533 = new to(
        to.BUTTON_GREEN,
        "${connection.login.play}",
        new D(0, 300, 0, 40),
        !0,
        this._rc61b63090f2cf1,
        14211288,
      )),
      (this.var_533.active = !1),
      this.addChild(this.var_533));
  }
  _rc61b63090f2cf1 = n((r) => {
    this._context._r81763913c971c2(this._r7cdadefd719cec?.text ?? "", this._r51822f13a78386?.text ?? "");
  }, "_rc61b63090f2cf1");
  onCancel = n((r) => {
    this._context._r515644ef0606ec(cf.SCREEN_ENVIRONMENT);
  }, "onCancel");
  ChatHistoryScrollBar = n((r) => {
    let t = new UnkEventDispatcherWrapperSubclass_05394e(20, 1);
    (t.addEventListener(DeBouncer._rf33144eac61595, this._r3652bb4f2af925), t.start());
  }, "ChatHistoryScrollBar");
  _r3652bb4f2af925 = n((r) => {
    this._r7cdadefd719cec == null ||
      this._r51822f13a78386 == null ||
      this.var_533 == null ||
      this.var_2064 == null ||
      (Tr._re6097546621e3d(this._r7cdadefd719cec, -20, this._r51822f13a78386),
      Tr._r83a636ece2b8d5(this._r7cdadefd719cec, 0, Tr.ANCHOR_LEFT, this._r51822f13a78386),
      Tr._r83a636ece2b8d5(this._r7cdadefd719cec, 0, Tr.ANCHOR_RIGHT, this.var_533),
      Tr._r96e6aacde321c8(this.var_533, 20, this.var_2064));
  }, "_r3652bb4f2af925");
}
