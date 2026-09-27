// Estratto da HabboAirLauncher.deobf.js, riga 357658.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/tab_variable_overview/TextTableObject.as
// Nome offuscato: _i837e74ffde12ad

class {
  constructor(e, r) {
    this._value = e;
    this._text = r;
  }
  static {
    n(this, "TextTableObject");
  }
  get identifier() {
    return String(this._value);
  }
  get text() {
    return this._text;
  }
  isPropertyUpdated(e, r) {
    let t = r;
    return e === gl.var_5701 ? this._text !== t.text : !1;
  }
  isUpdated(e) {
    let r = e;
    return this._text !== r.text;
  }
  getTableCell(e) {
    return e === gl._r11a90825199df3
      ? new TableCell(TableCell.name_2, String(this._value), !1, !0)
      : e === gl.var_5701
        ? new TableCell(TableCell.name_2, this.text, !1, !0)
        : new TableCell(TableCell.name_2, "");
  }
}
