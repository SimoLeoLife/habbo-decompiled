// Estratto da HabboAirLauncher.deobf.js, riga 312211.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/chooser/furni/FurniChooserTableObject.as
// Nome offuscato: _i42c6f04c087d37

class {
  constructor(e) {
    this.var_979 = e;
  }
  static {
    n(this, "FurniChooserTableObject");
  }
  get chooserItem() {
    return this.var_979;
  }
  get identifier() {
    return `${this.var_979.category}-${this.var_979.id}`;
  }
  getTableCell(e) {
    switch (e) {
      case Ig.COLUMN_FURNI_NAME:
        return new TableCell(TableCell.name_2, this.var_979.name, !1, !0);
      case Ig.COLUMN_FURNI_OWNER:
        return this.var_979.owner == null ||
          nd.isBuilderClubId(this.var_979.id) ||
          nd.isTempId(this.var_979.id)
          ? new TableCell(TableCell.name_2, "-")
          : new TableCell(TableCell.name_2, this.var_979.owner, !1, !0);
      case Ig.COLUMN_ID:
        return new TableCell(TableCell.name_2, `${this.var_979.id}`, !1, !0);
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
}
