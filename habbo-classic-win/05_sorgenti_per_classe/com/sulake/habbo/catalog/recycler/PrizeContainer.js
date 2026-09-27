// Extracted from HabboAirLauncher.deobf.js, line 186118.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/recycler/PrizeContainer.as
// Obfuscated name: _i7aa6e318aa1948

class extends PrizeGridItem {
  static {
    n(this, "PrizeContainer");
  }
  var_3394;
  var_3967;
  var_5018;
  var_689;
  constructor(e, r, t, i, s) {
    (super(s),
      (this.var_3394 = e),
      (this.var_3967 = r),
      (this.var_689 = t),
      (this.var_5018 = i));
  }
  setIcon(e) {
    e != null && this.initProductIcon(e, this.var_3394, this.var_3967);
  }
  get productItemType() {
    return this.var_3394;
  }
  get productItemTypeId() {
    return this.var_3967;
  }
  get _r42ffd60e4569a8() {
    return this.var_5018;
  }
  get title() {
    if (this.var_689 == null) {
      let e = null;
      return (
        this.var_3394 === class_1803.PRODUCT_TYPE_CHAT_STYLE &&
          (e = this.catalog?.getProductData(`chat_bubble_${this.productItemTypeId}`) ?? null),
        e?.name ?? ""
      );
    }
    return this.var_689.localizedName;
  }
}
