// Estratto da HabboAirLauncher.deobf.js, riga 243594.

class {
  constructor(e) {
    this._chestItemType = e;
  }
  static {
    n(this, "_i27028f939050ee");
  }
  get productTypeId() {
    return this._chestItemType.isWallItem ? class_3169.const_545 : class_3169.const_254;
  }
  get itemTypeId() {
    return String(this._chestItemType.typeId);
  }
  get extraData() {
    return this._chestItemType.legacyPosterId;
  }
  get _r48777043299a0c() {
    return "";
  }
  get _r8884fd63e7a9b7() {
    return "";
  }
  get _r465eb48d84170b() {
    return [];
  }
}
