// Estratto da HabboAirLauncher.deobf.js, riga 78263.

class {
    static {
      n(this, "_id614a2dde95d89");
    }
    static {
      Evr(this, "_id614a2dde95d89");
    }
    _errorCode = 0;
    get errorCode() {
      return this._errorCode;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._errorCode = e.readInteger()), !0);
    }
  }
