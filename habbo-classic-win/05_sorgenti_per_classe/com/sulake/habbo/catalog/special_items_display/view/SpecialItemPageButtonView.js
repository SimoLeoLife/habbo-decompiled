// Estratto da HabboAirLauncher.deobf.js, riga 186611.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/special_items_display/view/SpecialItemPageButtonView.as
// Nome offuscato: _i2641a89287a7f8

class {
  static {
    n(this, "SpecialItemPageButtonView");
  }
  _view;
  _window;
  _index;
  var_2619 = !1;
  _disposed = !1;
  constructor(e, r) {
    ((this._view = e),
      (this._index = r),
      (this._window = e._rca68b345e28fe7?.clone()),
      this._window?.addEventListener(u.CLICK, this.onClick),
      (this.selected = !1));
  }
  set selected(e) {
    ((this.var_2619 = e),
      this.pageImage != null &&
        (this.pageImage.assetUri = `progress_disk_etched_${this.var_2619 ? "on" : "off"}`));
  }
  get window() {
    return this._window;
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      (this._window?.removeEventListener(u.CLICK, this.onClick),
      this._window?.dispose(),
      (this._window = null),
      (this._view = null),
      (this._disposed = !0));
  }
  get pageImage() {
    return this._window?.findChildByName("page_image");
  }
  onClick = n((e) => {
    this._view?.navigateTo(this._index);
  }, "onClick");
}
