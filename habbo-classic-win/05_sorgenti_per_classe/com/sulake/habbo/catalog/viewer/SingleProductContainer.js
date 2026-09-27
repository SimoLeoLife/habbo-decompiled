// Extracted from HabboAirLauncher.deobf.js, line 172352.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/SingleProductContainer.as
// Obfuscated name: _i9dc1c102cabfa3

class extends I0 {
  static {
    n(this, "SingleProductContainer");
  }
  constructor(e, r, t) {
    super(e, r, t);
  }
  initProductIcon(e, r = null) {
    let i =
      this._r7149a15797e48f?.initIcon(
        this,
        this,
        this,
        this.offer,
        this.targetIcon,
        r,
        this._rbd9d54e2af9eac,
      ) ?? null;
    this.setIconImage(i, !0);
  }
  enableLimitedItemLayout() {
    let e = this._view?.findChildByName("unique_item_background_bitmap");
    e != null && (e.visible = !0);
    let r = this._view?.findChildByName("unique_item_overlay_container"),
      t = r?.widget;
    r != null &&
      t != null &&
      this._r7149a15797e48f != null &&
      ((r.visible = !0), (t.serialNumber = this._r7149a15797e48f._raba7e4532bd54d), (t.animated = !0));
    let i = this._view?.findChildByName("unique_item_sold_out_bitmap");
    i != null && (i.visible = (this._r7149a15797e48f?._r807decfd331c6c ?? 0) === 0);
  }
  set view(e) {
    ((super.view = e), this.offer.product?._r651925293e1d0b && this.enableLimitedItemLayout());
  }
  get view() {
    return super.view;
  }
  get _r375778d2070c73() {
    return this.offer instanceof hn ? this.offer._rf95dbf90feefec : !1;
  }
  _rbd9d54e2af9eac = n((e) => {
    let r = e.target;
    !this.disposed &&
      this.offer.page?.viewer.catalog != null &&
      r?.assetName != null &&
      this.catalog?._rd02236672e019d(this.targetIcon, r.assetName, null);
  }, "_rbd9d54e2af9eac");
}
