// Estratto da HabboAirLauncher.deobf.js, riga 99548.

class {
    static {
      n(this, "_i1b4398dc4d8fdb");
    }
    static {
      tjr(this, "_i1b4398dc4d8fdb");
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
