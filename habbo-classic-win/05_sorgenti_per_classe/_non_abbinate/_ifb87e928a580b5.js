// Estratto da HabboAirLauncher.deobf.js, riga 175324.

class {
  constructor(e, r) {
    this._r734938a185496b = e;
    this._amount = r;
  }
  static {
    n(this, "_ifb87e928a580b5");
  }
  get productTypeId() {
    switch (this._r734938a185496b.itemType) {
      case ps.PRODUCT_TYPE_ITEM:
        return class_3169.const_545;
      case ps.PRODUCT_TYPE_STUFF:
        return class_3169.const_254;
      case ps.const_1159:
        return class_3169.CLOTHING;
      default:
        return class_3169.UNKNOWN;
    }
  }
  get itemTypeId() {
    return String(this._r734938a185496b.itemTypeId);
  }
  get extraData() {
    return "";
  }
  get amount() {
    return this._amount;
  }
  set amount(e) {
    this._amount = e;
  }
  get _r48777043299a0c() {
    return "";
  }
  get _r465eb48d84170b() {
    return [];
  }
  get productItem() {
    return this._r734938a185496b;
  }
  get _r8884fd63e7a9b7() {
    return "";
  }
}
