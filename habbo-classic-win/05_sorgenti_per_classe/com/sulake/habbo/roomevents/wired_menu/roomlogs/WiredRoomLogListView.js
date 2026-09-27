// Extracted from HabboAirLauncher.deobf.js, line 358586.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/roomlogs/WiredRoomLogListView.as
// Obfuscated name: _i286704874a5667

class a extends rY {
  constructor(r, t) {
    super(r.assets.getAssetByName("logs_overview_xml"), t, r.localizationManager, !1);
    this.var_63 = r;
    (this.logSourceMenu.addEventListener(y.const_587, this._rb843d63d130bef),
      this.logLevelMenu.addEventListener(y.const_587, this._rb843d63d130bef),
      this.logSourceMenu.addEventListener(y.const_238, this.onSelectedFilter),
      this.logLevelMenu.addEventListener(y.const_238, this.onSelectedFilter),
      this.filterInput.addEventListener(sr.const_1081, this._rc5723cdb49db6e),
      this.autoRefreshCheckbox.select(),
      this._r75ae2dcf82c9f2());
  }
  static {
    n(this, "WiredRoomLogListView");
  }
  static REQUEST_PAGE_RATELIMIT = 190;
  static REFRESH_TIME = 2500;
  static LOG_COLUMN_TIMESTAMP = "timestamp";
  static const_563 = "source";
  static const_1376 = "level";
  static LOG_COLUMN_MESSAGE = "message";
  static _r46fbf8ff75b31b = 2147483647;
  _r0a2af36745220e = !1;
  _r0c071e689a7678 = null;
  displayNewPage(r) {
    if (this.var_63.page == null) return;
    let t = this.var_63.page;
    (r ||
      ((this._ra43033658ac2d3 = t._r0174cab56f34bc),
      (this._rbb5783a841e088 = t._r4cdb25d94727f1),
      (this.filterInput.text = t.query ?? "")),
      this.onPageLoaded());
    let i = [];
    for (let s of t.elements) i.push(new sBe(this.var_63, s));
    (this.var_778._rb800e4dd98c360(i),
      r || (this.var_778.setObjects(), this._window.activate()));
  }
  activate() {
    this._window.activate();
  }
  dispose() {
    this.disposed ||
      (this._r0c071e689a7678?.stop(),
      this._r0c071e689a7678?.removeEventListener?.(DeBouncer.addEventListener, this._r65194babb43663),
      (this._r0c071e689a7678 = null),
      this.logSourceMenu.removeEventListener(y.const_587, this._rb843d63d130bef),
      this.logLevelMenu.removeEventListener(y.const_587, this._rb843d63d130bef),
      this.logSourceMenu.removeEventListener(y.const_238, this.onSelectedFilter),
      this.logLevelMenu.removeEventListener(y.const_238, this.onSelectedFilter),
      this.filterInput.removeEventListener(sr.const_1081, this._rc5723cdb49db6e),
      super.dispose(),
      (this.var_63 = null));
  }
  createTable() {
    this.var_778 = new jn(this._windowManager, this.tableViewContainer, !0);
    let r = [
      new TableColumn(a.LOG_COLUMN_TIMESTAMP, this.loc("wiredmenu.logs_overview.col.timestamp"), 0.2),
      new TableColumn(a.const_563, this.loc("wiredmenu.logs_overview.col.source"), 0.08),
      new TableColumn(a.const_1376, this.loc("wiredmenu.logs_overview.col.level"), 0.08),
      new TableColumn(a.LOG_COLUMN_MESSAGE, this.loc("wiredmenu.logs_overview.col.message"), 0.64),
    ];
    this.var_778.initialize(r, !0, !0);
  }
  calculateLastPage() {
    return this.var_63.page == null
      ? -1
      : Math.trunc(Math.max(this.var_63.page.totalEntries - 1, 0) / UnkConstants_faf388.PAGE_SIZE + 1);
  }
  currentPage() {
    return this.var_63.page?.currentPage ?? -1;
  }
  _r56cac19c2c7e06() {
    return a.REQUEST_PAGE_RATELIMIT;
  }
  pagingTextKey() {
    return "wiredmenu.logs_overview.bottom_text";
  }
  totalEntries() {
    return this.var_63.page?.totalEntries ?? -1;
  }
  requestPage(r) {
    return this.requestPageWithFilters(r, a._r46fbf8ff75b31b, a._r46fbf8ff75b31b, null);
  }
  _rc5723cdb49db6e = n((r) => {
    r.keyCode === 13 && this.updateFilters();
  }, "_rc5723cdb49db6e");
  _r75ae2dcf82c9f2() {
    (this._r0c071e689a7678 == null &&
      ((this._r0c071e689a7678 = new UnkEventDispatcherWrapperSubclass_05394e(a.REFRESH_TIME)),
      this._r0c071e689a7678.addEventListener(DeBouncer.addEventListener, this._r65194babb43663)),
      this._r0c071e689a7678.start());
  }
  _r65194babb43663 = n((r) => {
    if (!this.autoRefreshCheckbox.isSelected || !this.isShowing()) return;
    let t = this.var_63.page;
    t != null &&
      this.requestPageWithFilters(t.currentPage, t._r0174cab56f34bc, t._r4cdb25d94727f1, t.query ?? "", !0);
  }, "_r65194babb43663");
  requestPageWithFilters(r, t, i, s, o = !1) {
    if (!super.requestPage(r)) return !1;
    let d = this.var_63.page;
    return d == null
      ? !1
      : (t === a._r46fbf8ff75b31b && (t = d._r0174cab56f34bc),
        i === a._r46fbf8ff75b31b && (i = d._r4cdb25d94727f1),
        s == null && (s = ""),
        this.var_63.send(new UnkMessageComposer_5args_3d9f3a(r, UnkConstants_faf388.PAGE_SIZE, i, t, s), o),
        this.onPageLoaded(),
        !0);
  }
  _rb843d63d130bef = n((r) => {
    this._r0a2af36745220e || this._r71573e67d954a3(!1) || r.preventWindowOperation();
  }, "_rb843d63d130bef");
  onSelectedFilter = n((r) => {
    this._r0a2af36745220e || this.updateFilters();
  }, "onSelectedFilter");
  updateFilters(r = !0) {
    if (!this._r71573e67d954a3(!1)) {
      r ||
        (this._r0c071e689a7678?.reset(),
        this._r0c071e689a7678?.start(),
        globalThis.setTimeout(() => {
          this.updateFilters(!1);
        }, a.REQUEST_PAGE_RATELIMIT + 10));
      return;
    }
    (this._r0c071e689a7678?.reset(),
      this._r0c071e689a7678?.start(),
      this.requestPageWithFilters(1, this._ra43033658ac2d3, this._rbb5783a841e088, this.filterInput.text));
  }
  set _rbb5783a841e088(r) {
    ((this._r0a2af36745220e = !0), (this.logLevelMenu.selection = r + 1), (this._r0a2af36745220e = !1));
  }
  get _rbb5783a841e088() {
    return this.logLevelMenu.selection - 1;
  }
  set _ra43033658ac2d3(r) {
    ((this._r0a2af36745220e = !0), (this.logSourceMenu.selection = r + 1), (this._r0a2af36745220e = !1));
  }
  get _ra43033658ac2d3() {
    return this.logSourceMenu.selection - 1;
  }
  get autoRefreshCheckbox() {
    return this._window.findChildByName("auto_refresh_cbx");
  }
  get logSourceMenu() {
    return this._window.findChildByName("log_source_menu");
  }
  get logLevelMenu() {
    return this._window.findChildByName("log_level_menu");
  }
  get filterInput() {
    return this._window.findChildByName("filter_input");
  }
}
