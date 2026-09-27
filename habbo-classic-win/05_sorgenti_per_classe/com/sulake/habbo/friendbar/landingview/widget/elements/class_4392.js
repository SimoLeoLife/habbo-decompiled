// Extracted from HabboAirLauncher.deobf.js, line 207709.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/class_4392.as
// Obfuscated name: _ic8f2d7458465f8

class {
  static {
    n(this, "class_4392");
  }
  _landingView = null;
  _window = null;
  var_4206 = !1;
  _timeRemainingKey = "";
  _expiredKey = "";
  get disposed() {
    return this._landingView == null;
  }
  get layoutName() {
    return "element_timer";
  }
  get landingView() {
    return this._landingView;
  }
  dispose() {
    ((this._landingView = null), (this._window = null));
  }
  initialize(e, r, t, i) {
    ((this._landingView = e),
      (this._window = r),
      (this.var_4206 = t[1] === "true"),
      (this._timeRemainingKey = t[4] ?? ""),
      (this._expiredKey = t[5] ?? ""),
      this.setCaption(null),
      this.var_4206 &&
        ((this._window.x = Number.parseInt(t[2] ?? "0")),
        (this._window.y = Number.parseInt(t[3] ?? "0"))));
  }
  refresh() {}
  isFloating(e) {
    return this.var_4206;
  }
  setTimer(e) {
    let r = this._window?.findChildByName("countdown_widget"),
      t = r?.widget;
    (r != null && (r.visible = e > 0),
      t != null && (t.seconds = e),
      this.setCaption(e > 0 ? this._timeRemainingKey : this._expiredKey));
  }
  setCaption(e) {
    let r = this._window?.findChildByName("timer_caption_txt"),
      t = e != null && e !== "";
    r != null && ((r.visible = t), t && (r.caption = "${" + e + "}"));
  }
}
