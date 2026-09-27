// Extracted from HabboAirLauncher.deobf.js, line 248114.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/UserInfoCtrl.as
// Obfuscated name: _i748d2e67b028f0

class a {
  constructor(e, r, t, i = null, s = !1) {
    this._callerFrame = e;
    this._main = r;
    this.var_3372 = t;
    this.var_1631 = i;
    this._ra33a2a0b8ac807 = s;
  }
  static {
    n(this, "UserInfoCtrl");
  }
  static secsInMinute = 60;
  static secsInHour = 3600;
  static _rbeddd24a4cfb14 = 3600 * 24;
  static _r306aa92a9eba59 = 3600 * 24 * 365;
  _userId = 0;
  _data = null;
  var_2130 = null;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  load(e, r) {
    ((this.var_2130 = e),
      (this._userId = r),
      (this._data = null),
      this.refresh(),
      this._main.messageHandler._r22a875d9088e8a(this),
      this._main.connection?.send(new class_2352(r)));
  }
  onUserInfo(e) {
    e.userId === this._userId && ((this._data = e), this.refresh());
  }
  refresh() {
    if (this.var_2130?.disposed ?? !0) return;
    let e = this.prepare();
    if (e == null) return;
    if (this._data == null) {
      (e.findChildByName("fields") && (e.findChildByName("fields").visible = !1),
        e.findChildByName("loading_txt") && (e.findChildByName("loading_txt").visible = !0));
      return;
    }
    (e.findChildByName("fields") && (e.findChildByName("fields").visible = !0),
      e.findChildByName("loading_txt") && (e.findChildByName("loading_txt").visible = !1),
      this.setTxt(e, "name_txt", this._data.userName),
      this.setTxt(e, "registered_txt", a.formatTime(this._data._r324892456c9eda * 60)),
      this.setTxt(e, "cfh_count_txt", `${this._data._r86bcedd04e418e}`),
      this.setAlertTxt(e, "abusive_cfh_count_txt", this._data._r8e8d4319a69a12),
      this.setAlertTxt(e, "caution_count_txt", this._data._rb57f55752d06af),
      this.setAlertTxt(e, "ban_count_txt", this._data._r936f50d66bb54d),
      this.setAlertTxt(e, "trading_lock_count_txt", this._data._r78c00bf628e2fc),
      this.setTxt(e, "trading_lock_expiry_txt", this._data._r6b61ca0977434b, "No active lock"),
      this.setTxt(e, "last_login_txt", a.formatTime(this._data._r0b97b71a7cf3f7 * 60)),
      this.setTxt(e, "online_txt", this._data.online ? "Yes" : "No"),
      this.setTxt(e, "last_purchase_txt", this._data._rc1887112fb1b9e, "No purchases"),
      this.setTxt(e, "email_address_txt", this._data._r748b78e56ef4f5, "No email found"),
      this.setTxt(e, "id_bans_txt", `${this._data._rcf37756d2ca053}`),
      this.setTxt(e, "user_class_txt", this._data._r0bd0d1e8d0d69d, "-"),
      this.setTxt(e, "last_sanction_time_txt", this._data._r89256a55afaabf));
    let r = e.findChildByName("last_sanction_time_txt");
    (r != null &&
      this._data._r06dbe1623abb05 <= 48 &&
      (r.textColor = ((255 * (48 - this._data._r06dbe1623abb05)) / 48) << 16),
      this._data._r748b78e56ef4f5 === "No identity" && e.findChildByName("modaction_but")?.disable());
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._main.messageHandler._r18d38cc4df7a9e(this),
      (this._data = null),
      (this.var_2130 = null));
  }
  static formatTime(e) {
    return e < 2 * a.secsInMinute
      ? `${e} secs ago`
      : e < 2 * a.secsInHour
        ? `${Math.round(e / a.secsInMinute)} mins ago`
        : e < 2 * a._rbeddd24a4cfb14
          ? `${Math.round(e / a.secsInHour)} hours ago`
          : e < 2 * a._r306aa92a9eba59
            ? `${Math.round(e / a._rbeddd24a4cfb14)} days ago`
            : `${Math.round(e / a._r306aa92a9eba59)} years ago`;
  }
  logEvent(e, r) {
    this._main.logEvent(e, r);
  }
  trackAction(e) {
    if (this.var_1631 == null || this.var_1631.disposed) {
      this._main.trackGoogle(`userInfo_${e}`);
      return;
    }
    this === this.var_1631.callerUserInfo
      ? this.var_1631.trackAction(`callerUserInfo_${e}`)
      : this === this.var_1631.reportedUserInfo
        ? this.var_1631.trackAction(`reportedUserInfo_${e}`)
        : this.var_1631.trackAction(`userInfo_${e}`);
  }
  prepare() {
    let e = this.var_2130?.findChildByName("user_info");
    if (e == null) {
      if (
        ((e = this._main.getXmlWindow("user_info")),
        e == null || this.var_2130 == null)
      )
        return null;
      (this.var_2130.addChild(e),
        this._main.initMsg?._r4b53b923dcf15f ||
          e.findChildByName("chatlog_but")?.disable(),
        this._main.initMsg?._r46cd64cc3cbb58 ||
          e.findChildByName("message_but")?.disable(),
        this._main.initMsg?._r46cd64cc3cbb58 ||
          this._main.initMsg?._r16b62de507941d ||
          this._main.initMsg?._r32b135b1fc2e30 ||
          e.findChildByName("modaction_but")?.disable());
    }
    return (
      e.findChildByName("chatlog_but") &&
        (e.findChildByName("chatlog_but").procedure = this._raeacb7171830b6),
      e.findChildByName("roomvisits_but") &&
        (e.findChildByName("roomvisits_but").procedure = this._rd29b3c28d5c49f),
      e.findChildByName("habboinfotool_but") &&
        (e.findChildByName("habboinfotool_but").procedure = this._re7eb7a453cee1d),
      e.findChildByName("message_but") &&
        (e.findChildByName("message_but").procedure = this._r5bdb159318f65e),
      e.findChildByName("modaction_but") &&
        (e.findChildByName("modaction_but").procedure = this._r260d6863a66c5c),
      e.findChildByName("view_caution_count_txt") &&
        (e.findChildByName("view_caution_count_txt").procedure = this._r95fa213c9bfb98),
      e.findChildByName("view_ban_count_txt") &&
        (e.findChildByName("view_ban_count_txt").procedure = this._r35d920ef78b2f3),
      e.findChildByName("view_trading_lock_count_txt") &&
        (e.findChildByName("view_trading_lock_count_txt").procedure = this._r3e95ea155d554e),
      e.findChildByName("view_id_bans_txt") &&
        (e.findChildByName("view_id_bans_txt").procedure = this._rf0cd5fe93d86e9),
      e
    );
  }
  setAlertTxt(e, r, t) {
    let i = e.findChildByName(r),
      s = e.findChildByName(`view_${r}`);
    (s != null && (s.visible = t > 0), i != null && (i.caption = `${t}`));
  }
  setTxt(e, r, t, i = "") {
    let s = e.findChildByName(r);
    s != null && (s.caption = t == null || t.length === 0 ? i : t);
  }
  _raeacb7171830b6 = n((e) => {
    e.type !== u.CLICK ||
      this._data == null ||
      (this.trackAction("chatLog"),
      this._main._r2512b8a3ecad84.show(
        new N1(new UnkMessageComposer_1args_38d883(this._data.userId), this._main, WindowTracker.const_1070, this._data.userId),
        this._callerFrame,
        this._ra33a2a0b8ac807,
        !1,
        !0,
      ));
  }, "_raeacb7171830b6");
  _rd29b3c28d5c49f = n((e) => {
    e.type === u.CLICK &&
      this._data != null &&
      this._main._r2512b8a3ecad84.show(
        new Mpe(this._main, this._data.userId),
        this._callerFrame,
        this._ra33a2a0b8ac807,
        !1,
        !0,
      );
  }, "_rd29b3c28d5c49f");
  _re7eb7a453cee1d = n((e) => {
    e.type === u.CLICK &&
      this._data != null &&
      (this.trackAction("openInfoTool"),
      this._main.openHkPage("habboinfotool.url", this._data.userName));
  }, "_re7eb7a453cee1d");
  _r5bdb159318f65e = n((e) => {
    e.type === u.CLICK &&
      this._data != null &&
      (this.trackAction("openSendMessage"),
      this._main._r2512b8a3ecad84.show(
        new Wpe(this._main, this._data.userId, this._data.userName, this.var_3372),
        this._callerFrame,
        this._ra33a2a0b8ac807,
        !1,
        !0,
      ));
  }, "_r5bdb159318f65e");
  _r260d6863a66c5c = n((e) => {
    e.type === u.CLICK &&
      this._data != null &&
      (this.trackAction("openModAction"),
      this._main._r2512b8a3ecad84.show(
        new Epe(this._main, this._data.userId, this._data.userName, this.var_3372, this),
        this._callerFrame,
        this._ra33a2a0b8ac807,
        !1,
        !0,
      ));
  }, "_r260d6863a66c5c");
  _r95fa213c9bfb98 = n((e) => {
    e.type === u.CLICK && (this.trackAction("viewCautions"), this.showModeratorLog());
  }, "_r95fa213c9bfb98");
  _r35d920ef78b2f3 = n((e) => {
    e.type === u.CLICK && (this.trackAction("viewBans"), this.showModeratorLog());
  }, "_r35d920ef78b2f3");
  _r3e95ea155d554e = n((e) => {
    e.type === u.CLICK && (this.trackAction("viewTradingLocks"), this.showModeratorLog());
  }, "_r3e95ea155d554e");
  _rf0cd5fe93d86e9 = n((e) => {
    e.type === u.CLICK && (this.trackAction("viewIdentityInfo"), this.showIdentityInformation());
  }, "_rf0cd5fe93d86e9");
  showModeratorLog() {
    this._data != null &&
      this._main.openHkPage("moderatoractionlog.url", this._data.userName);
  }
  showIdentityInformation() {
    this._data != null &&
      this._main.openHkPage("identityinformationtool.url", `${this._data._r9c7b2f31e9715b}`);
  }
}
