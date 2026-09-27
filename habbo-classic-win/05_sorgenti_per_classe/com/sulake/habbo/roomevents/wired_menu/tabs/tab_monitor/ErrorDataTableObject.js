// Extracted from HabboAirLauncher.deobf.js, line 356928.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/tab_monitor/ErrorDataTableObject.as
// Obfuscated name: _i9a463af1557843

class a {
  constructor(e, r, t) {
    this.var_5164 = e;
    this._data = r;
    this._localization = t;
  }
  static {
    n(this, "ErrorDataTableObject");
  }
  get data() {
    return this._data;
  }
  get identifier() {
    return String(this._data._rb51a2ad9d52a4d);
  }
  isPropertyUpdated(e, r) {
    let t = r.data;
    switch (e) {
      case hh.var_5323:
        return this._data._r603e2cbbdf146d !== t._r603e2cbbdf146d;
      case hh.LOG_COLUMN_LATEST:
        return this._data._rd2e0e8dda6a89b !== t._rd2e0e8dda6a89b;
      default:
        return !1;
    }
  }
  isUpdated(e) {
    let r = e.data;
    return (
      this._data._rd2e0e8dda6a89b !== r._rd2e0e8dda6a89b || this._data._r603e2cbbdf146d !== r._r603e2cbbdf146d
    );
  }
  getTableCell(e) {
    switch (e) {
      case hh.LOG_COLUMN_TYPE:
        return new TableCell(TableCell.var_1800, this._data.errorName, !1, !1, null, this._r90d1ee09cf9e42);
      case hh.var_5806:
        return new TableCell(TableCell.name_2, this._data.category);
      case hh.var_5323:
        return new TableCell(TableCell.name_2, String(this._data._r603e2cbbdf146d));
      case hh.LOG_COLUMN_LATEST:
        return this._data._rd2e0e8dda6a89b < 0
          ? new TableCell(TableCell.name_2, "/")
          : new TableCell(
              TableCell.name_2,
              ra.getFriendlyTime(this._localization, this._data._rd2e0e8dda6a89b / 1e3, ".ago", 3),
              !1,
              !1,
              null,
              null,
              !1,
              this.timestampString,
            );
      default:
        return new TableCell(TableCell.name_2, "");
    }
  }
  _r90d1ee09cf9e42 = n(() => {
    this.var_5164._r71adcf720599bb(this._data);
  }, "_r90d1ee09cf9e42");
  get timestampString() {
    let e = Date.now() - this._data._rd2e0e8dda6a89b;
    return ((e -= e % 1e3), a.convertTimestamp(e));
  }
  static convertTimestamp(e) {
    let r = new Date(e),
      t = r.getFullYear(),
      i = r.getMonth() + 1,
      s = r.getDate(),
      o = r.getHours(),
      d = r.getMinutes(),
      c = r.getSeconds();
    return `${t}-${a.addLeadingZero(i)}-${a.addLeadingZero(s)} ${a.addLeadingZero(o)}:${a.addLeadingZero(d)}:${a.addLeadingZero(c)}`;
  }
  static addLeadingZero(e) {
    return e < 10 ? `0${e}` : String(e);
  }
}
