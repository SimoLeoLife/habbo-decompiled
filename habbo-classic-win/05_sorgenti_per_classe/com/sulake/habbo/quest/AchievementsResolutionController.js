// Extracted from HabboAirLauncher.deobf.js, line 265134.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/AchievementsResolutionController.as
// Obfuscated name: _i73770f35d8fe45

class a {
  constructor(e) {
    this._questEngine = e;
  }
  static {
    n(this, "AchievementsResolutionController");
  }
  static const_170 = "cancel_button";
  static const_181 = "header_button_close";
  static ELEM_DISABLED_INFO = "disabled.reason";
  static const_300 = "ok_button";
  static const_150 = "save_button";
  var_1625 = [];
  _r7213d5db5e94cb = null;
  _endTime = -1;
  _progressView = null;
  _selectedAchievementId = -1;
  _stuffId = 0;
  _window = null;
  dispose() {
    ((this._questEngine = null),
      this._window != null &&
        (this._window.findChildByName("achievements")?._rbb4c26d068856f(),
        this._window.dispose(),
        (this._window = null)),
      this._progressView?.dispose(),
      (this._progressView = null),
      this._r7213d5db5e94cb?.dispose(),
      (this._r7213d5db5e94cb = null));
  }
  get disposed() {
    return this._questEngine == null;
  }
  get questEngine() {
    if (this._questEngine == null) throw new Error("Quest engine has been disposed.");
    return this._questEngine;
  }
  onResolutionAchievements(e, r, t) {
    ((this._stuffId = e),
      (this.var_1625 = r),
      (this._endTime = t),
      r.length !== 0 &&
        (this.refresh(),
        this._window != null && (this._window.visible = !0),
        (this._selectedAchievementId = this.var_1625[0].achievementId),
        this.populateAchievementGrid(),
        this.selectAchievement(this._selectedAchievementId)));
  }
  onResolutionProgress(e, r, t, i, s, o) {
    ((this._progressView ??= new ige(this)), this._progressView.show(e, r, t, i, s, o));
  }
  _r17951be0738e68(e, r) {
    ((this._r7213d5db5e94cb ??= new age(this)), this._r7213d5db5e94cb.show(r, e));
  }
  _r893ea75ce6960c(e) {
    this._progressView?.visible &&
      e.type === this._progressView.achievementId &&
      this.questEngine.send(new class_2491(this._progressView.stuffId, 0));
  }
  _r783514f2477ca9(e) {
    this._progressView?.visible &&
      e.achievementId === this._progressView.achievementId &&
      this.questEngine.send(new class_2491(this._progressView.stuffId, 0));
  }
  resetResolution(e) {
    !this._progressView?.visible ||
      e !== this._progressView.stuffId ||
      this.questEngine.windowManager.confirm(
        "${resolution.reset.confirmation.title}",
        "${resolution.reset.confirmation.text}",
        0,
        (...r) => {
          let t = r[0],
            i = r[1];
          (t?.dispose(),
            i?.type === y.const_1300 &&
              (this.questEngine.send(new class_3197(e)),
              this.questEngine.send(new class_2491(this._progressView?.stuffId ?? e, 0))));
        },
      );
  }
  isVisible() {
    return this._window?.visible === !0;
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  refresh() {
    this._window == null && this.prepareWindow();
    let r = this._window?.findChildByName("countdown_widget")?.widget;
    r != null && ((r.seconds = this._endTime), (r.running = !0));
  }
  prepareWindow() {
    if (
      ((this._window = this.questEngine.getXmlWindow("AchievementsResolutions")),
      this._window == null)
    )
      return;
    let e = this._window.findChildByTag("close");
    (e != null && (e.procedure = (...r) => this.onWindowClose(r[0], r[1])),
      this._window.center(),
      (this._window.visible = !0),
      this.addClickListener(a.const_181),
      this.addClickListener(a.const_150),
      this.addClickListener(a.const_170));
  }
  onWindowClose(e, r) {
    e.type === u.CLICK && this.close();
  }
  addClickListener(e) {
    let r = this._window?.findChildByName(e);
    r?.addEventListener(u.CLICK, (...t) => this.onMouseClick(t[0]));
  }
  onMouseClick(e) {
    switch (e.target?.name) {
      case a.const_181:
      case a.const_170:
        this.close();
        break;
      case a.const_300:
        break;
      case a.const_150:
        (this.close(),
          this.questEngine.windowManager.confirm(
            "${resolution.confirmation.title}",
            "${resolution.confirmation.text}",
            0,
            (...t) => {
              let i = t[0],
                s = t[1];
              (i?.dispose(),
                s?.type === y.const_1300
                  ? this.questEngine.send(new class_2491(this._stuffId, this._selectedAchievementId))
                  : this._window != null && (this._window.visible = !0));
            },
          ));
        break;
    }
  }
  populateAchievementGrid() {
    let e = this._window?.findChildByName("achievements"),
      r = this.questEngine.getXmlWindow("AchievementSimple");
    if (!(e == null || r == null)) {
      e._rbb4c26d068856f();
      for (let t of this.var_1625) {
        let i = r.clone();
        ((i.id = t.achievementId), this.refreshBadgeImage(i, t));
        let s = i.findChildByName("bg_region");
        s != null && (s.procedure = (...d) => this.onSelectAchievementProc(d[0], d[1]));
        let o = i.findChildByName("bg_selected_bitmap");
        (o != null && (o.visible = !1), e.addGridItem(i));
      }
    }
  }
  hiliteGridItem(e, r) {
    let i = this._window?.findChildByName("achievements")?._rc61347781fdc8b(e);
    if (i != null) {
      let s = i.findChildByName("bg_selected_bitmap");
      s != null && (s.visible = r);
    }
  }
  selectAchievement(e) {
    this._selectedAchievementId !== -1 && this.hiliteGridItem(this._selectedAchievementId, !1);
    let r = this._rd0325374673d03(e);
    if (r == null || this._window == null) return;
    ((this._selectedAchievementId = e), this.hiliteGridItem(this._selectedAchievementId, !0));
    let t = this._window.findChildByName("achievement.name"),
      i = this._window.findChildByName("achievement.description"),
      s = this._window.findChildByName("achievement.level");
    (t != null && (t.caption = this.questEngine.localization.getBadgeName(r.badgeId)),
      i != null && (i.caption = this.questEngine.localization.getBadgeDesc(r.badgeId)),
      s != null && (s.caption = r.level.toString()),
      this.questEngine.localization._r43eae9731f5b27(
        "resolution.achievement.target.value",
        "level",
        r._r5191ee4dc6b03d.toString(),
      ),
      this.refreshBadgeImageLarge(r),
      r.enabled ? this.enable() : this.disable(r.state));
  }
  disable(e) {
    if (this._window == null) return;
    (this._window.setVisibleChildren(!1, [a.const_150]),
      this._window.setVisibleChildren(!0, [a.ELEM_DISABLED_INFO]));
    let r = this._window.findChildByName(a.ELEM_DISABLED_INFO);
    r != null && (r.caption = `\${resolution.disabled.${e}}`);
  }
  enable() {
    this._window != null &&
      (this._window.setVisibleChildren(!0, [a.const_150]),
      this._window.setVisibleChildren(!1, [a.ELEM_DISABLED_INFO]));
  }
  onSelectAchievementProc(e, r) {
    e.type === u.CLICK && this.selectAchievement(r.parent?.id ?? -1);
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
        i != null && ((i.badgeId = r.badgeId), (i.greyscale = !r.enabled)),
        (t.visible = !0));
    }
  }
  refreshBadgeImageLarge(e) {
    if (this._window == null) return;
    let r = this._window.findChildByName("achievement_badge"),
      t = r?.widget,
      s = r?.rootWindow?.findChildByName("bitmap");
    (s != null && (s.assetUri = "common_loading_icon"),
      t != null && ((t.badgeId = e.badgeId), (t.greyscale = !e.enabled)),
      r != null && (r.visible = !0));
  }
  _rd0325374673d03(e) {
    for (let r of this.var_1625) if (r.achievementId === e) return r;
    return null;
  }
}
