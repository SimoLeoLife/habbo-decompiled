// Estratto da HabboAirLauncher.deobf.js, riga 104644.

class {
    static {
      n(this, "_i7ce10cf4988701");
    }
    static {
      i$r(this, "_i7ce10cf4988701");
    }
    _errorCode = -1;
    get errorCode() {
      return this._errorCode;
    }
    flush() {
      return ((this._errorCode = -1), !0);
    }
    parse(e) {
      return e ? ((this._errorCode = e.readInteger()), !0) : !1;
    }
  }
