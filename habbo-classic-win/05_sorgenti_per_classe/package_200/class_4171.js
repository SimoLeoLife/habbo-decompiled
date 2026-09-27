// Estratto da HabboAirLauncher.deobf.js, riga 77315.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_200/class_4171.as
// Nome offuscato: _i8dca44a640159f

class {
    static {
      n(this, "class_4171");
    }
    static {
      zmr(this, "class_4171");
    }
    _schedulingStr = "";
    _code = "";
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._schedulingStr = e.readString()),
        (this._code = e.readString()),
        !0
      );
    }
    get schedulingStr() {
      return this._schedulingStr;
    }
    get code() {
      return this._code;
    }
  }
