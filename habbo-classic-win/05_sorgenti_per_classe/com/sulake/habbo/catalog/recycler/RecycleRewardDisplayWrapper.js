// Extracted from HabboAirLauncher.deobf.js, line 194448.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/recycler/RecycleRewardDisplayWrapper.as
// Obfuscated name: _i9c5af2a0b44297

class {
  constructor(e, r) {
    this.var_422 = e;
    this.var_3117 = r;
  }
  static {
    n(this, "RecycleRewardDisplayWrapper");
  }
  get productTypeId() {
    switch (this.var_422) {
      case class_1803.PRODUCT_TYPE_CHAT_STYLE:
        return class_3169.CHAT_STYLE;
      case class_1803.PRODUCT_TYPE_ITEM:
        return class_3169.const_545;
      case class_1803.PRODUCT_TYPE_STUFF:
        return class_3169.const_254;
      default:
        return class_3169.UNKNOWN;
    }
  }
  get itemTypeId() {
    return String(this.var_3117);
  }
  get _r48777043299a0c() {
    return "";
  }
  get _r465eb48d84170b() {
    return [];
  }
  get extraData() {
    return "";
  }
  get _r8884fd63e7a9b7() {
    return "";
  }
}
