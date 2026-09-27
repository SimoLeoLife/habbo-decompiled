// Estratto da HabboAirLauncher.deobf.js, riga 86869.

class {
    static {
      n(this, "_i8dc8b934c71b80");
    }
    static {
      YEr(this, "_i8dc8b934c71b80");
    }
    _errorCode = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._errorCode = e.readInteger()), !0);
    }
    get errorCode() {
      return this._errorCode;
    }
  }
