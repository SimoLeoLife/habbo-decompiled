// Extracted from HabboAirLauncher.deobf.js, line 157376.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/login/LoginFlow.as
// Obfuscated name: _i5695b26dc75860

class a extends Sprite {
  static {
    n(this, "LoginFlow");
  }
  static LOGIN_FLOW_FINISHED_EVENT = "LOGIN_FLOW_FINISHED_EVENT";
  static ERROR_TYPE_IO_ERROR = "ioError";
  static LOGO_AREA_HEIGHT = 50;
  static MAIN_AREA_MARGIN = 5;
  static SCREEN_ENVIRONMENT = 1;
  static SCREEN_LOGIN = 2;
  static SCREEN_AVATARS = 3;
  static SCREEN_SSO_TOKEN = 4;
  _background = null;
  var_942 = null;
  _rf2ded4a13e9e35 = null;
  _loginView = null;
  _r1444b4c719c8ba = null;
  var_3569 = null;
  var_1271 = !1;
  _rfa151992342cb7 = null;
  var_298 = null;
  _r421d24ba625fb2 = null;
  _mainSprite = null;
  _configuration = null;
  _communication = null;
  _localization = null;
  _loginProvider = null;
  _ssoToken = "";
  _r51f014344a1d01 = null;
  var_1502 = null;
  var_1204 = null;
  _r5afe09ddb0ff7d = 0;
  constructor(e) {
    (super(), this.createFakeContext(e));
  }
  get ssoToken() {
    return this._ssoToken;
  }
  get stage() {
    return super.stage;
  }
  set stage(e) {
    super.stage = e;
  }
  get disposed() {
    return this.var_1271;
  }
  get _r6c908b3cb0864c() {
    return null;
  }
  dispose() {
    (this.removeEventListener(M._re9c5159721d60d, this._ra5ccba1e347a96),
      !this.var_1271 &&
        (this.stage?.removeEventListener(M.RESIZE, this._r588b2eaeb4bbc6),
        this._rfa151992342cb7?.dispose(),
        (this._rfa151992342cb7 = null),
        this._background != null &&
          this.contains(this._background) &&
          (this.removeChild(this._background), this._background.dispose(), (this._background = null)),
        this._r421d24ba625fb2 != null &&
          this.contains(this._r421d24ba625fb2) &&
          (this.removeChild(this._r421d24ba625fb2), (this._r421d24ba625fb2 = null)),
        this._reec168ed70b01f(),
        this._rf2ded4a13e9e35?.dispose(),
        this._loginView?.dispose(),
        this.var_3569?.dispose(),
        this._r1444b4c719c8ba?.dispose(),
        (this._loginProvider = null),
        this.parent != null && this.parent.removeChild(this),
        (this.var_1271 = !0),
        F2.localizationManager === this._localization && (F2.localizationManager = null),
        U_.localizationManager === this._localization && (U_.localizationManager = null)));
  }
  init() {
    (this.stage?.addEventListener(M.RESIZE, this._r588b2eaeb4bbc6),
      (this._background = new UnkSpriteSubclass_e651c9()),
      this.addChild(this._background),
      (this.var_1502 = new UnkClass_3a5c6f()),
      (this.var_1502.visible = !1),
      (this.var_1502.alpha = 0),
      this.addChild(this.var_1502),
      (this.var_1204 = new UnkClass_3a5c6f()),
      (this.var_1204.visible = !1),
      (this.var_1204.alpha = 0),
      this.addChild(this.var_1204),
      (this._mainSprite = new Sprite()),
      this.addChild(this._mainSprite));
    let e = new UnkClass_3a5c6f(_i4406f2f280a16f("logo_new_png"));
    ((e.x = 40),
      (e.y = 40),
      this._mainSprite.addChild(e),
      (this._r421d24ba625fb2 = new Sprite()),
      this.addChild(this._r421d24ba625fb2),
      (this._r421d24ba625fb2.y = a.LOGO_AREA_HEIGHT),
      (this._r421d24ba625fb2.x = a.MAIN_AREA_MARGIN),
      (this.var_942 = new Sprite()),
      (this.var_942.x = 0),
      (this.var_942.y = a.LOGO_AREA_HEIGHT),
      (this.var_942.visible = !0),
      this._r421d24ba625fb2.addChild(this.var_942),
      (this._rf2ded4a13e9e35 = new s1e(this)),
      (this._loginView = new LoginView(this)),
      (this.var_3569 = new AvatarView(this)),
      (this._r1444b4c719c8ba = new SsoTokenView(this)),
      (this._r51f014344a1d01 = new to(
        to.BUTTON_RED,
        "X",
        new D(0, 0, 0, 40),
        !0,
        this.onClose,
        14211288,
      )),
      this._rf2ded4a13e9e35.init(),
      this.loadImages(),
      this._r515644ef0606ec(a.SCREEN_SSO_TOKEN),
      this._r88a29040db86ae(),
      this.addEventListener(M._scrollBar, this.ChatHistoryScrollBar),
      this.addEventListener(M._re9c5159721d60d, this._ra5ccba1e347a96));
  }
  _r81763913c971c2(e, r) {
    this._loginProvider?.loginWithCredentials(e, r);
  }
  _r817d4a7a16119e(e, r) {
    (this.updateEnvironment(e, !1),
      (this._ssoToken = r),
      this.dispatchEvent(new M(a.LOGIN_FLOW_FINISHED_EVENT)));
  }
  _ra107d59ede6be8(e) {
    this._loginProvider?._r6f89f5b1ab7d58(e.uniqueId);
  }
  _r515644ef0606ec(e) {
    switch ((this._reec168ed70b01f(), e)) {
      case a.SCREEN_ENVIRONMENT:
        (this._rf2ded4a13e9e35?.init(),
          this.var_942 != null &&
            this._rf2ded4a13e9e35 != null &&
            this.var_942.addChild(this._rf2ded4a13e9e35));
        break;
      case a.SCREEN_LOGIN:
        (this._loginView?.init(),
          this.var_942 != null &&
            this._loginView != null &&
            this.var_942.addChild(this._loginView),
          this._communication != null && this._loginProvider?.init(this._communication));
        break;
      case a.SCREEN_SSO_TOKEN:
        (this._r1444b4c719c8ba?.init(),
          this.var_942 != null &&
            this._r1444b4c719c8ba != null &&
            this.var_942.addChild(this._r1444b4c719c8ba));
        break;
      case a.SCREEN_AVATARS:
        (this.var_3569?.init(),
          this.var_942 != null &&
            this.var_3569 != null &&
            (this.var_942.addChild(this.var_3569),
            (this.var_3569.baseUrl = this.getProperty(HabboProperty.const_1082))),
          this._r88a29040db86ae());
        break;
    }
    this._r88a29040db86ae();
  }
  showErrorMessage(e) {
    if (this._r421d24ba625fb2 == null) return;
    if (this.var_298 == null) {
      let t = Tr.createTextField(e, 12, 16777215, !0);
      Tr.addEtching(t, !0);
      let i = Tr.createBalloon(t.width + 30, t.height + 17, -1, !0, 11411485, "down");
      ((this.var_298 = new Sprite()),
        this.var_298.addChild(i),
        this.var_298.addChild(t),
        (t.x = 15),
        (t.y = 14),
        this._r421d24ba625fb2.addChild(this.var_298),
        (this.var_298.x = 300),
        (this.var_298.y = 300),
        (this.var_298.filters = [new UnkClass_baf84c(0, 0.24, 6, 6)]));
    }
    let r = new UnkEventDispatcherWrapperSubclass_05394e(3e3, 1);
    (r.addEventListener(DeBouncer._rf33144eac61595, this._r106b2b823d02dc),
      r.start(),
      (this.var_298.visible = !0));
  }
  _r33d3b7587c6dc1() {
    this.dispatchEvent(new M(a.LOGIN_FLOW_FINISHED_EVENT));
  }
  _rc8ce49a184ddd0() {}
  showRegistrationError(e) {
    this.showError(e);
  }
  showInvalidLoginError(e) {
    this.showError(e);
  }
  _r4075ee66f828fd(e, r) {}
  showAccountError(e) {
    this.showError(e);
  }
  _rca21cf36867336() {}
  saveLooksError(e) {
    this.showError(e);
  }
  showTOS() {
    this.showErrorMessage("Need to show TOS");
  }
  environmentReady() {
    this._loginView?.ready();
  }
  _r78be69f271ad27(e) {
    (this._r515644ef0606ec(a.SCREEN_AVATARS), this.var_3569?._r5966d2d3504a65(e));
  }
  _rb8cb6674d2ae1c(e) {}
  _r371a56d4772d9a(e) {}
  _r4a559867b27d6e() {}
  showCaptchaError() {
    (this._r515644ef0606ec(a.SCREEN_LOGIN), this.showErrorMessage("Error with captcha"));
  }
  getProperty(e, r = null) {
    let t = this._configuration?.getProperty(e, r) ?? "";
    return (t.length, t);
  }
  _r59896b455b1d35() {
    this._r51f014344a1d01 != null && this.addChild(this._r51f014344a1d01);
    let e = new c1e(this._loginProvider);
    return (this.addChild(e), this._r88a29040db86ae(), e);
  }
  _rf5d09494f78486() {
    (this._r51f014344a1d01 != null &&
      this.contains(this._r51f014344a1d01) &&
      this.removeChild(this._r51f014344a1d01),
      this._r515644ef0606ec(a.SCREEN_LOGIN));
  }
  updateEnvironment(e, r) {
    if (r) {
      this._localization?.resetHabboWebApiSession(e);
      return;
    }
    (gr._r7f62dd3441fb83(gr.SOL_PROPERTY_ENVIRONMENT, e),
      this._configuration?._rdb9c3d6b66d840(e),
      this._rf2ded4a13e9e35?.updateEnvironment(),
      this._localization?.resetHabboWebApiSession(this._configuration?.getProperty(HabboProperty.const_682) ?? e),
      this._communication?._r0dc5af1ae20799(),
      this._localization?._r851c18a2435de4());
  }
  createFakeContext(e) {
    this._rfa151992342cb7 = new FakeContext(e);
    let r = _i580f72a72c07aa(),
      t = _ib7da5f2f659bfa();
    if (r == null || t == null)
      throw new Error(
        "HabboAir login dependencies are not loaded. Call loadHabboAirBootstrapAssets() first.",
      );
    ((this._configuration = this.createConfiguration(this._rfa151992342cb7, r)),
      (this._localization = this.createLocalization(this._rfa151992342cb7, t)),
      (this._communication = this._r3d946f896158b4(this._rfa151992342cb7)),
      (F2.localizationManager = this._localization),
      (U_.localizationManager = this._localization),
      this._localization.resetHabboWebApiSession(this._configuration.getProperty(HabboProperty.const_682)),
      (this._loginProvider = new t1e(this)),
      this._loginProvider.addEventListener?.(SsoTokenAvailableEvent.SSO_TOKEN_AVAILABLE, this._rc66c4f9c6b619c));
  }
  createConfiguration(e, r) {
    return new V2(e, 0, _i459c7840e00a16_(r, "_assetsConfiguration@"));
  }
  createLocalization(e, r) {
    return new HabboLocalizationManager(e, 0, _i459c7840e00a16_(r, "_assetsLocalization@"));
  }
  _r3d946f896158b4(e) {
    return new Mj(e, 0, new Na("_assetsCommunication@", rr("<manifest><library /></manifest>")));
  }
  loadImages() {
    (this.var_1204 != null &&
      Uy._rf649f9e8fd93ab(
        this.var_1204,
        this.getProperty("landing.view.background_right.uri"),
        this.onImageComplete,
      ),
      this.var_1502 != null &&
        Uy._rf649f9e8fd93ab(
          this.var_1502,
          this.getProperty("landing.view.background_left.uri"),
          this.onImageComplete,
        ));
  }
  _reec168ed70b01f() {
    for (; this.var_942 != null && this.var_942.numChildren > 0;)
      this.var_942.removeChildAt(0);
  }
  showError(e) {
    let r = e != null && typeof e == "object" ? e : null,
      t = r?.errors,
      i = Array.isArray(t) && t.length > 0 ? String(t[0] ?? "") : "";
    i === "" &&
      r != null &&
      (r.error != null ? (i = String(r.error)) : r.message != null && (i = String(r.message)));
    let s = "";
    switch (i) {
      case HabboWebApiError.INVALID_CAPTCHA:
        this.showCaptchaError();
        break;
      case HabboWebApiError.const_990:
        s = "connection.login.error.banned.desc";
        break;
      case HabboWebApiError.const_282:
        s = "connection.login.error.blocked.desc";
        break;
      case HabboWebApiError.const_976:
        s = "connection.login.error.unauthorized.staff";
        break;
      case HabboWebApiError.const_1208:
        s = "connection.login.error.-3.desc";
        break;
      case HabboWebApiError.LOGIN_NO_AVATARS:
        s = "connection.login.missing_avatars";
        break;
      case HabboWebApiError.const_192:
      case HabboWebApiError.const_1168:
        s = "connection.login.missing_credentials";
        break;
      case HabboWebApiError.const_656:
        s = "connection.login.error.facebook_disabled.desc";
        break;
      case HabboWebApiError.const_423:
        s = "connection.login.error.facebook_accesstoken.desc";
        break;
      case a.ERROR_TYPE_IO_ERROR:
        s = "connection.login.error.-400.desc";
        break;
      case HabboWebApiError.ACCOUNT_ISSUE:
        s = "generic.error";
        break;
      default:
        s = "generic.error";
        break;
    }
    s.length > 0 && this.showErrorMessage(this._localization?.getLocalization(s) ?? s);
  }
  _r88a29040db86ae() {
    if (this.disposed || this._r421d24ba625fb2 == null) return;
    this._background?.resize();
    let e = this._r421d24ba625fb2.width + 20;
    if (this.stage != null) {
      if (this.stage.stageWidth > e) {
        let r = (this.stage.stageWidth - e) / 2;
        (r < a.MAIN_AREA_MARGIN && (r = a.MAIN_AREA_MARGIN), (this._r421d24ba625fb2.x = r));
      } else this._r421d24ba625fb2.x = a.MAIN_AREA_MARGIN;
      ((this._r421d24ba625fb2.y = a.LOGO_AREA_HEIGHT),
        this._r51f014344a1d01 != null &&
          ((this._r51f014344a1d01.y = 30),
          (this._r51f014344a1d01.x = this.stage.stageWidth - this._r51f014344a1d01.width - 30)),
        this.var_1204 != null &&
          ((this.var_1204.x = Math.max(
            400,
            this.stage.stageWidth - this.var_1204.width + 50,
          )),
          (this.var_1204.y = this.stage._rcc0ac91bd808af - this.var_1204.height + 50)),
        this.var_1502 != null &&
          ((this.var_1502.x = -50),
          (this.var_1502.y = this.stage._rcc0ac91bd808af - this.var_1502.height + 50)));
    }
  }
  _rc66c4f9c6b619c = n((e) => {
    ((this._ssoToken = e.ssoToken), this.dispatchEvent(new M(a.LOGIN_FLOW_FINISHED_EVENT)));
  }, "_rc66c4f9c6b619c");
  onImageComplete = n((e) => {
    ((e.loader.visible = !0), ZC._r6256376a0df260(e.loader, 0, ZC.REALLY_SLOW_ALPHA_TWEEN_TIME), this._r88a29040db86ae());
  }, "onImageComplete");
  ChatHistoryScrollBar = n((e) => {
    (this.removeEventListener(M._scrollBar, this.ChatHistoryScrollBar),
      (this._r5afe09ddb0ff7d = Date.now()),
      this._r88a29040db86ae());
  }, "ChatHistoryScrollBar");
  _ra5ccba1e347a96 = n((e) => {
    let r = Date.now();
    (ZC._r37a6225fd4ea8a.advanceTime((r - this._r5afe09ddb0ff7d) / 1e3), (this._r5afe09ddb0ff7d = r));
  }, "_ra5ccba1e347a96");
  _r588b2eaeb4bbc6 = n((e) => {
    this.disposed || this._r88a29040db86ae();
  }, "_r588b2eaeb4bbc6");
  _r106b2b823d02dc = n((e) => {
    this.var_298 != null && (this.var_298.visible = !1);
  }, "_r106b2b823d02dc");
  onClose = n((e) => {
    (this._r51f014344a1d01 != null &&
      this.contains(this._r51f014344a1d01) &&
      this.removeChild(this._r51f014344a1d01),
      this._loginProvider?._r183c8ea6c85299(),
      this._r515644ef0606ec(a.SCREEN_LOGIN));
  }, "onClose");
}
