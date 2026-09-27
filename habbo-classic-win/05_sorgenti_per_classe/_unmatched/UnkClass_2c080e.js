// Extracted from HabboAirLauncher.deobf.js, line 357688.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2c080e8e5a5aae

class {
  constructor(e, r) {
    this.var_1308 = e;
    this._roomEvents = r;
  }
  static {
    n(this, "UnkClass_2c080e");
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
