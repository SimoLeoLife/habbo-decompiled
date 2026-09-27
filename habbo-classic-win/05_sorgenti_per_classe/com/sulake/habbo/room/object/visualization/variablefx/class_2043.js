// Estratto da HabboAirLauncher.deobf.js, riga 285035.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/class_2043.as
// Nome offuscato: _i9f5c16f487415b

class {
  static {
    n(this, "class_2043");
  }
  static const_1097 = 0;
  static PROGRESS_BAR_CATEGORY_ID = 1;
  static const_824 = 2;
  static STATUS_BAR_CATEGORY_ID = 3;
  static BOSS_BAR_CATEGORY_ID = 4;
  static NUMBER_DISPLAY_CATEGORY_ID = 5;
  static var_1775 = null;
  static _serverStyleNames = null;
  static get DEFINITIONS() {
    return (this.initialize(), this.var_1775);
  }
  static _r71a84821009c97(e) {
    this.initialize();
    for (let r of this.var_1775) if (r.serverStyle === e) return r;
    return null;
  }
  static getByCategoryAndStyleId(e, r) {
    this.initialize();
    for (let t of this.var_1775) if (t.categoryId === e && t.var_780 === r) return t;
    return null;
  }
  static getByCategoryId(e) {
    let r = [];
    this.initialize();
    for (let t of this.var_1775) t.categoryId === e && r.push(t);
    return r;
  }
  static _r277ca13a0e0b50() {
    return (this.initialize(), this._serverStyleNames.concat());
  }
  static initialize() {
    if (this.var_1775 == null) {
      ((this.var_1775 = [
        this.definition(
          this._ra94fd49a6c22ce(),
          [class_2881.CLASSIC_PROGRESS],
          this._r6389f7c2f51380(),
          _i3b0b1a104db30e._r15f6a61625d9ea,
          this.PROGRESS_BAR_CATEGORY_ID,
          class_3649.GREEN,
          class_2881.CLASSIC_PROGRESS,
          VariableFxWidth.MEDIUM,
          "CLASSIC_BAR",
          0,
        ),
        this.definition(
          this._ra94fd49a6c22ce(),
          [class_2881.BLOCK_PROGRESS],
          this._r6389f7c2f51380(),
          _i3b0b1a104db30e._r15f6a61625d9ea,
          this.PROGRESS_BAR_CATEGORY_ID,
          class_3649.GREEN,
          class_2881.BLOCK_PROGRESS,
          VariableFxWidth.MEDIUM,
          "BLOCK_BAR",
          1,
        ),
        this.definition(
          this._ra94fd49a6c22ce(),
          [class_2881.STRIPED_PROGRESS],
          this._r6389f7c2f51380(),
          _i3b0b1a104db30e._r15f6a61625d9ea,
          this.PROGRESS_BAR_CATEGORY_ID,
          class_3649.GREEN,
          class_2881.STRIPED_PROGRESS,
          VariableFxWidth.MEDIUM,
          "STRIPED_BAR",
          2,
        ),
        this.definition(
          this._ra94fd49a6c22ce(),
          [class_2881.ARROW_PROGRESS],
          this._r6389f7c2f51380(),
          _i3b0b1a104db30e._r15f6a61625d9ea,
          this.PROGRESS_BAR_CATEGORY_ID,
          class_3649.GREEN,
          class_2881.ARROW_PROGRESS,
          VariableFxWidth.MEDIUM,
          "ARROW_BAR",
          3,
        ),
        this.definition(
          this._ra94fd49a6c22ce(),
          [class_2881.CLASSIC_MINI_PROGRESS],
          this._r6389f7c2f51380(),
          _i3b0b1a104db30e._r15f6a61625d9ea,
          this.PROGRESS_BAR_CATEGORY_ID,
          class_3649.GREEN,
          class_2881.CLASSIC_MINI_PROGRESS,
          VariableFxWidth.MEDIUM,
          "CLASSIC_MINI_BAR",
          4,
        ),
        this.definition(
          this._re45b7d5adcba70(),
          [class_2881.HEALTH_PROGRESS],
          this._r9a696ef0bbe896(),
          _i3b0b1a104db30e._r6fde9ac7c422ac,
          this.const_1097,
          class_3649.DYNAMIC_RED_TO_GREEN,
          class_2881.HEALTH_PROGRESS,
          VariableFxWidth.MEDIUM,
          "HEALTH_BAR",
          0,
          this.extra("icon", "misc_heart"),
        ),
        this.definition(
          this._ra94fd49a6c22ce(),
          [class_2881.MASKED_HEART_FILL],
          [VariableFxWidth.NOT_APPLICABLE],
          _i3b0b1a104db30e._r6fde9ac7c422ac,
          this.const_1097,
          class_3649.RED,
          class_2881.MASKED_HEART_FILL,
          VariableFxWidth.NOT_APPLICABLE,
          "SINGLE_HEART",
          3,
        ),
        this.definition(
          this._ra94fd49a6c22ce(),
          [class_2881.STACKED_HEALTH_POINTS],
          [VariableFxWidth.MEDIUM, VariableFxWidth.LARGE],
          _i3b0b1a104db30e._r6fde9ac7c422ac,
          this.const_1097,
          class_3649.RED,
          class_2881.STACKED_HEALTH_POINTS,
          VariableFxWidth.MEDIUM,
          "STACKED",
          1,
        ),
        this.definition(
          [class_3649.NOT_APPLICABLE],
          [class_2881.THERMOMETER_HEALTH_POINTS],
          this._r6389f7c2f51380(),
          _i3b0b1a104db30e._r6fde9ac7c422ac,
          this.const_1097,
          class_3649.NOT_APPLICABLE,
          class_2881.THERMOMETER_HEALTH_POINTS,
          VariableFxWidth.MEDIUM,
          "THERMOMETER",
          2,
        ),
        this.definition(
          this._r2f9d0f8076383e(),
          [class_2881.LEVEL_WITH_PROGRESS],
          this._r9a696ef0bbe896(),
          _i3b0b1a104db30e._r291d821a1c8a67,
          this.const_824,
          class_3649.DYNAMIC_LEVELLING,
          class_2881.LEVEL_WITH_PROGRESS,
          VariableFxWidth.MEDIUM,
          "LEVEL_AND_BAR",
          0,
          this.extra("sub_renderer", "2"),
          this.levelStatusExtra(),
        ),
        this.definition(
          this._r2f9d0f8076383e(),
          [class_2881.LEVEL_WITH_BAR_AND_NUMERICAL_PROGRESS],
          this._r2c6d5bd93ee942(),
          _i3b0b1a104db30e._r291d821a1c8a67,
          this.const_824,
          class_3649.DYNAMIC_LEVELLING,
          class_2881.LEVEL_WITH_BAR_AND_NUMERICAL_PROGRESS,
          VariableFxWidth.MEDIUM,
          "LEVEL_DETAILS",
          1,
          this.extra("sub_renderer", "1"),
          this.levelStatusExtra(),
        ),
        this.definition(
          [class_3649.RED],
          [class_2881.BOSS_HEALTH_BAR],
          this._r249cefb3d1b270(),
          _i3b0b1a104db30e._rd1e8bd7655b6be,
          this.BOSS_BAR_CATEGORY_ID,
          class_3649.RED,
          class_2881.BOSS_HEALTH_BAR,
          VariableFxWidth.EXTRA_LARGE,
          "BOSS_HEALTH_AND_SKULL",
          0,
          this.extra("icon", "misc_skull", "icon_alignment", "double"),
        ),
        this.definition(
          this._rf82976e5c4eebd(),
          [class_2881.BOSS_HEALTH_BAR],
          this._r249cefb3d1b270(),
          _i3b0b1a104db30e._rd1e8bd7655b6be,
          this.BOSS_BAR_CATEGORY_ID,
          class_3649.RED,
          class_2881.BOSS_HEALTH_BAR,
          VariableFxWidth.EXTRA_LARGE,
          "BOSS_HEALTH",
          1,
        ),
        this.definition(
          this._rb3c307d6d54be0(),
          [class_2881.NUMBER_BAKED_COLORS],
          [VariableFxWidth.NOT_APPLICABLE],
          _i3b0b1a104db30e._ra1d170efe256aa,
          this.NUMBER_DISPLAY_CATEGORY_ID,
          class_3649.GREEN,
          class_2881.NUMBER_BAKED_COLORS,
          VariableFxWidth.NOT_APPLICABLE,
          "NUMBER_FREEZE",
          0,
          this.extra("design", "freeze_style"),
        ),
        this.definition(
          this._ra94fd49a6c22ce(),
          [class_2881.NUMBER_RECOLORABLE],
          [VariableFxWidth.NOT_APPLICABLE],
          _i3b0b1a104db30e._ra1d170efe256aa,
          this.NUMBER_DISPLAY_CATEGORY_ID,
          class_3649.GREEN,
          class_2881.NUMBER_RECOLORABLE,
          VariableFxWidth.NOT_APPLICABLE,
          "NUMBER_SHALIMAR",
          1,
          this.extra("design", "shalimar"),
        ),
        this.definition(
          this._ra94fd49a6c22ce(),
          [class_2881.NUMBER_RECOLORABLE],
          [VariableFxWidth.NOT_APPLICABLE],
          _i3b0b1a104db30e._ra1d170efe256aa,
          this.NUMBER_DISPLAY_CATEGORY_ID,
          class_3649.GREEN,
          class_2881.NUMBER_RECOLORABLE,
          VariableFxWidth.NOT_APPLICABLE,
          "NUMBER_BLOCKY",
          2,
          this.extra("design", "blocky"),
        ),
        this.statusDefinition("STATUS_ENERGY", 0, "energy", "#ffd83d"),
        this.statusDefinition("STATUS_SHIELD", 1, "shield", "#4aa9f6"),
        this.statusDefinition("STATUS_MAGIC", 2, "magic", "#8751d1"),
        this.statusDefinition("STATUS_FOOD", 3, "food", "#ff9f24"),
        this.statusDefinition("STATUS_STAMINA", 4, "stamina", "#86d213"),
        this.statusDefinition("STATUS_POISON", 5, "poison", "#8ddc35"),
        this.statusDefinition("STATUS_MANA", 6, "mana", "#268fff"),
        this.statusDefinition("STATUS_HEALTH", 7, "health", "#7dce35"),
        this.statusDefinition("STATUS_GOLD", 8, "gold", "#ffc83d", !0),
        this.statusDefinition("STATUS_GEMS", 9, "gems", "#416bdd", !0),
        this.statusDefinition("STATUS_HONOR", 10, "honor", "#fac384"),
        this.statusDefinition("STATUS_REPUTATION", 11, "reputation", "#ffd83d"),
        this.statusDefinition("STATUS_COOLDOWN", 12, "cooldown", "#b8c3cc"),
        this.statusDefinition("STATUS_TIME_LEFT", 13, "timeleft", "#74b9e8"),
        this.statusDefinition("STATUS_BURNING", 14, "burning", "#ff5a1f"),
        this.statusDefinition("STATUS_FREEZING", 15, "freezing", "#82cfff"),
        this.definition(
          this._re45b7d5adcba70(),
          this._rcd3432469ad05c(),
          this._r6389f7c2f51380(),
          _i3b0b1a104db30e._rf9b6e93d22ffa0,
          this.STATUS_BAR_CATEGORY_ID,
          class_3649.DYNAMIC_RED_TO_GREEN,
          class_2881.BLOCK_PROGRESS,
          VariableFxWidth.MEDIUM,
          "STATUS_BATTERY",
          16,
          this.extra("icon", "battery"),
        ),
        this.statusDefinition("STATUS_REPAIRING", 17, "repairing", "#c9c5b8", !0),
        this.statusDefinition("STATUS_STEALTH", 18, "stealth", "#6254a8"),
        this.statusDefinition("STATUS_UPGRADING", 19, "upgrading", "#6bdc34"),
        this.statusDefinition("STATUS_STAR_POWER", 20, "star_power", "#ffd900", !0),
        this.statusDefinition("STATUS_WATER", 21, "droplet", "#4aabf5"),
      ]),
        (this._serverStyleNames = []));
      for (let e of this.var_1775) this._serverStyleNames.push(e.serverStyle);
    }
  }
  static definition(e, r, t, i, s, o, d, c, f, l, b = null, _ = null) {
    return new VariableFxPreviewStyleDefinition(e, r, t, i, s, o, d, c, f, l, b, _);
  }
  static statusDefinition(e, r, t, i, s = !1) {
    return this.definition(
      [class_3649.NOT_APPLICABLE],
      this._rcd3432469ad05c(),
      this._r6389f7c2f51380(),
      _i3b0b1a104db30e._rf9b6e93d22ffa0,
      this.STATUS_BAR_CATEGORY_ID,
      class_3649.NOT_APPLICABLE,
      class_2881.BLOCK_PROGRESS,
      VariableFxWidth.MEDIUM,
      e,
      r,
      this.extra("icon", t, "color", i, "metallic", String(s)),
    );
  }
  static _rf6a9779cab7961() {
    return [
      class_3649.GREEN,
      class_3649.LIME_GREEN,
      class_3649.YELLOW,
      class_3649.ORANGE,
      class_3649.RED,
      class_3649.CYAN,
      class_3649.BLUE,
      class_3649.PURPLE,
      class_3649.PINK,
      class_3649.BROWN,
      class_3649.BEIGE,
      class_3649.TEAL,
      class_3649.INDIGO,
      class_3649.MAGENTA,
      class_3649.LIGHT_BLUE,
      class_3649.FIRE_ORANGE,
      class_3649.DARK_GREEN,
      class_3649.DARK_BLUE,
      class_3649.WHITE,
      class_3649.BRONZE,
      class_3649.SILVER,
      class_3649.GOLD,
      class_3649.DIAMOND,
      class_3649.EMERALD,
    ];
  }
  static _ra94fd49a6c22ce() {
    let e = this._rf6a9779cab7961();
    return (e.push(class_3649.DYNAMIC_TEAM_COLOR), e);
  }
  static _rf82976e5c4eebd() {
    let e = this._rf6a9779cab7961();
    return (e.push(class_3649.DYNAMIC_RED_TO_GREEN), e.push(class_3649.DYNAMIC_TEAM_COLOR), e);
  }
  static _r2f9d0f8076383e() {
    let e = this._rf6a9779cab7961();
    return (e.push(class_3649.DYNAMIC_LEVELLING), e.push(class_3649.DYNAMIC_TEAM_COLOR), e);
  }
  static _re45b7d5adcba70() {
    return [class_3649.DYNAMIC_RED_TO_GREEN];
  }
  static _rb3c307d6d54be0() {
    return [class_3649.RED, class_3649.GREEN, class_3649.BLUE, class_3649.YELLOW, class_3649.WHITE, class_3649.DYNAMIC_TEAM_COLOR];
  }
  static _r9a696ef0bbe896() {
    return [VariableFxWidth.SMALL, VariableFxWidth.MEDIUM, VariableFxWidth.LARGE];
  }
  static _r2c6d5bd93ee942() {
    return [VariableFxWidth.SMALL, VariableFxWidth.MEDIUM, VariableFxWidth.LARGE, VariableFxWidth.EXTRA_LARGE];
  }
  static _r6389f7c2f51380() {
    return [VariableFxWidth.const_463, VariableFxWidth.SMALL, VariableFxWidth.MEDIUM, VariableFxWidth.LARGE, VariableFxWidth.EXTRA_LARGE];
  }
  static _r249cefb3d1b270() {
    return [VariableFxWidth.LARGE, VariableFxWidth.EXTRA_LARGE, VariableFxWidth.BIG_MAHOOSIVE_CHONKY];
  }
  static _rcd3432469ad05c() {
    return [class_2881.BLOCK_PROGRESS, class_2881.STRIPED_PROGRESS, class_2881.ARROW_PROGRESS];
  }
  static levelStatusExtra() {
    return this.extra("current_level", "1", "is_maxed", "false", "max_level", "25");
  }
  static extra(e, r, t = null, i = null, s = null, o = null) {
    let d = new B();
    return (d.add(e, r), t != null && d.add(t, i), s != null && d.add(s, o), d);
  }
}
