// Extracted from HabboAirLauncher.deobf.js, line 378332.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/HabboLoadingScreen.as
// Obfuscated name: _ia68bad6e02f1e5

class a extends Sprite {
  static {
    n(this, "HabboLoadingScreen");
  }
  static const_435 = 28;
  static LOADING_BAR_WIDTH = 400;
  static LOADING_BAR_HEIGHT = 25;
  static _r40b1924281ced1 = 2;
  static _rf027e1fb3734d9 = 2;
  static CONTAINER = "container";
  static FILE_LOADING_BAR = "fileLoadingBar";
  static FILE_BAR_SPRITE = "fileBarSprite";
  static PHOTO_SPLASH_SCREEN = "photoSplashScreen";
  static BACKGROUND = "background";
  static const_814 = "habboLogo";
  static const_124 = "textField";
  static VERSION_TEXT_FIELD = "versionTextField";
  static const_1289 = "loadingNumberTextField";
  static ERROR_TEXT_FIELD = "errorTextField";
  var_677 = null;
  _ref1e6a33eb868d = 0;
  _disposed = !1;
  var_2052 = 0;
  var_3867 = null;
  _rda23809720bc5e = !1;
  _rfa151992342cb7 = null;
  _configuration = null;
  _localization = null;
  constructor(e, r, t) {
    (super(), this.createFakeContext(t));
    let i = new Sprite();
    ((i.name = a.BACKGROUND),
      i.graphics.clear(),
      i.graphics.beginFill(922908),
      i.graphics.drawRect(0, 0, e, r),
      this.addChild(i));
    let s = new MRe(this);
    ((s.name = a.PHOTO_SPLASH_SCREEN), this.addChild(s));
    let o = new Sprite();
    ((o.name = a.FILE_LOADING_BAR),
      o.graphics.lineStyle(1, 16777215, 1),
      o.graphics.beginFill(2500143),
      o.graphics.drawRect(1, 0, a.LOADING_BAR_WIDTH - 1, 0),
      o.graphics.drawRect(a.LOADING_BAR_WIDTH, 1, 0, a.LOADING_BAR_HEIGHT - 1),
      o.graphics.drawRect(1, a.LOADING_BAR_HEIGHT, a.LOADING_BAR_WIDTH - 1, 0),
      o.graphics.drawRect(0, 1, 0, a.LOADING_BAR_HEIGHT - 1),
      o.graphics.endFill(),
      this.addChild(o));
    let d = this._localization?.getLocalization("client.starting.revolving") ?? "",
      c = this._localization?.getLocalization("client.starting") ?? "",
      f = "";
    if (d !== "") {
      let h = d.split("/");
      ((this.var_2052 = this.randomNumber(0, h.length - 1)),
        (this.var_3867 = d),
        (f = h[this.var_2052] ?? ""));
    } else f = c;
    let l = Tr.createTextField(
      f,
      a.const_435,
      Tr.HITCH_TEXT_HIGHLIGHT_COLOUR,
      !0,
      !1,
      !1,
      !1,
      _s.CENTER,
    );
    ((l.name = a.const_124), this.addChild(l));
    let b = Tr.createTextField("0%", 14, 10066329, !0, !1, !1, !1, _s.CENTER);
    ((b.name = a.const_1289), this.addChild(b));
    let _ = new Sprite();
    if (((_.name = a.FILE_BAR_SPRITE), o.addChild(_), (o.visible = !0), !0)) {
      let h = _ie648f7b14af66e();
      if (h != null && h !== "") {
        let p = Tr.createTextField(h, 12, 10066329, !0, !1, !1, !1, _s.RIGHT);
        ((p.name = a.VERSION_TEXT_FIELD), this.addChild(p));
      }
    }
    this.addEventListener(M._scrollBar, this.ChatHistoryScrollBar);
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this.disposed ||
      ((this._disposed = !0),
      this.stage?.removeEventListener(M.RESIZE, this.onResize),
      this.removeEventListener(M._scrollBar, this.ChatHistoryScrollBar),
      this.removeEventListener(M._r4b0396f57c9367, this._r8ab2e311a50996),
      this._rcb129ec8a8ea22(a.PHOTO_SPLASH_SCREEN),
      this._rcb129ec8a8ea22(a.BACKGROUND),
      this._rcb129ec8a8ea22(a.const_124),
      this._rcb129ec8a8ea22(a.const_814),
      this._rcb129ec8a8ea22(a.FILE_LOADING_BAR),
      this._rcb129ec8a8ea22(a.ERROR_TEXT_FIELD),
      this._rcb129ec8a8ea22(a.CONTAINER),
      this.var_677 != null &&
        (this.var_677.stop(),
        this.var_677.removeEventListener(DeBouncer.addEventListener, this._rb366db0be66767),
        (this.var_677 = null)),
      this._rfa151992342cb7 != null && (this._rfa151992342cb7.dispose(), (this._rfa151992342cb7 = null)),
      this._localization != null &&
        (U_.localizationManager === this._localization && (U_.localizationManager = null),
        this._localization.dispose(),
        (this._localization = null)),
      this._configuration != null && (this._configuration.dispose(), (this._configuration = null)),
      this.parent != null && this.parent.removeChild(this));
  }
  positionLoadingScreenDisplayElements() {
    let e = this.stage != null ? this.stage.stageWidth : this.width,
      r = this.stage != null ? this.stage._rcc0ac91bd808af : this.height,
      t = 10,
      i = this.getChildByName(a.BACKGROUND);
    i != null &&
      ((i.x = 0),
      (i.y = 0),
      i.graphics.clear(),
      i.graphics.beginFill(922908),
      i.graphics.drawRect(0, 0, e, r));
    let s = 0,
      o = 0,
      d = 0,
      c = this.getChildByName(a.PHOTO_SPLASH_SCREEN);
    c != null && ((c.x = (e - c.width) / 2), (s = c.y + c.height));
    let f = this.getChildByName(a.const_124);
    f != null && ((f.x = (e - f.width) / 2), f.width > o && ((o = f.width), (d = f.x)));
    let l = this.getChildByName(a.VERSION_TEXT_FIELD);
    l != null && ((l.x = e - l.width), (l.y = 0));
    let b = this.getChildByName(a.FILE_LOADING_BAR);
    b != null &&
      ((b.x = (e - b.width) / 2), (b.y = s), (s = b.y + b.height), b.width > o && ((o = b.width), (d = b.x)));
    let _ = this.getChildByName(a.const_1289);
    _ != null && ((_.x = (e - _.width) / 2), _.width > o && ((o = _.width), (d = _.x)));
    let h = this.getChildByName(a.ERROR_TEXT_FIELD);
    (h != null && ((h.x = (e - h.width) / 2), h.width > o && ((o = h.width), (d = h.x))),
      (s = (r - s) / 2),
      (s -= t * 2),
      c != null && ((c.y = s), (s = c.y + c.height)),
      f != null && ((f.y = s + 50), (s = f.y + f.height + t)),
      b != null && ((b.y = s), (s = b.y + b.height + t / 2)),
      _ != null && ((_.y = s), (s = _.y + _.height + t)),
      h != null && (h.y = s));
  }
  _r0abf80630fdfc5(e) {
    let r = a.LOADING_BAR_WIDTH,
      t = a.LOADING_BAR_HEIGHT,
      i = a._r40b1924281ced1,
      s = a._rf027e1fb3734d9,
      o = this.getChildByName(a.FILE_LOADING_BAR);
    if (o == null) return;
    let d = o.getChildByName(a.FILE_BAR_SPRITE);
    if (d == null) return;
    ((d.x = i + s), (d.y = i + s), d.graphics.clear());
    let c = t - i * 2 - s * 2,
      f = (r - i * 2 - s * 2) * e;
    (d.graphics.beginFill(0),
      d.graphics.drawRect(-1, -1, r - i * 2, t - s * 2),
      d.graphics.endFill(),
      d.graphics.beginFill(12241619),
      d.graphics.drawRect(0, 0, f, c / 2),
      d.graphics.endFill(),
      d.graphics.beginFill(9216429),
      d.graphics.drawRect(0, c / 2, f, c / 2 + 1),
      d.graphics.endFill());
  }
  updateLoadingBar(e) {
    let r = this.getChildByName(a.const_1289);
    r != null && (r.text = `${Math.round(e * 100)}%`);
  }
  showError(e) {
    this.var_677 != null &&
      (this.var_677.stop(),
      this.var_677.removeEventListener(DeBouncer.addEventListener, this._rb366db0be66767),
      (this.var_677 = null));
    let r = this.getChildByName(a.const_124);
    r != null &&
      ((r.htmlText = "${client.loading.failed}"),
      (r.text === "" || r.text === "client.loading.failed" || r.text === "${client.loading.failed}") &&
        (r.text = "Loading failed"),
      (r.width = r.textWidth + 6),
      (r.height = r.textHeight + 6));
    let t = this.getChildByName(a.const_1289);
    t != null && (t.text = "");
    let i = this.getChildByName(a.ERROR_TEXT_FIELD);
    i == null &&
      ((i = Tr.createTextField("", 16, Tr.HITCH_TEXT_BODY_COLOUR, !1, !0, !1, !1, _s.CENTER)),
      (i.name = a.ERROR_TEXT_FIELD),
      this.addChild(i));
    let s = this.stage != null ? this.stage.stageWidth : this.width;
    ((i.autoSize = nr.NONE),
      (i.multiline = !0),
      (i.wordWrap = !0),
      (i.width = Math.max(320, Math.min(s - 80, 760))),
      (i.text = e),
      (i.height = i.textHeight + 10),
      this.positionLoadingScreenDisplayElements());
  }
  createFakeContext(e) {
    this._rfa151992342cb7 = new FakeContext(e);
    let r = _i580f72a72c07aa(),
      t = _ib7da5f2f659bfa();
    if (r == null || t == null)
      throw new Error(
        "HabboAir loading screen dependencies are not loaded. Call loadHabboAirBootstrapAssets() first.",
      );
    ((this._configuration = this.createConfiguration(this._rfa151992342cb7, r)),
      (this._localization = this.createLocalization(this._rfa151992342cb7, t)),
      (U_.localizationManager = this._localization),
      this._localization.resetHabboWebApiSession(this._configuration.getProperty(HabboProperty.const_682)));
  }
  createConfiguration(e, r) {
    return new V2(e, 0, _i459c7840e00a16__(r, "_assetsConfiguration@"));
  }
  createLocalization(e, r) {
    return new HabboLocalizationManager(e, 0, _i459c7840e00a16__(r, "_assetsLocalization@"));
  }
  _r8ab2e311a50996 = n((e) => {}, "_r8ab2e311a50996");
  ChatHistoryScrollBar = n((e) => {
    (this.removeEventListener(M._scrollBar, this.ChatHistoryScrollBar),
      this.stage?.addEventListener(M.RESIZE, this.onResize),
      this.positionLoadingScreenDisplayElements(),
      (this.var_677 = new UnkEventDispatcherWrapperSubclass_05394e(750)),
      this.var_677.addEventListener(DeBouncer.addEventListener, this._rb366db0be66767),
      this.var_677.start());
  }, "ChatHistoryScrollBar");
  onResize = n((e) => {
    this.positionLoadingScreenDisplayElements();
  }, "onResize");
  _rb366db0be66767 = n((e) => {
    if (this._ref1e6a33eb868d === 100) {
      if (this._rda23809720bc5e) {
        let r = this.var_3867?.split("/") ?? [],
          t = this.getChildByName(a.const_124);
        if (t != null) {
          this._rcb129ec8a8ea22(a.const_124);
          let i = Tr.createTextField(
            r[this.var_2052] ?? "",
            a.const_435,
            Tr.HITCH_TEXT_HIGHLIGHT_COLOUR,
            !0,
            !1,
            !1,
            !1,
            _s.CENTER,
          );
          ((i.x = (this.width - i.width) / 2), (i.y = t.y), (i.name = a.const_124), this.addChild(i));
        }
        this._rda23809720bc5e = !1;
      }
      this._ref1e6a33eb868d = 0;
    } else
      this._ref1e6a33eb868d += Math.min(
        this.randomNumber(35, Math.min(this.randomNumber(45, 55), 100 - this._ref1e6a33eb868d)),
        100 - this._ref1e6a33eb868d,
      );
    (this._ref1e6a33eb868d === 100 &&
      this.var_3867 != null &&
      ((this._rda23809720bc5e = !0),
      (this.var_2052 = (this.var_2052 + 1) % (this.var_3867.split("/").length - 1))),
      this._r0abf80630fdfc5(this._ref1e6a33eb868d / 100));
  }, "_rb366db0be66767");
  randomNumber(e, r) {
    return Math.floor(Math.random() * (r - e + 1)) + e;
  }
  _rcb129ec8a8ea22(e) {
    let r = this.getChildByName(e);
    r != null && this.removeChild(r);
  }
}
