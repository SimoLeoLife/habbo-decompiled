// Extracted from HabboAirLauncher.deobf.js, line 199311.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/demo/class_1891.as
// Obfuscated name: _ia38770f7bf9920

class a extends Ft {
    constructor(r, t, i) {
      super();
      this.var_1881 = r;
      this.var_2234 = t;
      this.var_4063 = i;
      ((this.var_408 = a.getModalXmlWindow(
        "login_window",
        this.var_2234,
        this.var_4063,
        "",
      )),
        (this._window = this.var_408?.rootWindow),
        this.createWindow());
    }
    static {
      n(this, "class_1891");
    }
    static INIT_LOGIN = "INIT_LOGIN";
    static AVATAR_SELECTED = "AVATAR_SELECTED";
    static ENVIRONMENT_SELECTED = "ENVIRONMENT_SELECTED";
    name = "";
    password = "";
    var_408 = null;
    _window = null;
    _r0424cfd718a262 = !1;
    _r0e8fdc277cd974 = null;
    var_1093 = null;
    var_777 = null;
    _rdc4d55e103332f = null;
    var_589 = null;
    var_3798 = 0;
    _rd209a96a39e57b = [];
    _rf4750acd292cfb = null;
    _r9c7c740acd90c3 = [];
    dispose() {
      (this.var_408 != null && (this.var_408.dispose(), (this.var_408 = null)),
        this.var_589 != null &&
          (this.var_589.removeEventListener(
            Bz.ENVIRONMENT_SELECTED_EVENT,
            this.onEnvironmentSelected,
          ),
          this.var_589.dispose(),
          (this.var_589 = null)),
        (this._window = null),
        (this._r0e8fdc277cd974 = null),
        (this.var_1093 = null),
        (this.var_777 = null),
        (this._rdc4d55e103332f = null),
        (this._rf4750acd292cfb = null),
        (this._rd209a96a39e57b = []),
        (this._r9c7c740acd90c3 = []),
        (this.var_1881 = null),
        (this.var_2234 = null),
        (this.var_4063 = null),
        super.dispose());
    }
    get avatarId() {
      return this.var_3798;
    }
    get _r25a8ca42678d6b() {
      return this._rf4750acd292cfb;
    }
    get selectedEnvironment() {
      return this.var_589?.selectedEnvironment ?? "";
    }
    _rbd48f6b8c767b2() {
      (this.var_408?.dispose(), (this.var_408 = null));
    }
    get useWebApi() {
      return this._window?.findChildByName("useTicket")?.isSelected ?? !1;
    }
    get useExistingSession() {
      if (!0) return !1;
      let r = this._window?.findChildByName("useExistingSession");
      return this._r0424cfd718a262 ? !0 : (r?.isSelected ?? !1);
    }
    _r824d2a545d7543(r) {
      let t = this._window?.findChildByName("useTicket");
      if (t != null) {
        if (r) {
          t.select();
          return;
        }
        t.unselect();
      }
    }
    populateUserList(r) {
      let t = this._window?.findChildByName("list");
      if (t == null || this._r0e8fdc277cd974 == null) return;
      let i = this._window?.findChildByName("users_info");
      (i != null && (i.visible = !1), t.removeListItems(), (this._r9c7c740acd90c3 = r));
      for (let s of r) {
        let o = this._r0e8fdc277cd974.clone();
        ((o.id = s.id), (o.caption = s.name), (o.procedure = this._r6e3a336904fabe), t.addListItem(o));
      }
    }
    displayResults(r) {
      let t = this._window?.findChildByName("text002");
      t != null && (t.text = r);
    }
    showError(r, t, i) {
      let s = this._window?.findChildByName("users_info");
      s != null && (s.caption = `Received error: ${r} regarding message: ${t}`);
    }
    _rc8ce49a184ddd0() {}
    showRegistrationError(r) {
      this.showErrorMessage("Registration error");
    }
    showInvalidLoginError(r) {
      this.showErrorMessage("Invalid login");
    }
    _r4075ee66f828fd(r, t) {}
    showCaptchaError() {
      this.showErrorMessage("Captcha required, please add your IP to Housekeeping property to avoid this.");
    }
    showAccountError(r) {
      this.showErrorMessage("Error with account during login");
    }
    _rca21cf36867336() {
      this.dispose();
    }
    saveLooksError(r) {
      this.showErrorMessage("Save looks error ");
    }
    showTOS() {
      this.showErrorMessage("Web-api wants to show Terms of Service");
    }
    environmentReady() {
      (this.var_1093 != null &&
        (this.var_1093.enable(),
        (this.var_1093.caption = `Login (${this.var_589?.selectedEnvironment ?? ""})`)),
        this.var_589 != null &&
          this.showInfoMessage(
            `Web Api connection is established for (${this.var_589.getEnvironmentName(this.var_589.selectedEnvironment)}). Ready to connect.`,
          ));
    }
    _r2f9140c6c64ef7() {
      this.var_589 == null ||
        this.var_589.selectedEnvironment === "" ||
        this.onEnvironmentSelected();
    }
    _rb2e14c0022572e() {
      this.windowEventProcessor(y.allocate(y.const_1300, this._window, null, !1));
    }
    _r78be69f271ad27(r) {
      this._rd209a96a39e57b = r;
      let t = gr.readSOLString(gr.SOL_PROPERTY_CHARACTER_UNIQUE_ID),
        i = [],
        s = 0;
      for (let o of r)
        (o.uniqueId === t && (this._rf4750acd292cfb = o), i.push({ id: s, name: o.name }), s++);
      this.populateUserList(i);
    }
    _r4cf0beedf7d012(r) {
      let t = this._rd209a96a39e57b.find((i) => i.name === r) ?? this._rd209a96a39e57b[0] ?? null;
      return t == null
        ? !1
        : (this.useWebApi ? (this._rf4750acd292cfb = t) : (this.var_3798 = t.id),
          this.dispatchEvent(new M(a.AVATAR_SELECTED)),
          !0);
    }
    _rb8cb6674d2ae1c(r) {}
    _r371a56d4772d9a(r) {}
    _r4a559867b27d6e() {}
    showDisconnectedWithText(r) {
      this.showErrorMessage("Hotel is closed");
    }
    showDisconnected(r, t) {
      this.showErrorMessage(`Disconnected reason: ${t} (${r})`);
    }
    getProperty(r, t) {
      return this.var_1881?.getProperty(r, t) ?? "";
    }
    _r59896b455b1d35() {
      return new UnkClass_e76d34();
    }
    _rf5d09494f78486() {}
    static getModalXmlWindow(r, t, i, s = "_xml") {
      let o = null;
      try {
        o = t?.getAssetByName(r + s) ?? t?.getAssetByName(r) ?? null;
        let c = o?.content;
        if (c == null) throw new Error(`Missing xml asset "${r}${s}"`);
        return i?.buildModalDialogFromXML(c) ?? null;
      } catch (d) {
        throw (
          ErrorReportStorage.addDebugData("Communication", `Failed to build modal window ${r}${s}, ${String(o)}!`),
          d
        );
      }
    }
    createWindow() {
      if (this._window == null) return;
      if ((this._window.center(), !0)) {
        this._window.caption = `${this._window.caption} (air)`;
        let o = this._window.findChildByName("useExistingSession");
        (o?.disable(), o != null && (o.blend = 0.5));
      }
      ((this.var_1093 = this._window.findChildByName("login_btn")),
        (this.var_777 = this._window.findChildByName("name_field")),
        (this._rdc4d55e103332f = this._window.findChildByName("pwd_field")));
      let r = gr.readSOLString(gr.SOL_PROPERTY_ENVIRONMENT);
      (this.var_1093?.addEventListener(u.CLICK, this.windowEventProcessor),
        this.var_1093 != null &&
          ((this.var_1093.caption = r === "" ? "Select environment above" : `Initializing (${r})`),
          this.var_1093.disable()),
        this.var_777 != null &&
          ((this.var_777._r84076acb78d7db = !0),
          (this.var_777._errorPopup = 16777215),
          (this.var_777.text = gr.readSOLString(gr.SOL_PROPERTY_LOGIN_NAME) ?? ""),
          this.var_777.focus(),
          this.var_777._r1c386c8571c5d9(
            this.var_777.text.length,
            this.var_777.text.length,
          ),
          this.var_777.addEventListener(sr.const_900, this.windowEventProcessor)),
        this._rdc4d55e103332f != null &&
          ((this._rdc4d55e103332f._r84076acb78d7db = !0),
          (this._rdc4d55e103332f._errorPopup = 16777215),
          (this._rdc4d55e103332f.text = gr.restorePassword() ?? ""),
          this._rdc4d55e103332f.addEventListener(sr.const_900, this.windowEventProcessor)));
      let t = this._window.findChildByName("useTicket");
      (t?.addEventListener(u.CLICK, this._r3ee76a5d61228c),
        t?.select(),
        this._window.findChildByName("useExistingSession")?.unselect(),
        this.var_1881?.getBoolean("try.existing.session") &&
          ((this._r0424cfd718a262 = !0),
          (this._window.visible = !1),
          this.windowEventProcessor(y.allocate(y.const_1300, this._window, null, !1))));
      let s = this._window.findChildByName("list");
      ((this._r0e8fdc277cd974 = s?.removeListItemAt(0) ?? null),
        (this.var_589 = new Bz(
          this._window.findChildByName("environment_list"),
          this.var_1881,
          this.var_4063,
          this.var_2234,
        )),
        this.var_589.addEventListener(Bz.ENVIRONMENT_SELECTED_EVENT, this.onEnvironmentSelected));
    }
    onEnvironmentSelected = n((r = null) => {
      (this.dispatchEvent(new M(a.ENVIRONMENT_SELECTED)),
        this.var_1093?.disable(),
        this.var_1093 != null &&
          (this.var_1093.caption = `Initializing (${this.var_589?.selectedEnvironment ?? ""})`),
        this.var_589 != null &&
          this.showInfoMessage(
            `Initializing Web Api connection to (${this.var_589.getEnvironmentName(this.var_589.selectedEnvironment)})`,
          ));
    }, "onEnvironmentSelected");
    handleKeyUp(r) {
      if (!r.ctrlKey || this._window == null) return;
      let t = r.keyCode - 49;
      if (t < 0 || t >= 10) return;
      let i = this.var_1881?.getProperty(`login.user.${t}.name`) ?? "",
        s = this.var_1881?.getProperty(`login.user.${t}.pass`) ?? "",
        o = this._window.findChildByName("name_field"),
        d = this._window.findChildByName("pwd_field");
      (i !== "" && o != null && (o.caption = i),
        s !== "" && d != null && (d.caption = s),
        o?._r1c386c8571c5d9(o.text.length, o.text.length),
        r.cancelable && (r.preventDefault(), r.preventWindowOperation()),
        r.stopImmediatePropagation(),
        r.stopPropagation());
    }
    windowEventProcessor = n((r = null, t = null) => {
      (r?.type === sr.const_900 && (this.handleKeyUp(r), r.keyCode !== 13)) ||
        ((this.name = this.var_777?.text ?? ""),
        (this.password = this._rdc4d55e103332f?.text ?? ""),
        gr._r7f62dd3441fb83(gr.SOL_PROPERTY_LOGIN_NAME, this.name),
        this.var_589?._rd6bd47b85b708c(),
        this.dispatchEvent(new M(a.INIT_LOGIN)),
        this.var_1093?.disable());
    }, "windowEventProcessor");
    _r3ee76a5d61228c = n((r = null, t = null) => {
      this.var_1093?.enable();
    }, "_r3ee76a5d61228c");
    _r6e3a336904fabe = n((r, t) => {
      if (r.type !== u.CLICK) return;
      let i = this._rd209a96a39e57b[t.id] ?? null;
      i != null &&
        (this.useWebApi ? (this._rf4750acd292cfb = i) : (this.var_3798 = i.id),
        this.dispatchEvent(new M(a.AVATAR_SELECTED)));
    }, "_r6e3a336904fabe");
    showErrorMessage(r) {
      let t = this._window?.findChildByName("users_info");
      t != null &&
        (t.caption = `Error:

${r}`);
    }
    showInfoMessage(r) {
      let t = this._window?.findChildByName("users_info");
      t != null && (t.caption = r);
    }
  }
