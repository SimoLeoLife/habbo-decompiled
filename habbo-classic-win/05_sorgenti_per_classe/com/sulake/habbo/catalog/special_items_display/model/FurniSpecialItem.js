// Estratto da HabboAirLauncher.deobf.js, riga 186524.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/special_items_display/model/FurniSpecialItem.as
// Nome offuscato: _idc17f310f853d4

class extends AbstractSpecialItem {
  static {
    n(this, "FurniSpecialItem");
  }
  var_4146 = -1;
  _furniName = "";
  constructor(e, r, t, i, s) {
    super(e, r, t, i);
    let o = i.sessionDataManager?.getFloorItemDataByName(s) ?? null;
    o != null && ((this.var_4146 = o.id), (this._furniName = o.localizedName));
  }
  get productTypeId() {
    return class_3169.const_254;
  }
  get itemTypeId() {
    return String(this.var_4146);
  }
  get isValid() {
    return this.var_4146 !== -1;
  }
  get name() {
    return this._name.length > 0 ? this._name : this._furniName;
  }
}
