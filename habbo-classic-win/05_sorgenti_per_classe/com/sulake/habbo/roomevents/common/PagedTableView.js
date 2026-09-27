// Extracted from HabboAirLauncher.deobf.js, line 358337.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/common/PagedTableView.as
// Obfuscated name: _ia7f76a0064569b

class a {
  static {
    n(this, "PagedTableView");
  }
  static DESKTOP_WINDOW_LAYER = 1;
  static REQUEST_SAME_PAGE_TIMEOUT = 2e3;
  _disposed = !1;
  _windowManager;
  var_161;
  _window;
  var_778 = null;
  var_2939 = -1;
  var_4191 = 0;
  _loadingIcon;
  _samePageTimeout = !1;
  constructor(e, r, t, i = !0) {
    ((this._samePageTimeout = i),
      (this._windowManager = r),
      (this.var_161 = t),
      (this._window = this._windowManager.buildFromXML(e.content, a.DESKTOP_WINDOW_LAYER)),
      (this._loadingIcon = new $h()),
      (this.pageNumberInput.restrict = "0-9"),
      this.createTable(),
      this.firstPageButton.addEventListener(u.CLICK, this._rf0797225bcfefe),
      this.previousPageButton.addEventListener(u.CLICK, this._rba8a520e411ba9),
      this.nextPageButton.addEventListener(u.CLICK, this._r625b787d1ac3fa),
      this.lastPageButton.addEventListener(u.CLICK, this._r3ef2a0787548a2),
      this.refreshButton != null && this.refreshButton.addEventListener(u.CLICK, this._r4ed121b53b9fee),
      this.pageNumberInput.addEventListener(sr.const_1081, this._r4b53c98e335893),
      this.pageNumberInput.addEventListener(u.CLICK_AWAY, this._rd4b8b2d81b9781),
      this.closeButton.addEventListener(u.CLICK, this.onClose),
      this.hide());
  }
  onClose = n((e) => {
    this.hide();
  }, "onClose");
  hide() {
    if (!this.isShowing()) return;
    let e = this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER);
    e?.removeChild(this._window);
  }
  show() {
    if (this.isShowing()) return;
    let e = this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER);
    e != null && (e.addChild(this._window), this._window.center());
  }
  isShowing() {
    return this._window.parent != null;
  }
  _r3ef2a0787548a2 = n((e) => {
    let r = this.calculateLastPage();
    r !== -1 && this.requestPage(r);
  }, "_r3ef2a0787548a2");
  _r625b787d1ac3fa = n((e) => {
    let r = this.currentPage();
    r !== -1 && this.requestPage(r + 1);
  }, "_r625b787d1ac3fa");
  _rba8a520e411ba9 = n((e) => {
    let r = this.currentPage();
    r !== -1 && this.requestPage(r - 1);
  }, "_rba8a520e411ba9");
  _rf0797225bcfefe = n((e) => {
    this.requestPage(1);
  }, "_rf0797225bcfefe");
  _r4ed121b53b9fee = n((e) => {
    let r = this.currentPage();
    r !== -1 && this.requestPage(r);
  }, "_r4ed121b53b9fee");
  _rd4b8b2d81b9781 = n((e) => {
    this._r224fef3d020336();
  }, "_rd4b8b2d81b9781");
  _r4b53c98e335893 = n((e) => {
    e.keyCode === 13 && this._r224fef3d020336();
  }, "_r4b53c98e335893");
  _r224fef3d020336() {
    let e = Number(this.pageNumberInput.text) | 0,
      r = this.calculateLastPage();
    e < 1
      ? ((e = 1), (this.pageNumberInput.text = String(e)))
      : e > r && ((e = r), (this.pageNumberInput.text = String(e)));
    let t = this.currentPage();
    t !== -1 && e !== t && this.requestPage(e);
  }
  _r71573e67d954a3(e) {
    let r = _ia411d8d8194a3a();
    return !(
      this.var_4191 > r - this._r56cac19c2c7e06() ||
      (this._samePageTimeout && e && this.var_4191 > r - a.REQUEST_SAME_PAGE_TIMEOUT)
    );
  }
  loc(e) {
    return this.var_161.getLocalization(e, e);
  }
  _r92c38281ce2094() {
    this._loadingIcon?.setVisible(this.loadingIconWindow, !0);
  }
  onPageLoaded() {
    this._loadingIcon?.setVisible(this.loadingIconWindow, !1);
    let e = this.currentPage();
    e === this.var_2939 && (this.var_2939 = -1);
    let r = this.calculateLastPage();
    (we.disableSection(this.firstPageButton, e <= 1),
      we.disableSection(this.previousPageButton, e <= 1),
      we.disableSection(this.nextPageButton, e >= r),
      we.disableSection(this.lastPageButton, e >= r));
    let i = this.loc(this.pagingTextKey()).split("%page%");
    if (i.length === 2) {
      let s = i[0],
        o = i[1];
      ((this.pageTextStart.text = s.replace("%entries_count%", String(this.totalEntries()))),
        (this.pageTextEnd.text = o.replace("%page_count%", String(r))),
        (this.pageNumberInput.text = String(e)));
    }
  }
  createTable() {}
  calculateLastPage() {
    return 0;
  }
  currentPage() {
    return 0;
  }
  _r56cac19c2c7e06() {
    return 200;
  }
  pagingTextKey() {
    return "";
  }
  totalEntries() {
    return 0;
  }
  requestPage(e) {
    let r = _ia411d8d8194a3a();
    return this._r71573e67d954a3(e === this.var_2939)
      ? ((this.var_2939 = e), (this.var_4191 = r), !0)
      : !1;
  }
  dispose() {
    this._disposed ||
      (this._loadingIcon?.dispose(),
      (this._loadingIcon = null),
      this.var_778?.dispose(),
      (this.var_778 = null),
      this._window.dispose(),
      (this._window = null),
      (this._windowManager = null),
      (this.var_161 = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get closeButton() {
    return this._window.findChildByName("header_button_close");
  }
  get loadingIconWindow() {
    return this._window.findChildByName("searching_icon");
  }
  get refreshButton() {
    return this._window.findChildByName("refresh_btn");
  }
  get tableViewContainer() {
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
