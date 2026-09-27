// Estratto da HabboAirLauncher.deobf.js, riga 262732.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/notifications/singular/HabboAlertDialogManager.as
// Nome offuscato: _i119355bc0e7458

class a {
  static {
    n(this, "HabboAlertDialogManager");
  }
  _windowManager;
  _localization;
  _habboHelp;
  constructor(e, r, t) {
    ((this._windowManager = e), (this._localization = r), (this._habboHelp = t));
  }
  dispose() {
    ((this._windowManager = null), (this._localization = null), (this._habboHelp = null));
  }
  _rb51462b7b7cd41(e, r = "") {
    this.showModerationMessage(e, r);
  }
  _r589b1ee78e4040(e, r = "") {
    this.showModerationMessage(e, r, !1);
  }
  handleUserBannedMessage(e) {
    this.showModerationMessage(e, "");
  }
  handleHotelClosingMessage(e) {
    (this._localization?._r43eae9731f5b27("opening.hours.shutdown", "m", String(e)),
      this._windowManager?._r3651220a1507f2("", "${opening.hours.title}", "${opening.hours.shutdown}"));
  }
  handleHotelMaintenanceMessage(e, r) {
    (this._localization?._r43eae9731f5b27("maintenance.shutdown", "m", String(e)),
      this._localization?._r43eae9731f5b27("maintenance.shutdown", "d", String(r)),
      this._windowManager?._r3651220a1507f2("", "${opening.hours.title}", "${maintenance.shutdown}"));
  }
  handleHotelClosedMessage(e, r, t) {
    if (t) {
      (this._localization?._r43eae9731f5b27("opening.hours.disconnected", "h", a.getTimeZeroPadded(e)),
        this._localization?._r43eae9731f5b27("opening.hours.disconnected", "m", a.getTimeZeroPadded(r)),
        this._windowManager?.alert("${opening.hours.title}", "${opening.hours.disconnected}", 0, (i, s) => {
          i.dispose();
        }));
      return;
    }
    (this._localization?._r43eae9731f5b27("opening.hours.closed", "h", a.getTimeZeroPadded(e)),
      this._localization?._r43eae9731f5b27("opening.hours.closed", "m", a.getTimeZeroPadded(r)),
      this._windowManager?.alert("${opening.hours.title}", "${opening.hours.closed}", 0, (i, s) => {
        i.dispose();
      }));
  }
  handleLoginFailedHotelClosedMessage(e, r) {
    (this._localization?._r43eae9731f5b27("opening.hours.disconnected", "h", a.getTimeZeroPadded(e)),
      this._localization?._r43eae9731f5b27("opening.hours.disconnected", "m", a.getTimeZeroPadded(r)),
      this._windowManager?.alert("${opening.hours.title}", "${opening.hours.disconnected}", 0, (t, i) => {
        t.dispose();
      }));
  }
  handleBanInfoMessage(e, r, t) {
    let i = new Date();
    i.setTime(i.getTime() + r * 1e3);
    let s = r > -1 ? i.toLocaleString() : "",
      o = (() => {
        if (t.length > 0) return t.replace("{expiryDate}", s);
        let d = this._localization?.getLocalization("login.banned.until") ?? "",
          c = this._localization?.getLocalization("login.banned.reason") ?? "";
        return `<b>${d}</b><br>${s}<br><b>${c}</b><br>${e}`;
      })();
    this._windowManager?._r3651220a1507f2("", "", o);
  }
  showModerationMessage(e, r, t = !0) {
    let i = e.replace(/\\r/g, "\r");
    this._windowManager?._r3651220a1507f2(
      "",
      "${mod.alert.title}",
      i,
      "${mod.alert.link}",
      r,
      null,
      class_3852.FRANK_NEUTRAL,
      null,
      () => {
        t && this._habboHelp?.showHabboWay();
      },
    );
  }
  static getTimeZeroPadded(e) {
    return `0${e}`.slice(-2);
  }
}
