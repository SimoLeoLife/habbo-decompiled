// Estratto da HabboAirLauncher.deobf.js, riga 269485.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/QuestsList.as
// Nome offuscato: _ibee8441775be41

class a {
  constructor(e) {
    this._questEngine = e;
    this._questEngine?.events.addEventListener?.(r_.QUESTS, this._r97116bd7f1c263);
  }
  static {
    n(this, "QuestsList");
  }
  static COL_SPACING = 5;
  static _r2c62b4b1245754 = 10;
  static _r35c5c9af614113 = 10;
  static COMPLETION_TEXT_OFFSET_FROM_BOTTOM = 30;
  _r97116bd7f1c263 = n((e) => this._r263a16f926ab56(e), "_r97116bd7f1c263");
  var_2581 = null;
  _r1eeeb8c7eb4ed4 = !1;
  var_2956 = null;
  var_122 = null;
  _rb33d67944824d1 = v5.REFRESH_PERIOD_IN_MSECS;
  _rd087f1e1e2a195 = !1;
  var_1614 = [];
  var_940 = null;
  _r2e87c7eaa1a02e = !0;
  _r1bf748be4eabaf = null;
  _window = null;
  dispose() {
    (this._questEngine != null &&
      (this._questEngine.events.removeEventListener?.(r_.QUESTS, this._r97116bd7f1c263),
      (this._questEngine = null)),
      this._window?.dispose(),
      (this._window = null),
      this._r1bf748be4eabaf?.dispose(),
      (this._r1bf748be4eabaf = null),
      (this.var_122 = null),
      (this.var_940 = null),
      (this.var_1614 = []),
      (this.var_2956 = null),
      (this.var_2581 = null));
  }
  get disposed() {
    return this._questEngine == null;
  }
  isVisible() {
    return this._window?.visible === !0;
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  onRoomExit() {
    this.close();
  }
  _r672bd5d2fddac8() {
    this._rd087f1e1e2a195 = !0;
  }
  _rdd12af87bae3e7() {
    if ((this._r672bd5d2fddac8(), this._window == null)) {
      this._questEngine?._r9c430dd6e13502();
      return;
    }
    ((this._r1bf748be4eabaf == null || this._r1bf748be4eabaf.disposed) &&
      (this._r1bf748be4eabaf = new Dl(
        this._window,
        this._window.desktop,
        () => this._questEngine?._r9c430dd6e13502(),
        () => this.close(),
      )),
      this._r1bf748be4eabaf.toggle(),
      (this._r2e87c7eaa1a02e = !1));
  }
  createListEntry(e, r) {
    if (this._questEngine == null) throw new Error("Quest engine host is unavailable.");
    let t = this._questEngine.getXmlWindow("QuestEntry"),
      i = this._questEngine.getXmlWindow("Campaign"),
      s = this._questEngine.getXmlWindow("Quest"),
      o = this._questEngine.getXmlWindow("EntryArrows"),
      d = this._questEngine.getXmlWindow("CampaignCompleted");
    if (t == null || i == null || s == null || o == null || d == null)
      throw new Error("Failed to build quest entry windows.");
    (t.addChild(i), t.addChild(s), t.addChild(d), t.addChild(o));
    let c = s.findChildByName("accept_button"),
      f = s.findChildByName("cancel_region");
    (c != null && (c.procedure = e), f != null && (f.procedure = r));
    let l = t.findChildByName("hint_txt"),
      b = t.findChildByName("link_region");
    (l != null && (l.visible = !1), b != null && (b.visible = !1));
    let _ = t.findChildByName("cancel_txt");
    return (
      f != null && _ != null && ((f.width = _.width), (f.x = s.width - f.width - a._r35c5c9af614113)),
      (s.x = i.x + i.width + a.COL_SPACING),
      (t.width = s.x + s.width),
      (d.x = s.x),
      this.setEntryHeight(t),
      t
    );
  }
  setEntryHeight(e) {
    let r = e.findChildByName("campaign_container"),
      t = e.findChildByName("quest_container"),
      i = e.findChildByName("entry_arrows_cont");
    if (r == null || t == null || i == null) return;
    ((r.height = t.height),
      (e.height = t.height),
      (i.x = r.x + r.width - 2),
      (i.y = Math.floor((r.height - i.height) / 2) + 1));
    let s = r.findChildByName("completion_txt");
    s != null && (s.y = r.height - a.COMPLETION_TEXT_OFFSET_FROM_BOTTOM);
    let o = r.findChildByName("bg_bottom");
    o != null && ((o.height = Math.floor((r.height - 4) / 2)), (o.y = 2 + o.height));
  }
  refreshEntryDetails(e, r) {
    if (this._questEngine == null) return;
    let t = e.findChildByName("campaign_header_txt");
    t != null && ((t.caption = this._questEngine._r15e04de8c92f56(r)), (t.y = t.height <= 17 ? 12 : 2));
    let i = e.findChildByName("completion_txt");
    (i != null && (i.caption = `${r._rd291f50d2dd1b1}/${r._r5d0e797f4f62d6}`),
      this._questEngine.setupCampaignImage(e, r, !0),
      this.setColor(e, "bg", r.accepted, 4290944315, 4284769380),
      this.setColor(e, "bg_top", r.accepted, 4294956936, 4290427578),
      this.setColor(e, "bg_bottom", r.accepted, 4294952792, 4289440683));
    let s = e.findChildByName("completion_bg_red_bitmap"),
      o = e.findChildByName("completion_bg_blue_bitmap"),
      d = e.findChildByName("completion_bg_green_bitmap"),
      c = e.findChildByName("arrow_0"),
      f = e.findChildByName("arrow_1"),
      l = e.findChildByName("quest_container"),
      b = e.findChildByName("campaign_completed_container");
    (s != null && (s.visible = !r.completedCampaign && r._rd291f50d2dd1b1 < 1),
      o != null && (o.visible = !r.completedCampaign && r._rd291f50d2dd1b1 > 0),
      d != null && (d.visible = r.completedCampaign),
      c != null && (c.visible = !r.accepted),
      f != null && (f.visible = r.accepted),
      l != null && (l.visible = !r.completedCampaign),
      b != null && (b.visible = r.completedCampaign),
      !r.completedCampaign &&
        l instanceof Object &&
        (this.refreshEntryQuestDetails(l, r), this.refreshDelay(e, r)));
  }
  refreshDelay(e, r) {
    let t = e.findChildByName("delay_desc_txt"),
      i = e.findChildByName("delay_txt");
    if (t?.visible) {
      let s = r.waitPeriodSeconds;
      if (s > 0)
        i != null &&
          this._questEngine != null &&
          (i.caption = ra.getFriendlyTime(this._questEngine.localization, s));
      else return (this.refreshEntryQuestDetails(e, r), !0);
    }
    return !1;
  }
  refreshTimeLeft(e, r) {
    let t = e.findChildByName("timeleft_txt");
    if (t?.visible) {
      let i = r.secondsLeft;
      if (i < 0) return !1;
      this._questEngine != null &&
        (t.caption = ra.getFriendlyTime(this._questEngine.localization, i, ".short", 3));
    }
    return !0;
  }
  onAlert(e, r) {
    (r.type === y.const_1300 || r.type === y.const_204) && e.dispose();
  }
  update(e) {
    this._window == null ||
      !this._window.visible ||
      ((this._rb33d67944824d1 -= e),
      !(this._rb33d67944824d1 > 0) && ((this._rb33d67944824d1 = v5.REFRESH_PERIOD_IN_MSECS), this.refresh(!0)));
  }
  _r263a16f926ab56(e) {
    let r = this._rd087f1e1e2a195;
    ((this._rd087f1e1e2a195 = !1), this.onQuests(e.quests, r));
  }
  onQuests(e, r) {
    this.var_1614 = [];
    for (let t of e) this._questEngine?.isSeasonalQuest(t) || this.var_1614.push(t);
    (!this.isVisible() && !r) ||
      (this.refresh(!1),
      this._window != null &&
        ((this._window.visible = !0), this._window.activate()),
      (this._r1eeeb8c7eb4ed4 = e.some((t) => t.accepted)));
  }
  refresh(e) {
    if ((this.prepareWindow(), this.var_122 != null)) {
      this.var_122.autoArrangeItems = !1;
      for (let r = 0; ; r++)
        if (r < this.var_1614.length) this.refreshEntry(!0, r, this.var_1614[r], e);
        else if (this.refreshEntry(!1, r, null, e)) break;
      this.var_122.autoArrangeItems = !0;
    }
  }
  prepareWindow() {
    if (
      this._window != null ||
      this._questEngine == null ||
      ((this._window = this._questEngine.getXmlWindow("Quests")),
      this._window == null)
    )
      return;
    let e = this._window.findChildByTag("close");
    (e != null && (e.procedure = (...r) => this.onWindowClose(r[0], r[1])),
      (this.var_122 = this._window.findChildByName("quest_list")),
      (this.var_940 = this._window.findChildByName("scroller")),
      (this.var_2956 = this._window.findChildByName("hc_info_text")),
      (this.var_2581 = this._window.findChildByName("get_hc_btn")),
      this._window.center(),
      this.var_122 != null && (this.var_122.spacing = a._r2c62b4b1245754),
      this.setupHcDoubleDucketsInfo());
  }
  setupHcDoubleDucketsInfo() {
    if (this._questEngine == null || this.var_2956 == null || this.var_2581 == null)
      return;
    let e = this._questEngine.sessionDataManager.hasClub;
    ((this.var_2956.text = e
      ? this._questEngine.localization.getLocalization(
          "hc.has.double_duckets.info",
          "You get double duckets as you are an HC member!",
        )
      : this._questEngine.localization.getLocalization(
          "hc.get.double_duckets.info",
          "Get HC membership to gain double duckets!",
        )),
      (this.var_2581.visible = !e),
      this.var_2581.addEventListener(u.CLICK, (...r) => this._r222617316a6628(r[0])));
  }
  refreshEntry(e, r, t, i) {
    if (this.var_122 == null) return !0;
    let s = this.var_122.getListItemAt(r);
    if (s == null) {
      if (!e) return !0;
      ((s = this.createListEntry(
        (...o) => this._r53b64dc1622d33(o[0], o[1]),
        (...o) => this._re93563365939cf(o[0], o[1]),
      )),
        this.var_122.addListItem(s));
    }
    if (!e || t == null) return ((s.visible = !1), !1);
    if ((i ? this.refreshDelay(s, t) : this.refreshEntryDetails(s, t), t.isSeasonal)) {
      let o = this.refreshTimeLeft(s, t);
      (!o && t.accepted && this._questEngine?.send(new _i198dc87a94b54e(t.id)), (s.visible = o));
    } else s.visible = !0;
    return !1;
  }
  refreshEntryQuestDetails(e, r) {
    if (this._questEngine == null) return;
    let t = e.findChildByName("quest_header_txt"),
      i = e.findChildByName("desc_txt"),
      s = e.findChildByName("timeleft_txt"),
      o = e.findChildByName("hourglass_icon"),
      d = e.findChildByName("cancel_txt"),
      c = e.findChildByName("cancel_region"),
      f = e.findChildByName("accept_button");
    (t != null && (t.caption = this._questEngine.getQuestRowTitle(r)),
      i != null && (i.caption = this._questEngine.getQuestDesc(r)),
      s != null &&
        ((s.visible = r.isSeasonal),
        r.isSeasonal &&
          (s.caption = ra.getFriendlyTime(
            this._questEngine.localization,
            r.secondsLeft,
            ".short",
            3,
          ))),
      o != null && ((o.visible = r.isSeasonal), r.isSeasonal && this.initHourglassIcon(e)),
      d != null && (d.visible = r.accepted),
      c != null && ((c.visible = r.accepted), (c.id = r.id)),
      f != null && ((f.visible = !r.accepted), (f.id = r.id)),
      this.setColor(e, null, r.accepted, 15982264, 13158600),
      this.setColor(e, "quest_header", r.accepted, 15577658, 9276813),
      t != null && (t.textColor = r.accepted ? 4294967295 : 4281808695),
      s != null && (s.textColor = r.accepted ? 4294967295 : 4281808695),
      this._questEngine.setupQuestImage(e, r),
      this._questEngine.refreshReward(
        r.waitPeriodSeconds < 1,
        e,
        r.activityPointType,
        r._r12390046c3c77b,
      ));
    let l = e.findChildByName("delay_desc_txt"),
      b = e.findChildByName("delay_txt");
    (l != null && (l.visible = r.waitPeriodSeconds > 0),
      b != null && (b.visible = r.waitPeriodSeconds > 0),
      i != null && (i.visible = r.waitPeriodSeconds < 1));
  }
  initHourglassIcon(e) {
    let r = e.findChildByName("hourglass_icon");
    if (r == null || r.bitmap != null || this._questEngine == null) return;
    let i = this._questEngine.assets.getAssetByName("icon_hourglass_png")?.content;
    i != null && ((r.bitmap = i.clone()), (r.width = r.bitmap.width), (r.height = r.bitmap.height));
  }
  onWindowClose(e, r) {
    if (e.type !== u.CLICK || this._questEngine == null) return;
    (this.close(),
      this._questEngine.getInteger("new.identity", 0) > 0 &&
        this._r2e87c7eaa1a02e &&
        !this._r1eeeb8c7eb4ed4 &&
        ((this._r2e87c7eaa1a02e = !1),
        this._questEngine.habboHelp?.showWelcomeScreen(
          Me.PROGRESSION,
          "quests.rejectnotification",
          class_2083.const_27,
        )));
  }
  _r53b64dc1622d33(e, r) {
    e.type !== u.CLICK || this._questEngine == null || this._questEngine.send(new _i8f295e4bca1993(r.id));
  }
  _re93563365939cf(e, r) {
    e.type !== u.CLICK || this._questEngine == null || this._questEngine.send(new _i198dc87a94b54e(r.id));
  }
  _r222617316a6628(e) {
    this._questEngine?.catalog?.openCatalogPage(CatalogPageName.CATALOG_PAGE_CLUB, CatalogType.NORMAL);
  }
  setColor(e, r, t, i, s) {
    let o = r == null ? e : e.findChildByName(r);
    o != null && (o.color = t ? i : s);
  }
}
