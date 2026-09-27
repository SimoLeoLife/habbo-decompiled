// Extracted from HabboAirLauncher.deobf.js, line 358522.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/roomlogs/WiredRoomLogListTableObject.as
// Obfuscated name: _ia990eddaf7d2af

class a {
  constructor(e, r) {
    this.var_63 = e;
    this._element = r;
  }
  static {
    n(this, "WiredRoomLogListTableObject");
  }
  static COLOR_INFO = 4607;
  static COLOR_WARN = 11757568;
  static COLOR_ERROR = 14362624;
  static COLOR_DEBUG = 10158534;
  static COLORS = [a.COLOR_INFO, a.COLOR_WARN, a.COLOR_ERROR, a.COLOR_DEBUG];
  get identifier() {
    return String(this._element.id);
  }
  get element() {
    return this._element;
  }
  getTableCell(e) {
    let r = a.COLORS[this._element.logLevel] ?? a.COLOR_INFO;
    switch (e) {
      case D5.LOG_COLUMN_TIMESTAMP:
        return new TableCell(TableCell.name_2, this._element._r9d1c666b9a0c07, !1, !0, null, null, !1, null, r);
      case D5.const_563:
        return new TableCell(
          TableCell.name_2,
          this.localize(`wiredmenu.logs_overview.log_source.${this._element._r515ac7f6f04027}`),
          !1,
          !1,
          null,
          null,
          !1,
          null,
          r,
        );
      case D5.const_1376:
        return new TableCell(
          TableCell.name_2,
          this.localize(`wiredmenu.logs_overview.log_level.${this._element.logLevel}`),
          !1,
          !1,
          null,
          null,
          !1,
          null,
          r,
        );
      case D5.LOG_COLUMN_MESSAGE:
        return new TableCell(TableCell.name_2, this._element._rba6ccde683fe3f, !1, !0, null, null, !1, null, r);
      default:
        return new TableCell(TableCell.name_2, "", !1, !1, null, null, !1, null, r);
    }
  }
  isPropertyUpdated(e, r) {
    return !1;
  }
  isUpdated(e) {
    return !1;
  }
  localize(e) {
    return this.var_63.localizationManager.getLocalization(e);
  }
}
