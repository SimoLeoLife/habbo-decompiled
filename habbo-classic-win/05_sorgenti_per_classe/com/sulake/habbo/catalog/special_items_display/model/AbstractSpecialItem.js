// Estratto da HabboAirLauncher.deobf.js, riga 186473.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/special_items_display/model/AbstractSpecialItem.as
// Nome offuscato: _i58f5a9fd2c28f6

class {
  static {
    n(this, "AbstractSpecialItem");
  }
  _index;
  _setKey;
  _itemKey;
  _name;
  _description;
  constructor(e, r, t, i) {
    ((this._index = e),
      (this._setKey = r),
      (this._itemKey = t),
      (this._name = i.localizationManager?.getLocalization(`special_items.${r}.body.${t}.title`, "") ?? ""),
      (this._description =
        i.localizationManager?.getLocalization(`special_items.${r}.body.${t}.desc`, "") ?? ""));
  }
  get index() {
    return this._index;
  }
  get name() {
    return this._name;
  }
  get description() {
    return this._description;
  }
  get _refb911dd0fd3fe() {
    return this._itemKey;
  }
  get productTypeId() {
    return class_3169.UNKNOWN;
  }
  get itemTypeId() {
    return "";
  }
  get _r48777043299a0c() {
    return "";
  }
  get _r465eb48d84170b() {
    return [];
  }
  get isValid() {
    return !1;
  }
  get extraData() {
    return "";
  }
  get _r8884fd63e7a9b7() {
    return "";
  }
}
