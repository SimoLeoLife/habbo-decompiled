// Estratto da HabboAirLauncher.deobf.js, riga 284430.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/class_3649.as
// Nome offuscato: _i1921f54ea13f34

class {
  static {
    n(this, "class_3649");
  }
  static NOT_APPLICABLE = "NOT_APPLICABLE";
  static DYNAMIC_DELEGATED = "DYNAMIC_DELEGATED";
  static GREEN = "GREEN";
  static LIME_GREEN = "LIME_GREEN";
  static YELLOW = "YELLOW";
  static ORANGE = "ORANGE";
  static RED = "RED";
  static CYAN = "CYAN";
  static BLUE = "BLUE";
  static PURPLE = "PURPLE";
  static PINK = "PINK";
  static BROWN = "BROWN";
  static BEIGE = "BEIGE";
  static TEAL = "TEAL";
  static INDIGO = "INDIGO";
  static MAGENTA = "MAGENTA";
  static LIGHT_BLUE = "LIGHT_BLUE";
  static FIRE_ORANGE = "FIRE_ORANGE";
  static DARK_GREEN = "DARK_GREEN";
  static DARK_BLUE = "DARK_BLUE";
  static WHITE = "WHITE";
  static BRONZE = "BRONZE";
  static SILVER = "SILVER";
  static GOLD = "GOLD";
  static DIAMOND = "DIAMOND";
  static EMERALD = "EMERALD";
  static DYNAMIC_RED_TO_GREEN = "DYNAMIC_RED_TO_GREEN";
  static DYNAMIC_LEVELLING = "DYNAMIC_LEVELLING";
  static DYNAMIC_TEAM_COLOR = "DYNAMIC_TEAM_COLOR";
  static DYNAMIC_RED_TO_GREEN_BAND_RGBS = [15672088, 16554256, 904478];
  static DYNAMIC_LEVELLING_START_HUE = 115;
  static DYNAMIC_LEVELLING_END_HUE = 360;
  static DYNAMIC_LEVELLING_SATURATION = 0.85;
  static DYNAMIC_LEVELLING_VALUE = 0.8;
  static resolve(e) {
    switch (e) {
      case this.GREEN:
        return this.color(e, 3584586, !1);
      case this.LIME_GREEN:
        return this.color(e, 9296949, !1);
      case this.YELLOW:
        return this.color(e, 16767037, !1);
      case this.ORANGE:
        return this.color(e, 16752420, !1);
      case this.RED:
        return this.color(e, 14625054, !1);
      case this.CYAN:
        return this.color(e, 4379880, !1);
      case this.BLUE:
        return this.color(e, 3898851, !1);
      case this.PURPLE:
        return this.color(e, 8868305, !1);
      case this.PINK:
        return this.color(e, 16740275, !1);
      case this.BROWN:
        return this.color(e, 9065274, !1);
      case this.BEIGE:
        return this.color(e, 14074508, !1);
      case this.TEAL:
        return this.color(e, 3127208, !1);
      case this.INDIGO:
        return this.color(e, 5069783, !1);
      case this.MAGENTA:
        return this.color(e, 14044097, !1);
      case this.LIGHT_BLUE:
        return this.color(e, 8572927, !1);
      case this.FIRE_ORANGE:
        return this.color(e, 16734751, !1);
      case this.DARK_GREEN:
        return this.color(e, 2060090, !1);
      case this.DARK_BLUE:
        return this.color(e, 2047375, !1);
      case this.WHITE:
        return this.color(e, 14211288, !1);
      case this.BRONZE:
        return this.color(e, 13467442, !0);
      case this.SILVER:
        return this.color(e, 12632256, !0);
      case this.GOLD:
        return this.color(e, 16762941, !0);
      case this.DIAMOND:
        return this.color(e, 9366271, !0);
      case this.EMERALD:
        return this.color(e, 2606187, !0);
      case this.DYNAMIC_RED_TO_GREEN:
        return this.color(e, 14625054, !1);
      case this.DYNAMIC_LEVELLING:
        return this.color(e, 3001374, !1);
      case this.DYNAMIC_TEAM_COLOR:
        return this.color(e, 14211288, !1);
      case this.DYNAMIC_DELEGATED:
        return this.color(e, 16777215, !1);
      default:
        return this.color(this.NOT_APPLICABLE, 16777215, !1);
    }
  }
  static _r0826336a1ed27b(e, r = null) {
    let t = this.resolve(e),
      i = this._rdb434dc4a00895(this.readExtra(r, "metallic")),
      s = this._rb677ff991ea107(this.readExtra(r, "color"));
    return {
      _r6416a703ecc99e: t._r6416a703ecc99e,
      rgb: s ?? t.rgb,
      _rdc05eda693c910: i ?? t._rdc05eda693c910,
    };
  }
  static resolveTargetPaintColor(e, r = null, t = 0, i = null) {
    let s = this.resolve(e);
    if (s._r6416a703ecc99e === this.DYNAMIC_RED_TO_GREEN) {
      let o = this._r6788c27371141f(t);
      return {
        _r6416a703ecc99e: s._r6416a703ecc99e,
        rgb: o.rgb,
        _rdc05eda693c910: !1,
        _ref43ce58940fd9: o.index,
      };
    }
    return s._r6416a703ecc99e === this.DYNAMIC_LEVELLING
      ? {
          _r6416a703ecc99e: s._r6416a703ecc99e,
          rgb: this.resolveDynamicLevellingRgb(i),
          _rdc05eda693c910: !1,
          _rebf4ed5e824551: !0,
        }
      : s._r6416a703ecc99e === this.DYNAMIC_DELEGATED || s._r6416a703ecc99e === this.DYNAMIC_TEAM_COLOR
        ? {
            _r6416a703ecc99e: s._r6416a703ecc99e,
            rgb: this._rb677ff991ea107(this.readExtra(i, "delegated_color")) ?? s.rgb,
            _rdc05eda693c910: !1,
            _rebf4ed5e824551: !0,
          }
        : this._r0826336a1ed27b(e, r);
  }
  static _rab30f4a9ab01a5(e, r) {
    return this.resolve(e)._r6416a703ecc99e !== this.DYNAMIC_RED_TO_GREEN
      ? null
      : this.DYNAMIC_RED_TO_GREEN_BAND_RGBS[Math.max(0, Math.min(2, Math.trunc(r)))];
  }
  static isDynamicPaintColor(e) {
    return this.resolve(e)._r6416a703ecc99e.indexOf("DYNAMIC_") === 0;
  }
  static _r959270f593763c(e) {
    return this._rb677ff991ea107(e);
  }
  static color(e, r, t) {
    return { _r6416a703ecc99e: e, rgb: r & 16777215, _rdc05eda693c910: t };
  }
  static _r6788c27371141f(e) {
    let r = isFinite(e) ? Math.max(0, Math.min(1, e)) : 0,
      t = r < 1 / 3 ? 0 : r < 2 / 3 ? 1 : 2;
    return { index: t, rgb: this.DYNAMIC_RED_TO_GREEN_BAND_RGBS[t] };
  }
  static resolveDynamicLevellingRgb(e) {
    let r = this._re3b501a8d6e2c9(this.readExtra(e, "max_level")),
      t = r == null ? 0 : r | 0,
      i = String(this.readExtra(e, "is_maxed")).toLowerCase() === "true";
    if (t <= 1)
      return this._r03f105ad66f593(
        i ? this.DYNAMIC_LEVELLING_END_HUE : this.DYNAMIC_LEVELLING_START_HUE,
        this.DYNAMIC_LEVELLING_SATURATION,
        this.DYNAMIC_LEVELLING_VALUE,
      );
    let s = this._re3b501a8d6e2c9(this.readExtra(e, "current_level")),
      o = Math.max(0, Math.min(1, ((s == null ? 0 : s | 0) - 1) / (t - 1))),
      d = this.DYNAMIC_LEVELLING_START_HUE + (this.DYNAMIC_LEVELLING_END_HUE - this.DYNAMIC_LEVELLING_START_HUE) * o;
    return this._r03f105ad66f593(d, this.DYNAMIC_LEVELLING_SATURATION, this.DYNAMIC_LEVELLING_VALUE);
  }
  static _r03f105ad66f593(e, r, t) {
    let i = ((e % 360) + 360) % 360,
      s = t * r,
      o = i / 60,
      d = s * (1 - Math.abs((o % 2) - 1)),
      c = t - s,
      f = this._rabc6caf18d7ef3(o, s, d);
    return (
      ((Math.floor((f[0] + c) * 255) << 16) |
        (Math.floor((f[1] + c) * 255) << 8) |
        Math.floor((f[2] + c) * 255)) >>>
      0
    );
  }
  static _rabc6caf18d7ef3(e, r, t) {
    return e < 1
      ? [r, t, 0]
      : e < 2
        ? [t, r, 0]
        : e < 3
          ? [0, r, t]
          : e < 4
            ? [0, t, r]
            : e < 5
              ? [t, 0, r]
              : [r, 0, t];
  }
  static _re3b501a8d6e2c9(e) {
    let r = Number(e);
    return isFinite(r) ? r : null;
  }
  static _rdb434dc4a00895(e) {
    switch (e == null ? "" : e.toLowerCase()) {
      case "true":
        return !0;
      case "false":
        return !1;
      default:
        return null;
    }
  }
  static _rb677ff991ea107(e) {
    if (e == null) return null;
    let r = e
      .replace(/^\s+|\s+$/g, "")
      .replace(/^#/, "")
      .replace(/^0x/i, "");
    return /^[0-9a-f]{6}$/i.test(r) ? parseInt(r, 16) & 16777215 : null;
  }
  static readExtra(e, r) {
    return e == null || e.getValue(r) == null ? null : String(e.getValue(r)).replace(/^\s+|\s+$/g, "");
  }
}
