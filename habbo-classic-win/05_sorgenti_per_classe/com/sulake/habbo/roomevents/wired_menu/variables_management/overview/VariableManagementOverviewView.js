// Extracted from HabboAirLauncher.deobf.js, line 359415.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/variables_management/overview/VariableManagementOverviewView.as
// Obfuscated name: _ifd27e341d1a12b

class a extends rY {
  constructor(r, t) {
    super(r.assets.getAssetByName("variables_management_overview_xml"), t, r.localizationManager);
    this.var_63 = r;
    (this.userTypeMenu.addEventListener(y.const_587, this._rb843d63d130bef),
      this.sortTypeMenu.addEventListener(y.const_587, this._rb843d63d130bef),
      this.userTypeMenu.addEventListener(y.const_238, this.onSelectedFilter),
      this.sortTypeMenu.addEventListener(y.const_238, this.onSelectedFilter));
  }
  static {
    n(this, "VariableManagementOverviewView");
  }
  static REQUEST_PAGE_RATELIMIT = 280;
  static LOG_COLUMN_USERTYPE = "usertype";
  static LOG_COLUMN_NAME = "name";
  static LOG_COLUMN_CREATION_TIME = "creation_time";
  static LOG_COLUMN_LAST_UPDATE_TIME = "last_update_time";
  static const_765 = "value";
  static LOG_COLUMN_MANAGE = "manage";
  static _r46fbf8ff75b31b = 2147483647;
  _r0a2af36745220e = !1;
  displayNewPage() {
    if (this.var_63.page == null) return;
    let r = this.var_63.page,
      t = r.variableId,
      i = this.var_63._r41f5cc7d3516ce._rf5e384520bc525._r558a177d550462(t);
    if (i == null) return;
    ((this.variableNameValue.text = i == null ? t : i.variableName),
      (this._r506d7c82a1c9e4 = r._ra69d4ed121104a),
      (this._r3181daa34e39d3 = r._rcf5cc4e95fbddd),
      this.onPageLoaded());
    let s = [];
    for (let o of r.elements) s.push(new UnkClass_578ed5(this.var_63, o, i));
    (this.var_778._rb800e4dd98c360(s),
      this.var_778.setObjects(),
      this._window.activate());
  }
  dispose() {
    this.disposed ||
      (this.userTypeMenu.removeEventListener(y.const_587, this._rb843d63d130bef),
      this.sortTypeMenu.removeEventListener(y.const_587, this._rb843d63d130bef),
      this.userTypeMenu.removeEventListener(y.const_238, this.onSelectedFilter),
      this.sortTypeMenu.removeEventListener(y.const_238, this.onSelectedFilter),
      super.dispose(),
      (this.var_63 = null));
  }
  createTable() {
    this.var_778 = new jn(this._windowManager, this.tableViewContainer, !0);
    let r = [
      new TableColumn(a.LOG_COLUMN_USERTYPE, this.loc("wiredmenu.variable_management.col.usertype"), 0.1),
      new TableColumn(a.LOG_COLUMN_NAME, this.loc("wiredmenu.variable_management.col.name"), 0.18),
      new TableColumn(a.LOG_COLUMN_CREATION_TIME, this.loc("wiredmenu.variable_management.col.creation_time"), 0.21),
      new TableColumn(a.LOG_COLUMN_LAST_UPDATE_TIME, this.loc("wiredmenu.variable_management.col.last_update_time"), 0.21),
      new TableColumn(a.const_765, this.loc("wiredmenu.variable_management.col.value"), 0.18),
      new TableColumn(a.LOG_COLUMN_MANAGE, this.loc("wiredmenu.variable_management.col.manage"), 0.12),
    ];
    this.var_778.initialize(r, !0, !0);
  }
  calculateLastPage() {
    return this.var_63.page == null
      ? -1
      : Math.trunc(Math.max(this.var_63.page.totalEntries - 1, 0) / UnkConstants_50108c.PAGE_SIZE + 1);
  }
  currentPage() {
    return this.var_63.page?.currentPage ?? -1;
  }
  _r56cac19c2c7e06() {
    return a.REQUEST_PAGE_RATELIMIT;
  }
  pagingTextKey() {
    return "wiredmenu.variable_management.bottom_text";
  }
  totalEntries() {
    return this.var_63.page?.totalEntries ?? -1;
  }
  requestPage(r) {
    return this.requestPageWithFilters(r, a._r46fbf8ff75b31b, a._r46fbf8ff75b31b);
  }
  requestPageWithFilters(r, t, i) {
    if (!super.requestPage(r)) return !1;
    let s = this.var_63.page;
    return s == null
      ? !1
      : (t === a._r46fbf8ff75b31b && (t = s._rcf5cc4e95fbddd),
        i === a._r46fbf8ff75b31b && (i = s._ra69d4ed121104a),
        this.var_63.send(new UnkMessageComposer_5args_cb1434(s.variableId, r, UnkConstants_50108c.PAGE_SIZE, t, i)),
        this.onPageLoaded(),
        !0);
  }
  _rb843d63d130bef = n((r) => {
    this._r0a2af36745220e || this._r71573e67d954a3(!1) || r.preventWindowOperation();
  }, "_rb843d63d130bef");
  onSelectedFilter = n((r) => {
    this._r0a2af36745220e ||
      (this._r71573e67d954a3(!1) && this.requestPageWithFilters(1, this._r3181daa34e39d3, this._r506d7c82a1c9e4));
  }, "onSelectedFilter");
  set _r3181daa34e39d3(r) {
    ((this._r0a2af36745220e = !0), (this.sortTypeMenu.selection = r), (this._r0a2af36745220e = !1));
  }
  get _r3181daa34e39d3() {
    return this.sortTypeMenu.selection;
  }
  set _r506d7c82a1c9e4(r) {
    let t = r;
    (t === 4 ? (t = 3) : t !== 1 && t !== 2 && (t = 0),
      (this._r0a2af36745220e = !0),
      (this.userTypeMenu.selection = t),
      (this._r0a2af36745220e = !1));
  }
  get _r506d7c82a1c9e4() {
    let r = this.userTypeMenu.selection;
    return r === 3 ? 4 : r === 1 || r === 2 ? r : -1;
  }
  get variableNameValue() {
    return this._window.findChildByName("variable_name_value");
  }
  get userTypeMenu() {
    return this._window.findChildByName("user_type_menu");
  }
  get sortTypeMenu() {
    return this._window.findChildByName("sort_type_menu");
  }
}
