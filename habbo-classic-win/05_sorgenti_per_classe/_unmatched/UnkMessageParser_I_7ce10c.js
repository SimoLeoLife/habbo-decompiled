// Extracted from HabboAirLauncher.deobf.js, line 104644.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7ce10cf4988701

class {
    static {
      n(this, "UnkMessageParser_I_7ce10c");
    }
    static {
      i$r(this, "UnkMessageParser_I_7ce10c");
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
