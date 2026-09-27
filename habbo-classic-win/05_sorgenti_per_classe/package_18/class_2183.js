// Estratto da HabboAirLauncher.deobf.js, riga 78655.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_18/class_2183.as
// Nome offuscato: _ice1ab7b483c79e

class {
    static {
      n(this, "class_2183");
    }
    static {
      awr(this, "class_2183");
    }
    _errorCode = 0;
    _userId = 0;
    var_1065 = "";
    get errorCode() {
      return this._errorCode;
    }
    get userId() {
      return this._userId;
    }
    get message() {
      return this.var_1065;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._errorCode = e.readInteger()),
        (this._userId = e.readInteger()),
        (this.var_1065 = e.readString()),
        !0
      );
    }
  }
