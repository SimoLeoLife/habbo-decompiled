// Estratto da HabboAirLauncher.deobf.js, riga 105926.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_103/class_3283.as
// Nome offuscato: _i827d68187cbe3e

class {
    static {
      n(this, "class_3283");
    }
    static {
      QZr(this, "class_3283");
    }
    var_2440 = 0;
    _errorCode = 0;
    parse(e) {
      return (
        (this.var_2440 = e.readInteger()),
        (this._errorCode = e.readInteger()),
        !0
      );
    }
    flush() {
      return ((this.var_2440 = 0), (this._errorCode = 0), !0);
    }
    get roomId() {
      return this.var_2440;
    }
    get errorCode() {
      return this._errorCode;
    }
  }
