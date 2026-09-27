// Estratto da HabboAirLauncher.deobf.js, riga 177655.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconAlbumHeaderView.as
// Nome offuscato: _id7b7a81e254e5a

class {
  constructor(e, r) {
    this.var_63 = e;
    this._window = r;
    this._progressView = new Wm(this.albumProgressBar);
  }
  static {
    n(this, "HabbiconAlbumHeaderView");
  }
  _progressView;
  _disposed = !1;
  refresh(e, r) {
    (this._progressView.setRatio(e.progressRatio, r),
      (this.albumProgressText.text = this.var_63.localizationManager.getLocalizationWithParams(
        "habbicon_book.album_progress.count",
        "",
        "collected",
        String(e.collected),
        "total",
        String(e.total),
      )),
      (this.ownedHabbiconsValue.text = String(e._rb89e3e34d91de4)),
      (this.setsCompletedValue.text = String(e._rdc57e6c52845bc)));
  }
  update(e) {
    this._progressView.update(e);
  }
  dispose() {
    this._disposed ||
      (this._progressView != null && (this._progressView.dispose(), (this._progressView = null)),
      (this.var_63 = null),
      (this._window = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get albumProgressBar() {
    return this._window.findChildByName("album_progress_bar");
  }
  get albumProgressText() {
    return this._window.findChildByName("album_progress_text");
  }
  get ownedHabbiconsValue() {
    return this._window.findChildByName("owned_habbicons_value");
  }
  get setsCompletedValue() {
    return this._window.findChildByName("sets_completed_value");
  }
}
