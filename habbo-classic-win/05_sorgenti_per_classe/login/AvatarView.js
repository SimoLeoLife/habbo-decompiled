// Estratto da HabboAirLauncher.deobf.js, riga 156634.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/login/AvatarView.as
// Nome offuscato: _idef684cb055ee2

class extends Sprite {
  constructor(r) {
    super();
    this._context = r;
    (this.init(), this.addEventListener(M._scrollBar, this.ChatHistoryScrollBar));
  }
  static {
    n(this, "AvatarView");
  }
  var_1402 = null;
  var_533 = null;
  var_2064 = null;
  _initialized = !1;
  _rd209a96a39e57b = [];
  _spaceBetweenImages = 10;
  _rfa880eec4954ff = "";
  _rcbd72301749d81 = null;
  _re2b835e51ac513 = null;
  _rb9678cbbdfb915 = null;
  _rae18e668311e09 = 0;
  _r3a5389d52ead36 = [];
  var_1013 = null;
  _avatarGlow = null;
  set baseUrl(r) {
    this._rfa880eec4954ff = r;
  }
  dispose() {
    (this.var_533?.dispose(), this.var_2064?.dispose());
  }
  init() {
    if (((this._rae18e668311e09 = 0), this._initialized)) return;
    ((this._initialized = !0), (this._rcbd72301749d81 = new Sprite()), this.addChild(this._rcbd72301749d81));
    let r = Tr.createBalloon(640, 100, 0, !1, 995918, "none");
    (this._rcbd72301749d81.addChild(r),
      (this._rcbd72301749d81.y = 180),
      (this._re2b835e51ac513 = Tr.createTextField("", 18, Tr.HITCH_TEXT_BODY_COLOUR, !1)),
      (this._rb9678cbbdfb915 = Tr.createTextField("", 20, 16777215, !1, !0, !1, !1)),
      (this._rb9678cbbdfb915.width = 260),
      (this._rb9678cbbdfb915.x = 50),
      (this._re2b835e51ac513.x = 50),
      (this._re2b835e51ac513.width = 260),
      this._rcbd72301749d81.addChild(this._re2b835e51ac513),
      this._rcbd72301749d81.addChild(this._rb9678cbbdfb915),
      Tr._re6097546621e3d(r, 15 - r.height, this._rb9678cbbdfb915, 20, this._re2b835e51ac513),
      (this._avatarGlow = new _i3a5c6f457acdad(_i4406f2f280a16f("avatar_glow_png"))),
      (this._avatarGlow.blendMode = ie.ADD),
      (this._avatarGlow.visible = !1),
      (this.var_1013 = new _i3a5c6f457acdad(_i4406f2f280a16f("avatar_halo_png"))),
      (this.var_1013.blendMode = ie._r107d7b1bac2f9f),
      (this.var_1013.visible = !1),
      this.addTitleField(),
      this.addChild(this.var_1013),
      this.addChild(this._avatarGlow),
      this.addButtons());
  }
  _r5966d2d3504a65(r) {
    ((this._r3a5389d52ead36 = []), (this._rd209a96a39e57b = r));
    for (let t = 0; t < r.length; t++) {
      let i = r[t];
      if (t > 6) break;
      let s = new Sprite(),
        o = new _i3a5c6f457acdad(_i4406f2f280a16f("placeholder_avatar_png"));
      (s.addChild(o),
        this._r3a5389d52ead36.push(s),
        this.addChild(s),
        (s.name = String(t)),
        s.addEventListener(_ifd7c1208e3417e.CLICK, this._r47706054ec8552),
        (s.x = (t + 1) * this._spaceBetweenImages + t * 100),
        (s.y = 50),
        this._r1fc212f444f396(s, o, i));
    }
    r.length > 0
      ? (this.updateDescription(),
        (this._rae18e668311e09 = 0),
        this.var_533 != null && (this.var_533.active = !0),
        this._avatarGlow != null && (this._avatarGlow.visible = !0),
        this.var_1013 != null && (this.var_1013.visible = !0),
        this._r5b23125648139f(this._r3a5389d52ead36[this._rae18e668311e09]))
      : this.var_533 != null && (this.var_533.active = !1);
  }
  async _r1fc212f444f396(r, t, i) {
    try {
      let s = await Uy._r6dc693b333c923(this.getAvatarUrl(i));
      if (s == null) return;
      (r.contains(t) && r.removeChild(t),
        r.addChild(new _i3a5c6f457acdad(s)),
        this._avatarGlow != null && (this._avatarGlow.visible = !0),
        this.var_1013 != null && (this.var_1013.visible = !0),
        this._r5b23125648139f(this._r3a5389d52ead36[this._rae18e668311e09]));
    } catch (s) {
      this._re1f419fcfec0a4(new ErrorEvent_(ErrorEvent_.ERROR, !1, !1, s instanceof Error ? s.message : String(s)));
    }
  }
  addTitleField() {
    this.var_1402 == null &&
      ((this.var_1402 = Tr.createTextField(
        "${connection.login.account.choose}",
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
        this._r058b77f59e5c26,
        14211288,
      )),
      (this.var_533.active = !1),
      this.addChild(this.var_533));
  }
  _re1f419fcfec0a4(r) {}
  updateDescription() {
    if (this._rd209a96a39e57b.length === 0 || this._rb9678cbbdfb915 == null || this._re2b835e51ac513 == null)
      return;
    let r = this._rd209a96a39e57b[this._rae18e668311e09];
    r != null && ((this._rb9678cbbdfb915.text = r.name), (this._re2b835e51ac513.text = r.motto));
  }
  _r5b23125648139f(r) {
    if (this._avatarGlow == null || this.var_1013 == null) return;
    let t = r.x + r.width / 2,
      i = r.y + r.height / 2;
    ((this._avatarGlow.x = t - this._avatarGlow.width / 2),
      (this._avatarGlow.y = i - this._avatarGlow.height / 2 + 15),
      (this.var_1013.x = t - this.var_1013.width / 2),
      (this.var_1013.y = i + this.var_1013.height - 40));
  }
  getAvatarUrl(r) {
    let t = `${this._rfa880eec4954ff}/habbo-imaging/avatarimage?user=${r.name}`;
    return (
      (this._rfa880eec4954ff.includes("local") || this._rfa880eec4954ff.includes("127.0.0.1")) &&
        (t = `https://www.habbo.com/habbo-imaging/avatarimage?size=m&figure=${r.figure}&direction=2`),
      t
    );
  }
  _r47706054ec8552 = n((r) => {
    let t = r.currentTarget;
    ((this._rae18e668311e09 = Number.parseInt(t?.name ?? "0", 10) || 0),
      this.updateDescription(),
      this._r5b23125648139f(this._r3a5389d52ead36[this._rae18e668311e09]),
      this.var_533 != null && (this.var_533.active = !0));
  }, "_r47706054ec8552");
  onCancel = n((r) => {
    this._context._r515644ef0606ec(cf.SCREEN_LOGIN);
  }, "onCancel");
  _r058b77f59e5c26 = n((r) => {
    let t = this._rd209a96a39e57b[this._rae18e668311e09];
    t != null && this._context._ra107d59ede6be8(t);
  }, "_r058b77f59e5c26");
  ChatHistoryScrollBar = n((r) => {
    let t = new _i05394ecc0c0c4d(20, 1);
    (t.addEventListener(DeBouncer._rf33144eac61595, this._r3652bb4f2af925), t.start());
  }, "ChatHistoryScrollBar");
  _r3652bb4f2af925 = n((r) => {
    this.var_533 == null ||
      this.var_2064 == null ||
      this._rcbd72301749d81 == null ||
      (Tr._r4784e5a70c8e5c(this.var_533, 20, this._rcbd72301749d81),
      Tr._r83a636ece2b8d5(this._rcbd72301749d81, 0, Tr.ANCHOR_RIGHT, this.var_533),
      Tr._r96e6aacde321c8(this.var_533, 20, this.var_2064));
  }, "_r3652bb4f2af925");
}
