// Extracted from HabboAirLauncher.deobf.js, line 210591.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/talent/TalentProgressMeter.as
// Obfuscated name: _i7cc4acb8292ecd

class a {
  static {
    n(this, "TalentProgressMeter");
  }
  static ACHIEVED_DIVIDER = "talent_achieved_div";
  static UNACHIEVED_DIVIDER = "talent_unachieved_div";
  static DIVIDER_WINDOW_PREFIX = "progress_divider_level_";
  static AVATAR_GLOW_RADIUS = 10;
  _disposed = !1;
  _habboTalent;
  var_63;
  _r0d065951c59039;
  _r646cc871209196 = null;
  _rc8e90ebc8f4568 = null;
  var_410 = null;
  var_3246 = null;
  var_515 = null;
  get width() {
    return this.var_63?.window?.width ?? 0;
  }
  get progressPerLevelWidth() {
    return Math.floor(In.lerp(this._r0d065951c59039?._talentTrack ?? 0, 0, this.width));
  }
  constructor(e, r) {
    ((this._habboTalent = e),
      (this.var_63 = r),
      (this._r0d065951c59039 = r.talentTrack),
      this.createMeter());
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      (this._rc8e90ebc8f4568?.dispose(),
      (this._rc8e90ebc8f4568 = null),
      (this.var_3246 = null),
      (this.var_515 = null),
      (this.var_410 = null),
      (this._r646cc871209196 = null),
      (this._r0d065951c59039 = null),
      (this.var_63 = null),
      (this._habboTalent = null),
      (this._disposed = !0));
  }
  resize() {
    if (
      this._r646cc871209196 == null ||
      this._r0d065951c59039 == null ||
      this.var_410 == null ||
      this.var_515 == null ||
      this.var_3246 == null
    )
      return;
    let e = Math.floor(In.lerp(this._r0d065951c59039._rc9adb2a0dcc5d3, 0, this.width));
    ((this._r646cc871209196.width = this.width),
      (this.var_515.width = this.width),
      (this.var_3246.width = e),
      (this.var_410.x = In.clamp(
        e - Math.floor(this.var_410.width / 2),
        0,
        this.width - this.var_410.width,
      )));
    let r = this._r646cc871209196.findChildByName("avatar_glow");
    r != null &&
      ((r.x = this.var_410.x - a.AVATAR_GLOW_RADIUS),
      (r.y = this.var_410.y - a.AVATAR_GLOW_RADIUS),
      (r.width = this.var_410.width + 2 * a.AVATAR_GLOW_RADIUS),
      (r.height = this.var_410.height + 2 * a.AVATAR_GLOW_RADIUS));
    let t = this._r646cc871209196.findChildByName("progress_balloon");
    t != null &&
      (t.x =
        this.var_410.x + Math.floor(this.var_410.width / 2) - Math.floor(t.width / 2) + 5);
    for (let i = 1; i < this._r0d065951c59039.levels.length; i++) {
      let s = this._r646cc871209196.findChildByName(a.DIVIDER_WINDOW_PREFIX + i);
      s != null &&
        ((s.x = i * this.progressPerLevelWidth),
        (s.assetUri = s.x < e ? a.ACHIEVED_DIVIDER : a.UNACHIEVED_DIVIDER),
        (s.visible = !0));
    }
    this._r646cc871209196.invalidate();
  }
  createMeter() {
    if (
      ((this._r646cc871209196 = this.var_63?.window?.findChildByName("progress_container")),
      !(this._r646cc871209196 == null || this._r0d065951c59039 == null))
    ) {
      ((this._rc8e90ebc8f4568 = this._r646cc871209196.removeChild(
        this._r646cc871209196.findChildByName("progress_level_divider"),
      )),
        (this.var_3246 = this._r646cc871209196.findChildByName("achieved_mid")),
        (this.var_515 = this._r646cc871209196.findChildByName("unachieved_mid")));
      for (let e = 1; e < this._r0d065951c59039.levels.length; e++) {
        let r = this._rc8e90ebc8f4568?.clone();
        r != null && ((r.name = a.DIVIDER_WINDOW_PREFIX + e), this._r646cc871209196.addChild(r));
      }
      ((this.var_410 = this._r646cc871209196.findChildByName("progress_needle")),
        this.var_410?.widget != null &&
          ((this.var_410.widget.figure = this._habboTalent?._r10c65085b9beaf?.figure ?? ""),
          this._r646cc871209196.setChildIndex(this.var_410, this._r646cc871209196.numChildren - 1)));
    }
  }
}
