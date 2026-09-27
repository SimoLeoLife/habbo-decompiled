// Estratto da HabboAirLauncher.deobf.js, riga 268620.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/NextQuestTimer.as

class a {
  constructor(e) {
    this._questEngine = e;
  }
  static {
    n(this, "NextQuestTimer");
  }
  static REFRESH_PERIOD_IN_MSECS = 1e3;
  static TOOLBAR_EXTENSION_ID = "next_quest";
  _expanded = !1;
  _rb33d67944824d1 = 0;
  var_142 = null;
  _window = null;
  dispose() {
    (this._questEngine?.toolbar?.extensionView != null &&
      this._questEngine.toolbar.extensionView._rb18768cf275a26(a.TOOLBAR_EXTENSION_ID),
      (this._questEngine = null),
      (this.var_142 = null),
      this._window?.dispose(),
      (this._window = null));
  }
  get disposed() {
    return this._questEngine == null;
  }
  onQuestCancelled() {
    ((this.var_142 = null), this.close());
  }
  onRoomExit() {
    if (this._window == null || !this._window.visible) return;
    let e = this._window.findChildByName("more_info_region"),
      r = this._window.findChildByName("more_info_txt");
    (e != null && (e.visible = !1), r != null && (r.visible = !1));
  }
  onQuest(e) {
    if (e.waitPeriodSeconds < 1) {
      this.close();
      return;
    }
    ((this.var_142 = e),
      this.prepareWindow(),
      this.refreshVisibility(),
      this._window != null &&
        ((this._window.visible = !0),
        this._questEngine?.toolbar?.extensionView?._ra96f07968c4ed0(
          a.TOOLBAR_EXTENSION_ID,
          this._window,
        )));
  }
  update(e) {
    this._window == null ||
      !this._window.visible ||
      ((this._rb33d67944824d1 -= e),
      !(this._rb33d67944824d1 > 0) && ((this._rb33d67944824d1 = a.REFRESH_PERIOD_IN_MSECS), this.refresh()));
  }
  isVisible() {
    return this._window?.visible === !0;
  }
  close() {
    this._window == null ||
      !this._window.visible ||
      ((this._window.visible = !1),
      this._questEngine?.toolbar?.extensionView?._rb18768cf275a26(a.TOOLBAR_EXTENSION_ID));
  }
  prepareWindow() {
    if (
      this._window != null ||
      this._questEngine == null ||
      ((this._window = this._questEngine.getXmlWindow("NextQuestTimer")),
      this._window == null)
    )
      return;
    ((this._window.x = 0), (this._window.y = 0));
    let e = this._window.findChildByName("more_info_region"),
      r = this._window.findChildByName("quest_timer_expanded"),
      t = this._window.findChildByName("quest_timer_contracted");
    (e != null && (e.procedure = (...i) => this._rb3dd06828db09c(i[0], i[1])),
      r != null && (r.procedure = (...i) => this._ra4fba886972ffe(i[0], i[1])),
      t != null && (t.procedure = (...i) => this._ra4fba886972ffe(i[0], i[1])));
  }
  refresh() {
    if (this._questEngine == null || this.var_142 == null || this._window == null)
      return;
    let e = this.var_142.waitPeriodSeconds;
    if (e < 1) {
      (this.close(),
        (this.var_142.waitPeriodSeconds = 0),
        this._questEngine._rd4042d1a6a05a1.onQuest(this.var_142));
      return;
    }
    let r = ra.getFriendlyTime(this._questEngine.localization, e),
      t = `${this.var_142.hasLocalizedValue()}.delayedmsg`;
    (this._questEngine.localization._r43eae9731f5b27(
      "quests.nextquesttimer.caption.contracted",
      "time",
      r,
    ),
      this._questEngine.localization._r43eae9731f5b27(t, "time", r));
    let i = this._window.findChildByName("quest_header_txt"),
      s = this._window.findChildByName("desc_txt");
    (i != null &&
      (i.caption = this._questEngine.localization.getLocalization(
        `quests.nextquesttimer.caption.${this._expanded ? "expanded" : "contracted"}`,
      )),
      s != null && (s.caption = this._questEngine.localization.getLocalization(t, t)));
  }
  refreshVisibility() {
    if (this._window == null || this._questEngine == null) return;
    let e = this._window.findChildByName("quest_timer_expanded"),
      r = this._window.findChildByName("quest_timer_contracted"),
      t = this._window.findChildByName("more_info_txt"),
      i = this._window.findChildByName("more_info_region"),
      s = this._window.findChildByName("quest_pic_bitmap"),
      o = this._window.findChildByName("desc_txt");
    (e != null && (e.visible = this._expanded),
      r != null && (r.visible = !this._expanded),
      t != null && (t.visible = this._expanded && this._questEngine.currentlyInRoom),
      i != null && (i.visible = this._expanded && this._questEngine.currentlyInRoom),
      s != null && (s.visible = this._expanded),
      o != null && (o.visible = this._expanded),
      this.refresh());
  }
  _rb3dd06828db09c(e, r) {
    e.type !== u.CLICK ||
      this.var_142 == null ||
      this._questEngine == null ||
      this._questEngine._rd4042d1a6a05a1._r2b4bfddbe77cb9.showDetails(this.var_142);
  }
  _ra4fba886972ffe(e, r) {
    e.type === u.CLICK && ((this._expanded = !this._expanded), this.refreshVisibility());
  }
}
