// Extracted from HabboAirLauncher.deobf.js, line 78263.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id614a2dde95d89

class {
    static {
      n(this, "UnkMessageParser_I_d614a2");
    }
    static {
      Evr(this, "UnkMessageParser_I_d614a2");
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
