// Estratto da HabboAirLauncher.deobf.js, riga 207778.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/ConcurrentUsersInfoElementHandler.as
// Nome offuscato: _i9439df8b752f0f

class a {
  static {
    n(this, "ConcurrentUsersInfoElementHandler");
  }
  static STATE_DISABLED = 0;
  static STATE_ACTIVE = 1;
  static STATE_REDEEM = 2;
  static STATE_REWARDED = 3;
  static UPDATE_INTERVAL_MS = 5e3;
  _landingView = null;
  var_17 = null;
  _localizationKey = "";
  _state = -1;
  var_3576 = -1;
  var_3485 = -1;
  _window = null;
  _r65a67a0bca4899 = new _i05394ecc0c0c4d(a.UPDATE_INTERVAL_MS);
  _disposed = !1;
  constructor() {
    this._r65a67a0bca4899.addEventListener(DeBouncer.addEventListener, this._r74a888e08bca64);
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    (this._r65a67a0bca4899.stop(),
      this._r65a67a0bca4899.removeEventListener(DeBouncer.addEventListener, this._r74a888e08bca64),
      (this._landingView = null),
      (this.var_17 = null),
      (this._window = null),
      (this._disposed = !0));
  }
  initialize(e, r, t, i) {
    ((this.var_17 = i),
      (this._landingView = e),
      (this._window = r),
      (this._localizationKey = t[1] ?? ""),
      (this._window.findChildByName("users_desc").caption = "${" + this._localizationKey + "}"));
    let s = this._window.findChildByName("badge_image"),
      o = t.length > 2 ? (t[2] ?? "ConcurrentUsersReward") : "ConcurrentUsersReward";
    (s != null && (s.assetUri = "${image.library.url}album1584/" + o + ".png"),
      this.updateLocalization(),
      (r.procedure = this.onButton),
      e._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_3033((d) => {
          this.onConcurrentUsersGoalProgress(d);
        }),
      ),
      this._r65a67a0bca4899.start());
  }
  refresh() {
    this._landingView?.send(new class_3002());
  }
  _r74a888e08bca64 = n((e) => {
    this._window == null ||
      !this._window.visible ||
      !(this._landingView?._rdbcc082d1e6287 ?? !1) ||
      this.refresh();
  }, "_r74a888e08bca64");
  updateLocalization() {
    if (this._landingView == null || this._window == null) return;
    let e = "landing.view.concurrentusers.caption",
      r = "landing.view.concurrentusers.bodytext";
    switch (
      (this._landingView.localizationManager?._r43eae9731f5b27(
        this._localizationKey,
        "userCount",
        String(this.var_3576),
      ),
      this._landingView.localizationManager?._r43eae9731f5b27(
        this._localizationKey,
        "userGoal",
        String(this.var_3485),
      ),
      this._landingView.localizationManager?._r43eae9731f5b27(
        "landing.view.concurrentusers.bodytext",
        "userCount",
        String(this.var_3576),
      ),
      this._landingView.localizationManager?._r43eae9731f5b27(
        "landing.view.concurrentusers.bodytext",
        "userGoal",
        String(this.var_3485),
      ),
      this._landingView.localizationManager?._r43eae9731f5b27(
        "landing.view.concurrentusers.bodytext",
        "domain",
        this._landingView.localizationManager?.getLocalization("landing.view.hotel.domain", "Habbo") ??
          "Habbo",
      ),
      this._state)
    ) {
      case a.STATE_DISABLED:
      case a.STATE_ACTIVE:
        ((this._window.findChildByName("state.active").visible = !0),
          (this._window.findChildByName("state.achieved").visible = !1));
        break;
      case a.STATE_REDEEM:
        (this._r65a67a0bca4899.stop(),
          (e += ".success"),
          (r += ".success"),
          (this._window.findChildByName("state.active").visible = !1),
          this._window.findChildByName("state.active").enable(),
          (this._window.findChildByName("state.achieved").visible = !0),
          (this._window.findChildByName("action_button").visible = !0));
        break;
      case a.STATE_REWARDED:
        (this._r65a67a0bca4899.stop(),
          (e += ".success"),
          (r += ".success"),
          (this._window.findChildByName("state.active").visible = !1),
          (this._window.findChildByName("state.achieved").visible = !0),
          (this._window.findChildByName("action_button").visible = !1));
        break;
    }
    let t = this.var_17?.getElementByName("bodytext");
    t != null && (t.localizationKey = r);
    let i = this.var_17?.getElementByName("caption");
    i != null && (i.localizationKey = e);
  }
  onConcurrentUsersGoalProgress(e) {
    let r = e.getParser();
    ((this._state = r?.state ?? this._state),
      (this.var_3576 = r?.userCount ?? this.var_3576),
      (this.var_3485 = r?.userCountGoal ?? this.var_3485),
      this.updateLocalization());
  }
  onButton = n((e) => {
    e.type === u.CLICK && this.onClick();
  }, "onButton");
  onClick() {
    (this._landingView?.send(new class_3621()),
      this._landingView?.send(new class_3002()),
      this._window?.findChildByName("state.active")?.disable());
  }
}
