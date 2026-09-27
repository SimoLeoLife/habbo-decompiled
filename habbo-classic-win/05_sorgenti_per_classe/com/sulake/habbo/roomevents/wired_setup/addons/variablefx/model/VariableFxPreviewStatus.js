// Extracted from HabboAirLauncher.deobf.js, line 353879.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/model/VariableFxPreviewStatus.as
// Obfuscated name: _i537a732dae0aa1

class a {
  static {
    n(this, "VariableFxPreviewStatus");
  }
  static MAX_LEVEL = 25;
  static const_1041 = 100;
  static TEAM_COLORS = ["#df291e", "#36b24a", "#3b7de3", "#ffd83d"];
  static _rbd631958ebb609 = new LinearLevelUpper(a.const_1041, a.MAX_LEVEL);
  _value = 50;
  var_3011 = 0.5;
  _delegatedColor = "#ffffff";
  var_2997 = !1;
  _overrideMinValue = null;
  _overrideMaxValue = null;
  randomize(e) {
    (e._r5b3d4f00714e69 === UnkClass_3b0b1a._r5a9e777e5dc9ee(class_3649.DYNAMIC_TEAM_COLOR) &&
      (this._delegatedColor = a.TEAM_COLORS[Math.floor(Math.random() * a.TEAM_COLORS.length)]),
      this._r074fdf4613be34(e),
      e.categoryId === UnkClass_3b0b1a._r09950f0f2ac684 ? this._red980cf84d4bb1(e) : this._rc995c93933b9f9(e),
      (this.var_2997 = !0));
  }
  _rc995c93933b9f9(e) {
    let r = this._overrideMinValue != null ? this._overrideMinValue | 0 : e._r528f4963a1a948,
      t = this._overrideMaxValue != null ? this._overrideMaxValue | 0 : e._r5e470edbfdddac;
    t <= r && ((r = 0), (t = 100));
    let i = this._value,
      s = this.var_3011,
      o = 0;
    for (; (i === this._value || Math.abs(s - this.var_3011) < 0.2) && o < 50;)
      ((this._value = r + Math.round(Math.random() * (t - r))), (s = (this._value - r) / (t - r)), o++);
    this.var_3011 = s;
  }
  _red980cf84d4bb1(e) {
    let r = Math.random();
    if (r < 0.25) {
      this._rc995c93933b9f9(e);
      return;
    }
    let t = a._rbd631958ebb609.currentLevel(this._value);
    if (r < 0.65) {
      let d = Math.random();
      (t < a._rbd631958ebb609.maxLevel && (t <= 1 || d < 0.5)
        ? ((this._value += 100),
          (this._overrideMinValue = a._rbd631958ebb609.xpForLevel(t + 1)),
          (this._overrideMaxValue = a._rbd631958ebb609.xpForLevel(Math.min(a.MAX_LEVEL, t + 2))))
        : ((this._value -= 100),
          (this._overrideMinValue = a._rbd631958ebb609.xpForLevel(t - 1)),
          (this._overrideMaxValue = a._rbd631958ebb609.xpForLevel(t))),
        this._rc995c93933b9f9(e));
      return;
    }
    let i = (-a.MAX_LEVEL + Math.random() * (2 * a.MAX_LEVEL)) | 0,
      s = 0;
    for (; (t + i < 1 || t + i > a.MAX_LEVEL) && s < 50;)
      ((i = (-a.MAX_LEVEL + Math.random() * (2 * a.MAX_LEVEL)) | 0), s++);
    this._value += In.clamp(i * a.const_1041, 0, a.const_1041 * (a.MAX_LEVEL + 1));
    let o = t + i;
    if (o === a.MAX_LEVEL) {
      ((this._overrideMinValue = Number(this._value)),
        (this._overrideMaxValue = Number(this._value)),
        (this.var_3011 = 1));
      return;
    }
    ((this._overrideMinValue = a._rbd631958ebb609.xpForLevel(o)),
      (this._overrideMaxValue = a._rbd631958ebb609.xpForLevel(o + 1)),
      this._rc995c93933b9f9(e));
  }
  toStatusData(e = null) {
    let r = new B();
    return (
      e != null &&
        (a.copyExtra(e.currentStyle()._radcbdacfc8a881, r),
        this._r074fdf4613be34(e),
        this._delegatedColor === "#ffffff" &&
          e._r5b3d4f00714e69 === UnkClass_3b0b1a._r5a9e777e5dc9ee(class_3649.DYNAMIC_TEAM_COLOR) &&
          (this._delegatedColor = a.TEAM_COLORS[0])),
      (this.var_2997 || r.getValue("current_level") == null) &&
        r.setProperty("current_level", a._rbd631958ebb609.currentLevel(this._value)),
      (this.var_2997 || r.getValue("is_maxed") == null) &&
        r.setProperty("is_maxed", a._rbd631958ebb609.isMaxed(this._value)),
      (this.var_2997 || r.getValue("max_level") == null) &&
        r.setProperty("max_level", a._rbd631958ebb609.maxLevel),
      (this.var_2997 || r.getValue("delegated_color") == null) &&
        r.setProperty("delegated_color", this._delegatedColor),
      new VariableFxStatusData(this._value, this._overrideMinValue, this._overrideMaxValue, r, !1)
    );
  }
  _r074fdf4613be34(e) {
    e.categoryId === UnkClass_3b0b1a._r83e0ad2ab352d0 &&
      (e.rendererId === class_2881.STACKED_HEALTH_POINTS_ID
        ? this._r64f4b58b6e1625(e)
        : ((this._overrideMinValue = null), (this._overrideMaxValue = null)));
  }
  _r64f4b58b6e1625(e) {
    let r = e._r5e470edbfdddac - e._r528f4963a1a948;
    ((this._overrideMinValue = 0),
      (this._overrideMaxValue = e.var_954 === UnkClass_3b0b1a._r66b57669726ccd(VariableFxWidth.MEDIUM) ? 9 : 15),
      (this._overrideMaxValue = In.clamp(Number(this._overrideMaxValue), 1, r)));
  }
  static copyExtra(e, r) {
    if (e != null) for (let t of e.getKeys()) r.setProperty(t, e.getValue(t));
  }
}
