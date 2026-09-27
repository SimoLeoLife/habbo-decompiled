// Extracted from HabboAirLauncher.deobf.js, line 196719.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/FurniProductContainer.as
// Obfuscated name: _ic1fe91acd85cf9

class extends I0 {
  constructor(r, t, i, s) {
    super(r, t, i);
    this.var_689 = s;
  }
  static {
    n(this, "FurniProductContainer");
  }
  initProductIcon(r, t = null) {
    let i = null;
    switch (this.var_689.type) {
      case "s":
        i = this.catalog?.roomEngine?._r65a31a885a1252(this.var_689.id, this);
        break;
      case "i":
        i = this.catalog?.roomEngine?.getWallItemDataByName(this.var_689.id, this);
        break;
    }
    i?.data != null && this.setIconImage(i.data, !0);
  }
  activate() {
    super.activate();
    let r = this._offer.page?._r1db0fa6d0cb8a7 ?? !1;
    this._offer.offerId > -1
      ? this.catalog?._r0d4b993beffea4(this._offer.offerId)
      : this.var_689.rentOfferId > -1 && !r
        ? this.catalog?._r0d4b993beffea4(this.var_689.rentOfferId)
        : this.var_689.purchaseOfferId > -1 &&
          this.catalog?._r0d4b993beffea4(this.var_689.purchaseOfferId);
  }
  get isLazy() {
    return !0;
  }
}
