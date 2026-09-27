// Extracted from HabboAirLauncher.deobf.js, line 155408.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3b3366fae3ac25

class {
    constructor(e) {
      this._r6ad6d65327357c = e;
      let r = gr.readSOLString(gr.SOL_PROPERTY_MACHINE_ID, gr.generateRandomHexString(32)) ?? gr.generateRandomHexString(32);
      (gr._r7f62dd3441fb83(gr.SOL_PROPERTY_MACHINE_ID, r), (this._rb789e6de8b83f6 = this._r792c19ec5e2044(r)));
    }
    static {
      n(this, "UnkClass_3b3366");
    }
    _ra75e017568ad17 = { ...ICt };
    _rd2f4c096e9856f = null;
    _listeners = [];
    var_1271 = !1;
    _rb789e6de8b83f6;
    _rfd25d2545e7870 = "";
    _r837576d1899bca = null;
    _raed0251aa05e76 = null;
    _r2494742b6004e0 = null;
    _r017d18d1dd00ac = null;
    _r8c85a5958005b2(e) {
      if (
        ((this._rd2f4c096e9856f = e),
        this._r837576d1899bca != null && this._r017d18d1dd00ac === this._r837576d1899bca.uri)
      ) {
        let r = this._rec1b2e41e10858(this._r837576d1899bca);
        if (r != null) return (this._rd46da5a44937bb(r, this._raed0251aa05e76, this._r2494742b6004e0), !0);
      }
      return !1;
    }
    addListener(e) {
      return this._listeners.includes(e) ? !1 : (this._listeners.push(e), !0);
    }
    removeListener(e) {
      let r = this._listeners.indexOf(e);
      r >= 0 && this._listeners.splice(r, 1);
    }
    _rad4ea192ae10f0(e, r) {
      for (let t of this._listeners) t.disposed || t._rbadee3f6542fd0(e, r);
    }
    _r8108e27836821f(e, r) {
      for (let t of this._listeners) t.disposed || t._ra092543d02834d(e, r);
    }
    _r62a583b61944a0(e, r, t, i, s = !1) {
      let o = null,
        d = i;
      ((this._r017d18d1dd00ac = null), typeof d == "string" && (d = { error: d }));
      let c = r.toString();
      if (typeof d == "object" && d != null) {
        let f = d;
        f.error == null
          ? ((o = Array.isArray(f.errors) ? f.errors.map(String) : null),
            (c = o != null && o.length > 0 ? o[0] : String(f.message ?? "")))
          : (c = String(f.error));
      }
      switch (c) {
        case HabboWebApiError.INVALID_CAPTCHA:
        case HabboWebApiError.REGISTRATION_CAPTCHA_EMPTY:
        case HabboWebApiError.REGISTRATION_CAPTCHA_INVALID:
          (o == null || o.length === 1) && (this._r017d18d1dd00ac = e);
          break;
      }
      for (let f of this._listeners) f.disposed || f.habboWebApiError(e, r, t, d, s);
    }
    dispose() {
      if (!this.var_1271) {
        for (let e of Object.values(this._ra75e017568ad17)) e.dispose();
        ((this._ra75e017568ad17 = {}),
          (this._listeners = []),
          (this._r6ad6d65327357c = ""),
          (this.var_1271 = !0));
      }
    }
    get disposed() {
      return this.var_1271;
    }
    emailChange(e) {
      this._r3f06ea0e4bf626("emailChange", { newEmail: e });
    }
    passwordChange(e) {
      this._r3f06ea0e4bf626("passwordChange", { newPassword: e });
    }
    tosAccept() {
      this._rd46da5a44937bb("tosAccept");
    }
    captcha() {
      this._rd46da5a44937bb("captcha");
    }
    achievements() {
      this._rd46da5a44937bb("achievements");
    }
    achievementsForId(e) {
      this._rd46da5a44937bb("achievementsForId", null, ["id", e]);
    }
    time() {
      this._rd46da5a44937bb("time");
    }
    activate(e) {
      this._r3f06ea0e4bf626("activate", { token: e });
    }
    login(e, r) {
      this._r3f06ea0e4bf626("login", { email: e, password: r });
    }
    facebook(e) {
      this._r3f06ea0e4bf626("facebook", { accessToken: e });
    }
    rpx(e) {
      this._r3f06ea0e4bf626("rpx", { token: e });
    }
    logout() {
      this._rd46da5a44937bb("logout");
    }
    authenticateUser() {
      this._rd46da5a44937bb("authenticateUser");
    }
    forgotPassword(e) {
      this._r3f06ea0e4bf626("forgotPassword", { email: e });
    }
    changePassword(e, r, t, i) {
      this._r3f06ea0e4bf626("changePassword", { token: e, password: r, answer1: t, answer2: i });
    }
    groups(e) {
      this._rd46da5a44937bb("groups", null, ["id", e]);
    }
    members(e) {
      this._rd46da5a44937bb("members", null, ["id", e]);
    }
    hello() {
      this._rd46da5a44937bb("hello");
    }
    register(e, r, t, i, s, o, d) {
      ((this._rd2f4c096e9856f = d),
        this._r3f06ea0e4bf626("register", {
          email: e,
          password: r,
          passwordRepeated: r,
          birthdate: { day: t, month: i, year: s },
          termsOfServiceAccepted: o,
        }));
    }
    popularRooms() {
      this._rd46da5a44937bb("popularRooms");
    }
    room(e) {
      this._rd46da5a44937bb("room", null, ["roomId", e]);
    }
    hotlooks() {
      this._rd46da5a44937bb("hotlooks");
    }
    logCrash(e) {
      this._r3f06ea0e4bf626("logCrash", { message: e });
    }
    logError(e) {
      this._r3f06ea0e4bf626("logError", { message: e });
    }
    logLoginStep(e, r) {
      this._r3f06ea0e4bf626("logLoginStep", { step: e, data: r });
    }
    clientUrl() {
      this._rd46da5a44937bb("clientUrl");
    }
    nameCheck(e) {
      this._r3f06ea0e4bf626("nameCheck", { name: e });
    }
    selectUser(e) {
      this._r3f06ea0e4bf626("selectUser", { name: e });
    }
    selectRoom(e) {
      this._r3f06ea0e4bf626("selectRoom", { roomIndex: e });
    }
    safetyLockStatus() {
      this._rd46da5a44937bb("safetyLockStatus");
    }
    safetyLockDisable() {
      this._rd46da5a44937bb("safetyLockDisable");
    }
    resetTrustedLogins() {
      this._rd46da5a44937bb("resetTrustedLogins");
    }
    safetyLockSave(e, r, t, i, s) {
      this._r3f06ea0e4bf626("safetyLockSave", {
        password: e,
        questionId1: r,
        answer1: t,
        questionId2: i,
        answer2: s,
      });
    }
    safetyLockQuestions() {
      this._rd46da5a44937bb("safetyLockQuestions");
    }
    safetyLockUnlock(e, r, t) {
      this._r3f06ea0e4bf626("safetyLockUnlock", { answer1: e, answer2: r, trustDevice: t });
    }
    commonFriends(e) {
      this._rd46da5a44937bb("commonFriends", null, ["id", e]);
    }
    preferences() {
      this._rd46da5a44937bb("preferences");
    }
    self() {
      this._rd46da5a44937bb("self");
    }
    ping() {
      this._rd46da5a44937bb("ping");
    }
    saveUser() {
      this._rd46da5a44937bb("saveUser");
    }
    saveVisibility(e) {
      this._r3f06ea0e4bf626("saveVisibility", { visibility: e });
    }
    campaignMessages() {
      this._rd46da5a44937bb("campaignMessages");
    }
    campaignMessagesAll() {
      this._rd46da5a44937bb("campaignMessagesAll");
    }
    campaignMessagesSeen() {
      this._rd46da5a44937bb("campaignMessagesSeen");
    }
    discussions() {
      this._rd46da5a44937bb("discussions");
    }
    creditBalance() {
      this._rd46da5a44937bb("creditBalance");
    }
    friendRequestsSent() {
      this._rd46da5a44937bb("friendRequestsSent");
    }
    friendRequestsReceived() {
      this._rd46da5a44937bb("friendRequestsReceived");
    }
    saveLooks(e, r) {
      this._r3f06ea0e4bf626("saveLooks", { figure: e, gender: r });
    }
    avatars() {
      this._rd46da5a44937bb("avatars");
    }
    selectAvatar(e) {
      this._r3f06ea0e4bf626("selectAvatar", { uniqueId: e });
    }
    changeEmail(e, r) {
      this._r3f06ea0e4bf626("changeEmail", { newEmail: e, currentPassword: r });
    }
    createAvatar(e) {
      this._r3f06ea0e4bf626("createAvatar", { name: e });
    }
    profile() {
      this._rd46da5a44937bb("profile");
    }
    ssoToken() {
      this._rd46da5a44937bb("ssoToken");
    }
    validateItunesIAP(e, r, t, i) {
      this._r3f06ea0e4bf626("validateItunesIAP", {
        transactionId: e,
        receipt: r,
        centPrice: t,
        priceLocale: i,
      });
    }
    validatePlaystoreIAP(e, r, t, i, s) {
      this._r3f06ea0e4bf626("validatePlaystoreIAP", {
        transactionId: e,
        receipt: r,
        centPrice: t,
        priceLocale: i,
        signature: s,
      });
    }
    setDeviceToken(e) {
      ((this._rfd25d2545e7870 = e), this._r3f06ea0e4bf626("setDeviceToken", { device_token: e }));
    }
    _rbeaa921d108fc2() {
      return this._rfd25d2545e7870;
    }
    _r3f06ea0e4bf626(e, r) {
      let t = new UnkClass_87154f();
      (Object.assign(t, r), this._rd46da5a44937bb(e, t));
    }
    _r792c19ec5e2044(e) {
      let r = new Xh(),
        t = Mc.fromString(`${yCt}${e}`),
        i = r.hash(re.compress(Mc.toArray(t).toUint8Array()));
      return `${e}:${Mc.fromArray(i)}`;
    }
    _rec1b2e41e10858(e) {
      for (let [r, t] of Object.entries(this._ra75e017568ad17)) if (t.uri === e.uri) return r;
      return null;
    }
    _r08c2a173edc984(e, r) {
      let t = e;
      for (let i = 0; r != null && i < r.length; i += 2) {
        let s = String(r[i]),
          o = String(r[i + 1] ?? "");
        t = t.replace(`:${s}`, o);
      }
      return `${this._r6ad6d65327357c}${t}`;
    }
    _rd46da5a44937bb(e, r = null, t = null) {
      let i = this._ra75e017568ad17[e];
      if (((this._r837576d1899bca = i), (this._raed0251aa05e76 = r), (this._r2494742b6004e0 = t), i == null))
        return;
      this._rd2f4c096e9856f != null &&
        ((r ??= new UnkClass_87154f()), (r.captchaToken = this._rd2f4c096e9856f), (this._rd2f4c096e9856f = null));
      let s = new UnkClass_636490(this._r08c2a173edc984(i.uri, t));
      ((s._rde0d8d3450f335 = !0),
        i._r9a35f195465ba4.toUpperCase() === UnkConstants_8f4767.GET
          ? r != null && r.toString().length > 0 && (s.data = r)
          : ((s.data = r != null && r.toString().length > 0 ? JSON.stringify(r) : "{}"),
            s._r7e4347d57a154d.push(new UnkClass_9ac0eb("Content-type", "application/json"))),
        this.addHeaders(s),
        i._r27cab0ca7d9ed7(this, s));
    }
    addHeaders(e) {
      (e._r7e4347d57a154d.push(new UnkClass_9ac0eb("X-Habbo-Device-ID", this._rb789e6de8b83f6)),
        e._r7e4347d57a154d.push(new UnkClass_9ac0eb("x-habbo-api-deviceid", this._rb789e6de8b83f6)),
        e._r7e4347d57a154d.push(new UnkClass_9ac0eb("X-Habbo-Device-Type", S6.platformString())));
    }
  }
