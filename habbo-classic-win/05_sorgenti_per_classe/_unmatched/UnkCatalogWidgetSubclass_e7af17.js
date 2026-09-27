// Extracted from HabboAirLauncher.deobf.js, line 188103.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie7af1745a8d65a

class extends CatalogWidget {
  static {
    n(this, "UnkCatalogWidgetSubclass_e7af17");
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
