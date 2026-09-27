// Extracted from HabboAirLauncher.deobf.js, line 264941.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/AchievementResolutionCompletedView.as
// Obfuscated name: _i7e7db3ed594686

class a {
  constructor(e) {
    this.var_63 = e;
  }
  static {
    n(this, "AchievementResolutionCompletedView");
  }
  static const_170 = "cancel_button";
  static const_181 = "header_button_close";
  _badgeCode = "";
  _stuffCode = "";
  _window = null;
  dispose() {
    ((this.var_63 = null), this._window?.dispose(), (this._window = null));
  }
  get disposed() {
    return this.var_63 == null;
  }
  get visible() {
    return this._window?.visible === !0;
  }
  show(e, r) {
    (this._window == null && this.createWindow(),
      this._window != null &&
        (this.initializeWindow(),
        (this._stuffCode = e),
        (this._badgeCode = r),
        this.setBadge(this._badgeCode),
        (this._window.visible = !0)));
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  createWindow() {
    this.var_63 != null &&
      ((this._window = this.var_63.questEngine.getXmlWindow(
        "AchievementResolutionCompleted",
      )),
      this._window != null &&
        (this.addClickListener(a.const_181), this.addClickListener(a.const_170)));
  }
  addClickListener(e) {
    let r = this._window?.findChildByName(e);
    r?.addEventListener(u.CLICK, (...t) => this.onMouseClick(t[0]));
  }
  onMouseClick(e) {
    switch (e.target?.name) {
      case a.const_181:
      case a.const_170:
        this.close();
        break;
    }
  }
  initializeWindow() {
    this._window?.center();
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
}
