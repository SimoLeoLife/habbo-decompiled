// Estratto da HabboAirLauncher.deobf.js, riga 268751.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/QuestCompleted.as
// Nome offuscato: _i58ce58b5fd2199

class a {
  constructor(e) {
    this._questEngine = e;
  }
  static {
    n(this, "QuestCompleted");
  }
  static const_889 = 2e3;
  static TEXT_HEIGHT_SPACING = 5;
  static MIN_DESC_HEIGHT = 31;
  var_2161 = 0;
  var_142 = null;
  var_1248 = null;
  _window = null;
  dispose() {
    ((this._questEngine = null),
      (this.var_142 = null),
      this._window?.dispose(),
      (this._window = null),
      this.var_1248?.dispose(),
      (this.var_1248 = null));
  }
  get disposed() {
    return this._questEngine == null;
  }
  onQuest(e) {
    this.close();
  }
  onQuestCancelled() {
    this.close();
  }
  _r27f5f0ce8a8093(e, r) {
    r && (this.prepare(e), (this.var_2161 = a.const_889));
  }
  prepare(e) {
    if (this._questEngine == null) return;
    if (((this.var_142 = e), this._window == null)) {
      if (
        ((this._window = this._questEngine.getXmlWindow("QuestCompletedDialog")),
        this._window == null)
      )
        return;
      let h = this._window.findChildByTag("close"),
        p = this._window.findChildByName("next_quest_button"),
        m = this._window.findChildByName("more_quests_button"),
        v = this._window.findChildByName("catalog_link_region");
      (h != null && (h.procedure = (...w) => this.onNextQuest(w[0], w[1])),
        p != null && (p.procedure = (...w) => this.onNextQuest(w[0], w[1])),
        m != null && (m.procedure = (...w) => this._re87125e520c5da(w[0], w[1])),
        v != null && (v.procedure = (...w) => this._rbafbf66f91e0b6(w[0], w[1])),
        (this.var_1248 = this._questEngine.getTwinkleAnimation(this._window)));
    }
    let r = this._window.findChildByName("catalog_link_txt"),
      t = this._window.findChildByName("reward_txt"),
      i = this._window.findChildByName("congrats_txt"),
      s = this._window.findChildByName("more_quests_button"),
      o = this._window.findChildByName("campaign_reward_icon"),
      d = this._window.findChildByName("catalog_link_region"),
      c = this._window.findChildByName("next_quest_button"),
      f = this._window.findChildByName("reward_icon"),
      l = this._window.findChildByName("campaign_pic_bitmap");
    r != null &&
      this._questEngine.catalog != null &&
      (r.caption = this._questEngine.localization.getLocalizationWithParams(
        "quests.completed.cataloglink",
        "",
        "currencyname",
        this._questEngine.catalog.getActivityPointName(this.var_142.activityPointType),
      ));
    let b = "quests.completed.reward";
    (this._questEngine.catalog != null &&
      (this._questEngine.localization._r43eae9731f5b27(
        b,
        "amount",
        this.var_142._r12390046c3c77b.toString(),
      ),
      this._questEngine.localization._r43eae9731f5b27(
        b,
        "currencyname",
        this._questEngine.catalog.getActivityPointName(this.var_142.activityPointType),
      )),
      t != null &&
        ((t.caption = this._questEngine.localization.getLocalization(b, b)),
        (t.visible =
          this.var_142.activityPointType >= 0 && this.var_142._r12390046c3c77b > 0)),
      (this._window.visible = !1),
      i != null &&
        (i.caption = this._questEngine.localization.getLocalization(
          this.var_142.lastQuestInCampaign
            ? "quests.completed.campaign.caption"
            : "quests.completed.quest.caption",
        )),
      s != null && (s.visible = this.var_142.lastQuestInCampaign),
      o != null && (o.visible = this.var_142.lastQuestInCampaign),
      d != null &&
        (d.visible = !this.var_142.lastQuestInCampaign && this.var_142._r12390046c3c77b > 0),
      c != null && (c.visible = !this.var_142.lastQuestInCampaign),
      f != null && (f.visible = !this.var_142.lastQuestInCampaign),
      l != null && (l.visible = this.var_142.lastQuestInCampaign),
      this.setWindowTitle(
        this.var_142.lastQuestInCampaign
          ? "quests.completed.campaign.title"
          : "quests.completed.quest.title",
      ),
      this._questEngine.setupCampaignImage(
        this._window,
        e,
        this.var_142.lastQuestInCampaign,
      ));
    let _ = this._window.findChildByName("desc_txt");
    if (_ != null) {
      let h = _.height;
      (this.setDesc(`${this.var_142._re1c380403d8877()}.completed`),
        (_.height = Math.max(a.MIN_DESC_HEIGHT, _.textHeight + a.TEXT_HEIGHT_SPACING)),
        (this._window.height += _.height - h));
    }
  }
  update(e) {
    (this._window != null &&
      this.var_2161 > 0 &&
      ((this.var_2161 -= e),
      this.var_2161 < 1 &&
        (this._window.center(),
        (this._window.visible = !0),
        this._window.activate(),
        this.var_142?.lastQuestInCampaign
          ? this.var_1248?.restart()
          : this.var_1248?.stop())),
      this.var_1248?.update(e));
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  onNextQuest(e, r) {
    e.type !== u.CLICK ||
      this._questEngine == null ||
      (this._window != null && (this._window.visible = !1),
      (this._questEngine._rd4042d1a6a05a1._r2b4bfddbe77cb9.openForNextQuest =
        this._questEngine.getBoolean("questing.showDetailsForNextQuest")),
      this._questEngine.send(new class_3325()));
  }
  _re87125e520c5da(e, r) {
    e.type !== u.CLICK ||
      this._questEngine == null ||
      (this._window != null && (this._window.visible = !1),
      this._questEngine._rd4042d1a6a05a1._rddd2ff4cc28b1a._r672bd5d2fddac8(),
      this._questEngine.send(new _if730f53b497d89()));
  }
  setWindowTitle(e) {
    this._questEngine == null ||
      this._window == null ||
      this.var_142 == null ||
      (this._questEngine.localization._r43eae9731f5b27(
        e,
        "category",
        this._questEngine._r15e04de8c92f56(this.var_142),
      ),
      (this._window.caption = this._questEngine.localization.getLocalization(e, e)));
  }
  setDesc(e) {
    if (this._questEngine == null || this._window == null) return;
    let r = this._window.findChildByName("desc_txt");
    r != null && (r.caption = this._questEngine.localization.getLocalization(e, e));
  }
  _rbafbf66f91e0b6(e, r = null) {
    e.type !== u.CLICK ||
      this._questEngine == null ||
      this.var_142 == null ||
      this._questEngine.openCatalog(this.var_142);
  }
}
