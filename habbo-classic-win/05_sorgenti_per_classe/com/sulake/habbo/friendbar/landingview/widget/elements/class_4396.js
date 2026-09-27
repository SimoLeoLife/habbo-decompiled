// Extracted from HabboAirLauncher.deobf.js, line 208201.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/class_4396.as
// Obfuscated name: _i9a4383bf310e53

class extends class_4383 {
  static {
    n(this, "class_4396");
  }
  _badgeRequestCode = "";
  var_4206 = !1;
  initialize(e, r, t, i) {
    (super.initialize(e, r, t, i),
      (this._badgeRequestCode = t[2] ?? ""),
      (this.var_4206 = t[3] === "true"));
  }
  isFloating(e) {
    return this.var_4206;
  }
  onClick() {
    (this.landingView._r81aa7f3af9edbc(this._badgeRequestCode),
      this.landingView.tracking?.trackGoogle("landingView", `click_requestbadge_${this._badgeRequestCode}`));
  }
}
