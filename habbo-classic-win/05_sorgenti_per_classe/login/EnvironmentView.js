// Extracted from HabboAirLauncher.deobf.js, line 156894.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/login/EnvironmentView.as
// Obfuscated name: _i4fed3af11e97f2

class a extends Sprite {
  constructor(r) {
    super();
    this._context = r;
    this.addEventListener(M._scrollBar, this.ChatHistoryScrollBar);
  }
  static {
    n(this, "EnvironmentView");
  }
  static ITEMS_PER_ROW = 9;
  static THUMB_SIZE = 160;
  static THUMB_SCALE = 0.5;
  static SPACING = 10;
  _environmentImages = [];
  var_1402 = null;
  var_2333 = null;
  _environmentName = null;
  var_928 = 0;
  var_1093 = null;
  var_2942 = null;
  _rdcaf3c124b707a = [];
  var_1033 = null;
  _environmentTypes = [];
  _initialized = !1;
  var_1931 = null;
  get disposed() {
    return this._context == null;
  }
  get environmentId() {
    return this._environmentTypes[this.var_928] ?? "";
  }
  get environmentAvailable() {
    let r = this._context?.getProperty(HabboProperty.const_682) ?? "";
    return this._environmentTypes.indexOf(r) > -1;
  }
  dispose() {
    this.disposed ||
      (this.var_1093?.dispose(),
      this.var_2942?.dispose(),
      (this._environmentImages = []),
      (this._context = null));
  }
  init() {
    this._initialized ||
      ((this._initialized = !0),
      this._environmentTypes.length === 0 && this.initEnvironmentImages(),
      this.updateEnvironment(),
      this.initView());
  }
  updateEnvironment() {
    let r = this._context?.getProperty(HabboProperty.const_682) ?? "",
      t = this._environmentTypes.indexOf(r);
    (t === -1 ? (this.var_928 = 0) : (this.var_928 = t), this.chooseEnvironment());
  }
  initEnvironmentImages() {
    ((this._environmentTypes = (this._context?.getProperty("live.environment.list") ?? "")
      .split("/")
      .filter((r) => r !== "")),
      this._environmentImages.push(new UnkClass_3a5c6f(_i4406f2f280a16f("flag_icons_en_png"))),
      this._environmentImages.push(new UnkClass_3a5c6f(_i4406f2f280a16f("flag_icons_pt_png"))),
      this._environmentImages.push(new UnkClass_3a5c6f(_i4406f2f280a16f("flag_icons_de_png"))),
      this._environmentImages.push(new UnkClass_3a5c6f(_i4406f2f280a16f("flag_icons_es_png"))),
      this._environmentImages.push(new UnkClass_3a5c6f(_i4406f2f280a16f("flag_icons_fi_png"))),
      this._environmentImages.push(new UnkClass_3a5c6f(_i4406f2f280a16f("flag_icons_fr_png"))),
      this._environmentImages.push(new UnkClass_3a5c6f(_i4406f2f280a16f("flag_icons_it_png"))),
      this._environmentImages.push(new UnkClass_3a5c6f(_i4406f2f280a16f("flag_icons_nl_png"))),
      this._environmentImages.push(new UnkClass_3a5c6f(_i4406f2f280a16f("flag_icons_tr_png"))),
      this._environmentImages.push(new UnkClass_3a5c6f(_i4406f2f280a16f("flag_icons_dev_png"))));
  }
  initView() {
    (this.addTitleField(),
      (this.var_2333 = Tr.createBalloon(640, 100, 0, !1, 995918, "none")),
      (this.var_2333.visible = !1),
      this.addChild(this.var_2333),
      (this.var_1931 = new Sprite()),
      this.addChild(this.var_1931),
      (this.var_1033 = new UnkClass_3a5c6f(_i4406f2f280a16f("flags_icon_selected_png"))),
      this.var_1931.addChild(this.var_1033),
      (this.var_1931.scaleX = a.THUMB_SCALE),
      (this.var_1931.scaleY = a.THUMB_SCALE));
    let r = 100;
    for (let t = 0; t < this._environmentImages.length; t++) {
      let i = new Sprite(),
        s = this._environmentImages[t];
      (s != null && i.addChild(s),
        this.addChild(i),
        this._rdcaf3c124b707a.push(i),
        (i.name = String(t)),
        i.addEventListener(UnkClass_fd7c12.CLICK, this._r3723cdd9acc947),
        (i.scaleX = a.THUMB_SCALE),
        (i.scaleY = a.THUMB_SCALE));
      let o = a.THUMB_SCALE * a.THUMB_SIZE,
        d = a.THUMB_SCALE * a.SPACING,
        c = t % a.ITEMS_PER_ROW,
        f = Math.floor(t / a.ITEMS_PER_ROW);
      ((i.x = c * o + c * d), (i.y = r + f * o + f * d));
    }
    ((this._environmentName = Tr.createTextField("Title", 20, 16777215, !1, !0, !1, !1)),
      (this._environmentName.width = 260),
      (this._environmentName.y = 300),
      this.addChild(this._environmentName),
      (this.var_2942 = new to(
        to.BUTTON_GREEN,
        "${connection.login.useTicket}",
        new D(0, 300, 0, 40),
        !0,
        this._re4b82a40e45f0b,
      )),
      this.addChild(this.var_2942),
      this.chooseEnvironment());
  }
  addTitleField() {
    this.var_1402 == null &&
      ((this.var_1402 = Tr.createTextField(
        "${connection.login.environment.choose}",
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
  chooseEnvironment() {
    let r = this._rdcaf3c124b707a[this.var_928];
    r == null ||
      this.var_1931 == null ||
      ((this.var_1931.x = r.x - (this.var_1931.width - r.width) / 2 - 1),
      (this.var_1931.y = r.y - (this.var_1931.height - r.height) / 2 - 1),
      (this.var_1931.visible = !0),
      this.var_1093 != null && (this.var_1093.active = !0),
      this.updateDescription());
  }
  updateDescription() {
    if (this._environmentName == null || this._context == null) return;
    let r = this._environmentTypes[this.var_928] ?? "";
    this._environmentName.text = this._context.getProperty(`connection.info.name.${r}`);
  }
  _r3723cdd9acc947 = n((r) => {
    let t = r.currentTarget;
    ((this.var_928 = Number.parseInt(t?.name ?? "0", 10) || 0),
      this.chooseEnvironment(),
      this._context?.updateEnvironment(this._environmentTypes[this.var_928] ?? "", !0),
      this._r3652bb4f2af925());
  }, "_r3723cdd9acc947");
  _r5e15e974292595 = n((r) => {
    (this._context?.updateEnvironment(this._environmentTypes[this.var_928] ?? "", !1),
      this._context?._r515644ef0606ec(cf.SCREEN_LOGIN));
  }, "_r5e15e974292595");
  _re4b82a40e45f0b = n((r) => {
    (this._context?.updateEnvironment(this._environmentTypes[this.var_928] ?? "", !1),
      this._context?._r515644ef0606ec(cf.SCREEN_SSO_TOKEN));
  }, "_re4b82a40e45f0b");
  ChatHistoryScrollBar = n((r) => {
    let t = new UnkEventDispatcherWrapperSubclass_05394e(20, 1);
    (t.addEventListener(DeBouncer._rf33144eac61595, this._r3652bb4f2af925), t.start());
  }, "ChatHistoryScrollBar");
  _r3652bb4f2af925 = n((r = null) => {
    this.var_2333 == null ||
      this.var_2942 == null ||
      (Tr._r83a636ece2b8d5(this, 0, Tr.ANCHOR_CENTRE, this.var_2333),
      this.var_1093 != null
        ? (Tr._r83a636ece2b8d5(this.var_2333, 0, Tr.ANCHOR_RIGHT, this.var_1093),
          Tr._r96e6aacde321c8(this.var_1093, 20, this.var_2942))
        : Tr._r83a636ece2b8d5(this.var_2333, 0, Tr.ANCHOR_RIGHT, this.var_2942));
  }, "_r3652bb4f2af925");
}
