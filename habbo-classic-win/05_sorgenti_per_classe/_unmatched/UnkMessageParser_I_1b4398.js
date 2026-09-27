// Extracted from HabboAirLauncher.deobf.js, line 99548.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1b4398dc4d8fdb

class {
    static {
      n(this, "UnkMessageParser_I_1b4398");
    }
    static {
      tjr(this, "UnkMessageParser_I_1b4398");
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
