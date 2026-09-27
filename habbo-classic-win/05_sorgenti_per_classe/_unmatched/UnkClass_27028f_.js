// Extracted from HabboAirLauncher.deobf.js, line 243594.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i27028f939050ee

class {
  constructor(e) {
    this._chestItemType = e;
  }
  static {
    n(this, "UnkClass_27028f_");
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
