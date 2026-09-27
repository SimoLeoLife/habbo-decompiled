// Estratto da HabboAirLauncher.deobf.js, riga 271147.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/seasonalcalendar/MainWindow.as
// Nome offuscato: _i2b00a80b91ec07

class {
  constructor(e) {
    this._questEngine = e;
    ((this._re9921c957ba855 = new Nge(this._questEngine, this)),
      (this.var_1722 = new CatalogPromo(this._questEngine)),
      (this._raae7fafd91d7a0 = new RareTeaser(this._questEngine)),
      this._questEngine?.events.addEventListener?.(r_.QUESTS_SEASONAL, this._r01c27ca5ccd89b),
      this._questEngine?.events.addEventListener?.(Gp.QUEST_SEASONAL, this._r4ad1d8fe2bde7a));
  }
  static {
    n(this, "MainWindow");
  }
  _window = null;
  _r1bf748be4eabaf = null;
  _re9921c957ba855;
  var_1722;
  _raae7fafd91d7a0;
  _rf89c89a96e0f4e = !1;
  var_2966 = 0;
  dispose() {
    (this._questEngine != null &&
      (this._questEngine.events.removeEventListener?.(r_.QUESTS_SEASONAL, this._r01c27ca5ccd89b),
      this._questEngine.events.removeEventListener?.(Gp.QUEST_SEASONAL, this._r4ad1d8fe2bde7a),
      (this._questEngine = null)),
      this._window?.dispose(),
      (this._window = null),
      this._r1bf748be4eabaf?.dispose(),
      (this._r1bf748be4eabaf = null),
      this._re9921c957ba855?.close(),
      this._re9921c957ba855?.dispose(),
      (this._re9921c957ba855 = null),
      this.var_1722?.dispose(),
      (this.var_1722 = null),
      this._raae7fafd91d7a0?.dispose(),
      (this._raae7fafd91d7a0 = null));
  }
  get disposed() {
    return this._questEngine == null;
  }
  isVisible() {
    return this._window?.visible === !0;
  }
  close() {
    (this._re9921c957ba855?.close(), this._window != null && (this._window.visible = !1));
  }
  onRoomExit() {
    this.close();
  }
  _rdd12af87bae3e7() {
    if (this._window == null) {
      this._questEngine?._r4ad208985d89a3();
      return;
    }
    ((this._r1bf748be4eabaf == null || this._r1bf748be4eabaf.disposed) &&
      (this._r1bf748be4eabaf = new Dl(
        this._window,
        this._window.desktop,
        this._questEngine?._r4ad208985d89a3.bind(this._questEngine) ?? null,
        this.close.bind(this),
      )),
      this._r1bf748be4eabaf.toggle());
  }
  getCalendarImageGalleryHost() {
    let e = this._questEngine?.getSeasonalCampaignCodePrefix() ?? "";
    return `${this._questEngine?.configuration?.getProperty("image.library.url") ?? ""}${e}_quest_calendar/`;
  }
  onQuests(e, r) {
    (!this.isVisible() && !r) ||
      ((this.var_2966 = this._r8fc3fed26375d7(e)),
      this._re9921c957ba855?.onQuests(e),
      this.refresh(),
      r &&
        this._window != null &&
        ((this._window.visible = !0), this._window.activate()));
  }
  onActivityPoints(e, r) {
    this.var_1722?.onActivityPoints(e, r);
  }
  update(e) {
    this._questEngine?.configuration != null &&
      this._questEngine.isFirstLoginOfDay &&
      !this._rf89c89a96e0f4e &&
      this._questEngine.isSeasonalCalendarEnabled() &&
      (this._questEngine._r4ad208985d89a3(), (this._rf89c89a96e0f4e = !0));
  }
  get _r7568522c4b24c4() {
    return this.var_2966;
  }
  get _ra86c5b39781bf3() {
    return this.var_1722;
  }
  _r01c27ca5ccd89b = n((e) => {
    this.onQuests(e.quests, !0);
  }, "_r01c27ca5ccd89b");
  _r4ad1d8fe2bde7a = n((e) => {
    ((
      this._questEngine?._rd4042d1a6a05a1._r33e727e2936109(e.questData._r808a32b2f4122c) ?? null
    )?._r817b15ccb33fd3(),
      this._questEngine?._r4ad208985d89a3());
  }, "_r4ad1d8fe2bde7a");
  _r8fc3fed26375d7(e) {
    let r = 0;
    for (let t of e) this._questEngine?.isSeasonalQuest(t) && (r = Math.max(r, t._highestAvailableQuestIndex));
    return r;
  }
  refresh() {
    (this.prepareWindow(),
      this._re9921c957ba855?.refresh(),
      this.var_1722?.refresh(),
      this._raae7fafd91d7a0?.refresh());
  }
  prepareWindow() {
    if (
      this._window != null ||
      ((this._window = this._questEngine?.getXmlWindow("SeasonalCalendar")),
      this._window == null)
    )
      return;
    let e = `quests.${this._questEngine?.getSeasonalCampaignCodePrefix() ?? ""}.title`;
    ((this._window.caption = this._questEngine?.localization.getLocalizationWithParams(e, e) ?? e),
      this._window.findChildByTag("close") &&
        (this._window.findChildByTag("close").procedure = this.onWindowClose),
      this._re9921c957ba855?.prepare(this._window),
      this.var_1722?.prepare(this._window),
      this._raae7fafd91d7a0?.prepare(this._window),
      this._window.center());
  }
  onWindowClose = n((e, r) => {
    e.type === u.CLICK && this.close();
  }, "onWindowClose");
}
