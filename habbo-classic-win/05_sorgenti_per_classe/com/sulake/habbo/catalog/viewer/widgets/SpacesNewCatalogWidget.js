// Estratto da HabboAirLauncher.deobf.js, riga 195203.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/SpacesNewCatalogWidget.as
// Nome offuscato: _i97b46b97727201

class extends ItemGridCatalogWidget {
  static {
    n(this, "SpacesNewCatalogWidget");
  }
  _r370ed4e1f509de = ["wallpaper", "floor", "landscape"];
  _r0705a4602f9a68 = [[], [], []];
  _selectedGroup = 0;
  _r4e44881a9df1fb = [0, 0, 0];
  _re842dacc40aa7f = null;
  _categories = ["group.walls", "group.floors", "group.views"];
  constructor(e, r, t) {
    super(e, r, t);
  }
  dispose() {
    if (
      (this.events?.removeEventListener?.(CatalogWidgetEventEnum.WIDGETS_INITIALIZED, this._rd886c8bcbe0933),
      this._re842dacc40aa7f != null)
    )
      for (let e = 0; e < this._re842dacc40aa7f.numSelectables; e++)
        this._re842dacc40aa7f
          .getSelectableAt(e)
          ?.removeEventListener(y.const_238, this._rffb03fc4ee8358);
    for (let e of this._r0705a4602f9a68) for (let r of e) r.dispose();
    ((this._r0705a4602f9a68 = []), (this._re842dacc40aa7f = null), super.dispose());
  }
  init() {
    if ((this._r36f3aadc688563(), !super.init())) return !1;
    if (
      (this.events?.addEventListener?.(CatalogWidgetEventEnum.WIDGETS_INITIALIZED, this._rd886c8bcbe0933),
      (this._re842dacc40aa7f = this.window?.findChildByName("groups")),
      this._re842dacc40aa7f != null)
    )
      for (let e = 0; e < this._re842dacc40aa7f.numSelectables; e++)
        this._re842dacc40aa7f.getSelectableAt(e)?.addEventListener(y.const_238, this._rffb03fc4ee8358);
    return (this.switchCategory(this._categories[this._selectedGroup]), this.updateRoomPreview(), !0);
  }
  select(e, r) {
    if (e == null) return;
    super.select(e, !1);
    let t = e.offer;
    t != null &&
      (this.events?.dispatchEvent?.(new SetExtraPurchaseParameterEvent(t.product?.extraParam ?? "")),
      (this._r4e44881a9df1fb[this._selectedGroup] =
        this._r0705a4602f9a68[this._selectedGroup].indexOf(t)),
      this.updateRoomPreview());
  }
  _rd886c8bcbe0933 = n((e) => {
    let r = this._r4e44881a9df1fb[this._selectedGroup],
      t = this._r0705a4602f9a68[this._selectedGroup]?.[r] ?? null;
    t?.gridItem != null && this.select(t.gridItem, !1);
  }, "_rd886c8bcbe0933");
  _rffb03fc4ee8358 = n((e) => {
    let r = e.target;
    r != null && this.switchCategory(r.name);
  }, "_rffb03fc4ee8358");
  _rf05e60447de706(e) {
    let r = this._r0705a4602f9a68[this._selectedGroup]?.[e] ?? null;
    r?.gridItem != null && this.select(r.gridItem, !1);
  }
  updateRoomPreview() {
    let e = this._r0705a4602f9a68[0]?.[this._r4e44881a9df1fb[0]] ?? null,
      r = this._r0705a4602f9a68[1]?.[this._r4e44881a9df1fb[1]] ?? null,
      t = this._r0705a4602f9a68[2]?.[this._r4e44881a9df1fb[2]] ?? null;
    e?.product == null ||
      r?.product == null ||
      t?.product == null ||
      this.events?.dispatchEvent?.(
        new _iacdd97f5df962a(r.product.extraParam, e.product.extraParam, t.product.extraParam, 64),
      );
  }
  _r36f3aadc688563() {
    this._r0705a4602f9a68 = [[], [], []];
    for (let e of this.page?.offers ?? []) {
      if (e.pricingModel !== "pricing_model_single" && e.pricingModel !== "pricing_model_multi")
        continue;
      let r = e.product;
      if (
        r == null ||
        (r.productType !== class_1803.PRODUCT_TYPE_ITEM && r.productType !== class_1803.PRODUCT_TYPE_STUFF)
      )
        continue;
      let t = r.furnitureData?.className ?? "",
        i = this._r370ed4e1f509de.indexOf(t);
      i !== -1 && this._r0705a4602f9a68[i].push(e);
    }
    return (this.page?._r6e01b87c098f94([], !1), !0);
  }
  switchCategory(e) {
    if (this.disposed || this._re842dacc40aa7f == null) return;
    let r = this._re842dacc40aa7f._rf1edf3aad44c96(e);
    r != null && this._re842dacc40aa7f.setSelected(r);
    let t = this._categories.indexOf(e);
    if (t < 0) return;
    (this.var_265?.deactivate(),
      (this.var_265 = null),
      (this._selectedGroup = t),
      (this._raf7cf1ddebe6e9 = {}),
      this._r3e30777a814fac?._rbb4c26d068856f());
    let i = this._r0705a4602f9a68[this._selectedGroup] ?? [];
    (this.page?._r6e01b87c098f94(i, !1),
      this.populateItemGrid(),
      this._rf05e60447de706(this._r4e44881a9df1fb[this._selectedGroup]));
  }
}
