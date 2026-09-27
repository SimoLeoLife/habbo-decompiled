// Extracted from HabboAirLauncher.deobf.js, line 208276.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/class_4390.as
// Obfuscated name: _i07810a5b4aa0ba

class {
  static {
    n(this, "class_4390");
  }
  _window = null;
  initialize(e, r, t, i) {
    ((this._window = r),
      (this.localizationKey = t[1] ?? ""),
      t.length > 2 && (this._window.width = Number.parseInt(t[2])),
      t.length > 3 && t[3] === "true" && (this._window.border = !0));
  }
  refresh() {}
  set localizationKey(e) {
    this._window != null && (this._window.caption = "${" + e + "}");
  }
}
