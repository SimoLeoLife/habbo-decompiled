// Estratto da HabboAirLauncher.deobf.js, riga 186157.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/recycler/DealPrizeContainer.as
// Nome offuscato: _i6a14a62a6c7f8f

class extends PrizeContainer {
  static {
    n(this, "DealPrizeContainer");
  }
  _ra00c321ec70e69;
  _r421274065d008e = [];
  var_2136;
  _gridItemLayout;
  constructor(e, r, t) {
    let i = t?.assets.getAssetByName("gridItem"),
      s = t?.assets.getAssetByName("ctlg_pic_deal_icon_narrow"),
      o = e.map((d) => t?.products(d.productItemTypeId, d.productItemType) ?? null);
    (super("deal", -1, null, r, t),
      (this._ra00c321ec70e69 = e),
      (this._gridItemLayout = i?.content ?? null),
      (this.var_2136 = s?.content ?? null),
      this._r421274065d008e.push(...o));
  }
  setIcon(e) {
    let r = this.view?.findChildByName("image");
    if (r == null) return;
    ((r.bitmap = new A(r.width, r.height, !0, 0)),
      this.var_2136 != null &&
        r.bitmap.copyPixels(
          this.var_2136,
          this.var_2136.rect,
          new E((r.width - this.var_2136.width) / 2, (r.height - this.var_2136.height) / 2),
        ));
    let t = this.view?.findChildByName("bundleCounter");
    t != null && (t.text = String(this._ra00c321ec70e69.length));
  }
  get title() {
    return "";
  }
  get _ref140d0201ea74() {
    return this._ra00c321ec70e69;
  }
  get _rc62128b92c2c1f() {
    return this._r421274065d008e;
  }
}
