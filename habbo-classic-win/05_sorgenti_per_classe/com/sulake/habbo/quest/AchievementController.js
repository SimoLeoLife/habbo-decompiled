// Extracted from HabboAirLauncher.deobf.js, line 264445.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/AchievementController.as
// Obfuscated name: _i20a0e4d41c9bbf

class a {
  constructor(e) {
    this._questEngine = e;
  }
  static {
    n(this, "AchievementController");
  }
  static _r8d747f90baddf3 = 6;
  static ACHIEVEMENT_ROWS_MAX = 4;
  static ACHIEVEMENT_ROWS_MIN = 2;
  static _rd004aca65cc9ac = 3;
  static _r65d0438c437b6a = 3;
  static _r293182fc079770 = 3;
  static _r4844b81bc43b22 = 6;
  static CATEGORY_SPACING_X = 8;
  static CATEGORY_SPACING_Y = 5;
  static HEADER_SIZE = 45;
  static _rf40f80d29df695 = new E(115, 93);
  static IN_LEVEL_PROGRESS_BAR_WIDTH = 180;
  static _rad7842fb240123 = new E(72, 1);
  static TOTAL_PROGRESS_BAR_WIDTH = 246;
  static const_917 = 12910463;
  static const_859 = 20;
  _r5f764448750e4c = null;
  _r61f05bc5439e0f = null;
  achievementsColumnCount = null;
  var_1797 = null;
  _rb48132d48ffc2d = null;
  _categories = null;
  _r99321d475b6181 = null;
  var_2479 = null;
  var_163 = null;
  _r2a861f7674c972 = null;
  _r71f5afe0559afd = null;
  _rb86afa12f0ea38 = null;
  _ra7b0b01cc78920 = null;
  var_3712 = !1;
  _r88f38657eced04 = null;
  _r6ce0098d3a8e59 = new Map();
  _window = null;
  dispose() {
    ((this._questEngine = null),
      this._window?.dispose(),
      (this._window = null),
      this._r648b57dc3750cd(),
      this._ra1f49d5eb93be3(),
      this._r2a861f7674c972?.dispose(),
      (this._r2a861f7674c972 = null),
      this._r88f38657eced04?.dispose(),
      (this._r88f38657eced04 = null),
      (this._r99321d475b6181 = null),
      (this.achievementsColumnCount = null),
      (this._r61f05bc5439e0f = null),
      (this.var_1797 = null),
      (this.var_2479 = null));
  }
  get disposed() {
    return this._questEngine == null;
  }
  isVisible() {
    return this._window?.visible === !0;
  }
  close() {
    (this._r6ce0098d3a8e59.clear(),
      this._r473718cbeb6d5a(),
      this._window != null && (this._window.visible = !1));
  }
  onRoomExit() {
    this.close();
  }
  _rdd12af87bae3e7() {
    this.isVisible() ? this.close() : this.show();
  }
  _r00a869c7638e8e() {
    this._categories == null && this._questEngine?.send(new class_3157());
  }
  show() {
    if (this._categories == null) {
      (this._questEngine?.send(new class_3157()), (this.var_3712 = !0));
      return;
    }
    (this.refresh(),
      this._window != null &&
        ((this._window.visible = !0), this._window.activate()));
  }
  _rc158eba0565eba(e, r) {
    if (
      (this._categories == null &&
        this._questEngine != null &&
        (this._categories = new tg(e, this._questEngine)),
      !this.var_3712)
    )
      return;
    ((this.var_3712 = !1),
      this.refresh(),
      this._window != null &&
        ((this._window.visible = !0), this._window.activate()));
    let t = this._r71f5afe0559afd ?? r,
      i = this._categories?.getCategoryByCode(t) ?? null;
    i != null && (this.pickCategory(i), (this._r71f5afe0559afd = null));
  }
  _r783514f2477ca9(e) {
    if (this._categories == null) return;
    let r = this._r5f764448750e4c?.achievementId === e.achievementId;
    (!r &&
      !this._r6ce0098d3a8e59.has(e.achievementId) &&
      (this._r6ce0098d3a8e59.set(e.achievementId, e), this._r473718cbeb6d5a()),
      r && e.level > (this._r5f764448750e4c?.level ?? 0)
        ? (this._r5f764448750e4c?.setMaxProgress(),
          (this._rb86afa12f0ea38 = e),
          this._ra1f49d5eb93be3(),
          (this._ra7b0b01cc78920 = setTimeout(() => this._r09a549ad3a48df(), 2e3)))
        : (this._categories.update(e), r && (this._r5f764448750e4c = e)),
      this._window?.visible && this.refresh());
  }
  _rd89abd18fb0b39(e) {
    let r = this._categories?.getCategoryByCode(e) ?? null;
    r != null ? this.pickCategory(r) : (this._r71f5afe0559afd = e);
  }
  _r919c0ab2a93eac(e) {
    this._window != null &&
      this._rb48132d48ffc2d == null &&
      (this._rb48132d48ffc2d = setTimeout(() => this._r57b84570d11ca1(), 100));
  }
  update(e) {
    (this._r2a861f7674c972?.updateView(e), this._r88f38657eced04?.updateView(e));
  }
  _r35a7c98ac17978(e, r) {
    let t = this._categories?.getCategoryByCode(e) ?? null;
    if (t == null) return 0;
    for (let i of t.achievements)
      if (i.badgeId.indexOf(r) === 0) return i._r48f0df39b9bc8e ? i.level : Math.max(0, i.level - 1);
    return 0;
  }
  _r473718cbeb6d5a() {
    let e = 0;
    for (let r of this._r6ce0098d3a8e59.values()) this.isSkippedForUnseenBroadcast(r.badgeId) || e++;
  }
  refresh() {
    (this.prepareWindow(),
      this.refreshCategoryList(),
      this.refreshCategoryListFooter(),
      this.refreshAchievementsHeader(),
      this.refreshAchievementList(),
      this.refreshAchievementDetails(),
      this._window?.content != null &&
        (a.moveAllChildrenToColumn(this._window.content, 0, 4),
        (this._window.height = a.getLowestPoint(this._window.content) + a.HEADER_SIZE)));
  }
  refreshCategoryList() {
    if (this._r99321d475b6181 == null || this._categories == null) return;
    if (this.var_163 != null) {
      this._r99321d475b6181.visible = !1;
      return;
    }
    for (this._r99321d475b6181.visible = !0; this._r99321d475b6181.numChildren > 0;)
      this._r99321d475b6181.removeChildAt(0)?.dispose();
    let e = 0;
    for (let r of this._categories.categoryList)
      r._r0bde5cd7a4e3dd() && (this.refreshCategoryEntry(e, r), e++);
    for (; e < a._r65d0438c437b6a * a._r293182fc079770; e++) this.refreshCategoryEntry(e, null);
    this._r99321d475b6181.height = a.getLowestPoint(this._r99321d475b6181);
  }
  refreshCategoryListFooter() {
    if (!(this.var_2479 == null || this._categories == null)) {
      if (this.var_163 != null) {
        this.var_2479.visible = !1;
        return;
      }
      ((this.var_2479.visible = !0),
        this._r88f38657eced04?.refresh(
          this._categories._r229b578b87b7b8(),
          this._categories._r6950137b2e3b19(),
          0,
          0,
        ));
    }
  }
  achievementIsVisible(e) {
    if (this.var_163 == null || this.var_163.code !== tg.ACHIEVEMENT_CATEGORY_WIRED_GAMES) return !0;
    let r = e.code;
    if (r.indexOf("WF_") !== 0) return !1;
    r = r.substring(3);
    for (let t of this._questEngine?._r22c59443a43a51() ?? []) if (t === r) return !0;
    return !1;
  }
  refreshAchievementList() {
    if (this._window == null || this.achievementsColumnCount == null || this.var_163 == null) {
      this._window?.findChildByName("achievements_list") &&
        (this._window.findChildByName("achievements_list").visible = !1);
      return;
    }
    let e = this._window.findChildByName("achievements_list");
    if (e == null) return;
    for (e.visible = !0; this.achievementsColumnCount.numChildren > 0;)
      this.achievementsColumnCount.removeChildAt(0)?.dispose();
    let r = this.var_163.achievements.filter((d) => this.achievementIsVisible(d)),
      t = 0;
    for (let d of r) (this.refreshAchievementEntry(t, d), t++);
    let i = a.ACHIEVEMENT_ROWS_MIN * this._r1108422bbfb37c;
    for (; t < i; t++) this.refreshAchievementEntry(t, null);
    ((this.achievementsColumnCount.height = a.getLowestPoint(this.achievementsColumnCount)),
      (e.height = this.achievementsColumnCount.height + 1));
    let s = this._window.findChildByName("achievements_scrollarea"),
      o = this._window.findChildByName("achievements_scrollbar");
    (s != null && (s.height = e.height),
      o != null && ((o.visible = this.achievementsNeedScrolling), (o.height = e.height)));
  }
  refreshAchievementsHeader() {
    if (this.var_1797 == null) return;
    if (this.var_163 == null || this._questEngine == null) {
      this.var_1797.visible = !1;
      return;
    }
    this.var_1797.visible = !0;
    let e = this.var_1797.findChildByName("category_name_txt");
    (e != null && (e.caption = this._questEngine.getAchievementCategoryName(this.var_163.code)),
      this._questEngine.localization._r43eae9731f5b27(
        "achievements.details.categoryprogress",
        "progress",
        this.var_163._r229b578b87b7b8().toString(),
      ),
      this._questEngine.localization._r43eae9731f5b27(
        "achievements.details.categoryprogress",
        "limit",
        this.var_163._r6950137b2e3b19().toString(),
      ),
      this._questEngine.setupAchievementCategoryImage(this.var_1797, this.var_163, !1));
  }
  refreshAchievementDetails() {
    if (this._r61f05bc5439e0f == null || this._questEngine == null) return;
    if (this._r5f764448750e4c == null) {
      this._r61f05bc5439e0f.visible = !1;
      return;
    }
    this._r61f05bc5439e0f.visible = !0;
    let e = this.var_94(this._r5f764448750e4c),
      r = this._r61f05bc5439e0f.findChildByName("achievement_name_txt"),
      t = this._r61f05bc5439e0f.findChildByName("achievement_desc_txt");
    if ((r != null && (r.caption = this._questEngine.localization.getBadgeName(e)), t != null)) {
      let i = this._questEngine.localization.getBadgeDesc(e);
      t.caption = i ?? "";
    }
    (this._questEngine.localization._r43eae9731f5b27(
      "achievements.details.level",
      "level",
      (this._r5f764448750e4c._r48f0df39b9bc8e
        ? this._r5f764448750e4c.level
        : this._r5f764448750e4c.level - 1
      ).toString(),
    ),
      this._questEngine.localization._r43eae9731f5b27(
        "achievements.details.level",
        "limit",
        this._r5f764448750e4c._rafd3119a0313c2.toString(),
      ),
      this._questEngine.refreshReward(
        !this._r5f764448750e4c._r48f0df39b9bc8e,
        this._r61f05bc5439e0f,
        this._r5f764448750e4c._r7a763dfc9fdb12,
        this._r5f764448750e4c._r14a67ba2ac03d5,
      ),
      this.refreshBadgeImageLarge(this._r61f05bc5439e0f, this._r5f764448750e4c),
      this._r2a861f7674c972?.refresh(
        this._r5f764448750e4c._rbce4620324c2ce,
        this._r5f764448750e4c._re6098d625840d4,
        this._r5f764448750e4c.achievementId * 1e4 + this._r5f764448750e4c.level,
        this._r5f764448750e4c._r736ad2f604a0ee,
      ),
      this._r2a861f7674c972 != null &&
        (this._r2a861f7674c972.visible =
          this._r5f764448750e4c._ref26a492c38b23 !== class_3624.const_201 &&
          !this._r5f764448750e4c._r48f0df39b9bc8e));
  }
  prepareWindow() {
    if (
      this._window != null ||
      this._questEngine == null ||
      ((this._window = this._questEngine.getXmlWindow("Achievements")),
      this._window == null)
    )
      return;
    let e = this._window.findChildByTag("close"),
      r = this._window.findChildByName("back_button");
    (e != null && (e.procedure = (...t) => this.onWindowClose(t[0], t[1])),
      r != null && (r.procedure = (...t) => this._r1695ad626972f1(t[0], t[1])),
      this._window.center(),
      (this._window.y = a.const_859),
      (this._r99321d475b6181 = this._window.findChildByName("categories_cont")),
      (this.var_1797 = this._window.findChildByName("achievements_header_cont")),
      (this.achievementsColumnCount = this._window.findChildByName("achievements_cont")),
      (this._r61f05bc5439e0f = this._window.findChildByName("achievement_cont")),
      (this.var_2479 = this._window.findChildByName("categories_footer_cont")),
      this._r61f05bc5439e0f != null &&
        (this._r2a861f7674c972 = new g5(
          this._questEngine,
          this._r61f05bc5439e0f,
          a.IN_LEVEL_PROGRESS_BAR_WIDTH,
          "achievements.details.progress",
          !0,
          a._rf40f80d29df695,
        )),
      this.var_2479 != null &&
        (this._r88f38657eced04 = new g5(
          this._questEngine,
          this.var_2479,
          a.TOTAL_PROGRESS_BAR_WIDTH,
          "achievements.categories.totalprogress",
          !0,
          a._rad7842fb240123,
        )));
  }
  refreshCategoryEntry(e, r) {
    if (this._r99321d475b6181 == null || this._questEngine == null) return;
    let t = this._questEngine.getXmlWindow("AchievementCategory");
    if (t == null) return;
    ((t.name = e.toString()),
      (t.x = (t.width + a.CATEGORY_SPACING_X) * (e % a._r65d0438c437b6a)),
      (t.y = (t.height + a.CATEGORY_SPACING_Y) * Math.floor(e / a._r65d0438c437b6a) + a._r4844b81bc43b22));
    let i = t.findChildByName("category_region");
    i != null &&
      ((i.id = e), (i.procedure = (...h) => this._r0bc152b257859d(h[0], h[1])), (i.visible = r != null));
    let s = t.findChildByName("category_bg_inact"),
      o = t.findChildByName("category_bg_act"),
      d = t.findChildByName("category_bg_act_hover"),
      c = t.findChildByName("header_txt"),
      f = t.findChildByName("completion_txt"),
      l = t.findChildByName("category_pic_bitmap"),
      b = t.findChildByName("unseen_count_border"),
      _ = t.findChildByName("unseen_count");
    if (
      (s != null && (s.visible = r == null),
      o != null && (o.visible = r != null),
      d != null && (d.visible = !1),
      c != null && (c.visible = r != null),
      f != null && (f.visible = r != null),
      l != null && (l.visible = r != null),
      b != null && (b.visible = !1),
      r != null)
    ) {
      (c != null && (c.caption = this._questEngine.getAchievementCategoryName(r.code)),
        f != null && (f.caption = `${r._r229b578b87b7b8()}/${r._r6950137b2e3b19()}`),
        this._questEngine.setupAchievementCategoryImage(t, r, !0));
      let h = this._rd7e14b4bee0196(r.code);
      h > 0 && (b != null && (b.visible = !0), _ != null && (_.caption = h.toString()));
    }
    this._r99321d475b6181.addChild(t);
  }
  refreshAchievementEntry(e, r) {
    if (this.achievementsColumnCount == null || this._questEngine == null) return;
    let t = this._questEngine.getXmlWindow("Achievement");
    if (t == null) return;
    let i = Math.floor(e / this._r1108422bbfb37c);
    ((t.x = (t.width + (this.achievementsNeedScrolling ? 5 : 0)) * (e % this._r1108422bbfb37c)),
      (t.y = t.height * i + a._rd004aca65cc9ac));
    let s = t.findChildByName("bg_region"),
      o = t.findChildByName("bg_unselected_bitmap"),
      d = t.findChildByName("bg_selected_bitmap");
    (s != null &&
      ((s.id = e), (s.visible = r != null), (s.procedure = (...c) => this.onSelectAchievement(c[0], c[1]))),
      this.refreshBadgeImage(t, r),
      o != null &&
        ((o.color =
          r != null && this._r6ce0098d3a8e59.has(r.achievementId) ? a.const_917 : 16777215),
        (o.visible = r == null || r !== this._r5f764448750e4c)),
      d != null && (d.visible = r != null && r === this._r5f764448750e4c),
      this.achievementsColumnCount.addChild(t));
  }
  onWindowClose(e, r) {
    e.type === u.CLICK && this.close();
  }
  _r0bc152b257859d(e, r) {
    let t = r.id;
    if (e.type === u.CLICK) {
      let s = (this._categories?.categoryList.filter((o) => o._r0bde5cd7a4e3dd()) ?? [])[t] ?? null;
      s != null && this.pickCategory(s);
    } else e.type === u.OUT ? this.refreshMouseOver(-999) : e.type === u.OVER && this.refreshMouseOver(t);
  }
  pickCategory(e) {
    ((this.var_163 = e),
      (this._r5f764448750e4c = this.var_163.achievements[0] ?? null),
      this.refresh(),
      this._questEngine?.send(new class_2154("Achievements", this.var_163.code, "Category selected")));
  }
  refreshMouseOver(e) {
    if (this._r99321d475b6181 != null)
      for (let r = 0; r < this._r99321d475b6181.numChildren; r++) {
        let t = r === e,
          i = this._r99321d475b6181.getChildAt(r);
        if (i == null) continue;
        let s = i.findChildByName("category_bg_act"),
          o = i.findChildByName("category_bg_act_hover"),
          d = i.findChildByName("hover_container");
        (s != null && (s.visible = !t),
          o != null && (o.visible = t),
          d != null && ((d.x = t ? 0 : 1), (d.y = t ? 0 : 1)));
      }
  }
  onSelectAchievement(e, r) {
    if (e.type !== u.CLICK || this.var_163 == null) return;
    let t = this.var_163.achievements.filter((i) => this.achievementIsVisible(i));
    ((this._r5f764448750e4c = t[r.id] ?? null),
      this.refresh(),
      this._r5f764448750e4c != null &&
        this._questEngine?.send(
          new class_2154("Achievements", this._r5f764448750e4c.achievementId.toString(), "Achievement selected"),
        ));
  }
  _r1695ad626972f1(e, r) {
    if (e.type === u.CLICK) {
      if (this.var_163 != null) {
        for (let [t, i] of [...this._r6ce0098d3a8e59.entries()])
          i.category === this.var_163.code && this._r6ce0098d3a8e59.delete(t);
        this._r473718cbeb6d5a();
      }
      ((this.var_163 = null), (this._r5f764448750e4c = null), this.refresh());
    }
  }
  static moveAllChildrenToColumn(e, r, t) {
    for (let i = 0; i < e.numChildren; i++) {
      let s = e.getChildAt(i);
      s != null && s.visible && s.height > 0 && ((s.y = r), (r += s.height + t));
    }
  }
  static getLowestPoint(e) {
    let r = 0;
    for (let t = 0; t < e.numChildren; t++) {
      let i = e.getChildAt(t);
      i?.visible && (r = Math.max(r, i.y + i.height));
    }
    return r;
  }
  refreshBadgeImage(e, r) {
    let t = e.findChildByName("achievement_pic_bitmap"),
      i = t?.widget,
      o = t?.rootWindow?.findChildByName("bitmap");
    if (t != null) {
      if (r == null) {
        t.visible = !1;
        return;
      }
      (o != null && (o.assetUri = "common_loading_icon"),
        i != null && ((i.badgeId = this.var_94(r)), (i.greyscale = !r._r352e3f0ac02cf2)),
        (t.visible = !0));
    }
  }
  refreshBadgeImageLarge(e, r) {
    let t = e.findChildByName("achievement_pic_bitmap"),
      i = t?.widget,
      o = t?.rootWindow?.findChildByName("bitmap");
    t != null &&
      (o != null && (o.assetUri = "common_loading_icon"),
      i != null && ((i.badgeId = this.var_94(r)), (i.greyscale = !r._r352e3f0ac02cf2)),
      (t.visible = !0));
  }
  _r57b84570d11ca1() {
    (this._r648b57dc3750cd(), this.refresh());
  }
  _r09a549ad3a48df() {
    this._rb86afa12f0ea38 == null ||
      this._categories == null ||
      ((this._r5f764448750e4c = this._rb86afa12f0ea38),
      this._categories.update(this._rb86afa12f0ea38),
      (this._rb86afa12f0ea38 = null),
      this._ra1f49d5eb93be3(),
      this.refresh());
  }
  var_94(e) {
    return e._rafd3119a0313c2 === 1 || e._r48f0df39b9bc8e
      ? e.badgeId
      : (this._questEngine?._rf1f06517cc1f28(e.badgeId) ?? e.badgeId);
  }
  get _r1108422bbfb37c() {
    return this.achievementsNeedScrolling ? a._r8d747f90baddf3 - 1 : a._r8d747f90baddf3;
  }
  get achievementsNeedScrolling() {
    return (this.var_163?.achievements.length ?? 0) > a.ACHIEVEMENT_ROWS_MAX * a._r8d747f90baddf3;
  }
  isSkippedForUnseenBroadcast(e) {
    let r =
      this._questEngine?.getProperty("toolbar.unseen_notification.skipped_badge_ids").split(",") ?? [];
    for (let t of r) if (t !== "" && e.indexOf(t) !== -1) return !0;
    return !1;
  }
  _rd7e14b4bee0196(e) {
    let r = 0;
    for (let t of this._r6ce0098d3a8e59.values()) t.category === e && r++;
    return r;
  }
  _r648b57dc3750cd() {
    this._rb48132d48ffc2d != null && (clearTimeout(this._rb48132d48ffc2d), (this._rb48132d48ffc2d = null));
  }
  _ra1f49d5eb93be3() {
    this._ra7b0b01cc78920 != null && (clearTimeout(this._ra7b0b01cc78920), (this._ra7b0b01cc78920 = null));
  }
}
