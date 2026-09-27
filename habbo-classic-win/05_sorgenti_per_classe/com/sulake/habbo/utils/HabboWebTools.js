// Extracted from HabboAirLauncher.deobf.js, line 67906.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/HabboWebTools.as
// Obfuscated name: _ie12ece05c2a463

class a {
  static {
    n(this, "HabboWebTools");
  }
  static GOTO_ROOM_FROM_WEB_CALLBACK = "openroom";
  static HABBLET_AVATARS = "avatars";
  static HABBLET_MINI_MAIL = "minimail";
  static HABBLET_NEWS = "news";
  static HABBLET_PRIVACY = "privacy";
  static HABBLET_ROOM_ENTER_AD = "roomenterad";
  static OPEN_INTERNAL_LINK_FROM_WEB_CALLBACK = "openlink";
  static const_929 = "advertisement";
  static WINDOW_HABBO_MAIN = "habboMain";
  static const_717 = "_self";
  static var_1450 = !1;
  static _rfa880eec4954ff = "";
  static set isSpaWeb(e) {
    this.var_1450 = e;
  }
  static set baseUrl(e) {
    this._rfa880eec4954ff = e;
  }
  static logEventLog(e) {
    try {
      this.call("FlashExternalInterface.logEventLog", e);
    } catch {}
  }
  static openWebPage(e, r = "") {
    if (((r == null || r === "") && (r = a.WINDOW_HABBO_MAIN), !e)) return;
    let t = this.resolveUrl(e);
    if (!this.available()) {
      this.navigateToURL(t, r);
      return;
    }
    try {
      let i = this._r88793b2e6bfa0c();
      i.includes("firefox") || i.includes("msie") ? this.openWindow(t, r) : this.navigateToURL(t, r);
    } catch {}
  }
  static openPage(e) {
    try {
      this.available()
        ? this.call("FlashExternalInterface.openPage", e)
        : this.navigateToURL(this.resolveUrl(e), a.WINDOW_HABBO_MAIN);
    } catch {}
  }
  static sendHeartBeat() {
    try {
      this.available() && this.call("FlashExternalInterface.heartBeat");
    } catch {}
  }
  static openWebPageAndMinimizeClient(e) {
    try {
      if (this.available() && this.var_1450) {
        this.openPage(e);
        return;
      }
      (this.navigateToURL(this.resolveUrl(e), a.WINDOW_HABBO_MAIN),
        this.available() &&
          this.call("FlashExternalInterface.openWebPageAndMinimizeClient", e));
    } catch {}
  }
  static closeWebPageAndRestoreClient() {
    try {
      this.available() && this.call("FlashExternalInterface.closeWebPageAndRestoreClient");
    } catch {}
  }
  static openWebHabblet(e, r = null) {
    try {
      if (this.available()) {
        this.call("FlashExternalInterface.openHabblet", e, r);
        return;
      }
      let t = "";
      switch (e) {
        case a.HABBLET_AVATARS:
          t = `${this._rfa880eec4954ff}/settings/avatars`;
          break;
        case a.HABBLET_PRIVACY:
          t = `${this._rfa880eec4954ff}/settings/privacy`;
          break;
        case a.HABBLET_NEWS:
          t = `${this._rfa880eec4954ff}/community/category/all/1/`;
          break;
        default:
          break;
      }
      t.length > 0 && this.navigateToURL(t, a.WINDOW_HABBO_MAIN);
    } catch {}
  }
  static closeWebHabblet(e, r = null) {
    try {
      this.available() && this.call("FlashExternalInterface.closeHabblet", e, r);
    } catch {}
  }
  static sendDisconnectToWeb(e, r) {
    try {
      this.available() && this.call("FlashExternalInterface.disconnect", e, r);
    } catch {}
  }
  static showGame(e) {
    try {
      this.available() && this.call("FlashExternalGameInterface.showGame", e);
    } catch {}
  }
  static hideGame() {
    try {
      this.available() && this.call("FlashExternalGameInterface.hideGame");
    } catch {}
  }
  static navigateToURL(e, r = null) {
    !e || e.length === 0 || this.openWindow(e, r ?? a.const_717);
  }
  static _rac9f7719bb1576(e) {
    try {
      this.available()
        ? this.call("FlashExternalInterface.openExternalLink", this._r42a194beb384db(e))
        : this.navigateToURL(e, a.WINDOW_HABBO_MAIN);
    } catch {}
  }
  static roomVisited(e) {
    try {
      this.available() && this.call("FlashExternalInterface.roomVisited", e);
    } catch {}
  }
  static openMinimail(e) {
    try {
      this.available()
        ? this.var_1450
          ? this.call("FlashExternalInterface.openMinimail", e)
          : this.openWebHabblet(a.HABBLET_MINI_MAIL, e)
        : this.openWebHabblet(a.HABBLET_MINI_MAIL, e);
    } catch {}
  }
  static openNews() {
    try {
      this.available()
        ? this.var_1450
          ? this.call("FlashExternalInterface.openNews")
          : this.openWebHabblet(a.HABBLET_NEWS)
        : this.openWebHabblet(a.HABBLET_NEWS);
    } catch {}
  }
  static closeNews() {
    try {
      this.available()
        ? this.var_1450
          ? this.call("FlashExternalInterface.closeNews")
          : this.closeWebHabblet(a.HABBLET_NEWS)
        : this.closeWebHabblet(a.HABBLET_NEWS);
    } catch {}
  }
  static openAvatars() {
    try {
      this.available()
        ? this.var_1450
          ? this.call("FlashExternalInterface.openAvatars")
          : this.openWebHabblet(a.HABBLET_AVATARS)
        : this.openWebHabblet(a.HABBLET_AVATARS);
    } catch {}
  }
  static _r3d9702d1fcb814() {
    this.openWebHabblet(a.HABBLET_PRIVACY);
  }
  static openRoomEnterAd() {
    try {
      this.available()
        ? this.var_1450
          ? this.call("FlashExternalInterface.openRoomEnterAd")
          : this.openWebHabblet(a.HABBLET_ROOM_ENTER_AD, "")
        : this.openWebHabblet(a.HABBLET_ROOM_ENTER_AD, "");
    } catch {}
  }
  static updateFigure(e) {
    try {
      this.available() &&
        this.var_1450 &&
        this.call("FlashExternalInterface.updateFigure", e);
    } catch {}
  }
  static _rb24cb732db440a() {
    try {
      this.available() && this.call("FlashExternalInterface.logout");
    } catch {}
  }
  static available() {
    return this._r4373d77fc78e84("FlashExternalInterface.available") == null
      ? this._r4373d77fc78e84("FlashExternalInterface") != null
      : !!this._r917ce7c5e2378b("FlashExternalInterface.available");
  }
  static _r88793b2e6bfa0c() {
    return typeof navigator < "u" ? navigator.userAgent.toLowerCase() : "";
  }
  static resolveUrl(e) {
    if (!e || e.startsWith("http")) return e;
    let r = this._rfa880eec4954ff.endsWith("/") ? this._rfa880eec4954ff.slice(0, -1) : this._rfa880eec4954ff,
      t = e.startsWith("/") ? e.slice(1) : e;
    return r.length > 0 ? `${r}/${t}` : t;
  }
  static openWindow(e, r) {
    return typeof window > "u"
      ? !1
      : r === a.const_717
        ? (window.location.assign(e), !0)
        : window.open(e, r) != null;
  }
  static _r42a194beb384db(e) {
    let r = globalThis.escape;
    return r != null ? r(e) : encodeURIComponent(e);
  }
  static call(e, ...r) {
    let t = this._r4373d77fc78e84(e);
    if (t != null) return t(...r);
  }
  static _r917ce7c5e2378b(e) {
    let r = globalThis;
    for (let t of e.split(".")) {
      if (r == null || (typeof r != "object" && typeof r != "function")) return;
      r = r[t];
    }
    return r;
  }
  static _r4373d77fc78e84(e) {
    let r = this._r917ce7c5e2378b(e);
    return typeof r == "function" ? r : null;
  }
}
