// Estratto da HabboAirLauncher.deobf.js, riga 312493.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/chooser/users/UsersChooserTableObject.as
// Nome offuscato: _i3e724795fb6d96

class {
  constructor(e) {
    this.var_979 = e;
  }
  static {
    n(this, "UsersChooserTableObject");
  }
  get chooserItem() {
    return this.var_979;
  }
  get identifier() {
    return `${this.var_979.type}-${this.var_979.id}`;
  }
  getTableCell(e) {
    switch (e) {
      case $I.COLUMN_USER_NAME:
        return new TableCell(TableCell.name_2, this.var_979.name, !1, !0);
      case $I.COLUMN_TYPE:
        return new TableCell(TableCell.name_2, `\${new_user_chooser.usertype.${this.var_979.type}}`);
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
