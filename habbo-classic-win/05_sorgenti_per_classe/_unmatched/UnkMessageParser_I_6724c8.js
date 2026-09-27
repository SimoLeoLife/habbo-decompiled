// Extracted from HabboAirLauncher.deobf.js, line 84463.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i6724c80cb93093

class {
    static {
      n(this, "UnkMessageParser_I_6724c8");
    }
    static {
      bxr(this, "UnkMessageParser_I_6724c8");
    }
    _userId = 0;
    flush() {
      return !1;
    }
    parse(e) {
      return ((this._userId = e.readInteger()), !0);
    }
    get userId() {
      return this._userId;
    }
  }
