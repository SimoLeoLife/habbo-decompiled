// Extracted from HabboAirLauncher.deobf.js, line 267760.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/theme/RewardTrackTheme.as
// Obfuscated name: _i1d4e3f80ae1ff4

class a {
  constructor(e, r, t, i, s) {
    this._key = e;
    this._darkColor = r;
    this._mediumColor = t;
    this._lightColor = i;
    this._activeColor = s;
  }
  static {
    n(this, "RewardTrackTheme");
  }
  static BLUE = "blue";
  static ORANGE = "orange";
  static FOREST_GREEN = "forest_green";
  static RED = "red";
  static CYAN = "cyan";
  static RECOLORABLE_LIGHT = "RECOLORABLE_LIGHT";
  static RECOLORABLE_MEDIUM = "RECOLORABLE_MEDIUM";
  static RECOLORABLE_DARK = "RECOLORABLE_DARK";
  static resolve(e) {
    switch (e) {
      case a.ORANGE:
        return new a(a.ORANGE, 13203736, 16768946, 16773078, 16764817);
      case a.FOREST_GREEN:
        return new a(a.FOREST_GREEN, 4164165, 13494987, 14808031, 12115894);
      case a.RED:
        return new a(a.RED, 12077899, 15846604, 16309725, 15186104);
      case a.CYAN:
        return new a(a.CYAN, 2072243, 13103093, 14481403, 11921905);
      default:
        return new a(a.BLUE, 3503801, 13624057, 14543865, 12441327);
    }
  }
  _r196e3a5ab136d2(e) {
    if ((this._rccfb033385949a(e), "numChildren" in e && typeof e.getChildAt == "function")) {
      let r = e;
      for (let t = 0; t < r.numChildren; t++) this._r196e3a5ab136d2(r.getChildAt(t));
    }
  }
  _rccfb033385949a(e) {
    e.tags.indexOf(a.RECOLORABLE_LIGHT) >= 0
      ? (e.color = this._lightColor)
      : e.tags.indexOf(a.RECOLORABLE_MEDIUM) >= 0
        ? (e.color = this._mediumColor)
        : e.tags.indexOf(a.RECOLORABLE_DARK) >= 0 && (e.color = this._darkColor);
  }
  get key() {
    return this._key;
  }
  get darkColor() {
    return this._darkColor;
  }
  get lightColor() {
    return this._lightColor;
  }
  get _r0aeac1e037881c() {
    return this._activeColor;
  }
}
