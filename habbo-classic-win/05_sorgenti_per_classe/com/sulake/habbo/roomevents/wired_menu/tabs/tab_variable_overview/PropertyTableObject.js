// Extracted from HabboAirLauncher.deobf.js, line 357614.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/tab_variable_overview/PropertyTableObject.as
// Obfuscated name: _i572f253609e008

class {
  constructor(e, r, t, i = !1) {
    this.var_3234 = e;
    this._localization = t;
    this.var_4522 = i;
    typeof r == "string"
      ? (this._value = r)
      : typeof r == "boolean"
        ? (this._value = this._localization.getLocalization(`wiredmenu.bool.${r ? "yes" : "no"}`))
        : typeof r == "number" && Number.isInteger(r)
          ? (this._value = String(r))
          : (this._value = "");
  }
  static {
    n(this, "PropertyTableObject");
  }
  _value;
  get identifier() {
    return this.var_3234;
  }
  get value() {
    return this._value;
  }
  isPropertyUpdated(e, r) {
    let t = r;
    return e === gl.PROPERTIES_COLUMN_VALUE ? this._value !== t.value : !1;
  }
  isUpdated(e) {
    let r = e;
    return this._value !== r.value;
  }
  getTableCell(e) {
    return e === gl.PROPERTIES_COLUMN_PROPERTY
      ? new TableCell(
          TableCell.name_2,
          this._localization.getLocalization(
            `wiredmenu.variable_overview.properties.${this.var_3234}`,
          ),
        )
      : e === gl.PROPERTIES_COLUMN_VALUE
        ? new TableCell(TableCell.name_2, this._value, !1, this.var_4522)
        : new TableCell(TableCell.name_2, "");
  }
}
