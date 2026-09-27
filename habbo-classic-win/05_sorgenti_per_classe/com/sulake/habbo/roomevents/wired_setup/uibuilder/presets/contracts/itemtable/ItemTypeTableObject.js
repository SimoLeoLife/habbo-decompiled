// Estratto da HabboAirLauncher.deobf.js, riga 349952.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/contracts/itemtable/ItemTypeTableObject.as
// Nome offuscato: _iebcc0162eee76a

class {
  constructor(e, r, t) {
    this._chestItemType = e;
    this._localizedName = r;
    this._displayCode = t;
    this.var_5842 = r.toLowerCase();
  }
  static {
    n(this, "ItemTypeTableObject");
  }
  var_5842;
  get identifier() {
    return `${this._chestItemType.isWallItem ? "1-" : "0-"}${this._displayCode}`;
  }
  getTableCell(e) {
    switch (e) {
      case Pg.COL_FURNI_NAME:
        return new TableCell(TableCell.name_2, this._localizedName, !1, !0);
      case Pg.COL_FURNI_CODE:
        return new TableCell(TableCell.name_2, this._displayCode, !1, !0);
      case Pg.COL_FURNI_TYPE: {
        let r = this._chestItemType.isWallItem
          ? "${inventory.filter.placement.wall}"
          : "${inventory.filter.placement.floor}";
        return new TableCell(TableCell.name_2, r);
      }
      default:
        return new TableCell(TableCell.name_2, "");
    }
  }
  isPropertyUpdated(e, r) {
    return !1;
  }
  isUpdated(e) {
    return !1;
  }
  get _r4407b0ae32cd3e() {
    return this._chestItemType;
  }
  get localizedName() {
    return this._localizedName;
  }
  get _r77596297b07269() {
    return this._displayCode;
  }
  _rf1c449184ac3f1(e) {
    return this.var_5842.indexOf(e) !== -1 || this._displayCode.indexOf(e) !== -1;
  }
}
