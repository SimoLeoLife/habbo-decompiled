// Extracted from HabboAirLauncher.deobf.js, line 156323.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/login/WebApiLoginProvider.as
// Obfuscated name: _i5f52e06808bfdb

class a extends EventDispatcherWrapper {
  static {
    n(this, "WebApiLoginProvider");
  }
  static ERROR_TYPE_IO_ERROR = "ioError";
  static ERROR_CODE_MAINTENANCE = "maintenance";
  static _r8c69636bf3020c = !1;
  static _r13b139297d746c = 1;
  static const_1267 = 2;
  _communication = null;
  _rb4397f83713709 = "";
  _loginView;
  _r4dae1f00b69590 = null;
  _autoLogin = !1;
  _r9753f268acd52d = !1;
  _disconnected = !1;
  _reconnecting = !1;
  _r5a79f627fb2834 = a._r13b139297d746c;
  _name = "";
  _password = "";
  _r5a76e4bc6abd35 = 0;
  _r025fdf300732d0 = "";
  _ssoToken = "";
  var_61 = null;
  _r4cbbab595ba635 = null;
  constructor(e) {
    (super(), (this._loginView = e));
  }
  get disposed() {
    return !1;
  }
  init(e) {
    this._communication = e;
    let r = this.getProperty(HabboProperty.const_1082);
    (r != null && this._communication.createHabboWebApiSession(this, r),
      (this.var_61 = this.createHabboWebApiSession()),
      this.initHabboWebApiSession());
  }
  loginWithCredentials(e, r, t = 0) {
    ((this._name = e),
      (this._password = r),
      (this._r5a76e4bc6abd35 = t),
      this.var_61 != null && this.var_61.login(e, r));
  }
  _r6f89f5b1ab7d58(e) {
    ((this._r025fdf300732d0 = e), this.var_61 != null && this.var_61.selectAvatar(e));
  }
  habboWebApiError(e, r, t, i, s = !1) {
    let o = this._r6272a79b9c9945(i),
      d = typeof o?.error == "string" ? o.error : "";
    a.ERROR_CODE_MAINTENANCE;
    let c = !1;
    t === a.ERROR_TYPE_IO_ERROR && (c = !0);
    let f = this._communication?._r48b40b8a76d05a() ?? null;
    switch (e) {
      case HabboWebApiMethod.SSO_TOKEN:
        this._autoLogin && f != null && ((c = !0), f.login(this._name, this._password));
      case HabboWebApiMethod.const_1124:
        this._loginView?._rc8ce49a184ddd0();
        break;
      case HabboWebApiMethod.REGISTER:
        this._loginView?.showRegistrationError(o);
        break;
      case HabboWebApiMethod._r152a985fb751a5:
        this._loginView?.showInvalidLoginError(o);
        break;
      case HabboWebApiMethod.NAME_CHECK:
      case HabboWebApiMethod.SELECT_USER:
        this._loginView?._r4075ee66f828fd(o, e === HabboWebApiMethod.NAME_CHECK);
        break;
      case HabboWebApiMethod.LOGIN:
      case HabboWebApiMethod.const_584:
      case HabboWebApiMethod.FORCE_TOS_ACCEPT:
        o != null && (o.message != null || o.error != null || o.errors != null)
          ? s
            ? ((o.captcha === !0 && o.message === "invalid-captcha") || (this._r4dae1f00b69590 = o),
              this._rf3d8fce969689a())
            : this._loginView?.showInvalidLoginError(o)
          : s
            ? this._rf3d8fce969689a()
            : this._loginView?.showInvalidLoginError(null);
        break;
      case HabboWebApiMethod.SELECT_AVATAR:
        f != null
          ? (this._loginView?.showAccountError(o), this._loginView?._rca21cf36867336(), f.avatars())
          : this._loginView?.showInvalidLoginError(o);
        break;
      case HabboWebApiMethod.SELECT_ROOM:
        break;
      case HabboWebApiMethod.SAVE_LOOKS:
        this._loginView?.saveLooksError(o);
        break;
      default:
        break;
    }
    c || (this._autoLogin = !1);
  }
  onUserList(e) {
    if (this._autoLogin) {
      let r = gr.readSOLString(gr.SOL_PROPERTY_CHARACTER_UNIQUE_ID);
      this.userExists(e, r) || this._loginView?._r78be69f271ad27(e);
    } else this._loginView?._r78be69f271ad27(e);
  }
  _rbadee3f6542fd0(e, r) {
    let t = this._communication?._r48b40b8a76d05a() ?? null;
    if (t == null) return;
    let i = this._r6272a79b9c9945(r),
      s = "";
    if (i?.force instanceof Array) {
      let o = i.force;
      if (o.includes("TOS")) {
        this._loginView?.showTOS();
        return;
      }
      if (o.includes("EMAIL") || o.includes("PASSWORD")) {
        this._loginView?.showInvalidLoginError({ errors: [HabboWebApiError.ACCOUNT_ISSUE] });
        return;
      }
    }
    switch (e) {
      case HabboWebApiMethod.const_1124:
        (this._r5a79f627fb2834,
          a._r13b139297d746c,
          this._autoLogin ? t.ssoToken() : this._loginView?.environmentReady());
        break;
      case HabboWebApiMethod.SELECT_AVATAR:
        this._r5a79f627fb2834 !== a.const_1267 && t.ssoToken();
        break;
      case HabboWebApiMethod.LOGIN:
      case HabboWebApiMethod.const_584:
      case HabboWebApiMethod.FORCE_TOS_ACCEPT:
        ((s = e === HabboWebApiMethod.LOGIN ? gr.LOGIN_METHOD_HABBO : gr.const_713),
          gr._r7f62dd3441fb83(gr.SOL_PROPERTY_LOGIN_METHOD, s),
          this._rba963621ea71d8());
        break;
      case HabboWebApiMethod._r152a985fb751a5:
        if (this._r5a79f627fb2834 !== a.const_1267 && r instanceof Array) {
          let o = r.map((d) => new UnkClass_a71199(d));
          o.length === 1
            ? (gr._r7f62dd3441fb83(gr.SOL_PROPERTY_CHARACTER_UNIQUE_ID, o[0]?.uniqueId ?? ""),
              t.selectAvatar(o[0]?.uniqueId ?? ""))
            : this._autoLogin || this._loginView?._r78be69f271ad27(o);
        }
        break;
      case HabboWebApiMethod.SSO_TOKEN:
        ((this._ssoToken = String(i?.ssoToken ?? "")),
          (this._r5a79f627fb2834 = a.const_1267),
          this.dispatchEvent(new SsoTokenAvailableEvent(SsoTokenAvailableEvent.SSO_TOKEN_AVAILABLE, this._ssoToken)));
        break;
      case HabboWebApiMethod.REGISTER:
        if (i?.id != null) {
          let o = Number.parseInt(String(i.id), 10);
          gr._r7f62dd3441fb83(gr.SOL_PROPERTY_CHARACTER_ID, o.toString());
        }
        this._loginView?._rb8cb6674d2ae1c(i);
        break;
      case HabboWebApiMethod.const_99:
        this._loginView?._r371a56d4772d9a(r);
        break;
      case HabboWebApiMethod.SELECT_USER:
      case HabboWebApiMethod.NAME_CHECK:
        this._loginView?._r4075ee66f828fd(i, e === HabboWebApiMethod.NAME_CHECK);
        break;
      case HabboWebApiMethod.SAVE_LOOKS:
        this._loginView?._r4a559867b27d6e();
        break;
      case HabboWebApiMethod.SELECT_ROOM:
        (gr._r7f62dd3441fb83(gr.SOL_PROPERTY_LOGIN_METHOD, gr.LOGIN_METHOD_HABBO), this._rba963621ea71d8());
        break;
    }
  }
  _ra092543d02834d(e, r) {}
  _r183c8ea6c85299() {
    this._r4dccb7fe10c7dd();
  }
  _ra5b09548735cb9() {
    (this._r4dccb7fe10c7dd(), this._loginView?.showCaptchaError());
  }
  _r79da67210227b0(e) {
    if (
      (this._r4dccb7fe10c7dd(),
      this._loginView?._rf5d09494f78486(),
      this._r4dae1f00b69590 != null &&
        (this._loginView?.showInvalidLoginError(this._r4dae1f00b69590), (this._r4dae1f00b69590 = null)),
      e == null || this.var_61 == null)
    ) {
      this._loginView?.showCaptchaError();
      return;
    }
    this.var_61._r8c85a5958005b2(e);
  }
  getProperty(e, r = null) {
    return this._loginView?.getProperty(e, r ?? void 0) ?? "";
  }
  selectAvatar(e) {}
  _r2be4efee21cdbb(e) {
    this.var_61 != null && this.var_61.selectAvatar(e);
  }
  createHabboWebApiSession() {
    let e = this._communication?._r48b40b8a76d05a() ?? null;
    e != null && (e.dispose(), (e = null));
    let r = this.getProperty(HabboProperty.const_1082);
    if (
      (r === "" && ((r = this.getProperty(HabboProperty.URL_PREFIX)), (r = r.replace("http:", "https:"))),
      this._communication == null)
    )
      throw new Error("Tried to create IHabboWebApiSession without communication manager");
    return this._communication.createHabboWebApiSession(this, r);
  }
  initHabboWebApiSession() {
    if (this.var_61 != null) this.var_61.hello();
    else throw new Error("Tried to init null IHabboWebApiSession");
  }
  _rf3d8fce969689a() {
    ((this._r4cbbab595ba635 = this._loginView?._r59896b455b1d35() ?? null),
      this._r4cbbab595ba635 == null && this._loginView?.showCaptchaError());
  }
  _r4dccb7fe10c7dd() {
    this._r4cbbab595ba635 != null && (this._r4cbbab595ba635.dispose(), (this._r4cbbab595ba635 = null));
  }
  userExists(e, r) {
    for (let t of e) if (t.uniqueId === r) return !0;
    return !1;
  }
  _rba963621ea71d8() {
    if (this.var_61 != null)
      if (this._autoLogin) {
        let e = gr.readSOLString(gr.SOL_PROPERTY_CHARACTER_UNIQUE_ID);
        e != null ? this.var_61.selectAvatar(e) : this.var_61.avatars();
      } else this._r5a79f627fb2834 === a._r13b139297d746c && this.var_61.avatars();
  }
  _r6272a79b9c9945(e) {
    return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
  }
}
