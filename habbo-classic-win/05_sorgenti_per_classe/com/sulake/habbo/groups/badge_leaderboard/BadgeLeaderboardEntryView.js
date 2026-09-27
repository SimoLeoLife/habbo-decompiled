// Estratto da HabboAirLauncher.deobf.js, riga 227800.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/badge_leaderboard/BadgeLeaderboardEntryView.as
// Nome offuscato: _i65ecebb38489a5

class {
  constructor(e, r = !0, t = "rank_number") {
    this._window = e;
    this._rankTextName = r;
    this._r7e55ed0a951834 = t;
  }
  static {
    n(this, "BadgeLeaderboardEntryView");
  }
  _disposed = !1;
  dispose() {
    this._disposed ||
      (this._rankTextName && this._window?.dispose(),
      (this._window = null),
      (this._r7e55ed0a951834 = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get window() {
    return this._window;
  }
  get evenBackground() {
    return this._window?.findChildByName("entry_bg_even");
  }
  get unevenBackground() {
    return this._window?.findChildByName("entry_bg_uneven");
  }
  get rankText() {
    return this._window?.findChildByName(this._r7e55ed0a951834 ?? "");
  }
  get rankBorder() {
    return this._window?.findChildByName("rank_border");
  }
  get _re3606645ec28f7() {
    return this._window?.findChildByName("region_profile");
  }
  get profileCanvas() {
    return this._window?.findChildByName("canvas");
  }
  get usernameText() {
    return this._window?.findChildByName("username_txt");
  }
  get scoreText() {
    return this._window?.findChildByName("score_txt");
  }
  get rankTypeImage() {
    return this._window?.findChildByName("rank_type_img");
  }
}
