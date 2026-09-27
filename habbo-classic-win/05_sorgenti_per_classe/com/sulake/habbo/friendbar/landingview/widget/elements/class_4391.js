// Estratto da HabboAirLauncher.deobf.js, riga 207646.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/class_4391.as
// Nome offuscato: _i67de10f0eb499f

class {
  static {
    n(this, "class_4391");
  }
  _landingView = null;
  _window = null;
  var_4206 = !1;
  var_1174 = null;
  var_3302 = !1;
  get disposed() {
    return this._landingView == null;
  }
  get layoutName() {
    return "element_community_goal_score";
  }
  dispose() {
    ((this._landingView = null),
      (this._window = null),
      this.var_1174?.stop(),
      this.var_1174?.removeEventListener(DeBouncer.addEventListener, this.onPollTimer),
      (this.var_1174 = null));
  }
  initialize(e, r, t, i) {
    ((this._landingView = e), (this._window = r));
    let s = Number.parseInt(t[1] ?? "0"),
      o = Number.parseInt(t[2] ?? "50"),
      d = Number.parseInt(t[3] ?? "1000");
    this.var_4206 = t[4] === "true";
    let f = this._window.findChildByName("running_number_widget")?.widget;
    (f != null && ((f.digits = s), (f.updateFrequency = o)),
      this.var_4206 &&
        ((this._window.x = Number.parseInt(t[5] ?? "0")),
        (this._window.y = Number.parseInt(t[6] ?? "0"))),
      e._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_3726((l) => {
          this.onCommunityGoalProgress(l);
        }),
      ),
      (this.var_1174 = new _i05394ecc0c0c4d(d)),
      this.var_1174.addEventListener(DeBouncer.addEventListener, this.onPollTimer));
  }
  disable() {
    this.var_1174?.stop();
  }
  refresh() {
    (this._landingView?.send(new class_2982()), (this.var_3302 = !1), this.var_1174?.start());
  }
  isFloating(e) {
    return this.var_4206;
  }
  onCommunityGoalProgress(e) {
    let r = e.getParser()?.data,
      i = this._window?.findChildByName("running_number_widget")?.widget;
    r == null ||
      i == null ||
      (this.var_3302
        ? (i.number = r.communityTotalScore)
        : ((i.initialNumber = r.communityTotalScore), (this.var_3302 = !0)));
  }
  onPollTimer = n((e) => {
    this._landingView?.send(new class_2982());
  }, "onPollTimer");
}
