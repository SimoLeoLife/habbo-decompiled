// Extracted from HabboAirLauncher.deobf.js, line 356343.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/tab_inspection/VariableValueTableObject.as
// Obfuscated name: _i0bce42e5015b29

class a {
  constructor(e, r, t, i, s) {
    this.var_1308 = e;
    this._value = r;
    this.var_3281 = t;
    this._highlightChanges = i;
    this._localization = s;
  }
  static {
    n(this, "VariableValueTableObject");
  }
  get identifier() {
    return this.var_1308.variableId;
  }
  get variable() {
    return this.var_1308;
  }
  get value() {
    return this._value;
  }
  get canModify() {
    return this.var_3281;
  }
  isPropertyUpdated(e, r) {
    let t = r;
    return e === "variable"
      ? this.var_1308.variableName !== t.variable.variableName
      : e === "value"
        ? this.var_3281 !== t.canModify ||
          this.var_1308.hasValue !== t.variable.hasValue
          ? !0
          : this.var_1308.hasValue
            ? this._value !== t.value ||
              we.getConnectedText(this.variable, this._value) !== we.getConnectedText(t.variable, t.value)
            : !1
        : !1;
  }
  isUpdated(e) {
    return this.isPropertyUpdated("value", e) || this.isPropertyUpdated("variable", e);
  }
  getTableCell(e) {
    return e === "variable"
      ? new TableCell(
          TableCell.name_2,
          this.var_1308.variableName,
          !1,
          !0,
          this.var_1308.variableName,
        )
      : e === "value"
        ? a.createVariableValueCell(
            this.var_1308,
            this._value,
            this._localization,
            this._highlightChanges,
            this.var_3281,
          )
        : new TableCell(TableCell.name_2, "");
  }
  static createVariableValueCell(e, r, t, i, s) {
    if (e.hasValue) {
      if (r === 2147483647 || r === -2147483648)
        return new TableCell(
          TableCell.name_2,
          t.getLocalization("wiredmenu.inspection.flash_restriction.text"),
          !1,
          !1,
          null,
          null,
          !1,
          t.getLocalization("wiredmenu.inspection.flash_restriction.desc"),
          16734003,
        );
      let d = we.variableValueWithString(e, r);
      return new TableCell(TableCell.name_2, d, e.canWriteValue && s, !0, String(r), null, i);
    }
    return new TableCell(TableCell.name_2, "");
  }
}
