// Estratto da HabboAirLauncher.deobf.js, riga 188103.

class extends CatalogWidget {
  static {
    n(this, "_ie7af1745a8d65a");
  }
  constructor(e) {
    super(e);
  }
  init() {
    return super.init()
      ? (this._rd7318259311b4b(CatalogWidgetEnum.ADDON_BADGE_VIEW),
        this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413),
        !0)
      : !1;
  }
  dispose() {
    (this.disposed || this.events?.removeEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413),
      super.dispose());
  }
  _rae8e17ddaeb413 = n((e) => {
    if (this.disposed || !e.offer._rc9fc89e7eb27a7) return;
    let r = this._window?.findChildByName("badge")?.widget;
    r != null && (r.badgeId = e.offer._rc9fc89e7eb27a7);
  }, "_rae8e17ddaeb413");
}
