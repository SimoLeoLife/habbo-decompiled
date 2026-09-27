// Estratto da HabboAirLauncher.deobf.js, riga 357688.

class {
  constructor(e, r) {
    this.var_1308 = e;
    this._roomEvents = r;
  }
  static {
    n(this, "_i2c080e8e5a5aae");
  }
  get identifier() {
    return this.var_1308.variableId;
  }
  get variable() {
    return this.var_1308;
  }
  isPropertyUpdated(e, r) {
    let t = r.variable;
    return e === gl.LIST_COLUMN_NAME ? this.var_1308.variableName !== t.variableName : !1;
  }
  isUpdated(e) {
    let r = e.variable;
    return this.var_1308.variableName !== r.variableName;
  }
  getTableCell(e) {
    return e === gl.LIST_COLUMN_NAME
      ? new TableCell(TableCell.name_2, this.variable.variableName)
      : new TableCell(TableCell.name_2, "");
  }
}
