// Extracted from HabboAirLauncher.deobf.js, line 192619.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3c6cb319998ce7

class {
  constructor(e) {
    this.var_3415 = e;
  }
  static {
    n(this, "UnkClass_3c6cb3");
  }
  get productTypeId() {
    switch (this.var_3415.productType) {
      case class_1803.PRODUCT_TYPE_CHAT_STYLE:
        return class_3169.CHAT_STYLE;
      case class_1803.PRODUCT_TYPE_RENTABLE_BOT:
        return class_3169.BOT;
    }
    return 0;
  }
  get itemTypeId() {
    return this.var_3415.extraParam;
  }
  get _r48777043299a0c() {
    return "";
  }
  get _r8884fd63e7a9b7() {
    return this.var_3415.extraParam;
  }
  get _r465eb48d84170b() {
    return [];
  }
  get extraData() {
    return "";
  }
  static isSupported(e) {
    return e === class_1803.PRODUCT_TYPE_CHAT_STYLE || e === class_1803.PRODUCT_TYPE_RENTABLE_BOT;
  }
}
