// Estratto da HabboAirLauncher.deobf.js, riga 374855.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/transactions/overview/WiredTransactionLogsView.as
// Nome offuscato: _i574a3acb09cd90

class a {
  constructor(e, r) {
    this.var_63 = e;
    this._windowManager = r;
    ((this._window = this._windowManager.buildFromXML(
      this.var_63.assets.getAssetByName("transaction_overview_xml").content,
      a.DESKTOP_WINDOW_LAYER,
    )),
      (this._loadingIcon = new $h()),
      (this.pageNumberInput.restrict = "0-9"),
      this.createTransactionTable(),
      this.firstPageButton.addEventListener(u.CLICK, this._rf0797225bcfefe),
      this.previousPageButton.addEventListener(u.CLICK, this._rba8a520e411ba9),
      this.nextPageButton.addEventListener(u.CLICK, this._r625b787d1ac3fa),
      this.lastPageButton.addEventListener(u.CLICK, this._r3ef2a0787548a2),
      this.refreshButton.addEventListener(u.CLICK, this._r4ed121b53b9fee),
      this.pageNumberInput.addEventListener(sr.const_1081, this._r4b53c98e335893),
      this.pageNumberInput.addEventListener(u.CLICK_AWAY, this._rd4b8b2d81b9781),
      this.closeButton.addEventListener(u.CLICK, this.onClose));
  }
  static {
    n(this, "WiredTransactionLogsView");
  }
  static LOG_COLUMN_TYPE = "type";
  static LOG_COLUMN_TIMESTAMP = "timestamp";
  static LOG_COLUMN_USERNAME = "username";
  static LOG_COLUMN_WITHDRAWS = "withdraws";
  static name_9 = "deposits";
  static const_995 = "chests";
  static LOG_COLUMN_DETAILS = "details";
  static DESKTOP_WINDOW_LAYER = 1;
  static REQUEST_SAME_PAGE_TIMEOUT = 2e3;
  static REQUEST_PAGE_RATELIMIT = 280;
  _disposed = !1;
  _window;
  var_1938 = null;
  var_2939 = -1;
  var_4191 = 0;
  _loadingIcon;
  get disposed() {
    return this._disposed;
  }
  hide() {
    if (this.isShowing()) {
      let e = this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER);
      e?.removeChild(this._window);
    }
  }
  show() {
    if (!this.isShowing()) {
      let e = this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER);
      e != null && (e.addChild(this._window), this._window.center());
    }
  }
  isShowing() {
    return this._window.parent != null;
  }
  displayNewPage() {
    if (this.var_63.logs == null) return;
    this._loadingIcon.setVisible(this.loadingIconWindow, !1);
    let e = this.var_63.logs;
    (e.currentPage === this.var_2939 && (this.var_2939 = -1),
      (this.listTypeValueText.text = this.loc(`wiredchests.logs.type.${e._rebc2df37e3490e}`)),
      (this.idKeyText.text = this.loc(
        e._rebc2df37e3490e === class_3240.var_5748 ? "wiredchests.logs.chest_id" : "wiredchests.logs.room_id",
      )),
      (this.idValueText.text = `${e._r33058b88a88edd}`));
    let r = this.calculateLastPage();
    (we.disableSection(this.firstPageButton, e.currentPage <= 1),
      we.disableSection(this.previousPageButton, e.currentPage <= 1),
      we.disableSection(this.nextPageButton, e.currentPage >= r),
      we.disableSection(this.lastPageButton, e.currentPage >= r));
    let i = this.loc("wiredchests.logs.bottom_text").split("%page%");
    if (i.length === 2) {
      let o = i[0],
        d = i[1];
      ((this.pageTextStart.text = o.replace("%transaction_count%", `${e._r4ca10303e5c375}`)),
        (this.pageTextEnd.text = d.replace("%page_count%", `${r}`)),
        (this.pageNumberInput.text = `${e.currentPage}`));
    }
    let s = [];
    for (let o of e.logs ?? []) s.push(new TransactionTableObject(this.var_63, o));
    (this.var_1938._rb800e4dd98c360(s),
      this.var_1938.setObjects(),
      this._window.activate());
  }
  loc(e) {
    return this.var_63.localizationManager.getLocalization(e, e);
  }
  dispose() {
    this._disposed ||
      (this._loadingIcon?.dispose(),
      (this._loadingIcon = null),
      this.var_1938?.dispose(),
      (this.var_1938 = null),
      this._window?.dispose(),
      (this._window = null),
      (this.var_63 = null),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  createTransactionTable() {
    this.var_1938 = new jn(this._windowManager, this.tableView, !0, !0);
    let e = [
      new TableColumn(a.LOG_COLUMN_TYPE, this.loc("wiredchests.logs.col.type"), 0.17),
      new TableColumn(a.LOG_COLUMN_TIMESTAMP, this.loc("wiredchests.logs.col.timestamp"), 0.15),
      new TableColumn(a.LOG_COLUMN_USERNAME, this.loc("wiredchests.logs.col.username"), 0.14),
      new TableColumn(a.LOG_COLUMN_WITHDRAWS, this.loc("wiredchests.logs.col.withdraws"), 0.14),
      new TableColumn(a.name_9, this.loc("wiredchests.logs.col.deposits"), 0.14),
      new TableColumn(a.const_995, this.loc("wiredchests.logs.col.chests"), 0.12),
      new TableColumn(a.LOG_COLUMN_DETAILS, this.loc("wiredchests.logs.col.details"), 0.14),
    ];
    this.var_1938.initialize(e, !0, !0);
  }
  calculateLastPage() {
    return this.var_63.logs == null
      ? 1
      : Math.trunc(Math.max(this.var_63.logs._r4ca10303e5c375 - 1, 0) / TransactionConfig.PAGE_SIZE + 1);
  }
  _r224fef3d020336() {
    let e = Number.parseInt(this.pageNumberInput.text || "0", 10),
      r = this.calculateLastPage();
    (e < 1
      ? ((e = 1), (this.pageNumberInput.text = `${e}`))
      : e > r && ((e = r), (this.pageNumberInput.text = `${e}`)),
      this.var_63.logs != null &&
        e !== this.var_63.logs.currentPage &&
        this.requestPage(e));
  }
  requestPage(e) {
    let r = _ia411d8d8194a3a();
    this.var_4191 > r - a.REQUEST_PAGE_RATELIMIT ||
      (e === this.var_2939 && this.var_4191 > r - a.REQUEST_SAME_PAGE_TIMEOUT) ||
      ((this.var_2939 = e),
      (this.var_4191 = r),
      this.var_63.logs._rebc2df37e3490e === class_3240.var_5748
        ? this.var_63.send(
            new _ic9dcc5b7c1f3de(this.var_63.logs._r33058b88a88edd, TransactionConfig.PAGE_SIZE, e),
          )
        : this.var_63.send(new _i7be3e6378eefce(TransactionConfig.PAGE_SIZE, e)),
      this._loadingIcon.setVisible(this.loadingIconWindow, !0));
  }
  onClose = n((e) => {
    this.hide();
  }, "onClose");
  _r3ef2a0787548a2 = n((e) => {
    this.var_63.logs != null && this.requestPage(this.calculateLastPage());
  }, "_r3ef2a0787548a2");
  _r625b787d1ac3fa = n((e) => {
    this.var_63.logs != null &&
      this.requestPage(this.var_63.logs.currentPage + 1);
  }, "_r625b787d1ac3fa");
  _rba8a520e411ba9 = n((e) => {
    this.var_63.logs != null &&
      this.requestPage(this.var_63.logs.currentPage - 1);
  }, "_rba8a520e411ba9");
  _rf0797225bcfefe = n((e) => {
    this.var_63.logs != null && this.requestPage(1);
  }, "_rf0797225bcfefe");
  _r4ed121b53b9fee = n((e) => {
    this.var_63.logs != null && this.requestPage(this.var_63.logs.currentPage);
  }, "_r4ed121b53b9fee");
  _rd4b8b2d81b9781 = n((e) => {
    this._r224fef3d020336();
  }, "_rd4b8b2d81b9781");
  _r4b53c98e335893 = n((e) => {
    e.keyCode === 13 && this._r224fef3d020336();
  }, "_r4b53c98e335893");
  get closeButton() {
    return this._window.findChildByName("header_button_close");
  }
  get listTypeValueText() {
    return this._window.findChildByName("list_type_value");
  }
  get idKeyText() {
    return this._window.findChildByName("id_key");
  }
  get idValueText() {
    return this._window.findChildByName("id_value");
  }
  get refreshButton() {
    return this._window.findChildByName("refresh_btn");
  }
  get loadingIconWindow() {
    return this._window.findChildByName("searching_icon");
  }
  get tableView() {
    return this._window.findChildByName("table_view");
  }
  get firstPageButton() {
    return this._window.findChildByName("first_page_btn");
  }
  get previousPageButton() {
    return this._window.findChildByName("prev_page_btn");
  }
  get nextPageButton() {
    return this._window.findChildByName("next_page_btn");
  }
  get lastPageButton() {
    return this._window.findChildByName("last_page_btn");
  }
  get pageTextStart() {
    return this._window.findChildByName("pagina_text_start");
  }
  get pageNumberInput() {
    return this._window.findChildByName("pagina_number_input");
  }
  get pageTextEnd() {
    return this._window.findChildByName("pagina_text_end");
  }
}
