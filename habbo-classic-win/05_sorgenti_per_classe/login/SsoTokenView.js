// Extracted from HabboAirLauncher.deobf.js, line 157178.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/login/SsoTokenView.as
// Obfuscated name: _i55124e2029b352

class extends Sprite {
  constructor(r) {
    super();
    this._context = r;
    (this.addEventListener(M._scrollBar, this.ChatHistoryScrollBar), this.init());
  }
  static {
    n(this, "SsoTokenView");
  }
  var_1402 = null;
  var_533 = null;
  var_2064 = null;
  _loginAreaWidth = 640;
  var_1051 = null;
  _initialized = !1;
  dispose() {
    (this.var_1051?.removeEventListener(M._ra3d93f66ba77c2, this._r6b4fb5c56c0663),
      this.var_1051?.removeEventListener(KeyboardControl._re9c7558bf2dcfb, this.onInputChange));
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
    ((this.var_1051 = new UnkSpriteSubclass_6db332(
      this._context,
      this._loginAreaWidth,
      "${connection.login.code.prompt}",
      "",
      "${connection.login.useTicket}",
      "",
      !0,
    )),
      this.addChild(this.var_1051),
      this.var_1051.addEventListener(M._ra3d93f66ba77c2, this._r6b4fb5c56c0663),
      this.var_1051.addEventListener(KeyboardControl._re9c7558bf2dcfb, this.onInputChange),
      (this.var_1051.x = 0),
      (this.var_1051.y = 100));
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
        this._r7d205e41417a24,
        14211288,
      )),
      (this.var_533.active = !1),
      this.addChild(this.var_533));
  }
  validateToken(r) {
    let t = this.var_1051?.text ?? "";
    if (t.length === 0) return !1;
    let i = t.split(".");
    if (i.length !== 3 && i.length !== 4) return !1;
    let s = String(i[0] ?? "").replace("hh", "");
    return (
      (s = s.replace("br", "pt")),
      (s = s.replace("us", "en")),
      r.push(s),
      r.push(String(i[1] ?? "")),
      r.push(String(i[2] ?? "")),
      !0
    );
  }
  onInputChange = n((r) => {
    r.charCode === Fi.ENTER && this.var_533?.active && this._r7d205e41417a24(null);
  }, "onInputChange");
  _r6b4fb5c56c0663 = n((r) => {
    let t = [];
    this.validateToken(t)
      ? (this._context.updateEnvironment(t[0] ?? "", !0),
        this.var_533 != null && (this.var_533.active = !0))
      : this.var_533 != null && (this.var_533.active = !1);
  }, "_r6b4fb5c56c0663");
  _r7d205e41417a24 = n((r) => {
    let t = [];
    this.validateToken(t)
      ? this._context._r817d4a7a16119e(t[0] ?? "", `${t[1] ?? ""}.${t[2] ?? ""}`)
      : this.var_533 != null && (this.var_533.active = !1);
  }, "_r7d205e41417a24");
  onCancel = n((r) => {
    this._context._r515644ef0606ec(cf.SCREEN_ENVIRONMENT);
  }, "onCancel");
  ChatHistoryScrollBar = n((r) => {
    let t = new UnkEventDispatcherWrapperSubclass_05394e(20, 1);
    (t.addEventListener(DeBouncer._rf33144eac61595, this._r3652bb4f2af925), t.start());
  }, "ChatHistoryScrollBar");
  _r3652bb4f2af925 = n((r) => {
    this.var_1051 == null ||
      this.var_533 == null ||
      this.var_2064 == null ||
      (Tr._r83a636ece2b8d5(this.var_1051, 0, Tr.ANCHOR_RIGHT, this.var_533),
      Tr._r83a636ece2b8d5(
        this.var_533,
        -20 - this.var_2064.width,
        Tr.ANCHOR_LEFT,
        this.var_2064,
      ));
  }, "_r3652bb4f2af925");
}
