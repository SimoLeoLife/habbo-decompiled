// Estratto da HabboAirLauncher.deobf.js, riga 265007.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/AchievementResolutionProgressView.as
// Nome offuscato: _i9128f8e1ce3f9f

class a {
  constructor(e) {
    this.var_63 = e;
  }
  static {
    n(this, "AchievementResolutionProgressView");
  }
  static PROGRESSBAR_LEFT = "achieved_left";
  static PROGRESSBAR_MID = "achieved_mid";
  static PROGRESSBAR_RIGHT = "achieved_right";
  var_3332 = 0;
  _badgeCode = "";
  _r63814e94609fab = 0;
  _stuffId = 0;
  _window = null;
  dispose() {
    (this._window?.dispose(), (this._window = null), (this.var_63 = null));
  }
  get disposed() {
    return this.var_63 == null;
  }
  get achievementId() {
    return this.var_3332;
  }
  get stuffId() {
    return this._stuffId;
  }
  get visible() {
    return this._window?.visible === !0;
  }
  show(e, r, t, i, s, o) {
    this.var_63 != null &&
      (this._window == null && this.createWindow(),
      this._window != null &&
        (r !== this.var_3332 && (this.initializeWindow(), this._window.center()),
        (this._stuffId = e),
        (this.var_3332 = r),
        (this._badgeCode = t),
        this.setProgress(i, s),
        this.setBadge(this._badgeCode),
        this.setLocalizations(),
        this.setCountdown(o),
        (this._window.visible = !0)));
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  setProgress(e, r) {
    if (this._window == null || this.var_63 == null) return;
    let t = Math.min(1, r > 0 ? e / r : 0);
    if (t > 0) {
      this._window.setVisibleChildren(!0, [a.PROGRESSBAR_LEFT, a.PROGRESSBAR_MID]);
      let s = this._window.findChildByName(a.PROGRESSBAR_RIGHT);
      s != null && (s.visible = t === 1);
    }
    let i = this._window.findChildByName(a.PROGRESSBAR_MID);
    (i != null && (i.width = this._r63814e94609fab * t),
      this.var_63.questEngine.localization._r43eae9731f5b27(
        "resolution.progress.progress",
        "progress",
        e.toString(),
      ),
      this.var_63.questEngine.localization._r43eae9731f5b27(
        "resolution.progress.progress",
        "total",
        r.toString(),
      ));
  }
  setBadge(e) {
    if (this._window == null) return;
    let r = this._window.findChildByName("achievement_badge"),
      t = r?.widget,
      s = r?.rootWindow?.findChildByName("bitmap");
    (s != null && (s.assetUri = "common_loading_icon"),
      t != null && (t.badgeId = e),
      r != null && (r.visible = !0));
  }
  setLocalizations() {
    if (this._window == null || this.var_63 == null) return;
    let e = this._window.findChildByName("achievement.name"),
      r = this._window.findChildByName("achievement.desc");
    (e != null &&
      (e.caption = this.var_63.questEngine.localization.getBadgeName(
        this._badgeCode,
      )),
      r != null &&
        (r.caption = this.var_63.questEngine.localization.getBadgeDesc(
          this._badgeCode,
        )));
  }
  setCountdown(e) {
    if (this._window == null) return;
    let t = this._window.findChildByName("time_left_widget")?.widget;
    t != null && ((t.seconds = e), (t.running = !0));
  }
  createWindow() {
    if (
      this.var_63 == null ||
      ((this._window = this.var_63.questEngine.getXmlWindow(
        "AchievementResolutionProgress",
      )),
      this._window == null)
    )
      return;
    let e = this._window.findChildByTag("close"),
      r = this._window.findChildByName("reset_button"),
      t = this._window.findChildByName(a.PROGRESSBAR_MID);
    (e != null && (e.procedure = (...i) => this.onWindowClose(i[0], i[1])),
      r != null && (r.procedure = (...i) => this._ra0f5066bdb43e1(i[0], i[1])),
      (this._r63814e94609fab = t?.width ?? 0));
  }
  initializeWindow() {
    this._window != null &&
      (this._window.center(),
      this._window.setVisibleChildren(!1, [
        a.PROGRESSBAR_LEFT,
        a.PROGRESSBAR_MID,
        a.PROGRESSBAR_RIGHT,
      ]));
  }
  onWindowClose(e, r) {
    e.type === u.CLICK && this.close();
  }
  _ra0f5066bdb43e1(e, r) {
    e.type === u.CLICK && (this.var_63?.resetResolution(this._stuffId), this.close());
  }
}
