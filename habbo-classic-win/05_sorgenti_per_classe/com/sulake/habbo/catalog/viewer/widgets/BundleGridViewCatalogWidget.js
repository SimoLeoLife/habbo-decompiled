// Extracted from HabboAirLauncher.deobf.js, line 188383.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/BundleGridViewCatalogWidget.as
// Obfuscated name: _ia0db3daf88302c

class extends CatalogWidget {
  static {
    n(this, "BundleGridViewCatalogWidget");
  }
  _offer = null;
  _gridItemLayout = null;
  _r3e30777a814fac = null;
  constructor(e) {
    super(e);
  }
  init() {
    if (!super.init()) return !1;
    (this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.WIDGETS_INITIALIZED, this._rd886c8bcbe0933));
    let r = this.page?.viewer.catalog?.assets.getAssetByName("gridItem");
    return (
      (this._gridItemLayout = r?.content),
      (this._r3e30777a814fac = this._window?.findChildByName("bundleGrid")),
      !0
    );
  }
  dispose() {
    (this.events?.removeEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.WIDGETS_INITIALIZED, this._rd886c8bcbe0933),
      super.dispose());
  }
  select(e, r) {}
  startDragAndDrop(e) {
    return !1;
  }
  _rd886c8bcbe0933 = n((e) => {
    if ((this.page?.offers.length ?? 0) === 1) {
      let r = this.page?.offers[0] ?? null;
      r != null && this.events?.dispatchEvent?.(new UnkClass_dfee61(r));
    }
  }, "_rd886c8bcbe0933");
  _rae8e17ddaeb413 = n((e) => {
    ((this._offer = e.offer), this._r3e30777a814fac?._rbb4c26d068856f(), this.populateItemGrid());
  }, "_rae8e17ddaeb413");
  populateItemGrid() {
    if (this._offer == null || this._gridItemLayout == null || this._r3e30777a814fac == null)
      return;
    let r = this.page?.viewer.catalog?.windowManager.buildFromXML(this._gridItemLayout),
      t = this._offer._r10b16f6e9cda51;
    if (!(r == null || t == null))
      for (let i of t.products) {
        if (i.productType === class_1803.PRODUCT_TYPE_BADGE) continue;
        let s = r.clone(),
          o = s.findChildByName("clubLevelIcon");
        (o != null && (o.visible = !1),
          this._r3e30777a814fac.addGridItem(s),
          (i.view = s),
          i.initIcon(t)?.dispose(),
          (i.grid = this));
      }
  }
}
