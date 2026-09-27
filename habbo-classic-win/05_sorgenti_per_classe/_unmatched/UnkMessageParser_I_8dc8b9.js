// Extracted from HabboAirLauncher.deobf.js, line 86869.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8dc8b934c71b80

class {
    static {
      n(this, "UnkMessageParser_I_8dc8b9");
    }
    static {
      YEr(this, "UnkMessageParser_I_8dc8b9");
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
