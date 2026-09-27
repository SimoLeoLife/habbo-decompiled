// Estratto da HabboAirLauncher.deobf.js, riga 178328.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconSetPageView.as
// Nome offuscato: _i475d7198c6923c

class a {
  constructor(e, r, t, i, s) {
    this.var_63 = e;
    this._window = r;
    this.var_2146 = t;
    this._emptyTileTemplate = i;
    this.var_2725 = s;
    ((this._progressView = new Wm(this.setProgressBar)),
      (this.var_1170 = new HabbiconRewardPanelView(this.var_63, this._window, this.var_2725)));
  }
  static {
    n(this, "HabbiconSetPageView");
  }
  static VISIBLE_SLOT_COUNT = 20;
  var_304 = null;
  _progressView;
  var_1170;
  _tiles = [];
  _emptySlots = [];
  _disposed = !1;
  refresh(e, r) {
    if (((this.var_304 = e), this.recycleTiles(), this.var_304 == null)) {
      ((this._window.visible = !1),
        (this.setTitle.text = ""),
        (this.setDescription.text = ""),
        this._progressView.setRatio(0, !1),
        (this.setProgressText.text = ""),
        this.var_1170.refresh(null, !1));
      return;
    }
    ((this._window.visible = !0),
      (this.setTitle.text = this.var_304.title),
      (this.setDescription.text = this.var_304.description),
      this._progressView.setRatio(this.var_304.progressRatio, r),
      (this.setProgressText.text = this.var_63.localizationManager.getLocalizationWithParams(
        "habbicon_book.set_progress.count",
        "",
        "collected",
        String(this.var_304.completed),
        "total",
        String(this.var_304.total),
      )));
    for (let t of this.var_304.habbicons) {
      let i = Bm.claim(this.var_2146);
      (i.initialize(this.var_63, t, this.var_2725),
        this.setGrid.addGridItem(i.window),
        this._tiles.push(i));
    }
    (this.push(this._tiles.length),
      this.var_1170.refresh(this.var_304, r));
  }
  refreshEntry(e) {
    if (e != null) {
      for (let r of this._tiles)
        if (r.item != null && r.item.habbiconId === e.habbiconId) {
          r.refresh(e);
          return;
        }
    }
  }
  refreshProgress(e, r) {
    if (((this.var_304 = e), this.var_304 == null)) {
      (this._progressView.setRatio(0, !1), (this.setProgressText.text = ""));
      return;
    }
    (this._progressView.setRatio(this.var_304.progressRatio, r),
      (this.setProgressText.text = this.var_63.localizationManager.getLocalizationWithParams(
        "habbicon_book.set_progress.count",
        "",
        "collected",
        String(this.var_304.completed),
        "total",
        String(this.var_304.total),
      )));
  }
  refreshReward(e, r) {
    this.var_1170.refresh(e, r);
  }
  update(e) {
    (this._progressView.update(e), this.var_1170.update(e));
  }
  dispose() {
    this._disposed ||
      (this.recycleTiles(),
      this._progressView != null && (this._progressView.dispose(), (this._progressView = null)),
      this.var_1170 != null && (this.var_1170.dispose(), (this.var_1170 = null)),
      (this.var_63 = null),
      (this._window = null),
      (this.var_2146 = null),
      (this._emptyTileTemplate = null),
      (this.var_2725 = null),
      (this.var_304 = null),
      (this._tiles = null),
      (this._emptySlots = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  recycleTiles() {
    this.setGrid.removeGridItems();
    for (let e of this._tiles) Bm.release(e);
    this._tiles.length = 0;
    for (let e of this._emptySlots) e.dispose();
    this._emptySlots.length = 0;
  }
  push(e) {
    let r = Math.max(0, a.VISIBLE_SLOT_COUNT - e);
    for (let t = 0; t < r; t++) {
      let i = this._emptyTileTemplate.clone();
      ((i.visible = !0), this.setGrid.addGridItem(i), this._emptySlots.push(i));
    }
  }
  get setTitle() {
    return this._window.findChildByName("set_title");
  }
  get setDescription() {
    return this._window.findChildByName("set_description");
  }
  get setProgressBar() {
    return this._window.findChildByName("set_progress_bar");
  }
  get setProgressText() {
    return this._window.findChildByName("set_progress_text");
  }
  get setGrid() {
    return this._window.findChildByName("set_grid");
  }
}
